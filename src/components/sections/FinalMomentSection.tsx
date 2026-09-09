import { ArrowUpRight } from "lucide-react";
import { useState } from "react";
import { PageContainer } from "@/components/layout/PageContainer";
import { Picture } from "@/components/ui/Picture";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { gsap, revealFrom } from "@/animations/gsap";
import { QR_DESTINATION, STORE_LINKS, isStoreLinkLive } from "@/lib/constants";
import { cn } from "@/lib/utils";

type DeviceId = "macbook" | "iphone" | "samsung" | "tablet";

type Device = {
  id: DeviceId;
  alt: string;
  lightSrc: string;
  darkSrc: string;
  width: string;
  className?: string;
  /** Hover CTA href; null = no badge (MacBook). */
  href: string | null;
};

const DEVICES: Device[] = [
  {
    id: "macbook",
    alt: "Mediceen marketing site on a MacBook",
    lightSrc: "/macbook-light",
    darkSrc: "/macbook-dark",
    width: "w-[36%] min-w-[10rem] sm:w-[32%]",
    className: "z-[1] -rotate-2 self-end",
    href: null,
  },
  {
    id: "iphone",
    alt: "Mediceen Practice MCQ screen on iPhone",
    lightSrc: "/iphone-light",
    darkSrc: "/iphone-dark",
    width: "w-[16%] min-w-[5rem] sm:w-[13%]",
    className: "z-[3] self-center rotate-[-3deg]",
    href: STORE_LINKS.appStore,
  },
  {
    id: "samsung",
    alt: "Mediceen home dashboard on Android",
    lightSrc: "/samsung-light",
    darkSrc: "/samsung-dark",
    width: "w-[16%] min-w-[5rem] sm:w-[13%]",
    className: "z-[3] self-center rotate-[3deg]",
    href: STORE_LINKS.playStore,
  },
  {
    id: "tablet",
    alt: "Mediceen session complete screen on tablet",
    lightSrc: "/tablet-light",
    darkSrc: "/tablet-dark",
    width: "w-[28%] min-w-[8rem] sm:w-[24%]",
    className: "z-[2] rotate-2 self-end",
    href: QR_DESTINATION,
  },
];

const DEVICE_BY_ID = Object.fromEntries(DEVICES.map((d) => [d.id, d])) as Record<DeviceId, Device>;

/** Soft floating shadow for mobile collage pieces (DLR desk look). */
const COLLAGE_SHADOW =
  "drop-shadow-[0_18px_28px_oklch(0.34_0.07_260_/_0.22)] dark:drop-shadow-[0_18px_32px_oklch(0_0_0_/_0.55)]";

function DevicePicture({ lightSrc, darkSrc, alt }: Pick<Device, "lightSrc" | "darkSrc" | "alt">) {
  return (
    <>
      <Picture
        src={lightSrc}
        alt={alt}
        loading="lazy"
        decoding="async"
        className="block h-auto w-full dark:hidden"
      />
      <Picture
        src={darkSrc}
        alt={alt}
        loading="lazy"
        decoding="async"
        className="hidden h-auto w-full dark:block"
      />
    </>
  );
}

function GetTheAppBadge({ href }: { href: string }) {
  const live = isStoreLinkLive(href);
  const className =
    "inline-flex w-max shrink-0 items-center justify-center gap-1.5 whitespace-nowrap rounded-full bg-brand-ink px-5 py-2.5 text-sm font-semibold leading-none text-white shadow-[0_10px_28px_-6px_oklch(0.34_0.07_260_/_0.4)] ring-1 ring-brand-ink/15 transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand hover:shadow-[0_14px_32px_-6px_color-mix(in_oklch,var(--brand)_45%,transparent)] dark:bg-brand dark:text-primary-foreground dark:shadow-[0_12px_32px_-8px_color-mix(in_oklch,var(--brand)_65%,transparent)] dark:ring-white/25 dark:hover:bg-brand dark:hover:brightness-110 dark:hover:shadow-[0_16px_36px_-8px_color-mix(in_oklch,var(--brand)_75%,transparent)]";

  const label = (
    <>
      Get the app
      <ArrowUpRight className="size-3.5 opacity-90" aria-hidden="true" />
    </>
  );

  if (!live) {
    return (
      <span
        className={cn(className, "cursor-default opacity-90")}
        title="Store link will be available at launch"
        aria-label="Get the app — coming at launch"
      >
        {label}
      </span>
    );
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(className, "cursor-capsule")}
      aria-label="Get the app"
    >
      {label}
    </a>
  );
}

type CollagePieceProps = {
  device: Device;
  /** Absolute placement + rotation on the outer shell (not animated by GSAP). */
  className: string;
};

function CollagePiece({ device, className }: CollagePieceProps) {
  return (
    <div data-collage-piece className={cn("absolute", className)}>
      {/* Inner wrapper: GSAP animates opacity/y here so CSS rotate on the outer shell stays intact. */}
      <div className={cn("relative", COLLAGE_SHADOW)}>
        <DevicePicture lightSrc={device.lightSrc} darkSrc={device.darkSrc} alt={device.alt} />
      </div>
    </div>
  );
}

export function FinalMomentSection() {
  const [active, setActive] = useState<DeviceId | null>(null);
  const hovering = active !== null;

  const ref = useScrollAnimation<HTMLElement>(({ root, reducedMotion }) => {
    revealFrom(root.querySelectorAll("[data-reveal]"), root, reducedMotion);
    if (reducedMotion) return;

    const collageInners = root.querySelectorAll("[data-collage-piece] > div");
    if (collageInners.length) {
      gsap.from(collageInners, {
        opacity: 0,
        y: 36,
        duration: 0.85,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: root.querySelector("[data-final-collage]") ?? root,
          start: "top 75%",
        },
      });
    }

    const desktopStage = root.querySelector("[data-final-stage]");
    if (desktopStage) {
      gsap.from(desktopStage, {
        opacity: 0,
        y: 40,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: { trigger: root, start: "top 70%" },
      });
    }
  });

  return (
    <section
      id="download"
      ref={ref}
      className="brand-wash scroll-mt-24 overflow-hidden pt-28 pb-0 sm:py-32"
      aria-labelledby="final-heading"
    >
      <PageContainer width="wide" className="flex flex-col items-center text-center">
        <p
          id="final-heading"
          className="font-display text-[0.72rem] font-semibold uppercase tracking-[0.32em] text-brand"
          data-reveal
        >
          Mediceen
        </p>
        <p
          className="mt-6 text-balance-tight font-display text-[clamp(2rem,4vw,3rem)] font-semibold text-brand-ink"
          data-reveal
        >
          Your preparation.
          <br />
          Your pace.
        </p>

        {/* Mobile — decorative DLR-style overflowing desk collage (no store CTAs).
            Full-bleed: break out of PageContainer px-6/sm:px-8 so devices clip at the viewport edge.
            Adjust: PageContainer padding in src/components/layout/PageContainer.tsx (`px-6 sm:px-8`),
            or the -mx / w-[calc] breakout classes below. */}
        <div
          data-final-collage
          data-reveal
          className="relative mt-12 w-[calc(100%+3rem)] max-w-none -mx-6 sm:w-[calc(100%+4rem)] sm:-mx-8 md:hidden"
          aria-label="Mediceen on phone, tablet, and laptop"
        >
          {/* Taller stage so MacBook/tablet aren't clipped at the bottom */}
          <div className="relative h-[min(165vw,48rem)] w-full overflow-hidden">
            {/* Phones: smaller + closer, top cluster */}
            <CollagePiece
              device={DEVICE_BY_ID.iphone}
              className="left-[14%] top-[0%] z-[3] w-[34%] -rotate-[8deg]"
            />
            <CollagePiece
              device={DEVICE_BY_ID.samsung}
              className="right-[14%] top-[-1%] z-[3] w-[34%] rotate-[7deg]"
            />
            {/* MacBook: left bleed, lowered further + pulled inward */}
            <CollagePiece
              device={DEVICE_BY_ID.macbook}
              className="top-[53%] left-[-8%] z-[1] w-[72%] -rotate-[6deg]"
            />
            {/* Tablet: lower hero, shifted further right of center */}
            <CollagePiece
              device={DEVICE_BY_ID.tablet}
              className="top-[58%] left-[78%] z-[2] w-[62%] -translate-x-1/2 rotate-[3deg]"
            />
          </div>
        </div>

        {/* Desktop — spaced hover gallery (unchanged behavior) */}
        <div
          data-final-stage
          data-reveal
          className="relative mt-14 hidden w-full max-w-6xl md:block"
        >
          <div className="flex w-full items-end justify-center overflow-visible pb-20 pt-6">
            <div className="flex w-full items-end justify-center gap-8 px-3 lg:gap-12">
              {DEVICES.map((device) => {
                const isOn = active === device.id;
                const dimmed = hovering && !isOn;
                const hasBadge = device.href !== null;
                const badgeLive = device.href !== null && isStoreLinkLive(device.href);

                return (
                  <div
                    key={device.id}
                    className={cn(
                      "relative shrink-0 transition-opacity duration-[450ms] ease-out",
                      device.width,
                      device.className,
                      dimmed && "opacity-50",
                    )}
                    onMouseEnter={() => setActive(device.id)}
                    onMouseLeave={() => setActive(null)}
                    onFocusCapture={() => setActive(device.id)}
                    onBlurCapture={(event) => {
                      if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
                        setActive(null);
                      }
                    }}
                  >
                    <div
                      className={cn(
                        "will-change-transform transition-transform duration-600 ease-[cubic-bezier(0.32,0.72,0.28,1)] motion-reduce:transform-none motion-reduce:transition-none",
                        isOn &&
                          "-translate-y-[clamp(1.25rem,3vw,2.75rem)] motion-reduce:translate-y-0",
                      )}
                    >
                      <div
                        tabIndex={hasBadge ? 0 : undefined}
                        role={hasBadge ? "group" : undefined}
                        aria-label={hasBadge ? device.alt : undefined}
                        className={cn(
                          "block outline-none",
                          hasBadge &&
                            "focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-background",
                          badgeLive ? "cursor-capsule" : hasBadge && "cursor-pointer",
                        )}
                      >
                        <DevicePicture
                          lightSrc={device.lightSrc}
                          darkSrc={device.darkSrc}
                          alt={device.alt}
                        />
                      </div>
                    </div>

                    {/* Sibling of the lift — sits under the image, not on it (DLR pattern). */}
                    {device.href ? (
                      <div
                        className={cn(
                          "pointer-events-none absolute left-1/2 top-full z-10 -translate-x-1/2 -translate-y-2 opacity-0 transition-opacity duration-[400ms] ease-out",
                          isOn && "pointer-events-auto opacity-100 delay-100",
                          "motion-reduce:delay-0",
                        )}
                      >
                        <GetTheAppBadge href={device.href} />
                      </div>
                    ) : null}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </PageContainer>
    </section>
  );
}
