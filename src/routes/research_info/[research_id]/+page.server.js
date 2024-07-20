export const load = async ({ params, locals: { supabase } }) => {
	const api_select_research = async () => {
		const { data, error } = await supabase
			.from("research")
			.select(
				`id,
					category,
					images,
					form_link,
					title, 
					explanation,
					start_date, 
					end_date, 
					participant_num,
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

	const research = await api_select_research();

	return { research };
};
