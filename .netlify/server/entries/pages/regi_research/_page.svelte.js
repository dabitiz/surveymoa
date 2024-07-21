import { c as create_ssr_component, a as add_attribute, b as escape, v as validate_component } from "../../../chunks/ssr.js";
import "../../../chunks/client.js";
import "../../../chunks/SvelteToast.svelte_svelte_type_style_lang.js";
import { P as Page$4 } from "../../../chunks/_page3.js";
import { c as colors } from "../../../chunks/colors.js";
import { P as Page$2 } from "../../../chunks/_page.js";
import { P as Page$3 } from "../../../chunks/_page2.js";
const Page$1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { category } = $$props;
  if ($$props.category === void 0 && $$bindings.category && category !== void 0)
    $$bindings.category(category);
  return `<div class="mx-5 flex flex-col"><div class="mt-11 text-xl font-semibold" data-svelte-h="svelte-1nce4ot"><p>어떤 방법으로</p> <p>조사를 진행할까요?</p></div> <button${add_attribute("class", `mt-10 flex h-20 items-center rounded-lg bg-${category === "설문조사" ? "primary" : "gray-50"}  pl-6`, 0)}><svg class="mr-5" width="22" height="27" viewBox="0 0 22 27" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M11.3492 0V7.45039L11.3492 7.5048C11.3492 7.92887 11.3491 8.34099 11.3948 8.68091C11.4463 9.06411 11.5718 9.50139 11.935 9.8646C12.2982 10.2278 12.7355 10.3533 13.1187 10.4049C13.4586 10.4506 13.8707 10.4505 14.2948 10.4504H14.2948H14.2948H14.2948L14.3492 10.4504H21.7992V18.9C21.7992 22.7184 21.7992 24.6276 20.613 25.8138C19.4268 27 17.5176 27 13.6992 27H8.29922C4.48084 27 2.57165 27 1.38544 25.8138C0.199219 24.6276 0.199219 22.7184 0.199219 18.9V8.1C0.199219 4.28162 0.199219 2.37244 1.38544 1.18622C2.57165 0 4.48084 0 8.29922 0H11.3492ZM13.3492 0.00113874V7.45039C13.3492 7.95006 13.3514 8.22422 13.3769 8.41441L13.3779 8.4217L13.3852 8.4227C13.5754 8.44827 13.8496 8.45039 14.3492 8.45039H21.7981C21.7928 7.68974 21.7629 7.24359 21.5937 6.83513C21.3882 6.33895 20.998 5.94877 20.2176 5.1684L20.2176 5.16838L16.6308 1.58162C15.8505 0.801241 15.4603 0.411051 14.9641 0.205525C14.5557 0.0363679 14.1096 0.00643535 13.3492 0.00113874ZM5.94922 14.8496C5.94922 14.2973 6.39693 13.8496 6.94922 13.8496L15.0492 13.8496C15.6015 13.8496 16.0492 14.2973 16.0492 14.8496C16.0492 15.4019 15.6015 15.8496 15.0492 15.8496L6.94922 15.8496C6.39693 15.8496 5.94922 15.4019 5.94922 14.8496ZM6.94922 19.25C6.39693 19.25 5.94922 19.6977 5.94922 20.25C5.94922 20.8023 6.39693 21.25 6.94922 21.25H12.3492C12.9015 21.25 13.3492 20.8023 13.3492 20.25C13.3492 19.6977 12.9015 19.25 12.3492 19.25H6.94922Z"${add_attribute("fill", category === "설문조사" ? "white" : colors.gray[900], 0)}></path></svg> <div${add_attribute("class", `flex flex-grow flex-col items-start gap-2 text-${category === "설문조사" ? "white" : "gray-900"}`, 0)}><p class="font-semibold" data-svelte-h="svelte-1tov6jm">설문조사</p> <p class="text-xs" data-svelte-h="svelte-qqm80z">이미 만들어둔 설문 폼으로 설문조사를 진행해보세요</p></div></button> <button class="mt-4 flex h-20 items-center rounded-lg bg-gray-50 pl-6" data-svelte-h="svelte-l2o157"><svg class="mr-5" width="18" height="28" viewBox="0 0 18 28" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.52637 27.0005V22.7373" stroke="#797E8A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M0.0580219 7.52632H4.26316C4.81544 7.52632 5.26316 7.97403 5.26316 8.52632C5.26316 9.0786 4.81544 9.52632 4.26316 9.52632H0V13.2105H4.26316C4.81544 13.2105 5.26316 13.6582 5.26316 14.2105C5.26316 14.7628 4.81544 15.2105 4.26316 15.2105H0.0580211C0.553089 19.4483 4.15566 22.7368 8.52632 22.7368C12.897 22.7368 16.4995 19.4483 16.9946 15.2105H14.2105C13.6582 15.2105 13.2105 14.7628 13.2105 14.2105C13.2105 13.6582 13.6582 13.2105 14.2105 13.2105H17.0526V9.52632H14.2105C13.6582 9.52632 13.2105 9.0786 13.2105 8.52632C13.2105 7.97403 13.6582 7.52632 14.2105 7.52632H16.9946C16.4995 3.28858 12.897 0 8.52632 0C4.15566 0 0.553093 3.28858 0.0580219 7.52632Z" fill="#797E8A"></path></svg> <div class="flex flex-grow flex-col items-start gap-2 text-gray-900"><p class="font-semibold">인터뷰</p> <p class="text-xs">인터뷰를 통해 세분화된 데이터를 수집해보세요</p></div></button></div>`;
});
const TITLE = "조사 등록";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let { supabase, session, account } = data;
  let page_count = 1;
  let is_back_modal = false;
  let research_info = {
    category: "",
    images: [],
    form_link: "",
    title: "",
    explanation: "",
    start_date: /* @__PURE__ */ new Date(),
    end_date: /* @__PURE__ */ new Date(),
    recruitment_num: 50,
    min_age: 1,
    max_age: 70,
    gender: "모두",
    expected_time: 5,
    remarks: "",
    contact: "",
    price: 0
  };
  let research_payment_info = { amount: 0, payment_method: "" };
  const is_next_btn_disabled = (page_count2, research_info2, research_payment_info2, account2) => {
    switch (page_count2) {
      case 1:
        return research_info2.category === "";
      case 2:
        return research_info2.form_link === "" || research_info2.title === "" || research_info2.explanation === "";
      case 3:
        return research_info2.start_date === null || research_info2.end_date === null || research_info2.gender === "";
      case 4:
        return research_info2.remarks === "";
      case 5:
        return research_info2.contact === "";
      case 6:
        return Object.keys(account2).length === 0 || research_payment_info2.amount === 0 || research_payment_info2.payment_method === "";
      default:
        return true;
    }
  };
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    ({ supabase, session } = data);
    research_info.price = research_info.expected_time * 100;
    research_payment_info.amount = research_info.expected_time * 100 * research_info.recruitment_num * 1.2;
    $$rendered = `${$$result.head += `<!-- HEAD_svelte-1lyn9uj_START -->${$$result.title = `<title>${escape(TITLE)} | 설문모아</title>`, ""}<meta name="description"${add_attribute("content", TITLE, 0)}><!-- HEAD_svelte-1lyn9uj_END -->`, ""} ${validate_component(Page$2, "Header").$$render($$result, { nav_class: "bg-white" }, {}, {
      center: () => {
        return `<h1 slot="center" class="font-semibold">${escape(TITLE)}</h1>`;
      },
      left: () => {
        return `<button slot="left" class="flex items-center">${validate_component(Page$3, "Icon").$$render($$result, { name: "left_arrow" }, {}, {})}</button>`;
      }
    })} <main>${`<div class="h-1 w-full rounded-full bg-gray-200 dark:bg-gray-300"><div class="h-1 rounded-full bg-primary"${add_attribute("style", `width: ${page_count * (100 / 5)}%`, 0)}></div></div>`} ${`${validate_component(Page$1, "Set_category").$$render(
      $$result,
      { category: research_info.category },
      {
        category: ($$value) => {
          research_info.category = $$value;
          $$settled = false;
        }
      },
      {}
    )}`} <div class="fixed bottom-0 mx-auto w-full bg-white px-5 py-3.5 md:w-1/2"><div class="pb-safe"><button ${is_next_btn_disabled(page_count, research_info, research_payment_info, account) ? "disabled" : ""} class="btn btn-primary w-full">${escape("다음")}</button></div></div></main> ${validate_component(Page$4, "Modal").$$render(
      $$result,
      {
        modal_position: "center",
        is_modal_open: is_back_modal
      },
      {
        is_modal_open: ($$value) => {
          is_back_modal = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `<div class="p-5"><h3 class="font-semibold" data-svelte-h="svelte-1dlhz9r">조사 등록을 다음에 하시겠어요?</h3> <div class="mt-8 flex justify-end gap-3"><button class="btn btn-sm" data-svelte-h="svelte-1skobu8">닫기</button> <button class="btn btn-error btn-sm text-white" data-svelte-h="svelte-1f7qspn">다음에 할게요</button></div></div>`;
        }
      }
    )}`;
  } while (!$$settled);
  return $$rendered;
});
export {
  Page as default
};
