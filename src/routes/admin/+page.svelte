<script>
	const TITLE = "관리자 계정";

	import { goto } from "$app/navigation";

	import Header from "@/lib/components/ui/Header/+page.svelte";
	import Icon from "@/lib/components/ui/Icon/+page.svelte";

	export let data;
	let { supabase, session } = data;
	$: ({ supabase, session } = data);
</script>

<Header nav_class="bg-white">
	<button slot="left" class="flex items-center" on:click={() => goto("/home")}>
		<Icon name="left_arrow" />
	</button>
	<h1 slot="center" class="font-semibold">{TITLE}</h1>
</Header>

<main>
	<div class="mx-5 mt-5">
		<p class="font-semibold">설문 조사</p>

		<div class="flex flex-col">
			<a href="admin/research/approval" class="ml-4 mt-7 flex items-center">조사 승인</a>
			<a href="admin/research/set_screening" class="ml-4 mt-7 flex items-center"
				>조사 스크리닝 설정</a
			>
		</div>
	</div>
	<div class="divider h-2 bg-gray-300" />

	<div class="mx-5 mt-5">
		<p class="font-semibold">포인트</p>

		<div class="flex flex-col">
			<a href="admin/point/withdrawal_approval" class="ml-4 mt-7 flex items-center">출금 승인</a>
		</div>
	</div>
	<div class="divider h-2 bg-gray-300" />
</main>
