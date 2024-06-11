export const prerender = true;

import { redirect } from "@sveltejs/kit";

export const load = async ({ url, locals: { supabase, safe_get_session } }) => {
	const { session } = await safe_get_session();

	if (session) {
		const { data: profile } = await supabase
			.from("profile")
			.select(`username`)
			.eq("id", session.user.id)
			.single();

		if (profile.username) {
			redirect(303, "/home");
		} else {
			redirect(303, "/setting");
		}
	}

	return { url: url.origin };
};
