export const load = async ({ params, locals: { supabase } }) => {
	const get_research = async () => {
		const { data, error } = await supabase
			.from("research")
			.select(`category, images, title`)
			.eq("id", params.research_id);

		if (error) throw new Error(`Failed to get_research: ${error.message}`);
		return data[0] ?? [];
	};

	const get_rating_user = async () => {
		const { data, error } = await supabase
			.from("rating_user")
			.select(`rating, comment`)
			.eq("id", params.rating_id);

		if (error) throw new Error(`Failed to get_rating_user: ${error.message}`);
		return data[0] ?? [];
	};

	const research = await get_research();
	const rating_user = await get_rating_user();

	return { research, rating_user };
};
