const load = async ({ params, locals: { supabase } }) => {
  const api_select_research__research_payment = async () => {
    const { data, error } = await supabase.from("research").select(
      `id,
					category,
					images,
					title, 
					start_date, 
					end_date, 
					recruitment_num, 
					min_age, 
					max_age, 
					gender,
					expected_time,
					price,
					status,
					research_payment(amount, payment_method, bank_name, account_num)`
    ).eq("id", params.research_id).single();
    if (error)
      throw new Error(`Failed to api_select_research: ${error.message}`);
    return data ?? [];
  };
  const research__research_payment = await api_select_research__research_payment();
  return { research__research_payment };
};
export {
  load
};
