import * as server from '../entries/pages/see_more/comissioned_research/_page.server.js';

export const index = 22;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/see_more/comissioned_research/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/see_more/comissioned_research/+page.server.js";
export const imports = ["_app/immutable/nodes/22.B4N60gEY.js","_app/immutable/chunks/scheduler.DqnwxzbK.js","_app/immutable/chunks/index.DSZo6Pln.js","_app/immutable/chunks/each.D8er-mL6.js","_app/immutable/chunks/entry.BGHe7JIn.js","_app/immutable/chunks/index.Cynp7HaE.js","_app/immutable/chunks/common.DuzpFTKL.js","_app/immutable/chunks/_page.CyRuFnKg.js","_app/immutable/chunks/_page.qfh_XgTh.js","_app/immutable/chunks/etc_category.Ck9i6LV6.js"];
export const stylesheets = ["_app/immutable/assets/common.DbLvtVfH.css"];
export const fonts = [];
