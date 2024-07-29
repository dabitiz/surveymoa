import * as server from '../entries/pages/admin/research/set_screening/_page.server.js';

export const index = 8;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/admin/research/set_screening/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/admin/research/set_screening/+page.server.js";
export const imports = ["_app/immutable/nodes/8.CSxJWmvO.js","_app/immutable/chunks/scheduler.DqnwxzbK.js","_app/immutable/chunks/index.DSZo6Pln.js","_app/immutable/chunks/each.D8er-mL6.js","_app/immutable/chunks/main.esm.DVwBeDfz.js","_app/immutable/chunks/entry.BGHe7JIn.js","_app/immutable/chunks/index.Cynp7HaE.js","_app/immutable/chunks/common.DuzpFTKL.js","_app/immutable/chunks/_page.CyRuFnKg.js","_app/immutable/chunks/_page.qfh_XgTh.js","_app/immutable/chunks/_page.CPLxTmvL.js"];
export const stylesheets = ["_app/immutable/assets/common.DbLvtVfH.css"];
export const fonts = [];
