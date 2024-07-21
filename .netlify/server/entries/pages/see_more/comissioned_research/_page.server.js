const load = async ({ locals: { supabase, safe_get_session } }) => {
  const { session } = await safe_get_session();
  const api_select_research__research_payment = async () => {
    const { data, error } = await supabase.from("research").select(
      `id,
					category,
					images,
					title,
					start_date,
					end_date,
					participant_num,
					recruitment_num,
					status,
					price,
					research_payment(amount)`
    ).eq("user_id", session.user.id);
    if (error)
      throw new Error(`Failed to api_select_research__research_payment: ${error.message}`);
    return data ?? [];
  };
  const research__research_payment = await api_select_research__research_payment();
  return { research__research_payment };
};
export {
  load
};
