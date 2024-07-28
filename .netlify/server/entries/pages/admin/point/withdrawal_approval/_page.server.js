const load = async ({ locals: { supabase } }) => {
  const select_withdrawal_request = async () => {
    const { data, error } = await supabase.from("withdrawal_request").select(`
	  id,
	  created_at,
	  amount,
    bank_name,
    account_num,
	  approval,
	  approved_at,
    profiles(id, username, point)
	  `);
    if (error)
      throw new Error(`Failed to select_withdrawal_request: ${error.message}`);
    return data || [];
  };
  const withdrawal_requests = await select_withdrawal_request();
  return { withdrawal_requests };
};
export {
  load
};
