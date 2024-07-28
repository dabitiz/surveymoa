class User_role_api {
  constructor(supabase, session) {
    this.supabase = supabase;
    this.session = session;
  }
  async select_user_role() {
    const { data, error } = await this.supabase.from("user_role").select(`role`).eq("user_id", this.session.user.id);
    if (error)
      throw new Error(`Failed to upload_avatar_url: ${error.message}`);
    return data[0] || {};
  }
}
const load = async ({ locals: { supabase, safe_get_session } }) => {
  const { session } = await safe_get_session();
  const user_role_api = new User_role_api(supabase, session);
  const user_role = await user_role_api.select_user_role();
  return { user_role };
};
export {
  load
};
