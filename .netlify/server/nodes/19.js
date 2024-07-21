import * as server from '../entries/pages/see_more/comissioned_research/_page.server.js';

export const index = 19;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/see_more/comissioned_research/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/see_more/comissioned_research/+page.server.js";
export const imports = ["_app/immutable/nodes/19.D7VnENTp.js","_app/immutable/chunks/scheduler.BdKJy1iV.js","_app/immutable/chunks/index.B7N7XBR8.js","_app/immutable/chunks/each.BLB6oXge.js","_app/immutable/chunks/entry.CBBBRXsa.js","_app/immutable/chunks/index.C3Zqiqcy.js","_app/immutable/chunks/common.BB09VNl6.js","_app/immutable/chunks/_page.B1zd66na.js","_app/immutable/chunks/_page.gcB43EUZ.js","_app/immutable/chunks/etc_category.Ck9i6LV6.js"];
export const stylesheets = ["_app/immutable/assets/common.DbLvtVfH.css"];
export const fonts = [];
