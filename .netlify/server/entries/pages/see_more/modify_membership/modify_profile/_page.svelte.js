import { s as subscribe } from "../../../../../chunks/utils.js";
import { c as create_ssr_component, b as escape, a as add_attribute, v as validate_component } from "../../../../../chunks/ssr.js";
import { u as username, a as avatar_url, y as year_of_birth, g as gender } from "../../../../../chunks/profiles_store.js";
import "../../../../../chunks/SvelteToast.svelte_svelte_type_style_lang.js";
import { P as Page$1 } from "../../../../../chunks/_page.js";
import { P as Page$2 } from "../../../../../chunks/_page2.js";
import { u as user_profile_png } from "../../../../../chunks/profile.js";
const TITLE = "프로필 정보 수정";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let new_username;
  let $username, $$unsubscribe_username;
  let $avatar_url, $$unsubscribe_avatar_url;
  let $year_of_birth, $$unsubscribe_year_of_birth;
  let $gender, $$unsubscribe_gender;
  $$unsubscribe_username = subscribe(username, (value) => $username = value);
  $$unsubscribe_avatar_url = subscribe(avatar_url, (value) => $avatar_url = value);
  $$unsubscribe_year_of_birth = subscribe(year_of_birth, (value) => $year_of_birth = value);
  $$unsubscribe_gender = subscribe(gender, (value) => $gender = value);
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  new_username = $username;
  $$unsubscribe_username();
  $$unsubscribe_avatar_url();
  $$unsubscribe_year_of_birth();
  $$unsubscribe_gender();
  return `${$$result.head += `<!-- HEAD_svelte-1lyn9uj_START -->${$$result.title = `<title>${escape(TITLE)} | 설문모아</title>`, ""}<meta name="description"${add_attribute("content", TITLE, 0)}><!-- HEAD_svelte-1lyn9uj_END -->`, ""} ${validate_component(Page$1, "Header").$$render($$result, {}, {}, {
    center: () => {
      return `<h1 slot="center" class="font-semibold">${escape(TITLE)}</h1>`;
    },
    left: () => {
      return `<button slot="left" class="flex items-center">${validate_component(Page$2, "Icon").$$render($$result, { name: "left_arrow" }, {}, {})}</button>`;
    }
  })} <main><div class="flex items-center justify-center border-b-8 py-10"><label for="input-file"><input type="file" id="input-file" accept="image/*," multiple class="hidden"> <div class="avatar relative"><div class="w-20 rounded-full">${$avatar_url === null ? `<img${add_attribute("src", user_profile_png, 0)} alt="user_profile_png">` : `<img${add_attribute("src", $avatar_url, 0)} alt="user_profile_png">`}</div> <svg class="absolute bottom-0 right-0" width="30" height="31" viewBox="0 0 30 31" fill="none" xmlns="http://www.w3.org/2000/svg"><rect y="0.808594" width="30" height="30" rx="15" fill="#237BF8"></rect><path d="M16.484 11.1419L17.765 12.4753H20.6V20.4753H9.4V12.4753H12.235L13.516 11.1419H16.484ZM17.1 9.80859H12.9L11.619 11.1419H9.4C8.63 11.1419 8 11.7419 8 12.4753V20.4753C8 21.2086 8.63 21.8086 9.4 21.8086H20.6C21.37 21.8086 22 21.2086 22 20.4753V12.4753C22 11.7419 21.37 11.1419 20.6 11.1419H18.381L17.1 9.80859ZM15 14.4753C16.155 14.4753 17.1 15.3753 17.1 16.4753C17.1 17.5753 16.155 18.4753 15 18.4753C13.845 18.4753 12.9 17.5753 12.9 16.4753C12.9 15.3753 13.845 14.4753 15 14.4753ZM15 13.1419C13.068 13.1419 11.5 14.6353 11.5 16.4753C11.5 18.3153 13.068 19.8086 15 19.8086C16.932 19.8086 18.5 18.3153 18.5 16.4753C18.5 14.6353 16.932 13.1419 15 13.1419Z" fill="white"></path></svg></div></label></div> <div class="mt-6 flex flex-col border-b-8 px-5 pb-6"><div><p class="font-semibold" data-svelte-h="svelte-1sjj7n1">생년월일</p> <p class="mt-4">${escape($year_of_birth)}</p></div> <div class="mt-4"><p class="font-semibold" data-svelte-h="svelte-d6hz4p">성별</p> <p class="mt-4">${escape($gender)}</p></div></div> <div class="mt-6 flex flex-col px-5 pb-6"><p class="font-semibold" data-svelte-h="svelte-v6yy0p">닉네임</p> <label class="relative mt-4"><input maxlength="8" type="text" class="w-full rounded-none border-b border-gray-300 pb-6 outline-none focus:border-primary" placeholder="닉네임"${add_attribute("value", new_username, 0)}> <button class="absolute right-2 top-3 -translate-y-1/2 transform text-gray-400 hover:text-gray-600" data-svelte-h="svelte-l9x4w5"><svg width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="8.5" cy="9.30859" r="8.5" fill="#C7C7C8"></circle><path d="M5.66406 12.1406L11.3307 6.47396" stroke="white" stroke-width="1.4" stroke-linecap="round"></path><path d="M11.3359 12.1406L5.66927 6.47396" stroke="white" stroke-width="1.4" stroke-linecap="round"></path></svg></button></label></div> <div class="fixed bottom-0 mx-auto w-full bg-white px-5 py-3.5 md:w-1/2"><div class="pb-safe"><button ${new_username === "" || new_username === $username ? "disabled" : ""} class="btn btn-primary w-full">수정 완료</button></div></div></main>`;
});
export {
  Page as default
};
