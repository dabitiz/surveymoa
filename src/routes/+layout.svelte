<script>
	import "../app.css";
	import { SvelteToast } from "@zerodevx/svelte-toast";

	import { Device } from "@capacitor/device";
	import { page } from "$app/stores";
	import { invalidate } from "$app/navigation";
	import { onMount } from "svelte";

	export let data;
	let { supabase, session } = data;

	$: ({ supabase, session } = data);

	let device;

	onMount(async () => {
		const { data } = supabase.auth.onAuthStateChange((event, _session) => {
			if (_session?.expires_at !== session?.expires_at) {
				invalidate("supabase:auth");
			}
		});

		device = await Device.getInfo();

		return () => data.subscription.unsubscribe();
	});
</script>

<div class="bg-gray-200">
	<div
		class={`mx-auto ${
			(device?.platform !== "web" && device?.operating_system !== ("windows" || "mac")) ||
			$page.url.pathname.startsWith("/admin")
				? ""
				: "md:w-1/2"
		}`}
	>
		<div class="min-h-screen bg-white">
			<slot />
		</div>
	</div>
</div>

<div class="wrap">
	<SvelteToast options={{ intro: { y: -64 }, dismissable: false, duration: 4000 }} />
</div>

<style>
	.wrap {
		--toastContainerTop: auto;
		--toastContainerBottom: 4.5rem;
		--toastContainerRight: 0;
		--toastContainerLeft: 0;
		--toastWidth: 21rem;
		--toastMargin: 0.25rem auto;
		--toastMinHeight: 3.125rem;
		--toastPadding: 0 0.6rem;
		--toastBarHeight: 0;
		--toastBorderRadius: 0.5rem;
		font-size: 0.875rem;
	}
</style>
