import { r as __toESM } from "../_runtime.mjs";
import { l as cn, r as DISCLAIMER } from "./constants-DtYuZSVk.mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as PageContainer } from "./PageContainer-Bd9OWTyw.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as StoreBadges, t as Button } from "./StoreBadge-v4vhKgMW.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { d as House, f as Crown, h as Atom, i as Trophy, m as ChartColumn, n as User, o as Star, p as ChevronLeft, r as UserRound, s as SquarePen, t as X, u as ListChecks } from "../_libs/lucide-react.mjs";
import { n as gsapWithCSS, t as ScrollTrigger } from "../_libs/gsap.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-Ce5puOth.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
/**
* Pure CSS/DOM device frame. The app UI passed as children is decorative
* marketing artwork, not a functional application.
*/
function PhoneMockup({ children, className, screenClassName, tilt = "none", label = "Mediceen mobile app preview" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("relative aspect-[9/18] w-[min(60vw,15rem)] shrink-0 overflow-hidden rounded-[2.2rem] p-[3px]", "bg-[linear-gradient(160deg,oklch(0.86_0.01_260),oklch(0.42_0.02_260)_45%,oklch(0.72_0.01_260))]", "shadow-phone transition-transform duration-500 ease-out", tilt === "left" && "[transform:perspective(1600px)_rotateY(7deg)_rotateX(1.5deg)_rotateZ(-1deg)]", tilt === "right" && "[transform:perspective(1600px)_rotateY(-7deg)_rotateX(1.5deg)_rotateZ(1deg)]", className),
		style: { aspectRatio: "9 / 18" },
		role: "img",
		"aria-label": label,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "h-full w-full rounded-[2.05rem] bg-[oklch(0.18_0.02_260)] p-[5px]",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: cn("relative h-full w-full overflow-hidden rounded-[1.75rem] bg-background", screenClassName),
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute left-1/2 top-2 z-20 h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-[oklch(0.14_0.02_260)] ring-1 ring-[oklch(1_0_0/0.15)]" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute inset-0 z-10 rounded-[1.75rem] bg-[linear-gradient(115deg,oklch(1_0_0/0.35)_0%,transparent_28%,transparent_75%,oklch(1_0_0/0.12)_100%)]" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "relative z-0 flex h-full flex-col pt-6",
						children
					})
				]
			})
		})
	});
}
function PhoneStatusBar({ label }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-center justify-between px-5 pb-2 text-[0.62rem] font-medium uppercase tracking-[0.16em] text-muted-foreground",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: label }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: "flex items-center gap-1",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-1.5 w-1.5 rounded-full bg-success" }), "Mediceen"]
		})]
	});
}
var registered = false;
function registerGsap() {
	if (registered || typeof window === "undefined") return;
	gsapWithCSS.registerPlugin(ScrollTrigger);
	registered = true;
}
function prefersReducedMotion() {
	if (typeof window === "undefined" || !window.matchMedia) return false;
	return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}
function isMobileViewport() {
	if (typeof window === "undefined") return false;
	return window.innerWidth < 768;
}
/** Standard entrance for section copy. */
function revealFrom(targets, trigger, reducedMotion) {
	if (reducedMotion) {
		gsapWithCSS.set(targets, {
			opacity: 1,
			y: 0
		});
		return;
	}
	gsapWithCSS.from(targets, {
		opacity: 0,
		y: 24,
		duration: .9,
		ease: "power3.out",
		stagger: .08,
		scrollTrigger: {
			trigger,
			start: "top 75%"
		}
	});
}
/**
* Runs a GSAP scene scoped to a container element.
* Each section owns its own scene; nothing is registered globally.
*/
function useScrollAnimation(build) {
	const ref = (0, import_react.useRef)(null);
	const buildRef = (0, import_react.useRef)(build);
	buildRef.current = build;
	(0, import_react.useLayoutEffect)(() => {
		const root = ref.current;
		if (!root) return;
		registerGsap();
		const reducedMotion = prefersReducedMotion();
		const ctx = gsapWithCSS.context(() => {
			buildRef.current({
				root,
				reducedMotion
			});
		}, root);
		return () => ctx.revert();
	}, []);
	return ref;
}
var heroTimeline = ({ root, reducedMotion }) => {
	const phone = root.querySelector("[data-hero-phone]");
	const copy = root.querySelectorAll("[data-reveal]");
	if (reducedMotion) {
		gsapWithCSS.set([copy, phone], {
			opacity: 1,
			y: 0,
			scale: 1
		});
		return;
	}
	const mobile = isMobileViewport();
	gsapWithCSS.timeline({ defaults: { ease: "power3.out" } }).from(copy, {
		opacity: 0,
		y: 28,
		duration: 1,
		stagger: .09
	}).from(phone, {
		opacity: 0,
		y: 60,
		scale: .94,
		duration: 1.3
	}, .2);
	if (phone) {
		gsapWithCSS.to(phone, {
			y: mobile ? -5 : -10,
			duration: 4,
			ease: "sine.inOut",
			repeat: -1,
			yoyo: true
		});
		gsapWithCSS.to(phone, {
			scale: mobile ? 1.04 : 1.08,
			yPercent: mobile ? 2 : 4,
			ease: "none",
			scrollTrigger: {
				trigger: root,
				start: "top top",
				end: "bottom top",
				scrub: .6
			}
		});
	}
};
/** Illustrative MCQ content for the marketing mockups (not a live question bank). */
var demoQuestions = [
	{
		subject: "Biochemistry",
		difficulty: "Medium",
		stem: "Which vitamin deficiency causes megaloblastic anaemia with neurological signs?",
		options: [
			"Vitamin B12",
			"Vitamin C",
			"Folate",
			"Vitamin K"
		]
	},
	{
		subject: "Physiology",
		difficulty: "Easy",
		stem: "Which ion is primarily responsible for the plateau phase of the cardiac action potential?",
		options: [
			"Calcium",
			"Sodium",
			"Potassium",
			"Chloride"
		]
	},
	{
		subject: "Pharmacology",
		difficulty: "Hard",
		stem: "A competitive antagonist shifts the agonist dose–response curve in which direction?",
		options: [
			"Right, parallel",
			"Left, parallel",
			"Downward only",
			"No shift"
		]
	}
];
var demoFlashcards = [{
	subject: "Health",
	front: "Which organelle is known as the powerhouse of the cell?",
	back: "Mitochondria"
}, {
	subject: "Biochemistry",
	front: "Rate-limiting enzyme of glycolysis",
	back: "Phosphofructokinase-1, allosterically inhibited by ATP and citrate."
}];
var wordOfTheDay = {
	term: "Synapse",
	definition: "The junction between two communicating neurons."
};
var journeySteps = [
	{
		label: "Practice",
		detail: "Filtered MCQ sessions by subject and difficulty."
	},
	{
		label: "Recall",
		detail: "Flashcards rated Easy, Hard, or Missed."
	},
	{
		label: "Review",
		detail: "SM-2 brings questions back when they are due."
	},
	{
		label: "Test",
		detail: "Weekly MECEE-style mock, timed and scored once."
	},
	{
		label: "Results",
		detail: "Score, answer review, and practice-again path."
	},
	{
		label: "Insights",
		detail: "Subject accuracy with 7- and 30-day trends."
	},
	{
		label: "Improve",
		detail: "Focus the next session where it counts."
	}
];
var reviewQueueSummary = { itemsDue: 20 };
var quizReviews = [
	{
		subject: "Anatomy",
		due: 5
	},
	{
		subject: "Biochemistry",
		due: 4
	},
	{
		subject: "Genetics",
		due: 3
	}
];
var flashcardReviewSummary = {
	count: 8,
	subjects: "Anatomy, Physiology and Genetics"
};
var weeklyMock = {
	subject: "Medical Biology",
	totalQuestions: 20,
	daysLeft: 1,
	progress: 0
};
var pastMocks = [
	{
		week: "Week 12",
		date: "20 Jul 2026",
		questions: 20,
		score: 72
	},
	{
		week: "Week 11",
		date: "12 Jul 2026",
		questions: 20,
		score: 50
	},
	{
		week: "Week 5",
		date: "10 Jul 2026",
		questions: 20,
		score: 20
	}
];
var profileUser = {
	initials: "AK",
	name: "Alex Karki",
	email: "alex@medschool.edu",
	questions: 1240,
	accuracy: 76,
	streak: 12,
	rank: 24,
	xp: 9310,
	xpToTop10: 640,
	weeklyGainRank: 1
};
var leaderboardPodium = [
	{
		place: 2,
		name: "Sanjay",
		xp: 17650
	},
	{
		place: 1,
		name: "Priya",
		xp: 18420
	},
	{
		place: 3,
		name: "Anmol",
		xp: 16980
	}
];
function Hero() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		ref: useScrollAnimation(heroTimeline),
		className: "brand-wash relative flex min-h-dvh flex-col  pt-24 sm:pt-28",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "grid-fade pointer-events-none absolute inset-0 opacity-50" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageContainer, {
				width: "wide",
				className: "relative flex flex-1 items-center",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid w-full items-center gap-16 lg:grid-cols-[1.05fr_0.95fr]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "max-w-xl",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[0.72rem] font-semibold uppercase tracking-[0.32em] text-brand",
								"data-reveal": true,
								children: "Mediceen"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
								className: "mt-6 text-balance-tight font-display text-[clamp(2.8rem,6.5vw,4.8rem)] font-semibold text-brand-ink",
								"data-reveal": true,
								children: "Prepare smarter for MECEE-BL"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-6 max-w-lg text-[clamp(1.02rem,1.4vw,1.2rem)] leading-relaxed text-muted-foreground",
								"data-reveal": true,
								children: "Practice. Review. Improve. Mediceen helps Nepal medical aspirants build recall with MCQs, spaced repetition, flashcards, and weekly MECEE-style mocks."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-9 flex flex-wrap items-center gap-3",
								"data-reveal": true,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									asChild: true,
									variant: "outline",
									size: "lg",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/",
										hash: "product",
										children: "See how it works"
									})
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-8",
								"data-reveal": true,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StoreBadges, {})
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex justify-center lg:justify-end",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							"data-hero-phone": true,
							className: "will-change-transform",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PhoneMockup, {
								className: "w-[min(56vw,14rem)] lg:w-[min(25vw,17.5rem)]",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeroScreen, {})
							})
						})
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-12 sm:h-16" })
		]
	});
}
function HeroScreen() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex h-full flex-col",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PhoneStatusBar, { label: "Home" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "px-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-display text-lg font-semibold text-brand-ink",
					children: "Bad evening"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-[0.68rem] text-muted-foreground",
					children: "Ready for today's set?"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-4 grid grid-cols-2 gap-2 px-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tile, {
					label: "Study streak",
					value: "12 days",
					tone: "success"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tile, {
					label: "Due reviews",
					value: "24",
					tone: "brand"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-3 px-4",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-2xl border border-teal/40 bg-teal-soft p-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[0.58rem] uppercase tracking-[0.2em] text-brand",
							children: "Word of the Day"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 font-display text-sm font-semibold text-brand-ink",
							children: wordOfTheDay.term
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-[0.68rem] leading-snug text-muted-foreground",
							children: wordOfTheDay.definition
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-3 space-y-2 px-4 pb-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
						label: "Practice MCQs",
						meta: "Anatomy · 20 Q"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
						label: "Flashcards",
						meta: "Biochemistry"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
						label: "Weekly MECEE mock",
						meta: "Live now"
					})
				]
			})
		]
	});
}
function Tile({ label, value, tone }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: `rounded-2xl border p-3 ${tone === "success" ? "border-success/30 bg-success-soft" : "border-brand/20 bg-brand-soft"}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-[0.55rem] uppercase tracking-[0.18em] text-muted-foreground",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-1 font-display text-base font-semibold text-brand-ink",
			children: value
		})]
	});
}
function Row({ label, meta }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-center justify-between rounded-xl border border-border bg-surface px-3 py-2.5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-[0.75rem] font-medium text-brand-ink",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-[0.62rem] text-muted-foreground",
			children: meta
		})]
	});
}
var TOTAL_QUESTIONS$1 = 20;
var CURRENT_QUESTION$1 = 1;
var TIME_REMAINING$1 = "1:12";
var SELECTED_INDEX = 0;
function McqExperience() {
	const q = demoQuestions[0];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex h-full flex-col bg-surface",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "bg-card px-5 pb-3 pt-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "w-8 shrink-0",
							"aria-hidden": "true"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex-1 text-center",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-display text-sm font-semibold text-brand-ink",
								children: "Practice MCQ"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-[0.65rem] text-muted-foreground",
								children: [
									"Question ",
									CURRENT_QUESTION$1,
									" of ",
									TOTAL_QUESTIONS$1
								]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: "w-8 shrink-0 text-right text-brand-ink",
							"aria-label": "Close",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, {
								className: "ml-auto h-4 w-4",
								strokeWidth: 2.5
							})
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-3 flex items-center gap-2.5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "h-1 flex-1 overflow-hidden rounded-xl bg-surface-2",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "h-full rounded-xl bg-brand",
							style: { width: `${CURRENT_QUESTION$1 / TOTAL_QUESTIONS$1 * 100}%` }
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-xs text-brand-ink",
						children: TIME_REMAINING$1
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "px-4 pt-4",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					"data-mcq-card": true,
					className: "rounded-2xl border border-border bg-surface-2 p-4 shadow-soft",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "inline-block rounded-full bg-success-soft px-3 py-1 text-[0.68rem] font-medium text-success",
							children: q.subject
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-3 font-display text-[0.85rem] font-semibold leading-snug text-brand-ink",
							children: q.stem
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-4 space-y-2",
							children: q.options.map((opt, oi) => {
								return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									"data-mcq-option": oi,
									className: `flex items-center gap-2.5 rounded-xl border px-3 py-2 text-[0.76rem] font-medium ${oi === SELECTED_INDEX ? "border-success bg-success-soft text-brand-ink" : "border-border bg-card text-brand-ink"}`,
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-surface-2 text-[0.65rem] font-bold text-muted-foreground",
										children: String.fromCharCode(65 + oi)
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "leading-snug",
										children: opt
									})]
								}, opt);
							})
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "flex-1" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "border-t border-border bg-card px-4 py-4",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "rounded-2xl border border-border bg-card px-5 py-2.5 text-sm font-semibold text-brand-ink",
						children: "Skip"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "flex-1 rounded-2xl bg-gradient-to-r from-success to-teal py-2.5 text-sm font-semibold text-white",
						children: "Confirm answer"
					})]
				})
			})
		]
	});
}
var TOTAL_QUESTIONS = 20;
var CURRENT_QUESTION = 1;
var TIME_REMAINING = "1:12";
var STREAK = 5;
function FlashcardExperience() {
	const card = demoFlashcards[0];
	const progress = CURRENT_QUESTION / TOTAL_QUESTIONS * 100;
	const [flipped, setFlipped] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex h-full flex-col bg-card",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "px-4 pb-2 pt-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "w-6 shrink-0",
							"aria-hidden": "true"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex-1 text-center",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-display text-xs font-semibold text-brand-ink",
								children: "Practice Flash card"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-[0.58rem] text-muted-foreground",
								children: [
									"Question ",
									CURRENT_QUESTION,
									" of ",
									TOTAL_QUESTIONS
								]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: "w-6 shrink-0 text-right text-brand-ink",
							"aria-label": "Close",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, {
								className: "ml-auto h-3.5 w-3.5",
								strokeWidth: 2.5
							})
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-2 flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "h-1 flex-1 overflow-hidden rounded-xl bg-surface-2",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "h-full rounded-xl bg-brand",
							style: { width: `${progress}%` }
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-[0.65rem] text-brand-ink",
						children: TIME_REMAINING
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex justify-center pb-2",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "flex items-center gap-1 rounded-full bg-card px-2.5 py-1 text-xs font-extrabold text-brand-ink shadow-soft",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						"aria-hidden": "true",
						children: "🔥"
					}), STREAK]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "relative flex flex-1 items-center justify-center px-6",
				style: { perspective: "1200px" },
				"data-card-scene": true,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative aspect-[4/5] w-[68%]",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "absolute inset-0 translate-x-1 translate-y-0.5 rotate-2 rounded-[1.4rem] bg-brand/30",
							"aria-hidden": "true"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "absolute inset-0 -translate-x-0.5 translate-y-0.5 -rotate-2 rounded-[1.4rem] bg-surface-2 shadow-soft",
							"aria-hidden": "true"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							"data-card-inner": true,
							onClick: () => setFlipped((f) => !f),
							"aria-pressed": flipped,
							"aria-label": flipped ? "Show question" : "Reveal answer",
							className: "relative h-full w-full cursor-pointer pointer-events-auto transition-transform duration-500 ease-out",
							style: {
								transformStyle: "preserve-3d",
								transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)"
							},
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Face, {
								className: "border-none bg-success shadow-soft outline outline-2 -outline-offset-2 outline-success",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-start justify-between",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "rounded-3xl bg-white/40 px-2 py-0.5 text-[0.52rem] font-extrabold text-success",
											children: card.subject
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, {
											className: "h-3 w-3 fill-yellow-400 text-yellow-400",
											"aria-hidden": "true"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-4 flex-1 text-center font-display text-[0.68rem] font-extrabold leading-snug text-white",
										children: card.front
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-center text-[0.48rem] font-extrabold uppercase tracking-wide text-white/75",
										children: "Tap to reveal answer"
									})
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Face, {
								className: "border-none bg-success shadow-soft outline outline-2 -outline-offset-2 outline-success",
								style: { transform: "rotateY(180deg)" },
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Atom, {
										className: "absolute left-2 top-2 h-6 w-6 text-white/25",
										strokeWidth: 1.5,
										"aria-hidden": "true"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Atom, {
										className: "absolute bottom-2 right-2 h-6 w-6 rotate-45 text-white/25",
										strokeWidth: 1.5,
										"aria-hidden": "true"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "flex flex-1 items-center justify-center",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-center font-display text-sm font-extrabold text-white",
											children: card.back
										})
									})
								]
							})]
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "px-4 pb-4 pt-1",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mb-2 text-center text-[0.65rem] text-muted-foreground",
					children: "How well did you know it?"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					"data-card-ratings": true,
					className: "grid grid-cols-3 gap-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Rating, {
							label: "Missed",
							emoji: "🙁",
							tone: "danger"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Rating, {
							label: "Hard",
							emoji: "😐",
							tone: "warning"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Rating, {
							label: "Easy",
							emoji: "😊",
							tone: "success"
						})
					]
				})]
			})
		]
	});
}
function Face({ children, className, style }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: `absolute inset-0 flex flex-col justify-between overflow-hidden rounded-[1.4rem] p-3.5 ${className ?? ""}`,
		style: {
			backfaceVisibility: "hidden",
			...style
		},
		children
	});
}
function Rating({ label, emoji, tone }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		className: `flex flex-col items-center gap-0.5 rounded-lg border py-2 text-center text-[0.6rem] ${{
			success: "border-success/40 bg-success-soft text-success",
			warning: "border-warning/40 bg-warning-soft text-warning",
			danger: "border-destructive/40 bg-destructive-soft text-destructive"
		}[tone]}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-sm",
			"aria-hidden": "true",
			children: emoji
		}), label]
	});
}
function ReviewQueueExperience() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex h-full flex-col bg-surface",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "bg-card px-4 pb-4 pt-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, {
						className: "h-4 w-4 text-brand-ink",
						strokeWidth: 2.5
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display text-sm font-semibold text-brand-ink",
						children: "Today's review"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-1 pl-6 text-[0.68rem] text-muted-foreground",
					children: [reviewQueueSummary.itemsDue, " items due"]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex-1 space-y-4 overflow-hidden px-4 pt-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-2xl border border-border bg-card p-3.5 shadow-soft",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[0.78rem] font-semibold text-brand-ink",
							children: "Why review matters"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-[0.66rem] leading-relaxed text-muted-foreground",
							children: "Questions you got wrong come back at the moment you are most likely to forget them. Clearing today's queue takes about 9 minutes."
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display text-sm font-semibold text-brand-ink",
							children: "Quiz reviews"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "text-[0.7rem] font-semibold text-brand",
							children: [12, " due"]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-2 overflow-hidden rounded-2xl border border-border bg-card shadow-soft",
						children: quizReviews.map((row, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: `flex items-center gap-3 px-3.5 py-2.5 ${i > 0 ? "border-t border-border" : ""}`,
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "flex h-8 w-8 shrink-0 items-center justify-center rounded-[10px] bg-surface-2",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ListChecks, {
										className: "h-4 w-4 text-success",
										strokeWidth: 2
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "flex-1 text-[0.8rem] font-medium text-brand-ink",
									children: row.subject
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "flex h-6 w-6 items-center justify-center rounded-full bg-surface-2 text-[0.66rem] font-semibold text-muted-foreground",
									children: row.due
								})
							]
						}, row.subject))
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display text-sm font-semibold text-brand-ink",
						children: "Flashcard reviews"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-2 rounded-2xl border border-border bg-card p-3.5 shadow-soft",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-[0.78rem] font-semibold text-brand-ink",
							children: [flashcardReviewSummary.count, " cards due"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-0.5 text-[0.66rem] text-muted-foreground",
							children: flashcardReviewSummary.subjects
						})]
					})] })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-around border-t border-border bg-card px-2 py-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(House, {
						className: "h-4 w-4 text-brand-ink",
						strokeWidth: 2
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SquarePen, {
						className: "h-4 w-4 text-muted-foreground",
						strokeWidth: 2
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trophy, {
						className: "h-4 w-4 text-muted-foreground",
						strokeWidth: 2
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChartColumn, {
						className: "h-4 w-4 text-muted-foreground",
						strokeWidth: 2
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(User, {
						className: "h-4 w-4 text-muted-foreground",
						strokeWidth: 2
					})
				]
			})
		]
	});
}
function scoreTone(score) {
	if (score >= 65) return "success";
	if (score >= 35) return "warning";
	return "danger";
}
var badgeClasses = {
	success: "bg-success-soft text-success",
	warning: "bg-warning-soft text-warning",
	danger: "bg-destructive-soft text-destructive"
};
var barClasses = {
	success: "bg-success",
	warning: "bg-warning",
	danger: "bg-destructive"
};
/**
* Weekly test hub: current week's test card plus past attempts with scores.
* Choreographed artwork, not a live scheduler.
*/
function MockTestExperience() {
	const progressPct = weeklyMock.progress / weeklyMock.totalQuestions * 100;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex h-full flex-col bg-surface",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "bg-card px-5 pb-3 pt-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-display text-xl font-bold text-brand-ink",
					children: "Weekly"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-0.5 text-[0.7rem] text-muted-foreground",
					children: "One test a week keeps you sharp"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex-1 space-y-5 overflow-hidden px-4 pt-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-2xl bg-gradient-to-br from-brand via-success/70 to-teal p-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[0.6rem] font-bold uppercase tracking-wider text-white/75",
							children: "This week's test"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display text-lg font-bold text-white",
							children: weeklyMock.subject
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-0.5 text-[0.72rem] text-white/80",
							children: [
								weeklyMock.totalQuestions,
								" questions · ",
								weeklyMock.daysLeft,
								" day left"
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-3 flex items-center justify-between text-[0.62rem] font-medium text-white/80",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Progress" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
								weeklyMock.progress,
								" / ",
								weeklyMock.totalQuestions
							] })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-1 h-1 overflow-hidden rounded-full bg-white/30",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "h-full rounded-full bg-white",
								style: { width: `${progressPct}%` }
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: "mt-3 w-full rounded-2xl bg-white py-2.5 text-sm font-semibold text-brand shadow-soft",
							children: "Start test"
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-display text-sm font-semibold text-brand-ink",
					children: "Past tests"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-2 space-y-2.5",
					children: pastMocks.map((test) => {
						const tone = scoreTone(test.score);
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-xl border border-border bg-card p-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-start justify-between",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-[0.8rem] font-semibold text-brand-ink",
										children: test.week
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "text-[0.62rem] text-muted-foreground",
										children: [
											test.date,
											" · ",
											test.questions,
											" questions"
										]
									})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: `rounded-full px-2 py-0.5 text-[0.62rem] font-semibold ${badgeClasses[tone]}`,
										children: [test.score, "%"]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-2 h-1 overflow-hidden rounded-full bg-surface-2",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: `h-full rounded-full ${barClasses[tone]}`,
										style: { width: `${test.score}%` }
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									className: "mt-2.5 w-full rounded-xl bg-gradient-to-r from-success/60 to-teal/60 py-2 text-[0.75rem] font-medium text-white",
									children: "Review results"
								})
							]
						}, test.week);
					})
				})] })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-around border-t border-border bg-card px-2 py-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(House, {
						className: "h-4 w-4 text-muted-foreground",
						strokeWidth: 2
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SquarePen, {
						className: "h-4 w-4 text-muted-foreground",
						strokeWidth: 2
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trophy, {
						className: "h-4 w-4 text-brand",
						strokeWidth: 2
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChartColumn, {
						className: "h-4 w-4 text-muted-foreground",
						strokeWidth: 2
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(User, {
						className: "h-4 w-4 text-muted-foreground",
						strokeWidth: 2
					})
				]
			})
		]
	});
}
/** End-of-attempt summary: score, answer review, practice-again path. */
function ResultsExperience() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex h-full flex-col",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PhoneStatusBar, { label: "Results" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-1 flex-col items-center justify-center px-6 text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-[0.62rem] font-semibold uppercase tracking-[0.22em] text-brand",
					children: "Attempt submitted"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					"data-result-score": true,
					className: "mt-3 font-display text-5xl font-semibold tabular-nums text-brand-ink",
					children: "78%"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-[0.72rem] text-muted-foreground",
					children: "156 of 200 correct · Weekly MECEE mock"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-7 grid w-full grid-cols-2 gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Metric, {
						label: "Accuracy",
						value: "78%",
						tone: "success"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Metric, {
						label: "Rank",
						value: "#5",
						tone: "brand"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-3 w-full space-y-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "block rounded-xl bg-brand py-2 text-[0.74rem] font-medium text-primary-foreground",
						children: "Review answers"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "block rounded-xl border border-border py-2 text-[0.74rem] text-muted-foreground",
						children: "Practice again (unscored)"
					})]
				})
			]
		})]
	});
}
function Metric({ label, value, tone }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		"data-result-metric": true,
		className: `rounded-xl border p-3 text-left ${tone === "success" ? "border-success/30 bg-success-soft" : "border-brand/25 bg-brand-soft"}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-[0.58rem] uppercase tracking-[0.18em] text-muted-foreground",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-1 font-display text-lg font-semibold text-brand-ink",
			children: value
		})]
	});
}
var trend7 = [
	38,
	44,
	41,
	52,
	58,
	63,
	71
];
var dayLabels = [
	"Mon",
	"Tue",
	"Wed",
	"Thu",
	"Fri",
	"Sat",
	"Sun"
];
var stats = [
	{
		label: "Accuracy",
		value: "76%",
		tone: "success"
	},
	{
		label: "Questions",
		value: "320",
		tone: "default"
	},
	{
		label: "Study time",
		value: "18h",
		tone: "default"
	},
	{
		label: "Day streak",
		value: "7",
		suffix: "🔥",
		tone: "default"
	}
];
function toPath(values, width = 260, height = 64) {
	const max = Math.max(...values);
	const min = Math.min(...values);
	const span = max - min || 1;
	return values.map((v, i) => {
		const x = i / (values.length - 1) * width;
		const y = height - (v - min) / span * height;
		return `${i === 0 ? "M" : "L"}${x.toFixed(1)},${y.toFixed(1)}`;
	}).join(" ");
}
function toAreaPath(values, width = 260, height = 64) {
	return `${toPath(values, width, height)} L${width},${height} L0,${height} Z`;
}
/** Insights: weekly stat tiles plus a 7-day accuracy trend chart. */
function ProgressExperience() {
	const first = trend7[0];
	const last = trend7[trend7.length - 1];
	const delta = last - first;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex h-full flex-col",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "px-5 pt-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-display text-2xl font-bold text-brand-ink",
					children: "Insights"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-0.5 text-[0.7rem] text-muted-foreground",
					children: "Last 7 days"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-5 grid grid-cols-2 gap-3 px-5",
				children: stats.map((stat) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					"data-insight-stat": true,
					className: "rounded-xl bg-card p-3 text-center shadow-soft",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: `font-display text-2xl font-bold tabular-nums ${stat.tone === "success" ? "text-success" : "text-brand-ink"}`,
						children: [stat.value, stat.suffix && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "ml-0.5",
							children: stat.suffix
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-0.5 text-[0.66rem] text-muted-foreground",
						children: stat.label
					})]
				}, stat.label))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-6 px-5",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-display text-base font-semibold text-brand-ink",
					children: "Accuracy trend"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-3 px-5 pb-6",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					"data-insight-chart": true,
					className: "rounded-2xl bg-card p-4 shadow-soft",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "font-display text-xl font-bold tabular-nums text-brand-ink",
							children: [last, "%"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "rounded-xl bg-success-soft px-2 py-0.5 text-[0.62rem] font-semibold text-success",
							children: [
								delta >= 0 ? "+" : "",
								delta,
								" pts this week"
							]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-3 border-t border-border pt-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
							viewBox: "0 0 260 64",
							className: "h-16 w-full overflow-visible",
							"aria-hidden": "true",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
									d: toAreaPath(trend7),
									fill: "var(--success)",
									fillOpacity: .06,
									stroke: "none"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
									"data-insight-line": true,
									d: toPath(trend7),
									fill: "none",
									stroke: "var(--success)",
									strokeWidth: 2.5,
									strokeLinecap: "round",
									strokeLinejoin: "round"
								}),
								trend7.map((v, i) => {
									const max = Math.max(...trend7);
									const min = Math.min(...trend7);
									const span = max - min || 1;
									return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
										cx: i / (trend7.length - 1) * 260,
										cy: 64 - (v - min) / span * 64,
										r: 3,
										fill: "var(--card)",
										stroke: "var(--success)",
										strokeWidth: 2
									}, i);
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-2 flex justify-between text-[0.62rem] text-muted-foreground",
							children: dayLabels.map((day) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: day }, day))
						})]
					})]
				})
			})
		]
	});
}
var rankRingColor = {
	1: "ring-warning",
	2: "ring-border",
	3: "ring-brand/50"
};
var rankBadgeColor = {
	1: "bg-warning",
	2: "bg-muted-foreground",
	3: "bg-brand/70"
};
/** Profile: identity card, leaderboard podium with rank, account settings. */
function ProfileExperience() {
	const first = leaderboardPodium.find((p) => p.place === 1);
	const others = leaderboardPodium.filter((p) => p.place !== 1);
	const progressPct = Math.min(100, profileUser.xp / (profileUser.xp + profileUser.xpToTop10) * 100);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex h-full flex-col overflow-hidden bg-surface",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "border-b border-border bg-card px-4 pb-2.5 pt-4",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-display text-lg font-bold text-brand-ink",
					children: "Profile"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex-1 space-y-3.5 overflow-hidden px-3.5 pt-3.5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-2xl bg-card p-3 shadow-soft",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-start justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Avatar, { size: "h-10 w-10" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[0.78rem] font-semibold text-brand-ink",
									children: profileUser.name
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[0.62rem] text-muted-foreground",
									children: profileUser.email
								})] })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								className: "shrink-0 rounded-full border border-border px-2.5 py-0.5 text-[0.62rem] font-semibold text-success",
								children: "Edit"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-2.5 grid grid-cols-3 divide-x divide-border border-t border-border pt-2.5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
									value: profileUser.questions.toLocaleString(),
									label: "Questions"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
									value: `${profileUser.accuracy}%`,
									label: "Accuracy"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
									value: String(profileUser.streak),
									label: "Day streak"
								})
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display text-[0.85rem] font-bold text-brand-ink",
							children: "Leaderboard"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-1.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "rounded-full border border-border px-2 py-0.5 text-[0.58rem] font-semibold text-brand-ink",
								children: "Weekly"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "rounded-full bg-muted-foreground/80 px-2 py-0.5 text-[0.58rem] font-semibold text-white",
								children: "All time"
							})]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-2 rounded-2xl bg-card p-3 shadow-soft",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-end justify-center gap-3",
							children: [
								others.filter((p) => p.place === 2).map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Podium, {
									entry: p,
									size: "sm"
								}, p.name)),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Podium, {
									entry: first,
									size: "lg",
									crown: true
								}),
								others.filter((p) => p.place === 3).map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Podium, {
									entry: p,
									size: "sm"
								}, p.name))
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-3 rounded-xl bg-success-soft p-2.5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center justify-between",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-1.5",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "text-[0.65rem] font-bold text-muted-foreground",
												children: ["#", profileUser.rank]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Avatar, {
												size: "h-6 w-6",
												iconSize: "h-3 w-3"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-[0.55rem] font-semibold uppercase tracking-wide text-muted-foreground",
												children: "Your rank"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-[0.7rem] font-semibold text-brand-ink",
												children: profileUser.name
											})] })
										]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "text-right",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
											className: "text-[0.65rem] font-bold text-brand-ink",
											children: [profileUser.xp.toLocaleString(), " XP"]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
											className: "text-[0.55rem] text-muted-foreground",
											children: [
												"↑",
												profileUser.weeklyGainRank,
												" this week"
											]
										})]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-2 h-1.5 overflow-hidden rounded-full bg-white/60",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "h-full rounded-full bg-gradient-to-r from-muted-foreground to-success",
										style: { width: `${progressPct}%` }
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "mt-1.5 text-[0.6rem] text-muted-foreground",
									children: [
										"You're",
										" ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "font-semibold text-brand-ink",
											children: [profileUser.xpToTop10, " XP"]
										}),
										" ",
										"away from the top 10."
									]
								})
							]
						})]
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display text-[0.85rem] font-semibold text-brand-ink",
						children: "Accounts"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-around border-t border-border bg-card px-2 py-2.5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(House, {
						className: "h-4 w-4 text-muted-foreground",
						strokeWidth: 2
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SquarePen, {
						className: "h-4 w-4 text-muted-foreground",
						strokeWidth: 2
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trophy, {
						className: "h-4 w-4 text-muted-foreground",
						strokeWidth: 2
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChartColumn, {
						className: "h-4 w-4 text-muted-foreground",
						strokeWidth: 2
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(User, {
						className: "h-4 w-4 text-brand",
						strokeWidth: 2
					})
				]
			})
		]
	});
}
function Stat({ value, label }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "text-center",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "font-display text-sm font-bold text-brand-ink",
			children: value
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-[0.58rem] text-muted-foreground",
			children: label
		})]
	});
}
function Avatar({ size, iconSize = "h-5 w-5" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: `flex ${size} shrink-0 items-center justify-center rounded-full bg-surface-2`,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(UserRound, {
			className: `${iconSize} text-muted-foreground`,
			strokeWidth: 2
		})
	});
}
function Podium({ entry, size, crown }) {
	const dim = size === "lg" ? "h-12 w-12" : "h-9 w-9";
	const iconDim = size === "lg" ? "h-6 w-6" : "h-4 w-4";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col items-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative",
				children: [
					crown && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Crown, {
						className: "absolute -top-3 left-1/2 h-3.5 w-3.5 -translate-x-1/2 fill-warning text-warning",
						strokeWidth: 1.5
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: `flex ${dim} items-center justify-center rounded-full bg-surface-2 ring-4 ring-offset-2 ring-offset-card ${rankRingColor[entry.place]}`,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(UserRound, {
							className: `${iconDim} text-muted-foreground`,
							strokeWidth: 2
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: `absolute -bottom-1 left-1/2 flex h-4 w-4 -translate-x-1/2 items-center justify-center rounded-full text-[0.52rem] font-bold text-white ring-2 ring-card ${rankBadgeColor[entry.place]}`,
						children: entry.place
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-[0.62rem] font-semibold text-brand-ink",
				children: entry.name
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-[0.55rem] text-muted-foreground",
				children: [entry.xp.toLocaleString(), " XP"]
			})
		]
	});
}
var learned = [
	"Bradycardia",
	"Dyspnea",
	"Haemostasis"
];
/** Marketing depiction of the Word of the Day card on the Home screen. */
function WordExperience() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex h-full flex-col",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PhoneStatusBar, { label: "Home" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "px-4",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-2xl border border-teal/40 bg-teal-soft p-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[0.6rem] font-semibold uppercase tracking-[0.2em] text-brand",
							children: "Word of the Day"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 font-display text-xl font-semibold text-brand-ink",
							children: wordOfTheDay.term
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-[0.7rem] leading-relaxed text-muted-foreground",
							children: wordOfTheDay.definition
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "mt-4 inline-flex rounded-full bg-brand px-3 py-1 text-[0.62rem] font-medium text-primary-foreground",
							children: "Learned"
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-5 px-5 text-[0.6rem] font-semibold uppercase tracking-[0.2em] text-muted-foreground",
				children: "Earlier this week"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-2 space-y-2 px-4",
				children: learned.map((term) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "flex items-center justify-between rounded-xl border border-border bg-card px-3 py-2.5 text-[0.75rem] text-brand-ink",
					children: [term, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-[0.6rem] text-success",
						children: "Learned"
					})]
				}, term))
			})
		]
	});
}
var steps = [
	{
		id: "practice",
		eyebrow: "Practice MCQs",
		title: "Practice with purpose.",
		description: "Filter by subject and difficulty, choose how many questions to run, and work through a MECEE-BL scoped bank.",
		points: ["Subject and difficulty filters", "Pick your question count"],
		screen: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(McqExperience, {})
	},
	{
		id: "recall",
		eyebrow: "Flashcards",
		title: "Turn information into recall.",
		description: "Use flashcards to strengthen memory and rate each card as Easy, Hard, or Missed.",
		points: ["Flip to reveal the answer", "Self-rate to shape your next session"],
		screen: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FlashcardExperience, {})
	},
	{
		id: "review",
		eyebrow: "Spaced review",
		title: "Review before you forget.",
		description: "Mediceen uses SM-2 scheduling to bring questions back when they are due for review.",
		points: ["Due-today queue on your Home screen", "Missed items return sooner"],
		screen: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReviewQueueExperience, {})
	},
	{
		id: "mock",
		eyebrow: "Weekly MECEE mock",
		title: "Feel the pressure before exam day.",
		description: "Take the weekly MECEE-style mock with countdown timing, auto-submit, and a cohort paper shared by the whole batch.",
		points: ["Paced toward 200 questions in 3 hours", "Resume if the app is interrupted"],
		screen: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MockTestExperience, {})
	},
	{
		id: "results",
		eyebrow: "Results",
		title: "See the whole attempt.",
		description: "Once the attempt closes, your score, accuracy, and cohort rank arrive with full answer review.",
		points: ["Score, accuracy and rank", "Answer review after submission"],
		screen: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResultsExperience, {})
	},
	{
		id: "progress",
		eyebrow: "Insights",
		title: "Know exactly where you stand.",
		description: "Track subject accuracy and study trends across 7 and 30 days.",
		points: ["Accuracy per subject", "Trends over 7 and 30 days"],
		screen: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProgressExperience, {})
	},
	{
		id: "leaderboard",
		eyebrow: "Leaderboard",
		title: "Consistency deserves recognition.",
		description: "See how you rank against the MECEE-BL cohort weekly, monthly, and all-time — your streak keeps the habit intact.",
		points: ["Daily streak tracking", "Weekly, monthly and all-time boards"],
		screen: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProfileExperience, {})
	},
	{
		id: "word",
		eyebrow: "Word of the Day",
		title: "Learn something new every day.",
		description: "Build medical vocabulary one term at a time with a new Word of the Day on your Home screen.",
		points: ["A new term every morning", "Mark terms as learned"],
		screen: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WordExperience, {})
	}
];
function ProductShowcase() {
	const rootRef = (0, import_react.useRef)(null);
	const [active, setActive] = (0, import_react.useState)(0);
	(0, import_react.useLayoutEffect)(() => {
		const root = rootRef.current;
		if (!root) return;
		registerGsap();
		const reduced = prefersReducedMotion();
		const ctx = gsapWithCSS.context(() => {
			gsapWithCSS.utils.toArray("[data-showcase-panel]").forEach((panel, i) => {
				ScrollTrigger.create({
					trigger: panel,
					start: "top 60%",
					end: "bottom 40%",
					onEnter: () => setActive(i),
					onEnterBack: () => setActive(i)
				});
				if (reduced) return;
				gsapWithCSS.from(panel.querySelectorAll("[data-panel-item]"), {
					opacity: 0,
					y: 22,
					duration: .7,
					ease: "power3.out",
					stagger: .07,
					scrollTrigger: {
						trigger: panel,
						start: "top 72%"
					}
				});
			});
		}, root);
		return () => ctx.revert();
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "product",
		ref: rootRef,
		className: "scroll-mt-24 py-0 sm:py-24",
		"aria-labelledby": "product-showcase-heading",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				id: "product-showcase-heading",
				className: "sr-only",
				children: "Inside the Mediceen app"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PageContainer, {
				width: "wide",
				className: "relative hidden lg:grid lg:grid-cols-[max-content_1fr] lg:gap-14",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "relative",
					children: steps.map((step, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						"data-showcase-panel": true,
						className: "flex min-h-screen items-center justify-start",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, {
							step,
							index: i
						})
					}, step.id))
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "pointer-events-auto sticky top-0 flex h-screen items-center justify-end",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PhoneMockup, {
							className: "w-[min(25vw,17.5rem)]",
							screenClassName: "bg-background",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "relative h-full w-full",
								children: steps.map((step, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: cn("absolute inset-0 transition-opacity duration-500 ease-out", i === active ? "opacity-100" : "pointer-events-none opacity-0"),
									"aria-hidden": i !== active,
									children: step.screen
								}, step.id))
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-6 flex items-center justify-center gap-1.5",
							children: steps.map((step, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: cn("h-1.5 rounded-full transition-all duration-500", i === active ? "w-6 bg-brand" : "w-1.5 bg-border") }, step.id))
						})]
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageContainer, {
				className: "space-y-20 lg:hidden",
				children: steps.map((step, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					"data-showcase-panel": true,
					className: "flex flex-col items-center gap-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, {
						step,
						index: i,
						align: "left",
						className: "max-w-md text-center"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PhoneMockup, {
						className: "w-[min(70.5vw,13rem)]",
						tilt: i % 2 === 0 ? "right" : "left",
						children: step.screen
					})]
				}, step.id))
			})
		]
	});
}
function Copy({ step, index, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("w-full max-w-xl", className),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				"data-panel-item": true,
				className: "flex items-center gap-3 text-[0.72rem] font-semibold uppercase tracking-[0.32em] text-muted-foreground",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "tabular-nums text-brand",
						children: String(index + 1).padStart(2, "0")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-px w-8 bg-border" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-brand",
						children: step.eyebrow
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				"data-panel-item": true,
				className: "mt-4 text-balance-tight font-display text-[clamp(2.8rem,6.5vw,4.8rem)] font-semibold leading-[1.05] text-brand-ink",
				children: step.title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				"data-panel-item": true,
				className: "mt-5 max-w-md text-[clamp(1.02rem,1.4vw,1.2rem)] leading-relaxed text-muted-foreground",
				children: step.description
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				"data-panel-item": true,
				className: "mt-6 space-y-3",
				children: step.points.map((point) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "flex items-start gap-3 text-base text-muted-foreground",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mt-1.5 h-2 w-2 shrink-0 rounded-full bg-success" }), point]
				}, point))
			})
		]
	});
}
function SectionHeading({ eyebrow, title, description, align = "left", className, as: Tag = "h2" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("max-w-2xl", align === "center" && "mx-auto text-center", className),
		"data-reveal-group": true,
		children: [
			eyebrow ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mb-5 text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-brand",
				"data-reveal": true,
				children: eyebrow
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tag, {
				className: cn("text-balance-tight font-display font-semibold text-brand-ink", Tag === "h1" ? "text-[clamp(2.6rem,6.4vw,4.6rem)]" : "text-[clamp(2rem,4.2vw,3.25rem)]"),
				"data-reveal": true,
				children: title
			}),
			description ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-5 text-[clamp(1rem,1.35vw,1.15rem)] leading-relaxed text-muted-foreground",
				"data-reveal": true,
				children: description
			}) : null
		]
	});
}
var VIEW_W = 400;
var VIEW_H = 620;
var PATH_D = "M200 20 C 340 90, 340 200, 200 250 C 60 300, 60 410, 200 460 C 320 500, 330 570, 200 600";
/**
* Curved loop of the Mediceen learning system with a scroll-driven indicator.
* Step labels are anchored to the exact points on the path, so the travelling
* dot lands precisely on each topic as the page is scrolled.
*/
function JourneyPath() {
	const total = journeySteps.length;
	const trackRef = (0, import_react.useRef)(null);
	const [nodes, setNodes] = (0, import_react.useState)([]);
	(0, import_react.useLayoutEffect)(() => {
		const track = trackRef.current;
		if (!track) return;
		const length = track.getTotalLength();
		setNodes(journeySteps.map((_, i) => {
			const t = total > 1 ? i / (total - 1) : 0;
			const p = track.getPointAtLength(length * t);
			return {
				x: p.x,
				y: p.y,
				t
			};
		}));
	}, [total]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
		className: "mx-auto w-full max-w-md space-y-4 md:hidden",
		children: journeySteps.map((step, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
			className: "flex gap-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col items-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mt-1 size-2.5 rounded-full bg-brand" }), i < total - 1 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "w-px flex-1 bg-border" }) : null]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "pb-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-display text-sm font-semibold uppercase tracking-[0.16em] text-brand",
					children: step.label
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-sm leading-snug text-muted-foreground",
					children: step.detail
				})]
			})]
		}, step.label))
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative mx-auto hidden w-full max-w-3xl md:block",
		"data-journey-path": true,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
			viewBox: `0 0 ${VIEW_W} ${VIEW_H}`,
			className: "w-full",
			"aria-hidden": "true",
			preserveAspectRatio: "xMidYMid meet",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					ref: trackRef,
					id: "journey-track",
					"data-journey-track": true,
					d: PATH_D,
					fill: "none",
					stroke: "var(--border)",
					strokeWidth: "2",
					strokeDasharray: "4 8"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					"data-journey-progress": true,
					d: PATH_D,
					fill: "none",
					stroke: "var(--brand)",
					strokeWidth: "2.5",
					strokeLinecap: "round"
				}),
				nodes.map((node, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					"data-journey-node": true,
					cx: node.x,
					cy: node.y,
					r: "4.5",
					fill: "var(--background)",
					stroke: "var(--border)",
					strokeWidth: "2"
				}, `node-${i}`)),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					"data-journey-dot": true,
					r: "7",
					fill: "var(--success)",
					cx: "200",
					cy: "20"
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
			className: "pointer-events-none absolute inset-0",
			children: journeySteps.map((step, i) => {
				const node = nodes[i];
				if (!node) return null;
				const xPct = node.x / VIEW_W * 100;
				const style = node.x < VIEW_W / 2 ? {
					top: `${node.y / VIEW_H * 100}%`,
					right: `${100 - xPct}%`,
					marginRight: "1rem",
					width: `min(15rem, calc(${xPct}% - 1.5rem))`,
					transform: "translateY(-50%)",
					textAlign: "right"
				} : {
					top: `${node.y / VIEW_H * 100}%`,
					left: `${xPct}%`,
					marginLeft: "1rem",
					width: `min(15rem, calc(${100 - xPct}% - 1.5rem))`,
					transform: "translateY(-50%)",
					textAlign: "left"
				};
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					"data-journey-step": true,
					"data-t": node.t,
					className: "absolute rounded-xl border border-border bg-card/85 px-3 py-2 shadow-soft backdrop-blur-sm",
					style,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display text-[0.8rem] font-semibold uppercase tracking-[0.16em] text-brand",
						children: step.label
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-[0.75rem] leading-snug text-muted-foreground",
						children: step.detail
					})]
				}, step.label);
			})
		})]
	})] });
}
/** An indicator travels the loop: Prepare -> Measure -> Improve -> Repeat. */
var journeyTimeline = ({ root, reducedMotion }) => {
	revealFrom(root.querySelectorAll("[data-reveal]"), root, reducedMotion);
	const track = root.querySelector("[data-journey-progress]");
	const dot = root.querySelector("[data-journey-dot]");
	const nodes = root.querySelectorAll("[data-journey-node]");
	const readSteps = () => Array.from(root.querySelectorAll("[data-journey-step]")).map((el, i, arr) => ({
		el,
		t: Number(el.dataset["t"] ?? (arr.length > 1 ? i / (arr.length - 1) : 0))
	}));
	if (reducedMotion || !track) {
		gsapWithCSS.set(root.querySelectorAll("[data-journey-step]"), { opacity: 1 });
		return;
	}
	requestAnimationFrame(() => {
		const steps = readSteps();
		const length = track.getTotalLength();
		gsapWithCSS.set(track, {
			strokeDasharray: length,
			strokeDashoffset: length
		});
		gsapWithCSS.set(steps.map((s) => s.el), { opacity: .3 });
		gsapWithCSS.set(nodes, { opacity: .5 });
		const state = { progress: 0 };
		gsapWithCSS.to(state, {
			progress: 1,
			ease: "none",
			scrollTrigger: {
				trigger: root,
				start: "top 70%",
				end: "bottom 85%",
				scrub: .7
			},
			onUpdate: () => {
				gsapWithCSS.set(track, { strokeDashoffset: length * (1 - state.progress) });
				if (dot) {
					const point = track.getPointAtLength(length * state.progress);
					gsapWithCSS.set(dot, { attr: {
						cx: point.x,
						cy: point.y
					} });
				}
				steps.forEach(({ el, t }, i) => {
					const active = state.progress >= t - .02;
					gsapWithCSS.set(el, { opacity: active ? 1 : .3 });
					const node = nodes[i];
					if (node) gsapWithCSS.set(node, {
						opacity: active ? 1 : .5,
						fill: active ? "var(--brand)" : "var(--background)"
					});
				});
			}
		});
		gsapWithCSS.set(state, {});
	});
};
function JourneySection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "how-it-works",
		ref: useScrollAnimation(journeyTimeline),
		className: "scroll-mt-24 py-28 sm:py-36",
		"aria-labelledby": "journey-heading",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PageContainer, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
			align: "center",
			eyebrow: "The loop",
			title: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				id: "journey-heading",
				children: "The complete Mediceen journey."
			}),
			description: "Prepare, measure, improve, repeat. Each part of the app feeds the next."
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-20",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(JourneyPath, {})
		})] })
	});
}
function FinalMomentSection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		ref: useScrollAnimation(({ root, reducedMotion }) => {
			revealFrom(root.querySelectorAll("[data-reveal]"), root, reducedMotion);
			if (reducedMotion) return;
			const phone = root.querySelector("[data-final-phone]");
			if (!phone) return;
			gsapWithCSS.from(phone, {
				opacity: 0,
				y: 60,
				scale: .95,
				duration: 1.2,
				ease: "power3.out",
				scrollTrigger: {
					trigger: root,
					start: "top 70%"
				}
			});
			gsapWithCSS.to(phone, {
				y: -12,
				duration: 5,
				ease: "sine.inOut",
				repeat: -1,
				yoyo: true
			});
		}),
		className: "brand-wash py-32",
		"aria-labelledby": "final-heading",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PageContainer, {
			className: "flex flex-col items-center text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					id: "final-heading",
					className: "font-display text-[0.72rem] font-semibold uppercase tracking-[0.32em] text-brand",
					"data-reveal": true,
					children: "Mediceen"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-6 text-balance-tight font-display text-[clamp(2rem,4vw,3rem)] font-semibold text-brand-ink",
					"data-reveal": true,
					children: [
						"Your preparation.",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						"Your pace."
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					"data-final-phone": true,
					className: "mt-16",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PhoneMockup, {
						className: "w-[min(56vw,14rem)] lg:w-[min(25vw,17.5rem)]",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex h-full flex-col",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PhoneStatusBar, { label: "Today" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-1 flex-col items-center justify-center gap-3 px-6 text-center",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-display text-3xl font-semibold text-brand-ink",
										children: "12"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-[0.66rem] uppercase tracking-[0.2em] text-muted-foreground",
										children: "Day streak"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mt-4 h-1 w-24 rounded-full bg-success" })
								]
							})]
						})
					})
				})
			]
		})
	});
}
function DownloadSection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "download",
		ref: useScrollAnimation(({ root, reducedMotion }) => revealFrom(root.querySelectorAll("[data-reveal]"), root, reducedMotion)),
		className: "relative scroll-mt-24 overflow-hidden py-28 sm:py-36",
		"aria-labelledby": "download-heading",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "brand-watermark pointer-events-none absolute inset-0",
			"aria-hidden": "true"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PageContainer, {
			className: "relative flex flex-col items-center text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					align: "center",
					eyebrow: "Download",
					title: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						id: "download-heading",
						children: "Ready to prepare?"
					}),
					description: "Your MECEE-BL journey starts here."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-10",
					"data-reveal": true,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StoreBadges, { className: "justify-center" })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-xs text-muted-foreground",
					"data-reveal": true,
					children: "App Store and Google Play links will be published when the listings go live."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-14 max-w-2xl text-xs leading-relaxed text-muted-foreground",
					"data-reveal": true,
					children: DISCLAIMER
				})
			]
		})]
	});
}
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductShowcase, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(JourneySection, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FinalMomentSection, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DownloadSection, {})
	] });
}
//#endregion
export { Home as component };
