import { c as create_ssr_component, d as add_attribute } from "../../../chunks/ssr.js";
import "devalue";
import "../../../chunks/client.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let { form } = $$props;
  let { session, supabase, profile } = data;
  let profileForm;
  let username = profile?.username ?? "";
  profile?.avatar_url ?? "";
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  if ($$props.form === void 0 && $$bindings.form && form !== void 0)
    $$bindings.form(form);
  ({ session, supabase, profile } = data);
  return `  <div class="form-widget"><form class="form-widget" method="post" action="?/update"${add_attribute("this", profileForm, 0)}><div><label for="email" data-svelte-h="svelte-1p9d3fm">Email</label> <input id="email" type="text"${add_attribute("value", session.user.email, 0)} disabled></div> <div><label for="username" data-svelte-h="svelte-1wr0xay">Username</label> <input id="username" name="username" type="text"${add_attribute("value", form?.username ?? username, 0)}></div> <div><input type="submit" class="button primary block"${add_attribute("value", "Update", 0)} ${""}></div></form> <form method="post" action="?/signout"><div><button class="button block" ${""}>Sign Out</button></div></form></div> <button class="btn btn-primary" data-svelte-h="svelte-h1my6u">이건 다른 페이지로 이동하는 슬픈 자기소개서</button>`;
});
export {
  Page as default
};
