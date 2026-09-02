import { o as PLACEHOLDERS } from "./constants-DtYuZSVk.mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { n as LegalPage, r as LegalSection, t as LegalList } from "./LegalPage-Cc7kS9Ww.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/about-C2Rx4QI2.js
var import_jsx_runtime = require_jsx_runtime();
function AboutPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(LegalPage, {
		eyebrow: "About",
		title: "Our mission",
		intro: "Mediceen exists to give medical entrance aspirants in Nepal a focused, high-quality way to prepare for MECEE-BL — through curated MCQs, evidence-based spaced repetition, and exam-realistic weekly mocks.",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LegalSection, {
				heading: "Phase 1 scope",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Phase 1 covers core undergraduate subjects including Anatomy, Physiology, Pharmacology, Pathology, Biochemistry, Microbiology, and Immunology. Support for additional exams may follow." })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LegalSection, {
				heading: "Who we serve",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LegalList, { items: ["Students use the Mediceen mobile app to practice, review, and compete on weekly mocks.", "Content teams use a separate admin dashboard to ingest past papers, review AI-assisted drafts, and publish the question bank. That dashboard is not open to the public."] })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(LegalSection, {
				heading: "Who we are",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
					PLACEHOLDERS.legalEntityName,
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
					PLACEHOLDERS.registeredAddress
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: ["Questions: ", PLACEHOLDERS.supportEmail] })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LegalSection, {
				heading: "Disclaimer",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Mediceen is an independent learning product. References to MECEE-BL describe the exam format we prepare for; they do not imply official partnership or certification." })
			})
		]
	}) });
}
//#endregion
export { AboutPage as component };
