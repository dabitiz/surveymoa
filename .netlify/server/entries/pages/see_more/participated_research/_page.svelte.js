import { c as create_ssr_component, b as escape, a as add_attribute, v as validate_component, e as each } from "../../../../chunks/ssr.js";
import { a as comma } from "../../../../chunks/common.js";
import { P as Page$1 } from "../../../../chunks/_page.js";
import { P as Page$2 } from "../../../../chunks/_page2.js";
import { r as research_category_png, e as etc_category_png } from "../../../../chunks/etc_category.js";
import "../../../../chunks/client.js";
const TITLE = "참여한 조사";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let { participant_research } = data;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `${$$result.head += `<!-- HEAD_svelte-1lyn9uj_START -->${$$result.title = `<title>${escape(TITLE)} | 설문모아</title>`, ""}<meta name="description"${add_attribute("content", TITLE, 0)}><!-- HEAD_svelte-1lyn9uj_END -->`, ""} <div class="min-h-screen bg-gray-200">${validate_component(Page$1, "Header").$$render($$result, {}, {}, {
    center: () => {
      return `<h1 slot="center" class="font-semibold">${escape(TITLE)}</h1>`;
    },
    left: () => {
      return `<button slot="left" class="flex items-center">${validate_component(Page$2, "Icon").$$render($$result, { name: "left_arrow" }, {}, {})}</button>`;
    }
  })} <main>${participant_research.length > 0 ? `${each(participant_research, (research_item) => {
    return `<div class="mx-5 mt-5"><a href="${"/research_info/" + escape(research_item.research.id, true)}" class="flex h-[153px] rounded-[14px] bg-white p-5">${research_item.research.images.length > 0 ? `<img${add_attribute("src", research_item.research.images[0].uri, 0)}${add_attribute("alt", research_item.research.category, 0)} class="mr-5 h-[102px] w-[102px] flex-shrink-0 rounded-xl object-cover">` : `<img${add_attribute(
      "src",
      research_item.research.category === "설문조사" ? research_category_png : etc_category_png,
      0
    )}${add_attribute("alt", research_item.research.category, 0)} class="mr-5 h-[102px] w-[102px] flex-shrink-0 rounded-xl object-cover">`} <div class="flex flex-1 flex-col overflow-hidden overflow-ellipsis"><div class="flex items-center"><p class="mr-1.5 inline-block rounded-[4px] bg-gray-200 px-1 py-0.5 text-[11px]">${escape(research_item.research.category)}</p> <p class="mr-1.5 inline-block rounded-[4px] bg-gray-200 px-1 py-0.5 text-[11px]">${escape(research_item.research.expected_time)}분
								</p></div> <p class="mt-2 line-clamp-2 h-9 text-sm font-semibold">${escape(research_item.research.title)}</p> <p class="mt-2.5 font-bold text-primary">${escape(comma(research_item.research.price))}원</p> <div class="mt-1.5 h-1 w-full rounded-full bg-gray-300 dark:bg-gray-300"><div class="h-1 rounded-full bg-primary"${add_attribute("style", `width: ${research_item.research.participant_num / research_item.research.recruitment_num * 100}%`, 0)}></div></div> </div></a> </div>`;
  })}` : ``}</main></div>`;
});
export {
  Page as default
};
