import Research_api from "@/lib/api/research_api.js";

export const load = async ({ locals: { supabase, safe_get_session } }) => {
	const { session } = await safe_get_session();
	const research_api = new Research_api(supabase, session);

	const research_payment_info = await research_api.select_research__research_payment_info();

	return { research_payment_info };
};
