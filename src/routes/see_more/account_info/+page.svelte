<script>
	const TITLE = "계좌 정보";

	import Account_user_api from "@/lib/api/account_user_api.js";
	import { update_global_store } from "@/lib/store/global_store";
	import { show_toast } from "@/lib/js/common.js";

	import Header from "@/lib/components/ui/Header/+page.svelte";
	import Modal from "@/lib/components/ui/Modal/+page.svelte";
	import Icon from "@/lib/components/ui/Icon/+page.svelte";
	import 카카오뱅크 from "@/lib/img/banks/카카오뱅크.png";
	import 농협은행 from "@/lib/img/banks/농협은행.png";
	import 국민은행 from "@/lib/img/banks/국민은행.png";
	import 토스뱅크 from "@/lib/img/banks/토스뱅크.png";
	import 신한은행 from "@/lib/img/banks/신한은행.png";
	import 우리은행 from "@/lib/img/banks/우리은행.png";
	import 기업은행 from "@/lib/img/banks/기업은행.png";
	import 하나은행 from "@/lib/img/banks/하나은행.png";
	import 새마을금고 from "@/lib/img/banks/새마을금고.png";
	import 부산은행 from "@/lib/img/banks/부산은행.png";
	import 케이뱅크 from "@/lib/img/banks/케이뱅크.png";
	import 신협은행 from "@/lib/img/banks/신협은행.png";
	import 우체국 from "@/lib/img/banks/우체국.png";
	import SC제일 from "@/lib/img/banks/SC제일.png";
	import 광주은행 from "@/lib/img/banks/광주은행.png";
	import 경남은행 from "@/lib/img/banks/경남은행.png";
	import 수협은행 from "@/lib/img/banks/수협은행.png";
	import 전북은행 from "@/lib/img/banks/전북은행.png";
	import 제주은행 from "@/lib/img/banks/제주은행.png";
	import 씨티은행 from "@/lib/img/banks/씨티은행.png";
	import 산업은행 from "@/lib/img/banks/산업은행.png";

	export let data;
	let { supabase, session, account } = data;
	$: ({ supabase, session } = data);
	const account_user_api = new Account_user_api(supabase, session);

	let bank_name = account.bank_name ?? "";
	let account_num = account.account_num ?? "";

	let is_bank_name_modal = false;
	let is_account_num_modal = false;

	const bank_imgs = {
		카카오뱅크: 카카오뱅크,
		농협은행: 농협은행,
		국민은행: 국민은행,
		토스뱅크: 토스뱅크,
		신한은행: 신한은행,
		우리은행: 우리은행,
		기업은행: 기업은행,
		하나은행: 하나은행,
		새마을금고: 새마을금고,
		부산은행: 부산은행,
		케이뱅크: 케이뱅크,
		신협은행: 신협은행,
		우체국: 우체국,
		SC제일: SC제일,
		광주은행: 광주은행,
		경남은행: 경남은행,
		수협은행: 수협은행,
		전북은행: 전북은행,
		제주은행: 제주은행,
		씨티은행: 씨티은행,
		산업은행: 산업은행
	};

	const set_bank_name = (name) => {
		bank_name = name;

		is_bank_name_modal = false;
		is_account_num_modal = true;
	};

	const save_account = async () => {
		update_global_store("loading", true);
		try {
			const inserted_account = await account_user_api.insert_account(bank_name, account_num);
			account = { ...inserted_account };

			is_account_num_modal = false;
			show_toast("success", "계좌가 등록되었습니다.");
		} finally {
			update_global_store("loading", false);
		}
	};

	const modify_account = async () => {
		update_global_store("loading", true);
		try {
			const upserted_account = await account_user_api.upsert_account(
				account.id,
				bank_name,
				account_num
			);
			account = { ...upserted_account };

			is_account_num_modal = false;
			show_toast("success", "계좌가 수정되었습니다.");
		} finally {
			update_global_store("loading", false);
		}
	};
</script>

<svelte:head>
	<title>{TITLE} | 설문모아</title>
	<meta name="description" content={TITLE} />
</svelte:head>

<Header>
	<button slot="left" class="flex items-center" on:click={() => history.back()}>
		<Icon name="back" />
	</button>
	<h1 slot="center" class="font-semibold">{TITLE}</h1>
</Header>

<main>
	{#if Object.keys(account).length > 0}
		<div class="mx-4 mt-5">
			<div class="flex h-20 w-full items-center rounded-xl border">
				<div class="mr-2.5 flex w-24 flex-col items-center justify-center">
					<div class="flex h-5 w-5 items-center justify-center">
						<img src={bank_imgs[account.bank_name]} alt={account.bank_name} />
					</div>
					<p class="mt-2 text-xs text-gray-900">{account.bank_name}</p>
				</div>
				<div class="flex flex-grow flex-col">
					<p class="text-xs text-gray-800">계좌번호</p>
					<p class="mt-2 text-sm">{account.account_num}</p>
				</div>
			</div>
		</div>
	{/if}

	<div class="pb-safe fixed bottom-3.5 left-0 right-0 mx-4 flex justify-center">
		<button
			class="btn btn-primary w-full text-white md:w-1/2"
			on:click={() => (is_bank_name_modal = true)}
			>{Object.keys(account).length > 0 ? "계좌 수정하기" : "계좌 등록하기"}</button
		>
	</div>
</main>

<Modal bind:is_modal_open={is_bank_name_modal} modal_position="bottom">
	<div class="flex flex-col items-center p-4">
		<div class="divider h-1 w-10 self-center bg-gray-300" />
		<h3 class="mt-10 text-lg font-bold">
			{Object.keys(account).length > 0 ? "계좌 수정하기" : "계좌 등록하기"}
		</h3>

		<div class="mt-6 w-full">
			<div class="grid grid-cols-3 gap-2">
				{#each Object.entries(bank_imgs) as [name, img]}
					<button
						on:click={() => set_bank_name(name)}
						class={`${bank_name === name ? "bg-gray-300" : "bg-gray-50"} flex h-20 flex-col items-center justify-center rounded-xl  hover:bg-gray-500`}
					>
						<div class="flex h-5 w-5 items-center justify-center">
							<img src={img} alt={name} />
						</div>

						<p class="mt-2 text-xs text-gray-900">{name}</p>
					</button>
				{/each}
			</div>
		</div>
	</div></Modal
>

<Modal bind:is_modal_open={is_account_num_modal} modal_position="bottom">
	<div class="flex flex-col items-center p-4">
		<div class="divider h-1 w-10 self-center bg-gray-300" />
		<h3 class="mt-10 text-lg font-bold">계좌 등록하기</h3>

		<div class="mt-6 flex w-full flex-col">
			<div class="flex items-center">
				<div class="mr-3 flex h-10 w-10 items-center justify-center rounded-full bg-gray-50">
					<img class="h-5 w-5" src={bank_imgs[bank_name]} alt={bank_name} />
				</div>
				<p class="flex items-center font-semibold">
					{bank_name}
				</p>
			</div>

			<label class="relative mt-4">
				<input
					bind:value={account_num}
					type="number"
					class="w-full rounded-none border-b border-gray-300 pb-6 font-bold outline-none focus:border-primary"
					placeholder="계좌번호"
				/>
				<button
					on:click={() => (account_num = "")}
					class="absolute right-2 top-3 -translate-y-1/2 transform text-gray-400 hover:text-gray-600"
				>
					<svg
						width="17"
						height="18"
						viewBox="0 0 17 18"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<circle cx="8.5" cy="9.30859" r="8.5" fill="#C7C7C8" />
						<path
							d="M5.66406 12.1406L11.3307 6.47396"
							stroke="white"
							stroke-width="1.4"
							stroke-linecap="round"
						/>
						<path
							d="M11.3359 12.1406L5.66927 6.47396"
							stroke="white"
							stroke-width="1.4"
							stroke-linecap="round"
						/>
					</svg>
				</button>
			</label>
		</div>

		{#if Object.keys(account).length > 0}
			<button class="btn btn-primary mt-11 w-full" on:click={modify_account}>수정하기</button>
		{:else}
			<button class="btn btn-primary mt-11 w-full" on:click={save_account}>등록하기</button>
		{/if}
	</div></Modal
>
