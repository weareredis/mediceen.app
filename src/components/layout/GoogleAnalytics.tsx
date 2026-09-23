import { useEffect } from "react";
import { useRouterState } from "@tanstack/react-router";
import { GA_MEASUREMENT_ID } from "@/lib/constants";

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

export const GA_SCRIPT_SRC = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;

export const GA_INIT_SCRIPT = `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${GA_MEASUREMENT_ID}',{anonymize_ip:true,send_page_view:false});`;

/** Sends GA4 page_view on first load and TanStack client navigations. */
export function GoogleAnalytics() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const search = useRouterState({ select: (s) => s.location.searchStr });

  useEffect(() => {
    if (typeof window.gtag !== "function") return;
    const pagePath = `${pathname}${search}`;
    window.gtag("event", "page_view", {
      page_path: pagePath,
      page_title: document.title,
    });
  }, [pathname, search]);

  return null;
}
