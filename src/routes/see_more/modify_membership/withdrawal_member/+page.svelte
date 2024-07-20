<script>
	const TITLE = "회원 탈퇴";

	import { username } from "$lib/store/profiles_store.js";

	import Icon from "@/lib/components/ui/Icon/+page.svelte";
	import Header from "@/lib/components/ui/Header/+page.svelte";

	export let data;
	let { supabase, session } = data;
	$: ({ supabase, session } = data);

	const withdrawal_account = () => {
		update_global_store("loading", true);
		try {
		} finally {
			update_global_store("loading", false);
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
	<div class="mx-5 mt-5">
		<p class="text-xl font-semibold">{$username}님, 잠시만요!</p>
		<p class="text-xl font-semibold">탈퇴하기 전에 한번 더 확인해주세요!</p>
	</div>

	<div class="mx-5 mt-[50px]">
		<p class=" text-xl font-semibold">계정을 삭제하면</p>

		<div class="mt-8 bg-gray-50 p-5">
			<p class="text-sm">- {$username}님의 포인트가 모두 사라지고 복구되지 않아요</p>
			<br />

			<p class="mt text-sm">- 탈퇴 후 90일 간 재가입을 할 수 없어요</p>
		</div>
	</div>

	<div class="pb-safe fixed bottom-3.5 left-0 right-0 mx-4 flex justify-center">
		<button class="btn w-full md:w-1/2" on:click={withdrawal_account}>회원 탈퇴</button>
	</div>
</main>
