<script>
	const TITLE = "알람";

	import Header from "@/lib/components/ui/Header/+page.svelte";
	import Icon from "@/lib/components/ui/Icon/+page.svelte";
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

<main></main>
