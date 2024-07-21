import * as server from '../entries/pages/regi_research/_page.server.js';

export const index = 13;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/regi_research/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/regi_research/+page.server.js";
export const imports = ["_app/immutable/nodes/13.7O4DxNnS.js","_app/immutable/chunks/scheduler.BdKJy1iV.js","_app/immutable/chunks/index.B7N7XBR8.js","_app/immutable/chunks/entry.CBBBRXsa.js","_app/immutable/chunks/index.C3Zqiqcy.js","_app/immutable/chunks/global_store.Eu1w8Dz9.js","_app/immutable/chunks/common.BB09VNl6.js","_app/immutable/chunks/_page.B3xJyiFi.js","_app/immutable/chunks/colors.DxZykO8C.js","_app/immutable/chunks/each.BLB6oXge.js","_app/immutable/chunks/_page.BusC5-2i.js","_app/immutable/chunks/_page.BcMQ0GoJ.js","_app/immutable/chunks/etc_category.Ck9i6LV6.js","_app/immutable/chunks/_page.B1zd66na.js","_app/immutable/chunks/_page.gcB43EUZ.js"];
export const stylesheets = ["_app/immutable/assets/13.3ILc2xhG.css","_app/immutable/assets/common.DbLvtVfH.css"];
export const fonts = [];
