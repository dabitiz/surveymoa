import * as server from '../entries/pages/admin/research/set_screening/_page.server.js';

export const index = 7;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/admin/research/set_screening/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/admin/research/set_screening/+page.server.js";
export const imports = ["_app/immutable/nodes/7.kzrjLm2i.js","_app/immutable/chunks/scheduler.BdKJy1iV.js","_app/immutable/chunks/index.B7N7XBR8.js","_app/immutable/chunks/each.BLB6oXge.js","_app/immutable/chunks/main.esm.DVwBeDfz.js","_app/immutable/chunks/entry.CBBBRXsa.js","_app/immutable/chunks/index.C3Zqiqcy.js","_app/immutable/chunks/common.BB09VNl6.js","_app/immutable/chunks/_page.B1zd66na.js","_app/immutable/chunks/_page.gcB43EUZ.js","_app/immutable/chunks/_page.B3xJyiFi.js"];
export const stylesheets = ["_app/immutable/assets/common.DbLvtVfH.css"];
export const fonts = [];
