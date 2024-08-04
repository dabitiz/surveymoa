import { redirect } from "@sveltejs/kit";

export const GET = async (event) => {
	const {
		url,
		locals: { supabase }
	} = event;
	const code = url.searchParams.get("code");
	const next = url.searchParams.get("next") ?? "/";

	const redirect_to = new URL(url);
	redirect_to.pathname = next;
	redirect_to.searchParams.delete("code");

	if (code) {
		const { error } = await supabase.auth.exchangeCodeForSession(code);
		if (!error) {
			redirect_to.searchParams.delete("next");
			redirect(303, redirect_to);
		}
	}

	redirect_to.pathname = "/auth/auth-code-error";
	redirect(303, redirect_to);
};
