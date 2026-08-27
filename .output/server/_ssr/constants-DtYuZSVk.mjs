import { n as clsx } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/constants-DtYuZSVk.js
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
/**
* Central configuration for the Mediceen marketing site.
* Placeholders come from the Website & Legal Content Pack (Part 0) and must be
* replaced with real values before publishing.
*/
var SITE = {
	name: "Mediceen",
	tagline: "Practice. Review. Improve.",
	domain: "https://mediceen.app",
	bundleId: "com.mediceen.app"
};
/** Part 0 placeholders — keep as placeholders until legal supplies real values. */
var PLACEHOLDERS = {
	legalEntityName: "Mediceen",
	registeredAddress: "Panipokhari, Kathmandu, Nepal",
	supportEmail: "hello@redisdigital.com",
	privacyEmail: "hello@redisdigital.com",
	publishDate: "2026-08-24",
	governingLaw: "Nepal",
	minimumAge: "10+",
	supabaseRegion: "South Asia (Mumbai)"
};
var DEVELOPER = { name: "Redis Digital" };
var ADDRESS_MAP_URL = "https://maps.app.goo.gl/5aaBp2MfAxmq9Akt9";
/** Store URLs are placeholders until the listings are live (Part 0). */
var STORE_LINKS = {
	appStore: "[APP_STORE_URL]",
	playStore: "[PLAY_STORE_URL]"
};
var isStoreLinkLive = (url) => !url.startsWith("[");
var LEGAL_LAST_UPDATED = "2026-08-17";
var DISCLAIMER = "Mediceen is a study aid for exam preparation. It does not provide medical advice, diagnosis, or treatment. Content is for educational use only. Mediceen is not affiliated with, endorsed by, or operated by MECEE, NMC, or any official exam authority unless explicitly stated by Redis Digital.";
var DRAFT_NOTICE = "Draft — this page requires legal review before publication. Placeholder values in square brackets will be replaced before launch.";
//#endregion
export { LEGAL_LAST_UPDATED as a, STORE_LINKS as c, DRAFT_NOTICE as i, cn as l, DEVELOPER as n, PLACEHOLDERS as o, DISCLAIMER as r, SITE as s, ADDRESS_MAP_URL as t, isStoreLinkLive as u };
