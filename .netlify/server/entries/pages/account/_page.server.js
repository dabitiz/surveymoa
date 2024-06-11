import { r as redirect, f as fail } from "../../../chunks/index.js";
const load = async ({ locals: { supabase, safe_get_session } }) => {
  const { session } = await safe_get_session();
  if (!session) {
    redirect(303, "/");
  }
  console.log("나는 너무 슬퍼서 눈물이 나올것만 같아요");
  const { data: profile } = await supabase.from("profiles").select(`username, avatar_url`).eq("id", session.user.id).single();
  return { session, profile };
};
const actions = {
  update: async ({ request, locals: { supabase, safe_get_session } }) => {
    const formData = await request.formData();
    const fullName = formData.get("fullName");
    const username = formData.get("username");
    const avatarUrl = formData.get("avatarUrl");
    const { session } = await safe_get_session();
    const { error } = await supabase.from("profiles").upsert({
      id: session?.user.id,
      username,
      avatar_url: avatarUrl,
      updated_at: /* @__PURE__ */ new Date()
    });
    if (error) {
      return fail(500, {
        fullName,
        username,
        avatarUrl
      });
    }
    return {
      fullName,
      username,
      avatarUrl
    };
  },
  signout: async ({ locals: { supabase, safe_get_session } }) => {
    const { session } = await safe_get_session();
    if (session) {
      await supabase.auth.signOut();
      redirect(303, "/");
    }
  }
};
export {
  actions,
  load
};
