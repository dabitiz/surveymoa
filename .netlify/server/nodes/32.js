import * as server from '../entries/pages/see_more/participated_research/_page.server.js';

export const index = 32;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/see_more/participated_research/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/see_more/participated_research/+page.server.js";
export const imports = ["_app/immutable/nodes/32.KM03x8xR.js","_app/immutable/chunks/scheduler.DqnwxzbK.js","_app/immutable/chunks/index.DSZo6Pln.js","_app/immutable/chunks/each.D8er-mL6.js","_app/immutable/chunks/common.D4Nq-09P.js","_app/immutable/chunks/SvelteToast.svelte_svelte_type_style_lang.CqV4xMKg.js","_app/immutable/chunks/index.Cynp7HaE.js","_app/immutable/chunks/_page.CyRuFnKg.js","_app/immutable/chunks/_page.qfh_XgTh.js","_app/immutable/chunks/etc_category.Ck9i6LV6.js","_app/immutable/chunks/entry.DivP5H-G.js"];
export const stylesheets = ["_app/immutable/assets/SvelteToast.DbLvtVfH.css"];
export const fonts = [];
