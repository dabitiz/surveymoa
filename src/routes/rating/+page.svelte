<script>
	const TITLE = "별점";
	import dayjs from "dayjs";

	import Icon from "@/lib/components/ui/Icon/+page.svelte";
	import Header from "@/lib/components/ui/Header/+page.svelte";
	import user_profile_png from "@/lib/img/common/user/profile.png";

	export let data;
	let { rating_user } = data;
</script>

<svelte:head>
	<title>{TITLE} | 설문모아</title>
	<meta name="description" content={TITLE} />
</svelte:head>

<Header>
	<a href={`home`} slot="left" class="flex items-center">
		<Icon name="left_arrow" />
	</a>
	<h1 slot="center" class="font-semibold">{TITLE}</h1>
</Header>

<main>
	<div class="mx-5">
		{#each rating_user as user}
			<article class="mt-5 border-b border-gray-300 pb-5">
				<div class="flex">
					{#if user.profiles.avatar_url === null}
						<img
							src={user_profile_png}
							alt="user_profile_png"
							class="mr-4 h-[50px] w-[50px] flex-shrink-0 rounded-full object-cover"
						/>
					{:else}
						<img
							src={user.profiles.avatar_url}
							alt="user_profile_png"
							class="mr-4 h-[50px] w-[50px] flex-shrink-0 rounded-full object-cover"
						/>
					{/if}

					<div class="flex flex-col">
						<p class="font-semibold">{user.profiles.username}</p>
						<div class="mt-2 flex items-center">
							<div class="rating rating-sm mr-2 gap-0.5">
								<input
									type="radio"
									checked={user.rating === 1}
									name="rating-6"
									class="mask mask-star-2 bg-secondary"
									disabled
								/>
								<input
									type="radio"
									checked={user.rating === 2}
									name="rating-6"
									class="mask mask-star-2 bg-secondary"
									disabled
								/>
								<input
									type="radio"
									checked={user.rating === 3}
									name="rating-6"
									class="mask mask-star-2 bg-secondary"
									disabled
								/>
								<input
									type="radio"
									checked={user.rating === 4}
									name="rating-6"
									class="mask mask-star-2 bg-secondary"
									disabled
								/>
								<input
									type="radio"
									checked={user.rating === 5}
									name="rating-6"
									class="mask mask-star-2 bg-secondary"
									disabled
								/>
							</div>
							<p class="text-sm text-gray-800">{dayjs(user.created_at).format("YYYY.MM.DD")}</p>
						</div>
					</div>
				</div>
				<pre class="mt-5 text-sm">{user.comment}</pre>
			</article>
		{/each}
	</div>
</main>
