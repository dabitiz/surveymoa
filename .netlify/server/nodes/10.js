

export const index = 10;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/auth/auth-code-error/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/10.Bi_vHZNj.js","_app/immutable/chunks/scheduler.DqnwxzbK.js","_app/immutable/chunks/index.DSZo6Pln.js"];
export const stylesheets = [];
export const fonts = [];
