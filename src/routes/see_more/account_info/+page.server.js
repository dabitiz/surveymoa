import Account_user_api from "@/lib/api/account_user_api.js";

export const load = async ({ locals: { supabase, safe_get_session } }) => {
	const { session } = await safe_get_session();
	const account_user_api = new Account_user_api(supabase, session);

	const account = await account_user_api.select_account();

	return { account };
};
