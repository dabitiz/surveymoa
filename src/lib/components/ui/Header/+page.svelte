<header>
	<nav class="pt-safe">
		<div class="flex h-[52px] w-full items-center justify-between">
			<div class="flex-1 pl-4">
				<slot name="left" />
			</div>

			<div class="flex flex-1 justify-center">
				<slot name="center" />
			</div>

			<div class="flex flex-1 justify-end pr-4">
				<slot name="right" />
			</div>
		</div>
	</nav>
</header>
