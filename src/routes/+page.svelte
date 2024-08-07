<script>
	import { Device } from "@capacitor/device";
	import { onMount } from "svelte";
	import { goto } from "$app/navigation";
	import { Capacitor } from "@capacitor/core";

	import { show_toast } from "$lib/js/common.js";
	import { PUBLIC_CLIENT_URL } from "$env/static/public";
	import apple_login_png from "@/lib/img/partials/login/apple_login.png";
	import kakao_login_png from "@/lib/img/partials/login/kakao_login.png";
	import app_store from "@/lib/img/common/app_store/app_store.png";
	import play_store from "@/lib/img/common/app_store/play_store.png";

	export let data;

	$: ({ supabase, session } = data);

	/**
	 * supabase oauth 로그인
	 * @param {import("@supabase/supabase-js").Provider} provider
	 */
	const supabase_oauth_login = async (provider) => {
		const info = await Device.getInfo();

		if (info.platform === "web") {
			supabase.auth.signInWithOAuth({
				provider,
				options: {
					redirectTo: `${PUBLIC_CLIENT_URL}/auth/callback/web`
				}
			});
		} else {
			supabase.auth.signInWithOAuth({
				provider,
				options: {
					redirectTo: `com.svelte.surveymoa://auth/callback/mobile`
				}
			});
		}
	};

	onMount(() => {
		if (session) {
			auto_login();
		}
	});

	const auto_login = async () => {
		const profiles = await get_profiles();

		if (profiles.gender) {
			goto("/home");
		} else {
			goto("/setting");
		}
	};

	const get_profiles = async () => {
		const { data, error } = await supabase
			.from("profiles")
			.select(`gender`)
			.eq("id", session.user.id);

		if (error) throw new Error(`Failed to get_profiles: ${error.message}`);
		return data[0] || [];
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

	<div class="flex flex-col items-center justify-center pb-10">
		<button
			on:click={() => {
				show_toast("info", "준비중입니다.");
			}}
		>
			<img class="h-12" src={apple_login_png} alt="애플 로그인 버튼" />
		</button>

		<button on:click={() => supabase_oauth_login("kakao")}>
			<img class="mt-2 h-12" src={kakao_login_png} alt="카카오 로그인 버튼" />
		</button>
	</div>
</main>

{#if !Capacitor.isNativePlatform()}
	<div class="mx-6">
		<p class="text-[13px] text-[#767676]">대표 : 김도형</p>
		<p class="mt-1.5 text-[13px] text-[#767676]">부산 부산진구 중앙대로 694 쥬디스태화 9층</p>
		<p class="mt-1.5 text-[13px] text-[#767676]">사업자등록번호 : 531-78-00406</p>
		<p class="mt-1.5 text-[13px] text-[#767676]">개인정보보호책임자 : 이상민</p>
		<p class="mt-1.5 text-[13px] text-[#767676]">이메일: dabitiz@surveymoa.com</p>
		<p class="mt-8 text-lg font-semibold text-[#111111]">070-8098-4659</p>

		<div class="mt-[30px] flex pb-8">
			<img src={app_store} alt="app_store" class="mr-2 h-11 w-[120px]" />
			<img src={play_store} alt="play_store" class="h-11 w-[120px]" />
		</div>
	</div>
{/if}
