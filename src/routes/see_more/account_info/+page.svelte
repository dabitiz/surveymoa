<script>
	import { goto } from "$app/navigation";
	import { page } from "$app/stores";

	import colors from "$lib/js/colors";

	import Header from "@/lib/components/ui/Header/+page.svelte";
	import Modal from "@/lib/components/ui/Modal/+page.svelte";
	import Icon from "@/lib/components/ui/Icon/+page.svelte";

	export let data;

	const TITLE = "계좌 정보";

	let { supabase } = data;

	let account_modal = true;
</script>

<svelte:head>
	<title>{TITLE} | 설문모아</title>
	<meta name="description" content={TITLE} />
</svelte:head>

<Header>
	<button slot="left" class="flex items-center" on:click={() => history.back()}>
		<Icon name="back" />
	</button>
	<h1 slot="center" class="font-semibold">{TITLE}</h1>
</Header>

<main>
	<div class="pb-safe fixed bottom-3.5 left-0 right-0 mx-4 flex justify-center">
		<button class="btn btn-primary w-full text-white md:w-1/2">계좌 등록하기</button>
	</div>

	<Modal bind:is_modal_open={account_modal} modal_position="bottom">
		<div class="flex flex-col justify-center">
			<div class="divider flex h-1 w-20 bg-red-400" />

			<div>계좌 등록하기</div>
		</div>
		<!-- <div class="divider h-10 bg-red-500"></div>
		<h3 class="font-bold">계좌 등록하기</h3>

		<div class="mt-12 flex gap-2">
			<button
				class="btn flex-1 border-gray-300 bg-gray-300"
				on:click={() => {
					logout_modal = false;
				}}>취소</button
			>

			<button class="btn btn-error flex-1 text-white">확인</button>
		</div> -->
	</Modal>
</main>
