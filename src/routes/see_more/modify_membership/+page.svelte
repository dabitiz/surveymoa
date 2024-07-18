<script>
	const TITLE = "회원 정보 설정";

	import { goto } from "$app/navigation";

	import { show_toast } from "@/lib/js/common.js";
	import Header from "@/lib/components/ui/Header/+page.svelte";
	import Modal from "@/lib/components/ui/Modal/+page.svelte";
	import Icon from "@/lib/components/ui/Icon/+page.svelte";

	export let data;

	let { supabase, session } = data;
	$: ({ supabase, session } = data);

	let logout_modal = false;

	const logout = async () => {
		if (session) {
			await supabase.auth.signOut({ scope: "local" });
			goto("/");
			show_toast("success", "로그아웃 되었습니다.");
		}
	};
</script>

<svelte:head>
	<title>{TITLE} | 설문모아</title>
	<meta name="description" content={TITLE} />
</svelte:head>

<Header>
	<button slot="left" class="flex items-center" on:click={() => history.back()}>
		<Icon name="left_arrow" />
	</button>
	<h1 slot="center" class="font-semibold">{TITLE}</h1>
</Header>

<main>
	<div class="mx-5 mt-5 flex flex-col gap-[30px]">
		<a href="modify_membership/modify_profile" class="flex items-center justify-between">
			<span>프로필 정보 수정</span>
			<svg width="7" height="13" viewBox="0 0 7 13" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path
					d="M0.998535 11.1914L5.99853 6.19141L0.998535 1.19141"
					stroke="#909090"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
				/>
			</svg>
		</a>
		<button class="flex items-center justify-between" on:click={() => (logout_modal = true)}>
			<span>로그아웃</span>
			<svg width="7" height="13" viewBox="0 0 7 13" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path
					d="M0.998535 11.1914L5.99853 6.19141L0.998535 1.19141"
					stroke="#909090"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
				/>
			</svg>
		</button>

		<a class="flex items-center justify-between" href="modify_membership/withdrawal_member">
			<span>회원 탈퇴</span>
			<svg width="7" height="13" viewBox="0 0 7 13" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path
					d="M0.998535 11.1914L5.99853 6.19141L0.998535 1.19141"
					stroke="#909090"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
				/>
			</svg>
		</a>
	</div>

	<Modal bind:is_modal_open={logout_modal} modal_position="center">
		<div class="p-5">
			<h3 class=" font-semibold">로그아웃 하시겠어요?</h3>

			<div class="mt-8 flex justify-end gap-3">
				<button on:click={() => (logout_modal = false)} class="btn btn-sm">닫기</button>
				<button on:click={logout} class="btn btn-error btn-sm text-white">로그아웃</button>
			</div>
		</div>
	</Modal>
</main>
