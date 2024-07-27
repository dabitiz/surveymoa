<script>
	const TITLE = "조사 스크리닝 설정";

	import { onMount } from "svelte";
	import { createGrid } from "ag-grid-community";
	import { goto } from "$app/navigation";

	import { grid_button_renderer_class } from "@/lib/ag_grid/grid_class.js";
	import { show_toast } from "@/lib/js/common.js";
	import Header from "@/lib/components/ui/Header/+page.svelte";
	import Icon from "@/lib/components/ui/Icon/+page.svelte";
	import Modal from "@/lib/components/ui/Modal/+page.svelte";

	export let data;
	let { screening_researchs } = data;
	$: ({ supabase, session } = data);

	let grid_screening_research;
	let grid_screening_research_api;

	let is_screening_research_modal = false;

	let research = {
		id: "",
		title: "",
		remarks: ""
	};

	let screening_research = {
		id: "",
		questions: []
	};

	onMount(() => {
		screening_research_grid_option_init();

		grid_screening_research_api.setGridOption("rowData", screening_researchs);
	});

	/**
	 * 조사 사전검증 모달 open
	 */
	const open_screening_modal = (params) => {
		is_screening_research_modal = true;

		research.id = params.id;
		research.title = params.title;
		research.remarks = params.remarks;

		if (params.screening_research.length > 0) {
			screening_research.id = params.screening_research[0].id;
			screening_research.questions = params.screening_research[0].questions;
		} else {
			screening_research.id = "";
			screening_research.questions = [];
		}
	};

	const save_screening_questions = async () => {
		if (screening_research.id === "") {
			await insert_screening_research_questions(screening_research.questions, research.id);
		} else {
			await update_screening_research_questions(
				screening_research.questions,
				screening_research.id
			);
		}

		screening_researchs = await select_screening_research();
		grid_screening_research_api.setGridOption("rowData", screening_researchs);

		is_screening_research_modal = false;
		show_toast("success", "저장되었습니다.");
	};

	//aggrid의

	/**
	 * 조사 사전검증 삭제
	 */
	const delete_screening_research = async (params) => {
		if (window.confirm("삭제하시겠습니꺼?")) {
			await delete_screening_research_questions(params.screening_research[0].id);

			screening_researchs = await select_screening_research();
			grid_screening_research_api.setGridOption("rowData", screening_researchs);

			show_toast("success", "삭제되었습니다.");
		}
	};

	const screening_research_grid_option_init = () => {
		const modify_btn_renderer_params = {
			inner_html: `<button class="btn btn-sm btn_modify">수정</button>`,
			add_class: `.btn_modify`,
			function_name: open_screening_modal
		};

		const config_btn_renderer_params = {
			inner_html: `<button class="btn btn-primary btn-sm btn_config">설정</button>`,
			add_class: `.btn_config`,
			function_name: open_screening_modal
		};

		const delete_btn_renderer_params = {
			inner_html: `<button class="btn btn-error text-white btn-sm btn_delete">삭제</button>`,
			add_class: `.btn_delete`,
			function_name: delete_screening_research
		};

		const grid_options = {
			rowData: [],
			columnDefs: [
				{ headerName: "id", field: "id" },
				{ headerName: "제목", field: "title" },
				{ headerName: "참고사항", field: "remarks" },
				{
					headerName: "스크리닝 설정",
					cellRendererSelector: (params) => {
						return {
							component: grid_button_renderer_class,
							params:
								params.data.screening_research.length === 0
									? config_btn_renderer_params
									: modify_btn_renderer_params
						};
					}
				},
				{
					headerName: "스크리닝 삭제",
					cellRendererSelector: (params) => {
						if (params.data.screening_research.length !== 0) {
							return {
								component: grid_button_renderer_class,
								params: delete_btn_renderer_params
							};
						}
					}
				}
			],
			defaultColDef: { filter: true },
			enableCellTextSelection: true,
			ensureDomOrder: true,
			pagination: true,
			overlayLoadingTemplate: "<div class='loading loading-spinner loading-md'></div>",
			overlayNoRowsTemplate: "<span>검색결과가 없습니다.</span>"
		};

		grid_screening_research_api = createGrid(grid_screening_research, grid_options);
	};

	const insert_screening_research_questions = async (questions, research_id) => {
		const { error } = await supabase
			.from("screening_research")
			.insert([{ questions, research_id }]);

		if (error) throw new Error(`Failed to insert_screening_research_questions: ${error.message}`);
	};

	const select_screening_research = async () => {
		const { data, error } = await supabase.from("research").select(`
			id,
			title,
			remarks,
			screening_research(id, questions)
		`);

		if (error) throw new Error(`Failed to select_screening_research: ${error.message}`);
		return data || [];
	};

	const update_screening_research_questions = async (questions, screening_research_id) => {
		const { error } = await supabase
			.from("screening_research")
			.update([{ questions }])
			.eq("id", screening_research_id);

		if (error) throw new Error(`Failed to update_questions: ${error.message}`);
	};

	const delete_screening_research_questions = async (screening_research_id) => {
		const { error } = await supabase
			.from("screening_research")
			.delete()
			.eq("id", screening_research_id);

		if (error) throw new Error(`Failed to delete_screening: ${error.message}`);
	};
</script>

<div class="flex h-screen flex-col">
	<Header nav_class="bg-white">
		<button slot="left" class="flex items-center" on:click={() => goto("/admin")}>
			<Icon name="left_arrow" />
		</button>
		<h1 slot="center" class="font-semibold">{TITLE}</h1>
	</Header>

	<div bind:this={grid_screening_research} class="ag-theme-quartz w-full flex-1" />
</div>

<!-- 사전검증 모달 -->
<Modal modal_position="center" bind:is_modal_open={is_screening_research_modal}>
	<div class=" p-4">
		<p class="text-lg">스크리닝 설정 - ({research.title})</p>

		<div class="mt-8 bg-gray-200 p-4">
			<pre class="text-sm">{research.remarks}</pre>
		</div>

		<div class="flex flex-col items-center">
			<button
				on:click={() => {
					screening_research.questions = [
						...screening_research.questions,
						...[{ question: "", choices: [{ choice: "", status: false }] }]
					];
				}}
				class="btn btn-primary mt-4">스크리닝 추가</button
			>
		</div>

		{#each screening_research.questions as question, question_idx}
			<div class="form-control mt-4 w-full">
				<label class="label" for="question_title">
					<span class="label-text text-lg font-bold">제목</span>
					<button
						class="btn btn-error btn-sm text-white"
						on:click={() => {
							screening_research.questions.splice(question_idx, 1);
							screening_research.questions = [...screening_research.questions];
						}}>x</button
					>
				</label>
				<input
					type="text"
					class="input input-bordered h-[52px] w-full border-gray-300 focus:border-primary focus:outline-none"
					for="question_title"
					maxlength="100"
					bind:value={question.question}
				/>
			</div>

			<div class="mt-4">
				{#each question.choices as choice, choice_idx}
					<div class="form-control">
						<label class="label cursor-pointer">
							<div class="flex w-80 items-center">
								<input type="radio" class="radio" hidden />
								<input
									type="text"
									bind:value={choice.choice}
									placeholder="옵션"
									class="input input-sm input-bordered w-full border-gray-300 focus:border-primary focus:outline-none"
								/>
							</div>

							<div class="flex items-center">
								<input
									type="checkbox"
									class="toggle toggle-primary toggle-md"
									checked={choice.status}
									on:click={() => (choice.status = !choice.status)}
								/>
								{#if choice_idx !== 0}
									<button
										class="pl-2 text-center text-2xl text-error"
										on:click={() => {
											question.choices.splice(choice_idx, 1);
											question.choices = [...question.choices];
										}}>x</button
									>
								{/if}
							</div>
						</label>
					</div>
				{/each}
			</div>

			<button
				class="btn btn-primary btn-sm"
				on:click={() => {
					screening_research.questions[question_idx].choices = [
						...screening_research.questions[question_idx].choices,
						{ choice: "", status: false }
					];
				}}>옵션추가</button
			>
		{/each}

		<div class="mt-4 flex gap-4">
			<button
				class="btn flex-1 outline outline-1 outline-gray-300"
				on:click={() => (is_screening_research_modal = false)}>취소</button
			>
			<button class="btn btn-primary flex-1" on:click={save_screening_questions}>저장</button>
		</div>
	</div>
</Modal>
