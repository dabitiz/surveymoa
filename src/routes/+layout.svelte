<script>
	import "../app.css";
	import { invalidate } from "$app/navigation";
	import { onMount } from "svelte";
	import { PUBLIC_ENV } from "$env/static/public";

	export let data;

	let { supabase, session } = data;

	$: ({ supabase, session } = data);

	onMount(() => {
		const { data } = supabase.auth.onAuthStateChange((event, _session) => {
			if (_session?.expires_at !== session?.expires_at) {
				invalidate("supabase:auth");
			}
		});

		return () => data.subscription.unsubscribe();
	});
</script>

<slot />

{#if PUBLIC_ENV === "local"}
	<!-- <img
		class="absolute left-0 top-0 z-[-1] h-full w-full object-cover opacity-50"
		src={"src/lib/design_reference/1.png"}
		alt="디자인 참조 이미지"
	/> -->
{/if}
