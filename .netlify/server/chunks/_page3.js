import { c as create_ssr_component, d as createEventDispatcher } from "./ssr.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { is_modal_open } = $$props;
  let { modal_position } = $$props;
  createEventDispatcher();
  if ($$props.is_modal_open === void 0 && $$bindings.is_modal_open && is_modal_open !== void 0)
    $$bindings.is_modal_open(is_modal_open);
  if ($$props.modal_position === void 0 && $$bindings.modal_position && modal_position !== void 0)
    $$bindings.modal_position(modal_position);
  return `${modal_position === "center" ? `<div class="${[
    "scrollbar-hide fixed inset-0 z-50 flex items-center justify-center overflow-auto bg-black bg-opacity-50",
    !is_modal_open ? "hidden" : ""
  ].join(" ").trim()}"><div class="scrollbar-hide relative z-10 mx-4 max-h-[75vh] w-full max-w-md overflow-y-auto rounded-lg bg-white">${slots.default ? slots.default({}) : ``}</div> <button class="absolute inset-0 h-full w-full cursor-default"></button></div>` : `${modal_position === "bottom" ? `<div class="${[
    "fixed inset-0 z-50 flex justify-center overflow-auto bg-black bg-opacity-50",
    !is_modal_open ? "hidden" : ""
  ].join(" ").trim()}"><div class="scrollbar-hide relative z-10 mt-auto max-h-[75vh] w-full max-w-md overflow-y-auto rounded-2xl rounded-b-none bg-white">${slots.default ? slots.default({}) : ``}</div> <button class="absolute inset-0 h-full w-full cursor-default"></button></div>` : ``}`}`;
});
export {
  Page as P
};
