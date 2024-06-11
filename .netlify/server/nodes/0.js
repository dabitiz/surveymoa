import * as universal from '../entries/pages/_layout.js';
import * as server from '../entries/pages/_layout.server.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export { server };
export const server_id = "src/routes/+layout.server.js";
export const imports = ["_app/immutable/nodes/0.DK1ugTIy.js","_app/immutable/chunks/public.BMlPbYiR.js","_app/immutable/chunks/preload-helper.D6kgxu3v.js","_app/immutable/chunks/scheduler.uydcz5af.js","_app/immutable/chunks/index.DAxJq6Fq.js","_app/immutable/chunks/entry.C3Tyi90O.js"];
export const stylesheets = ["_app/immutable/assets/0.DyIMqUYO.css"];
export const fonts = [];
