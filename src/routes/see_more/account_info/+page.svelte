<script>
	const TITLE = "계좌 정보";

	import Header from "@/lib/components/ui/Header/+page.svelte";
	import Account from "@/lib/components/Account/+page.svelte";
	import Icon from "@/lib/components/ui/Icon/+page.svelte";
	import { onMount } from "svelte";

	export let data;
	let { account } = data;
	$: ({ supabase, session } = data);
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

<main>
	<div class="mx-4 mt-5">
		<Account {supabase} {session} bind:account />
	</div>
</main>
