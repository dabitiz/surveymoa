import { s as subscribe } from "../../../../../../chunks/utils.js";
import { c as create_ssr_component, b as escape, a as add_attribute, v as validate_component, e as each } from "../../../../../../chunks/ssr.js";
import { p as page } from "../../../../../../chunks/stores.js";
import { P as Page$2 } from "../../../../../../chunks/_page2.js";
import { P as Page$1 } from "../../../../../../chunks/_page.js";
import { u as user_profile_png } from "../../../../../../chunks/profile.js";
import "../../../../../../chunks/client.js";
const TITLE = "별점 주기";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => value);
  let { data } = $$props;
  let { research_rating, research_participants } = data;
  const format_date = (get_date) => {
    const date = new Date(get_date);
    const formatted_date = `${date.getMonth() + 1}월 ${date.getDate()}일 ${String(date.getHours()).padStart(2, "0")}:${String(date.getMinutes()).padStart(2, "0")}`;
    return formatted_date;
  };
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$unsubscribe_page();
  return `${$$result.head += `<!-- HEAD_svelte-1lyn9uj_START -->${$$result.title = `<title>${escape(TITLE)} | 설문모아</title>`, ""}<meta name="description"${add_attribute("content", TITLE, 0)}><!-- HEAD_svelte-1lyn9uj_END -->`, ""} ${validate_component(Page$1, "Header").$$render($$result, {}, {}, {
    center: () => {
      return `<h1 slot="center" class="font-semibold">${escape(TITLE)}</h1>`;
    },
    left: () => {
      return `<a href="/see_more/comissioned_research" slot="left" class="flex items-center">${validate_component(Page$2, "Icon").$$render($$result, { name: "left_arrow" }, {}, {})}</a>`;
    }
  })} <main><div class="p-5"><div class="mb-6 flex items-center"><p class="pr-2 text-lg font-bold" data-svelte-h="svelte-1hp33n5">참여자 정보</p> <p class="text-sm text-gray-800">${escape(research_rating.participant_num)}/${escape(research_rating.recruitment_num)}</p></div> ${each(research_participants, (participant) => {
    return `<div class="mb-7 flex justify-between"><div class="flex items-center"><div class="mr-4 h-12 w-12">${participant.profiles.avatar_url === null ? `<img${add_attribute("src", user_profile_png, 0)} alt="user_profile_png" class="rounded-full object-cover">` : `<img${add_attribute("src", participant.profiles.avatar_url, 0)} alt="user_profile_png" class="rounded-full object-cover">`}</div> <div class="flex flex-col"><p class="text-sm font-semibold">${escape(participant.profiles.username)}</p> <p class="mt-1.5 text-sm font-semibold text-gray-800">${escape(format_date(participant.created_at))}</p> </div></div> ${research_rating.rating_user.some((rating) => {
      if (participant.profiles.id === rating.rated_user_id) {
        rating.id;
        return true;
      }
      return false;
    }) ? `<button class="btn btn-primary btn-sm h-9 w-14 rounded-full" data-svelte-h="svelte-zw4irh">수정</button>` : `<button class="btn btn-primary btn-sm h-9 w-14 rounded-full" data-svelte-h="svelte-2i3c3h">리뷰</button>`} </div>`;
  })}</div></main>`;
});
export {
  Page as default
};
