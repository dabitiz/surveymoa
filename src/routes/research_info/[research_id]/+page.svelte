<script>
	import { onMount } from "svelte";
	import { InAppBrowser } from "@capgo/inappbrowser";

	import { PUBLIC_CLIENT_URL } from "$env/static/public";
	import {
		gender,
		year_of_birth,
		point,
		update_profiles_store
	} from "$lib/store/profiles_store.js";
	import { comma, calculate_d_day, calculate_age, is_mobile_app } from "@/lib/js/common.js";
	import { operating_system, platform } from "@/lib/store/device_store";
	import Header from "@/lib/components/ui/Header/+page.svelte";
	import Modal from "@/lib/components/ui/Modal/+page.svelte";
	import Icon from "@/lib/components/ui/Icon/+page.svelte";
	import research_category_png from "@/lib/img/common/research_category/research_category.png";
	import etc_category_png from "@/lib/img/common/research_category/etc_category.png";
	import { show_toast } from "$lib/js/common.js";

	export let data;
	let { research } = data;
	$: ({ session, supabase } = data);

	const TITLE = research.category;

	let research_status = "";
	let is_admin = false;
	let research_info = {
		id: "",
		status: "",
		category: "",
		images: [],
		form_link: "",
		title: "",
		explanation: "",
		start_date: new Date(),
		end_date: new Date(),
		participant_num: 0,
		recruitment_num: 0,
		min_age: 0,
		max_age: 70,
		gender: "",
		expected_time: 5,
		price: 500,
		user_id: "",
		screening_research: [],
		screening_user: [],
		participant_research: []
	};

	let screening_info = {
		is_modal: false,
		selected_questions: [],
		page_count: 0
	};

	onMount(async () => {
		research_info = research;
		is_admin = session.user.id === research.user_id ? true : false;
		research_status = check_research_status(research_info);

		if (
			research_status === "참여 하기" &&
			research_info.screening_research.length > 0 &&
			!is_admin
		) {
			const is_screening_participation = research_info.screening_user.some(
				(user) => user.user_id === session.user.id
			);

			if (!is_screening_participation) {
				initialize_screening_questions();
				screening_info.is_modal = true;
			}
		}
	});

	const check_research_status = (research_info) => {
		const is_participate = research_info.participant_research.some(
			(research) => research.user_id === session.user.id
		);
		if (is_participate) return "참여 완료";

		const is_screening_false = research_info.screening_user.some(
			(user) => user.user_id === session.user.id && user.status === false
		);
		if (is_screening_false) return "참여 대상이 아닙니다";

		const d_day_research = calculate_d_day(research_info.end_date);
		const age = calculate_age($year_of_birth);

		if (
			d_day_research === "마감" ||
			research_info.participant_num >= research_info.recruitment_num
		) {
			return "참여 마감";
		}

		if (
			!(research_info.min_age <= age && age <= research_info.max_age) ||
			(research_info.gender === "남자" && $gender !== "남자") ||
			(research_info.gender === "여자" && $gender !== "여자")
		) {
			return "참여 대상이 아닙니다";
		}

		return "참여 하기";
	};

	/**
	 * 스크리닝 질문 설정
	 * 질문의 모든 status 값을 false로 변경하고 나중에 실제 질문과 비교
	 */
	const initialize_screening_questions = () => {
		screening_info.selected_questions = research_info.screening_research[0].questions.map(
			(item) => ({
				question: item.question,
				choices: item.choices.map((choice) => ({ ...choice, status: false }))
			})
		);
	};

	const next_question = async () => {
		const current_questions = screening_info.selected_questions[screening_info.page_count];
		const original_questions =
			research_info.screening_research[0].questions[screening_info.page_count];

		if (check_screening_equal(current_questions.choices, original_questions.choices)) {
			if (screening_info.page_count < screening_info.selected_questions.length - 1) {
				screening_info.page_count++;
			} else {
				await update_screening(true);
			}
		} else {
			await update_screening(false);
		}
	};

	/**
	 * 스크리닝 질문 답변이 일치하는지 검사
	 */
	const check_screening_equal = (current_choices, original_choices) => {
		return current_choices.every((choice, idx) => choice.status === original_choices[idx].status);
	};

	const participate_research = async (form_link) => {
		await InAppBrowser.openWebView({
			url: form_link,
			//if true, the browser will be presented after the page is loaded, if false, the browser will be presented immediately.
			//isPresentAfterPageLoad가 있어야 구글폼에서 InAppBrowser.executeScript가 동작
			isPresentAfterPageLoad: true,
			closeModal: true,
			closeModalTitle: "응답을 그만두시겠습니까?",
			closeModalDescription: "",
			closeModalCancel: "이어하기",
			closeModalOk: "그만두기"
		});
		await InAppBrowser.addListener("urlChangeEvent", async (event) => {
			await InAppBrowser.executeScript({
				code: `if(document.getElementsByClassName('vHW8K').length > 0 === true){
														location.href = "${PUBLIC_CLIENT_URL}/research_info/${research.id}";}`
			});
			if (event.url === `${PUBLIC_CLIENT_URL}/research_info/${research.id}`) {
				const participant_research = await insert_participant_research();
				research_info = { ...research_info, participant_research };
				research_status = check_research_status(research_info);

				await insert_point_change_history("설문보상");
				update_profiles_store("point", $point + research_info.price);

				await InAppBrowser.close();
				show_toast("success", "설문에 참여해주셔서 감사합니다.");
			}
		});
		await InAppBrowser.addListener("closeEvent", async (event) => {
			await InAppBrowser.removeAllListeners();
		});
	};

	const update_screening = async (status) => {
		const screening_user = await insert_screening_user_status(status);
		research_info = { ...research_info, screening_user };
		research_status = check_research_status(research_info);

		screening_info.selected_questions = [];
		screening_info.page_count = 0;
		screening_info.is_modal = false;
	};

	const insert_screening_user_status = async (status) => {
		const { data, error } = await supabase
			.from("screening_user")
			.insert([{ status: status, user_id: session.user.id, research_id: research_info.id }])
			.select("*")
			.eq("research_id", research_info.id);

		if (error) throw new Error(`Failed to insert_screening_user_status: ${error.message}`);
		return data || [];
	};

	const insert_participant_research = async () => {
		const { data, error } = await supabase
			.from("participant_research")
			.insert([{ user_id: session.user.id, research_id: research_info.id }])
			.select("*")
			.eq("research_id", research_info.id);

		if (error) throw new Error(`Failed to insert_participant_research: ${error.message}`);
		return data || [];
	};

	const insert_point_change_history = async (category) => {
		const { error } = await supabase.from("point_change_history").insert([
			{
				category,
				behavior: research_info.title,
				old_point: $point,
				new_point: $point + research_info.price,
				user_id: session.user.id
			}
		]);

		if (error) throw new Error(`Failed to insert_point_change_history: ${error.message}`);
	};
</script>

<svelte:head>
	<title>{TITLE} | 설문모아</title>
	<meta name="description" content={TITLE} />
</svelte:head>

<Header>
	<button slot="left" class="flex items-center" on:click={() => history.back()}>
		<Icon name="left_arrow" />
	</button>
	<h1 slot="center" class="font-semibold">{TITLE}</h1>
</Header>

<main>
	{#if research.images.length > 0}
		<img
			src={research.images[0].uri}
			alt={research.category}
			class="h-[175px] w-full flex-shrink-0 object-cover"
		/>
	{:else}
		<img
			src={research.category === "설문조사" ? research_category_png : etc_category_png}
			alt={research.category}
			class="h-[175px] w-full flex-shrink-0 object-cover"
		/>
	{/if}

	<div class="mx-4 mt-6">
		<h1 class="text-lg font-semibold">
			{screening_info.selected_questions.length > 0
				? "스크리닝 질문에 응답해 주세요"
				: research.title}
		</h1>

		<p class="mt-4 text-xl font-bold text-primary">{comma(research.price)}원</p>

		<div class="mt-4 flex flex-col gap-2.5">
			<p class="text-sm">
				<span class="pr-4 text-gray-800">소요 시간</span><span>{research.expected_time}분</span>
			</p>

			<p class="text-sm">
				<span class="pr-4 text-gray-800">마감 날짜</span><span
					>D - {calculate_d_day(research.end_date)}</span
				>
			</p>

			<p class="text-sm">
				<span class="pr-4 text-gray-800">모집 정보</span><span
					>{research.min_age} ~ {research.max_age}세 성별 {research.gender}</span
				>
			</p>
			<p class="flex justify-center text-sm">
				<span class="flex-shrink-0 pr-8 text-gray-800">진행률</span>
				<span class="mt-1.5 h-2 w-full rounded-full bg-gray-300 dark:bg-gray-300">
					<div
						class="h-2 rounded-full bg-primary"
						style={`width: ${(research.participant_num / research.recruitment_num) * 100}%`}
					/>
				</span>
			</p>
		</div>
	</div>

	<div class="mx-4 mt-6">
		<div class="min-h-[184px] w-full rounded-[7px] bg-gray-50 px-5 py-4">
			<pre class="text-sm">{screening_info.selected_questions.length > 0
					? `하단의 참여 하기 버튼을 눌러 
스크리닝 질문에 응답해 주세요!`
					: research.explanation}
			</pre>
		</div>
	</div>

	{#if !is_admin}
		<div class="fixed bottom-0 mx-auto w-full bg-white px-5 py-3.5 md:w-1/2">
			{#if research_status === "참여 하기"}
				<button
					on:click={async () => {
						if (screening_info.selected_questions.length > 0) {
							screening_info.is_modal = true;
						} else {
							if (is_mobile_app($platform, $operating_system)) {
								participate_research(research.form_link);
							} else {
								show_toast("info", "앱에서만 참여 가능한 조사에요!");
							}
						}
					}}
					class="btn btn-primary w-full">{research_status}</button
				>
			{:else}
				<button class="btn w-full" disabled="true">{research_status} </button>
			{/if}
		</div>
	{/if}
</main>

<Modal bind:is_modal_open={screening_info.is_modal} modal_position="bottom">
	<div class="px-5">
		{#if screening_info.selected_questions.length > 0}
			<h3 class="mt-10 font-bold">
				{screening_info.selected_questions[screening_info.page_count].question}
			</h3>

			<div class="mt-4">
				{#each screening_info.selected_questions[screening_info.page_count].choices as choice}
					<div class="py-2">
						<label>
							<div
								class="flex cursor-pointer items-center rounded-lg px-5 py-4 transition-colors duration-200 ease-in-out"
								class:bg-gray-50={!choice.status}
								class:bg-[#e9f0ff]={choice.status}
								class:border={choice.status}
								class:border-primary={choice.status}
							>
								<input
									bind:checked={choice.status}
									type="checkbox"
									class="mr-3 h-5 w-5 appearance-none rounded-full border-2 border-gray-300 bg-white checked:border-[6px] checked:border-primary"
								/>

								<p class="text-sm">
									{choice.choice}
								</p>
							</div>
						</label>
					</div>
				{/each}
			</div>
		{/if}
	</div>
	<div class="sticky bottom-0 w-full bg-white px-5 py-3.5">
		<button on:click={next_question} class="btn btn-primary w-full">다음</button>
	</div>
</Modal>
