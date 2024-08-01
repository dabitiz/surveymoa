import * as server from '../entries/pages/see_more/comissioned_research/order_detail/_research_id_/_page.server.js';

export const index = 23;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/see_more/comissioned_research/order_detail/_research_id_/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/see_more/comissioned_research/order_detail/[research_id]/+page.server.js";
export const imports = ["_app/immutable/nodes/23.BIDq2oco.js","_app/immutable/chunks/scheduler.DqnwxzbK.js","_app/immutable/chunks/index.DSZo6Pln.js","_app/immutable/chunks/entry.DivP5H-G.js","_app/immutable/chunks/index.Cynp7HaE.js","_app/immutable/chunks/stores.UJHsKw1O.js","_app/immutable/chunks/global_store.GCpBoqhJ.js","_app/immutable/chunks/common.D4Nq-09P.js","_app/immutable/chunks/SvelteToast.svelte_svelte_type_style_lang.CqV4xMKg.js","_app/immutable/chunks/_page.CyRuFnKg.js","_app/immutable/chunks/_page.CvTxDIPa.js","_app/immutable/chunks/each.D8er-mL6.js","_app/immutable/chunks/_page.CPLxTmvL.js","_app/immutable/chunks/_page.qfh_XgTh.js","_app/immutable/chunks/etc_category.Ck9i6LV6.js"];
export const stylesheets = ["_app/immutable/assets/SvelteToast.DbLvtVfH.css"];
export const fonts = [];
