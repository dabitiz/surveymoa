export const load = (async ({ locals: { safe_get_session } }) => {
  const { session, user } = await safe_get_session();

  return {
    session,
    user,
  }
}) 