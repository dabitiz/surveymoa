<script>
	const TITLE = "출금하기";

	import { goto } from "$app/navigation";

	import { point } from "@/lib/store/profiles_store.js";
	import { comma, show_toast } from "@/lib/js/common";
	import Header from "@/lib/components/ui/Header/+page.svelte";
	import Account from "@/lib/components/Account/+page.svelte";
	import Icon from "@/lib/components/ui/Icon/+page.svelte";

	export let data;
	let { supabase, session, account_user } = data;
	$: ({ supabase, session } = data);

	let withdrawal_amount = "";

	const api_input_withdrawal_request = async () => {
		const { data, error } = await supabase
			.from("withdrawal_request")
			.insert([{ amount: withdrawal_amount, user_id: session.user.id }]);

		if (error) throw new Error(`Failed to api_input_withdrawal_request: ${error.message}`);
	};
</script>

<Header>
	<button slot="left" class="flex items-center" on:click={() => goto("/point")}>
		<Icon name="left_arrow" />
	</button>
	<h1 slot="center" class="font-semibold">{TITLE}</h1>
</Header>

<main>
	<div class="mx-5 mt-6 flex items-center">
		<div class="m-2 mr-[18px] flex h-11 w-11 items-center justify-center rounded-full bg-primary">
			<svg
				width="20"
				height="15"
				viewBox="0 0 20 15"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M6.02807 14.8982C5.15762 14.8982 4.40147 14.2996 4.20181 13.4523L3.25861 9.45014C3.12515 8.88382 2.61971 8.48365 2.03787 8.48365H1.76427C1.22271 8.48365 0.783691 8.04463 0.783691 7.50308V7.30785C0.783691 6.87411 1.1353 6.5225 1.56904 6.5225C2.07558 6.5225 2.44964 6.05005 2.33345 5.55701L1.44247 1.77637C1.24167 0.924355 1.88807 0.10791 2.76343 0.10791C3.40693 0.10791 3.96196 0.559817 4.0924 1.18995L4.99325 5.54172C5.11148 6.11288 5.61458 6.5225 6.19785 6.5225C6.77132 6.5225 7.26871 6.12625 7.39688 5.56729L8.35422 1.39222C8.52655 0.64068 9.19531 0.10791 9.96636 0.10791C10.7374 0.10791 11.4062 0.640682 11.5785 1.39223L12.5349 5.56313C12.6636 6.12452 13.1632 6.5225 13.7391 6.5225C14.3257 6.5225 14.8314 6.11012 14.9494 5.53559L15.8418 1.19132C15.9713 0.560609 16.5265 0.10791 17.1703 0.10791C18.0452 0.10791 18.6912 0.923856 18.4905 1.77535L17.5993 5.55701C17.4831 6.05005 17.8571 6.5225 18.3637 6.5225C18.7974 6.5225 19.149 6.87411 19.149 7.30785V7.50307C19.149 8.04463 18.71 8.48365 18.1685 8.48365H17.8948C17.313 8.48365 16.8076 8.88382 16.6741 9.45014L15.7309 13.4523C15.5312 14.2996 14.7751 14.8982 13.9047 14.8982C13.0289 14.8982 12.2696 14.2924 12.0752 13.4385L11.1646 9.43975C11.0373 8.88046 10.54 8.48365 9.96636 8.48365C9.39275 8.48365 8.89543 8.88046 8.76808 9.43975L7.85753 13.4385C7.66309 14.2924 6.90381 14.8982 6.02807 14.8982ZM6.1554 8.48365C5.86613 8.48365 5.64991 8.74946 5.70881 9.03267L6.06209 10.7314C6.06944 10.7668 6.10057 10.7921 6.13666 10.7921C6.17214 10.7921 6.20292 10.7676 6.21087 10.733L6.59994 9.04208C6.66568 8.75632 6.44862 8.48365 6.1554 8.48365ZM9.55228 6.00442C9.49229 6.26993 9.69416 6.5225 9.96636 6.5225C10.2386 6.5225 10.4404 6.26993 10.3804 6.00442L10.0287 4.44774C10.0221 4.41861 9.99623 4.39792 9.96636 4.39792C9.9365 4.39792 9.91062 4.41861 9.90403 4.44774L9.55228 6.00442ZM13.7773 8.48365C13.4839 8.48365 13.2665 8.75621 13.3317 9.04227L13.722 10.7534C13.7298 10.788 13.7606 10.8125 13.7961 10.8125C13.8321 10.8125 13.8632 10.7872 13.8705 10.7518L14.2249 9.03292C14.2833 8.74939 14.0668 8.48365 13.7773 8.48365Z"
					fill="white"
				/>
			</svg>
		</div>

		<div class="flex flex-col">
			<p class="text-xl font-semibold">설문모아 포인트에서</p>
			<p class="mt-[9px] text-sm">
				<span class="text-gray-900">출금가능금액</span>
				<span class=" font-semibold">{comma($point)}원</span>
			</p>
		</div>
	</div>

	<div class="mx-5 mt-6 flex flex-col">
		<label class="mt-4">
			<input
				bind:value={withdrawal_amount}
				type="number"
				class="w-full rounded-none border-b border-gray-300 pb-3.5 text-xl font-bold outline-none placeholder:text-gray-900 focus:border-primary"
				placeholder="출금할 금액을 입력하세요"
			/>
		</label>
	</div>

	<div class="mt-10 h-2 w-full bg-gray-100" />

	<div class="mx-5 mt-10">
		<p class="mb-3.5 font-semibold">계좌 정보</p>
		<Account {supabase} {session} account={account_user} />
	</div>

	<div class="fixed bottom-0 mx-auto w-full bg-white px-5 py-3.5 md:w-1/2">
		<div class="pb-safe">
			<button
				on:click={async () => {
					if (withdrawal_amount < 1000 || withdrawal_amount === "") {
						show_toast("info", "출금 금액은 1000원 이상으로 해주세요");
						return;
					}

					if ($point < withdrawal_amount) {
						show_toast("info", "현재 포인트보다 낮게 출금액을 설정 해주세요");
						return;
					}

					await api_input_withdrawal_request();
					goto("/point");
					show_toast("success", "출금신청이 완료되었습니다.");
				}}
				class="btn btn-primary w-full">출금하기</button
			>
		</div>
	</div>
</main>
