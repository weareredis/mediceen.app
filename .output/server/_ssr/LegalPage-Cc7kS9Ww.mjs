import { a as LEGAL_LAST_UPDATED, i as DRAFT_NOTICE, o as PLACEHOLDERS } from "./constants-DtYuZSVk.mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as PageContainer } from "./PageContainer-Bd9OWTyw.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/LegalPage-Cc7kS9Ww.js
var import_jsx_runtime = require_jsx_runtime();
/** Quiet, premium layout for the public / legal pages. No scroll choreography. */
function LegalPage({ eyebrow, title, intro, draft = false, showEffectiveDate = false, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "pb-28",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
			className: "brand-wash relative overflow-hidden border-b border-border pb-16 pt-32 sm:pb-20 sm:pt-40",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "grid-fade pointer-events-none absolute inset-0 opacity-40" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PageContainer, {
				width: "prose",
				className: "relative",
				children: [
					eyebrow ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "inline-flex items-center rounded-full border border-brand/25 bg-brand-soft px-3.5 py-1.5 text-[0.66rem] font-semibold uppercase tracking-[0.26em] text-brand",
						children: eyebrow
					}) : null,
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-6 text-balance-tight font-display text-[clamp(2.3rem,5vw,3.5rem)] font-semibold text-brand-ink",
						children: title
					}),
					intro ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 text-[1.05rem] leading-relaxed text-muted-foreground",
						children: intro
					}) : null,
					showEffectiveDate ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-8 text-xs uppercase tracking-[0.16em] text-muted-foreground",
						children: [
							"Effective date: ",
							PLACEHOLDERS.publishDate,
							" · Last updated: ",
							LEGAL_LAST_UPDATED
						]
					}) : null
				]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PageContainer, {
			width: "prose",
			children: [draft ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-10 rounded-2xl border border-teal/40 bg-teal-soft px-5 py-4 text-sm leading-relaxed text-brand-ink shadow-soft",
				children: DRAFT_NOTICE
			}) : null, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-12 space-y-4",
				children
			})]
		})]
	});
}
function LegalSection({ heading, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "rounded-3xl border border-border bg-surface/70 p-6 transition-colors hover:border-brand/30 sm:p-8",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "font-display text-lg font-semibold text-brand-ink",
			children: heading
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-3 space-y-3 text-[0.95rem] leading-relaxed text-muted-foreground",
			children
		})]
	});
}
function LegalList({ items }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
		className: "space-y-2",
		children: items.map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
			className: "flex gap-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-teal" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: item })]
		}, i))
	});
}
//#endregion
export { LegalPage as n, LegalSection as r, LegalList as t };
