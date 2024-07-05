import { PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_ANON_KEY } from "$env/static/public";
import { createServerClient } from "@supabase/ssr";
import { sequence } from "@sveltejs/kit/hooks";

export const hook1 = async ({ event, resolve }) => {
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
			// JWT validation has failed
			return { session: null };
		}

		//세션 사용시 에러 메시지를 제거.
		//https://github.com/supabase/auth-js/issues/873
		delete session.user;

		return { session: Object.assign({}, session, { user }) };
	};

	return resolve(event, {
		filterSerializedResponseHeaders(name) {
			return name === "content-range" || name === "x-supabase-api-version";
		}
	});
};

export const handle = sequence(hook1);
