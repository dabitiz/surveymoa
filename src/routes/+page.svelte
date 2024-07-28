<script>
	import { Device } from "@capacitor/device";
	import { onMount } from "svelte";
	import { goto } from "$app/navigation";
	import { InAppBrowser } from "@capgo/inappbrowser";

	import { show_toast } from "$lib/js/common.js";
	import { PUBLIC_CLIENT_URL } from "$env/static/public";
	import apple_login_png from "@/lib/img/partials/login/apple_login.png";
	import kakao_login_png from "@/lib/img/partials/login/kakao_login.png";
	import phone_login_png from "@/lib/img/partials/login/phone_login.png";

	const KAKAO_AUTH_URL =
		"https://kauth.kakao.com/oauth/authorize?" +
		"response_type=code&" +
		"client_id=e6e8757e36c31c971cdf71d7dad048a6&" +
		`redirect_uri=https://glamuiwujgrlmauesueb.supabase.co/auth/v1/callback&`;

	export let data;
	$: ({ supabase, session } = data);

	/**
	 * supabase oauth 로그인
	 * @param {import("@supabase/supabase-js").Provider} provider
	 */
	const supabase_oauth_login = async (provider) => {
		const info = await Device.getInfo();

		if (info.platform === "web") {
			await supabase.auth.signInWithOAuth({
				provider,
				options: {
					redirectTo: `https://glamuiwujgrlmauesueb.supabase.co/auth/v1/callback`
				}
			});
		} else {
			await InAppBrowser.openWebView({
				url: KAKAO_AUTH_URL,
				//if true, the browser will be presented after the page is loaded, if false, the browser will be presented immediately.
				//isPresentAfterPageLoad가 있어야 구글폼에서 InAppBrowser.executeScript가 동작
				isPresentAfterPageLoad: true,
				closeModal: true,
				closeModalTitle: "응답을 그만두시겠습니까?",
				closeModalDescription: "",
				closeModalCancel: "이어하기",
				closeModalOk: "그만두기"
			});
		}
	};

	onMount(() => {
		// if (session) {
		// 	auto_login();
		// }
	});

	/**
	 * 자동 로그인
	 */
	const auto_login = async () => {
		const profiles = await get_profiles();

		if (profiles.gender) {
			goto("/home");
		} else {
			goto("/setting");
		}
	};
</script>

<svelte:head>
	<title>설문모아</title>
	<meta name="description" content="수수료는 낮게, 보상은 크게 : 설문모아" />
</svelte:head>

<main class="pb-safe flex h-screen flex-col justify-end">
	<div class="mt-10 flex h-full flex-col items-center justify-center">
		<div class="mt-6 h-40 w-40 bg-gray-400" aria-label="앱 로고"></div>

		<h1 class="mt-4 text-xl font-semibold">설문모아</h1>
		<p class="mt-2">내 의견이 돈이 되는 세상</p>
	</div>

	<div class="flex flex-col items-center justify-center gap-5 pb-6">
		<button
			on:click={() => {
				show_toast("info", "준비중입니다.");
			}}
		>
			<img class="h-12" src={apple_login_png} alt="애플 로그인 버튼" />
		</button>

		<button on:click={() => supabase_oauth_login("kakao")}>
			<img class="h-12" src={kakao_login_png} alt="카카오 로그인 버튼" />
		</button>
	</div>
</main>
