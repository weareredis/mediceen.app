# Routes

TanStack Start uses **file-based routing**. Every `.tsx` file in this directory
defines a route. Do **not** create `src/pages/`, `src/routes/_app/index.tsx`, or
`app/layout.tsx` — those are Next.js / Remix conventions. The only root layout
is `src/routes/__root.tsx`.

## This project

| File | URL |
| ---- | --- |
| `index.tsx` | `/` |
| `about.tsx` | `/about` |
| `faq.tsx` | `/faq` |
| `support.index.tsx` | `/support` |
| `support.delete-account.tsx` | `/support/delete-account` |
| `privacy.tsx` | `/privacy` |
| `terms.tsx` | `/terms` |
| `cookies.tsx` | `/cookies` |
| `licenses.tsx` | `/licenses` |
| `__root.tsx` | app shell — wraps every page; preserve `<Outlet />` |

Home (`index.tsx`) renders: `Hero` (includes Play Store `Notice` modal) → `ProductShowcase` → `JourneySection` → `FinalMomentSection`.
`FinalMomentSection` owns `id="download"` (Navbar / skip-link target). On mobile it is a full-bleed decorative device collage (no store CTAs; section `pb-0` so brand-wash meets the footer); on desktop it is the 4-device hover gallery with “Get the app” badges — see AGENTS.md.
`__root.tsx` also has a “Skip to download” link (`#download`) — visually hidden until keyboard focus (`sr-only` / `focus:not-sr-only`).

Legal routes (`privacy`, `terms`, `cookies`, `support/*`) pull contact/age strings from `PLACEHOLDERS` in `src/lib/constants.ts` (`privacyEmail`, `supportEmail`, `minimumAge`). Cookie notice documents Google Analytics 4 on the marketing site.

`__root.tsx` loads gtag (`GA_MEASUREMENT_ID`) in `RootShell` and mounts `GoogleAnalytics` for SPA page views.

`support.delete-account.tsx` keeps the full delete/retain/timeline copy plus mailto steps, and mounts `DeleteAccountForm` under **Request by form**. Submissions go through `src/lib/submit-delete-account.ts` (Resend); email/password → privacy@, Google/Apple → support@. Phone is required for Google/Apple. Ticket only — no auto-delete.

`../routeTree.gen.ts` is auto-generated. Don't edit it by hand.

## TanStack conventions (reference)

| Pattern | Meaning |
| ------- | ------- |
| `users/index.tsx` | `/users` |
| `users/$id.tsx` | `/users/:id` (dynamic — bare `$`, no curly braces) |
| `posts/{-$category}.tsx` | `/posts/:category?` (optional segment) |
| `files/$.tsx` | `/files/*` (splat — read via `_splat` param, never `*`) |
| `_layout.tsx` | layout route (renders children via `<Outlet />`) |
