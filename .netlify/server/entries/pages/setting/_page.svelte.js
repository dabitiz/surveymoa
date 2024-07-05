import { c as create_ssr_component } from "../../../chunks/ssr.js";
import "../../../chunks/client.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<nav class="mb-4 flex h-[60px] w-full items-center justify-between border-b border-gray-300" data-svelte-h="svelte-b9ia24"><div class="flex-1 pl-5 text-left"><svg width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 1L1 8L8 15" stroke="#101118" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg></div> <div class="flex-1 text-center font-semibold">회원가입</div> <div class="flex-1 pr-5 text-right"></div></nav> <div class="px-5" data-svelte-h="svelte-tzjchu"><div class="form-control w-full pt-4"><label class="label pl-1" for="phone_num"><span class="label-text text-base">휴대폰 번호</span></label> <input type="number" placeholder="닉네임을 입력해주세요" class="input input-bordered h-[52px] w-full border-gray-300 focus:border-primary focus:outline-none" for="phone_num"></div> <div class="mt-4"><button class="btn w-full border-0 bg-gray-50 p-0 text-base text-gray-800">전송하기</button></div> <div class="form-control w-full pt-4"><label class="label pl-1" for="phone_num"><span class="label-text text-base">인증번호</span></label> <input type="number" class="input input-bordered h-[52px] w-full border-gray-300 focus:border-primary focus:outline-none" for="phone_num"></div></div> `;
});
export {
  Page as default
};
