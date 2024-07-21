import { s as subscribe } from "../../../../chunks/utils.js";
import { c as create_ssr_component, b as escape, a as add_attribute, v as validate_component } from "../../../../chunks/ssr.js";
import "../../../../chunks/client.js";
import { p as page } from "../../../../chunks/stores.js";
import { c as comma } from "../../../../chunks/common.js";
import { P as Page$1 } from "../../../../chunks/_page.js";
const TITLE = "결제요청 완료";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_page();
  return `${$$result.head += `<!-- HEAD_svelte-1lyn9uj_START -->${$$result.title = `<title>${escape(TITLE)} | 설문모아</title>`, ""}<meta name="description"${add_attribute("content", TITLE, 0)}><!-- HEAD_svelte-1lyn9uj_END -->`, ""} ${validate_component(Page$1, "Header").$$render($$result, {}, {}, {
    right: () => {
      return `<button slot="right" class="flex items-center" data-svelte-h="svelte-1cbawuv"><svg width="24" height="24" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg"><rect transform="translate(0 0.808594)" fill="white"></rect><path fill-rule="evenodd" clip-rule="evenodd" d="M4.29289 6.5157C3.90237 6.12518 3.90237 5.49201 4.29289 5.10149C4.68342 4.71096 5.31658 4.71096 5.70711 5.10149L12 11.3944L18.2929 5.10149C18.6834 4.71096 19.3166 4.71096 19.7071 5.10149C20.0976 5.49201 20.0976 6.12518 19.7071 6.5157L13.4142 12.8086L19.7071 19.1015C20.0976 19.492 20.0976 20.1252 19.7071 20.5157C19.3166 20.9062 18.6834 20.9062 18.2929 20.5157L12 14.2228L5.70711 20.5157C5.31658 20.9062 4.68342 20.9062 4.29289 20.5157C3.90237 20.1252 3.90237 19.492 4.29289 19.1015L10.5858 12.8086L4.29289 6.5157Z" fill="#101118"></path></svg></button>`;
    },
    center: () => {
      return `<h1 slot="center" class="font-semibold">${escape(TITLE)}</h1>`;
    }
  })} <main class="flex flex-col items-center justify-center"><div class="mt-32 flex flex-col items-center" data-svelte-h="svelte-1yvm592"><p class="text-xl font-semibold">국민은행</p> <p class="mt-1">예금주 : 김도형(다비티즈)</p></div> <p class="mt-8 text-xl font-bold">${escape(comma($page.state.amount))}원</p> <div class="mt-16 flex flex-col items-center" data-svelte-h="svelte-1xmy53i"><p class="text-xs">입금계좌</p></div> <div class="mt-2 w-full"><div class="mx-4 flex items-center justify-between rounded-md bg-gray-50 py-3"><div class="flex-1"></div> <p class="absolute left-1/2 -translate-x-1/2 transform whitespace-nowrap text-lg text-primary" data-svelte-h="svelte-oqcmza">104301-04-503406</p> <button class="flex flex-1 justify-end pr-5" data-svelte-h="svelte-1bpys1d"><svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="8" y="6" width="14.3343" height="18.1115" rx="2" fill="#C9DFFF"></rect><rect x="12.0957" y="10.0254" width="14.3343" height="18.1115" rx="2" fill="#237BF8" fill-opacity="0.81"></rect></svg></button></div></div> <p class="mt-8 text-xs" data-svelte-h="svelte-10o19k6">*24시간내 미입금 시 자동취소</p></main>`;
});
export {
  Page as default
};
