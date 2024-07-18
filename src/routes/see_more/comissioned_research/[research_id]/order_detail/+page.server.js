export const load = async ({ params, locals: { supabase, safe_get_session } }) => {
	const { session } = await safe_get_session();

	const api_select_research = async () => {
		const { data, error } = await supabase
			.from("research")
			.select(
				`id,
					category,
					images,
					title, 
					start_date, 
					end_date, 
					recruitment_num, 
					min_age, 
					max_age, 
					gender,
					expected_time,
					price,
					status`
			)
			.eq("id", params.research_id)
			.single();

		if (error) throw new Error(`Failed to api_select_research: ${error.message}`);
		return data ?? [];
	};

	const api_select_account_user = async () => {
		const { data, error } = await supabase
			.from("account_user")
			.select(`id, bank_name, account_num`)
			.eq("user_id", session.user.id)
			.single();

		if (error) throw new Error(`Failed to api_select_account_user: ${error.message}`);
		return data ?? [];
	};

	const research = await api_select_research();
	const account_user = await api_select_account_user();

	return { research, account_user };
};
