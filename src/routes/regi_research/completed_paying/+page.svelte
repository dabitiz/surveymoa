<script>
	const TITLE = "결제요청 완료";

	import { goto } from "$app/navigation";
	import { page } from "$app/stores";

	import { comma } from "@/lib/js/common.js";
	import { show_toast } from "@/lib/js/common.js";
	import Header from "@/lib/components/ui/Header/+page.svelte";

	const copy_to_clipboard = (text) => {
		if (navigator.clipboard && navigator.clipboard.writeText) {
			// Modern browsers
			navigator.clipboard
				.writeText(text)
				.then(() => {
					show_toast("success", "계좌번호가 클립보드에 복사되었습니다.");
				})
				.catch((err) => {
					console.error("클립보드 복사 실패:", err);
					fall_back_copy_text_to_clipboard(text);
				});
		} else {
			// Fallback for older browsers
			fall_back_copy_text_to_clipboard(text);
		}
	};

	const fall_back_copy_text_to_clipboard = (text) => {
		const textArea = document.createElement("textarea");
		textArea.value = text;

		// Avoid scrolling to bottom
		textArea.style.top = "0";
		textArea.style.left = "0";
		textArea.style.position = "fixed";

		document.body.appendChild(textArea);
		textArea.focus();
		textArea.select();

		try {
			const successful = document.execCommand("copy");
			const msg = successful ? "성공" : "실패";
			console.log("Fallback: 클립보드 복사 " + msg);
			show_toast("success", "계좌번호가 클립보드에 복사되었습니다.");
		} catch (err) {
			console.error("Fallback: 클립보드 복사 실패", err);
		}

		document.body.removeChild(textArea);
	};
</script>

<svelte:head>
	<title>{TITLE} | 설문모아</title>
	<meta name="description" content={TITLE} />
</svelte:head>

<Header>
	<h1 slot="center" class="font-semibold">{TITLE}</h1>
	<button
		slot="right"
		class="flex items-center"
		on:click={() => goto("/see_more/comissioned_research")}
	>
		<svg width="24" height="24" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
			<rect transform="translate(0 0.808594)" fill="white" />
			<path
				fill-rule="evenodd"
				clip-rule="evenodd"
				d="M4.29289 6.5157C3.90237 6.12518 3.90237 5.49201 4.29289 5.10149C4.68342 4.71096 5.31658 4.71096 5.70711 5.10149L12 11.3944L18.2929 5.10149C18.6834 4.71096 19.3166 4.71096 19.7071 5.10149C20.0976 5.49201 20.0976 6.12518 19.7071 6.5157L13.4142 12.8086L19.7071 19.1015C20.0976 19.492 20.0976 20.1252 19.7071 20.5157C19.3166 20.9062 18.6834 20.9062 18.2929 20.5157L12 14.2228L5.70711 20.5157C5.31658 20.9062 4.68342 20.9062 4.29289 20.5157C3.90237 20.1252 3.90237 19.492 4.29289 19.1015L10.5858 12.8086L4.29289 6.5157Z"
				fill="#101118"
			/>
		</svg>
	</button>
</Header>

<main class="flex flex-col items-center justify-center">
	<div class="mt-32 flex flex-col items-center">
		<p class="text-xl font-semibold">국민은행</p>
		<p class="mt-1">예금주 : 김도형(다비티즈)</p>
	</div>

	<p class="mt-8 text-xl font-bold">{comma($page.state.amount)}원</p>

	<div class="mt-16 flex flex-col items-center">
		<p class="text-xs">입금계좌</p>
	</div>

	<div class="mt-2 w-full">
		<div class="mx-4 flex items-center justify-between rounded-md bg-gray-50 py-3">
			<div class="flex-1"></div>
			<p
				class="absolute left-1/2 -translate-x-1/2 transform whitespace-nowrap text-lg text-primary"
			>
				104301-04-503406
			</p>
			<button
				class="flex flex-1 justify-end pr-5"
				on:click={() => copy_to_clipboard("10430104503406")}
			>
				<svg
					width="35"
					height="35"
					viewBox="0 0 35 35"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<rect x="8" y="6" width="14.3343" height="18.1115" rx="2" fill="#C9DFFF" />
					<rect
						x="12.0957"
						y="10.0254"
						width="14.3343"
						height="18.1115"
						rx="2"
						fill="#237BF8"
						fill-opacity="0.81"
					/>
				</svg>
			</button>
		</div>
	</div>

	<p class="mt-8 text-xs">*24시간내 미입금 시 자동취소</p>
</main>
