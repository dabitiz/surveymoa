<script>
	export let is_modal_open;
	export let modal_position;
</script>

{#if modal_position === "center"}
	<div
		class="scrollbar-hide fixed inset-0 z-50 flex items-center justify-center overflow-auto bg-black bg-opacity-50"
		class:hidden={!is_modal_open}
	>
		<div class="relative z-10 mx-4 w-full max-w-md rounded-lg bg-white">
			<slot />
		</div>
		<button
			class="absolute inset-0 h-full w-full cursor-default"
			on:click={() => (is_modal_open = false)}
		></button>
	</div>
{:else if modal_position === "bottom"}
	<div
		class="fixed inset-0 z-50 flex justify-center overflow-auto bg-black bg-opacity-50"
		class:hidden={!is_modal_open}
	>
		<div
			class=" scrollbar-hide relative z-10 mt-auto max-h-[60vh] w-full max-w-md overflow-y-auto rounded-2xl rounded-b-none bg-white"
		>
			<slot />
		</div>
		<button
			class="absolute inset-0 h-full w-full cursor-default"
			on:click={() => (is_modal_open = false)}
		></button>
	</div>
{/if}
