export const load = async ({ params, locals: { supabase } }) => {
	const select_research_rating = async () => {
		const { data, error } = await supabase
			.from("research")
			.select(
				`participant_num, recruitment_num,
				rating_user(id, rated_user_id)`
			)
			.eq("id", params.research_id);

		if (error) throw new Error(`Failed to select_research_rating: ${error.message}`);
		return data[0] ?? [];
	};

	const get_research_participants = async () => {
		const { data, error } = await supabase
			.from("participant_research")
			.select(
				`id,
				created_at,
				profiles(id, username, avatar_url)`
			)
			.eq("research_id", params.research_id);
		if (error) throw new Error(`Failed to get_research_participants: ${error.message}`);
		return data ?? [];
	};

	const research_rating = await select_research_rating();
	const research_participants = await get_research_participants();

	return { research_rating, research_participants };
};
