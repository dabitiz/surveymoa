<script>
	const TITLE = "참여한 조사";

	import { comma } from "@/lib/js/common";
	import Header from "@/lib/components/ui/Header/+page.svelte";
	import Icon from "@/lib/components/ui/Icon/+page.svelte";
	import research_category_png from "@/lib/img/common/research_category/research_category.png";
	import etc_category_png from "@/lib/img/common/research_category/etc_category.png";
	import { goto } from "$app/navigation";

	export let data;
	let { participant_research } = data;
	$: ({ supabase, session } = data);
</script>

<svelte:head>
	<title>{TITLE} | 설문모아</title>
	<meta name="description" content={TITLE} />
</svelte:head>

<div class="min-h-screen bg-gray-200">
	<Header>
		<button slot="left" class="flex items-center" on:click={() => goto("/see_more")}>
			<Icon name="left_arrow" />
		</button>
		<h1 slot="center" class="font-semibold">{TITLE}</h1>
	</Header>

	<main>
		{#if participant_research.length > 0}
			{#each participant_research as research_item}
				<div class="mx-5 mt-5">
					<a
						href="/research_info/{research_item.research.id}"
						class="flex h-[153px] rounded-[14px] bg-white p-5"
					>
						{#if research_item.research.images.length > 0}
							<img
								src={research_item.research.images[0].uri}
								alt={research_item.research.category}
								class="mr-5 h-[102px] w-[102px] flex-shrink-0 rounded-xl object-cover"
							/>
						{:else}
							<img
								src={research_item.research.category === "설문조사"
									? research_category_png
									: etc_category_png}
								alt={research_item.research.category}
								class="mr-5 h-[102px] w-[102px] flex-shrink-0 rounded-xl object-cover"
							/>
						{/if}

						<div class="flex flex-1 flex-col overflow-hidden overflow-ellipsis">
							<div class="flex items-center">
								<p class="mr-1.5 inline-block rounded-[4px] bg-gray-200 px-1 py-0.5 text-[11px]">
									{research_item.research.category}
								</p>

								<p class="mr-1.5 inline-block rounded-[4px] bg-gray-200 px-1 py-0.5 text-[11px]">
									{research_item.research.expected_time}분
								</p>
							</div>

							<p class="mt-2 line-clamp-2 h-9 text-sm font-semibold">
								{research_item.research.title}
							</p>

							<p class="mt-2.5 font-bold text-primary">
								{comma(research_item.research.price)}원
							</p>

							<div class="mt-1.5 h-1 w-full rounded-full bg-gray-300 dark:bg-gray-300">
								<div
									class="h-1 rounded-full bg-primary"
									style={`width: ${(research_item.research.participant_num / research_item.research.recruitment_num) * 100}%`}
								/>
							</div>
						</div>
					</a>
				</div>
			{/each}
		{/if}
	</main>
</div>
