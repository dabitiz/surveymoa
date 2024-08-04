export const load = async ({ locals: { safe_get_session }, cookies }) => {
	const { session } = await safe_get_session();

	return { session, cookies: cookies.getAll() };
};
