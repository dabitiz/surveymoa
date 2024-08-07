import * as server from '../entries/pages/research/_page.server.js';

export const index = 18;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/research/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/research/+page.server.js";
export const imports = ["_app/immutable/nodes/18.E6k6RA4t.js","_app/immutable/chunks/scheduler.DqnwxzbK.js","_app/immutable/chunks/index.DSZo6Pln.js","_app/immutable/chunks/each.D8er-mL6.js","_app/immutable/chunks/entry.BvXajtAV.js","_app/immutable/chunks/index.Cynp7HaE.js","_app/immutable/chunks/common.D4Nq-09P.js","_app/immutable/chunks/SvelteToast.svelte_svelte_type_style_lang.CqV4xMKg.js","_app/immutable/chunks/profiles_store.BLJ3XcoE.js","_app/immutable/chunks/_page.CyRuFnKg.js","_app/immutable/chunks/_page.D1DghE-G.js","_app/immutable/chunks/stores.DMqhBBjV.js","_app/immutable/chunks/colors.DxZykO8C.js","_app/immutable/chunks/_page.qfh_XgTh.js","_app/immutable/chunks/etc_category.Ck9i6LV6.js"];
export const stylesheets = ["_app/immutable/assets/SvelteToast.DbLvtVfH.css"];
export const fonts = [];
