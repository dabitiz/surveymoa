import * as server from '../entries/pages/account/_page.server.js';

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/account/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/account/+page.server.js";
export const imports = ["_app/immutable/nodes/3.DuvWRJeY.js","_app/immutable/chunks/scheduler.uydcz5af.js","_app/immutable/chunks/index.DAxJq6Fq.js","_app/immutable/chunks/entry.C3Tyi90O.js"];
export const stylesheets = [];
export const fonts = [];
