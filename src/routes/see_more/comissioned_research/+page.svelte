<script>
	const TITLE = "의뢰한 조사";

	import { goto } from "$app/navigation";

	import { comma, format_date } from "@/lib/js/common";
	import Header from "@/lib/components/ui/Header/+page.svelte";
	import Icon from "@/lib/components/ui/Icon/+page.svelte";
	import research_category_png from "@/lib/img/common/research_category/research_category.png";
	import etc_category_png from "@/lib/img/common/research_category/etc_category.png";

	export let data;
	let { research__research_payment } = data;
</script>

<svelte:head>
	<title>{TITLE} | 설문모아</title>
	<meta name="description" content={TITLE} />
</svelte:head>

<div class="min-h-screen bg-gray-200">
	<Header>
		<button slot="left" class="flex items-center" on:click={() => goto("/home")}>
			<Icon name="left_arrow" />
		</button>
		<h1 slot="center" class="font-semibold">{TITLE}</h1>
	</Header>

	<main>
		{#each research__research_payment as research}
			<div class="mt-5 w-full">
				<div class="mx-5 flex h-[228px] flex-col rounded-xl bg-white px-5 py-6">
					<p
						class={`text-sm font-semibold ${research.status === "결제취소" ? "text-gray-900" : ""}`}
					>
						{research.status}
					</p>
					<p class="text-xs text-gray-800">
						{format_date(research.start_date)} ~ {format_date(research.end_date)}
					</p>

					<a href={`/research_info/${research.id}`} class="mt-1.5 flex">
						{#if research.images.length > 0}
							<img
								src={research.images[0].uri}
								alt={research.category}
								class="mr-5 h-[88px] w-[88px] flex-shrink-0 rounded-xl object-cover"
							/>
						{:else}
							<img
								src={research.category === "설문조사" ? research_category_png : etc_category_png}
								alt={research.category}
								class="mr-5 h-[88px] w-[88px] flex-shrink-0 rounded-xl object-cover"
							/>
						{/if}

						<div class="mt-0.5 flex flex-1 flex-col">
							<p class="line-clamp-2 h-10 text-sm font-semibold">
								{research.title}
							</p>

							<p class="mt-1 font-semibold">
								{comma(research.price)}원
							</p>

							<div class="mt-0.5 flex items-center">
								<svg
									class="mr-1.5"
									width="10"
									height="11"
									viewBox="0 0 10 11"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M5 0.191406C3.625 0.191406 2.5 1.59141 2.5 3.31641C2.5 5.04141 3.625 6.44141 5 6.44141C6.375 6.44141 7.5 5.04141 7.5 3.31641C7.5 1.59141 6.375 0.191406 5 0.191406ZM2.3875 6.44141C1.0625 6.50391 0 7.59141 0 8.94141V10.1914H10V8.94141C10 7.59141 8.95 6.50391 7.6125 6.44141C6.9375 7.20391 6.0125 7.69141 5 7.69141C3.9875 7.69141 3.0625 7.20391 2.3875 6.44141Z"
										fill="#C7C7C8"
									/>
								</svg>
								<p class="text-xs text-gray-800">
									{research.participant_num}/{research.recruitment_num}
								</p>
							</div>
						</div>
					</a>

					<div class="mt-3.5 flex border">
						<a
							href={`comissioned_research/order_detail/${research.id}`}
							class="w-[30%] border-r py-2.5 text-center text-sm"
						>
							주문 상세
						</a>
						<a
							href={`comissioned_research/rating_user/${research.id}`}
							class="w-[70%] py-2.5 text-center text-sm text-primary"
						>
							별점 주기
						</a>
					</div>
				</div>
			</div>
		{/each}
	</main>
</div>
