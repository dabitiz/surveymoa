export const load = async ({ locals: { safe_get_session } }) => {
	const { session } = await safe_get_session();

	return {
		session
	};
};
