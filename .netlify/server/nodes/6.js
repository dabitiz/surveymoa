

export const index = 6;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/setting/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/6.BhWJS8j_.js","_app/immutable/chunks/scheduler.uydcz5af.js","_app/immutable/chunks/index.DAxJq6Fq.js","_app/immutable/chunks/entry.C3Tyi90O.js"];
export const stylesheets = [];
export const fonts = [];
