import { r as __toESM } from "../_runtime.mjs";
import { l as cn, n as DEVELOPER, o as PLACEHOLDERS, r as DISCLAIMER, s as SITE, t as ADDRESS_MAP_URL } from "./constants-DtYuZSVk.mjs";
import { n as require_jsx_runtime, t as QueryClientProvider } from "../_libs/react+tanstack__react-query.mjs";
import { t as faqItems } from "./faq-BXt-Gp-b.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as StoreBadges, t as Button } from "./StoreBadge-v4vhKgMW.mjs";
import { _ as useRouter, c as HeadContent, d as createRouter, f as Outlet, g as Link, h as createRootRouteWithContext, l as useRouterState, m as createFileRoute, p as lazyRouteComponent, s as Scripts } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { a as Sun, c as Moon, l as Menu, t as X } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-CTfEhVXL.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-CPZIBv2Y.css";
function reportLovableError(error, context = {}) {
	if (typeof window === "undefined") return;
	window.__lovableEvents?.captureException?.(error, {
		source: "react_error_boundary",
		route: window.location.pathname,
		...context
	}, {
		mechanism: "react_error_boundary",
		handled: false,
		severity: "error"
	});
	const message = error instanceof Response ? `Response ${error.status}${error.url ? ` at ${error.url}` : ""}` : error instanceof Error ? error.message : String(error);
	const stack = error instanceof Error ? error.stack : void 0;
	window.__lovableReportRuntimeError?.({
		message,
		...stack !== void 0 && { stack },
		filename: window.location.pathname
	});
}
var primaryNav = [
	{
		label: "Product",
		to: "/",
		hash: "product"
	},
	{
		label: "How It Works",
		to: "/",
		hash: "how-it-works"
	},
	{
		label: "FAQ",
		to: "/faq"
	},
	{
		label: "About",
		to: "/about"
	}
];
var footerNav = [{
	title: "Product",
	items: [
		{
			label: "Product",
			to: "/",
			hash: "product"
		},
		{
			label: "How It Works",
			to: "/",
			hash: "how-it-works"
		},
		{
			label: "About",
			to: "/about"
		},
		{
			label: "FAQ",
			to: "/faq"
		},
		{
			label: "Support",
			to: "/support"
		}
	]
}, {
	title: "Legal",
	items: [
		{
			label: "Privacy",
			to: "/privacy"
		},
		{
			label: "Terms",
			to: "/terms"
		},
		{
			label: "Delete Account",
			to: "/support/delete-account"
		},
		{
			label: "Cookies",
			to: "/cookies"
		},
		{
			label: "Licenses",
			to: "/licenses"
		}
	]
}];
function BrandLogo({ className, markClassName, wordmarkClassName, showWordmark = true }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		className: cn("inline-flex items-center gap-2.5", className),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			src: "/mediceen-mark.png",
			alt: "",
			"aria-hidden": "true",
			className: cn("h-8 w-8 object-contain", markClassName),
			width: 235,
			height: 236,
			loading: "eager",
			decoding: "async"
		}), showWordmark ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			src: "/mediceen-wordmark.png",
			alt: "Mediceen",
			className: cn("h-[1.15rem] w-auto object-contain", wordmarkClassName),
			width: 704,
			height: 110,
			loading: "eager",
			decoding: "async"
		}) : null]
	});
}
function applyTheme(theme) {
	document.documentElement.classList.toggle("dark", theme === "dark");
	document.documentElement.style.colorScheme = theme;
}
/** Light / dark theme switch persisted in localStorage. */
function ThemeToggle({ className }) {
	const [theme, setTheme] = (0, import_react.useState)("light");
	const [mounted, setMounted] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const initial = window.localStorage.getItem("mediceen-theme") ?? (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
		setTheme(initial);
		applyTheme(initial);
		setMounted(true);
	}, []);
	const toggle = () => {
		const next = theme === "dark" ? "light" : "dark";
		setTheme(next);
		applyTheme(next);
		window.localStorage.setItem("mediceen-theme", next);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type: "button",
		onClick: toggle,
		"aria-label": theme === "dark" ? "Switch to light theme" : "Switch to dark theme",
		"aria-pressed": theme === "dark",
		className: cn("inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-surface text-brand-ink transition-colors hover:bg-surface-2", className),
		children: mounted && theme === "dark" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sun, { className: "h-[1.05rem] w-[1.05rem]" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Moon, { className: "h-[1.05rem] w-[1.05rem]" })
	});
}
function Wordmark() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
		to: "/",
		"aria-label": "Mediceen home",
		className: "inline-flex items-center",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BrandLogo, {})
	});
}
function Navbar() {
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	const [open, setOpen] = (0, import_react.useState)(false);
	const pathname = useRouterState({ select: (s) => s.location.pathname });
	(0, import_react.useEffect)(() => {
		const onScroll = () => setScrolled(window.scrollY > 24);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	(0, import_react.useEffect)(() => setOpen(false), [pathname]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: cn("fixed inset-x-0 top-0 z-50 transition-all duration-500", scrolled ? "border-b border-border/70 bg-background/80 backdrop-blur-xl" : "border-b border-transparent bg-background/0"),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
			className: "mx-auto flex h-16 w-full max-w-[76rem] items-center justify-between px-6 sm:px-8",
			"aria-label": "Primary",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Wordmark, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "hidden items-center gap-9 md:flex",
					children: primaryNav.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: item.to,
						...item.hash ? { hash: item.hash } : {},
						className: "text-sm text-muted-foreground transition-colors hover:text-brand",
						activeOptions: {
							exact: true,
							includeHash: false
						},
						activeProps: { className: "text-brand-ink" },
						children: item.label
					}) }, item.label))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ThemeToggle, {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							size: "sm",
							className: "hidden md:inline-flex",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/",
								hash: "download",
								children: "Download App"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: "inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-brand-ink md:hidden",
							"aria-expanded": open,
							"aria-controls": "mobile-menu",
							"aria-label": open ? "Close menu" : "Open menu",
							onClick: () => setOpen((v) => !v),
							children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-5 w-5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "h-5 w-5" })
						})
					]
				})
			]
		}), open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			id: "mobile-menu",
			className: "border-t border-border bg-background/95 backdrop-blur-xl md:hidden",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
				className: "mx-auto flex max-w-[88rem] flex-col gap-1 px-6 py-4",
				children: [primaryNav.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: item.to,
					...item.hash ? { hash: item.hash } : {},
					className: "block rounded-xl px-3 py-3 text-base text-brand-ink hover:bg-surface-2",
					children: item.label
				}) }, item.label)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
					className: "pt-2",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						className: "w-full",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/",
							hash: "download",
							children: "Download App"
						})
					})
				})]
			})
		}) : null]
	});
}
function Footer() {
	const year = (/* @__PURE__ */ new Date()).getFullYear();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "border-t border-border bg-surface",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid w-full max-w-[76rem] gap-12 px-6 py-16 sm:px-8 md:grid-cols-[1.4fr_1fr_1fr_auto]",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BrandLogo, {
						markClassName: "h-9 w-9",
						wordmarkClassName: "h-[1.3rem]"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-sm text-muted-foreground",
						children: SITE.tagline
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 max-w-md text-xs leading-relaxed text-muted-foreground",
						children: DISCLAIMER
					})
				] }),
				footerNav.map((group) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
					"aria-label": group.title,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-brand-ink",
						children: group.title
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-4 space-y-3",
						children: group.items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: item.to,
							...item.hash ? { hash: item.hash } : {},
							className: "text-sm text-muted-foreground transition-colors hover:text-brand",
							children: item.label
						}) }, item.label))
					})]
				}, group.title)),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-sm font-semibold text-brand-ink",
					children: "Download Our App"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-4",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StoreBadges, { className: "flex-col items-start" })
				})] })
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "border-t border-border",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto flex w-full max-w-[88rem] flex-col gap-2 px-6 py-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:px-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
					"© ",
					year,
					" ",
					SITE.name,
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "mx-1.5",
						children: "·"
					}),
					"Powered by ",
					DEVELOPER.name
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: ADDRESS_MAP_URL,
					target: "_blank",
					rel: "noopener noreferrer",
					className: "transition-colors hover:text-brand hover:underline",
					children: PLACEHOLDERS.registeredAddress
				})]
			})
		})]
	});
}
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-7xl font-bold text-foreground",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-xl font-semibold text-foreground",
					children: "Page not found"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "The page you're looking for doesn't exist or has been moved."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Go home"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-xl font-semibold tracking-tight text-foreground",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong on our end. You can try refreshing or head back home."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$9 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "Mediceen - MECEE-BL Medical Entrance Prep" },
			{
				name: "description",
				content: "Practice MCQs, spaced review, flashcards, and weekly MECEE-style mocks. Built for Nepal medical aspirants."
			},
			{
				property: "og:site_name",
				content: "Mediceen"
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [{
			rel: "stylesheet",
			href: styles_default
		}, {
			rel: "icon",
			href: "/favicon.png",
			type: "image/png"
		}],
		scripts: [{
			type: "application/ld+json",
			children: JSON.stringify({
				"@context": "https://schema.org",
				"@type": "Organization",
				name: "Mediceen",
				url: "https://mediceen.app/"
			})
		}]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		suppressHydrationWarning: true,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("head", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("script", { dangerouslySetInnerHTML: { __html: `(function(){try{var t=localStorage.getItem('mediceen-theme')||(window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light');if(t==='dark'){document.documentElement.classList.add('dark');}document.documentElement.style.colorScheme=t;}catch(e){}})();` } })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$9.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(QueryClientProvider, {
		client: queryClient,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: "#download",
				className: "sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-brand focus:px-4 focus:py-2 focus:text-primary-foreground",
				children: "Skip to download"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navbar, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
		]
	});
}
var $$splitComponentImporter$8 = () => import("./routes-DMnTEcCG.mjs");
var title$8 = "Mediceen - MECEE-BL Medical Entrance Prep";
var description$8 = "Practice MCQs, spaced review, flashcards, and weekly MECEE-style mocks. Built for Nepal medical aspirants. Download free.";
var Route$8 = createFileRoute("/")({
	head: () => ({
		meta: [
			{ title: title$8 },
			{
				name: "description",
				content: description$8
			},
			{
				property: "og:title",
				content: title$8
			},
			{
				property: "og:description",
				content: "Practice, review, and mock exams in one app. Verify once at signup; study on your schedule."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:url",
				content: "https://mediceen.app/"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			},
			{
				name: "twitter:title",
				content: title$8
			},
			{
				name: "twitter:description",
				content: description$8
			}
		],
		links: [{
			rel: "canonical",
			href: "https://mediceen.app/"
		}],
		scripts: [{
			type: "application/ld+json",
			children: JSON.stringify({
				"@context": "https://schema.org",
				"@type": "MobileApplication",
				name: "Mediceen",
				applicationCategory: "EducationalApplication",
				operatingSystem: "iOS, Android",
				description: description$8,
				url: "https://mediceen.app/"
			})
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
var $$splitComponentImporter$7 = () => import("./about-C2Rx4QI2.mjs");
var title$7 = "About Mediceen";
var description$7 = "Mediceen helps MECEE-BL aspirants prepare with curated MCQs, spaced repetition, and weekly timed mocks. Learn about our mission.";
var Route$7 = createFileRoute("/about")({
	head: () => ({
		meta: [
			{ title: title$7 },
			{
				name: "description",
				content: description$7
			},
			{
				property: "og:title",
				content: title$7
			},
			{
				property: "og:description",
				content: "Independent MECEE-BL prep for Nepal medical entrance students."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:url",
				content: "https://mediceen.app/about"
			}
		],
		links: [{
			rel: "canonical",
			href: "https://mediceen.app/about"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
var $$splitComponentImporter$6 = () => import("./cookies-DZghAvo3.mjs");
var title$6 = "Cookie Notice - Mediceen";
var description$6 = "Cookie and tracking practices on mediceen.app.";
var Route$6 = createFileRoute("/cookies")({
	head: () => ({
		meta: [
			{ title: title$6 },
			{
				name: "description",
				content: description$6
			},
			{
				property: "og:title",
				content: title$6
			},
			{
				property: "og:description",
				content: description$6
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:url",
				content: "https://mediceen.app/cookies"
			}
		],
		links: [{
			rel: "canonical",
			href: "https://mediceen.app/cookies"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
var $$splitComponentImporter$5 = () => import("./faq-DingloUJ.mjs");
var title$5 = "FAQ - Mediceen";
var description$5 = "Answers about signup, phone verification, weekly mocks, leaderboards, password reset, and account deletion.";
var Route$5 = createFileRoute("/faq")({
	head: () => ({
		meta: [
			{ title: title$5 },
			{
				name: "description",
				content: description$5
			},
			{
				property: "og:title",
				content: "Mediceen FAQ"
			},
			{
				property: "og:description",
				content: description$5
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:url",
				content: "https://mediceen.app/faq"
			}
		],
		links: [{
			rel: "canonical",
			href: "https://mediceen.app/faq"
		}],
		scripts: [{
			type: "application/ld+json",
			children: JSON.stringify({
				"@context": "https://schema.org",
				"@type": "FAQPage",
				mainEntity: faqItems.map((item) => ({
					"@type": "Question",
					name: item.question,
					acceptedAnswer: {
						"@type": "Answer",
						text: item.answer
					}
				}))
			})
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
var $$splitComponentImporter$4 = () => import("./licenses-cFVx65nK.mjs");
var title$4 = "Open Source Licenses - Mediceen";
var description$4 = "Open-source acknowledgments for the Mediceen app.";
var Route$4 = createFileRoute("/licenses")({
	head: () => ({
		meta: [
			{ title: title$4 },
			{
				name: "description",
				content: description$4
			},
			{
				property: "og:title",
				content: title$4
			},
			{
				property: "og:description",
				content: description$4
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:url",
				content: "https://mediceen.app/licenses"
			}
		],
		links: [{
			rel: "canonical",
			href: "https://mediceen.app/licenses"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
var $$splitComponentImporter$3 = () => import("./privacy-Dz5YCmb7.mjs");
var title$3 = "Privacy Policy - Mediceen";
var description$3 = "How Mediceen collects and uses account, learning, phone verification, and diagnostic data.";
var Route$3 = createFileRoute("/privacy")({
	head: () => ({
		meta: [
			{ title: title$3 },
			{
				name: "description",
				content: description$3
			},
			{
				name: "robots",
				content: "index, follow"
			},
			{
				property: "og:title",
				content: title$3
			},
			{
				property: "og:description",
				content: description$3
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:url",
				content: "https://mediceen.app/privacy"
			}
		],
		links: [{
			rel: "canonical",
			href: "https://mediceen.app/privacy"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var $$splitComponentImporter$2 = () => import("./terms-D2bDvyi5.mjs");
var title$2 = "Terms of Service - Mediceen";
var description$2 = "Terms of use for the Mediceen mobile app and website.";
var Route$2 = createFileRoute("/terms")({
	head: () => ({
		meta: [
			{ title: title$2 },
			{
				name: "description",
				content: description$2
			},
			{
				property: "og:title",
				content: title$2
			},
			{
				property: "og:description",
				content: description$2
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:url",
				content: "https://mediceen.app/terms"
			}
		],
		links: [{
			rel: "canonical",
			href: "https://mediceen.app/terms"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitComponentImporter$1 = () => import("./support.index-DdzPloqE.mjs");
var title$1 = "Support - Mediceen";
var description$1 = "Contact Mediceen support for help with your account, app issues, and data requests.";
var Route$1 = createFileRoute("/support/")({
	head: () => ({
		meta: [
			{ title: title$1 },
			{
				name: "description",
				content: description$1
			},
			{
				property: "og:title",
				content: title$1
			},
			{
				property: "og:description",
				content: description$1
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:url",
				content: "https://mediceen.app/support"
			}
		],
		links: [{
			rel: "canonical",
			href: "https://mediceen.app/support"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("./support.delete-account-D2SGhZFV.mjs");
var title = "Delete Account & Data - Mediceen";
var description = "How to request deletion of your Mediceen account and personal data.";
var Route = createFileRoute("/support/delete-account")({
	head: () => ({
		meta: [
			{ title },
			{
				name: "description",
				content: description
			},
			{
				name: "robots",
				content: "index, follow"
			},
			{
				property: "og:title",
				content: "Delete Account - Mediceen"
			},
			{
				property: "og:description",
				content: description
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:url",
				content: "https://mediceen.app/support/delete-account"
			}
		],
		links: [{
			rel: "canonical",
			href: "https://mediceen.app/support/delete-account"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var IndexRoute = Route$8.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$9
});
var AboutRoute = Route$7.update({
	id: "/about",
	path: "/about",
	getParentRoute: () => Route$9
});
var CookiesRoute = Route$6.update({
	id: "/cookies",
	path: "/cookies",
	getParentRoute: () => Route$9
});
var FaqRoute = Route$5.update({
	id: "/faq",
	path: "/faq",
	getParentRoute: () => Route$9
});
var LicensesRoute = Route$4.update({
	id: "/licenses",
	path: "/licenses",
	getParentRoute: () => Route$9
});
var PrivacyRoute = Route$3.update({
	id: "/privacy",
	path: "/privacy",
	getParentRoute: () => Route$9
});
var TermsRoute = Route$2.update({
	id: "/terms",
	path: "/terms",
	getParentRoute: () => Route$9
});
var SupportIndexRoute = Route$1.update({
	id: "/support/",
	path: "/support/",
	getParentRoute: () => Route$9
});
var rootRouteChildren = {
	IndexRoute,
	AboutRoute,
	CookiesRoute,
	FaqRoute,
	LicensesRoute,
	PrivacyRoute,
	TermsRoute,
	SupportDeleteAccountRoute: Route.update({
		id: "/support/delete-account",
		path: "/support/delete-account",
		getParentRoute: () => Route$9
	}),
	SupportIndexRoute
};
var routeTree = Route$9._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
	return createRouter({
		routeTree,
		context: { queryClient: new QueryClient() },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
