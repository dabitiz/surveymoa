import { c as create_ssr_component, b as escape, a as add_attribute, v as validate_component } from "../../../../chunks/ssr.js";
import { P as Page$1 } from "../../../../chunks/_page.js";
import { P as Page$3 } from "../../../../chunks/_page5.js";
import { P as Page$2 } from "../../../../chunks/_page2.js";
const TITLE = "계좌 정보";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let supabase;
  let session;
  let { data } = $$props;
  let { account } = data;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    ({ supabase, session } = data);
    $$rendered = `${$$result.head += `<!-- HEAD_svelte-1lyn9uj_START -->${$$result.title = `<title>${escape(TITLE)} | 설문모아</title>`, ""}<meta name="description"${add_attribute("content", TITLE, 0)}><!-- HEAD_svelte-1lyn9uj_END -->`, ""} ${validate_component(Page$1, "Header").$$render($$result, {}, {}, {
      center: () => {
        return `<h1 slot="center" class="font-semibold">${escape(TITLE)}</h1>`;
      },
      left: () => {
        return `<button slot="left" class="flex items-center">${validate_component(Page$2, "Icon").$$render($$result, { name: "left_arrow" }, {}, {})}</button>`;
      }
    })} <main><div class="mx-4 mt-5">${validate_component(Page$3, "Account").$$render(
      $$result,
      { supabase, session, account },
      {
        account: ($$value) => {
          account = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div></main>`;
  } while (!$$settled);
  return $$rendered;
});
export {
  Page as default
};
