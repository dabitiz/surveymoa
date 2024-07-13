<script>
	const TITLE = "조사 등록";

	import { goto } from "$app/navigation";

	import Research_api from "@/lib/api/research_api.js";
	import Bucket_research_api from "@/lib/api/bucket_research_api.js";
	import Research_payment_info_api from "@/lib/api/research_payment_info_api.js";
	import { update_global_store } from "@/lib/store/global_store";
	import { comma } from "@/lib/js/common";
	import { show_toast } from "@/lib/js/common.js";

	import Modal from "@/lib/components/ui/Modal/+page.svelte";
	import Set_category from "@/lib/partials/regi_research/Set_category/+page.svelte";
	import Set_basic from "@/lib/partials/regi_research/Set_basic/+page.svelte";
	import Set_detail from "@/lib/partials/regi_research/Set_detail/+page.svelte";
	import Set_remarks from "@/lib/partials/regi_research/Set_remarks/+page.svelte";
	import Paying from "@/lib/partials/regi_research/Paying/+page.svelte";
	import Header from "@/lib/components/ui/Header/+page.svelte";
	import Icon from "@/lib/components/ui/Icon/+page.svelte";

	export let data;
	let { supabase, session, account } = data;
	$: ({ supabase, session } = data);
	const research_api = new Research_api(supabase, session);
	const bucket_research_api = new Bucket_research_api(supabase, session);
	const research_payment_info_api = new Research_payment_info_api(supabase, session);

	let page_count = 1;

	let is_back_modal = false;

	let research_info = {
		category: "",
		images: [],
		form_link: "",
		title: "",
		explanation: "",
		start_date: new Date(),
		end_date: new Date(),
		recruitment_num: 50,
		min_age: 1,
		max_age: 70,
		gender: "all",
		expected_time: 5,
		remarks: ""
	};

	let research_payment_info = {
		amount: 0,
		payment_method: ""
	};

	//전체 금액의 20% 수수료
	$: research_payment_info.amount =
		research_info.expected_time * 100 * research_info.recruitment_num * 1.2;

	/**
	 * 다음 버튼 disabled 검사
	 */
	const is_next_btn_disabled = (research_info, page_count, research_payment_info, account) => {
		switch (page_count) {
			case 1:
				return research_info.category === "";
			case 2:
				return (
					research_info.form_link === "" ||
					research_info.title === "" ||
					research_info.explanation === ""
				);
			case 3:
				return (
					research_info.start_date === null ||
					research_info.end_date === null ||
					research_info.gender === ""
				);
			case 4:
				return research_info.remarks === "";
			case 5:
				return (
					Object.keys(account).length === 0 ||
					research_payment_info.amount === 0 ||
					research_payment_info.payment_method === ""
				);
			default:
				return true;
		}
	};

	const go_prev = () => {
		if (page_count === 1) {
			is_back_modal = true;
		} else {
			page_count -= 1;
		}
	};

	/**
	 * 조사 등록 다음페이지 이동
	 */
	const go_next_page = async () => {
		if (page_count === 5) {
			await save_research();
		} else {
			page_count += 1;
		}
	};

	const save_research = async () => {
		update_global_store("loading", true);
		try {
			const saved_images = await Promise.all(
				research_info.images.map(async (img_file) => {
					const file_ext = img_file.name.split(".").pop();
					const file_path = `${session.user.id}/${Date.now()}.${file_ext}`;
					await bucket_research_api.upload_research_url(file_path, img_file);
					return {
						uri: `https://glamuiwujgrlmauesueb.supabase.co/storage/v1/object/public/research/${file_path}`
					};
				})
			);

			const inserted_research = await research_api.insert_research({
				...research_info,
				images: saved_images
			});

			const inserted_research_id = inserted_research.id;

			await research_payment_info_api.insert_research_payment_info({
				research_id: inserted_research_id,
				amount: research_payment_info.amount,
				payment_method: research_payment_info.payment_method,
				bank_name: account.bank_name,
				account_num: account.account_num
			});

			goto("regi_research/completed_paying", {
				state: {
					amount: research_payment_info.amount
				}
			});
			show_toast("success", "조사가 신청되었습니다.");
		} finally {
			update_global_store("loading", false);
		}
	};
</script>

<svelte:head>
	<title>{TITLE} | 설문모아</title>
	<meta name="description" content={TITLE} />
</svelte:head>

<Header nav_class="bg-white">
	<button slot="left" class="flex items-center" on:click={go_prev}>
		<Icon name="left_arrow" />
	</button>
	<h1 slot="center" class="font-semibold">{TITLE}</h1>
</Header>

<main>
	{#if page_count < 5}
		<div class="h-1 w-full rounded-full bg-gray-200 dark:bg-gray-300">
			<div class="h-1 rounded-full bg-primary" style={`width: ${page_count * (100 / 4)}%`} />
		</div>
	{/if}

	{#if page_count === 1}
		<Set_category bind:category={research_info.category} />
	{:else if page_count === 2}
		<Set_basic
			bind:images={research_info.images}
			bind:form_link={research_info.form_link}
			bind:title={research_info.title}
			bind:explanation={research_info.explanation}
		/>
	{:else if page_count === 3}
		<Set_detail
			bind:start_date={research_info.start_date}
			bind:end_date={research_info.end_date}
			bind:recruitment_num={research_info.recruitment_num}
			bind:min_age={research_info.min_age}
			bind:max_age={research_info.max_age}
			bind:gender={research_info.gender}
			bind:expected_time={research_info.expected_time}
		/>
	{:else if page_count === 4}
		<Set_remarks bind:remarks={research_info.remarks} />
	{:else if page_count === 5}
		<Paying
			{supabase}
			{session}
			bind:account
			bind:category={research_info.category}
			bind:images={research_info.images}
			bind:title={research_info.title}
			bind:start_date={research_info.start_date}
			bind:end_date={research_info.end_date}
			bind:recruitment_num={research_info.recruitment_num}
			bind:min_age={research_info.min_age}
			bind:max_age={research_info.max_age}
			bind:gender={research_info.gender}
			bind:expected_time={research_info.expected_time}
			bind:amount={research_payment_info.amount}
			bind:payment_method={research_payment_info.payment_method}
		/>
	{/if}

	<div class="pb-safe fixed bottom-3.5 left-0 right-0 mx-4 flex justify-center">
		<button
			class="btn btn-primary w-full md:w-1/2"
			on:click={go_next_page}
			disabled={is_next_btn_disabled(research_info, page_count, research_payment_info, account)}
			>{page_count === 5 ? `${comma(research_payment_info.amount)}원 결제하기` : "다음"}</button
		>
	</div>
</main>

<Modal bind:is_modal_open={is_back_modal} modal_position="center">
	<div class="p-5">
		<h3 class="text-lg font-semibold">조사 등록을 다음에 하시겠어요?</h3>

		<div class="mt-12 flex gap-2">
			<button
				class="btn flex-1 border-gray-300 bg-gray-300"
				on:click={() => {
					is_back_modal = false;
				}}>계속</button
			>

			<button on:click={() => history.back()} class="btn btn-error flex-1 text-white"
				>다음에 할게요</button
			>
		</div>
	</div>
</Modal>
