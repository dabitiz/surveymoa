import * as server from '../entries/pages/research_info/_research_id_/_page.server.js';

export const index = 16;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/research_info/_research_id_/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/research_info/[research_id]/+page.server.js";
export const imports = ["_app/immutable/nodes/16.BKJ4ikaY.js","_app/immutable/chunks/scheduler.BdKJy1iV.js","_app/immutable/chunks/index.B7N7XBR8.js","_app/immutable/chunks/each.BLB6oXge.js","_app/immutable/chunks/preload-helper.D6kgxu3v.js","_app/immutable/chunks/index.a34zLPwc.js","_app/immutable/chunks/common.BB09VNl6.js","_app/immutable/chunks/index.C3Zqiqcy.js","_app/immutable/chunks/profiles_store.BE39v8xg.js","_app/immutable/chunks/device_store.oQ8c2LoD.js","_app/immutable/chunks/_page.B1zd66na.js","_app/immutable/chunks/_page.B3xJyiFi.js","_app/immutable/chunks/_page.gcB43EUZ.js","_app/immutable/chunks/etc_category.Ck9i6LV6.js"];
export const stylesheets = ["_app/immutable/assets/common.DbLvtVfH.css"];
export const fonts = [];
