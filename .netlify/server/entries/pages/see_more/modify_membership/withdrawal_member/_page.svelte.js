import { s as subscribe } from "../../../../../chunks/utils.js";
import { c as create_ssr_component, b as escape, a as add_attribute, v as validate_component } from "../../../../../chunks/ssr.js";
import { u as username } from "../../../../../chunks/profiles_store.js";
import { P as Page$2 } from "../../../../../chunks/_page2.js";
import { P as Page$1 } from "../../../../../chunks/_page.js";
const TITLE = "회원 탈퇴";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $username, $$unsubscribe_username;
  $$unsubscribe_username = subscribe(username, (value) => $username = value);
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$unsubscribe_username();
  return `${$$result.head += `<!-- HEAD_svelte-1lyn9uj_START -->${$$result.title = `<title>${escape(TITLE)} | 설문모아</title>`, ""}<meta name="description"${add_attribute("content", TITLE, 0)}><!-- HEAD_svelte-1lyn9uj_END -->`, ""} ${validate_component(Page$1, "Header").$$render($$result, {}, {}, {
    center: () => {
      return `<h1 slot="center" class="font-semibold">${escape(TITLE)}</h1>`;
    },
    left: () => {
      return `<button slot="left" class="flex items-center">${validate_component(Page$2, "Icon").$$render($$result, { name: "left_arrow" }, {}, {})}</button>`;
    }
  })} <main><div class="mx-5 mt-5"><p class="text-xl font-semibold">${escape($username)}님, 잠시만요!</p> <p class="text-xl font-semibold" data-svelte-h="svelte-1526h2k">탈퇴하기 전에 한번 더 확인해주세요!</p></div> <div class="mx-5 mt-[50px]"><p class="text-xl font-semibold" data-svelte-h="svelte-1vxpb3k">계정을 삭제하면</p> <div class="mt-8 bg-gray-50 p-5"><p class="text-sm">- ${escape($username)}님의 포인트가 모두 사라지고 복구되지 않아요</p> <br> <p class="mt text-sm" data-svelte-h="svelte-1noz08d">- 탈퇴 후 90일 간 재가입을 할 수 없어요</p></div></div> <div class="fixed bottom-0 mx-auto w-full bg-white px-5 py-3.5 md:w-1/2"><div class="pb-safe"><button class="btn btn-primary w-full" data-svelte-h="svelte-18mqnt0">회원 탈퇴</button></div></div></main>`;
});
export {
  Page as default
};
