import { P as PUBLIC_SUPABASE_URL, a as PUBLIC_SUPABASE_ANON_KEY } from "../../chunks/public.js";
import { isBrowser, createBrowserClient, createServerClient } from "@supabase/ssr";
const load = async ({ fetch, data, depends }) => {
  depends("supabase:auth");
  const supabase = isBrowser() ? createBrowserClient(PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_ANON_KEY, {
    global: {
      fetch
    }
  }) : createServerClient(PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_ANON_KEY, {
    global: {
      fetch
    },
    cookies: {
      getAll() {
        return data.cookies;
      }
    }
  });
  const {
    data: { session }
  } = await supabase.auth.getSession();
  const {
    data: { user }
  } = await supabase.auth.getUser();
  return { supabase, session, user };
};
export {
  load
};
