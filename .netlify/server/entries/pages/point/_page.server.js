const load = async ({ locals: { supabase, safe_get_session } }) => {
  const { session } = await safe_get_session();
  const select_withdrawal_request = async () => {
    const { data, error } = await supabase.from("withdrawal_request").select("id, approval").order("id", { ascending: false }).eq("user_id", session.user.id);
    if (error)
      throw new Error(`Failed to select_withdrawal_request: ${error.message}`);
    return data || [];
  };
  const select_point_change_history = async () => {
    const { data, error } = await supabase.from("point_change_history").select("id, created_at, category, behavior, old_point, new_point").order("id", { ascending: false }).eq("user_id", session.user.id);
    if (error)
      throw new Error(`Failed to select_point_change_history: ${error.message}`);
    return data || [];
  };
  const withdrawal_request = await select_withdrawal_request();
  const point_change_history = await select_point_change_history();
  return { withdrawal_request, point_change_history };
};
export {
  load
};
