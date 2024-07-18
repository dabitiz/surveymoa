<script>
	const TITLE = "주문 상세";

	import { goto } from "$app/navigation";
	import { page } from "$app/stores";

	import { update_global_store } from "@/lib/store/global_store";
	import {
		copy_to_clipboard,
		comma,
		calculate_d_day,
		format_date,
		show_toast
	} from "@/lib/js/common";
	import Header from "@/lib/components/ui/Header/+page.svelte";
	import Account from "@/lib/components/Account/+page.svelte";
	import Icon from "@/lib/components/ui/Icon/+page.svelte";
	import Chip from "@/lib/components/ui/Chip/+page.svelte";
	import Modal from "@/lib/components/ui/Modal/+page.svelte";
	import research_category_png from "@/lib/img/common/research_category/research_category.png";
	import etc_category_png from "@/lib/img/common/research_category/etc_category.png";

	export let data;
	let { supabase, session, research, account_user } = data;
	$: ({ supabase, session } = data);

	let is_cancel_research_modal = false;

	const cancel_research = async () => {
		update_global_store("loading", true);
		try {
			await api_update_research("결제취소");
			research.status = "결제취소";
			is_cancel_research_modal = false;

			show_toast("success", "결제가 취소되었습니다.");
		} finally {
			update_global_store("loading", false);
		}
	};

	const api_update_research = async (status) => {
		const { error } = await supabase.from("research").update({ status }).eq("id", research.id);

		if (error) throw new Error(`Failed to api_update_research: ${error.message}`);
	};
</script>

<Header nav_class="border-0 bg-white">
	<button
		slot="left"
		class="flex items-center"
		on:click={() => goto("/see_more/comissioned_research")}
	>
		<Icon name="left_arrow" />
	</button>
	<h1 slot="center" class="font-semibold">{TITLE}</h1>
</Header>

<div class="mx-5 mt-5">
	<p class="text-sm font-semibold">주문번호 {$page.params.research_id}</p>

	<div class="mt-1.5 flex items-center justify-between">
		<p class={`font-bold ${research.status === "결제취소" ? "text-gray-900" : ""}`}>
			{research.status}
		</p>

		<button on:click={() => copy_to_clipboard("10430104503406")}>
			<u class="text-sm text-gray-900">계좌복사 </u>
		</button>
	</div>
	<p class="mt-0.5 text-sm text-gray-900">국민은행 10430104503406</p>
</div>

<div class="mt-6 h-px bg-gray-300" />

<div class="mx-6 py-6">
	<div class=" flex items-center justify-between">
		<Chip name={research.category === "research" ? "설문조사" : ""} />

		<p class="text-sm text-gray-800">
			{format_date(research.start_date)} ~ {format_date(research.end_date)}
		</p>
	</div>

	<p class="mt-3.5 line-clamp-2 font-semibold">{research.title}</p>

	<div class="mt-4 flex">
		{#if research.images.length > 0}
			<img
				src={research.images[0].uri}
				alt={research.category}
				class="mr-5 h-20 w-20 flex-shrink-0 rounded-xl object-cover"
			/>
		{:else}
			<img
				src={research.category === "research" ? research_category_png : etc_category_png}
				alt={research.category}
				class="mr-5 h-20 w-20 flex-shrink-0 rounded-xl object-cover"
			/>
		{/if}

		<div class="flex text-sm">
			<div class="flex flex-col justify-between pr-4">
				<p class="font-semibold text-gray-800">보상금</p>
				<p class="font-semibold text-gray-800">소요 시간</p>
				<p class="font-semibold text-gray-800">마감 날짜</p>
				<p class="font-semibold text-gray-800">모집 정보</p>
			</div>
			<div class="flex flex-col justify-between">
				<p class="text-base font-bold text-primary">{comma(research.price)}원</p>
				<p>{research.expected_time}분</p>
				<p>D - {calculate_d_day(research.end_date)}</p>
				<p>
					{research.min_age} ~ {research.max_age}세 성별
					{research.gender === "all" ? "모두" : research.gender === "male" ? "남자" : "여자"},

					{research.recruitment_num}명
				</p>
			</div>
		</div>
	</div>
</div>

<div class="h-2 bg-gray-300" />

<div class="mx-5 py-6">
	<p class="mb-4 font-semibold">입금자 정보</p>

	<Account {supabase} {session} bind:account={account_user} />
</div>

<div class="h-2 bg-gray-300" />

<div class="mx-5  mt-6">
	<p class="font-semibold">결제정보</p>

	<div class="mt-4 flex items-center justify-between">
		<p class="font-semibold">총 결제 금액</p>
		<p class="text-lg font-bold text-primary">60,000원</p>
	</div>

	<div class="mt-4 h-px bg-gray-300" />

	<div class="mt-4 flex items-center justify-between">
		<p class="text-gray-900">입금은행</p>
		<p>국민은행</p>
	</div>

	<div class="mt-4 flex items-center justify-between">
		<p class="text-gray-900">입금계좌</p>
		<p class="font-semibold">10430104503406</p>
	</div>
</div>

{#if research.status === "결제대기"}
	<div class="mx-5  pb-safe mb-3.5 mt-8">
		<button
			on:click={() => (is_cancel_research_modal = true)}
			class="btn w-full bg-gray-200 text-gray-900">결제 취소하기</button
		>
	</div>
{/if}

<Modal bind:is_modal_open={is_cancel_research_modal} modal_position="center">
	<div class="p-5">
		<h3 class=" font-semibold">조사를 취소하시겠어요?</h3>

		<div class="mt-8 flex justify-end gap-3">
			<button on:click={() => (is_cancel_research_modal = false)} class="btn btn-sm">닫기</button>
			<button on:click={cancel_research} class="btn btn-error btn-sm text-white">취소하기</button>
		</div>
	</div>
</Modal>
