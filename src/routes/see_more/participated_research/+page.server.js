export const load = async ({ locals: { supabase, safe_get_session } }) => {
	const { session } = await safe_get_session();
	const select_participant_research = async () => {
		const { data, error } = await supabase
			.from("participant_research")
			.select(
				`id,
      research(id, title, category, images, participant_num, recruitment_num, expected_time, price)`
			)
			.eq("user_id", session.user.id);

		if (error) throw new Error(`Failed to select_participant_research: ${error.message}`);
		return data ?? [];
	};

	const participant_research = await select_participant_research();

	return { participant_research };
};
