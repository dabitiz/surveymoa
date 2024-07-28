export const load = async ({ locals: { supabase, safe_get_session } }) => {
	const { session } = await safe_get_session();

	const select_rating_user = async () => {
		const { data, error } = await supabase
			.from("rating_user")
			.select(
				`created_at, updated_at, rating, comment,
      profiles:rate_user_id(username, avatar_url)`
			)
			.eq("rated_user_id", session.user.id);

		if (error) throw new Error(`Failed to api_select_rating_user: ${error.message}`);
		return data ?? [];
	};

	const rating_user = await select_rating_user();

	return { rating_user };
};
