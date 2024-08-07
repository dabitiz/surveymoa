import * as server from '../entries/pages/point/withdrawal_money/_page.server.js';

export const index = 14;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/point/withdrawal_money/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/point/withdrawal_money/+page.server.js";
export const imports = ["_app/immutable/nodes/14.YzsZugX3.js","_app/immutable/chunks/scheduler.DqnwxzbK.js","_app/immutable/chunks/index.DSZo6Pln.js","_app/immutable/chunks/entry.BvXajtAV.js","_app/immutable/chunks/index.Cynp7HaE.js","_app/immutable/chunks/profiles_store.BLJ3XcoE.js","_app/immutable/chunks/common.D4Nq-09P.js","_app/immutable/chunks/SvelteToast.svelte_svelte_type_style_lang.CqV4xMKg.js","_app/immutable/chunks/_page.CyRuFnKg.js","_app/immutable/chunks/_page.CvTxDIPa.js","_app/immutable/chunks/each.D8er-mL6.js","_app/immutable/chunks/global_store.GCpBoqhJ.js","_app/immutable/chunks/_page.CPLxTmvL.js","_app/immutable/chunks/_page.qfh_XgTh.js"];
export const stylesheets = ["_app/immutable/assets/SvelteToast.DbLvtVfH.css"];
export const fonts = [];
