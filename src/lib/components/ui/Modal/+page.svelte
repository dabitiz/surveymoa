<script>
	export let is_modal_open;
	export let modal_position;
</script>

{#if modal_position === "center"}
	<div
		class="fixed inset-0 z-50 flex items-center justify-center overflow-auto bg-black bg-opacity-50"
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
	<dialog class="modal" class:modal-open={is_modal_open}>
		<div class="modal-box fixed bottom-0 w-full rounded-b-none p-0">
			<div class="pb-safe">
				<slot />
			</div>
		</div>
		<form method="dialog" class="modal-backdrop">
			<button on:click={() => (is_modal_open = false)}>close</button>
		</form>
	</dialog>
{/if}
