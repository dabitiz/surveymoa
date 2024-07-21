import { c as create_ssr_component, b as escape, a as add_attribute, v as validate_component } from "../../../chunks/ssr.js";
import "../../../chunks/client.js";
import { P as Page$1 } from "../../../chunks/_page.js";
import { P as Page$2 } from "../../../chunks/_page2.js";
const participant_guide_png = "/_app/immutable/assets/participant_guide.GTylfcVW.png";
const TITLE = "설문모아 가이드";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<!-- HEAD_svelte-3f9t3p_START -->${$$result.title = `<title>${escape(TITLE)}</title>`, ""}<meta name="description"${add_attribute("content", `${TITLE}`, 0)}><!-- HEAD_svelte-3f9t3p_END -->`, ""} ${validate_component(Page$1, "Header").$$render($$result, { nav_class: "border-0 bg-white" }, {}, {
    center: () => {
      return `<h1 slot="center" class="font-semibold">${escape(TITLE)}</h1>`;
    },
    left: () => {
      return `<button slot="left" class="flex items-center">${validate_component(Page$2, "Icon").$$render($$result, { name: "left_arrow" }, {}, {})}</button>`;
    }
  })} <div class="flex justify-center border-b-2"><button${add_attribute(
    "class",
    `border-b-2 px-4 py-2  text-sm ${"border-primary text-primary"}`,
    0
  )}>참여자용</button> <button${add_attribute(
    "class",
    `border-b-2 px-4 py-2 text-sm ${""}`,
    0
  )}>조사자용</button></div> <div class="pb-10">${`<div class="my-10 text-center text-xl font-bold" data-svelte-h="svelte-tgn7q1">설문조사 참여하는 방법</div> <img class="mx-auto w-4/5 object-cover"${add_attribute("src", participant_guide_png, 0)}${add_attribute("alt", participant_guide_png, 0)}>`}</div>`;
});
export {
  Page as default
};
