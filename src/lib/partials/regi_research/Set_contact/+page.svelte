<script>
	export let contact;
</script>

<div class="mx-5 flex flex-col">
	<div class="mt-11 text-xl font-semibold">
		<p>진행되는 조사 정보를 알려드릴</p>
		<p>연락처를 작성해 주세요.</p>
	</div>

	<div class="mt-6 flex flex-col">
		<div class="mt-6 flex flex-col pb-6">
			<p class="font-semibold">연락처</p>
			<label class="mt-4">
				<input
					bind:value={contact}
					type="text"
					class="0 w-full rounded-none border-b border-gray-300 pb-6 outline-none focus:border-primary"
					placeholder="전화번호 또는 이메일을 입력해 주세요."
				/>
			</label>
		</div>
	</div>
</div>
