<script>
	import colors from "$lib/js/colors";

	import Header from "@/lib/components/ui/Header/+page.svelte";
	import Bottom_nav from "@/lib/components/ui/Bottom_nav/+page.svelte";
	import Icon from "@/lib/components/ui/Icon/+page.svelte";

	import Modal from "@/lib/components/ui/Modal/+page.svelte";

	export let data;

	const TITLE = "리서치";

	let { supabase } = data;

	let isModalOpen = false;
</script>

<svelte:head>
	<title>{TITLE}</title>
	<meta name="description" content={TITLE} />
</svelte:head>

<div class="min-h-screen bg-gray-200">
	<Header nav_class="bg-gray-200">
		<h1 slot="left" class="text-xl font-bold text-gray-800">{TITLE}</h1>
		<button slot="right" on:click={() => alert("준비중입니다.")} class="flex items-center">
			<svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
				<Icon name="alarm" />
				<circle cx="17.5" cy="4.5" r="3.5" fill={colors.error} />
			</svg>
		</button>
	</Header>

	<main>
		<div class="mt-5 flex flex-wrap gap-4 px-5">
			<label class="inline-flex items-center">
				<input type="radio" name="options" value="all" class="peer hidden" checked />
				<span
					class="cursor-pointer rounded-full bg-gray-200 px-[14px] py-2 text-sm font-semibold text-gray-700 transition-colors duration-200 peer-checked:bg-gray-950 peer-checked:text-white"
				>
					전체
				</span>
			</label>
			<label class="inline-flex items-center">
				<input type="radio" name="options" value="active" class="peer hidden" />
				<span
					class="cursor-pointer rounded-full bg-gray-200 px-[14px] py-2 text-sm font-semibold text-gray-700 transition-colors duration-200 peer-checked:bg-gray-950 peer-checked:text-white"
				>
					설문조사
				</span>
			</label>
			<label class="inline-flex items-center">
				<input type="radio" name="options" value="inactive" class="peer hidden" />
				<span
					class="cursor-pointer rounded-full bg-gray-200 px-[14px] py-2 text-sm font-semibold text-gray-700 transition-colors duration-200 peer-checked:bg-gray-950 peer-checked:text-white"
				>
					인터뷰
				</span>
			</label>
			<label class="inline-flex items-center">
				<input type="radio" name="options" value="inactive" class="peer hidden" />
				<span
					class="cursor-pointer rounded-full bg-gray-200 px-[14px] py-2 text-sm font-semibold text-gray-700 transition-colors duration-200 peer-checked:bg-gray-950 peer-checked:text-white"
				>
					기타
				</span>
			</label>
		</div>

		<div class="mt-5 px-5">
			<article class=" flex h-[153px] rounded-[14px] bg-white p-5">
				<img
					class="mr-5 h-[102px] w-[102px] flex-shrink-0 rounded-xl object-cover"
					alt=""
					src="https://images.unsplash.com/photo-1719150016704-270c5a0deee4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8"
				/>
				<div class="flex flex-1 flex-col">
					<div class="flex">
						<div class="mr-[6px] rounded-sm bg-gray-200 px-[8px] py-[5px]">
							<p class="text-xs text-gray-950">설문조사</p>
						</div>
						<div class="rounded-sm bg-gray-200 px-[8px] py-[5px]">
							<p class="text-xs text-gray-950">5분</p>
						</div>
					</div>

					<p class="mt-2 line-clamp-2 h-9 text-sm">
						두피반영구 (두피미세생소요법 SMP)에 대한 실태조사입니다 그렇습니다 반갑습니다
					</p>

					<p class="mt-2 font-bold text-primary">1000원</p>

					<div class="mt-1.5 h-1 w-full rounded-full bg-gray-300 dark:bg-gray-300">
						<div class="h-1 rounded-full bg-primary" style={`width: ${30}%`} />
					</div>
				</div>
			</article>
		</div>

		<button class="btn" on:click={() => {}}>open modal</button>

		<Modal bind:is_modal_open={isModalOpen} modal_position="bottom">
			<h3 class="font-bold">현재 직업을 선택해 주세요</h3>
			<div
				class="mt-[23px] flex items-center rounded-lg border border-primary bg-[#e9f0ff] py-4 pl-5"
			>
				<button
					class="mr-3 flex h-5 w-5 items-center justify-center rounded-full bg-primary font-bold text-white"
				>
					<div class="h-2 w-2 rounded-full bg-white"></div>
				</button>

				<p>학생</p>
			</div>

			<div class="mt-[8px] flex items-center rounded-lg bg-gray-50 py-4 pl-5">
				<button
					class="mr-3 flex h-5 w-5 items-center justify-center rounded-full bg-gray-700 font-bold text-white"
				>
					<div class="h-4 w-4 rounded-full bg-white"></div>
				</button>

				<p>주부</p>
			</div>
			<button class="btn btn-primary mt-[46px] w-full rounded-xl text-white">다음</button>
		</Modal>

		<Bottom_nav />
	</main>
</div>
