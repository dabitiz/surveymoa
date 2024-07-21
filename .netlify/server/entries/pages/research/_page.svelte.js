import { s as subscribe } from "../../../chunks/utils.js";
import { c as create_ssr_component, a as add_attribute, b as escape, v as validate_component, e as each } from "../../../chunks/ssr.js";
import "../../../chunks/client.js";
import { c as comma } from "../../../chunks/common.js";
import { y as year_of_birth, g as gender } from "../../../chunks/profiles_store.js";
import { P as Page$2 } from "../../../chunks/_page.js";
import { P as Page$4 } from "../../../chunks/_page4.js";
import { P as Page$3 } from "../../../chunks/_page2.js";
import { r as research_category_png, e as etc_category_png } from "../../../chunks/etc_category.js";
const research_png = "data:image/png;base64,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";
const Page$1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { name } = $$props;
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  return `<div class="flex items-center rounded-sm bg-gray-200 px-1.5 py-1">${name === "설문조사" ? `<img${add_attribute("src", research_png, 0)} alt="research_png" class="mr-1 h-4 w-4">` : ``} <p class="text-xs text-gray-950">${escape(name)}</p></div>`;
});
const TITLE = "리서치";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_year_of_birth;
  let $$unsubscribe_gender;
  $$unsubscribe_year_of_birth = subscribe(year_of_birth, (value) => value);
  $$unsubscribe_gender = subscribe(gender, (value) => value);
  let { data } = $$props;
  let available_researches = [];
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$unsubscribe_year_of_birth();
  $$unsubscribe_gender();
  return `${$$result.head += `<!-- HEAD_svelte-15rnwul_START -->${$$result.title = `<title>${escape(TITLE)}</title>`, ""}<meta name="description"${add_attribute("content", TITLE, 0)}><!-- HEAD_svelte-15rnwul_END -->`, ""} <div class="min-h-screen bg-gray-200">${validate_component(Page$2, "Header").$$render($$result, { nav_class: "bg-gray-200" }, {}, {
    right: () => {
      return `<button slot="right" class="flex items-center"><svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">${validate_component(Page$3, "Icon").$$render($$result, { name: "alarm" }, {}, {})}</svg></button>`;
    },
    left: () => {
      return `<h1 slot="left" class="text-xl font-bold text-gray-800">${escape(TITLE)}</h1>`;
    }
  })} <main><div class="mt-5 flex flex-wrap gap-4 px-5"><label class="inline-flex items-center"><input type="radio" name="options" value="전체" class="peer hidden" checked> <span class="cursor-pointer rounded-full bg-gray-200 px-[14px] py-2 text-sm font-semibold text-gray-700 transition-colors duration-200 peer-checked:bg-gray-950 peer-checked:text-white" data-svelte-h="svelte-17m5dnw">전체</span></label> <label class="inline-flex items-center"><input type="radio" name="options" value="설문조사" class="peer hidden"> <span class="cursor-pointer rounded-full bg-gray-200 px-[14px] py-2 text-sm font-semibold text-gray-700 transition-colors duration-200 peer-checked:bg-gray-950 peer-checked:text-white" data-svelte-h="svelte-157ka3g">설문조사</span></label> <label class="inline-flex items-center"><input type="radio" name="options" value="인터뷰" class="peer hidden"> <span class="cursor-pointer rounded-full bg-gray-200 px-[14px] py-2 text-sm font-semibold text-gray-700 transition-colors duration-200 peer-checked:bg-gray-950 peer-checked:text-white" data-svelte-h="svelte-139pudk">인터뷰</span></label> <label class="inline-flex items-center"><input type="radio" name="options" value="기타" class="peer hidden"> <span class="cursor-pointer rounded-full bg-gray-200 px-[14px] py-2 text-sm font-semibold text-gray-700 transition-colors duration-200 peer-checked:bg-gray-950 peer-checked:text-white" data-svelte-h="svelte-vfdrjg">기타</span></label></div> ${each(available_researches, (research) => {
    return `<div class="mx-5 mt-5"><a href="${"/research_info/" + escape(research.id, true)}" class="flex h-[153px] rounded-[14px] bg-white p-5">${research.images.length > 0 ? `<img${add_attribute("src", research.images[0].uri, 0)}${add_attribute("alt", research.category, 0)} class="mr-5 h-[102px] w-[102px] flex-shrink-0 rounded-xl object-cover">` : `<img${add_attribute(
      "src",
      research.category === "설문조사" ? research_category_png : etc_category_png,
      0
    )}${add_attribute("alt", research.category, 0)} class="mr-5 h-[102px] w-[102px] flex-shrink-0 rounded-xl object-cover">`} <div class="flex flex-1 flex-col overflow-hidden overflow-ellipsis"><div class="flex items-center"><div class="mr-1.5">${validate_component(Page$1, "Chip").$$render($$result, { name: research.category }, {}, {})}</div> <p class="rounded-sm bg-gray-200 px-2 py-1 text-xs text-gray-950">${escape(research.expected_time)}분
							</p></div> <p class="mt-2 line-clamp-2 h-9 text-sm font-semibold">${research.screening_research.length > 0 ? `${escape(research.screening_research[0].questions[0].question)}` : `${escape(research.title)}`}</p> <p class="mt-2.5 font-bold text-primary">${escape(comma(research.price))}원</p> <div class="mt-1.5 h-1 w-full rounded-full bg-gray-300 dark:bg-gray-300"><div class="h-1 rounded-full bg-primary"${add_attribute("style", `width: ${research.participant_num / research.recruitment_num * 100}%`, 0)}></div></div> </div></a> </div>`;
  })} <div id="infinite_scroll"></div> <div class="flex justify-center py-4"><div${add_attribute("class", `h-8 w-8 animate-spin rounded-full border-b-2 border-t-2 border-primary ${"hidden"}`, 0)}></div></div></main></div> ${validate_component(Page$4, "Bottom_nav").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
