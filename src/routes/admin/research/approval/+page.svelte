<script>
	const TITLE = "조사 승인";

	import { onMount } from "svelte";
	import { createGrid } from "ag-grid-community";
	import { goto } from "$app/navigation";

	import colors from "@/lib/js/colors.js";
	import { date_formatter } from "@/lib/ag_grid/grid_common.js";
	import Header from "@/lib/components/ui/Header/+page.svelte";
	import Icon from "@/lib/components/ui/Icon/+page.svelte";

	export let data;
	let { research_payment } = data;
	$: ({ supabase } = data);

	let grid_researches;
	let grid_researches_api;

	onMount(() => {
		researchs_grid_options_init();

		grid_researches_api.setGridOption("rowData", research_payment);
	});

	const change_research_status = async (params) => {
		const new_val = params.newValue;
		const old_val = params.oldValue;

		const should_change = window.confirm("값을 변경하시겠습니까?");

		if (should_change) {
			await update_research_status(params.data.id, new_val);

			alert("값이 수정되었습니다.");
		} else {
			params.data[params.colDef.field] = old_val;
			params.api.refreshCells({
				rowNodes: [params.node],
				force: true
			});
		}
	};

	const researchs_grid_options_init = () => {
		const grid_options = {
			rowData: [],
			columnDefs: [
				{ headerName: "id", field: "id" },
				{
					headerName: "조사 상태",
					field: "status",
					editable: true,
					cellStyle: { backgroundColor: colors.gray[200] },
					cellEditor: "agSelectCellEditor",
					cellEditorParams: {
						values: ["결제대기", "결제완료", "결제취소"]
					},
					onCellValueChanged: change_research_status
				},
				{
					headerName: "결제정보",
					field: "research_payment.0.payment_method",
					valueFormatter: (params) => (params.value === "bank_deposit" ? "무통장 입금" : "")
				},
				{
					headerName: "은행 이름",
					field: "research_payment.0.bank_name"
				},
				{ headerName: "입금예정 금액", field: "research_payment.0.amount" },
				{ headerName: "계좌 번호", field: "research_payment.0.account_num" },
				{ headerName: "생성일", field: "created_at", valueFormatter: date_formatter },
				{ headerName: "카테고리", field: "category" },
				{ headerName: "폼링크", field: "form_link" },
				{ headerName: "제목", field: "title" },
				{ headerName: "설명", field: "explanation" },
				{ headerName: "시작일", field: "start_date", valueFormatter: date_formatter },
				{ headerName: "마감일", field: "end_date", valueFormatter: date_formatter },
				{ headerName: "모집인원", field: "recruitment_num" },
				{ headerName: "최소연령", field: "min_age" },
				{ headerName: "최대연령", field: "max_age" },
				{
					headerName: "성별",
					field: "gender"
				},
				{ headerName: "예상 소요시간", field: "expected_time" },
				{ headerName: "참고사항", field: "remarks" },
				{ headerName: "연락처", field: "contact" },
				{ headerName: "조사 가격", field: "price" }
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

		grid_researches_api = createGrid(grid_researches, grid_options);
	};

	const update_research_status = async (id, status) => {
		const { error } = await supabase.from("research").update({ status }).eq("id", id);

		if (error) throw new Error(`Failed to update_research_status: ${error.message}`);
	};
</script>

<div class="flex h-screen flex-col">
	<Header nav_class="bg-white">
		<button slot="left" class="flex items-center" on:click={() => goto("/admin")}>
			<Icon name="left_arrow" />
		</button>
		<h1 slot="center" class="font-semibold">{TITLE}</h1>
	</Header>

	<div bind:this={grid_researches} class="ag-theme-quartz w-full flex-1" />
</div>
