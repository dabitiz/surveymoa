import * as server from '../entries/pages/admin/point/withdrawal_approval/_page.server.js';

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/admin/point/withdrawal_approval/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/admin/point/withdrawal_approval/+page.server.js";
export const imports = ["_app/immutable/nodes/5.B_kaErty.js","_app/immutable/chunks/scheduler.DqnwxzbK.js","_app/immutable/chunks/index.DSZo6Pln.js","_app/immutable/chunks/main.esm.DVwBeDfz.js","_app/immutable/chunks/entry.CHl6i2kH.js","_app/immutable/chunks/index.Cynp7HaE.js","_app/immutable/chunks/dayjs.min.lVgWzJct.js","_app/immutable/chunks/_commonjsHelpers.Cpj98o6Y.js","_app/immutable/chunks/colors.DxZykO8C.js","_app/immutable/chunks/grid_common.fuePIJLb.js","_app/immutable/chunks/common.DuzpFTKL.js","_app/immutable/chunks/_page.CyRuFnKg.js","_app/immutable/chunks/_page.qfh_XgTh.js","_app/immutable/nodes/1.CGekKi2E.js","_app/immutable/chunks/stores.BZFVIumn.js"];
export const stylesheets = ["_app/immutable/assets/common.DbLvtVfH.css"];
export const fonts = [];
