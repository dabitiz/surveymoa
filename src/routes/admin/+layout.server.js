import User_role_api from "@/lib/api/user_role_api.js";

export const load = async ({ locals: { supabase, safe_get_session } }) => {
	const { session } = await safe_get_session();
	const user_role_api = new User_role_api(supabase, session);

	const user_role = await user_role_api.select_user_role();

	return { user_role };
};
