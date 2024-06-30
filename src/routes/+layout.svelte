<script>
	import "../app.css";

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

<div class="overflow-y-scroll bg-gray-200">
	<div
		class={`m-auto h-screen bg-white  ${
			(device?.platform !== "web" && device?.operating_system !== ("windows" || "mac")) ||
			$page.url.pathname.startsWith("/admin")
				? ""
				: "md:w-1/2"
		}`}
	>
		<slot />
	</div>
</div>
