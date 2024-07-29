import * as server from '../entries/pages/point/_page.server.js';

export const index = 13;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/point/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/point/+page.server.js";
export const imports = ["_app/immutable/nodes/13.CHPeGWKR.js","_app/immutable/chunks/scheduler.DqnwxzbK.js","_app/immutable/chunks/index.DSZo6Pln.js","_app/immutable/chunks/each.D8er-mL6.js","_app/immutable/chunks/entry.BGHe7JIn.js","_app/immutable/chunks/index.Cynp7HaE.js","_app/immutable/chunks/profiles_store.BLJ3XcoE.js","_app/immutable/chunks/common.DuzpFTKL.js","_app/immutable/chunks/_page.CyRuFnKg.js","_app/immutable/chunks/_page.CCWz7dhY.js","_app/immutable/chunks/stores.BrXxUEqt.js","_app/immutable/chunks/colors.DxZykO8C.js","_app/immutable/chunks/_page.qfh_XgTh.js"];
export const stylesheets = ["_app/immutable/assets/common.DbLvtVfH.css"];
export const fonts = [];
