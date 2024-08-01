import * as universal from '../entries/pages/_layout.js';
import * as server from '../entries/pages/_layout.server.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export { server };
export const server_id = "src/routes/+layout.server.js";
export const imports = ["_app/immutable/nodes/0.uAh9uuLB.js","_app/immutable/chunks/index.C2Gdzs7-.js","_app/immutable/chunks/preload-helper.D6kgxu3v.js","_app/immutable/chunks/scheduler.DqnwxzbK.js","_app/immutable/chunks/index.DSZo6Pln.js","_app/immutable/chunks/each.D8er-mL6.js","_app/immutable/chunks/SvelteToast.svelte_svelte_type_style_lang.CqV4xMKg.js","_app/immutable/chunks/index.Cynp7HaE.js","_app/immutable/chunks/stores.UJHsKw1O.js","_app/immutable/chunks/entry.DivP5H-G.js","_app/immutable/chunks/global_store.GCpBoqhJ.js"];
export const stylesheets = ["_app/immutable/assets/0.CbD1LLYj.css","_app/immutable/assets/SvelteToast.DbLvtVfH.css"];
export const fonts = [];
