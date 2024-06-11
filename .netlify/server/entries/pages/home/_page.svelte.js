import { c as create_ssr_component, b as subscribe, v as validate_component } from "../../../chunks/ssr.js";
import "../../../chunks/client.js";
import { p as page } from "../../../chunks/stores.js";
const Page$1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<nav class="mb-4 flex h-[60px] w-full items-center justify-between border-b border-gray-300" data-svelte-h="svelte-11mmdfg"><div class="flex-1 pl-5 text-left text-xl font-bold">설문모아</div> <div class="flex-1 text-center font-semibold"></div> <div class="flex-1 pr-5 text-right"></div></nav>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => value);
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$unsubscribe_page();
  return ` ${validate_component(Page$1, "Header_title_left").$$render($$result, {}, {}, {})}  `;
});
export {
  Page as default
};
