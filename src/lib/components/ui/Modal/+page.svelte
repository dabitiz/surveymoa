<script>
	export let is_modal_open;
	export let modal_position;
</script>

{#if modal_position === "bottom"}
	<dialog class="modal" class:modal-open={is_modal_open}>
		<div class="modal-box modal-bottom fixed bottom-0 w-full rounded-b-none px-5 pb-3.5 pt-10">
			<div class="pb-safe">
				<slot />
			</div>
		</div>
		<form method="dialog" class="modal-backdrop">
			<button on:click={() => (is_modal_open = false)}>close</button>
		</form>
	</dialog>
{/if}
