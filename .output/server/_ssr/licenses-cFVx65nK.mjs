import { o as PLACEHOLDERS } from "./constants-DtYuZSVk.mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { n as LegalPage, r as LegalSection, t as LegalList } from "./LegalPage-Cc7kS9Ww.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/licenses-cFVx65nK.js
var import_jsx_runtime = require_jsx_runtime();
function LicensesPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LegalPage, {
		eyebrow: "Legal",
		title: "Open-source licenses",
		intro: "Mediceen is built with open-source software. We are grateful to the communities behind projects including, among others:",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(LegalSection, {
			heading: "Acknowledgements",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LegalList, { items: [
				"React Native and Expo — mobile application framework",
				"Supabase — client libraries for auth and data",
				"React — user interface (admin dashboard)"
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
				"A full license notice file (NOTICE) may be shipped with app builds. For third-party license texts, refer to the “Open source licenses” or “Acknowledgements” section in the app settings when available, or contact ",
				PLACEHOLDERS.supportEmail,
				"."
			] })]
		})
	}) });
}
//#endregion
export { LicensesPage as component };
