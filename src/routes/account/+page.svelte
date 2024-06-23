<!-- src/routes/account/+page.svelte -->
<script>
	import { enhance } from "$app/forms";
	import { goto } from "$app/navigation";

	export let data;
	export let form;

	let { session, supabase, profile } = data;
	$: ({ session, supabase, profile } = data);

	let profileForm;
	let loading = false;
	let username = profile?.username ?? "";
	let avatarUrl = profile?.avatar_url ?? "";

	const handleSubmit = () => {
		loading = true;
		return async () => {
			loading = false;
		};
	};

	const handleSignOut = () => {
		loading = true;
		return async ({ update }) => {
			loading = false;
			update();
		};
	};
</script>

<div class="form-widget">
	<form
		class="form-widget"
		method="post"
		action="?/update"
		use:enhance={handleSubmit}
		bind:this={profileForm}
	>
		<div>
			<label for="email">Email</label>
			<input id="email" type="text" value={session.user.email} disabled />
		</div>

		<div>
			<label for="username">Username</label>
			<input id="username" name="username" type="text" value={form?.username ?? username} />
		</div>

		<div>
			<input
				type="submit"
				class="button primary block"
				value={loading ? "Loading..." : "Update"}
				disabled={loading}
			/>
		</div>
	</form>

	<form method="post" action="?/signout" use:enhance={handleSignOut}>
		<div>
			<button class="button block" disabled={loading}>Sign Out</button>
		</div>
	</form>
</div>

<button class="btn btn-primary" on:click={() => goto("/home")}
	>이건 다른 페이지로 이동하는 슬픈 자기소개서</button
>
