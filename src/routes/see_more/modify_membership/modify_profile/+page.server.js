import { redirect } from "@sveltejs/kit";
import Profiles_api from "@/lib/api/profiles_api.js";

export const load = async ({ locals: { supabase, safe_get_session } }) => {
	const { session } = await safe_get_session();

	if (!session) {
		redirect(303, "/");
	}
	const profiles_api = new Profiles_api(supabase, session);

	const profiles = await profiles_api.get_profile_info();

	return { session, profiles };
};
