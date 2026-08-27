import { o as PLACEHOLDERS } from "./constants-DtYuZSVk.mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { n as LegalPage, r as LegalSection, t as LegalList } from "./LegalPage-Cc7kS9Ww.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/support.delete-account-D2SGhZFV.js
var import_jsx_runtime = require_jsx_runtime();
function DeleteAccountPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(LegalPage, {
		eyebrow: "Support",
		title: "Delete account & data",
		intro: "To delete your Mediceen account and associated personal data, follow the steps below.",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(LegalSection, {
				heading: "Request deletion",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
						className: "space-y-2",
						children: [
							`Email ${PLACEHOLDERS.privacyEmail} from the same email address registered on your account.`,
							"Subject line: Account deletion request",
							"Include your display name (if known), the phone number on your account (if any), and a statement that you want your account permanently deleted."
						].map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "font-display text-sm tabular-nums text-brand",
								children: [i + 1, "."]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: item })]
						}, item))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
						"If you signed up with Google only and cannot email from that address, contact",
						" ",
						PLACEHOLDERS.supportEmail,
						" with proof of account ownership (we will verify manually)."
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "When in-app account deletion is added to the app, this page will be updated to describe that flow first." })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(LegalSection, {
				heading: "What we delete",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "After verifying your identity, we delete or anonymize:" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LegalList, { items: [
					"Account credentials and profile (email, phone number, display name, avatar URL)",
					"Quiz history, answers, scores, bookmarks, streaks, and spaced-repetition data",
					"Leaderboard entries tied to your account"
				] })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LegalSection, {
				heading: "What we may retain",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LegalList, { items: [
					"Aggregated, anonymized statistics that cannot identify you",
					"Security and audit logs for a limited period where required by law or legitimate security needs",
					"Backup copies until overwritten on our normal backup cycle (typically up to 30 days)"
				] })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LegalSection, {
				heading: "Timeline",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "We process verified requests within 30 days and confirm by email when complete." })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LegalSection, {
				heading: "Questions",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: PLACEHOLDERS.privacyEmail })
			})
		]
	}) });
}
//#endregion
export { DeleteAccountPage as component };
