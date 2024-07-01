<script>
	export let is_modal_open;
	export let modal_position;
</script>

{#if modal_position === "center"}
	<dialog class="modal" class:modal-open={is_modal_open}>
		<div class="modal-box">
			<slot />
		</div>
		<form method="dialog" class="modal-backdrop">
			<button on:click={() => (is_modal_open = false)}>close</button>
		</form>
	</dialog>
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
