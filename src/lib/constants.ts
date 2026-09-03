/**
 * Central configuration for the Mediceen marketing site.
 * Placeholders come from the Website & Legal Content Pack (Part 0) and must be
 * replaced with real values before publishing.
 */

export const SITE = {
  name: "Mediceen",
  tagline: "Practice. Review. Improve.",
  domain: "https://mediceen.app",
  bundleId: "com.mediceen.app",
} as const;

/** Part 0 placeholders — keep as placeholders until legal supplies real values. */
export const PLACEHOLDERS = {
  legalEntityName: "Mediceen",
  registeredAddress: "Panipokhari, Kathmandu, Nepal",
  supportEmail: "support@mediceen.app",
  privacyEmail: "support@mediceen.app",
  publishDate: "2026-08-24",
  governingLaw: "Nepal",
  minimumAge: "10+",
  supabaseRegion: "South Asia (Mumbai)",
} as const;

export const DEVELOPER = {
  name: "Redis Digital",
} as const;

export const DEVELOPER_URL = "https://www.redisdigital.com/";

export const ADDRESS_MAP_URL = "https://maps.app.goo.gl/5aaBp2MfAxmq9Akt9";

/** Store URLs are placeholders until the listings are live (Part 0). */
export const STORE_LINKS = {
  appStore: "[APP_STORE_URL]",
  playStore: "[PLAY_STORE_URL]",
} as const;

export const isStoreLinkLive = (url: string): boolean => !url.startsWith("[");

export const LEGAL_LAST_UPDATED = "2026-08-17";

export const DISCLAIMER =
  "Mediceen is a study aid for exam preparation. It does not provide medical advice, diagnosis, or treatment. Content is for educational use only. Mediceen is not affiliated with, endorsed by, or operated by MECEE, NMC, or any official exam authority unless explicitly stated by Redis Digital.";

export const DRAFT_NOTICE =
  "Draft — this page requires legal review before publication. Placeholder values in square brackets will be replaced before launch.";
