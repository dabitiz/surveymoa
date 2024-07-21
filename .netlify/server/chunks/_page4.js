import { s as subscribe } from "./utils.js";
import { c as create_ssr_component, a as add_attribute } from "./ssr.js";
import "./client.js";
import { p as page } from "./stores.js";
import { c as colors } from "./colors.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_page();
  return `<nav class="btm-nav fixed bottom-0 flex h-[calc(53px+env(safe-area-inset-bottom))] w-screen items-center justify-evenly border-t border-gray-300 bg-white"><button><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 11.8981C3 11.3269 3.2443 10.7828 3.67127 10.4033L10.6713 4.18109C11.429 3.50752 12.571 3.50752 13.3287 4.18109L20.3287 10.4033C20.7557 10.7828 21 11.3269 21 11.8981V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V11.8981Z"${add_attribute(
    "fill",
    $page.url.pathname === "/home" ? colors.gray[950] : colors.gray[400],
    0
  )}></path></svg> <p${add_attribute(
    "class",
    `text-[0.625rem] ${$page.url.pathname === "/home" ? "text-gray-950" : "text-gray-500"}`,
    0
  )}>홈</p></button> <button class="flex flex-col items-center"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 6.44489C3 3.99004 5.01472 2 7.5 2H16.5C18.9853 2 21 3.99004 21 6.44489V17.5373C21 19.9921 18.9853 21.9821 16.5 21.9821H7.5C5.01472 21.9821 3 19.9921 3 17.5373V6.44489Z"${add_attribute(
    "fill",
    $page.url.pathname === "/research" ? colors.gray[950] : colors.gray[400],
    0
  )}></path><path fill-rule="evenodd" clip-rule="evenodd" d="M6.375 8.30946C6.375 7.69575 6.87868 7.19824 7.5 7.19824H16.5C17.1213 7.19824 17.625 7.69575 17.625 8.30946C17.625 8.92317 17.1213 9.42069 16.5 9.42069H7.5C6.87868 9.42069 6.375 8.92317 6.375 8.30946Z" fill="white"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M6.375 13.5678C6.375 12.9541 6.87868 12.4565 7.5 12.4565H13.5268C14.1481 12.4565 14.6518 12.9541 14.6518 13.5678C14.6518 14.1815 14.1481 14.679 13.5268 14.679H7.5C6.87868 14.679 6.375 14.1815 6.375 13.5678Z" fill="white"></path></svg> <p${add_attribute(
    "class",
    `text-[0.625rem] ${$page.url.pathname === "/research" ? "text-gray-950" : "text-gray-500"}`,
    0
  )}>리서치</p></button> <button data-svelte-h="svelte-1f1j6fs"><svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="35" height="35" rx="17.5"${add_attribute("fill", colors.primary, 0)}></rect><path fill-rule="evenodd" clip-rule="evenodd" d="M17.4999 9C16.6715 9 15.9999 9.67157 15.9999 10.5V16H10.4999C9.67145 16 8.99988 16.6716 8.99988 17.5C8.99988 18.3284 9.67145 19 10.4999 19H15.9999V24.5C15.9999 25.3284 16.6715 26 17.4999 26C18.3283 26 18.9999 25.3284 18.9999 24.5V19H24.4999C25.3283 19 25.9999 18.3284 25.9999 17.5C25.9999 16.6716 25.3283 16 24.4999 16H18.9999V10.5C18.9999 9.67157 18.3283 9 17.4999 9Z" fill="white"></path></svg></button> <button><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M6 3C4.34315 3 3 4.34315 3 6V18C3 19.6569 4.34315 21 6 21H18C19.6569 21 21 19.6569 21 18V13.9998H15.0001C13.8955 13.9998 13.0001 13.1044 13.0001 11.9998C13.0001 10.8952 13.8955 9.99979 15.0001 9.99979H21V6C21 4.34315 19.6569 3 18 3H6Z"${add_attribute(
    "fill",
    $page.url.pathname === "/point" ? colors.gray[950] : colors.gray[400],
    0
  )}></path></svg> <p${add_attribute(
    "class",
    `text-[0.625rem] ${$page.url.pathname === "/point" ? "text-gray-950" : "text-gray-500"}`,
    0
  )}>포인트</p></button> <button><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="17.6517" y="10.0005" width="4.34783" height="4.34783" rx="2.17391"${add_attribute(
    "fill",
    $page.url.pathname === "/see_more" ? colors.gray[950] : colors.gray[400],
    0
  )}></rect><rect x="9.8269" y="10.0005" width="4.34783" height="4.34783" rx="2.17391"${add_attribute(
    "fill",
    $page.url.pathname === "/see_more" ? colors.gray[950] : colors.gray[400],
    0
  )}></rect><rect x="2" y="10.0005" width="4.34783" height="4.34783" rx="2.17391"${add_attribute(
    "fill",
    $page.url.pathname === "/see_more" ? colors.gray[950] : colors.gray[400],
    0
  )}></rect></svg> <p${add_attribute(
    "class",
    `text-[0.625rem] ${$page.url.pathname === "/see_more" ? "text-gray-950" : "text-gray-500"}`,
    0
  )}>더보기</p></button></nav>`;
});
export {
  Page as P
};
