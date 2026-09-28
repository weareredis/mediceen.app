import type { MouseEvent } from "react";

/** Scroll to an in-page id (hash without #). */
export function scrollToHash(hash: string, behavior: ScrollBehavior = "smooth") {
  const id = hash.replace(/^#/, "");
  document.getElementById(id)?.scrollIntoView({ behavior, block: "start" });
}

/**
 * When the URL already matches this home-page hash, the router treats the click
 * as a no-op. Re-scroll instead.
 */
export function onRepeatHashClick(hash: string) {
  const id = hash.replace(/^#/, "");
  return (event: MouseEvent<HTMLAnchorElement>) => {
    if (typeof window === "undefined") return;
    const onHome = window.location.pathname === "/" || window.location.pathname === "";
    if (onHome && window.location.hash === `#${id}`) {
      event.preventDefault();
      scrollToHash(id);
    }
  };
}
