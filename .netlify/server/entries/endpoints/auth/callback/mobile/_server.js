import { r as redirect } from "../../../../../chunks/index.js";
const GET = async (event) => {
  const { url } = event;
  const code = url.searchParams.get("code");
  if (code) {
    return new Response(JSON.stringify(code), {
      headers: {
        "Content-Type": "application/json"
      }
    });
  }
  throw redirect(303, "/auth/auth-code-error");
};
export {
  GET
};
