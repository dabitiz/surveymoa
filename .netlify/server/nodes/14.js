import * as server from '../entries/pages/rating/_page.server.js';

export const index = 14;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/rating/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/rating/+page.server.js";
export const imports = ["_app/immutable/nodes/14.C54O2N1Q.js","_app/immutable/chunks/scheduler.DqnwxzbK.js","_app/immutable/chunks/index.DSZo6Pln.js","_app/immutable/chunks/each.D8er-mL6.js","_app/immutable/chunks/dayjs.min.lVgWzJct.js","_app/immutable/chunks/_commonjsHelpers.Cpj98o6Y.js","_app/immutable/chunks/_page.qfh_XgTh.js","_app/immutable/chunks/_page.CyRuFnKg.js","_app/immutable/chunks/profile.DYtYZlb9.js"];
export const stylesheets = [];
export const fonts = [];
