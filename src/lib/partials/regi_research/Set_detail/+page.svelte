<script>
	import Modal from "@/lib/components/ui/Modal/+page.svelte";
	import Date_range_picker from "@/lib/components/ui/Date_range_picker/+page.svelte";
	import Multi_range_slider from "@/lib/components/ui/Multi_range_slider/+page.svelte";

	export let start_date;
	export let end_date;
	export let recruitment_num;
	export let min_age;
	export let max_age;
	export let gender;
	export let expected_time;

	let is_date_range_modal = false;
	let is_age_group_modal = false;
	let is_gender_modal = false;
	let is_expected_time_desc_modal = false;

	const format_date = (date) => {
		return `${date?.getFullYear() - 2000}년 ${date?.getMonth() + 1}월 ${date?.getDate()}일`;
	};
</script>

<div class="mx-5 flex flex-col">
	<div class="mt-11 text-xl font-semibold">
		<p>조사 세부사항을</p>
		<p>작성해주세요.</p>
	</div>

	<button
		on:click={() => (is_date_range_modal = true)}
		class="mt-10 flex flex-col border-b border-gray-300 pb-6"
	>
		<p class="font-semibold">조사 기간</p>

		<div class="mt-4 flex w-full items-center justify-between text-gray-900">
			{#if start_date !== null && end_date !== null}
				<p>
					{format_date(start_date)} ~
					{format_date(end_date)}
				</p>
				<p />
			{:else}
				<p>선택중..</p>
			{/if}
			<svg width="7" height="13" viewBox="0 0 7 13" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path
					d="M0.998535 11.1914L5.99853 6.19141L0.998535 1.19141"
					stroke="#909090"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
				/>
			</svg>
		</div>
	</button>

	<div class="mt-6 flex items-center justify-between border-b border-gray-300 pb-6">
		<p class="font-semibold">모집인원</p>
		<div class="flex items-center gap-6">
			<button
				on:click={() => (recruitment_num > 50 ? (recruitment_num -= 10) : "")}
				class="flex h-6 w-6 items-center justify-center rounded-full bg-primary"
			>
				<svg
					width="13"
					height="3"
					viewBox="0 0 13 3"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						fill-rule="evenodd"
						clip-rule="evenodd"
						d="M0.109375 1.30903C0.109375 0.603331 0.681456 0.03125 1.38715 0.03125H11.6094C12.3151 0.03125 12.8872 0.603331 12.8872 1.30903C12.8872 2.01472 12.3151 2.58681 11.6094 2.58681H1.38715C0.681456 2.58681 0.109375 2.01472 0.109375 1.30903Z"
						fill="white"
					/>
				</svg>
			</button>

			<p class="w-10 flex-1 text-center text-gray-900">{recruitment_num}</p>

			<button
				on:click={() => (recruitment_num += 10)}
				class="flex h-6 w-6 items-center justify-center rounded-full bg-primary"
			>
				<svg
					width="13"
					height="13"
					viewBox="0 0 13 13"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						fill-rule="evenodd"
						clip-rule="evenodd"
						d="M0 6.38953C0 5.68384 0.572081 5.11176 1.27778 5.11176H11.5C12.2057 5.11176 12.7778 5.68384 12.7778 6.38953C12.7778 7.09523 12.2057 7.66731 11.5 7.66731H1.27778C0.572081 7.66731 0 7.09523 0 6.38953Z"
						fill="white"
					/>
					<path
						fill-rule="evenodd"
						clip-rule="evenodd"
						d="M6.39106 12.7778C5.68536 12.7778 5.11328 12.2057 5.11328 11.5L5.11328 1.27777C5.11328 0.572073 5.68536 -6.91414e-06 6.39106 -6.91414e-06C7.09676 -6.91414e-06 7.66884 0.572073 7.66884 1.27777L7.66884 11.5C7.66884 12.2057 7.09676 12.7778 6.39106 12.7778Z"
						fill="white"
					/>
				</svg>
			</button>
		</div>
	</div>

	<button
		class="mt-6 flex items-center justify-between border-b border-gray-300 pb-6"
		on:click={() => {
			is_age_group_modal = true;
		}}
	>
		<p class="font-semibold">연령대</p>
		<div class="flex items-center justify-center">
			<p class="pr-4 text-gray-900">
				{min_age} ~ {max_age}세
			</p>

			<svg width="7" height="13" viewBox="0 0 7 13" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path
					d="M0.998535 11.1914L5.99853 6.19141L0.998535 1.19141"
					stroke="#909090"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
				/>
			</svg>
		</div>
	</button>

	<button
		class="mt-6 flex items-center justify-between border-b border-gray-300 pb-6"
		on:click={() => {
			is_gender_modal = true;
		}}
	>
		<p class="font-semibold">성별</p>
		<div class="flex items-center justify-center">
			<p class="pr-4 text-gray-900">
				{gender === "all" ? "모두" : gender === "male" ? "남자" : "여자"}
			</p>

			<svg width="7" height="13" viewBox="0 0 7 13" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path
					d="M0.998535 11.1914L5.99853 6.19141L0.998535 1.19141"
					stroke="#909090"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
				/>
			</svg>
		</div>
	</button>

	<div class="mt-6 flex items-center justify-between border-b border-gray-300 pb-6">
		<div class="flex items-center">
			<p class="pr-1 font-semibold">예상 소요시간</p>
			<button
				on:click={() => {
					is_expected_time_desc_modal = true;
				}}
			>
				<svg
					width="16"
					height="16"
					viewBox="0 0 16 16"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						fill-rule="evenodd"
						clip-rule="evenodd"
						d="M1.24444 8C1.24444 11.731 4.26901 14.7556 8 14.7556C11.731 14.7556 14.7556 11.731 14.7556 8C14.7556 4.26901 11.731 1.24444 8 1.24444C4.26901 1.24444 1.24444 4.26901 1.24444 8ZM8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0Z"
						fill="#237BF8"
					/>
					<path
						fill-rule="evenodd"
						clip-rule="evenodd"
						d="M8.00017 6.40015C8.39291 6.40015 8.71128 6.71852 8.71128 7.11126L8.71128 11.5557C8.71128 11.9484 8.39291 12.2668 8.00017 12.2668C7.60744 12.2668 7.28906 11.9484 7.28906 11.5557L7.28906 7.11126C7.28906 6.71852 7.60744 6.40015 8.00017 6.40015Z"
						fill="#237BF8"
					/>
					<path
						fill-rule="evenodd"
						clip-rule="evenodd"
						d="M8.00017 3.73352C8.39291 3.73352 8.71128 4.0519 8.71128 4.44463V4.44472C8.71128 4.83746 8.39291 5.15583 8.00017 5.15583C7.60744 5.15583 7.28906 4.83746 7.28906 4.44472V4.44463C7.28906 4.0519 7.60744 3.73352 8.00017 3.73352Z"
						fill="#237BF8"
					/>
				</svg>
			</button>
		</div>

		<div class="flex items-center gap-6">
			<button
				on:click={() => (expected_time > 5 ? (expected_time -= 1) : "")}
				class="flex h-6 w-6 items-center justify-center rounded-full bg-primary"
			>
				<svg
					width="13"
					height="3"
					viewBox="0 0 13 3"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						fill-rule="evenodd"
						clip-rule="evenodd"
						d="M0.109375 1.30903C0.109375 0.603331 0.681456 0.03125 1.38715 0.03125H11.6094C12.3151 0.03125 12.8872 0.603331 12.8872 1.30903C12.8872 2.01472 12.3151 2.58681 11.6094 2.58681H1.38715C0.681456 2.58681 0.109375 2.01472 0.109375 1.30903Z"
						fill="white"
					/>
				</svg>
			</button>

			<p class="w-10 flex-1 text-center text-gray-900">{expected_time}분</p>

			<button
				on:click={() => (expected_time += 1)}
				class="flex h-6 w-6 items-center justify-center rounded-full bg-primary"
			>
				<svg
					width="13"
					height="13"
					viewBox="0 0 13 13"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						fill-rule="evenodd"
						clip-rule="evenodd"
						d="M0 6.38953C0 5.68384 0.572081 5.11176 1.27778 5.11176H11.5C12.2057 5.11176 12.7778 5.68384 12.7778 6.38953C12.7778 7.09523 12.2057 7.66731 11.5 7.66731H1.27778C0.572081 7.66731 0 7.09523 0 6.38953Z"
						fill="white"
					/>
					<path
						fill-rule="evenodd"
						clip-rule="evenodd"
						d="M6.39106 12.7778C5.68536 12.7778 5.11328 12.2057 5.11328 11.5L5.11328 1.27777C5.11328 0.572073 5.68536 -6.91414e-06 6.39106 -6.91414e-06C7.09676 -6.91414e-06 7.66884 0.572073 7.66884 1.27777L7.66884 11.5C7.66884 12.2057 7.09676 12.7778 6.39106 12.7778Z"
						fill="white"
					/>
				</svg>
			</button>
		</div>
	</div>
</div>

<Modal bind:is_modal_open={is_date_range_modal} modal_position="bottom">
	<div class="flex flex-col items-center">
		<p class="mt-10 text-lg font-semibold">조사기간</p>

		<div class="mt-6 w-full max-w-96 px-5">
			<Date_range_picker bind:start_date bind:end_date />
		</div>

		<div class="pb-safe mb-3.5 mt-12 w-full px-5">
			<button on:click={() => (is_date_range_modal = false)} class="btn btn-primary w-full"
				>확인</button
			>
		</div>
	</div>
</Modal>

<Modal bind:is_modal_open={is_age_group_modal} modal_position="bottom">
	<div class="flex flex-col items-center">
		<p class="mt-10 text-lg font-semibold">연령대</p>

		<div class="mt-8 px-5">
			<Multi_range_slider bind:min_age bind:max_age />
		</div>

		<div class="pb-safe mb-3.5 mt-20 w-full px-10">
			<button on:click={() => (is_age_group_modal = false)} class="btn btn-primary w-full"
				>확인</button
			>
		</div>
	</div>
</Modal>

<Modal bind:is_modal_open={is_gender_modal} modal_position="bottom">
	<div class="flex flex-col items-center">
		<p class="mt-10 text-lg font-semibold">성별</p>

		<div class="mt-6 flex w-full justify-around gap-2 px-8">
			<button
				on:click={() => (gender = gender === "all" ? "" : "all")}
				class={`btn flex-1 border-none  ${gender === "all" ? "btn-primary" : "bg-gray-50"}`}
				>모두
			</button>
			<button
				on:click={() => (gender = gender === "male" ? "" : "male")}
				class={`btn flex-1 border-none  ${gender === "male" ? "btn-primary" : "bg-gray-50"}`}
				>남자
			</button>
			<button
				on:click={() => (gender = gender === "female" ? "" : "female")}
				class={`btn flex-1 border-none  ${gender === "female" ? "btn-primary" : "bg-gray-50"}`}
				>여자
			</button>
		</div>

		<div class="pb-safe mb-3.5 mt-8 w-full px-5">
			<button on:click={() => (is_gender_modal = false)} class="btn btn-primary w-full">확인</button
			>
		</div>
	</div>
</Modal>

<Modal bind:is_modal_open={is_expected_time_desc_modal} modal_position="bottom">
	<div class="flex flex-col px-5">
		<p class="mt-8 text-lg font-bold">예상 소요시간</p>

		<div class="mt-6">
			<p>예상 소요 시간과 실제 소요시간이 차이가 많이 나게 되면, 설문조사 이탈률이 높아집니다.</p>
			<br />
			<p>최대한 정확하게 작성해 주시기 바랍니다.</p>
		</div>

		<div class="pb-safe mb-3.5 mt-8 w-full">
			<button on:click={() => (is_expected_time_desc_modal = false)} class="btn btn-primary w-full"
				>확인</button
			>
		</div>
	</div>
</Modal>
