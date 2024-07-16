import Screening_research_api from "@/lib/api/screening_research_api.js";

export const load = async ({ locals: { supabase, safe_get_session } }) => {
	const { session } = await safe_get_session();
	const screening_research_api = new Screening_research_api(supabase, session);

	const screening_researchs = await screening_research_api.select_screening_research();

	return { screening_researchs };
};
