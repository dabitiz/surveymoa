import { c as create_ssr_component, b as escape, a as add_attribute, v as validate_component } from "../../../../chunks/ssr.js";
import "../../../../chunks/client.js";
import "../../../../chunks/SvelteToast.svelte_svelte_type_style_lang.js";
import { P as Page$1 } from "../../../../chunks/_page.js";
import { P as Page$3 } from "../../../../chunks/_page3.js";
import { P as Page$2 } from "../../../../chunks/_page2.js";
const TITLE = "회원 정보 설정";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let logout_modal = false;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `${$$result.head += `<!-- HEAD_svelte-1lyn9uj_START -->${$$result.title = `<title>${escape(TITLE)} | 설문모아</title>`, ""}<meta name="description"${add_attribute("content", TITLE, 0)}><!-- HEAD_svelte-1lyn9uj_END -->`, ""} ${validate_component(Page$1, "Header").$$render($$result, {}, {}, {
      center: () => {
        return `<h1 slot="center" class="font-semibold">${escape(TITLE)}</h1>`;
      },
      left: () => {
        return `<button slot="left" class="flex items-center">${validate_component(Page$2, "Icon").$$render($$result, { name: "left_arrow" }, {}, {})}</button>`;
      }
    })} <main><div class="mx-5 mt-5 flex flex-col gap-[30px]"><a href="modify_membership/modify_profile" class="flex items-center justify-between" data-svelte-h="svelte-8aegun"><span>프로필 정보 수정</span> <svg width="7" height="13" viewBox="0 0 7 13" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.998535 11.1914L5.99853 6.19141L0.998535 1.19141" stroke="#909090" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg></a> <button class="flex items-center justify-between" data-svelte-h="svelte-12apv0o"><span>로그아웃</span> <svg width="7" height="13" viewBox="0 0 7 13" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.998535 11.1914L5.99853 6.19141L0.998535 1.19141" stroke="#909090" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg></button> <a class="flex items-center justify-between" href="modify_membership/withdrawal_member" data-svelte-h="svelte-180xmln"><span>회원 탈퇴</span> <svg width="7" height="13" viewBox="0 0 7 13" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.998535 11.1914L5.99853 6.19141L0.998535 1.19141" stroke="#909090" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg></a></div> ${validate_component(Page$3, "Modal").$$render(
      $$result,
      {
        modal_position: "center",
        is_modal_open: logout_modal
      },
      {
        is_modal_open: ($$value) => {
          logout_modal = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `<div class="p-5"><h3 class="font-semibold" data-svelte-h="svelte-4pb072">로그아웃 하시겠어요?</h3> <div class="mt-8 flex justify-end gap-3"><button class="btn btn-sm" data-svelte-h="svelte-151o94e">닫기</button> <button class="btn btn-error btn-sm text-white" data-svelte-h="svelte-qbxs3l">로그아웃</button></div></div>`;
        }
      }
    )}</main>`;
  } while (!$$settled);
  return $$rendered;
});
export {
  Page as default
};
