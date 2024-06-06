import { redirect } from "@sveltejs/kit";

export const load = async ({ url, locals: { supabase, safe_get_session } }) => {
	const { session } = await safe_get_session();

	const { data: profile } = await supabase
		.from("profiles")
		.select(`username`)
		.eq("id", session.user.id)
		.single();

	if (session && profile.username) {
		redirect(303, "/home");
	} else if (session) {
		redirect(303, "/setting");
	}

	return { url: url.origin };
};
