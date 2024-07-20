<script>
	const TITLE = "리서치";

	import { onMount } from "svelte";
	import { goto } from "$app/navigation";

	import { comma, calculate_age } from "@/lib/js/common.js";
	import { gender, year_of_birth } from "$lib/store/profiles_store.js";
	import Header from "@/lib/components/ui/Header/+page.svelte";
	import Bottom_nav from "@/lib/components/ui/Bottom_nav/+page.svelte";
	import Icon from "@/lib/components/ui/Icon/+page.svelte";
	import Chip from "@/lib/components/ui/Chip/+page.svelte";
	import research_category_png from "@/lib/img/common/research_category/research_category.png";
	import etc_category_png from "@/lib/img/common/research_category/etc_category.png";

	export let data;

	let { supabase, session, available_research } = data;
	$: ({ supabase, session } = data);

	let available_researches = [];
	let selected_category = "전체";
	let last_research_id = "";
	let is_infinite_loading = false;

	onMount(() => {
		available_researches = filtering_research(available_research);

		console.log("available_researches", available_researches);

		last_research_id = available_researches[available_researches.length - 1]?.id || "";
		infinite_scroll();
	});

	/**
	 * 설문조사 필터링
	 * 1. 참여한 적 있는지
	 * 2. 스크리닝 질문 통과 했는지
	 * @param researches
	 */
	const filtering_research = (researches) => {
		return researches.filter((item) => {
			return (
				!item.participant_research.some((research) => research.users_id === session.user_id) &&
				!item.screening_user.some(
					(users) => users.users_id === session.user_id && users.status === false
				)
			);
		});
	};

	/**
	 * 무한스크롤 함수
	 */
	const infinite_scroll = () => {
		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (available_researches.length >= 10 && entry.isIntersecting) {
					is_infinite_loading = true;
					setTimeout(() => {
						load_more_data();
					}, 1500);
				}
			});
		});

		const target = document.getElementById("infinite_scroll");
		observer.observe(target);
	};

	/**
	 * 무한스크롤 데이터 더 가져오기
	 */
	const load_more_data = async () => {
		const available_research = await select_available_research_filtering(
			selected_category,
			last_research_id,
			$gender,
			calculate_age($year_of_birth)
		);
		is_infinite_loading = false;

		//더 불러올 값이 있을때만 조회
		if (available_research.length !== 0) {
			available_researches = filtering_research([...available_researches, ...available_research]);

			last_research_id = available_research[available_research.length - 1]?.id || "";
		}
	};

	/**
	 * 카테고리 설문조사들 조회
	 */
	const change_category = async (category) => {
		selected_category = category;

		available_researches = filtering_research(
			await select_available_research_filtering(
				category,
				"",
				$gender,
				calculate_age($year_of_birth)
			)
		);
		last_research_id = available_researches[available_researches.length - 1]?.id || "";
	};

	const select_available_research_filtering = async (category, last_research_id, gender, age) => {
		let query = supabase
			.from("available_research")
			.select(
				`id, 
        title, 
        category, 
        images,
        title,
        participant_num,
        recruitment_num,
        expected_time,
        price,
        screening_research(id, questions),
        screening_user(user_id, status),
        participant_research(user_id)`
			)
			.order("id", { ascending: false })
			.lte("min_age", age)
			.gte("max_age", age)
			.limit(10);

		if (category !== "전체") {
			query = query.eq("category", category);
		}
		if (last_research_id !== "") {
			query = query.lt("id", last_research_id);
		}
		gender === "남자"
			? (query = query.neq("gender", "여자"))
			: (query = query.neq("gender", "남자"));

		const { data, error } = await query;

		if (error) throw new Error(`Failed to select_available_research_filtering: ${error.message}`);
		return data ?? [];
	};
</script>

<svelte:head>
	<title>{TITLE}</title>
	<meta name="description" content={TITLE} />
</svelte:head>

<div class="min-h-screen bg-gray-200">
	<Header nav_class="bg-gray-200">
		<h1 slot="left" class="text-xl font-bold text-gray-800">{TITLE}</h1>
		<button slot="right" on:click={() => goto("/alarm")} class="flex items-center">
			<svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
				<Icon name="alarm" />
				<!-- <circle cx="17.5" cy="4.5" r="3.5" fill={colors.error} /> -->
			</svg>
		</button>
	</Header>

	<main>
		<div class="mt-5 flex flex-wrap gap-4 px-5">
			<label class="inline-flex items-center">
				<input
					on:click={() => change_category("전체")}
					type="radio"
					name="options"
					value="전체"
					class="peer hidden"
					checked
				/>
				<span
					class="cursor-pointer rounded-full bg-gray-200 px-[14px] py-2 text-sm font-semibold text-gray-700 transition-colors duration-200 peer-checked:bg-gray-950 peer-checked:text-white"
				>
					전체
				</span>
			</label>
			<label class="inline-flex items-center">
				<input
					on:click={() => change_category("설문조사")}
					type="radio"
					name="options"
					value="설문조사"
					class="peer hidden"
				/>
				<span
					class="cursor-pointer rounded-full bg-gray-200 px-[14px] py-2 text-sm font-semibold text-gray-700 transition-colors duration-200 peer-checked:bg-gray-950 peer-checked:text-white"
				>
					설문조사
				</span>
			</label>
			<label class="inline-flex items-center">
				<input
					on:click={() => change_category("인터뷰")}
					type="radio"
					name="options"
					value="인터뷰"
					class="peer hidden"
				/>
				<span
					class="cursor-pointer rounded-full bg-gray-200 px-[14px] py-2 text-sm font-semibold text-gray-700 transition-colors duration-200 peer-checked:bg-gray-950 peer-checked:text-white"
				>
					인터뷰
				</span>
			</label>
			<label class="inline-flex items-center">
				<input
					on:click={() => change_category("기타")}
					type="radio"
					name="options"
					value="기타"
					class="peer hidden"
				/>
				<span
					class="cursor-pointer rounded-full bg-gray-200 px-[14px] py-2 text-sm font-semibold text-gray-700 transition-colors duration-200 peer-checked:bg-gray-950 peer-checked:text-white"
				>
					기타
				</span>
			</label>
		</div>

		{#each available_researches as research}
			<div class="mx-5 mt-5">
				<article class="flex h-[153px] rounded-[14px] bg-white p-5">
					{#if research.images.length > 0}
						<img
							src={research.images[0].uri}
							alt={research.category}
							class="mr-5 h-[102px] w-[102px] flex-shrink-0 rounded-xl object-cover"
						/>
					{:else}
						<img
							src={research.category === "설문조사" ? research_category_png : etc_category_png}
							alt={research.category}
							class="mr-5 h-[102px] w-[102px] flex-shrink-0 rounded-xl object-cover"
						/>
					{/if}

					<div class="flex flex-1 flex-col overflow-hidden overflow-ellipsis">
						<div class="flex items-center">
							<div class="mr-1.5">
								<Chip name={research.category} />
							</div>

							<p class="rounded-sm bg-gray-200 px-2 py-1 text-xs text-gray-950">
								{research.expected_time}분
							</p>
						</div>

						<p class="mt-2 line-clamp-2 h-9 text-sm font-semibold">
							{#if research.screening_research.length > 0}
								{research.screening_research[0].questions[0].question}
							{:else}
								{research.title}
							{/if}
						</p>

						<p class="mt-2.5 font-bold text-primary">{comma(research.price)}원</p>

						<div class="mt-1.5 h-1 w-full rounded-full bg-gray-300 dark:bg-gray-300">
							<div
								class="h-1 rounded-full bg-primary"
								style={`width: ${(research.participant_num / research.recruitment_num) * 100}%`}
							/>
						</div>
					</div>
				</article>
			</div>
		{/each}

		<div id="infinite_scroll" />

		<div class="flex justify-center py-4">
			<div
				class={`h-8 w-8 animate-spin rounded-full border-b-2 border-t-2 border-primary ${
					is_infinite_loading === false ? "hidden" : ""
				}`}
			/>
		</div>
	</main>
</div>

<Bottom_nav />
