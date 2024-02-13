

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.DJnHJ3ue.js","_app/immutable/chunks/scheduler.DE1jmc0W.js","_app/immutable/chunks/index.BqIZv4WP.js","_app/immutable/chunks/entry.qE1UZ7Dc.js"];
export const stylesheets = [];
export const fonts = [];
