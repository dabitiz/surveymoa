import * as server from '../entries/pages/home/_page.server.js';

export const index = 11;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/home/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/home/+page.server.js";
export const imports = ["_app/immutable/nodes/11.CiVNfyZi.js","_app/immutable/chunks/scheduler.DqnwxzbK.js","_app/immutable/chunks/index.DSZo6Pln.js","_app/immutable/chunks/entry.CHl6i2kH.js","_app/immutable/chunks/index.Cynp7HaE.js","_app/immutable/chunks/profiles_store.BLJ3XcoE.js","_app/immutable/chunks/_page.CyRuFnKg.js","_app/immutable/chunks/_page.DmghEoLt.js","_app/immutable/chunks/stores.BZFVIumn.js","_app/immutable/chunks/colors.DxZykO8C.js","_app/immutable/chunks/each.D8er-mL6.js","_app/immutable/chunks/_page.qfh_XgTh.js"];
export const stylesheets = [];
export const fonts = [];
