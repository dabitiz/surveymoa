const load = async ({ params, locals: { supabase } }) => {
  const select_research_payment = async () => {
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
    ).eq("id", params.research_id);
    if (error)
      throw new Error(`Failed to select_research_payment: ${error.message}`);
    return data[0] ?? [];
  };
  const research_payment = await select_research_payment();
  return { research_payment };
};
export {
  load
};
