<script>
	import { supabase } from "@/lib/supabase_client";

	import apple_login_png from "@/lib/img/login/apple_login.png";
	import kakao_login_png from "@/lib/img/login/kakao_login.png";
	import phone_login_png from "@/lib/img/login/phone_login.png";

	/**
	 * supabase oauth 로그인
	 * @param {import("@supabase/supabase-js").Provider} platform
	 */
	const supabase_oauth_login = async (platform) => {
		await supabase.auth.signInWithOAuth({
			provider: platform
		});
	};

	/**
	 * 휴대폰 번호로 로그인
	 */
	const phone_login = () => {
		alert("휴대폰 번호로 로그인");
	};
</script>

<div class="flex h-screen flex-col justify-end">
	<div class="mt-10 flex h-full flex-col items-center justify-center">
		<div class="mt-6 h-40 w-40 bg-gray-400" aria-label="앱 로고"></div>

		<h1 class="mt-4 text-xl font-semibold">설문모아</h1>
		<div class="mt-2">내 의견이 돈이 되는 세상</div>
	</div>

	<div class="flex flex-col items-center justify-center gap-5 pb-6">
		<button on:click={() => supabase_oauth_login("apple")}>
			<img class="h-12" src={apple_login_png} alt="애플 로그인 버튼" />
		</button>

		<button on:click={() => supabase_oauth_login("kakao")}>
			<img class="h-12" src={kakao_login_png} alt="카카오 로그인 버튼" />
		</button>

		<button on:click={phone_login}>
			<img class="h-12" src={phone_login_png} alt="핸드폰 로그인 버튼" />
		</button>
	</div>
</div>
