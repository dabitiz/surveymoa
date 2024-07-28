const load = async ({ params, locals: { supabase } }) => {
  const select_research = async () => {
    const { data, error } = await supabase.from("research").select(
      `id,
					status,
					category,
					images,
					form_link,
					title, 
					explanation,
					start_date, 
					end_date, 
					participant_num,
					recruitment_num, 
					min_age, 
					max_age, 
					gender,
					expected_time,
					price,
					user_id,
					screening_research(id, questions),
					screening_user(user_id, status),
					participant_research(user_id)`
    ).eq("id", params.research_id);
    if (error)
      throw new Error(`Failed to select_research: ${error.message}`);
    return data[0] ?? [];
  };
  const research = await select_research();
  return { research };
};
export {
  load
};
