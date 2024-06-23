<script>
	import { goto } from "$app/navigation";
	import { page } from "$app/stores";

	import Header from "@/lib/components/ui/Header/+page.svelte";
	import { onMount } from "svelte";

	export let data;

	let { supabase } = data;

	let page_count = 0;
	let back_modal = false;
	let user_info = {
		phone: "",
		nickname: "",
		gender: "",
		year_of_birth: 2000
	};

	const ref = {
		user_info_obj: {
			nickname: "",
			gender: "",
			year_of_birth: 2000
		}
	};

	/**
	 * 출생연도 리스트 생성
	 */
	const make_year_of_birth_list = () => {
		let now_year = String(new Date().getFullYear());
		let year_arr = [];

		for (let i = Number(now_year); i >= 1950; i--) {
			year_arr.push({ label: `${i}년`, value: i });
		}

		return year_arr;
	};

	/**
	 *  닉네임 중복여부 확인
	 */
	const check_nickname_duplicate = async (nickname) => {
		const { data: users } = await supabase
			.from("users")
			.select("nickname")
			.eq("nickname", nickname);

		return users.length > 0;
	};

	/**
	 * 초기 세팅
	 */
	const initial_setting = async (user_info_obj) => {
		if (await check_nickname_duplicate(user_info_obj.nickname)) {
			// toasts.add({
			// 	title: "중복된 닉네임입니다.",
			// 	description: "",
			// 	duration: 3000, // 0 or negative to avoid auto-remove
			// 	placement: "bottom-center",
			// 	type: "error",
			// 	theme: "dark",
			// 	showProgress: true
			// });
			return;
		}

		const { error } = await supabase.from("users").insert([user_info_obj]);

		if (!error) {
			goto("/home");
		}
	};

	/**
	 * 완성 후 시작 버튼 disabled
	 * : 유저가 모든 값을 입력했는지 확인하고 disabled를 풀어준다.
	 */
	const is_complete_disabled = () => {
		// for (let key in ref.user_info_obj) {
		// 	if (ref.user_info_obj[key] === "") {
		// 		return true;
		// 	}
		// }
		// return false;
	};

	/**
	 * 회원가입 다음페이지 이동
	 */
	const go_next = () => {
		if (ref.page_count === 4) {
			ref.regi_modal = true;
		} else {
			ref.page_count += 1;
		}
	};
</script>

<svelte:head>
	<title>설문모아</title>
	<meta name="description" content="수수료는 낮게, 보상은 크게 : 설문모아" />
</svelte:head>

<Header>
	<span slot="left">
		<h1 class="text-xl font-bold">설문모아</h1>
	</span>
	<span slot="right">
		<svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path
				d="M8.74512 18.6668C8.74512 16.8259 10.202 15.3335 11.9991 15.3335V15.3335C13.7962 15.3335 15.253 16.8259 15.253 18.6668V18.6668C15.253 20.5078 13.7962 22.0002 11.9991 22.0002V22.0002C10.202 22.0002 8.74512 20.5078 8.74512 18.6668V18.6668Z"
				fill="#797E8A"
			/>
			<path
				d="M4.76893 9.40743C4.76893 5.31642 8.00638 2 12 2C15.9936 2 19.231 5.31642 19.231 9.40743V10.5288C19.231 12.2126 19.7267 13.8728 20.6385 15.2738C21.5762 16.7146 20.5823 18.6667 18.8919 18.6667H5.10815C3.41773 18.6667 2.42383 16.7146 3.3615 15.2738C4.27324 13.8728 4.76893 12.2126 4.76893 10.5288V9.40743Z"
				fill="#797E8A"
			/>
		</svg>
	</span>
</Header>

<main>
	<div>캐러셀</div>
</main>
<!-- <nav class="mb-4 flex h-[60px] w-full items-center justify-between border-b border-gray-300">
	<div class="flex-1 pl-5 text-left">
		<svg width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path
				d="M8 1L1 8L8 15"
				stroke="#101118"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
		</svg>
	</div>
	<div class="flex-1 text-center font-semibold">회원가입</div>
	<div class="flex-1 pr-5 text-right"></div>
</nav> -->

<!-- <Header_title_left /> -->
<!-- 
<img
	class="absolute left-0 top-0 z-[-1] h-full w-full object-cover opacity-50"
	src={"src/lib/img.png"}
	alt="디자인 참조 이미지"
/>

<button
	class="btn btn-primary"
	on:click={async () => {
		const { data, error } = await supabase.from("countries").select();

		console.log("Data", data);
	}}>가져오거라</button
>

<button class="btn btn-primary" on:click={() => goto("/account")}
	>이건 다른 페이지로 이동하는 슬픈 자기소개서</button
> -->
