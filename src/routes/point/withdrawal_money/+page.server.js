export const load = async ({ locals: { supabase, safe_get_session } }) => {
	const { session } = await safe_get_session();

	const api_select_account_user = async () => {
		const { data, error } = await supabase
			.from("account_user")
			.select("id, bank_name, account_num")
			.eq("user_id", session.user.id);

		if (error) throw new Error(`Failed to api_select_account_user: ${error.message}`);
		return data[0] ?? {};
	};

	const account_user = await api_select_account_user();

	return { account_user };
};
