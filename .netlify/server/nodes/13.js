import * as server from '../entries/pages/point/withdrawal_money/_page.server.js';

export const index = 13;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/point/withdrawal_money/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/point/withdrawal_money/+page.server.js";
export const imports = ["_app/immutable/nodes/13.W8S_rkBK.js","_app/immutable/chunks/scheduler.DqnwxzbK.js","_app/immutable/chunks/index.DSZo6Pln.js","_app/immutable/chunks/entry.CHl6i2kH.js","_app/immutable/chunks/index.Cynp7HaE.js","_app/immutable/chunks/profiles_store.BLJ3XcoE.js","_app/immutable/chunks/common.DuzpFTKL.js","_app/immutable/chunks/_page.CyRuFnKg.js","_app/immutable/chunks/_page.DNeJpesN.js","_app/immutable/chunks/each.D8er-mL6.js","_app/immutable/chunks/global_store.GCpBoqhJ.js","_app/immutable/chunks/_page.CPLxTmvL.js","_app/immutable/chunks/_page.qfh_XgTh.js"];
export const stylesheets = ["_app/immutable/assets/common.DbLvtVfH.css"];
export const fonts = [];
