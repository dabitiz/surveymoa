

export const index = 6;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/setting/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/6.Rsj5nT6K.js","_app/immutable/chunks/scheduler.uydcz5af.js","_app/immutable/chunks/index.asQ9-pSt.js","_app/immutable/chunks/entry.Cjoch4Tp.js"];
export const stylesheets = [];
export const fonts = [];
