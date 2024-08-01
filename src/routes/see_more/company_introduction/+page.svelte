<script>
	const TITLE = "회사 소개";

	import Header from "@/lib/components/ui/Header/+page.svelte";
	import Icon from "@/lib/components/ui/Icon/+page.svelte";
	import app_store from "@/lib/img/common/app_store/app_store.png";
	import play_store from "@/lib/img/common/app_store/play_store.png";
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
	<div class="mx-6 mt-6">
		<p class="text-[13px] text-[#767676]">대표 : 김도형</p>
		<p class="mt-1.5 text-[13px] text-[#767676]">부산 부산진구 중앙대로 694 쥬디스태화 9층</p>
		<p class="mt-1.5 text-[13px] text-[#767676]">사업자등록번호 : 531-78-00406</p>
		<p class="mt-1.5 text-[13px] text-[#767676]">개인정보보호책임자 : 김도형</p>
		<p class="mt-1.5 text-[13px] text-[#767676]">이메일: dabitiz@surveymoa.com</p>
		<p class="mt-8 text-lg font-semibold text-[#111111]">010-2955-8898</p>

		<div class="mt-[30px] flex pb-8">
			<img src={app_store} alt="app_store" class="mr-2 h-11 w-[120px]" />
			<img src={play_store} alt="play_store" class="h-11 w-[120px]" />
		</div>
	</div>
</main>
