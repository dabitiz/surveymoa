export const load = async ({ locals: { supabase } }) => {
	const select_screening_research = async () => {
		const { data, error } = await supabase.from("research").select(`
		id,
		title,
		remarks,
		screening_research(id, questions)
	`);

		if (error) throw new Error(`Failed to select_screening_research: ${error.message}`);
		return data || [];
	};

	const screening_researchs = await select_screening_research();

	return { screening_researchs };
};
