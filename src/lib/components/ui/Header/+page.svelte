<script>
	export let nav_class = "border-b border-gray-300 bg-white";
</script>

<header class="sticky top-0 z-50 {nav_class}">
	<nav class="pt-safe">
		<div class="z-10 flex h-[52px] w-full items-center justify-between">
			<div class="flex-1 pl-4">
				<slot name="left" />
			</div>

			<div class="flex flex-1 justify-center whitespace-nowrap">
				<slot name="center" />
			</div>

			<div class="flex flex-1 justify-end pr-4">
				<slot name="right" />
			</div>
		</div>
	</nav>
</header>
