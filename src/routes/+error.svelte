<script>
	import { page } from "$app/stores";
</script>

<main class="pt-safe flex h-screen flex-col items-center justify-center">
	<span class={`flex h-20 w-20 items-center justify-center rounded-full bg-error drop-shadow-lg`}>
		<svg width="10" height="42" viewBox="0 0 10 42" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path
				fill-rule="evenodd"
				clip-rule="evenodd"
				d="M5.00039 0.5C7.26476 0.5 9.10039 2.33563 9.10039 4.6V25.1C9.10039 27.3644 7.26476 29.2 5.00039 29.2C2.73602 29.2 0.900391 27.3644 0.900391 25.1V4.6C0.900391 2.33563 2.73602 0.5 5.00039 0.5Z"
				fill="white"
			/>
			<path
				d="M5.00039 41.4998C7.26476 41.4998 9.10039 39.6642 9.10039 37.3998C9.10039 35.1354 7.26476 33.2998 5.00039 33.2998C2.73602 33.2998 0.900391 35.1354 0.900391 37.3998C0.900391 39.6642 2.73602 41.4998 5.00039 41.4998Z"
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

	<div class="pb-safe fixed bottom-3.5 left-0 right-0 mx-4 flex justify-center">
		<button
			class="btn btn-primary w-full text-white md:w-1/2"
			on:click={() => (location.href = "/")}>홈으로 돌아가기</button
		>
	</div>
</main>
