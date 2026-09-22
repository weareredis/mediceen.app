# Mediceen.app

Public marketing site for **Mediceen** — a mobile app (Android + iOS) that helps Nepal medical aspirants prepare for the MECEE-BL entrance exam.

This repo is **not** the student app and **not** the admin dashboard. Phone screens on the site are illustrative mockups, not live app data.

For AI assistants and detailed project state, see **[AGENTS.md](./AGENTS.md)** (source of truth).

## Stack

- TanStack Start (React 19) + file-based routes
- Tailwind CSS v4 + semantic theme tokens (`styles.css`)
- GSAP / ScrollTrigger
- Vite 8 + TypeScript
- Hosted on **Vercel** (`nitro.preset: "vercel"`)

## Site map

| Route | File |
| ----- | ---- |
| `/` | `src/routes/index.tsx` |
| `/about` | `src/routes/about.tsx` |
| `/faq` | `src/routes/faq.tsx` |
| `/support` | `src/routes/support.index.tsx` |
| `/support/delete-account` | `src/routes/support.delete-account.tsx` |
| `/privacy` | `src/routes/privacy.tsx` |
| `/terms` | `src/routes/terms.tsx` |
| `/cookies` | `src/routes/cookies.tsx` |
| `/licenses` | `src/routes/licenses.tsx` |

### Home page sections (in order)

1. `Hero` — brand, CTA, store badges, QR card, phone mockup, Play Store launch `Notice` modal
2. `ProductShowcase` — sticky-scroll feature tour (8 Experience screens)
3. `JourneySection` — how-it-works path
4. `FinalMomentSection` — `id="download"`; **mobile:** full-bleed decorative DLR-style device collage (no store CTAs; `pt-28 pb-0` meets footer); **desktop:** 4-device hover gallery + “Get the app” badges

There is no separate `DownloadSection` anymore. Navbar / skip-link `#download` targets FinalMoment.

Download / store conversion surfaces (Navbar **Download App**, Hero QR, live store badges, FinalMoment **desktop** live CTAs, Notice poster) use a brand capsule custom cursor (`cursor-capsule` → `public/capsule-cursor.png`). Content images still use `<Picture>` PNG+WebP pairs; the cursor asset is PNG-only (CSS `cursor: url()`).

Legal / support contact: product help → `support@mediceen.app`; privacy & account deletion → `privacy@mediceen.app` (`PLACEHOLDERS` in `constants.ts`). `/support/delete-account` keeps mailto steps and an optional Resend-backed form (email → privacy@; Google/Apple → support@). Auth copy documents email/password, Google, and Sign in with Apple (incl. Hide My Email). Age eligibility is 10+ (`minimumAge: "10"`).

## Layout overview

```
src/
├── routes/                 # TanStack file routes (not src/pages/)
├── components/
│   ├── layout/             # Navbar, Footer, PageContainer
│   ├── sections/           # page sections (see AGENTS.md for active vs unused)
│   ├── product/            # PhoneMockup Experience UIs
│   ├── support/            # DeleteAccountForm
│   └── ui/                 # Picture, PhoneMockup, StoreBadge, Notice, StyledQrCode, …
├── data/                   # product.ts, faq.ts, navigation.ts
├── animations/             # GSAP timelines
├── hooks/
└── lib/                    # constants.ts, delete-account.ts, submit-delete-account.ts, utils, …
public/                     # static assets (PNG + WebP pairs preferred)
design-refs/                # designer comps — do not deploy
```

## Development

```sh
npm i
npm run dev
```

```sh
npm run build    # → .vercel/output/
npm run lint
npm run format
```

No automated test suite yet.

**Env (Vercel / local for form testing):** `RESEND_API_KEY` (required for delete-account form); optional `RESEND_FROM` (default `Mediceen <noreply@mediceen.app>`). Verify `mediceen.app` in Resend first.

Package manager note: `bun.lock` exists historically; recent local work has used npm. Confirm with the team before assuming one.

## Product / copy rules

- Do not invent features, stats, testimonials, rankings, or medical claims.
- Treat planned / in-progress app features as not yet marketable as “available.”
- `STORE_LINKS.playStore` and `QR_DESTINATION` point at the live Play listing; `STORE_LINKS.appStore` is still a placeholder until App Store Connect is live.
- Privacy / deletion mail uses `privacy@mediceen.app`; general support uses `support@mediceen.app`.
- Legal pages may still carry draft/placeholder notices pending legal review.

## Related

- Live site: [https://mediceen.app](https://mediceen.app)
- Repo: [github.com/weareredis/mediceen.app](https://github.com/weareredis/mediceen.app)
- Agent context: [AGENTS.md](./AGENTS.md) · Claude entrypoint: [CLAUDE.md](./CLAUDE.md)
