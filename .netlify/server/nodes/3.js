import * as server from '../entries/pages/account/_page.server.js';

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/account/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/account/+page.server.js";
export const imports = ["_app/immutable/nodes/3.DI7BODd9.js","_app/immutable/chunks/scheduler.uydcz5af.js","_app/immutable/chunks/index.asQ9-pSt.js","_app/immutable/chunks/entry.Cjoch4Tp.js"];
export const stylesheets = [];
export const fonts = [];
