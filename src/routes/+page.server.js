export const prerender = true;

import Profiles_api from "@/lib/api/profiles_api.js";
import { redirect } from "@sveltejs/kit";

export const load = async ({ locals: { supabase, safe_get_session } }) => {
	const { session } = await safe_get_session();
	const profiles_api = new Profiles_api(supabase, session);

	if (session) {
		const profiles = await profiles_api.get_profile_info();

		if (profiles.username) {
			redirect(303, "/home");
		} else {
			redirect(303, "/setting");
		}
	}

	return { session };
};
