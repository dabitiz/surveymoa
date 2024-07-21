

export const index = 12;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/point/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/12.23JIt5jc.js","_app/immutable/chunks/scheduler.BdKJy1iV.js","_app/immutable/chunks/index.B7N7XBR8.js"];
export const stylesheets = [];
export const fonts = [];
