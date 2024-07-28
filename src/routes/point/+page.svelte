<script>
	const TITLE = "포인트";

	import { goto } from "$app/navigation";
	import { onMount } from "svelte";

	import { point } from "@/lib/store/profiles_store.js";
	import { comma, show_toast, format_date } from "@/lib/js/common";
	import Header from "@/lib/components/ui/Header/+page.svelte";
	import Bottom_nav from "@/lib/components/ui/Bottom_nav/+page.svelte";
	import Icon from "@/lib/components/ui/Icon/+page.svelte";

	export let data;
	let { withdrawal_request, point_change_history } = data;

	let is_not_withdrawal_approval = false;

	onMount(() => {
		if (withdrawal_request.length > 0) {
			is_not_withdrawal_approval = withdrawal_request.some((withdrawal) => {
				return withdrawal.approval === false;
			});
		}
	});
</script>

<svelte:head>
	<title>{TITLE}</title>
	<meta name="description" content={`수수료는 낮게, 보상은 크게 : ${TITLE}`} />
</svelte:head>

<Header nav_class="bg-white">
	<h1 slot="left" class="text-xl font-bold text-gray-800">{TITLE}</h1>
	<button slot="right" on:click={() => goto("/alarm")} class="flex items-center">
		<svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
			<Icon name="alarm" />
			<!-- <circle cx="17.5" cy="4.5" r="3.5" fill={colors.error} /> -->
		</svg>
	</button>
</Header>

<main>
	<div class="mx-5 mt-7">
		<div class="flex items-center">
			<div class="mr-2 flex h-5 w-5 items-center justify-center rounded-full bg-primary">
				<svg
					width="10"
					height="7"
					viewBox="0 0 10 7"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M3.38505 6.90608C2.98019 6.90608 2.62849 6.62763 2.53562 6.23357L2.09693 4.37208C2.03485 4.10867 1.79976 3.92255 1.52914 3.92255H1.40188C1.15 3.92255 0.945801 3.71835 0.945801 3.46647V3.37566C0.945801 3.17393 1.10934 3.01039 1.31108 3.01039V3.01039C1.54668 3.01039 1.72066 2.79064 1.66662 2.56132L1.25221 0.802884C1.15882 0.406598 1.45947 0.0268555 1.86661 0.0268555V0.0268555C2.16591 0.0268555 2.42407 0.237045 2.48474 0.530132L2.90373 2.55421C2.95873 2.81987 3.19272 3.01039 3.46402 3.01039V3.01039C3.73074 3.01039 3.96209 2.82608 4.0217 2.5661L4.46698 0.624212C4.54713 0.274656 4.85818 0.0268555 5.21681 0.0268555V0.0268555C5.57544 0.0268555 5.88649 0.274656 5.96664 0.624212L6.41147 2.56416C6.47135 2.82528 6.7037 3.01039 6.97159 3.01039V3.01039C7.2444 3.01039 7.4796 2.81858 7.5345 2.55136L7.94955 0.530768C8.00981 0.237414 8.26802 0.0268555 8.5675 0.0268555V0.0268555C8.97439 0.0268555 9.27486 0.406365 9.18152 0.802409L8.767 2.56132C8.71296 2.79064 8.88694 3.01039 9.12254 3.01039V3.01039C9.32428 3.01039 9.48782 3.17393 9.48782 3.37566V3.46647C9.48782 3.71835 9.28363 3.92255 9.03174 3.92255H8.90448C8.63386 3.92255 8.39877 4.10867 8.33669 4.37208L7.898 6.23357C7.80513 6.62763 7.45343 6.90608 7.04858 6.90608V6.90608C6.64125 6.90608 6.2881 6.6243 6.19766 6.22714L5.77415 4.36725C5.71492 4.10711 5.48361 3.92255 5.21681 3.92255V3.92255C4.95002 3.92255 4.7187 4.10711 4.65947 4.36725L4.23596 6.22714C4.14552 6.6243 3.79237 6.90608 3.38505 6.90608V6.90608ZM3.44427 3.92255C3.30973 3.92255 3.20916 4.04618 3.23655 4.17791L3.40087 4.96803C3.40429 4.98446 3.41877 4.99624 3.43555 4.99624V4.99624C3.45205 4.99624 3.46637 4.98484 3.47007 4.96876L3.65103 4.18228C3.68161 4.04937 3.58065 3.92255 3.44427 3.92255V3.92255ZM5.02422 2.76942C4.99631 2.89291 5.0902 3.01039 5.21681 3.01039V3.01039C5.34342 3.01039 5.43731 2.89291 5.4094 2.76942L5.2458 2.04538C5.24274 2.03183 5.2307 2.02221 5.21681 2.02221V2.02221C5.20292 2.02221 5.19088 2.03183 5.18782 2.04538L5.02422 2.76942ZM6.98933 3.92255C6.85285 3.92255 6.75174 4.04932 6.78209 4.18237L6.9636 4.97825C6.96727 4.99433 6.98157 5.00574 6.99807 5.00574V5.00574C7.01485 5.00574 7.02931 4.99395 7.0327 4.97752L7.19751 4.17802C7.22469 4.04615 7.12397 3.92255 6.98933 3.92255V3.92255Z"
						fill="white"
					/>
				</svg>
			</div>
			<p class="text-lg font-semibold">설문모아 포인트</p>
		</div>
		<p class="mt-4 text-3xl font-bold">{comma($point)}원</p>

		{#if is_not_withdrawal_approval}
			<button class="btn btn-disabled mt-5 w-full">출금 신청 처리중</button>
		{:else}
			<button
				on:click={() => {
					if ($point < 1000) {
						show_toast("info", "출금은 1000원 이상부터 가능해요!");
					} else {
						goto("/point/withdrawal_money");
					}
				}}
				class="btn btn-primary mt-5 w-full"
				>출금하기
			</button>
		{/if}
	</div>

	<div class="mt-5 h-2 w-full bg-gray-100" />

	<div class="mx-5 mt-5">
		<p>적립/사용내역</p>

		{#each point_change_history as history}
			<div class="mt-8">
				<p class="inline-block rounded-[4px] bg-gray-200 px-1 py-0.5 text-[11px]">
					{history.category}
				</p>

				<div class="mt-2.5 flex items-center justify-between">
					<p class="mr-9 truncate">{history.behavior}</p>

					{#if history.old_point < history.new_point}
						<p class="flex-shrink-0 font-semibold text-primary">
							+{history.new_point - history.old_point}원
						</p>
					{:else}
						<p class="flex-shrink-0 font-semibold text-gray-900">
							{history.new_point - history.old_point}원
						</p>
					{/if}
				</div>

				<div class="mt-1.5 flex items-center justify-between">
					<p class="text-sm text-gray-800">{format_date(history.created_at)}</p>
					<p class="text-sm text-gray-800">{history.old_point}</p>
				</div>
			</div>
		{/each}
	</div>
</main>

<Bottom_nav />
