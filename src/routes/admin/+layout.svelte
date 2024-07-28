<script>
	import { goto } from "$app/navigation";
	import { onMount } from "svelte";

	import "ag-grid-community/styles/ag-grid.css";
	import "ag-grid-community/styles/ag-theme-quartz.css";

	import { show_toast } from "@/lib/js/common";

	export let data;
	let { user_role } = data;

	onMount(() => {
		if (user_role.role !== "admin") {
			goto("/home");
			show_toast("error", "관리자만 입장 할 수 있습니다.");
		}
	});
</script>

<slot></slot>
