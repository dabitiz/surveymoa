const load = async ({ locals: { supabase } }) => {
  const select_research_payment = async () => {
    const { data, error } = await supabase.from("research").select(
      `id,
      created_at, 
      category,
			images,
      form_link, 
      title, 
      explanation, 
      start_date, 
      end_date, 
      recruitment_num, 
      min_age, 
      max_age, 
      gender,
      expected_time,
      remarks,
			contact, 
			price,
      status,
      research_payment(amount, payment_method, bank_name, account_num)`
    );
    if (error)
      throw new Error(`Failed to select_research_payment: ${error.message}`);
    return data ?? [];
  };
  const research_payment = await select_research_payment();
  return { research_payment };
};
export {
  load
};
