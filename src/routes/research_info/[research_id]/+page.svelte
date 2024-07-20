<script>
	import { comma, calculate_d_day } from "@/lib/js/common.js";

	import Header from "@/lib/components/ui/Header/+page.svelte";
	import Bottom_nav from "@/lib/components/ui/Bottom_nav/+page.svelte";
	import Modal from "@/lib/components/ui/Modal/+page.svelte";
	import Icon from "@/lib/components/ui/Icon/+page.svelte";
	import research_category_png from "@/lib/img/common/research_category/research_category.png";
	import etc_category_png from "@/lib/img/common/research_category/etc_category.png";

	export let data;

	let { supabase, session, research } = data;

	const TITLE = research.category;
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

<main class="pb-[150px]">
	<div class="h-[175px] w-full bg-green-500"></div>
	{#if research.images.length > 0}
		<img
			src={research.images[0].uri}
			alt={research.category}
			class="mr-5 h-[17ㅋpx] w-full flex-shrink-0 rounded-xl object-cover"
		/>
	{:else}
		<img
			src={research.category === "설문조사" ? research_category_png : etc_category_png}
			alt={research.category}
			class="mr-5 h-[88px] w-full flex-shrink-0 rounded-xl object-cover"
		/>
	{/if}

	<p class="mx-5 mt-6 text-lg font-semibold">{research.title}</p>

	<div class="mx-4 mt-4">
		<p class="text-xl font-bold text-primary">{comma(research.price)}원</p>

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
		<div class="h-[184px] w-full overflow-y-scroll rounded-[7px] bg-gray-50 px-5 py-4">
			<pre class="text-sm">{research.explanation}</pre>
		</div>
	</div>

	<div class="pb-safe fixed bottom-3.5 left-0 right-0 mx-4 flex justify-center">
		<button class="btn btn-primary w-full text-white md:w-1/2">다음</button>
	</div>
</main>

<!-- <Modal bind:is_modal_open={isModalOpen} modal_position="bottom">
	<h3 class="font-bold">현재 직업을 선택해 주세요</h3>
	<div
		class="mt-[23px] flex items-center rounded-lg border border-primary bg-[#e9f0ff] py-4 pl-5"
	>
		<button
			class="mr-3 flex h-5 w-5 items-center justify-center rounded-full bg-primary font-bold text-white"
		>
			<div class="h-2 w-2 rounded-full bg-white"></div>
		</button>

		<p>학생</p>
	</div>

	<div class="mt-[8px] flex items-center rounded-lg bg-gray-50 py-4 pl-5">
		<button
			class="mr-3 flex h-5 w-5 items-center justify-center rounded-full bg-gray-700 font-bold text-white"
		>
			<div class="h-4 w-4 rounded-full bg-white"></div>
		</button>

		<p>주부</p>
	</div>
	<button class="btn btn-primary mt-[46px] w-full rounded-xl text-white">다음</button>
</Modal> -->
