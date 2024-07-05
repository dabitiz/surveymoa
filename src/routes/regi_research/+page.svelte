<script>
	import { page } from "$app/stores";

	import { comma } from "@/lib/js/common.js";
	import colors from "@/lib/js/colors";

	import Header from "@/lib/components/ui/Header/+page.svelte";
	import Modal from "@/lib/components/ui/Modal/+page.svelte";
	import Icon from "@/lib/components/ui/Icon/+page.svelte";

	export let data;

	const TITLE = "조사 등록";

	let { supabase } = data;

	let page_count = 0;

	let research_info = {
		category: "",
		images: [],
		form_link: "",
		title: "",
		explanation: "",
		deadline: new Date(),
		recruitment_num: 50,
		min_age: 1,
		max_age: 70,
		gender: "all",
		expected_time: 5,
		remarks: "",
		account_user_id: 0,
		amount: 0
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

<main></main>
