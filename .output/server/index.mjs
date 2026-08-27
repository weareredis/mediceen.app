globalThis.__nitro_main__ = import.meta.url;
import { i as serve, r as NodeResponse } from "./_libs/h3-v2+rou3+srvx.mjs";
import { a as toEventHandler, i as defineLazyEventHandler, n as HTTPError, r as defineHandler, t as H3Core } from "./_libs/h3+rou3+srvx.mjs";
import { i as withoutTrailingSlash, n as joinURL, r as withLeadingSlash, t as decodePath } from "./_libs/ufo.mjs";
import { promises } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";
//#region #nitro-vite-setup
function lazyService(loader) {
	let promise, mod;
	return { fetch(req) {
		if (mod) return mod.fetch(req);
		if (!promise) promise = loader().then((_mod) => mod = _mod.default || _mod);
		return promise.then((mod) => mod.fetch(req));
	} };
}
var services = { ["ssr"]: lazyService(() => import("./_ssr/ssr.mjs")) };
globalThis.__nitro_vite_envs__ = services;
//#endregion
//#region node_modules/nitro/dist/runtime/internal/route-rules.mjs
var headers = ((m) => function headersRouteRule(event) {
	for (const [key, value] of Object.entries(m.options || {})) event.res.headers.set(key, value);
});
//#endregion
//#region #nitro/virtual/public-assets-data
var public_assets_data_default = {
	"/app-store-badge.png": {
		"type": "image/png",
		"etag": "\"18147-RS2Inl2iqKHXl4UEC7P60wrJBhU\"",
		"mtime": "2026-08-19T09:13:41.937Z",
		"size": 98631,
		"path": "../public/app-store-badge.png"
	},
	"/favicon.png": {
		"type": "image/png",
		"etag": "\"791-oOkzOfTR25UsR5yOLPGagXRrvAQ\"",
		"mtime": "2026-08-17T11:08:56.464Z",
		"size": 1937,
		"path": "../public/favicon.png"
	},
	"/google-play-badge.png": {
		"type": "image/png",
		"etag": "\"19b3e-FCJsKsfa51um5LpBL8C92jfD1qQ\"",
		"mtime": "2026-08-19T09:12:43.392Z",
		"size": 105278,
		"path": "../public/google-play-badge.png"
	},
	"/mediceen-mark.png": {
		"type": "image/png",
		"etag": "\"867-d+KBkKgeMgEJeX81isQbnwRISo4\"",
		"mtime": "2026-08-19T09:15:00.842Z",
		"size": 2151,
		"path": "../public/mediceen-mark.png"
	},
	"/mediceen-wordmark.png": {
		"type": "image/png",
		"etag": "\"10dc-/iO337pVnuArEUUpJ4jFPCVUlWQ\"",
		"mtime": "2026-08-19T09:15:00.843Z",
		"size": 4316,
		"path": "../public/mediceen-wordmark.png"
	},
	"/robots.txt": {
		"type": "text/plain; charset=utf-8",
		"etag": "\"44-7BXiMTwAmQf0vWSru9ks0pfb9O8\"",
		"mtime": "2026-08-24T11:06:52.026Z",
		"size": 68,
		"path": "../public/robots.txt"
	},
	"/sitemap.xml": {
		"type": "application/xml",
		"etag": "\"32e-4ui9iia+lAraZ4KkvcKGWbYTOis\"",
		"mtime": "2026-08-24T11:07:11.438Z",
		"size": 814,
		"path": "../public/sitemap.xml"
	},
	"/assets/about-CMjfOlXK.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"5c0-nX/eHA+Hp5SyGwrcUzHlpP8QoeI\"",
		"mtime": "2026-08-27T11:53:33.564Z",
		"size": 1472,
		"path": "../public/assets/about-CMjfOlXK.js"
	},
	"/assets/faq-Ck07Mo3N.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"45c-liBG3OVKTQmW99u1wrK+/dGPxho\"",
		"mtime": "2026-08-27T11:53:33.564Z",
		"size": 1116,
		"path": "../public/assets/faq-Ck07Mo3N.js"
	},
	"/assets/LegalPage-CbxS8Ytq.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"833-xBAGJcs9pJDNF9u7Xp2E+QcHyWs\"",
		"mtime": "2026-08-27T11:53:33.563Z",
		"size": 2099,
		"path": "../public/assets/LegalPage-CbxS8Ytq.js"
	},
	"/assets/licenses-DJTWnAWZ.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"36a-8+2dWUojrI2DvpAw1wrgBTgJGo4\"",
		"mtime": "2026-08-27T11:53:33.564Z",
		"size": 874,
		"path": "../public/assets/licenses-DJTWnAWZ.js"
	},
	"/assets/PageContainer-CBzeIQ5x.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"128-A8eKYr1P0WG9z85nLO2ct30Nrx4\"",
		"mtime": "2026-08-27T11:53:33.563Z",
		"size": 296,
		"path": "../public/assets/PageContainer-CBzeIQ5x.js"
	},
	"/assets/cookies-CR4edrbR.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"387-/gJFdjSeeSuJAy0VdvhiVedSIvY\"",
		"mtime": "2026-08-27T11:53:33.564Z",
		"size": 903,
		"path": "../public/assets/cookies-CR4edrbR.js"
	},
	"/assets/privacy-BQkX9UOz.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"222c-64g4l//HS90qty+h5GTgKmnG2A8\"",
		"mtime": "2026-08-27T11:53:33.564Z",
		"size": 8748,
		"path": "../public/assets/privacy-BQkX9UOz.js"
	},
	"/assets/styles-Aw9DxmgC.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"1800a-0LcpHG1SrSBqwTekoPpBPRj3Lpg\"",
		"mtime": "2026-08-27T11:53:33.565Z",
		"size": 98314,
		"path": "../public/assets/styles-Aw9DxmgC.css"
	},
	"/assets/support.delete-account-Br2k6L81.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"86f-Fy5ac73UwwhWybzpEz2kKkxH89s\"",
		"mtime": "2026-08-27T11:53:33.565Z",
		"size": 2159,
		"path": "../public/assets/support.delete-account-Br2k6L81.js"
	},
	"/assets/support.index-LKNQm6XP.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"6e1-jT+Vevi326TS4UIMQ+i+m9ftVCU\"",
		"mtime": "2026-08-27T11:53:33.565Z",
		"size": 1761,
		"path": "../public/assets/support.index-LKNQm6XP.js"
	},
	"/assets/terms-DsQgMGVi.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1486-4uXLO++bospB88ES0j8DRVQPFO0\"",
		"mtime": "2026-08-27T11:53:33.565Z",
		"size": 5254,
		"path": "../public/assets/terms-DsQgMGVi.js"
	},
	"/assets/routes-BYExErcy.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"27ae7-wlcsw/SdnXekVe69sX7Xy9Nn3EU\"",
		"mtime": "2026-08-27T11:53:33.564Z",
		"size": 162535,
		"path": "../public/assets/routes-BYExErcy.js"
	},
	"/assets/index-DnzkcZpE.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"60c86-+30PlqNdaEmYR1BH+ZE7jfJay+Q\"",
		"mtime": "2026-08-27T11:53:33.563Z",
		"size": 396422,
		"path": "../public/assets/index-DnzkcZpE.js"
	}
};
//#endregion
//#region #nitro/virtual/public-assets-node
function readAsset(id) {
	const serverDir = dirname(fileURLToPath(globalThis.__nitro_main__));
	return promises.readFile(resolve(serverDir, public_assets_data_default[id].path));
}
//#endregion
//#region #nitro/virtual/public-assets
var publicAssetBases = {};
function isPublicAssetURL(id = "") {
	if (public_assets_data_default[id]) return true;
	for (const base in publicAssetBases) if (id.startsWith(base)) return true;
	return false;
}
function getAsset(id) {
	return public_assets_data_default[id];
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/static.mjs
var METHODS = /* @__PURE__ */ new Set(["HEAD", "GET"]);
var EncodingMap = {
	gzip: ".gz",
	br: ".br",
	zstd: ".zst"
};
var static_default = defineHandler((event) => {
	if (event.req.method && !METHODS.has(event.req.method)) return;
	let id = decodePath(withLeadingSlash(withoutTrailingSlash(event.url.pathname)));
	let asset;
	const encodings = [...(event.req.headers.get("accept-encoding") || "").split(",").map((e) => EncodingMap[e.trim()]).filter(Boolean).sort(), ""];
	for (const encoding of encodings) for (const _id of [id + encoding, joinURL(id, "index.html" + encoding)]) {
		const _asset = getAsset(_id);
		if (_asset) {
			asset = _asset;
			id = _id;
			break;
		}
	}
	if (!asset) {
		if (isPublicAssetURL(id)) {
			event.res.headers.delete("Cache-Control");
			throw new HTTPError({ status: 404 });
		}
		return;
	}
	if (encodings.length > 1) event.res.headers.append("Vary", "Accept-Encoding");
	if (event.req.headers.get("if-none-match") === asset.etag) {
		event.res.status = 304;
		event.res.statusText = "Not Modified";
		return "";
	}
	const ifModifiedSinceH = event.req.headers.get("if-modified-since");
	const mtimeDate = new Date(asset.mtime);
	if (ifModifiedSinceH && asset.mtime && new Date(ifModifiedSinceH) >= mtimeDate) {
		event.res.status = 304;
		event.res.statusText = "Not Modified";
		return "";
	}
	if (asset.type) event.res.headers.set("Content-Type", asset.type);
	if (asset.etag && !event.res.headers.has("ETag")) event.res.headers.set("ETag", asset.etag);
	if (asset.mtime && !event.res.headers.has("Last-Modified")) event.res.headers.set("Last-Modified", mtimeDate.toUTCString());
	if (asset.encoding && !event.res.headers.has("Content-Encoding")) event.res.headers.set("Content-Encoding", asset.encoding);
	if (asset.size > 0 && !event.res.headers.has("Content-Length")) event.res.headers.set("Content-Length", asset.size.toString());
	return readAsset(id);
});
//#endregion
//#region #nitro/virtual/routing
var findRouteRules = /* @__PURE__ */ (() => {
	const $0 = [{
		name: "headers",
		route: "/assets/**",
		handler: headers,
		options: { "cache-control": "public, max-age=31536000, immutable" }
	}];
	return (m, p) => {
		let r = [];
		if (p.charCodeAt(p.length - 1) === 47) p = p.slice(0, -1) || "/";
		let s = p.split("/");
		if (s.length > 1) {
			if (s[1] === "assets") r.unshift({
				data: $0,
				params: { "_": s.slice(2).join("/") }
			});
		}
		return r;
	};
})();
var _lazy_NqNvuV = defineLazyEventHandler(() => import("./_chunks/ssr-renderer.mjs"));
var findRoute = /* @__PURE__ */ (() => {
	const data = {
		route: "/**",
		handler: _lazy_NqNvuV
	};
	return ((_m, p) => {
		return {
			data,
			params: { "_": p.slice(1) }
		};
	});
})();
var globalMiddleware = [toEventHandler(static_default)].filter(Boolean);
//#endregion
//#region node_modules/nitro/dist/runtime/internal/error/prod.mjs
var errorHandler = (error, event) => {
	const res = defaultHandler(error, event);
	return new NodeResponse(typeof res.body === "string" ? res.body : JSON.stringify(res.body, null, 2), res);
};
function defaultHandler(error, event) {
	const unhandled = error.unhandled ?? !HTTPError.isError(error);
	const { status = 500, statusText = "" } = unhandled ? {} : error;
	if (status === 404) {
		const url = event.url || new URL(event.req.url);
		const baseURL = "/";
		if (/^\/[^/]/.test(baseURL) && !url.pathname.startsWith(baseURL)) return {
			status: 302,
			headers: new Headers({ location: `${baseURL}${url.pathname.slice(1)}${url.search}` })
		};
	}
	const headers = new Headers(unhandled ? {} : error.headers);
	headers.set("content-type", "application/json; charset=utf-8");
	return {
		status,
		statusText,
		headers,
		body: {
			error: true,
			...unhandled ? {
				status,
				unhandled: true
			} : typeof error.toJSON === "function" ? error.toJSON() : {
				status,
				statusText,
				message: error.message
			}
		}
	};
}
//#endregion
//#region #nitro/virtual/error-handler
var errorHandlers = [errorHandler];
async function error_handler_default(error, event) {
	for (const handler of errorHandlers) try {
		const response = await handler(error, event, { defaultHandler });
		if (response) return response;
	} catch (error) {
		console.error(error);
	}
}
//#endregion
//#region #nitro/virtual/app
function createNitroApp() {
	const captureError = (error, errorCtx) => {
		if (errorCtx?.event) {
			const errors = errorCtx.event.req.context?.nitro?.errors;
			if (errors) errors.push({
				error,
				context: errorCtx
			});
		}
	};
	const h3App = createH3App({ onError(error, event) {
		return error_handler_default(error, event);
	} });
	let appHandler = (req) => {
		req.context ||= {};
		req.context.nitro = req.context.nitro || { errors: [] };
		return h3App.fetch(req);
	};
	return {
		fetch: appHandler,
		h3: h3App,
		hooks: void 0,
		captureError
	};
}
function createH3App(config) {
	const h3App = new H3Core(config);
	h3App["~findRoute"] = (event) => findRoute(event.req.method, event.url.pathname);
	h3App["~middleware"].push(...globalMiddleware);
	h3App["~getMiddleware"] = (event, route) => {
		const pathname = event.url.pathname;
		const method = event.req.method;
		const middleware = [];
		const routeRules = getRouteRules(method, pathname);
		event.context.routeRules = routeRules?.routeRules;
		if (routeRules?.routeRuleMiddleware.length) middleware.push(...routeRules.routeRuleMiddleware);
		middleware.push(...h3App["~middleware"]);
		if (route?.data?.middleware?.length) middleware.push(...route.data.middleware);
		return middleware;
	};
	return h3App;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/app.mjs
var APP_ID = "default";
function useNitroApp() {
	let instance = useNitroApp._instance;
	if (instance) return instance;
	instance = useNitroApp._instance = createNitroApp();
	globalThis.__nitro__ = globalThis.__nitro__ || {};
	globalThis.__nitro__[APP_ID] = instance;
	return instance;
}
function getRouteRules(method, pathname) {
	const m = findRouteRules(method, pathname);
	if (!m?.length) return { routeRuleMiddleware: [] };
	const routeRules = {};
	for (const layer of m) for (const rule of layer.data) {
		const currentRule = routeRules[rule.name];
		if (currentRule) {
			if (rule.options === false) {
				delete routeRules[rule.name];
				continue;
			}
			if (typeof currentRule.options === "object" && typeof rule.options === "object") currentRule.options = {
				...currentRule.options,
				...rule.options
			};
			else currentRule.options = rule.options;
			currentRule.route = rule.route;
			currentRule.params = {
				...currentRule.params,
				...layer.params
			};
		} else if (rule.options !== false) routeRules[rule.name] = {
			...rule,
			params: layer.params
		};
	}
	const middleware = [];
	const orderedRules = Object.values(routeRules).sort((a, b) => (a.handler?.order || 0) - (b.handler?.order || 0));
	for (const rule of orderedRules) {
		if (rule.options === false || !rule.handler) continue;
		middleware.push(rule.handler(rule));
	}
	return {
		routeRules,
		routeRuleMiddleware: middleware
	};
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/error/hooks.mjs
function _captureError(error, type) {
	console.error(`[${type}]`, error);
	useNitroApp().captureError?.(error, { tags: [type] });
}
function trapUnhandledErrors() {
	process.on("unhandledRejection", (error) => _captureError(error, "unhandledRejection"));
	process.on("uncaughtException", (error) => _captureError(error, "uncaughtException"));
}
//#endregion
//#region #nitro/virtual/tracing
var tracingSrvxPlugins = [];
//#endregion
//#region node_modules/nitro/dist/presets/node/runtime/node-server.mjs
var _parsedPort = Number.parseInt(process.env.NITRO_PORT ?? process.env.PORT ?? "");
var port = Number.isNaN(_parsedPort) ? 3e3 : _parsedPort;
var host = process.env.NITRO_HOST || process.env.HOST;
var cert = process.env.NITRO_SSL_CERT;
var key = process.env.NITRO_SSL_KEY;
var nitroApp = useNitroApp();
serve({
	port,
	hostname: host,
	tls: cert && key ? {
		cert,
		key
	} : void 0,
	fetch: nitroApp.fetch,
	plugins: [...tracingSrvxPlugins]
});
trapUnhandledErrors();
var node_server_default = {};
//#endregion
export { node_server_default as default };
