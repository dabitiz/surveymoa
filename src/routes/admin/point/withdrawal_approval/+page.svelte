<script>
	const TITLE = "출금 승인";

	import { onMount } from "svelte";
	import { createGrid } from "ag-grid-community";
	import { goto } from "$app/navigation";
	import dayjs from "dayjs";

	import colors from "@/lib/js/colors.js";
	import { date_formatter } from "@/lib/ag_grid/grid_common.js";
	import { show_toast } from "$lib/js/common.js";
	import Header from "@/lib/components/ui/Header/+page.svelte";
	import Icon from "@/lib/components/ui/Icon/+page.svelte";
	import Error from "../../../+error.svelte";

	export let data;
	let { withdrawal_requests } = data;
	$: ({ supabase } = data);

	let grid_withdrawal_requests;
	let grid_withdrawal_requests_api;

	onMount(() => {
		init_withdrawal_requests_grid_options();
		grid_withdrawal_requests_api.setGridOption("rowData", withdrawal_requests);
	});

	const change_withdrawal_request_approval = async (params) => {
		const new_val = params.newValue;
		const old_val = params.oldValue;

		const should_change = window.confirm("값을 변경하시겠습니까?");

		if (should_change) {
			const { id, profiles, amount } = params.data;

			if (new_val) {
				await update_withdrawal_request_approval(id, true);
				await insert_point_change_history(profiles, amount);
				await update_profiles_point({
					id: profiles.id,
					point: profiles.point - amount
				});
				show_toast("success", "출금 승인 됐습니다.");
			} else {
				await update_withdrawal_request_approval(id, false);
				await delete_point_change_history(profiles.id);
				await update_profiles_point({
					id: profiles.id,
					point: profiles.point + amount
				});
				show_toast("success", "출금 승인 취소 됐습니다.");
			}

			withdrawal_requests = await select_withdrawal_request();
			grid_withdrawal_requests_api.setGridOption("rowData", withdrawal_requests);
		} else {
			params.data[params.colDef.field] = old_val;
			params.api.refreshCells({
				rowNodes: [params.node],
				force: true
			});
		}
	};

	const init_withdrawal_requests_grid_options = () => {
		const grid_options = {
			rowData: [],
			columnDefs: [
				{ headerName: "id", field: "id" },
				{
					headerName: "출금 승인",
					field: "approval",
					editable: true,
					cellStyle: { backgroundColor: colors.gray[200] },
					onCellValueChanged: change_withdrawal_request_approval
				},
				{ headerName: "출금 일시", field: "created_at", valueFormatter: date_formatter },
				{ headerName: "승인 일시", field: "approved_at", valueFormatter: date_formatter },
				{ headerName: "유저 id", field: "profiles.id" },
				{ headerName: "닉네임", field: "profiles.username" },
				{ headerName: "현재 포인트", field: "profiles.point" },
				{ headerName: "출금금액", field: "amount" },
				{ headerName: "은행이름", field: "bank_name" },
				{ headerName: "계좌번호", field: "account_num" }
			],
			defaultColDef: {
				filter: true
			},
			enableCellTextSelection: true,
			ensureDomOrder: true,
			pagination: true,
			overlayLoadingTemplate: "<div class='loading loading-spinner loading-md'></div>",
			overlayNoRowsTemplate: "<span>검색결과가 없습니다.</span>"
		};

		grid_withdrawal_requests_api = createGrid(grid_withdrawal_requests, grid_options);
	};

	const insert_point_change_history = async (profiles, amount) => {
		const old_point = profiles.point;
		const new_point = old_point - amount;
		const user_id = profiles.id;

		const { error } = await supabase.from("point_change_history").insert([
			{
				category: "출금하기",
				behavior: "출금",
				old_point: old_point,
				new_point: new_point,
				user_id: user_id
			}
		]);
		if (error) throw new Error(`Failed to insert_point_change_history: ${error.message}`);
	};

	const select_withdrawal_request = async () => {
		const { data, error } = await supabase.from("withdrawal_request").select(`
	  id,
	  created_at,
	  amount,
    bank_name,
    account_num,
	  approval,
	  approved_at,
    profiles(id, username, point)
	  `);

		if (error) throw new Error(`Failed to select_withdrawal_request: ${error.message}`);
		return data || [];
	};

	const update_withdrawal_request_approval = async (id, approval) => {
		const { error } = await supabase
			.from("withdrawal_request")
			.update({ approval: approval, approved_at: dayjs() })
			.eq("id", id);

		if (error) throw new Error(`Failed to update_withdrawal_request_approval: ${error.message}`);
	};

	const update_profiles_point = async ({ id, point }) => {
		const { error } = await supabase.from("profiles").update({ point }).eq("id", id);

		if (error) throw new Error(`Failed to update_profiles_point: ${error.message}`);
	};

	const delete_point_change_history = async (user_id) => {
		const { error } = await supabase.from("point_change_history").delete().eq("user_id", user_id);

		if (error) throw new Error(`Failed to delete_point_change_history: ${error.message}`);
	};
</script>

<div class="flex h-screen flex-col">
	<Header nav_class="bg-white">
		<button slot="left" class="flex items-center" on:click={() => goto("/admin")}>
			<Icon name="left_arrow" />
		</button>
		<h1 slot="center" class="font-semibold">{TITLE}</h1>
	</Header>

	<div bind:this={grid_withdrawal_requests} class="ag-theme-quartz w-full flex-1" />
</div>
