<script>
	import { onMount } from "svelte";

	export let images;

	let active_index = 0;

	onMount(() => {
		const timer = setInterval(scroll_to_next, 5000);
		return () => clearInterval(timer);
	});

	const get_item_id = (index) => `carousel-item-${index}`;

	const scroll_to_next = () => {
		active_index = (active_index + 1) % images.length;
		const scroll_to_element = document.getElementById(get_item_id(active_index));

		if (!scroll_to_element) return;

		const media_query = window.matchMedia("(prefers-reduced-motion: reduce)");
		scroll_to_element.scrollIntoView({
			behavior: media_query.matches ? "auto" : "smooth",
			block: "nearest",
			inline: "center"
		});
	};
</script>

<ul
	class="scrollbar-hide flex snap-x snap-mandatory gap-2 overflow-x-auto before:w-[30vw] before:shrink-0 after:w-[30vw] after:shrink-0"
>
	{#each images as { title, src, url }, index}
		<a href={url} id={get_item_id(index)} class="shrink-0 snap-center">
			<img {title} {src} alt={title} class="h-[101px] w-80 object-contain" />
		</a>
	{/each}
</ul>

<nav class="hidden">
	<ul>
		{#each images as { title }, index}
			<li class="shrink-0 snap-center">
				<a
					href={`#${get_item_id(index)}`}
					on:click|preventDefault={() => {
						active_index = index;
						scroll_to_next();
					}}>{title}</a
				>
			</li>
		{/each}
	</ul>
</nav>
