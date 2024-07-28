<script>
	import colors from "$lib/js/colors";

	export let images;
	export let form_link;
	export let title;
	export let explanation;

	/**
	 * 이미지 추가
	 */
	const add_img = (event) => {
		const selected_images = event.target.files; //input요소 선택한 파일
		let images_copy = [...images]; //선택된 이미지의 복사본

		//미리보기용 이미지 uri 생성후 복사본에 추가
		for (let i = 0; i < selected_images.length; i++) {
			selected_images[i].uri = URL.createObjectURL(selected_images[i]);

			images_copy.push(selected_images[i]);
		}

		//이미지 개수가 5개 이상이면 에러
		if (images_copy.length > 5) {
			alert("이미지 개수는 7개를 초과할 수 없습니다.");
			return;
		}

		// 이미지 상태 업데이트
		images = images_copy;
	};

	/**
	 * 이미지 삭제
	 */
	const delete_img = (idx) => {
		const update_images = [...images];
		update_images.splice(idx, 1);
		images = update_images;
	};
</script>

<div class="mx-5 flex flex-col">
	<div class="mt-11 text-xl font-semibold">
		<p>조사의 기본정보를</p>
		<p>작성해주세요.</p>
	</div>

	<div class="mt-10 border-b border-gray-300 pb-6">
		<span class="font-semibold">안내이미지 (선택)</span>

		<div class="mt-2 flex overflow-x-auto">
			<label for="input-file">
				<input
					type="file"
					id="input-file"
					on:change={add_img}
					accept="image/*,"
					multiple
					class="hidden"
				/>
				<div
					class="flex h-20 w-20 flex-col items-center justify-center gap-1 rounded-lg bg-gray-50"
				>
					<svg
						width="20"
						height="20"
						viewBox="0 0 24 21"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M14.14 2.33333L16.275 4.66667H21V18.6667H2.33333V4.66667H7.05833L9.19333 2.33333H14.14ZM15.1667 0H8.16667L6.03167 2.33333H2.33333C1.05 2.33333 0 3.38333 0 4.66667V18.6667C0 19.95 1.05 21 2.33333 21H21C22.2833 21 23.3333 19.95 23.3333 18.6667V4.66667C23.3333 3.38333 22.2833 2.33333 21 2.33333H17.3017L15.1667 0ZM11.6667 8.16667C13.5917 8.16667 15.1667 9.74167 15.1667 11.6667C15.1667 13.5917 13.5917 15.1667 11.6667 15.1667C9.74167 15.1667 8.16667 13.5917 8.16667 11.6667C8.16667 9.74167 9.74167 8.16667 11.6667 8.16667ZM11.6667 5.83333C8.44667 5.83333 5.83333 8.44667 5.83333 11.6667C5.83333 14.8867 8.44667 17.5 11.6667 17.5C14.8867 17.5 17.5 14.8867 17.5 11.6667C17.5 8.44667 14.8867 5.83333 11.6667 5.83333Z"
							fill="#A9A9A9"
						/>
					</svg>

					<span class="text-xs text-gray-900">{images.length}/5</span>
				</div>
			</label>

			<div class="flex flex-row">
				{#each images as img, idx}
					<div class="relative min-w-max">
						<img
							key={idx}
							class="ml-3 h-20 w-20 flex-shrink-0 rounded-lg object-cover"
							src={img.uri}
							alt={img.name}
						/>
						<button on:click={() => delete_img(idx)}>
							<svg
								class="absolute left-20 top-[-2px]"
								xmlns="http://www.w3.org/2000/svg"
								width="1.3rem"
								height="1.3rem"
								viewBox="0 0 24 24"
								><path
									fill={colors.gray[900]}
									d="m8.4 17l3.6-3.6l3.6 3.6l1.4-1.4l-3.6-3.6L17 8.4L15.6 7L12 10.6L8.4 7L7 8.4l3.6 3.6L7 15.6zm3.6 5q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22"
								/></svg
							></button
						>
					</div>
				{/each}
			</div>
		</div>
	</div>

	<div class="mt-6 flex flex-col pb-6">
		<p class="font-semibold">폼 링크</p>
		<label class="mt-4">
			<input
				bind:value={form_link}
				type="text"
				class="w-full rounded-none border-b border-gray-300 pb-6 outline-none focus:border-primary"
				placeholder="현재는 구글폼만 가능해요"
			/>
		</label>
	</div>

	<div class="mt-6 flex flex-col pb-6">
		<p class="font-semibold">조사 제목</p>
		<label class="mt-4">
			<input
				bind:value={title}
				type="text"
				class="0 w-full rounded-none border-b border-gray-300 pb-6 outline-none focus:border-primary"
				placeholder="설문조사 제목"
			/>
		</label>
	</div>

	<div class="mt-6 flex flex-col">
		<p class="font-semibold">조사 내용</p>

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
				bind:value={explanation}
				class="mt-4 w-full appearance-none rounded-none border-b border-gray-300 pb-6 text-slate-600 outline-none focus:border-primary"
				rows="2"
				onInput="this.parentNode.dataset.clonedVal = this.value"
				placeholder="설문조사 설명을 자세하게 작성해주시면 문의를 줄이고 더 쉽게 조사원을 구할 수 있습니다."
			></textarea>
		</div>
	</div>
</div>
