import * as server from '../entries/pages/admin/_layout.server.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/admin/_layout.svelte.js')).default;
export { server };
export const server_id = "src/routes/admin/+layout.server.js";
export const imports = ["_app/immutable/nodes/2.GAl347vn.js","_app/immutable/chunks/scheduler.BdKJy1iV.js","_app/immutable/chunks/index.B7N7XBR8.js","_app/immutable/chunks/entry.CBBBRXsa.js","_app/immutable/chunks/index.C3Zqiqcy.js","_app/immutable/chunks/common.BB09VNl6.js"];
export const stylesheets = ["_app/immutable/assets/2.DpGJakd2.css","_app/immutable/assets/common.DbLvtVfH.css"];
export const fonts = [];
