import * as server from '../entries/pages/research/_page.server.js';

export const index = 15;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/research/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/research/+page.server.js";
export const imports = ["_app/immutable/nodes/15.B953hUTf.js","_app/immutable/chunks/scheduler.BdKJy1iV.js","_app/immutable/chunks/index.B7N7XBR8.js","_app/immutable/chunks/globals.D0QH3NT1.js","_app/immutable/chunks/each.BLB6oXge.js","_app/immutable/chunks/entry.CBBBRXsa.js","_app/immutable/chunks/index.C3Zqiqcy.js","_app/immutable/chunks/common.BB09VNl6.js","_app/immutable/chunks/profiles_store.BE39v8xg.js","_app/immutable/chunks/_page.B1zd66na.js","_app/immutable/chunks/_page.S0D0Cq71.js","_app/immutable/chunks/stores.D2GFkmfH.js","_app/immutable/chunks/colors.DxZykO8C.js","_app/immutable/chunks/_page.gcB43EUZ.js","_app/immutable/chunks/_page.BcMQ0GoJ.js","_app/immutable/chunks/etc_category.Ck9i6LV6.js"];
export const stylesheets = ["_app/immutable/assets/common.DbLvtVfH.css"];
export const fonts = [];
