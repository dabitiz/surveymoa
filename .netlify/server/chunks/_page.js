import { c as create_ssr_component, b as escape } from "./ssr.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { nav_class = "border-b border-gray-300 bg-white" } = $$props;
  if ($$props.nav_class === void 0 && $$bindings.nav_class && nav_class !== void 0)
    $$bindings.nav_class(nav_class);
  return `<header class="${"sticky top-0 z-50 " + escape(nav_class, true)}"><nav class="pt-safe"><div class="z-10 flex h-[52px] w-full items-center justify-between"><div class="flex-1 pl-4">${slots.left ? slots.left({}) : ``}</div> <div class="flex flex-1 justify-center whitespace-nowrap">${slots.center ? slots.center({}) : ``}</div> <div class="flex flex-1 justify-end pr-4">${slots.right ? slots.right({}) : ``}</div></div></nav></header>`;
});
export {
  Page as P
};
