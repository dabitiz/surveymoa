

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.BEFwL334.js","_app/immutable/chunks/scheduler.uydcz5af.js","_app/immutable/chunks/index.asQ9-pSt.js","_app/immutable/chunks/entry.Cjoch4Tp.js"];
export const stylesheets = [];
export const fonts = [];
