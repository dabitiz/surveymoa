import { s as subscribe } from "../../../../chunks/utils.js";
import { c as create_ssr_component, b as escape, a as add_attribute, v as validate_component, e as each } from "../../../../chunks/ssr.js";
import "@capgo/inappbrowser";
import { p as point, g as gender, y as year_of_birth } from "../../../../chunks/profiles_store.js";
import { a as comma, b as calculate_d_day } from "../../../../chunks/common.js";
import { p as platform, o as operating_system } from "../../../../chunks/device_store.js";
import { P as Page$1 } from "../../../../chunks/_page.js";
import { P as Page$3 } from "../../../../chunks/_page3.js";
import { P as Page$2 } from "../../../../chunks/_page2.js";
import { r as research_category_png, e as etc_category_png } from "../../../../chunks/etc_category.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_point;
  let $$unsubscribe_gender;
  let $$unsubscribe_year_of_birth;
  let $$unsubscribe_platform;
  let $$unsubscribe_operating_system;
  $$unsubscribe_point = subscribe(point, (value) => value);
  $$unsubscribe_gender = subscribe(gender, (value) => value);
  $$unsubscribe_year_of_birth = subscribe(year_of_birth, (value) => value);
  $$unsubscribe_platform = subscribe(platform, (value) => value);
  $$unsubscribe_operating_system = subscribe(operating_system, (value) => value);
  let { data } = $$props;
  let { research } = data;
  const TITLE = research.category;
  let research_status = "";
  let screening_info = {
    is_modal: false,
    selected_questions: [],
    page_count: 0
  };
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
    })} <main>${research.images.length > 0 ? `<img${add_attribute("src", research.images[0].uri, 0)}${add_attribute("alt", research.category, 0)} class="h-[175px] w-full flex-shrink-0 object-cover">` : `<img${add_attribute(
      "src",
      research.category === "설문조사" ? research_category_png : etc_category_png,
      0
    )}${add_attribute("alt", research.category, 0)} class="h-[175px] w-full flex-shrink-0 object-cover">`} <div class="mx-4 mt-6"><h1 class="text-lg font-semibold">${escape(screening_info.selected_questions.length > 0 ? "스크리닝 질문에 응답해 주세요" : research.title)}</h1> <p class="mt-4 text-xl font-bold text-primary">${escape(comma(research.price))}원</p> <div class="mt-4 flex flex-col gap-2.5"><p class="text-sm"><span class="pr-4 text-gray-800" data-svelte-h="svelte-15syd7k">소요 시간</span><span>${escape(research.expected_time)}분</span></p> <p class="text-sm"><span class="pr-4 text-gray-800" data-svelte-h="svelte-cfcbq4">마감 날짜</span><span>D - ${escape(calculate_d_day(research.end_date))}</span></p> <p class="text-sm"><span class="pr-4 text-gray-800" data-svelte-h="svelte-7as334">모집 정보</span><span>${escape(research.min_age)} ~ ${escape(research.max_age)}세 성별 ${escape(research.gender)}</span></p> <p class="flex justify-center text-sm"><span class="flex-shrink-0 pr-8 text-gray-800" data-svelte-h="svelte-1k05gbr">진행률</span> <span class="mt-1.5 h-2 w-full rounded-full bg-gray-300 dark:bg-gray-300"><div class="h-2 rounded-full bg-primary"${add_attribute("style", `width: ${research.participant_num / research.recruitment_num * 100}%`, 0)}></div></span></p></div></div> <div class="mx-4 mt-6"><div class="min-h-[184px] w-full rounded-[7px] bg-gray-50 px-5 py-4"><pre class="text-sm">${escape(screening_info.selected_questions.length > 0 ? `하단의 참여 하기 버튼을 눌러 
스크리닝 질문에 응답해 주세요!` : research.explanation)}
			</pre></div></div> ${`<div class="fixed bottom-0 mx-auto w-full bg-white px-5 py-3.5 md:w-1/2">${`<button class="btn w-full" disabled="true">${escape(research_status)}</button>`}</div>`}</main> ${validate_component(Page$3, "Modal").$$render(
      $$result,
      {
        modal_position: "bottom",
        is_modal_open: screening_info.is_modal
      },
      {
        is_modal_open: ($$value) => {
          screening_info.is_modal = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `<div class="px-5">${screening_info.selected_questions.length > 0 ? `<h3 class="mt-10 font-bold">${escape(screening_info.selected_questions[screening_info.page_count].question)}</h3> <div class="mt-4">${each(screening_info.selected_questions[screening_info.page_count].choices, (choice) => {
            return `<div class="py-2"><label><div class="${[
              "flex cursor-pointer items-center rounded-lg px-5 py-4 transition-colors duration-200 ease-in-out",
              (!choice.status ? "bg-gray-50" : "") + " " + (choice.status ? "bg-[#e9f0ff]" : "") + " " + (choice.status ? "border" : "") + " " + (choice.status ? "border-primary" : "")
            ].join(" ").trim()}"><input type="checkbox" class="mr-3 h-5 w-5 appearance-none rounded-full border-2 border-gray-300 bg-white checked:border-[6px] checked:border-primary"${add_attribute("checked", choice.status, 1)}> <p class="text-sm">${escape(choice.choice)}</p> </div></label> </div>`;
          })}</div>` : ``}</div> <div class="sticky bottom-0 w-full bg-white px-5 py-3.5"><button class="btn btn-primary w-full" data-svelte-h="svelte-fgxeyx">다음</button></div>`;
        }
      }
    )}`;
  } while (!$$settled);
  $$unsubscribe_point();
  $$unsubscribe_gender();
  $$unsubscribe_year_of_birth();
  $$unsubscribe_platform();
  $$unsubscribe_operating_system();
  return $$rendered;
});
export {
  Page as default
};
