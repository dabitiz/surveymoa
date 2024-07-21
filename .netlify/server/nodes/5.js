

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/admin/point/withdrawal_approval/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/5.23JIt5jc.js","_app/immutable/chunks/scheduler.BdKJy1iV.js","_app/immutable/chunks/index.B7N7XBR8.js"];
export const stylesheets = [];
export const fonts = [];
