<script>
	export let message;
	export let type = "success";
</script>

<div class="flex items-center">
	<span
		class={`mr-4 flex h-5 w-5 items-center justify-center rounded-full ${type === "error" ? "bg-error" : "bg-success"}`}
	>
		{#if type === "error"}
			<svg width="2" height="10" viewBox="0 0 2 10" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path
					fill-rule="evenodd"
					clip-rule="evenodd"
					d="M1 0C1.55228 0 2 0.447715 2 1V6C2 6.55228 1.55228 7 1 7C0.447715 7 0 6.55228 0 6V1C0 0.447715 0.447715 0 1 0Z"
					fill="white"
				/>
				<path
					d="M1 10C1.55228 10 2 9.55228 2 9C2 8.44772 1.55228 8 1 8C0.447715 8 0 8.44772 0 9C0 9.55228 0.447715 10 1 10Z"
					fill="white"
				/>
			</svg>
		{:else if type === "success"}
			<svg width="11" height="9" viewBox="0 0 11 9" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path
					d="M9.29688 0.992188L4.57031 7.4375L1.34766 3.78516"
					stroke="#F6F8F9"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
				/>
			</svg>
		{/if}
	</span> <span>{message}</span>
</div>
