import { redirect } from "@sveltejs/kit";

export const GET = async (event) => {
	const {
		url,
		locals: { supabase }
	} = event;
	const code = url.searchParams.get("code");
	const next = url.searchParams.get("next") ?? "/";

	const get_profiles_gender = async (user_id) => {
		const { data, error } = await supabase.from("profiles").select(`gender`).eq("id", user_id);

		if (error) throw new Error(`Failed to get_profiles_gender: ${error.message}`);
		return data[0] || [];
	};

	if (code) {
		const { data } = await supabase.auth.exchangeCodeForSession(code);

		if (data) {
			const profiles = await get_profiles_gender(data.user.id);
			if (profiles.gender) {
				throw redirect(303, `/${next.slice(1)}home`);
			} else {
				throw redirect(303, `/${next.slice(1)}setting`);
			}
		}
	}

	throw redirect(303, "/auth/auth-code-error");
};
