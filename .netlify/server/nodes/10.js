

export const index = 10;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/guide/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/10.CgMvVsku.js","_app/immutable/chunks/scheduler.DqnwxzbK.js","_app/immutable/chunks/index.DSZo6Pln.js","_app/immutable/chunks/_page.CyRuFnKg.js","_app/immutable/chunks/_page.qfh_XgTh.js"];
export const stylesheets = [];
export const fonts = [];
