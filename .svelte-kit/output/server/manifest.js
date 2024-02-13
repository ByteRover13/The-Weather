export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","sun.webp","sun1.png"]),
	mimeTypes: {".png":"image/png",".webp":"image/webp"},
	_: {
		client: {"start":"_app/immutable/entry/start.B-JKOTH3.js","app":"_app/immutable/entry/app.Bi8e8Mx8.js","imports":["_app/immutable/entry/start.B-JKOTH3.js","_app/immutable/chunks/entry.qE1UZ7Dc.js","_app/immutable/chunks/scheduler.DE1jmc0W.js","_app/immutable/entry/app.Bi8e8Mx8.js","_app/immutable/chunks/scheduler.DE1jmc0W.js","_app/immutable/chunks/index.BqIZv4WP.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
