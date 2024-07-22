<script>
	import "../app.css";
	import { SvelteToast } from "@zerodevx/svelte-toast";
	import { Device } from "@capacitor/device";
	import { page } from "$app/stores";
	import { invalidate } from "$app/navigation";
	import { onMount } from "svelte";

	import Profiles_api from "@/lib/api/profiles_api.js";
	import { is_mobile_app } from "@/lib/js/common.js";
	import { update_profiles_store } from "@/lib/store/profiles_store";
	import { operating_system, platform, update_device_store } from "@/lib/store/device_store";
	import { loading } from "@/lib/store/global_store";

	export let data;
	let { supabase, session } = data;
	$: ({ supabase, session } = data);

	const profiles_api = new Profiles_api(supabase, session);

	let is_initialize = false;

	onMount(async () => {
		const { data } = supabase.auth.onAuthStateChange((event, _session) => {
			if (_session?.expires_at !== session?.expires_at) {
				invalidate("supabase:auth");
			}
		});

		window.addEventListener("error", handle_error);
		window.addEventListener("unhandledrejection", handle_unhandled_rejection);

		if (session) {
			const profiles = await profiles_api.get_profile_info();
			await save_profiles_store(profiles);
		}
		save_device_store();

		is_initialize = true;
		return () => {
			data.subscription.unsubscribe();
			window.removeEventListener("error", handle_error);
			window.removeEventListener("unhandledrejection", handle_unhandled_rejection);
		};
	});

	const save_profiles_store = async (profiles) => {
		update_profiles_store("username", profiles.username);
		update_profiles_store("avatar_url", profiles.avatar_url);
		update_profiles_store("gender", profiles.gender);
		update_profiles_store("year_of_birth", profiles.year_of_birth);
		update_profiles_store("point", profiles.point);
		update_profiles_store("rating", profiles.rating);
	};

	const save_device_store = async () => {
		const device_info = await Device.getInfo();

		update_device_store("operating_system", device_info.operatingSystem);
		update_device_store("platform", device_info.platform);
	};

	const handle_error = (event) => {
		console.error(`Error: ${event.error.message}`);
		alert(`에러: ${event.error.message}`);
	};

	const handle_unhandled_rejection = (event) => {
		console.error(`Error: ${event.error.message}`);
		alert(`에러: ${event.error.message}`);
	};

	const is_url_admin = () => {
		return $page.url.pathname.startsWith("/admin");
	};
</script>

{#if is_initialize}
	<div class="bg-gray-200">
		<div
			class:md-w-half={!is_mobile_app($platform, $operating_system) && !is_url_admin()}
			class="mx-auto"
		>
			<div class="min-h-screen bg-white">
				<slot />
			</div>
		</div>
	</div>
{/if}

{#if $loading || !is_initialize}
	<div class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
		<div class="h-12 w-12 animate-spin rounded-full border-b-2 border-t-2 border-primary"></div>
	</div>
{/if}

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
