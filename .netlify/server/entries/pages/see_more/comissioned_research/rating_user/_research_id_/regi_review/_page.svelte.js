import { s as subscribe } from "../../../../../../../chunks/utils.js";
import { c as create_ssr_component, b as escape, a as add_attribute, v as validate_component } from "../../../../../../../chunks/ssr.js";
import { p as page } from "../../../../../../../chunks/stores.js";
import { P as Page$2 } from "../../../../../../../chunks/_page2.js";
import { P as Page$1 } from "../../../../../../../chunks/_page.js";
import { r as research_category_png, e as etc_category_png } from "../../../../../../../chunks/etc_category.js";
import "../../../../../../../chunks/client.js";
import "../../../../../../../chunks/SvelteToast.svelte_svelte_type_style_lang.js";
const TITLE = "리뷰 등록";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let { data } = $$props;
  let { research } = data;
  const format_date = (get_date) => {
    const date = new Date(get_date);
    const formatted_date = `${date.getMonth() + 1}월 ${date.getDate()}일 ${String(date.getHours()).padStart(2, "0")}:${String(date.getMinutes()).padStart(2, "0")}`;
    return formatted_date;
  };
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$unsubscribe_page();
  return `${$$result.head += `<!-- HEAD_svelte-1lyn9uj_START -->${$$result.title = `<title>${escape(TITLE)} | 설문모아</title>`, ""}<meta name="description"${add_attribute("content", TITLE, 0)}><!-- HEAD_svelte-1lyn9uj_END -->`, ""} ${validate_component(Page$1, "Header").$$render($$result, {}, {}, {
    center: () => {
      return `<h1 slot="center" class="font-semibold">${escape(TITLE)}</h1>`;
    },
    left: () => {
      return `<a${add_attribute("href", `/see_more/comissioned_research/rating_user/${$page.params.research_id}`, 0)} slot="left" class="flex items-center">${validate_component(Page$2, "Icon").$$render($$result, { name: "left_arrow" }, {}, {})}</a>`;
    }
  })} <main><div class="border-px mx-5 flex border-b border-gray-300 py-5"><div class="mr-4">${research.images.length > 0 ? `<img${add_attribute("src", research.images[0].uri, 0)}${add_attribute("alt", research.category, 0)} class="h-[53px] w-[53px] flex-shrink-0 rounded-lg object-cover">` : `<img${add_attribute(
    "src",
    research.category === "설문조사" ? research_category_png : etc_category_png,
    0
  )}${add_attribute("alt", research.category, 0)} class="h-[53px] w-[53px] flex-shrink-0 rounded-lg object-cover">`}</div> <div class="flex flex-col justify-between"><p class="font-semibold" data-svelte-h="svelte-4irxev">한국, 일본에 대한 이미지</p> <p><span class="font-semiborder-l-red-950 mr-2 text-sm">${escape($page.state.username)}</span><span class="text-sm text-gray-900">${escape(format_date($page.state.participant_date))}</span></p></div></div> <div class="mt-10 flex flex-col items-center"><p class="text-lg font-bold">${escape("5.0 최고")}</p> <div class="rating mt-2 flex gap-2"><input ${""} type="radio" name="rating" class="mask mask-star-2 h-7 w-7 bg-secondary"> <input ${""} type="radio" name="rating" class="mask mask-star-2 h-7 w-7 bg-secondary"> <input ${""} type="radio" name="rating" class="mask mask-star-2 h-7 w-7 bg-secondary"> <input ${""} type="radio" name="rating" class="mask mask-star-2 h-7 w-7 bg-secondary"> <input ${"checked"} type="radio" name="rating" class="mask mask-star-2 h-7 w-7 bg-secondary"></div></div> <div class="mt-6 px-4"><textarea class="textarea mt-2 h-[164px] w-full break-words bg-gray-50 px-6 py-5 text-sm focus:border-primary focus:outline-none">${escape("")}</textarea></div> <div class="fixed bottom-0 mx-auto w-full bg-white px-5 py-3.5 md:w-1/2"><div class="pb-safe"><button class="btn btn-primary w-full" data-svelte-h="svelte-s160b">리뷰 등록</button></div></div></main>`;
});
export {
  Page as default
};
