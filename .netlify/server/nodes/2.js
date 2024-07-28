import * as server from '../entries/pages/admin/_layout.server.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/admin/_layout.svelte.js')).default;
export { server };
export const server_id = "src/routes/admin/+layout.server.js";
export const imports = ["_app/immutable/nodes/2.B-u1JdvZ.js","_app/immutable/chunks/scheduler.DqnwxzbK.js","_app/immutable/chunks/index.DSZo6Pln.js","_app/immutable/chunks/entry.CHl6i2kH.js","_app/immutable/chunks/index.Cynp7HaE.js","_app/immutable/chunks/common.DuzpFTKL.js"];
export const stylesheets = ["_app/immutable/assets/2.DpGJakd2.css","_app/immutable/assets/common.DbLvtVfH.css"];
export const fonts = [];
