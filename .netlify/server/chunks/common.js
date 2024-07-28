import "./SvelteToast.svelte_svelte_type_style_lang.js";
const comma = (num) => {
  return num.toString().replace(/(\d)(?=(?:\d{3})+(?!\d))/g, "$1,");
};
const format_date = (get_date) => {
  const date = new Date(get_date);
  return `${date?.getFullYear() - 2e3}. ${("0" + (date.getMonth() + 1)).slice(-2)}. ${("0" + date.getDate()).slice(-2)}`;
};
const calculate_d_day = (end_date) => {
  const today = /* @__PURE__ */ new Date();
  const comparison_date = new Date(end_date);
  today.setHours(0, 0, 0, 0);
  comparison_date.setHours(0, 0, 0, 0);
  let difference_millie_seconds = comparison_date - today;
  let difference_in_days = difference_millie_seconds / (1e3 * 60 * 60 * 24);
  if (difference_in_days < 0) {
    return "마감";
  }
  return difference_in_days;
};
const calculate_age = (get_birth_date) => {
  const birth_date = new Date(get_birth_date);
  const current_date = /* @__PURE__ */ new Date();
  const birth_year = birth_date.getFullYear();
  const birth_month = birth_date.getMonth();
  const birth_day = birth_date.getDate();
  const current_year = current_date.getFullYear();
  const current_month = current_date.getMonth();
  const current_day = current_date.getDate();
  let age = current_year - birth_year;
  if (current_month < birth_month || current_month === birth_month && current_day < birth_day) {
    age--;
  }
  return age;
};
export {
  comma as a,
  calculate_d_day as b,
  calculate_age as c,
  format_date as f
};
