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
      className={className}
      aria-label="Get the app"
    >
      {label}
    </a>
  );
}

export function FinalMomentSection() {
  const [active, setActive] = useState<DeviceId | null>(null);
  const hovering = active !== null;

  const ref = useScrollAnimation<HTMLElement>(({ root, reducedMotion }) => {
    revealFrom(root.querySelectorAll("[data-reveal]"), root, reducedMotion);
    if (reducedMotion) return;
    const stage = root.querySelector("[data-final-stage]");
    if (!stage) return;
    gsap.from(stage, {
      opacity: 0,
      y: 40,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: { trigger: root, start: "top 70%" },
    });
  });

  return (
    <section
      id="download"
      ref={ref}
      className="brand-wash scroll-mt-24 overflow-hidden py-28 sm:py-32"
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

        <div data-final-stage data-reveal className="relative mt-14 w-full max-w-6xl">
          <div className="flex w-full items-end justify-center overflow-x-auto pb-16 pt-6 [-ms-overflow-style:none] [scrollbar-width:none] sm:overflow-visible sm:pb-20 [&::-webkit-scrollbar]:hidden">
            <div className="flex w-[min(100%,64rem)] min-w-[26rem] items-end justify-center gap-5 px-3 sm:w-full sm:min-w-0 sm:gap-8 lg:gap-12">
              {DEVICES.map((device) => {
                const isOn = active === device.id;
                const dimmed = hovering && !isOn;
                const hasBadge = device.href !== null;

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
                            "cursor-pointer focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-background",
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
