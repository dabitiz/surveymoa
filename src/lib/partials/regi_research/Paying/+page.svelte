<script>
	import Account from "@/lib/components/Account/+page.svelte";
	import { comma } from "$lib/js/common";
	import Chip from "@/lib/components/ui/Chip/+page.svelte";
	import research_category_png from "@/lib/img/common/research_category/research_category.png";
	import etc_category_png from "@/lib/img/common/research_category/etc_category.png";

	export let supabase,
		session,
		account,
		category,
		images,
		title,
		start_date,
		end_date,
		recruitment_num,
		min_age,
		max_age,
		gender,
		expected_time,
		price,
		amount,
		payment_method;

	const format_date = (date) => {
		return `${date?.getFullYear() - 2000}. ${("0" + (date.getMonth() + 1)).slice(-2)}. ${("0" + date.getDate()).slice(-2)}`;
	};

	/**
	 * 오늘 날짜로부터 d-day 구하기
	 * @param {date} end_date : 끝나는 날짜
	 */
	const calculate_d_day = (end_date) => {
		const today = new Date();
		const comparison_date = new Date(end_date);

		today.setHours(0, 0, 0, 0); //시간 차이 제거
		comparison_date.setHours(0, 0, 0, 0); ////시간 차이 제거

		// 두 날짜의 차이(밀리초 단위)를 구함
		let difference_millie_seconds = comparison_date - today;

		// 밀리초 단위의 차이를 일(day) 단위로 변환
		let difference_in_days = difference_millie_seconds / (1000 * 60 * 60 * 24);

		if (difference_in_days < 0) {
			return "마감";
		}

		return difference_in_days;
	};
</script>

<div class="mx-4 mt-5">
	<p class="font-semibold">입금자 정보</p>

	<div class="mt-4">
		<Account {supabase} {session} bind:account />
	</div>
</div>

<div class="mt-6 h-2 bg-gray-200" />

<div class="mx-4 mt-6">
	<p class="font-semibold">조사 정보</p>
	<div class="mt-4 flex items-center justify-between">
		<Chip name={category === "research" ? "설문조사" : ""} />

		<p class="text-sm text-gray-900">
			{format_date(start_date)} ~ {format_date(end_date)}
		</p>
	</div>

	<p class="mt-3.5 line-clamp-2 font-semibold">{title}</p>

	<div class="mt-4 flex">
		{#if images.length > 0}
			<img
				src={images[0].uri}
				alt={category}
				class="mr-5 h-20 w-20 flex-shrink-0 rounded-xl object-cover"
			/>
		{:else}
			<img
				src={category === "research" ? research_category_png : etc_category_png}
				alt={category}
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
				<p class="text-base font-bold text-primary">{comma(price)}원</p>
				<p>{expected_time}분</p>
				<p>D - {calculate_d_day(end_date)}</p>
				<p>
					{min_age} ~ {max_age}세 성별
					{gender === "all" ? "모두" : gender === "male" ? "남자" : "여자"},

					{recruitment_num}명
				</p>
			</div>
		</div>
	</div>
</div>

<div class="mt-6 h-2 bg-gray-200" />

<div class="mx-4 mt-10">
	<p class="font-semibold">쿠폰 할인</p>
	<div
		class="mt-4 flex h-14 items-center justify-center rounded-lg border border-gray-300 font-semibold text-gray-800"
	>
		사용 가능한 쿠폰이 없어요
	</div>
</div>

<div class="mt-10 h-2 w-full bg-gray-200" />

<div class="mx-4 mt-10">
	<div class="flex justify-between">
		<p class="font-semibold">총 결제 금액</p>
		<p class="text-lg font-bold text-primary">{comma(amount)}원</p>
	</div>

	<div class="mt-4 h-px bg-gray-200" />

	<div class="mt-4">
		<p class="font-semibold">결제 방법</p>
		<button
			on:click={() => {
				payment_method = payment_method === "bank_deposit" ? "" : "bank_deposit";
			}}
			class={`btn mt-4 w-full ${payment_method === "bank_deposit" ? "btn-primary " : ""}`}
		>
			무통장 입금
		</button>

		<div
			class="mt-4 flex h-20 flex-col justify-center bg-gray-50 px-4 text-xs font-semibold text-[#4CA764]"
		>
			<p>* 참여자 미충족시 참여자 보상금액은,</p>
			<p>&nbsp;&nbsp;&nbsp;미달 응답 개수만큼 환불됩니다.</p>
		</div>
	</div>
</div>
