import { fail, redirect } from "@sveltejs/kit";

export const load = async ({ locals: { supabase, safe_get_session } }) => {
	const { session } = await safe_get_session();

	if (!session) {
		redirect(303, "/");
	}

	const { data: profiles } = await supabase
		.from("profiles")
		.select(`username, avatar_url`)
		.eq("id", session.user.id)
		.single();

	return { session, profiles };
};

export const actions = {
	update: async ({ request, locals: { supabase, safe_get_session } }) => {
		const formData = await request.formData();
		const fullName = formData.get("fullName");
		const username = formData.get("username");
		const avatarUrl = formData.get("avatarUrl");

		const { session } = await safe_get_session();

		const { error } = await supabase.from("profile").upsert({
			id: session?.user.id,
			username,
			avatar_url: avatarUrl,
			updated_at: new Date()
		});

		if (error) {
			return fail(500, {
				fullName,
				username,
				avatarUrl
			});
		}

		return {
			fullName,
			username,
			avatarUrl
		};
	},
	signout: async ({ locals: { supabase, safe_get_session } }) => {
		const { session } = await safe_get_session();
		if (session) {
			await supabase.auth.signOut();
			redirect(303, "/");
		}
	}
};
