import { calculate_age } from "$lib/js/common.js";

export const load = async ({ locals: { supabase, safe_get_profiles } }) => {
	const { profiles } = await safe_get_profiles();
	const age = calculate_age(profiles.year_of_birth);

	const select_available_research_filtering = async (gender, age) => {
		let query = supabase
			.from("available_research")
			.select(
				`id, 
        title, 
        category, 
        images,
        title,
        participant_num,
        recruitment_num,
        expected_time,
        price,
        screening_research(id, questions),
        screening_user(user_id, status),
        participant_research(user_id)`
			)
			.order("id", { ascending: false })
			.lte("min_age", age)
			.gte("max_age", age)
			.limit(10);

		gender === "남자"
			? (query = query.neq("gender", "여자"))
			: (query = query.neq("gender", "남자"));

		const { data, error } = await query;

		if (error) throw new Error(`Failed to get_age_from_year_of_birth: ${error.message}`);
		return data ?? [];
	};

	const available_research = await select_available_research_filtering(profiles.gender, age);

	return { available_research };
};
