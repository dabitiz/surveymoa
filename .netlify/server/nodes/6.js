import * as server from '../entries/pages/admin/research/approval/_page.server.js';

export const index = 6;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/admin/research/approval/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/admin/research/approval/+page.server.js";
export const imports = ["_app/immutable/nodes/6.CdYWO2en.js","_app/immutable/chunks/scheduler.BdKJy1iV.js","_app/immutable/chunks/index.B7N7XBR8.js","_app/immutable/chunks/main.esm.DVwBeDfz.js","_app/immutable/chunks/entry.CBBBRXsa.js","_app/immutable/chunks/index.C3Zqiqcy.js","_app/immutable/chunks/colors.DxZykO8C.js","_app/immutable/chunks/_page.B1zd66na.js","_app/immutable/chunks/_page.gcB43EUZ.js"];
export const stylesheets = [];
export const fonts = [];
