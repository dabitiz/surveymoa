<nav>
	<div class="flex h-[52px] w-full items-center justify-between">
		<div class="pl-4">
			<slot name="left" />
		</div>

		<div>
			<slot name="center" />
		</div>

		<div class="pr-4">
			<slot name="right" />
		</div>
	</div>
</nav>

<style>
	nav {
		padding-top: env(safe-area-inset-top);
		padding-top: constant(safe-area-inset-top);
	}
</style>
