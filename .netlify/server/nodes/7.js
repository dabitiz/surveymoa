import * as server from '../entries/pages/admin/research/approval/_page.server.js';

export const index = 7;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/admin/research/approval/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/admin/research/approval/+page.server.js";
export const imports = ["_app/immutable/nodes/7.B7Qh352y.js","_app/immutable/chunks/scheduler.DqnwxzbK.js","_app/immutable/chunks/index.DSZo6Pln.js","_app/immutable/chunks/main.esm.DVwBeDfz.js","_app/immutable/chunks/entry.BvXajtAV.js","_app/immutable/chunks/index.Cynp7HaE.js","_app/immutable/chunks/colors.DxZykO8C.js","_app/immutable/chunks/grid_common.fuePIJLb.js","_app/immutable/chunks/_page.CyRuFnKg.js","_app/immutable/chunks/_page.qfh_XgTh.js"];
export const stylesheets = [];
export const fonts = [];
