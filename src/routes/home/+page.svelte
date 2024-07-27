<script>
	const TITLE = "설문모아";

	import { goto } from "$app/navigation";
	import { onMount } from "svelte";

	import { point, rating } from "$lib/store/profiles_store.js";
	import Header from "@/lib/components/ui/Header/+page.svelte";
	import Bottom_nav from "@/lib/components/ui/Bottom_nav/+page.svelte";
	import Banner from "@/lib/components/Banner/+page.svelte";
	import Icon from "@/lib/components/ui/Icon/+page.svelte";
	import guide_png from "@/lib/img/common/banner/guide.png";
	import leave_opinion_png from "@/lib/img/common/banner/leave_opinion.png";
	import available_research_png from "@/lib/img/partials/home/available_research.png";
	import star_rating_png from "@/lib/img/partials/home/star_rating.png";
	import commissioned_research_png from "@/lib/img/partials/home/commissioned_research.png";

	export let data;
	let { available_research, research_comissioned_length } = data;
	$: ({ session } = data);

	let research_category_length = 0;

	let images = [
		{ title: "guide", src: guide_png, url: "/guide" },
		{
			title: "leave_opinion",
			src: leave_opinion_png,
			url: "https://forms.gle/q5ckUADXYPxghR4X8"
		}
	];

	onMount(async () => {
		const available_researches = filtering_research(available_research);
		research_category_length = available_researches.length;
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
</script>

<svelte:head>
	<title>{TITLE}</title>
	<meta name="description" content={`수수료는 낮게, 보상은 크게 : ${TITLE}`} />
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
		<section class="flex flex-col items-center">
			<Banner {images} />
		</section>

		<div class="relative z-[0] mx-4 mt-5 h-[188px] overflow-hidden rounded-[14px] bg-white">
			<a href="/research">
				<div class=" w-full pl-6 opacity-70">
					<div class=" pt-[22px]">
						<p class="text-sm text-gray-900">리서치</p>
						<p class="mt-1 text-lg font-bold">{research_category_length}개 참여가능</p>
					</div>

					<div class="mt-10">
						<p class="text-sm text-gray-900">
							<span class="mr-3">
								<svg
									class="mr-1 inline-block"
									width="12"
									height="14"
									viewBox="0 0 12 14"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										fill-rule="evenodd"
										clip-rule="evenodd"
										d="M5.78149 0V3.86316L5.78149 3.89138V3.89138C5.78145 4.11127 5.7814 4.32496 5.8051 4.50121C5.83182 4.69991 5.8969 4.92665 6.08524 5.11498C6.27357 5.30331 6.5003 5.3684 6.699 5.39511C6.87525 5.41881 7.08895 5.41877 7.30883 5.41873H7.30884L7.33705 5.41872H11.2V9.8C11.2 11.7799 11.2 12.7698 10.5849 13.3849C9.96985 14 8.9799 14 7 14H4.2C2.2201 14 1.23015 14 0.615076 13.3849C0 12.7698 0 11.7799 0 9.8V4.2C0 2.2201 0 1.23015 0.615076 0.615076C1.23015 0 2.2201 0 4.2 0H5.78149ZM6.81853 0.000590456V3.86316C6.81853 4.12226 6.81963 4.26441 6.83289 4.36303L6.83341 4.36681L6.83718 4.36732C6.9358 4.38058 7.07796 4.38168 7.33705 4.38168H11.1994C11.1967 3.98727 11.1812 3.75593 11.0934 3.54414C10.9869 3.28686 10.7845 3.08454 10.3799 2.6799L8.5201 0.820101C8.11546 0.415459 7.91314 0.213137 7.65586 0.106569C7.4441 0.0188574 7.21281 0.00333683 6.81853 0.000590456Z"
										fill="#D6D9DF"
									/>
									<path
										fill-rule="evenodd"
										clip-rule="evenodd"
										d="M3.62695 7.69967C3.62695 7.4133 3.86465 7.18115 4.15785 7.18115L8.45815 7.18115C8.75136 7.18115 8.98905 7.4133 8.98905 7.69967C8.98905 7.98604 8.75136 8.21819 8.45815 8.21819L4.15785 8.21819C3.86465 8.21819 3.62695 7.98604 3.62695 7.69967Z"
										fill="white"
									/>
									<path
										fill-rule="evenodd"
										clip-rule="evenodd"
										d="M3.62695 10.5C3.62695 10.2136 3.86465 9.98145 4.15785 9.98145L7.02472 9.98145C7.31793 9.98145 7.55562 10.2136 7.55562 10.5C7.55562 10.7863 7.31793 11.0185 7.02472 11.0185L4.15785 11.0185C3.86465 11.0185 3.62695 10.7863 3.62695 10.5Z"
										fill="white"
									/>
								</svg>설문조사</span
							><span class="font-semibold">{research_category_length}개</span>
						</p>

						<p class="mt-1.5 text-sm text-gray-900">
							<span class="mr-6">
								<svg
									class="mr-1 inline-block"
									width="12"
									height="14"
									viewBox="0 0 12 14"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										fill-rule="evenodd"
										clip-rule="evenodd"
										d="M5.78149 0V3.86316L5.78149 3.89138V3.89138C5.78145 4.11127 5.7814 4.32496 5.8051 4.50121C5.83182 4.69991 5.8969 4.92665 6.08524 5.11498C6.27357 5.30331 6.5003 5.3684 6.699 5.39511C6.87525 5.41881 7.08895 5.41877 7.30883 5.41873H7.30884L7.33705 5.41872H11.2V9.8C11.2 11.7799 11.2 12.7698 10.5849 13.3849C9.96985 14 8.9799 14 7 14H4.2C2.2201 14 1.23015 14 0.615076 13.3849C0 12.7698 0 11.7799 0 9.8V4.2C0 2.2201 0 1.23015 0.615076 0.615076C1.23015 0 2.2201 0 4.2 0H5.78149ZM6.81853 0.000590456V3.86316C6.81853 4.12226 6.81963 4.26441 6.83289 4.36303L6.83341 4.36681L6.83718 4.36732C6.9358 4.38058 7.07796 4.38168 7.33705 4.38168H11.1994C11.1967 3.98727 11.1812 3.75593 11.0934 3.54414C10.9869 3.28686 10.7845 3.08454 10.3799 2.6799L8.5201 0.820101C8.11546 0.415459 7.91314 0.213137 7.65586 0.106569C7.4441 0.0188574 7.21281 0.00333683 6.81853 0.000590456Z"
										fill="#D6D9DF"
									/>
									<path
										fill-rule="evenodd"
										clip-rule="evenodd"
										d="M3.62695 7.69967C3.62695 7.4133 3.86465 7.18115 4.15785 7.18115L8.45815 7.18115C8.75136 7.18115 8.98905 7.4133 8.98905 7.69967C8.98905 7.98604 8.75136 8.21819 8.45815 8.21819L4.15785 8.21819C3.86465 8.21819 3.62695 7.98604 3.62695 7.69967Z"
										fill="white"
									/>
									<path
										fill-rule="evenodd"
										clip-rule="evenodd"
										d="M3.62695 10.5C3.62695 10.2136 3.86465 9.98145 4.15785 9.98145L7.02472 9.98145C7.31793 9.98145 7.55562 10.2136 7.55562 10.5C7.55562 10.7863 7.31793 11.0185 7.02472 11.0185L4.15785 11.0185C3.86465 11.0185 3.62695 10.7863 3.62695 10.5Z"
										fill="white"
									/>
								</svg>인터뷰</span
							><span class="font-semibold">0개</span>
						</p>
					</div>
				</div>

				<img
					class="absolute bottom-0 right-[-34px] z-[-1] h-[160px] w-[260px] object-contain"
					src={available_research_png}
					alt="available_research_png"
				/>
			</a>
		</div>

		<div class="mx-4 mt-4 flex items-center justify-center">
			<a
				href="/point"
				class="flex h-[81px] w-full items-center justify-between rounded-[14px] bg-gradient-to-r from-blue-500 to-sky-500 px-7"
			>
				<p class="font-bold text-white">설문모아 포인트</p>
				<p class="flex items-center text-xl font-bold text-white">
					<span>{$point} P</span>

					<svg
						class="ml-2 inline-block"
						width="9"
						height="16"
						viewBox="0 0 9 16"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M1 15L8 8L1 1"
							stroke="white"
							stroke-opacity="0.54"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
					</svg>
				</p>
			</a>
		</div>

		<div class="mx-4 mt-4 flex items-center justify-center gap-4">
			<a href="rating" class="relative h-[150px] w-full rounded-[14px] bg-white">
				<div class="ml-[24px] mt-[24px]">
					<p class="text-gray-900">별점</p>
					<p class=" mt-2 text-lg font-bold">{$rating}</p>
				</div>
				<img
					src={star_rating_png}
					alt="star_rating_png"
					class="absolute bottom-[11px] right-[5px] h-[79px] w-[89px] object-contain"
				/>
			</a>

			<a
				href="see_more/comissioned_research"
				class="relative h-[150px] w-full rounded-[14px] bg-white"
			>
				<div class="ml-[24px] mt-[24px]">
					<p class="text-gray-900">의뢰한 조사</p>
					<p class=" mt-2 text-lg font-bold">{research_comissioned_length}개</p>
				</div>
				<img
					src={commissioned_research_png}
					alt="commissioned_research_png"
					class="absolute right-3 h-[66px] w-[50px] object-contain"
				/>
			</a>
		</div>
	</main>
</div>

<Bottom_nav />
