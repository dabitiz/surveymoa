import { r as redirect } from "../../chunks/index.js";
const prerender = true;
const load = async ({ url, locals: { supabase, safe_get_session } }) => {
  const { session } = await safe_get_session();
  console.log("session", session);
  if (session) {
    const { data: profiles } = await supabase.from("profiles").select(`username`).eq("id", session.user.id).single();
    if (profiles.username) {
      redirect(303, "/home");
    } else {
      redirect(303, "/setting");
    }
  }
  return { url: url.origin };
};
export {
  load,
  prerender
};
