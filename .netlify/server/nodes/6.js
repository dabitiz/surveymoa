import * as server from '../entries/pages/admin/point/withdrawal_approval/_page.server.js';

export const index = 6;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/admin/point/withdrawal_approval/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/admin/point/withdrawal_approval/+page.server.js";
export const imports = ["_app/immutable/nodes/6.D5E2uLH1.js","_app/immutable/chunks/scheduler.DqnwxzbK.js","_app/immutable/chunks/index.DSZo6Pln.js","_app/immutable/chunks/main.esm.DVwBeDfz.js","_app/immutable/chunks/entry.B_16ET4Q.js","_app/immutable/chunks/index.Cynp7HaE.js","_app/immutable/chunks/dayjs.min.lVgWzJct.js","_app/immutable/chunks/_commonjsHelpers.Cpj98o6Y.js","_app/immutable/chunks/colors.DxZykO8C.js","_app/immutable/chunks/grid_common.fuePIJLb.js","_app/immutable/chunks/common.D4Nq-09P.js","_app/immutable/chunks/SvelteToast.svelte_svelte_type_style_lang.CqV4xMKg.js","_app/immutable/chunks/_page.CyRuFnKg.js","_app/immutable/chunks/_page.qfh_XgTh.js","_app/immutable/nodes/1.CghRMh1c.js","_app/immutable/chunks/stores.TtOCUSXN.js"];
export const stylesheets = ["_app/immutable/assets/SvelteToast.DbLvtVfH.css"];
export const fonts = [];
