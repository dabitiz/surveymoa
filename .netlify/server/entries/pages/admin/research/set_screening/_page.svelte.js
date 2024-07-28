import { c as create_ssr_component, v as validate_component, b as escape, a as add_attribute, e as each } from "../../../../../chunks/ssr.js";
import "ag-grid-community";
import "../../../../../chunks/client.js";
import "../../../../../chunks/SvelteToast.svelte_svelte_type_style_lang.js";
import { P as Page$1 } from "../../../../../chunks/_page.js";
import { P as Page$2 } from "../../../../../chunks/_page2.js";
import { P as Page$3 } from "../../../../../chunks/_page3.js";
const TITLE = "조사 스크리닝 설정";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let grid_screening_research;
  let is_screening_research_modal = false;
  let research = { id: "", title: "", remarks: "" };
  let screening_research = { id: "", questions: [] };
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `<div class="flex h-screen flex-col">${validate_component(Page$1, "Header").$$render($$result, { nav_class: "bg-white" }, {}, {
      center: () => {
        return `<h1 slot="center" class="font-semibold">${escape(TITLE)}</h1>`;
      },
      left: () => {
        return `<button slot="left" class="flex items-center">${validate_component(Page$2, "Icon").$$render($$result, { name: "left_arrow" }, {}, {})}</button>`;
      }
    })} <div class="ag-theme-quartz w-full flex-1"${add_attribute("this", grid_screening_research, 0)}></div></div>  ${validate_component(Page$3, "Modal").$$render(
      $$result,
      {
        modal_position: "center",
        is_modal_open: is_screening_research_modal
      },
      {
        is_modal_open: ($$value) => {
          is_screening_research_modal = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `<div class="p-4"><p class="text-lg">스크리닝 설정 - (${escape(research.title)})</p> <div class="mt-8 bg-gray-200 p-4"><pre class="text-sm">${escape(research.remarks)}</pre></div> <div class="flex flex-col items-center"><button class="btn btn-primary mt-4" data-svelte-h="svelte-7e33p2">스크리닝 추가</button></div> ${each(screening_research.questions, (question, question_idx) => {
            return `<div class="form-control mt-4 w-full"><label class="label" for="question_title"><span class="label-text text-lg font-bold" data-svelte-h="svelte-9fbx0i">제목</span> <button class="btn btn-error btn-sm text-white" data-svelte-h="svelte-7mwvf5">x</button></label> <input type="text" class="input input-bordered h-[52px] w-full border-gray-300 focus:border-primary focus:outline-none" for="question_title" maxlength="100"${add_attribute("value", question.question, 0)}></div> <div class="mt-4">${each(question.choices, (choice, choice_idx) => {
              return `<div class="form-control"><label class="label cursor-pointer"><div class="flex w-80 items-center"><input type="radio" class="radio" hidden> <input type="text" placeholder="옵션" class="input input-sm input-bordered w-full border-gray-300 focus:border-primary focus:outline-none"${add_attribute("value", choice.choice, 0)}></div> <div class="flex items-center"><input type="checkbox" class="toggle toggle-primary toggle-md" ${choice.status ? "checked" : ""}> ${choice_idx !== 0 ? `<button class="pl-2 text-center text-2xl text-error" data-svelte-h="svelte-1lyrai">x</button>` : ``} </div></label> </div>`;
            })}</div> <button class="btn btn-primary btn-sm" data-svelte-h="svelte-qmeldf">옵션추가</button>`;
          })} <div class="mt-4 flex gap-4"><button class="btn flex-1 outline outline-1 outline-gray-300" data-svelte-h="svelte-18m6drb">취소</button> <button class="btn btn-primary flex-1" data-svelte-h="svelte-ehkafm">저장</button></div></div>`;
        }
      }
    )}`;
  } while (!$$settled);
  return $$rendered;
});
export {
  Page as default
};
