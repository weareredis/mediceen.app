# AGENTS.md — Mediceen.app

This file is the single source of truth for any AI coding assistant (Claude, Cursor, Copilot, Codex, etc.) working on this project. Update it as the project evolves so you never have to re-explain context per tool.

**Docs hygiene (do this without being asked):** After finishing meaningful work, update `AGENTS.md` Current State / Architecture / Conventions as needed, and also update any other project markdown that the change makes stale — especially [README.md](./README.md), [CLAUDE.md](./CLAUDE.md), and [src/routes/README.md](./src/routes/README.md). Prefer proactive sync over waiting for “update the md files.” Do not invent new doc files unless the work truly needs them.

## Project Overview

- **Name:** Mediceen.app
- **What it does:** Marketing/product website for Mediceen, a mobile app (Android + iOS) that helps Nepal medical aspirants prepare for the MECEE-BL entrance exam — MCQ practice, spaced repetition (SM-2), flashcards, weekly timed mock exams, a leaderboard, progress insights, and a daily Word of the Day. The website itself is a client-side frontend with **no backend, database, or auth of its own** — all app-screen content shown on the site is illustrative marketing mockup, not a live connection to the real app's data.
- **Stack:** TanStack Start (React 19), Tailwind v4, GSAP (scroll animations), Vite 8, TypeScript. Package manager is unresolved — see "Conventions" below, confirm before assuming.
- **Home page composition** (`src/routes/index.tsx`): `Hero` → `ProductShowcase` → `JourneySection` → `FinalMomentSection` (owns `id="download"` for Navbar / skip-link anchors). `DownloadSection` has been removed.
- **Repo structure:**
  - `src/routes/` — file-based routes (`index.tsx`, `about.tsx`, `faq.tsx`, `privacy.tsx`, `terms.tsx`, `cookies.tsx`, `licenses.tsx`, `support.index.tsx`, `support.delete-account.tsx`, `__root.tsx`)
  - `src/components/sections/` — **active on home:** `Hero.tsx`, `ProductShowcase.tsx`, `JourneySection.tsx`, `FinalMomentSection.tsx`. **Unused leftovers (not imported):** `PracticeSection`, `RecallSection`, `ReviewSection`, `MockSection`, `ProgressSection`, `WordOfTheDaySection` (feature coverage now lives inside `ProductShowcase`)
  - `src/components/product/` — phone-mockup Experiences used by Hero/ProductShowcase: `FlashcardExperience`, `ResultsExperience`, `ProgressExperience`, `ReviewQueueExperience`, `LeaderboardExperience`, `WordExperience`, `McqExperience`, `MockTestExperience`, plus `JourneyPath`. **Unused:** `ProfileExperience`, `ProfileLeaderboardExperience`
  - `src/components/ui/` — shared primitives (`PhoneMockup.tsx`, `Picture.tsx`, `StyledQrCode.tsx`, `SectionHeading.tsx`, `StoreBadge.tsx`, `brand-button.tsx`, etc.) plus a large shadcn-style set; prefer existing site primitives over inventing new ones
  - `src/components/layout/` — `Navbar.tsx`, `Footer.tsx`, `PageContainer.tsx`
  - `src/lib/constants.ts` — site config including `STORE_LINKS`, `QR_DESTINATION` (Hero QR + FinalMoment tablet CTA; replace when a single store redirect is ready), legal placeholders, `DISCLAIMER` (Footer)
  - `src/data/product.ts` — shared mock content (word of the day, leaderboard rows, demo questions/flashcards, etc.) used across multiple Experience components — reuse this rather than hardcoding parallel data
  - `src/data/faq.ts`, `src/data/navigation.ts` — FAQ copy and primary/footer nav items
  - `src/animations/` — **active:** `gsap.ts`, `heroTimeline.ts`, `journeyTimeline.ts`. **Only referenced by unused sections:** `practiceTimeline`, `recallTimeline`, `reviewTimeline`, `mockTimeline`, `progressTimeline`
  - `src/router.tsx`, `src/routeTree.gen.ts` (auto-generated, never hand-edit), `src/server.ts` (custom SSR error wrapper)
  - `vite.config.ts` — wrapped by `@lovable.dev/vite-tanstack-config` (see Architecture Notes)
  - `design-refs/` — designer comps (`Light-design.jpg`, `Dark-design.jpg` for FinalMoment desktop; `IMG_6718.PNG` / `IMG_6719.PNG` for DLR mobile collage refs); **not** served from `public/`, do not deploy as site assets
  - `public/` — FinalMoment devices `macbook|iphone|samsung|tablet-{light,dark}.{png,webp}`; also logos, store badges, og-image, flashcard/results assets; `capsule.png` (full art) + `capsule-cursor.png` (32×32 CSS cursor, no WebP). Orphan / unused assets may exist (`lp-mock-*`, etc.) — do not reintroduce them without checking references

## Current State (update this often — this is the important part)

- **What's in progress right now:** Re-verify desktop PageSpeed (prior 91 → 64 drop after autoCodeSplitting + QR redesign) with FinalMoment’s optimized device WebPs in place — multiple runs + LCP/TBT/FCP/Speed Index before concluding.
- **Last completed:**
  - FinalMoment mobile collage settled (`md:hidden`, decorative — **no** store CTAs): full-bleed past `PageContainer` (`-mx-6` / `w-[calc(100%+3rem)]`, `sm:` equivalents) so devices clip at the viewport edge; stage `h-[min(165vw,48rem)]`; phones ~34% width inset ~14%; MacBook `top ~53%` / `left ~-8%`; tablet `top ~58%` / `left ~78%` (`-translate-x-1/2`); soft drop-shadows + staggered GSAP enter; section `pt-28 pb-0` on mobile (brand-wash meets footer, no dead gap). Desktop (`md+`, `sm:py-32`) unchanged spaced 4-device hover gallery + “Get the app” badges. Refs: `design-refs/IMG_6718.PNG`, `IMG_6719.PNG` (+ Light/Dark comps for desktop).
  - Added brand capsule custom cursor (`cursor-capsule` in `styles.css`, asset `public/capsule-cursor.png`) on download/store conversion surfaces only: Navbar **Download App**, Hero QR card, live `StoreBadge` links, and FinalMoment **desktop** live “Get the app” badges + device hit areas (not on the mobile collage). Gated with `@media (pointer: fine)`. Not sitewide; not on nav/legal/utility chrome or ProductShowcase mockups. CSS `cursor: url()` uses PNG only — no WebP/`<Picture>` pair (unlike content images).
  - Removed `DownloadSection` entirely. Home ends at `FinalMomentSection`, which now carries `id="download"` (+ `scroll-mt-24`) so Navbar hash links and the root skip link keep working. Store CTAs live on FinalMoment **desktop** device badges; disclaimer remains in `Footer` only.
  - Redesigned `FinalMomentSection` into a spaced 4-device gallery (MacBook / iPhone / Samsung / tablet) matching designer comps in `design-refs/` (not deployed). Light/dark device assets live in `public/` as PNG+WebP pairs via `<Picture>`. DLR-inspired hover: active device lifts, siblings dim; “Get the app” pill badges (not store icons) appear under iPhone → `STORE_LINKS.appStore`, Samsung → `STORE_LINKS.playStore`, tablet → `QR_DESTINATION`; MacBook has no CTA. Badge sits as a sibling under the image (`top-full`), not overlaid on the device. Light mode uses deep `brand-ink` fill; dark mode uses brighter `bg-brand`. Moved `QR_DESTINATION` into `src/lib/constants.ts` (shared by Hero QR card + tablet CTA). Old `PhoneMockup`/`ProfileExperience` usage removed from this section.
  - Migrated hosting from cPanel (Node.js/Passenger) to Vercel; DNS nameservers now point to Vercel
  - `support@mediceen.app` mailbox set up via the _existing_ cPanel account's mail server (not Vercel, not a third-party like Zoho) — required a manual `mail` A record in Vercel's DNS pointing at the cPanel server IP (`182.93.80.120`), since Vercel's wildcard ALIAS silently swallows unlisted subdomains
  - SEO pass: H1/body keyword alignment, `og:image`/`twitter:image`, `SoftwareApplication` + `Organization` JSON-LD, WebP/PNG fallback via a shared `<Picture>` component (all raw `<img>` call sites converted except the QR code and a third-party-generated QR image)
  - Fixed a real accessibility bug: `ProductShowcase.tsx`'s desktop layout stacks all 8 phone screens with `aria-hidden` + `opacity-0` for inactive ones, but didn't block keyboard focus — added `inert` to fully block it (also fixed Lighthouse's "Agentic Browsing" desktop score)
  - Enabled TanStack Router's `autoCodeSplitting` (via `router.autoCodeSplitting: true` inside the `tanstackStart` config in `vite.config.ts`) — previously every route (including legal/support pages) was statically bundled into one shared chunk loaded on every page
  - Rebuilt `ProgressExperience`, `ResultsExperience`, `WordExperience`, and the Hero phone screen to match new Figma designs; `LeaderboardExperience` confirmed already dark-mode-token-clean
  - Redesigned the Hero section's QR code using the `qr-code-styling` library (brand-colored dots/corners, transparent background, dark-mode-reactive via a `MutationObserver` watching the `dark` class) inside a glassmorphism card
  - Google Play Console store listing fully complete (icon, descriptions, feature graphic, screenshots, content rating, data safety, privacy policy, category/tags, contact details)
- **Known issues / blockers:**
  - Desktop PageSpeed performance regression (91 → 64 after autoCodeSplitting + QR redesign) — unconfirmed; re-check with FinalMoment WebPs live
  - `dashboard.mediceen.app` subdomain nameserver migration to Vercel was recently completed by a senior team member; propagation should be settled but hasn't been explicitly re-verified since
  - `ProductShowcase.tsx` renders its content twice in the DOM (once for the desktop sticky-scroll layout, once for the mobile stacked layout) — causes a Seobility duplicate-content warning; judged low real-world SEO impact and deliberately left alone
  - Several unused section/Experience/timeline files remain in the repo (see Repo structure) — safe to delete later, but do not wire them back onto the home page without an explicit design decision
- **Next planned step:** Confirm the desktop perf regression is real or noise. Once confirmed live Play Store + App Store URLs exist, replace `STORE_LINKS` / `QR_DESTINATION` placeholders in `constants.ts` and add the `sameAs` field (currently missing) to the `SoftwareApplication` JSON-LD in `__root.tsx`. Optionally clean unused sections/assets.

## Conventions

- **Docs:** Keep markdown current as part of the task — see the docs-hygiene note at the top of this file. Do not wait for an explicit “update md” request when work changes project state, structure, or user-facing behavior.
- **Package manager:** **Unresolved — confirm with the team before assuming.** `bunfig.toml`/`bun.lock` exist and were the original documented convention, but recent local builds were run with plain `npm run build` against an `npm`-style `node_modules`. Don't assume one or the other; ask if it matters for the task at hand.
- **Test command:** None — no automated testing (Vitest, Jest, Playwright, etc.) is set up yet. This is a deliberate choice for now, not an oversight; revisit if the project grows more complex business logic worth guarding with tests.
- **Lint/format:** `npm run lint` (ESLint) / `npm run format` (Prettier — `prettier --write .`)
- **Code style notes:**
  - Every phone-mockup "Experience" component uses **`cqw` (container-query width) units**, not `rem`/`px`, so components scale correctly inside `PhoneMockup`'s `@container` — follow this pattern for any new Experience component
  - **Always use semantic CSS tokens** (`bg-card`, `text-brand-ink`, `text-muted-foreground`, `border-border`, `bg-surface-2`, etc.) defined in `styles.css`, never raw Tailwind grays (`gray-900`, `slate-500`, etc.) — raw grays break dark mode, since `styles.css` defines separate `:root` and `.dark` values for every semantic token
  - Icons: `lucide-react`, consistently, across all components
  - Images: use the shared `<Picture src="/name">` component (renders `.webp` with a `.png` fallback) instead of raw `<img>`, for every static local asset — exceptions are third-party-generated images (e.g., a remote QR API) with no local file pair, and CSS custom cursors (`cursor: url(...)`, e.g. `capsule-cursor.png`) which browsers expect as PNG/CUR/ICO and do not go through `<Picture>`
  - Custom cursor: reuse the `cursor-capsule` utility for download/store CTAs only; do not apply sitewide or invent a second cursor asset without design intent
  - Reuse shared mock data from `src/data/product.ts` (e.g., `wordOfTheDay`, `quizReviewsDueTotal`, `flashcardReviewSummary`) rather than hardcoding parallel numbers in multiple components — several past inconsistencies came from this being skipped
- **Branching/commit convention:** Not yet established — ask before assuming a format.

## Architecture Notes

- **`vite.config.ts` is wrapped by `@lovable.dev/vite-tanstack-config`** (a public npm package, MIT licensed). The project was originally scaffolded on Lovable.dev; all _active_ connections to Lovable (OAuth, git-sync, etc.) have been cut, but this config wrapper is deliberately still in use — fully removing it and hand-writing a plain `vite.config.ts` was estimated at 6–8 hours of work and is intentionally deferred, not forgotten. Config overrides are passed through via `defineConfig({ tanstackStart: {...}, nitro: {...} })` — this is how `nitro.preset` and TanStack Router's `autoCodeSplitting` were both configured.
- **Nitro preset is `"vercel"`** (changed from `"node-server"`, which was correct for the old cPanel/Passenger hosting but wrong for Vercel's Build Output format).
- **DNS is authoritative on Vercel, not cPanel.** Nameservers were switched during the hosting migration. Any new DNS record (MX, TXT, A, CNAME) must be added in **Vercel's dashboard DNS records for the domain**, not cPanel's Zone Editor — cPanel will still let you edit its own (now-irrelevant) zone file, which does nothing.
- **Vercel's wildcard `*` ALIAS record silently catches any subdomain without its own explicit record** — this caused real bugs twice (mail delivery, and briefly a `dashboard` subdomain issue) before being understood. Any new subdomain needs its own explicit record in Vercel's DNS, or it'll transparently route through Vercel instead of wherever it's actually supposed to go.
- **`PhoneMockup.tsx`** is the shared device-frame for interactive Experience screens (Hero, ProductShowcase, etc.) — ambient glow, fixed 9:18 aspect, `@container` for `cqw`. `FinalMomentSection` does **not** use it; that section uses static designer device images instead.
- **`FinalMomentSection.tsx`** — dual layout: **mobile** absolute overflowing collage full-bleed past `PageContainer` padding (`-mx-6` / `w-[calc(100%+3rem)]`, taller stage `~165vw` so devices aren’t bottom-clipped; section uses `pt-28 pb-0` on mobile so brand-wash meets the footer with no dead gap); **desktop (`md+` / `sm:py-32`)** spaced horizontal gallery with DLR-style hover lift/dim and hover-reveal badges (iPhone → App Store, Samsung → Play Store, tablet → `QR_DESTINATION`; MacBook no CTA). Theme swap via `dark:hidden` / `dark:block` on `<Picture>`. Owns `id="download"`. Keep badge as a sibling under the image (`top-full`), never percentage-overlaid on the PNG. Live store CTAs use `cursor-capsule` (**desktop only** in this section). Do not resurrect a separate Download section unless design asks for it.
- **`cursor-capsule`** (`styles.css`) — brand pill pointer from `public/capsule-cursor.png` (hotspot near NW tip). Applied on Navbar Download, Hero QR, live StoreBadge, FinalMoment **desktop** live badges/devices. Touch / coarse pointers fall back to normal `pointer`.
- **`ProductShowcase.tsx`** has two structurally different DOM trees for desktop (sticky-scroll phone via absolute-positioned stacked panels + GSAP `ScrollTrigger`) vs. mobile (stacked, always-visible panels) — this is a known, deliberate tradeoff (see "Known issues" above), not an oversight to "fix" without discussion.

## Do NOT

- Don't hand-edit `src/routeTree.gen.ts` — it's auto-generated and regenerates on every dev/build run.
- Don't hardcode raw Tailwind gray/color classes in components meant to support dark mode — use the semantic tokens from `styles.css`.
- Don't add new `@fontsource` packages (or other dependencies) without checking they're actually used first — an orphaned `@fontsource/baloo-2` import was found and removed; avoid repeating that.
- Don't assume a manual build/deploy has already happened — confirm before assuming the live site reflects local code changes.
- Don't touch DNS/nameservers without first confirming whether Vercel or cPanel is currently authoritative for the zone (see Architecture Notes) — getting this backwards has caused real outages before.
- Don't attempt to fully remove the `@lovable.dev/vite-tanstack-config` wrapper without an explicit go-ahead — it's a known, deliberately deferred, larger task.
- Don't put designer comps back into `public/` (use `design-refs/`) — shipping multi‑MB reference JPGs hurts PageSpeed.

## Environment / Setup

- **Local dev:** `npm run dev` (or `bun run dev` — see package manager note above)
- **Build:** `npm run build` → outputs to `.vercel/output/` (Vercel's Build Output format)
- **Hosting:** Vercel (primary site, auto-deploys from GitHub on push); cPanel account is still active separately, used only for `support@mediceen.app` email
- **Repo:** `github.com/weareredis/mediceen.app` (public)
- **Required env vars:** None. No `.env` file exists in this project.
