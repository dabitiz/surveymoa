<script>
	import { page } from "$app/stores";
</script>

<main class="pt-safe flex h-screen flex-col items-center justify-center">
	<span class={`flex h-20 w-20 items-center justify-center rounded-full bg-error drop-shadow-lg`}>
		<svg width="39" height="39" viewBox="0 0 39 39" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path
				d="M3.22127 9.66365C1.44221 7.88459 1.44221 5.00017 3.22126 3.22112C5.00032 1.44206 7.88474 1.44206 9.66379 3.22112L35.4339 28.9912C37.213 30.7703 37.213 33.6547 35.4339 35.4338C33.6548 37.2128 30.7704 37.2128 28.9914 35.4338L3.22127 9.66365Z"
				fill="white"
			/>
			<path
				d="M9.66463 35.436C7.88557 37.215 5.00115 37.215 3.2221 35.436C1.44304 33.6569 1.44304 30.7725 3.2221 28.9934L28.9922 3.22332C30.7713 1.44427 33.6557 1.44427 35.4347 3.22332C37.2138 5.00238 37.2138 7.8868 35.4347 9.66585L9.66463 35.436Z"
				fill="white"
			/>
		</svg>
	</span>

	<h1 class="mt-7 text-3xl font-bold text-primary">코드오류 {$page.status}</h1>

	<h2 class="mt-4 font-semibold">{$page.error.message}</h2>
	<div class="mt-2 text-center text-sm text-gray-900">
		<p>동일한 문제가 지속적으로 발생하는 경우</p>
		<p>고객센터로 문의해주시기 바랍니다.</p>
	</div>

	<div class="fixed bottom-0 mx-auto w-full bg-white px-5 py-3.5 md:w-1/2">
		<div class="pb-safe">
			<button on:click={() => (location.href = "/")} class="btn btn-primary w-full"
				>홈으로 돌아가기</button
			>
		</div>
	</div>
</main>
