const load = async ({ locals: { supabase, safe_get_session } }) => {
  const { session } = await safe_get_session();
  const select_account = async () => {
    const { data, error } = await supabase.from("account").select("id, bank_name, account_num").eq("user_id", session.user.id);
    if (error)
      throw new Error(`Failed to select_account: ${error.message}`);
    return data[0] ?? {};
  };
  const account = await select_account();
  return { account };
};
export {
  load
};
