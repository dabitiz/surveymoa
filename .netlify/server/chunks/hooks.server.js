import { P as PUBLIC_SUPABASE_URL, a as PUBLIC_SUPABASE_ANON_KEY } from "./public.js";
import { createServerClient } from "@supabase/ssr";
function sequence(...handlers) {
  const length = handlers.length;
  if (!length)
    return ({ event, resolve }) => resolve(event);
  return ({ event, resolve }) => {
    return apply_handle(0, event, {});
    function apply_handle(i, event2, parent_options) {
      const handle2 = handlers[i];
      return handle2({
        event: event2,
        resolve: (event3, options) => {
          const transformPageChunk = async ({ html, done }) => {
            if (options?.transformPageChunk) {
              html = await options.transformPageChunk({ html, done }) ?? "";
            }
            if (parent_options?.transformPageChunk) {
              html = await parent_options.transformPageChunk({ html, done }) ?? "";
            }
            return html;
          };
          const filterSerializedResponseHeaders = parent_options?.filterSerializedResponseHeaders ?? options?.filterSerializedResponseHeaders;
          const preload = parent_options?.preload ?? options?.preload;
          return i < length - 1 ? apply_handle(i + 1, event3, {
            transformPageChunk,
            filterSerializedResponseHeaders,
            preload
          }) : resolve(event3, { transformPageChunk, filterSerializedResponseHeaders, preload });
        }
      });
    }
  };
}
const set_supabase = async ({ event, resolve }) => {
  event.locals.supabase = createServerClient(PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_ANON_KEY, {
    cookies: {
      get: (key) => event.cookies.get(key),
      set: (key, value, options) => {
        event.cookies.set(key, value, { ...options, path: "/" });
      },
      remove: (key, options) => {
        event.cookies.delete(key, { ...options, path: "/" });
      }
    }
  });
  event.locals.safe_get_session = async () => {
    const {
      data: { session }
    } = await event.locals.supabase.auth.getSession();
    if (!session) {
      return { session: null };
    }
    const {
      data: { user },
      error
    } = await event.locals.supabase.auth.getUser();
    if (error) {
      return { session: null };
    }
    delete session.user;
    return { session: Object.assign({}, session, { user }) };
  };
  event.locals.safe_get_profiles = async () => {
    const {
      data: { user },
      get_user_error
    } = await event.locals.supabase.auth.getUser();
    if (get_user_error) {
      return { profiles: null };
    }
    const { data, error } = await event.locals.supabase.from("profiles").select(`id, username, gender, year_of_birth, rating, point`).eq("id", user.id).single();
    if (error) {
      return { profiles: null };
    }
    return { profiles: data };
  };
  return resolve(event, {
    filterSerializedResponseHeaders(name) {
      return name === "content-range" || name === "x-supabase-api-version";
    }
  });
};
const handle = sequence(set_supabase);
export {
  handle,
  set_supabase
};
