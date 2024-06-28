<script>
	import { comma } from "@/lib/js/common.js";

	import colors from "@/lib/js/colors";

	import Header from "@/lib/components/ui/Header/+page.svelte";
	import Bottom_nav from "@/lib/components/ui/Bottom_nav/+page.svelte";
	import Modal from "@/lib/components/ui/Modal/+page.svelte";

	export let data;

	let { supabase } = data;

	let isModalOpen = false;
</script>

<svelte:head>
	<title>조사 상세보기 | 설문모아</title>
	<meta name="description" content="조사 상세보기" />
</svelte:head>

<div class="flex h-full flex-col bg-white">
	<Header>
		<div slot="left">
			<svg width="9" height="17" viewBox="0 0 9 17" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path
					d="M8 1.80859L1 8.80859L8 15.8086"
					stroke="#101118"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
				/>
			</svg>
		</div>
		<div slot="center">
			<h1 class="font-semibold">설문조사</h1>
		</div>
	</Header>

	<main class="flex-1 overflow-y-scroll pb-[150px]">
		<div class="h-[175px] w-full bg-green-500"></div>

		<div class="mx-5 mt-6">
			<p class="text-lg font-semibold">두피반영구 (두피미세생소요법 SMP)에 대한 실태조사입니다.</p>
		</div>

		<div class="mx-4 mt-4">
			<p class="text-xl font-bold text-primary">{comma(1000)}원</p>

			<div class="mt-4 flex flex-col gap-2.5">
				<p class="text-sm"><span class="pr-4 text-gray-800">소요 시간</span><span>8분</span></p>

				<p class="text-sm"><span class="pr-4 text-gray-800">마감 날짜</span><span>D - 7</span></p>

				<p class="text-sm">
					<span class="pr-4 text-gray-800">모집 정보</span><span>20 ~ 29세 성별 모두</span>
				</p>
				<p class="flex justify-center text-sm">
					<span class="flex-shrink-0 pr-8 text-gray-800">진행률</span>
					<span class="mt-1.5 h-2 w-full rounded-full bg-gray-300 dark:bg-gray-300">
						<div class="h-2 rounded-full bg-primary" style={`width: ${30}%`} />
					</span>
				</p>
			</div>
		</div>

		<div class="mx-4 mt-6">
			<div class="h-[184px] w-full overflow-scroll rounded-[7px] bg-gray-50 px-5 py-4">
				<p class="text-sm">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, sed ea aut quod totam
					temporibus ducimus animi. Excepturi quod magni tenetur assumenda veniam. Est, repellat.
					Enim corrupti tempora obcaecati assumenda. Lorem ipsum, dolor sit amet consectetur
					adipisicing elit. Quibusdam fuga dolore, temporibus eum beatae sapiente modi fugiat eos
					veritatis incidunt laudantium. Nihil eveniet quibusdam hic voluptates praesentium
					explicabo, libero eaque!
				</p>
			</div>
		</div>

		<div class="fixed bottom-3.5 left-0 right-0 mx-4">
			<button class="btn btn-primary w-full text-white">다음</button>
		</div>
	</main>
</div>
