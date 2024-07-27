<script>
	const TITLE = "설문모아 가이드";

	import Header from "@/lib/components/ui/Header/+page.svelte";
	import Icon from "@/lib/components/ui/Icon/+page.svelte";
	import participant_guide_png from "@/lib/img/partials/guide/participant_guide.png";
	import investigator_guide_png from "@/lib/img/partials/guide/investigator_guide.png";

	let selected_category = "참여자용";
</script>

<svelte:head>
	<title>{TITLE}</title>
	<meta name="description" content={`${TITLE}`} />
</svelte:head>

<Header>
	<a href="/home" slot="left">
		<Icon name="left_arrow" />
	</a>
	<h1 slot="center" class="font-semibold">{TITLE}</h1>
</Header>

<div class="mt-5 flex justify-center">
	<button
		on:click={() => (selected_category = "참여자용")}
		class={`border-b-2 px-4 py-2  ${
			selected_category === "참여자용" ? "border-primary text-primary" : ""
		}`}>참여자용</button
	>
	<button
		on:click={() => (selected_category = "조사자용")}
		class={`border-b-2 px-4 py-2 ${
			selected_category === "조사자용" ? "border-primary text-primary" : ""
		}`}>조사자용</button
	>
</div>
<div class="pb-10">
	{#if selected_category === "참여자용"}
		<div class="my-10 text-center text-xl font-bold">설문조사 참여하는 방법</div>
		<img
			class="mx-auto w-4/5 object-cover"
			src={participant_guide_png}
			alt={participant_guide_png}
		/>
	{:else}
		<div class="my-10 text-center text-xl font-bold">설문조사 등록하는 방법</div>
		<img
			class="mx-auto w-4/5 object-cover"
			src={investigator_guide_png}
			alt={investigator_guide_png}
		/>
	{/if}
</div>
