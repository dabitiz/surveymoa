import * as server from '../entries/pages/regi_research/_page.server.js';

export const index = 15;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/regi_research/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/regi_research/+page.server.js";
export const imports = ["_app/immutable/nodes/15.DkauTCS2.js","_app/immutable/chunks/scheduler.DqnwxzbK.js","_app/immutable/chunks/index.DSZo6Pln.js","_app/immutable/chunks/entry.CHl6i2kH.js","_app/immutable/chunks/index.Cynp7HaE.js","_app/immutable/chunks/global_store.GCpBoqhJ.js","_app/immutable/chunks/common.DuzpFTKL.js","_app/immutable/chunks/_page.CPLxTmvL.js","_app/immutable/chunks/colors.DxZykO8C.js","_app/immutable/chunks/each.D8er-mL6.js","_app/immutable/chunks/_page.DNeJpesN.js","_app/immutable/chunks/etc_category.Ck9i6LV6.js","_app/immutable/chunks/_page.CyRuFnKg.js","_app/immutable/chunks/_page.qfh_XgTh.js"];
export const stylesheets = ["_app/immutable/assets/15.3ILc2xhG.css","_app/immutable/assets/common.DbLvtVfH.css"];
export const fonts = [];
