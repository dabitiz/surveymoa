<script>
	import research_png from "./research.png";

	export let name;
</script>

<div class="flex items-center rounded-sm bg-gray-200 px-1.5 py-1">
	{#if name === "설문조사"}
		<img src={research_png} alt="research_png" class="mr-1 h-4 w-4" />
	{/if}
	<p class="text-xs text-gray-950">{name}</p>
</div>
