import * as server from '../entries/pages/regi_research/_page.server.js';

export const index = 16;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/regi_research/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/regi_research/+page.server.js";
export const imports = ["_app/immutable/nodes/16.ConhLolT.js","_app/immutable/chunks/scheduler.DqnwxzbK.js","_app/immutable/chunks/index.DSZo6Pln.js","_app/immutable/chunks/entry.CJ3DMuXN.js","_app/immutable/chunks/index.Cynp7HaE.js","_app/immutable/chunks/global_store.GCpBoqhJ.js","_app/immutable/chunks/common.D4Nq-09P.js","_app/immutable/chunks/SvelteToast.svelte_svelte_type_style_lang.CqV4xMKg.js","_app/immutable/chunks/_page.CPLxTmvL.js","_app/immutable/chunks/colors.DxZykO8C.js","_app/immutable/chunks/each.D8er-mL6.js","_app/immutable/chunks/_page.CvTxDIPa.js","_app/immutable/chunks/etc_category.Ck9i6LV6.js","_app/immutable/chunks/_page.CyRuFnKg.js","_app/immutable/chunks/_page.qfh_XgTh.js"];
export const stylesheets = ["_app/immutable/assets/16.3ILc2xhG.css","_app/immutable/assets/SvelteToast.DbLvtVfH.css"];
export const fonts = [];
