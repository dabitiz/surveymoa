<script>
	import { page } from "$app/stores";

	import { comma } from "@/lib/js/common.js";

	import colors from "@/lib/js/colors";

	import Header from "@/lib/components/ui/Header/+page.svelte";
	import Icon from "@/lib/components/ui/Icon/+page.svelte";

	export let data;

	const TITLE = "프로필 정보 수정";

	let { supabase } = data;

	let nickanme = "이상민";
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
	<div class="flex items-center justify-center border-b-8 py-10">
		<button class="avatar relative">
			<div class="w-20 rounded-full">
				<img
					src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
					alt=""
				/>
			</div>

			<svg
				class="absolute bottom-0 right-0"
				width="30"
				height="31"
				viewBox="0 0 30 31"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<rect y="0.808594" width="30" height="30" rx="15" fill="#237BF8" />
				<path
					d="M16.484 11.1419L17.765 12.4753H20.6V20.4753H9.4V12.4753H12.235L13.516 11.1419H16.484ZM17.1 9.80859H12.9L11.619 11.1419H9.4C8.63 11.1419 8 11.7419 8 12.4753V20.4753C8 21.2086 8.63 21.8086 9.4 21.8086H20.6C21.37 21.8086 22 21.2086 22 20.4753V12.4753C22 11.7419 21.37 11.1419 20.6 11.1419H18.381L17.1 9.80859ZM15 14.4753C16.155 14.4753 17.1 15.3753 17.1 16.4753C17.1 17.5753 16.155 18.4753 15 18.4753C13.845 18.4753 12.9 17.5753 12.9 16.4753C12.9 15.3753 13.845 14.4753 15 14.4753ZM15 13.1419C13.068 13.1419 11.5 14.6353 11.5 16.4753C11.5 18.3153 13.068 19.8086 15 19.8086C16.932 19.8086 18.5 18.3153 18.5 16.4753C18.5 14.6353 16.932 13.1419 15 13.1419Z"
					fill="white"
				/>
			</svg>
		</button>
	</div>

	<div class="mt-6 flex flex-col border-b-8 px-5 pb-6">
		<div>
			<p class="font-semibold">생년월일</p>
			<p class="mt-4">2000.05.04</p>
		</div>
		<div class="mt-4">
			<p class="font-semibold">성별</p>
			<p class="mt-4">남</p>
		</div>
	</div>

	<div class="mt-6 flex flex-col px-5 pb-6">
		<p class="font-semibold">닉네임</p>
		<label class="relative mt-4">
			<input
				value={nickanme}
				type="text"
				class="w-full rounded-none border-b border-gray-300 pb-6 outline-none focus:border-primary"
				placeholder="닉네임"
			/>
			<button
				on:click={() => {
					nickanme = "";
				}}
				class="absolute right-2 top-3 -translate-y-1/2 transform text-gray-400 hover:text-gray-600"
			>
				<svg
					width="17"
					height="18"
					viewBox="0 0 17 18"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<circle cx="8.5" cy="9.30859" r="8.5" fill="#C7C7C8" />
					<path
						d="M5.66406 12.1406L11.3307 6.47396"
						stroke="white"
						stroke-width="1.4"
						stroke-linecap="round"
					/>
					<path
						d="M11.3359 12.1406L5.66927 6.47396"
						stroke="white"
						stroke-width="1.4"
						stroke-linecap="round"
					/>
				</svg>
			</button>
		</label>
	</div>

	<div class="pb-safe fixed bottom-3.5 left-0 right-0 mx-4 flex justify-center">
		<button class="btn btn-primary w-full text-white md:w-1/2">수정하기</button>
	</div>
</main>
