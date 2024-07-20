<script>
	import { goto } from "$app/navigation";

	import colors from "$lib/js/colors";

	import Header from "@/lib/components/ui/Header/+page.svelte";
	import Bottom_nav from "@/lib/components/ui/Bottom_nav/+page.svelte";
	import Icon from "@/lib/components/ui/Icon/+page.svelte";

	const TITLE = "더보기";
</script>

<svelte:head>
	<title>{TITLE} | 설문모아</title>
	<meta name="description" content={TITLE} />
</svelte:head>

<Header>
	<h1 class="text-xl font-bold text-gray-950" slot="left">{TITLE}</h1>

	<button slot="right" on:click={() => goto("/alarm")} class="flex items-center">
		<svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
			<Icon name="alarm" />
			<!-- <circle cx="17.5" cy="4.5" r="3.5" fill={colors.error} /> -->
		</svg>
	</button>
</Header>

<main>
	<div class="mx-5 mt-5">
		<a href="see_more/modify_membership" class="flex items-center gap-4">
			<svg
				width="18"
				height="20"
				viewBox="0 0 18 20"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<circle cx="8.75" cy="5" r="5" fill="#797E8A" />
				<path
					d="M0.72351 15.5296C1.5479 12.7797 4.27173 11.25 7.14258 11.25H10.3574C13.2283 11.25 15.9521 12.7797 16.7765 15.5296C17.0965 16.5971 17.3602 17.786 17.4586 19.001C17.5032 19.5514 17.0523 20 16.5 20H1C0.447715 20 -0.00317554 19.5514 0.0414045 19.001C0.139794 17.786 0.403484 16.5971 0.72351 15.5296Z"
					fill="#797E8A"
				/>
			</svg> <span>회원 정보 설정</span>
		</a>
		<a href="see_more/account_info" class="mt-7 flex items-center gap-4">
			<svg
				width="19"
				height="19"
				viewBox="0 0 19 19"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<rect width="19" height="19" rx="3" fill="#797E8A" />
				<path
					d="M10.5557 9.50027C10.5557 8.33434 11.5008 7.38916 12.6668 7.38916H19.0001V11.6114H12.6668C11.5008 11.6114 10.5557 10.6662 10.5557 9.50027Z"
					fill="white"
				/>
			</svg><span>내 계좌 정보</span>
		</a>
	</div>
	<div class="divider h-2 bg-gray-300" />

	<div class="mx-5 mt-5">
		<p class="font-semibold">나의 설문조사</p>
		<a href="see_more/participated_research" class="mt-7 flex items-center gap-4">
			<svg
				width="20"
				height="20"
				viewBox="0 0 20 20"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<circle cx="10" cy="10" r="9.5" fill="#797E8A" stroke="#797E8A" />
				<path
					d="M14.2969 6.99219L9.57031 13.4375L6.34766 9.78516"
					stroke="white"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
				/>
			</svg>
			<span>참여한 조사</span>
		</a>
		<a href="see_more/comissioned_research" class="mt-7 flex items-center gap-4">
			<svg
				width="21"
				height="22"
				viewBox="0 0 21 22"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<rect width="19" height="21" rx="3" fill="#C5C8CD" />
				<rect x="4" y="6" width="11" height="1.4" rx="0.7" fill="white" />
				<rect x="4" y="10" width="11" height="1.4" rx="0.7" fill="white" />
				<rect x="4" y="14" width="7" height="1.4" rx="0.7" fill="white" />
				<rect
					x="11.8484"
					y="16.8781"
					width="5.8"
					height="5.8"
					rx="2.9"
					transform="rotate(-44 11.8484 16.8781)"
					stroke="#797E8A"
					stroke-width="1.2"
				/>
				<rect
					x="18.0254"
					y="19.5452"
					width="0.5"
					height="2.83333"
					rx="0.25"
					transform="rotate(-44 18.0254 19.5452)"
					fill="#797E8A"
					stroke="#797E8A"
					stroke-width="0.5"
				/>
			</svg><span>의뢰한 조사</span>
		</a>
	</div>
	<div class="divider h-2 bg-gray-300" />

	<div class="mx-5 mt-5">
		<a href="see_more/notice" class="mt-7">공지사항</a>
		<a href="see_more/terms_of_use" class="mt-7 block">이용약관</a>
		<a href="see_more/privacy_policy" class="mt-7 block">개인정보 처리방침</a>
		<a href="see_more/open_source_license" class="mt-7 block">오픈소스 라이센스</a>
		<p class="mt-7 flex justify-between">버전정보 <span class="text-primary">V.0.1</span></p>
	</div>
	<div class="divider h-2 bg-gray-300" />

	<div class="mx-5 mt-5">
		<p class="font-semibold">문의 및 지원</p>
		<p class="mt-7 flex items-center gap-4">
			<span>카카오톡 문의</span>
		</p>
	</div>
</main>

<Bottom_nav />
