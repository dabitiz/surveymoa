<script>
	const TITLE = "별점 주기";
	import { page } from "$app/stores";

	import Icon from "@/lib/components/ui/Icon/+page.svelte";
	import Header from "@/lib/components/ui/Header/+page.svelte";
	import user_profile_png from "@/lib/img/common/user/profile.png";
	import { onMount } from "svelte";
	import { goto } from "$app/navigation";

	export let data;
	let { research_rating, research_participants } = data;
	$: ({ supabase, session } = data);

	let rating_id = "";

	const format_date = (get_date) => {
		const date = new Date(get_date);

		const formatted_date = `${date.getMonth() + 1}월 ${date.getDate()}일 ${String(date.getHours()).padStart(2, "0")}:${String(date.getMinutes()).padStart(2, "0")}`;
		return formatted_date;
	};
</script>

<svelte:head>
	<title>{TITLE} | 설문모아</title>
	<meta name="description" content={TITLE} />
</svelte:head>

<Header>
	<a href="/see_more/comissioned_research" slot="left" class="flex items-center">
		<Icon name="left_arrow" />
	</a>
	<h1 slot="center" class="font-semibold">{TITLE}</h1>
</Header>

<main>
	<div class="p-5">
		<div class="mb-6 flex items-center">
			<p class="pr-2 text-lg font-bold">참여자 정보</p>
			<p class="text-sm text-gray-800">
				{research_rating.participant_num}/{research_rating.recruitment_num}
			</p>
		</div>

		{#each research_participants as participant}
			<div class="mb-7 flex justify-between">
				<div class="flex items-center">
					<div class="mr-4 h-12 w-12">
						{#if participant.profiles.avatar_url === null}
							<img
								src={user_profile_png}
								alt="user_profile_png"
								class="rounded-full object-cover"
							/>
						{:else}
							<img
								src={participant.profiles.avatar_url}
								alt="user_profile_png"
								class="rounded-full object-cover"
							/>
						{/if}
					</div>

					<div class="flex flex-col">
						<p class="text-sm font-semibold">{participant.profiles.username}</p>
						<p class="mt-1.5 text-sm font-semibold text-gray-800">
							{format_date(participant.created_at)}
						</p>
					</div>
				</div>

				{#if research_rating.rating_user.some((rating) => {
					if (participant.profiles.id === rating.rated_user_id) {
						rating_id = rating.id;
						return true;
					}
					return false;
				})}
					<button
						on:click={() =>
							goto(`${$page.params.research_id}/edit_review/${rating_id}`, {
								state: {
									username: participant.profiles.username,
									participant_date: participant.created_at,
									rated_user_id: participant.profiles.id
								}
							})}
						class="btn btn-primary btn-sm h-9 w-14 rounded-full">수정</button
					>
				{:else}
					<button
						on:click={() =>
							goto(`${$page.params.research_id}/regi_review`, {
								state: {
									username: participant.profiles.username,
									participant_date: participant.created_at,
									rated_user_id: participant.profiles.id
								}
							})}
						class="btn btn-primary btn-sm h-9 w-14 rounded-full">리뷰</button
					>
				{/if}
			</div>
		{/each}
	</div>
</main>
