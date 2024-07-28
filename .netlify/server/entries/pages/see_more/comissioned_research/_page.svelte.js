import { c as create_ssr_component, b as escape, a as add_attribute, v as validate_component, e as each } from "../../../../chunks/ssr.js";
import "../../../../chunks/client.js";
import { f as format_date, a as comma } from "../../../../chunks/common.js";
import { P as Page$1 } from "../../../../chunks/_page.js";
import { P as Page$2 } from "../../../../chunks/_page2.js";
import { r as research_category_png, e as etc_category_png } from "../../../../chunks/etc_category.js";
const TITLE = "의뢰한 조사";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let { research__research_payment } = data;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `${$$result.head += `<!-- HEAD_svelte-1lyn9uj_START -->${$$result.title = `<title>${escape(TITLE)} | 설문모아</title>`, ""}<meta name="description"${add_attribute("content", TITLE, 0)}><!-- HEAD_svelte-1lyn9uj_END -->`, ""} <div class="min-h-screen bg-gray-200">${validate_component(Page$1, "Header").$$render($$result, {}, {}, {
    center: () => {
      return `<h1 slot="center" class="font-semibold">${escape(TITLE)}</h1>`;
    },
    left: () => {
      return `<button slot="left" class="flex items-center">${validate_component(Page$2, "Icon").$$render($$result, { name: "left_arrow" }, {}, {})}</button>`;
    }
  })} <main>${each(research__research_payment, (research) => {
    return `<div class="mt-5 w-full"><div class="mx-5 flex h-[228px] flex-col rounded-xl bg-white px-5 py-6"><p${add_attribute("class", `text-sm font-semibold ${research.status === "결제취소" ? "text-gray-900" : ""}`, 0)}>${escape(research.status)}</p> <p class="text-xs text-gray-800">${escape(format_date(research.start_date))} ~ ${escape(format_date(research.end_date))}</p> <a${add_attribute("href", `/research_info/${research.id}`, 0)} class="mt-1.5 flex">${research.images.length > 0 ? `<img${add_attribute("src", research.images[0].uri, 0)}${add_attribute("alt", research.category, 0)} class="mr-5 h-[88px] w-[88px] flex-shrink-0 rounded-xl object-cover">` : `<img${add_attribute(
      "src",
      research.category === "설문조사" ? research_category_png : etc_category_png,
      0
    )}${add_attribute("alt", research.category, 0)} class="mr-5 h-[88px] w-[88px] flex-shrink-0 rounded-xl object-cover">`} <div class="mt-0.5 flex flex-1 flex-col"><p class="line-clamp-2 h-10 text-sm font-semibold">${escape(research.title)}</p> <p class="mt-1 font-semibold">${escape(comma(research.price))}원</p> <div class="mt-0.5 flex items-center"><svg class="mr-1.5" width="10" height="11" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 0.191406C3.625 0.191406 2.5 1.59141 2.5 3.31641C2.5 5.04141 3.625 6.44141 5 6.44141C6.375 6.44141 7.5 5.04141 7.5 3.31641C7.5 1.59141 6.375 0.191406 5 0.191406ZM2.3875 6.44141C1.0625 6.50391 0 7.59141 0 8.94141V10.1914H10V8.94141C10 7.59141 8.95 6.50391 7.6125 6.44141C6.9375 7.20391 6.0125 7.69141 5 7.69141C3.9875 7.69141 3.0625 7.20391 2.3875 6.44141Z" fill="#C7C7C8"></path></svg> <p class="text-xs text-gray-800">${escape(research.participant_num)}/${escape(research.recruitment_num)} </p></div> </div></a> <div class="mt-3.5 flex border"><a${add_attribute("href", `comissioned_research/order_detail/${research.id}`, 0)} class="w-[30%] border-r py-2.5 text-center text-sm">주문 상세</a> <a${add_attribute("href", `comissioned_research/rating_user/${research.id}`, 0)} class="w-[70%] py-2.5 text-center text-sm text-primary">별점 주기</a> </div></div> </div>`;
  })}</main></div>`;
});
export {
  Page as default
};
