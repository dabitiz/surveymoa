import { s as subscribe } from "../../chunks/utils.js";
import { c as create_ssr_component, a as add_attribute, b as escape } from "../../chunks/ssr.js";
import { p as page } from "../../chunks/stores.js";
const Error = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_page();
  return `<main class="pt-safe flex h-screen flex-col items-center justify-center"><span${add_attribute("class", `flex h-20 w-20 items-center justify-center rounded-full bg-error drop-shadow-lg`, 0)} data-svelte-h="svelte-soqjse"><svg width="10" height="42" viewBox="0 0 10 42" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M5.00039 0.5C7.26476 0.5 9.10039 2.33563 9.10039 4.6V25.1C9.10039 27.3644 7.26476 29.2 5.00039 29.2C2.73602 29.2 0.900391 27.3644 0.900391 25.1V4.6C0.900391 2.33563 2.73602 0.5 5.00039 0.5Z" fill="white"></path><path d="M5.00039 41.4998C7.26476 41.4998 9.10039 39.6642 9.10039 37.3998C9.10039 35.1354 7.26476 33.2998 5.00039 33.2998C2.73602 33.2998 0.900391 35.1354 0.900391 37.3998C0.900391 39.6642 2.73602 41.4998 5.00039 41.4998Z" fill="white"></path></svg></span> <h1 class="mt-7 text-3xl font-bold text-primary">코드오류 ${escape($page.status)}</h1> <h2 class="mt-4 font-semibold">${escape($page.error.message)}</h2> <div class="mt-2 text-center text-sm text-gray-900" data-svelte-h="svelte-e9ik81"><p>동일한 문제가 지속적으로 발생하는 경우</p> <p>고객센터로 문의해주시기 바랍니다.</p></div> </main>`;
});
export {
  Error as default
};
