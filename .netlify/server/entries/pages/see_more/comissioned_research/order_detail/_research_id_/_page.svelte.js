import { s as subscribe } from "../../../../../../chunks/utils.js";
import { c as create_ssr_component, v as validate_component, b as escape, a as add_attribute } from "../../../../../../chunks/ssr.js";
import "../../../../../../chunks/client.js";
import { p as page } from "../../../../../../chunks/stores.js";
import { f as format_date, a as comma, b as calculate_d_day } from "../../../../../../chunks/common.js";
import { P as Page$1 } from "../../../../../../chunks/_page.js";
import { P as Page$3 } from "../../../../../../chunks/_page5.js";
import { P as Page$2 } from "../../../../../../chunks/_page2.js";
import { P as Page$4 } from "../../../../../../chunks/_page3.js";
import { r as research_category_png, e as etc_category_png } from "../../../../../../chunks/etc_category.js";
const TITLE = "주문 상세";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let supabase;
  let session;
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let { data } = $$props;
  let { research_payment } = data;
  let is_cancel_research_modal = false;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    ({ supabase, session } = data);
    $$rendered = `${validate_component(Page$1, "Header").$$render($$result, { nav_class: "border-0 bg-white" }, {}, {
      center: () => {
        return `<h1 slot="center" class="font-semibold">${escape(TITLE)}</h1>`;
      },
      left: () => {
        return `<button slot="left" class="flex items-center">${validate_component(Page$2, "Icon").$$render($$result, { name: "left_arrow" }, {}, {})}</button>`;
      }
    })} <div class="mx-5 mt-5"><p class="text-sm font-semibold">주문번호 ${escape($page.params.research_id)}</p> <div class="mt-1.5 flex items-center justify-between"><p${add_attribute(
      "class",
      `font-bold ${research_payment.status === "결제취소" ? "text-gray-900" : ""}`,
      0
    )}>${escape(research_payment.status)}</p> <button data-svelte-h="svelte-7he19p"><u class="text-sm text-gray-900">계좌복사</u></button></div> <p class="mt-0.5 text-sm text-gray-900" data-svelte-h="svelte-1xe2dyu">국민은행 10430104503406</p></div> <div class="mt-6 h-px bg-gray-300"></div> <div class="mx-6 py-6"><div class="flex items-center justify-between"><p class="mr-1.5 inline-block rounded-[4px] bg-gray-200 px-1 py-0.5 text-[11px]">${escape(research_payment.category)}</p> <p class="text-sm text-gray-800">${escape(format_date(research_payment.start_date))} ~ ${escape(format_date(research_payment.end_date))}</p></div> <p class="mt-3.5 line-clamp-2 font-semibold">${escape(research_payment.title)}</p> <div class="mt-4 flex">${research_payment.images.length > 0 ? `<img${add_attribute("src", research_payment.images[0].uri, 0)}${add_attribute("alt", research_payment.category, 0)} class="mr-5 h-20 w-20 flex-shrink-0 rounded-xl object-cover">` : `<img${add_attribute(
      "src",
      research_payment.category === "설문조사" ? research_category_png : etc_category_png,
      0
    )}${add_attribute("alt", research_payment.category, 0)} class="mr-5 h-20 w-20 flex-shrink-0 rounded-xl object-cover">`} <div class="flex text-sm"><div class="flex flex-col justify-between pr-4" data-svelte-h="svelte-2pfnns"><p class="font-semibold text-gray-800">보상금</p> <p class="font-semibold text-gray-800">소요 시간</p> <p class="font-semibold text-gray-800">마감 날짜</p> <p class="font-semibold text-gray-800">모집 정보</p></div> <div class="flex flex-col justify-between"><p class="text-base font-bold text-primary">${escape(comma(research_payment.price))}원</p> <p>${escape(research_payment.expected_time)}분</p> <p>D - ${escape(calculate_d_day(research_payment.end_date))}</p> <p>${escape(research_payment.min_age)} ~ ${escape(research_payment.max_age)}세 성별
					${escape(research_payment.gender)} ${escape(research_payment.recruitment_num)}명</p></div></div></div></div> <div class="h-2 bg-gray-300"></div> <div class="mx-5 py-6"><p class="mb-4 font-semibold" data-svelte-h="svelte-gfy7wi">입금자 정보</p> ${validate_component(Page$3, "Account").$$render(
      $$result,
      {
        supabase,
        session,
        account: research_payment.research_payment[0],
        is_modify_enabled: false
      },
      {},
      {}
    )}</div> <div class="h-2 bg-gray-300"></div> <div class="mx-5 mt-6"><p class="font-semibold" data-svelte-h="svelte-1rzwdep">결제정보</p> <div class="mt-4 flex items-center justify-between"><p class="font-semibold" data-svelte-h="svelte-1nbaibi">총 결제 금액</p> <p class="text-lg font-bold text-primary">${escape(comma(research_payment.research_payment[0].amount))}0원</p></div> <div class="mt-4 h-px bg-gray-300"></div> <div class="mt-4 flex items-center justify-between" data-svelte-h="svelte-1t9w6qw"><p class="text-gray-900">입금은행</p> <p>국민은행</p></div> <div class="mt-4 flex items-center justify-between" data-svelte-h="svelte-1oyy67k"><p class="text-gray-900">입금계좌</p> <p class="font-semibold">10430104503406</p></div></div> ${research_payment.status === "결제대기" ? `<div class="mx-5 pb-safe mb-3.5 mt-8"><button class="btn w-full bg-gray-200 text-gray-900" data-svelte-h="svelte-12mzh4o">결제 취소하기</button></div>` : ``} ${validate_component(Page$4, "Modal").$$render(
      $$result,
      {
        modal_position: "center",
        is_modal_open: is_cancel_research_modal
      },
      {
        is_modal_open: ($$value) => {
          is_cancel_research_modal = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `<div class="p-5"><h3 class="font-semibold" data-svelte-h="svelte-1staf9x">조사를 취소하시겠어요?</h3> <div class="mt-8 flex justify-end gap-3"><button class="btn btn-sm" data-svelte-h="svelte-bkcbrz">닫기</button> <button class="btn btn-error btn-sm text-white" data-svelte-h="svelte-17bs2h6">취소하기</button></div></div>`;
        }
      }
    )}`;
  } while (!$$settled);
  $$unsubscribe_page();
  return $$rendered;
});
export {
  Page as default
};
