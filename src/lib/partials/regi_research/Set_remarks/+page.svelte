<script>
	import Modal from "@/lib/components/ui/Modal/+page.svelte";

	import remarks_desc_png from "@/lib/img/partials/regi_research/remarks_desc.png";

	export let remarks;

	let is_remarks_modal = false;
</script>

<div class="mx-5 flex flex-col">
	<div class="mt-11 text-xl font-semibold">
		<p>조사의 특이사항을</p>
		<p>작성해주세요.</p>
	</div>

	<div class="mt-6 flex flex-col">
		<div class="flex items-center">
			<p class="pr-2 font-semibold">조사 특이사항</p>
			<button
				on:click={() => {
					is_remarks_modal = true;
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
		<div
			class="
        grid
        after:invisible
        after:whitespace-pre-wrap
        after:border
        after:px-3.5
        after:py-2.5
        after:text-inherit
        after:content-[attr(data-cloned-val)_'_']
        after:[grid-area:1/1/2/2]
        [&>textarea]:resize-none
        [&>textarea]:overflow-hidden
        [&>textarea]:text-inherit
        [&>textarea]:[grid-area:1/1/2/2]
    "
		>
			<textarea
				bind:value={remarks}
				class="mt-4 w-full appearance-none rounded-none border-b border-gray-300 pb-6 text-slate-600 outline-none focus:border-primary"
				rows="2"
				onInput="this.parentNode.dataset.clonedVal = this.value"
				placeholder="ex.경기도에 거주하는 공대 대학생"
			></textarea>
		</div>
	</div>
</div>

<Modal bind:is_modal_open={is_remarks_modal} modal_position="bottom">
	<div class="flex flex-col px-5">
		<p class="mt-8 text-lg font-bold">조사 특이사항</p>

		<div class="mt-6">
			<p>
				작성하신 조사 세부사항<span class="text-gray-800">(날짜, 인원, 성별, 예상 소요시간)</span
				>외, 추가적인 세부사항을 작성하시면 됩니다.
			</p>
			<br />
			<p><span class="text-primary">예시</span>경기도에 거주하는 공대 대학생</p>
			<br />
			<p>
				작성해 주신 사항을 바탕으로 스크리닝 기능을 활성화 시켜 더욱 정확한 데이터를 얻을 수
				있습니다.
			</p>
		</div>

		<img src={remarks_desc_png} class="mt-6 h-full object-cover" alt="remarks_desc_png" />

		<div class="pb-safe mb-3.5 mt-8 w-full">
			<button on:click={() => (is_remarks_modal = false)} class="btn btn-primary w-full"
				>확인</button
			>
		</div>
	</div>
</Modal>
