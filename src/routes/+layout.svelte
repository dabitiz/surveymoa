<!-- <script>
	import "../app.css";
	import { SvelteToast } from "@zerodevx/svelte-toast";
	import { Device } from "@capacitor/device";
	import { page, navigating } from "$app/stores";
	import { invalidate } from "$app/navigation";
	import { onMount } from "svelte";

	import { is_mobile_app } from "@/lib/js/common.js";
	import { update_profiles_store } from "@/lib/store/profiles_store";
	import { operating_system, platform, update_device_store } from "@/lib/store/device_store";
	import { loading } from "@/lib/store/global_store";

	export let data;
	$: ({ supabase, session } = data);

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
			const profiles = await get_profiles();
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

	const is_url_admin = (page) => {
		return page.url.pathname.startsWith("/admin");
	};

	const get_profiles = async () => {
		const { data, error } = await supabase
			.from("profiles")
			.select(`username, avatar_url, gender, year_of_birth, point, rating`)
			.eq("id", session.user.id);

		if (error) throw new Error(`Failed to get_profiles: ${error.message}`);
		return data[0] || [];
	};
</script>

{#if is_initialize}
	<div class="bg-gray-200">
		<div
			class:md-w-half={!is_mobile_app($platform, $operating_system) && !is_url_admin($page)}
			class="mx-auto"
		>
			<div class="min-h-screen bg-white">
				<slot />
			</div>
		</div>
	</div>
{/if}

{#if $loading || $navigating || !is_initialize}
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
</style> -->

<!-- 
<script>
	import { onMount } from "svelte";

	function loginWithKakao() {
		Kakao.Auth.authorize({
			redirectUri: "http://172.20.0.125:5173"
		});
	}

	onMount(() => {
		// 아래는 데모를 위한 UI 코드입니다.
		displayToken();
	});
	function displayToken() {
		var token = getCookie("authorize-access-token");

		if (token) {
			Kakao.Auth.setAccessToken(token);
			Kakao.Auth.getStatusInfo()
				.then(function (res) {
					if (res.status === "connected") {
						document.getElementById("token-result").innerText =
							"login success, token: " + Kakao.Auth.getAccessToken();
					}
				})
				.catch(function (err) {
					Kakao.Auth.setAccessToken(null);
				});
		}
	}

	function getCookie(name) {
		var parts = document.cookie.split(name + "=");
		if (parts.length === 2) {
			return parts[1].split(";")[0];
		}
	}
</script>

<div class="h-40 w-full bg-red-500">qwer</div>
<div class="h-40 w-full bg-red-500">qwer</div>
<div class="h-40 w-full bg-red-500">qwer</div>
<div class="h-40 w-full bg-red-500">qwer</div>
<div class="h-40 w-full bg-red-500">qwer</div>
<div class="h-40 w-full bg-red-500">qwer</div>
<div class="h-40 w-full bg-red-500">qwer</div>
<div class="mb-20">
	<a id="kakao-login-btn" on:click={loginWithKakao}>
		<img
			src="https://k.kakaocdn.net/14/dn/btroDszwNrM/I6efHub1SN5KCJqLm1Ovx1/o.jpg"
			width="222"
			alt="카카오 로그인 버튼"
		/>
	</a>
	<p id="token-result"></p>
</div> -->

<!-- src/routes/+layout.svelte -->
<script>
	import { onMount } from "svelte";
	import { App } from "@capacitor/app";

	onMount(() => {
		App.addListener("appUrlOpen", (data) => {
			const domain = "https://172.20.0.125:5173";
			const path_array = data.url.split(domain);

			const app_path = path_array.pop();

			// URL 경로에 따라 페이지로 이동
			if (app_path) {
				// SvelteKit의 navigate 함수를 사용하여 페이지 이동
				window.location.href = app_path;
			}
		});
	});
</script>
