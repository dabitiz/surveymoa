import { s as subscribe } from "../../../chunks/utils.js";
import { c as create_ssr_component, b as escape, a as add_attribute, v as validate_component, e as each } from "../../../chunks/ssr.js";
import "../../../chunks/client.js";
import { a as comma } from "../../../chunks/common.js";
import { y as year_of_birth, g as gender } from "../../../chunks/profiles_store.js";
import { P as Page$1 } from "../../../chunks/_page.js";
import { P as Page$3 } from "../../../chunks/_page4.js";
import { P as Page$2 } from "../../../chunks/_page2.js";
import { r as research_category_png, e as etc_category_png } from "../../../chunks/etc_category.js";
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
  return `${$$result.head += `<!-- HEAD_svelte-15rnwul_START -->${$$result.title = `<title>${escape(TITLE)}</title>`, ""}<meta name="description"${add_attribute("content", TITLE, 0)}><!-- HEAD_svelte-15rnwul_END -->`, ""} <div class="min-h-screen bg-gray-200">${validate_component(Page$1, "Header").$$render($$result, { nav_class: "bg-gray-200" }, {}, {
    right: () => {
      return `<button slot="right" class="flex items-center"><svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">${validate_component(Page$2, "Icon").$$render($$result, { name: "alarm" }, {}, {})}</svg></button>`;
    },
    left: () => {
      return `<h1 slot="left" class="text-xl font-bold text-gray-800">${escape(TITLE)}</h1>`;
    }
  })} <main><div class="mt-5 flex flex-wrap gap-4 px-5"><label class="inline-flex items-center"><input type="radio" name="options" value="전체" class="peer hidden" checked> <span class="cursor-pointer rounded-full bg-gray-200 px-[14px] py-2 text-sm font-semibold text-gray-700 transition-colors duration-200 peer-checked:bg-gray-950 peer-checked:text-white" data-svelte-h="svelte-17m5dnw">전체</span></label> <label class="inline-flex items-center"><input type="radio" name="options" value="설문조사" class="peer hidden"> <span class="cursor-pointer rounded-full bg-gray-200 px-[14px] py-2 text-sm font-semibold text-gray-700 transition-colors duration-200 peer-checked:bg-gray-950 peer-checked:text-white" data-svelte-h="svelte-157ka3g">설문조사</span></label> <label class="inline-flex items-center"><input type="radio" name="options" value="인터뷰" class="peer hidden"> <span class="cursor-pointer rounded-full bg-gray-200 px-[14px] py-2 text-sm font-semibold text-gray-700 transition-colors duration-200 peer-checked:bg-gray-950 peer-checked:text-white" data-svelte-h="svelte-139pudk">인터뷰</span></label> <label class="inline-flex items-center"><input type="radio" name="options" value="기타" class="peer hidden"> <span class="cursor-pointer rounded-full bg-gray-200 px-[14px] py-2 text-sm font-semibold text-gray-700 transition-colors duration-200 peer-checked:bg-gray-950 peer-checked:text-white" data-svelte-h="svelte-vfdrjg">기타</span></label></div> ${each(available_researches, (research) => {
    return `<div class="mx-5 mt-5"><a href="${"/research_info/" + escape(research.id, true)}" class="flex h-[153px] rounded-[14px] bg-white p-5">${research.images.length > 0 ? `<img${add_attribute("src", research.images[0].uri, 0)}${add_attribute("alt", research.category, 0)} class="mr-5 h-[102px] w-[102px] flex-shrink-0 rounded-xl object-cover">` : `<img${add_attribute(
      "src",
      research.category === "설문조사" ? research_category_png : etc_category_png,
      0
    )}${add_attribute("alt", research.category, 0)} class="mr-5 h-[102px] w-[102px] flex-shrink-0 rounded-xl object-cover">`} <div class="flex flex-1 flex-col overflow-hidden overflow-ellipsis"><div class="flex items-center"><p class="mr-1.5 inline-block rounded-[4px] bg-gray-200 px-1 py-0.5 text-[11px]">${escape(research.category)}</p> <p class="rounded-sm bg-gray-200 px-2 py-1 text-xs text-gray-950">${escape(research.expected_time)}분
							</p></div> <p class="mt-2 line-clamp-2 h-9 text-sm font-semibold">${research.screening_research.length > 0 ? `${escape(research.screening_research[0].questions[0].question)}` : `${escape(research.title)}`}</p> <p class="mt-2.5 font-bold text-primary">${escape(comma(research.price))}원</p> <div class="mt-1.5 h-1 w-full rounded-full bg-gray-300 dark:bg-gray-300"><div class="h-1 rounded-full bg-primary"${add_attribute("style", `width: ${research.participant_num / research.recruitment_num * 100}%`, 0)}></div></div> </div></a> </div>`;
  })} <div id="infinite_scroll"></div> <div class="flex justify-center py-4"><div${add_attribute("class", `h-8 w-8 animate-spin rounded-full border-b-2 border-t-2 border-primary ${"hidden"}`, 0)}></div></div></main></div> ${validate_component(Page$3, "Bottom_nav").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
