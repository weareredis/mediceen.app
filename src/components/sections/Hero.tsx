import { Link } from "@tanstack/react-router";
import { PhoneMockup } from "@/components/ui/PhoneMockup";
import { StoreBadges } from "@/components/ui/StoreBadge";
import { Button } from "@/components/ui/brand-button";
import { PageContainer } from "@/components/layout/PageContainer";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { heroTimeline } from "@/animations/heroTimeline";
import { wordOfTheDay } from "@/data/product";
import { Bell, Flame, Sparkles } from "lucide-react";

export function Hero() {
  const ref = useScrollAnimation<HTMLElement>(heroTimeline);

  return (
    <section ref={ref} className="brand-wash relative flex min-h-dvh flex-col  pt-24 sm:pt-28">
      <div className="grid-fade pointer-events-none absolute inset-0 opacity-50" />

      <PageContainer width="wide" className="relative flex flex-1 items-center">
        <div className="grid w-full items-center gap-16 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="max-w-xl">
            <p
              className="text-[0.72rem] font-semibold uppercase tracking-[0.32em] text-brand"
              data-reveal
            >
              Mediceen
            </p>
            <h1 className="mt-6" data-reveal>
  <span className="block text-balance-tight font-display text-[clamp(2.8rem,6.5vw,4.8rem)] font-semibold text-brand-ink">
    Prepare smarter for MECEE-BL
  </span>{" "}
  <span className="mt-2 block font-display text-[clamp(1.1rem,1.8vw,1.4rem)] font-medium text-muted-foreground">
    Medical entrance exam prep for Nepal
  </span>
</h1>
            <p
  className="mt-6 max-w-lg text-[clamp(1.02rem,1.4vw,1.2rem)] leading-relaxed text-muted-foreground"
  data-reveal
>
  Practice. Review. Improve smarter. Mediceen helps Nepal medical aspirants build recall with
  MCQs, spaced repetition, flashcards, and weekly MECEE-style mocks.
</p>

            <div className="mt-9 flex flex-wrap items-center gap-3" data-reveal>
              <Button asChild variant="outline" size="lg">
                <Link to="/" hash="product">
                  See how it works
                </Link>
              </Button>
            </div>

            <div className="mt-8" data-reveal>
              <StoreBadges />
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div data-hero-phone className="will-change-transform">
              <PhoneMockup className="w-[min(56vw,14rem)] lg:w-[min(25vw,17.5rem)]">
                <HeroScreen />
              </PhoneMockup>
            </div>
          </div>
        </div>
      </PageContainer>

      <div className="h-12 sm:h-16" />
    </section>
  );
}

function HeroScreen() {
  return (
        <div className="flex h-full flex-col">
            <div className="flex items-center justify-between px-4 pt-4">
        <div>
          <p className="text-[0.62rem] text-muted-foreground">Welcome back,</p>
          <p className="font-display text-base font-bold text-brand-ink">Alex Karki</p>
        </div>
        <div className="flex items-center gap-2">
          <span className="flex h-7 w-7 items-center justify-center rounded-full border border-border bg-card">
            <Bell className="h-3.5 w-3.5 text-muted-foreground" strokeWidth={2} />
          </span>
          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-success text-[0.6rem] font-semibold text-white">
            BR
          </span>
        </div>
      </div>

      <div className="mt-3 px-4">
        <div className="flex items-center gap-2 rounded-xl border border-warning/30 bg-warning-soft px-3 py-2.5">
          <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-warning/15">
            <Flame className="h-3.5 w-3.5 text-warning" strokeWidth={2.5} />
          </span>
          <div className="min-w-0">
            <p className="truncate text-[0.68rem] font-semibold text-brand-ink">7 day streak</p>
            <p className="truncate text-[0.58rem] text-muted-foreground">2 days to a new record</p>
          </div>
        </div>
      </div>

      {/* Fixed gradient + white text is intentional here, same rationale as
          FlashcardExperience: this card's contrast is against its own gradient,
          not the page background, so it doesn't flip with theme tokens. */}
      <div className="mt-3 px-4">
        <div className="relative overflow-hidden rounded-2xl bg-[linear-gradient(135deg,var(--teal),var(--brand))] p-3.5">
          <div className="flex items-center gap-1.5">
            <Sparkles className="h-3 w-3 text-white/90" strokeWidth={2.5} />
            <p className="text-[0.55rem] font-semibold uppercase tracking-[0.18em] text-white/90">
              Word of the Day
            </p>
          </div>
          <p className="mt-2 font-display text-sm font-bold text-white">{wordOfTheDay.term}</p>
          <p className="mt-1 text-[0.62rem] leading-snug text-white/75">{wordOfTheDay.definition}</p>
        </div>
      </div>

      <div className="mt-3 px-4 pb-6">
        <div className="rounded-2xl border border-border bg-card p-3.5">
          <div className="flex items-center justify-between">
            <p className="text-[0.68rem] font-semibold text-brand-ink">Today&apos;s goal</p>
            <p className="text-[0.62rem] font-semibold text-muted-foreground">
              <span className="text-brand-ink">12</span> / 20 questions
            </p>
          </div>
          <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-surface-2">
            <div className="h-full w-3/5 rounded-full bg-success" />
          </div>
          <p className="mt-2 text-[0.58rem] text-muted-foreground">8 questions left today</p>
          <div className="mt-2.5 flex items-center justify-center rounded-xl bg-primary py-2">
            <p className="text-[0.65rem] font-semibold text-primary-foreground">Continue practicing</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Tile({ label, value, tone }: { label: string; value: string; tone: "success" | "brand" }) {
  return (
    <div
      className={`rounded-2xl border p-3 ${
        tone === "success" ? "border-success/30 bg-success-soft" : "border-brand/20 bg-brand-soft"
      }`}
    >
      <p className="text-[0.55rem] uppercase tracking-[0.18em] text-muted-foreground">{label}</p>
      <p className="mt-1 font-display text-base font-semibold text-brand-ink">{value}</p>
    </div>
  );
}

function Row({ label, meta }: { label: string; meta: string }) {
  return (
    <div className="flex items-center justify-between rounded-xl border border-border bg-surface px-3 py-2.5">
      <span className="text-[0.75rem] font-medium text-brand-ink">{label}</span>
      <span className="text-[0.62rem] text-muted-foreground">{meta}</span>
    </div>
  );
}
