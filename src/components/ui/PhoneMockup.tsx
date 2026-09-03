import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * Pure CSS/DOM device frame. The app UI passed as children is decorative
 * marketing artwork, not a functional application.
 */
export function PhoneMockup({
  children,
  className,
  screenClassName,
  tilt = "none",
  label = "Mediceen mobile app preview",
  glow = true,
}: {
  children: ReactNode;
  className?: string;
  screenClassName?: string;
  /** Tilt is currently disabled — all phones render straight regardless of this prop. */
  tilt?: "left" | "right" | "none";
  label?: string;
  /** Ambient blurred glow behind the phone. Defaults on; set false to opt out. */
  glow?: boolean;
}) {
  return (
    <div className={cn("relative w-[min(60vw,15rem)] shrink-0", className)}>
      {glow && (
        <>
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -left-[25%] top-[5%] h-[60%] w-[80%] rounded-full bg-brand/60 blur-[70px]"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-[25%] bottom-[5%] h-[55%] w-[75%] rounded-full bg-teal/60 blur-[70px]"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-1/2 h-[70%] w-[70%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand/20 blur-[90px]"
          />
        </>
      )}
      <div
        className="relative aspect-[9/18] w-full overflow-hidden rounded-[2.2rem] p-[3px] bg-[linear-gradient(160deg,oklch(0.86_0.01_260),oklch(0.42_0.02_260)_45%,oklch(0.72_0.01_260))] shadow-phone transition-transform duration-500 ease-out"
        style={{ aspectRatio: "9 / 18" }}
        role="img"
        aria-label={label}
      >
        <div className="h-full w-full rounded-[2.05rem] bg-[oklch(0.18_0.02_260)] p-[5px]">
          <div
            className={cn(
              "@container relative h-full w-full overflow-hidden rounded-[1.75rem] bg-background",
              screenClassName,
            )}
          >
            <div className="pointer-events-none absolute left-1/2 top-2 z-20 h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-[oklch(0.14_0.02_260)] ring-1 ring-[oklch(1_0_0/0.15)]" />
            <div className="pointer-events-none absolute inset-0 z-10 rounded-[1.75rem] bg-[linear-gradient(115deg,oklch(1_0_0/0.35)_0%,transparent_28%,transparent_75%,oklch(1_0_0/0.12)_100%)]" />
            <div className="relative z-0 flex h-full flex-col pt-6">{children}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function PhoneStatusBar({ label }: { label: string }) {
  return (
    <div className="flex items-center justify-between px-5 pb-2 text-[0.62rem] font-medium uppercase tracking-[0.16em] text-muted-foreground">
      <span>{label}</span>
      <span className="flex items-center gap-1">
        <span className="h-1.5 w-1.5 rounded-full bg-success" />
        Mediceen
      </span>
    </div>
  );
}