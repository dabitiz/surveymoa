import { c as create_ssr_component, b as escape, a as add_attribute, v as validate_component } from "../../../../chunks/ssr.js";
import { P as Page$1 } from "../../../../chunks/_page.js";
import { P as Page$2 } from "../../../../chunks/_page2.js";
import { a as app_store, p as play_store } from "../../../../chunks/play_store.js";
const TITLE = "회사 소개";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<!-- HEAD_svelte-1lyn9uj_START -->${$$result.title = `<title>${escape(TITLE)} | 설문모아</title>`, ""}<meta name="description"${add_attribute("content", TITLE, 0)}><!-- HEAD_svelte-1lyn9uj_END -->`, ""} ${validate_component(Page$1, "Header").$$render($$result, {}, {}, {
    center: () => {
      return `<h1 slot="center" class="font-semibold">${escape(TITLE)}</h1>`;
    },
    left: () => {
      return `<button slot="left" class="flex items-center">${validate_component(Page$2, "Icon").$$render($$result, { name: "left_arrow" }, {}, {})}</button>`;
    }
  })} <main data-svelte-h="svelte-1leyix3"><div class="mx-6 mt-6 flex flex-col items-center"><div><p class="text-[13px] text-[#767676]">대표 : 김도형</p> <p class="mt-1.5 text-[13px] text-[#767676]">부산 부산진구 중앙대로 694 쥬디스태화 9층</p> <p class="mt-1.5 text-[13px] text-[#767676]">사업자등록번호 : 531-78-00406</p> <p class="mt-1.5 text-[13px] text-[#767676]">개인정보보호책임자 : 이상민</p> <p class="mt-1.5 text-[13px] text-[#767676]">이메일: dabitiz@surveymoa.com</p> <p class="mt-8 text-lg font-semibold text-[#111111]">070-8098-4659</p> <div class="mt-[30px] flex pb-8"><img${add_attribute("src", app_store, 0)} alt="app_store" class="mr-2 h-11 w-[120px]"> <img${add_attribute("src", play_store, 0)} alt="play_store" class="h-11 w-[120px]"></div></div></div></main>`;
});
export {
  Page as default
};
