

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/home/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/5.BfVn8des.js","_app/immutable/chunks/scheduler.uydcz5af.js","_app/immutable/chunks/index.DAxJq6Fq.js","_app/immutable/chunks/entry.C3Tyi90O.js","_app/immutable/chunks/stores.GQPnE0d2.js"];
export const stylesheets = [];
export const fonts = [];
