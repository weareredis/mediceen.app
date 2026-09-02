import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { n as LegalPage } from "./LegalPage-Cc7kS9Ww.mjs";
import { t as faqItems } from "./faq-BXt-Gp-b.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/faq-DingloUJ.js
var import_jsx_runtime = require_jsx_runtime();
function FaqPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LegalPage, {
		eyebrow: "FAQ",
		title: "Frequently asked questions",
		intro: "Signup, weekly mocks, leaderboards, privacy, and account questions.",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "space-y-3",
			children: faqItems.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("details", {
				className: "group rounded-2xl border border-border bg-surface/70 px-5 py-4 transition-colors open:border-brand/30 open:bg-surface hover:border-brand/30 sm:px-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("summary", {
					className: "flex cursor-pointer list-none items-center justify-between gap-4 font-display text-[0.98rem] font-semibold text-brand-ink [&::-webkit-details-marker]:hidden",
					children: [item.question, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						"aria-hidden": true,
						className: "grid h-7 w-7 shrink-0 place-items-center rounded-full border border-brand/25 bg-brand-soft text-brand transition-transform duration-300 group-open:rotate-45",
						children: "+"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-[0.93rem] leading-relaxed text-muted-foreground",
					children: item.answer
				})]
			}, item.question))
		})
	}) });
}
//#endregion
export { FaqPage as component };
