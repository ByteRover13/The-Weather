

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.BCrq6S_l.js","_app/immutable/chunks/scheduler.DE1jmc0W.js","_app/immutable/chunks/index.BqIZv4WP.js"];
export const stylesheets = ["_app/immutable/assets/2.OpYgKY8f.css"];
export const fonts = [];
