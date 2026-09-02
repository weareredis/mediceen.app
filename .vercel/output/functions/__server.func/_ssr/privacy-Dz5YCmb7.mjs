import { o as PLACEHOLDERS } from "./constants-DtYuZSVk.mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { n as LegalPage, r as LegalSection, t as LegalList } from "./LegalPage-Cc7kS9Ww.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/privacy-Dz5YCmb7.js
var import_jsx_runtime = require_jsx_runtime();
function Table({ head, rows }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "overflow-hidden rounded-2xl border border-border",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
			className: "w-full text-left text-sm",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
				className: "bg-surface-2 text-brand-ink",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
					className: "px-4 py-3 font-medium",
					children: head[0]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
					className: "px-4 py-3 font-medium",
					children: head[1]
				})] })
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", {
				className: "divide-y divide-border",
				children: rows.map((row) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
					className: "px-4 py-3 text-brand-ink",
					children: row[0]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
					className: "px-4 py-3 text-muted-foreground",
					children: row[1]
				})] }, row[0]))
			})]
		})
	});
}
function PrivacyPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(LegalPage, {
		eyebrow: "Legal",
		title: "Privacy Policy",
		showEffectiveDate: true,
		intro: `This Privacy Policy describes how ${PLACEHOLDERS.legalEntityName} (“Mediceen”, “we”, “us”) collects, uses, and protects personal data when you use the Mediceen mobile application (iOS and Android) and our public website at https://mediceen.app.`,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LegalSection, {
				heading: "1. Contact",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
					"Contact: ",
					PLACEHOLDERS.privacyEmail,
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
					"Address: ",
					PLACEHOLDERS.registeredAddress
				] })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LegalSection, {
				heading: "2. Scope",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "This policy applies to students using the mobile app. Staff use a separate admin dashboard governed by internal policies. This policy does not cover third-party websites linked from our app or site." })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(LegalSection, {
				heading: "3. Data we collect",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-display text-base font-semibold text-brand-ink",
						children: "3.1 Account and profile"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "When you register or sign in, we collect:" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LegalList, { items: [
						"Email address and password (password stored in hashed form by our auth provider)",
						"Display name",
						"Avatar image URL (including from Google Sign-In if you use it)",
						"Email verification codes sent during signup (processed in transit; not stored as message content)",
						"Mobile phone number (required verification at signup — see §3.5)"
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "If you sign in with Google, we receive profile information Google shares with us (typically name, email, and profile picture URL). You still complete phone verification before full access to the app." }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-display text-base font-semibold text-brand-ink",
						children: "3.2 Learning and usage data"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "To provide the app, we store:" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LegalList, { items: [
						"Quiz and practice sessions, your answers, scores, and timing",
						"Spaced-repetition schedules and study streaks",
						"Bookmarks",
						"Flashcard ratings and session summaries"
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-display text-base font-semibold text-brand-ink",
						children: "3.3 Technical and diagnostic data"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LegalList, { items: [
						"Authentication session tokens",
						"Server and security logs (may include IP address and device type)",
						"Crash and error reports (if enabled): we use Sentry with sendDefaultPii disabled by default; we may attach your internal user id and email to diagnose issues you report"
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-display text-base font-semibold text-brand-ink",
						children: "3.4 Leaderboards"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "If you participate in leaderboards, your display name and score may be visible to other users for weekly, monthly, or all-time rankings." }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-display text-base font-semibold text-brand-ink",
						children: "3.5 Phone number"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "We require a verified mobile phone number during signup (after you create your account with email or Google). We send a one-time SMS code to confirm you control the number. The verified number is stored on your account in our auth system (Supabase)." }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LegalList, { items: [
						"When: Once at signup (and again if you change your number in Profile, when that feature is available).",
						"Login: Ongoing sign-in uses email/password or Google — we do not send an SMS code every time you log in.",
						"Purpose: Reduce fake accounts, abuse, and duplicate registrations; support account recovery where applicable.",
						"SMS providers: Messages are delivered through third-party SMS gateways (regional providers such as for Nepal and India). Providers process your number and message content only to deliver the OTP.",
						"Marketing: We do not send promotional or marketing SMS.",
						"OTP codes: Verification codes are processed in transit and are not stored as readable message content after verification."
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "If you do not complete phone verification, you may not be able to use the app beyond the signup flow." }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-display text-base font-semibold text-brand-ink",
						children: "3.6 What we do not collect"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "We do not collect payment card data, precise GPS location, contact lists, or use your data for cross-app advertising or sale to data brokers." })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(LegalSection, {
				heading: "4. How we use data",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Table, {
					head: ["Purpose", "Legal basis (summary)"],
					rows: [
						["Create and secure your account", "Contract / legitimate interest"],
						["Deliver practice, mocks, review, insights", "Contract"],
						["Operate leaderboards", "Contract / your participation"],
						["Send transactional email (OTP, password reset)", "Contract"],
						["Verify phone at signup (SMS OTP)", "Contract / legitimate interest"],
						["Monitor reliability and fix bugs", "Legitimate interest"],
						["Prevent fraud and abuse", "Legitimate interest"]
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "We do not use student data to train public AI models. AI tools on our platform are used by administrators only to assist with content ingestion (e.g. extracting questions from past papers) — not by students in the mobile app." })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(LegalSection, {
				heading: "5. Third-party service providers",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "We use trusted processors, including:" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Table, {
						head: ["Provider", "Purpose"],
						rows: [
							["Supabase", "Authentication, database, and API hosting"],
							["Google", "Optional Sign-In"],
							["Resend (via Supabase Auth)", "Transactional email"],
							["SMS delivery providers", "One-time phone verification at signup"],
							["Sentry (optional)", "Error monitoring"],
							["Expo / EAS", "App build and update delivery"]
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
						"These providers process data on our behalf under their own terms and security measures. Data may be stored in ",
						PLACEHOLDERS.supabaseRegion,
						" and other regions where these providers operate."
					] })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LegalSection, {
				heading: "6. Retention",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "We retain account and learning data while your account is active. If you request deletion, we delete or anonymize personal data within a reasonable period, except where law requires longer retention (e.g. security logs)." })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LegalSection, {
				heading: "7. Security",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "We use industry-standard measures including encryption in transit (HTTPS/TLS), access controls, and row-level security on our database so users can only access their own data where applicable. No method of transmission over the Internet is 100% secure." })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(LegalSection, {
				heading: "8. Your rights",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Depending on applicable law, you may have the right to:" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LegalList, { items: [
						"Access a copy of your personal data",
						"Correct inaccurate data (e.g. display name in Profile)",
						"Request deletion of your account and associated data",
						"Object to or restrict certain processing",
						"Lodge a complaint with a supervisory authority"
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
						"To exercise these rights, contact ",
						PLACEHOLDERS.privacyEmail,
						" or follow the delete-account process."
					] })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LegalSection, {
				heading: "9. Children",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
					"Mediceen is not directed at children under ",
					PLACEHOLDERS.minimumAge,
					". We do not knowingly collect data from anyone below that age. Contact us if you believe we have collected a child's data in error."
				] })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LegalSection, {
				heading: "10. International transfers",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "If you use Mediceen from outside Nepal, your data may be processed in Nepal and in countries where our providers host infrastructure. We take steps to protect data in line with this policy." })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LegalSection, {
				heading: "11. Changes",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "We may update this policy. We will post the new version at https://mediceen.app/privacy and update the “Last updated” date. Continued use after changes means you accept the updated policy where permitted by law." })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LegalSection, {
				heading: "12. Contact",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
					"Privacy questions: ",
					PLACEHOLDERS.privacyEmail,
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
					"General support: ",
					PLACEHOLDERS.supportEmail,
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
					PLACEHOLDERS.legalEntityName,
					", ",
					PLACEHOLDERS.registeredAddress
				] })
			})
		]
	}) });
}
//#endregion
export { PrivacyPage as component };
