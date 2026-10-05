import { useLayoutEffect, useState } from "react";
import { X } from "lucide-react";
import { QR_DESTINATION } from "@/lib/constants";
import { Picture } from "@/components/ui/Picture";

export function Notice() {
  const [showNotice, setShowNotice] = useState(true);

  // Skip the notice if the visitor arrived via the #download anchor (e.g. the
  // OneLink fallback) — they're already on the download CTA, showing a
  // "get the app" popup on top of it is redundant.
  useLayoutEffect(() => {
    if (window.location.hash.startsWith("#download")) {
      setShowNotice(false);
    }
  }, []);

  if (!showNotice) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
      <button
        type="button"
        className="absolute inset-0 bg-brand-ink/50 backdrop-blur-[2px]"
        aria-label="Dismiss notice"
        onClick={() => setShowNotice(false)}
      />

      <div
        role="dialog"
        aria-modal="true"
        aria-label="Download Mediceen"
        className="relative z-10 w-full max-w-4xl"
      >
        <button
          type="button"
          onClick={() => setShowNotice(false)}
          className="absolute -right-2 -top-2 z-20 inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-card text-brand-ink shadow-soft"
          aria-label="Close"
        >
          <X className="h-4 w-4" />
        </button>

        <a
          href={QR_DESTINATION}
          target="_blank"
          rel="noopener noreferrer"
          className="block overflow-hidden rounded-2xl shadow-soft cursor-capsule"
          aria-label="Get Mediceen on the App Store or Google Play"
        >
          <Picture
            src="/notice-app-light"
            alt="Your MECEE-BL prep, now in your pocket. Available on iOS and Android."
            className="block h-auto w-full dark:hidden"
          />
          <Picture
            src="/notice-app-dark"
            alt="Your MECEE-BL prep, now in your pocket. Available on iOS and Android."
            className="hidden h-auto w-full dark:block"
          />
        </a>
      </div>
    </div>
  );
}