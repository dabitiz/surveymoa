import { c as create_ssr_component, v as validate_component, b as escape, a as add_attribute } from "../../../../../chunks/ssr.js";
import "ag-grid-community";
import "../../../../../chunks/client.js";
import { P as Page$1 } from "../../../../../chunks/_page.js";
import { P as Page$2 } from "../../../../../chunks/_page2.js";
const TITLE = "조사 승인";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let grid_researches;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<div class="flex h-screen flex-col">${validate_component(Page$1, "Header").$$render($$result, { nav_class: "bg-white" }, {}, {
    center: () => {
      return `<h1 slot="center" class="font-semibold">${escape(TITLE)}</h1>`;
    },
    left: () => {
      return `<button slot="left" class="flex items-center">${validate_component(Page$2, "Icon").$$render($$result, { name: "left_arrow" }, {}, {})}</button>`;
    }
  })} <div class="ag-theme-quartz w-full flex-1"${add_attribute("this", grid_researches, 0)}></div></div>`;
});
export {
  Page as default
};
