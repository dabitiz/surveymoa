import * as universal from '../entries/pages/_layout.js';
import * as server from '../entries/pages/_layout.server.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export { server };
export const server_id = "src/routes/+layout.server.js";
export const imports = ["_app/immutable/nodes/0.C1AYUBHr.js","_app/immutable/chunks/preload-helper.D6kgxu3v.js","_app/immutable/chunks/scheduler.uydcz5af.js","_app/immutable/chunks/index.asQ9-pSt.js","_app/immutable/chunks/entry.Cjoch4Tp.js"];
export const stylesheets = ["_app/immutable/assets/0.q5Z3ajRk.css"];
export const fonts = [];
