import { t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { c as STORE_LINKS, l as cn, u as isStoreLinkLive } from "./constants-DtYuZSVk.mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as Slot } from "../_libs/radix-ui__react-slot.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/StoreBadge-v4vhKgMW.js
var import_jsx_runtime = require_jsx_runtime();
var buttonVariants = cva("inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all duration-300 disabled:pointer-events-none disabled:opacity-50 whitespace-nowrap", {
	variants: {
		variant: {
			primary: "bg-brand text-primary-foreground shadow-soft hover:brightness-110 active:scale-[0.98]",
			outline: "border border-border bg-background/70 text-brand-ink backdrop-blur hover:border-brand hover:bg-brand-soft",
			ghost: "text-brand-ink hover:bg-surface-2",
			success: "bg-success text-primary-foreground hover:brightness-110"
		},
		size: {
			sm: "h-9 px-4 text-sm",
			md: "h-11 px-6 text-[0.95rem]",
			lg: "h-13 px-8 text-base"
		}
	},
	defaultVariants: {
		variant: "primary",
		size: "md"
	}
});
function Button({ className, variant, size, asChild = false, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size
		}), className),
		...props
	});
}
var config = {
	apple: {
		url: STORE_LINKS.appStore,
		src: "/app-store-badge.png",
		alt: "Download Mediceen on the App Store"
	},
	google: {
		url: STORE_LINKS.playStore,
		src: "/google-play-badge.png",
		alt: "Get Mediceen on Google Play"
	}
};
function StoreBadge({ store, className }) {
	const { url, src, alt } = config[store];
	const live = isStoreLinkLive(url);
	const image = /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
		src,
		alt,
		width: 1360,
		height: 410,
		loading: "lazy",
		className: "h-11 w-auto sm:h-12"
	});
	const base = cn("inline-flex items-center rounded-xl transition-all duration-300", live ? "hover:-translate-y-0.5 hover:opacity-90" : "cursor-default opacity-90", className);
	if (!live) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: base,
		title: "Store link will be available at launch",
		"aria-label": `${alt} — coming at launch`,
		children: image
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
		href: url,
		className: base,
		"aria-label": alt,
		rel: "noopener noreferrer",
		target: "_blank",
		children: image
	});
}
function StoreBadges({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("flex flex-wrap items-center gap-3", className),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StoreBadge, { store: "apple" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StoreBadge, { store: "google" })]
	});
}
//#endregion
export { StoreBadges as n, Button as t };
