

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.EATtfM_k.js","_app/immutable/chunks/scheduler.DE1jmc0W.js","_app/immutable/chunks/index.BqIZv4WP.js"];
export const stylesheets = [];
export const fonts = [];
