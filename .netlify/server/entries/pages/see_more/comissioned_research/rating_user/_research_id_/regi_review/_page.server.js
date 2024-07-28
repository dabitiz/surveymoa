const load = async ({ params, locals: { supabase } }) => {
  const get_research = async () => {
    const { data, error } = await supabase.from("research").select(`category, images, title`).eq("id", params.research_id);
    if (error)
      throw new Error(`Failed to get_research: ${error.message}`);
    return data[0] ?? [];
  };
  const research = await get_research();
  return { research };
};
export {
  load
};
