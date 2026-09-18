import { useState } from "react";
import { X } from "lucide-react";
import { STORE_LINKS } from "@/lib/constants";
import { Picture } from "@/components/ui/Picture";

export function Notice() {
  const [showNotice, setShowNotice] = useState(true);

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
        aria-label="Mediceen is live on the Play Store"
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
          href={STORE_LINKS.playStore}
          target="_blank"
          rel="noopener noreferrer"
          className="block overflow-hidden rounded-2xl shadow-soft cursor-capsule"
          aria-label="Get Mediceen on Google Play"
        >
          <Picture
            src="/notice-play-light"
            alt="Mediceen is live on the Play Store — get it now"
            className="block h-auto w-full dark:hidden"
          />
          <Picture
            src="/notice-play-dark"
            alt="Mediceen is live on the Play Store — get it now"
            className="hidden h-auto w-full dark:block"
          />
        </a>
      </div>
    </div>
  );
}