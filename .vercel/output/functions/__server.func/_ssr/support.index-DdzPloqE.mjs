import { o as PLACEHOLDERS } from "./constants-DtYuZSVk.mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { n as LegalPage, r as LegalSection, t as LegalList } from "./LegalPage-Cc7kS9Ww.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/support.index-DdzPloqE.js
var import_jsx_runtime = require_jsx_runtime();
function SupportPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(LegalPage, {
		eyebrow: "Support",
		title: "Get help",
		intro: `Email us at ${PLACEHOLDERS.supportEmail}. We aim to respond within 2-5 business days. Complex issues (account recovery, data deletion) may take longer.`,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LegalSection, {
				heading: "Before you write",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
					className: "space-y-2",
					children: [
						"The email address on your Mediceen account (if any)",
						"Device model and OS version (e.g. Android 14, iPhone 15, iOS 17)",
						"App version (from Profile or store listing)",
						"A short description of what happened and steps to reproduce",
						"Screenshots if helpful (no passwords in screenshots)"
					].map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "font-display text-sm tabular-nums text-brand",
							children: [i + 1, "."]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: item })]
					}, item))
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LegalSection, {
				heading: "Common topics",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LegalList, { items: [
					"Password reset — Use Forgot password on the login screen.",
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
						"Account deletion — See",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/support/delete-account",
							className: "text-brand underline",
							children: "Delete account & data"
						}),
						" ",
						"or email ",
						PLACEHOLDERS.privacyEmail,
						"."
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
						"FAQ —",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/faq",
							className: "text-brand underline",
							children: "Frequently asked questions"
						}),
						"."
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
						"Privacy —",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/privacy",
							className: "text-brand underline",
							children: "Privacy Policy"
						}),
						"."
					] })
				] })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LegalSection, {
				heading: "Postal address",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
					PLACEHOLDERS.legalEntityName,
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
					PLACEHOLDERS.registeredAddress
				] })
			})
		]
	}) });
}
//#endregion
export { SupportPage as component };
