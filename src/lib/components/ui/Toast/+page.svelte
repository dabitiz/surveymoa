<script>
	export let message;
	export let type = "success";
</script>

<div class="flex items-center">
	<span
		class={`mr-4 flex h-5 w-5 items-center justify-center rounded-full drop-shadow-lg 
		${type === "warning" ? "bg-warning" : type === "info" ? "bg-primary" : type === "error" ? "bg-error" : "bg-success"}`}
	>
		{#if type === "warning"}
			<svg
				class="mb-[2px]"
				width="12"
				height="11"
				viewBox="0 0 12 11"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M4.09911 1.09748C4.94395 -0.365826 7.05605 -0.365825 7.90088 1.09748L11.7027 7.68234C12.5475 9.14564 11.4914 10.9748 9.80177 10.9748H2.19823C0.50855 10.9748 -0.547495 9.14564 0.297343 7.68234L4.09911 1.09748Z"
					fill="white"
				/>
				<path
					d="M5 3C5 2.44772 5.44772 2 6 2C6.55228 2 7 2.44772 7 3V6C7 6.55228 6.55228 7 6 7C5.44772 7 5 6.55228 5 6V3Z"
					fill="#F7CF46"
				/>
				<path
					d="M5 9C5 8.44772 5.44772 8 6 8C6.55228 8 7 8.44772 7 9C7 9.55228 6.55228 10 6 10C5.44772 10 5 9.55228 5 9Z"
					fill="#F7CF46"
				/>
			</svg>
		{:else if type === "info"}
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
		{:else if type === "error"}
			<svg
				width="10"
				height="10"
				viewBox="0 0 10 10"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M1.07156 2.64261C0.637646 2.20869 0.637647 1.50518 1.07156 1.07126C1.50548 0.637344 2.209 0.637343 2.64291 1.07126L8.92831 7.35665C9.36222 7.79057 9.36222 8.49409 8.9283 8.928C8.49439 9.36192 7.79087 9.36192 7.35696 8.928L1.07156 2.64261Z"
					fill="white"
				/>
				<path
					d="M2.6431 8.92868C2.20918 9.3626 1.50566 9.3626 1.07175 8.92868C0.637832 8.49477 0.637832 7.79125 1.07175 7.35733L7.35714 1.07194C7.79106 0.638023 8.49457 0.638024 8.92849 1.07194C9.3624 1.50586 9.36241 2.20937 8.92849 2.64329L2.6431 8.92868Z"
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
