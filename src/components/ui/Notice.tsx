import { useState } from "react";
import { X } from "lucide-react";
import { STORE_LINKS } from "@/lib/constants";
import { Picture } from "@/components/ui/Picture";

export function Notice() {
  const [showNotice, setShowNotice] = useState(true);

  if (!showNotice) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
      {/* Dimmed backdrop — click to dismiss (optional) */}
      <button
        type="button"
        className="absolute inset-0 bg-brand-ink/50 backdrop-blur-[2px]"
        aria-label="Dismiss notice"
        onClick={() => setShowNotice(false)}
      />

      {/* Centered card (like your screenshot) */}
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="notice-title"
        className="relative z-10 w-full max-w-md rounded-2xl border border-border bg-card p-8 text-center shadow-soft"
      >
        <button
          type="button"
          onClick={() => setShowNotice(false)}
          className="absolute right-3 top-3 inline-flex h-8 w-8 items-center justify-center rounded-full border border-border bg-surface text-brand-ink"
          aria-label="Close"
        >
          <X className="h-4 w-4" />
        </button>

        <h2
          id="notice-title"
          className="font-display text-xl font-semibold text-brand-ink sm:text-2xl"
        >
          Mediceen is live on the Play Store
        </h2>
        <p className="mt-2 text-muted-foreground">Get it now</p>

        <a
          href={STORE_LINKS.playStore}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex cursor-capsule"
          aria-label="Get Mediceen on Google Play"
        >
          <Picture
            src="/google-play-badge"
            alt="Get Mediceen on Google Play"
            width={1360}
            height={410}
            className="h-12 w-auto sm:h-14"
          />
        </a>
      </div>
    </div>
  );
}