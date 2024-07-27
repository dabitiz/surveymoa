<script>
	const TITLE = "리뷰 등록";
	import { page } from "$app/stores";

	import Icon from "@/lib/components/ui/Icon/+page.svelte";
	import Header from "@/lib/components/ui/Header/+page.svelte";
	import research_category_png from "@/lib/img/common/research_category/research_category.png";
	import etc_category_png from "@/lib/img/common/research_category/etc_category.png";

	import { goto } from "$app/navigation";
	import { show_toast } from "$lib/js/common.js";

	export let data;
	let { research } = data;
	$: ({ supabase, session } = data);

	let rating = 5;
	let comment = "";

	const format_date = (get_date) => {
		const date = new Date(get_date);

		const formatted_date = `${date.getMonth() + 1}월 ${date.getDate()}일 ${String(date.getHours()).padStart(2, "0")}:${String(date.getMinutes()).padStart(2, "0")}`;
		return formatted_date;
	};

	const insert_rating_user = async () => {
		const { error } = await supabase.from("rating_user").insert([
			{
				rating,
				comment,
				rated_user_id: $page.state.rated_user_id,
				rate_user_id: session.user.id,
				research_id: $page.params.research_id
			}
		]);

		if (error) throw new Error(`Failed to insert_rating_user: ${error.message}`);
	};
</script>

<svelte:head>
	<title>{TITLE} | 설문모아</title>
	<meta name="description" content={TITLE} />
</svelte:head>

<Header>
	<a
		href={`/see_more/comissioned_research/rating_user/${$page.params.research_id}`}
		slot="left"
		class="flex items-center"
	>
		<Icon name="left_arrow" />
	</a>
	<h1 slot="center" class="font-semibold">{TITLE}</h1>
</Header>

<main>
	<div class="border-px mx-5 flex border-b border-gray-300 py-5">
		<div class="mr-4">
			{#if research.images.length > 0}
				<img
					src={research.images[0].uri}
					alt={research.category}
					class="h-[53px] w-[53px] flex-shrink-0 rounded-lg object-cover"
				/>
			{:else}
				<img
					src={research.category === "설문조사" ? research_category_png : etc_category_png}
					alt={research.category}
					class="h-[53px] w-[53px] flex-shrink-0 rounded-lg object-cover"
				/>
			{/if}
		</div>

		<div class="flex flex-col justify-between">
			<p class="font-semibold">한국, 일본에 대한 이미지</p>
			<p>
				<span class="font-semiborder-l-red-950 mr-2 text-sm">{$page.state.username}</span><span
					class="text-sm text-gray-900">{format_date($page.state.participant_date)}</span
				>
			</p>
		</div>
	</div>

	<div class="mt-10 flex flex-col items-center">
		<p class="text-lg font-bold">
			{rating === 1
				? "1.0 나쁨"
				: rating === 2
					? "2.0 별로"
					: rating === 3
						? "3.0 보통"
						: rating === 4
							? "4.0 좋음"
							: rating === 5
								? "5.0 최고"
								: null}
		</p>
		<div class="rating mt-2 flex gap-2">
			<input
				on:change={() => (rating = 1)}
				checked={rating === 1}
				type="radio"
				name="rating"
				class="mask mask-star-2 h-7 w-7 bg-secondary"
			/>
			<input
				on:change={() => (rating = 2)}
				checked={rating === 2}
				type="radio"
				name="rating"
				class="mask mask-star-2 h-7 w-7 bg-secondary"
			/>
			<input
				on:change={() => (rating = 3)}
				checked={rating === 3}
				type="radio"
				name="rating"
				class="mask mask-star-2 h-7 w-7 bg-secondary"
			/>
			<input
				on:change={() => (rating = 4)}
				checked={rating === 4}
				type="radio"
				name="rating"
				class="mask mask-star-2 h-7 w-7 bg-secondary"
			/>
			<input
				on:change={() => (rating = 5)}
				checked={rating === 5}
				type="radio"
				name="rating"
				class="mask mask-star-2 h-7 w-7 bg-secondary"
			/>
		</div>
	</div>

	<div class="mt-6 px-4">
		<textarea
			bind:value={comment}
			class="textarea mt-2 h-[164px] w-full break-words bg-gray-50 px-6 py-5 text-sm focus:border-primary focus:outline-none"
		/>
	</div>

	<div class="fixed bottom-0 mx-auto w-full bg-white px-5 py-3.5 md:w-1/2">
		<div class="pb-safe">
			<button
				on:click={async () => {
					await insert_rating_user();
					await goto(`/see_more/comissioned_research/rating_user/${$page.params.research_id}`);
					show_toast("success", "리뷰가 등록되었습니다.");
				}}
				class="btn btn-primary w-full">리뷰 등록</button
			>
		</div>
	</div>
</main>
