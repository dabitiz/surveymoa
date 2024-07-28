import * as server from '../entries/pages/research_info/_research_id_/_page.server.js';

export const index = 18;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/research_info/_research_id_/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/research_info/[research_id]/+page.server.js";
export const imports = ["_app/immutable/nodes/18.CLnRQfDt.js","_app/immutable/chunks/scheduler.DqnwxzbK.js","_app/immutable/chunks/index.DSZo6Pln.js","_app/immutable/chunks/each.D8er-mL6.js","_app/immutable/chunks/preload-helper.D6kgxu3v.js","_app/immutable/chunks/index.a34zLPwc.js","_app/immutable/chunks/device_store.B0jNRlh7.js","_app/immutable/chunks/index.Cynp7HaE.js","_app/immutable/chunks/profiles_store.BLJ3XcoE.js","_app/immutable/chunks/common.DuzpFTKL.js","_app/immutable/chunks/_page.CyRuFnKg.js","_app/immutable/chunks/_page.CPLxTmvL.js","_app/immutable/chunks/_page.qfh_XgTh.js","_app/immutable/chunks/etc_category.Ck9i6LV6.js"];
export const stylesheets = ["_app/immutable/assets/common.DbLvtVfH.css"];
export const fonts = [];
