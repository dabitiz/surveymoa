import { c as create_ssr_component, v as validate_component, b as escape } from "../../../chunks/ssr.js";
import "../../../chunks/client.js";
import { P as Page$1 } from "../../../chunks/_page.js";
import { P as Page$2 } from "../../../chunks/_page2.js";
const TITLE = "관리자 계정";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `${validate_component(Page$1, "Header").$$render($$result, { nav_class: "bg-white" }, {}, {
    center: () => {
      return `<h1 slot="center" class="font-semibold">${escape(TITLE)}</h1>`;
    },
    left: () => {
      return `<button slot="left" class="flex items-center">${validate_component(Page$2, "Icon").$$render($$result, { name: "left_arrow" }, {}, {})}</button>`;
    }
  })} <main data-svelte-h="svelte-zr5116"><div class="mx-5 mt-5"><p class="font-semibold">설문 조사</p> <div class="flex flex-col"><a href="admin/research/approval" class="ml-4 mt-7 flex items-center">조사 승인</a> <a href="admin/research/set_screening" class="ml-4 mt-7 flex items-center">조사 스크리닝 설정</a></div></div> <div class="mt-5 h-2 bg-gray-300"></div> <div class="mx-5 mt-5"><p class="font-semibold">포인트</p> <div class="flex flex-col"><a href="admin/point/withdrawal_approval" class="ml-4 mt-7 flex items-center">출금 승인</a></div></div> <div class="mt-5 h-2 bg-gray-300"></div></main>`;
});
export {
  Page as default
};
