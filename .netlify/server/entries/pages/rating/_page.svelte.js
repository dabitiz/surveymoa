import { c as create_ssr_component, b as escape, a as add_attribute, v as validate_component, e as each } from "../../../chunks/ssr.js";
import dayjs from "dayjs";
import { P as Page$2 } from "../../../chunks/_page2.js";
import { P as Page$1 } from "../../../chunks/_page.js";
import { u as user_profile_png } from "../../../chunks/profile.js";
const TITLE = "별점";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let { rating_user } = data;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `${$$result.head += `<!-- HEAD_svelte-1lyn9uj_START -->${$$result.title = `<title>${escape(TITLE)} | 설문모아</title>`, ""}<meta name="description"${add_attribute("content", TITLE, 0)}><!-- HEAD_svelte-1lyn9uj_END -->`, ""} ${validate_component(Page$1, "Header").$$render($$result, {}, {}, {
    center: () => {
      return `<h1 slot="center" class="font-semibold">${escape(TITLE)}</h1>`;
    },
    left: () => {
      return `<a${add_attribute("href", `home`, 0)} slot="left" class="flex items-center">${validate_component(Page$2, "Icon").$$render($$result, { name: "left_arrow" }, {}, {})}</a>`;
    }
  })} <main><div class="mx-5">${each(rating_user, (user) => {
    return `<article class="mt-5 border-b border-gray-300 pb-5"><div class="flex">${user.profiles.avatar_url === null ? `<img${add_attribute("src", user_profile_png, 0)} alt="user_profile_png" class="mr-4 h-[50px] w-[50px] flex-shrink-0 rounded-full object-cover">` : `<img${add_attribute("src", user.profiles.avatar_url, 0)} alt="user_profile_png" class="mr-4 h-[50px] w-[50px] flex-shrink-0 rounded-full object-cover">`} <div class="flex flex-col"><p class="font-semibold">${escape(user.profiles.username)}</p> <div class="mt-2 flex items-center"><div class="rating rating-sm mr-2 gap-0.5"><input type="radio" ${user.rating === 1 ? "checked" : ""} name="rating-6" class="mask mask-star-2 bg-secondary" disabled> <input type="radio" ${user.rating === 2 ? "checked" : ""} name="rating-6" class="mask mask-star-2 bg-secondary" disabled> <input type="radio" ${user.rating === 3 ? "checked" : ""} name="rating-6" class="mask mask-star-2 bg-secondary" disabled> <input type="radio" ${user.rating === 4 ? "checked" : ""} name="rating-6" class="mask mask-star-2 bg-secondary" disabled> <input type="radio" ${user.rating === 5 ? "checked" : ""} name="rating-6" class="mask mask-star-2 bg-secondary" disabled></div> <p class="text-sm text-gray-800">${escape(dayjs(user.created_at).format("YYYY.MM.DD"))}</p></div> </div></div> <pre class="mt-5 text-sm">${escape(user.comment)}</pre> </article>`;
  })}</div></main>`;
});
export {
  Page as default
};
