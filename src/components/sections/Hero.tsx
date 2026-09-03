import { Link } from "@tanstack/react-router";
import { PhoneMockup } from "@/components/ui/PhoneMockup";
import { StoreBadges } from "@/components/ui/StoreBadge";
import { Button } from "@/components/ui/brand-button";
import { PageContainer } from "@/components/layout/PageContainer";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { heroTimeline } from "@/animations/heroTimeline";
import { wordOfTheDay } from "@/data/product";
import { Bell, Flame, Sparkles, ChevronDown, ListChecks, BookOpen, Home, SquarePen, Trophy, BarChart3, User } from "lucide-react";
import { useState } from "react";
import { quizReviewsDueTotal, flashcardReviewSummary } from "@/data/product";

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

const TODAY_GOAL = { done: 12, total: 20 };
const WEEKLY_MOCK = { subject: "Medical Biology", total: 20, daysLeft: 1, progress: 0 };
const QUICK_STATS = [
  { label: "Answered", value: "320" },
  { label: "Accuracy", value: "76%" },
  { label: "Day streak", value: "7" },
  { label: "Study time", value: "18h" },
];
const RECENT_ACTIVITY = [
  { subject: "Biochemistry", meta: "10 questions · 60% accuracy", time: "Mon, 09:12", accent: "bg-warning" },
  { subject: "Genetics", meta: "15 questions · 87% accuracy", time: "Wed, 09:12", accent: "bg-success" },
  { subject: "Anatomy", meta: "20 questions · 75% accuracy", time: "Today, 09:12", accent: "bg-success" },
];

function HeroScreen() {
  const [revealed, setRevealed] = useState(false);
  const goalPct = (TODAY_GOAL.done / TODAY_GOAL.total) * 100;
  const mockPct = (WEEKLY_MOCK.progress / WEEKLY_MOCK.total) * 100;

  return (
    <div className="flex h-full flex-col overflow-hidden bg-background">
      <div className="min-h-0 flex-1 overflow-y-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-[5.7cqw] pt-[4.3cqw]">
          <div>
            <p className="text-[3cqw] text-muted-foreground">Welcome back,</p>
            <p className="font-display text-[6.4cqw] font-bold text-brand-ink">Alex Karki</p>
          </div>
          <div className="flex items-center gap-[2.1cqw]">
            <span className="flex h-[7.9cqw] w-[7.9cqw] items-center justify-center rounded-full border border-border bg-card">
              <Bell className="h-[3.6cqw] w-[3.6cqw] text-muted-foreground" strokeWidth={2} />
            </span>
            <span className="flex h-[7.9cqw] w-[7.9cqw] items-center justify-center rounded-full bg-success text-[3cqw] font-semibold text-white">
              AK
            </span>
          </div>
        </div>

        {/* Streak card */}
        <div className="px-[5.7cqw] pt-[3.6cqw]">
          <div className="flex items-center gap-[2.9cqw] rounded-2xl bg-card p-[3.2cqw] shadow-soft">
            <span className="flex h-[8.6cqw] w-[8.6cqw] shrink-0 items-center justify-center rounded-full bg-destructive/10">
              <Flame className="h-[4.3cqw] w-[4.3cqw] text-destructive" strokeWidth={2} />
            </span>
            <div className="min-w-0">
              <p className="text-[3.4cqw] font-semibold text-brand-ink">7 day streak</p>
              <p className="truncate text-[2.7cqw] text-muted-foreground">
                Keep it going - 2 days to a new record
              </p>
            </div>
          </div>
        </div>

       

        {/* Word of the Day card */}
        <div className="px-[5.7cqw] pt-[3.6cqw]">
          <div
            className="relative overflow-hidden rounded-2xl p-[3.6cqw]"
            style={{ background: "linear-gradient(139deg, var(--teal), var(--success))" }}
          >
            <div className="absolute -right-[6cqw] -top-[8cqw] h-[18cqw] w-[18cqw] rounded-full bg-white/10 blur-xl" />
            <div className="relative flex items-center gap-[1.4cqw] text-white/90">
              <Sparkles className="h-[3cqw] w-[3cqw]" strokeWidth={2.5} />
              <p className="text-[2.7cqw] font-semibold uppercase tracking-[0.18em]">Word of the day</p>
            </div>
            <p className="relative mt-[2.1cqw] font-display text-[5cqw] font-bold text-white">
              {wordOfTheDay.term}
            </p>
            <p className="relative text-[2.6cqw] text-white/60">{wordOfTheDay.pronunciation}</p>
            {revealed && (
              <>
                <p className="relative mt-[2.5cqw] text-[3cqw] font-medium leading-relaxed text-white">
                  {wordOfTheDay.definition}
                </p>
                <span className="relative mt-[2.5cqw] inline-flex rounded-full bg-white/90 px-[2.9cqw] py-[0.9cqw] text-[2.4cqw] font-semibold text-success">
                  {wordOfTheDay.category}
                </span>
              </>
            )}
            <button
              type="button"
              onClick={() => setRevealed((r) => !r)}
              className="relative mt-[3.2cqw] flex items-center gap-[2.1cqw] text-[2.7cqw] font-semibold text-white/90"
            >
              <span className="flex h-[7.1cqw] w-[7.1cqw] items-center justify-center rounded-2xl border border-white">
                <ChevronDown
                  className={`h-[3.6cqw] w-[3.6cqw] text-white transition-transform duration-300 ${revealed ? "rotate-180" : ""}`}
                  strokeWidth={2.5}
                />
              </span>
              {revealed ? "Hide definition" : "Reveal definition"}
            </button>
          </div>
        </div>

        {/* Today's goal */}
        <div className="px-[5.7cqw] pt-[3.6cqw]">
          <div className="rounded-2xl bg-card p-[3.6cqw] shadow-soft">
            <div className="flex items-center justify-between">
              <p className="text-[3.2cqw] font-semibold text-brand-ink">Today&apos;s goal</p>
              <p className="text-[3.2cqw] font-semibold text-brand-ink">
                {TODAY_GOAL.done}
                <span className="text-muted-foreground"> / {TODAY_GOAL.total} questions</span>
              </p>
            </div>
            <div className="mt-[2.1cqw] h-[1.1cqw] overflow-hidden rounded-full bg-surface-2">
              <div className="h-full rounded-full bg-success" style={{ width: `${goalPct}%` }} />
            </div>
            <p className="mt-[1.8cqw] text-[2.6cqw] text-muted-foreground">
              {TODAY_GOAL.total - TODAY_GOAL.done} questions left today
            </p>
            <button
              type="button"
              className="mt-[2.5cqw] flex w-full items-center justify-center rounded-2xl py-[2.9cqw] text-[3.4cqw] text-white shadow-md"
              style={{ background: "linear-gradient(to right, var(--teal), var(--success))" }}
            >
              Continue practicing
            </button>
          </div>
        </div>

        {/* This week's test */}
        <div className="px-[5.7cqw] pt-[3.6cqw]">
          <div
            className="relative overflow-hidden rounded-2xl p-[3.6cqw]"
            style={{ background: "linear-gradient(139deg, var(--teal), var(--success))" }}
          >
            <div className="absolute -right-[6cqw] -top-[8cqw] h-[18cqw] w-[18cqw] rounded-full bg-white/10 blur-xl" />
            <p className="relative text-[2.7cqw] font-bold uppercase tracking-[0.18em] text-white/75">
              This week&apos;s test
            </p>
            <p className="relative mt-[0.7cqw] font-display text-[4.6cqw] font-bold text-white">
              {WEEKLY_MOCK.subject}
            </p>
            <p className="relative text-[2.9cqw] text-white/80">
              {WEEKLY_MOCK.total} questions · {WEEKLY_MOCK.daysLeft} day left
            </p>
            <div className="relative mt-[2.9cqw] flex items-center justify-between text-[2.6cqw] font-medium text-white/80">
              <span>Progress</span>
              <span>{WEEKLY_MOCK.progress} / {WEEKLY_MOCK.total}</span>
            </div>
            <div className="relative mt-[1.1cqw] h-[1.1cqw] overflow-hidden rounded-full bg-white/25">
              <div className="h-full rounded-full bg-white" style={{ width: `${mockPct}%` }} />
            </div>
            <button
              type="button"
              className="relative mt-[2.9cqw] flex w-full items-center justify-center rounded-2xl bg-white py-[2.9cqw] text-[3.4cqw] font-medium text-success shadow-md"
            >
              Join live mock
            </button>
          </div>
        </div>

        {/* Due for review */}
        <div className="px-[5.7cqw] pt-[5cqw]">
          <div className="flex items-center justify-between">
            <p className="font-display text-[4cqw] font-semibold text-brand-ink">Due for review</p>
            <span className="text-[2.7cqw] font-semibold text-muted-foreground">See all</span>
          </div>
          <div className="mt-[2.9cqw] flex gap-[2.9cqw]">
            <div className="flex-1 rounded-xl border border-border bg-card p-[3.2cqw] shadow-soft">
              <span className="flex h-[8cqw] w-[8cqw] items-center justify-center rounded-[10px] bg-surface-2">
                <ListChecks className="h-[4cqw] w-[4cqw] text-muted-foreground" strokeWidth={2} />
              </span>
              <p className="mt-[3.6cqw] text-[3.4cqw] font-semibold text-brand-ink">Quiz reviews</p>
              <p className="text-[2.6cqw] text-muted-foreground">{quizReviewsDueTotal} questions due</p>
              <p className="mt-[1.8cqw] text-[2.6cqw] font-semibold text-success">Start review</p>
            </div>
            <div className="flex-1 rounded-xl border border-border bg-card p-[3.2cqw] shadow-soft">
              <span className="flex h-[8cqw] w-[8cqw] items-center justify-center rounded-[10px] bg-teal-soft">
                <BookOpen className="h-[4cqw] w-[4cqw] text-teal" strokeWidth={2} />
              </span>
              <p className="mt-[3.6cqw] text-[3.4cqw] font-semibold text-brand-ink">Flashcards</p>
              <p className="text-[2.6cqw] text-muted-foreground">{flashcardReviewSummary.count} cards due</p>
              <p className="mt-[1.8cqw] text-[2.6cqw] font-semibold text-success">Start review</p>
            </div>
          </div>
        </div>

        {/* Quick stats */}
        <div className="px-[5.7cqw] pt-[5cqw]">
          <p className="font-display text-[4cqw] font-semibold text-brand-ink">Quick stats</p>
          <div className="mt-[2.1cqw] flex items-center justify-between rounded-2xl border border-border bg-card px-[3.2cqw] py-[3.6cqw] shadow-soft">
            {QUICK_STATS.map((stat, i) => (
              <div key={stat.label} className={`flex flex-1 flex-col items-center ${i > 0 ? "border-l border-border" : ""}`}>
                <p className="text-[3.6cqw] font-bold text-brand-ink">{stat.value}</p>
                <p className="mt-[0.4cqw] text-[2.3cqw] text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Recent activity */}
        <div className="px-[5.7cqw] pt-[5cqw]">
          <div className="flex items-center justify-between">
            <p className="font-display text-[4cqw] font-semibold text-brand-ink">Recent activity</p>
            <span className="text-[2.7cqw] font-semibold text-brand">Insights</span>
          </div>
          <div className="mt-[2.1cqw] overflow-hidden rounded-2xl border border-border bg-card">
            {RECENT_ACTIVITY.map((row, i) => (
              <div
                key={row.subject}
                className={`flex items-center gap-[2.9cqw] px-[3.6cqw] py-[3.2cqw] ${i > 0 ? "border-t border-border" : ""}`}
              >
                <span className={`h-[6.4cqw] w-[0.9cqw] shrink-0 rounded-full ${row.accent}`} />
                <div className="min-w-0 flex-1">
                  <p className="text-[3.4cqw] font-medium text-brand-ink">{row.subject}</p>
                  <p className="text-[2.6cqw] text-muted-foreground">{row.meta}</p>
                </div>
                <span className="shrink-0 text-[2.6cqw] text-muted-foreground">{row.time}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="px-[5.7cqw] pb-[5.7cqw] pt-[5cqw]">
          <button
            type="button"
            className="flex w-full items-center justify-center rounded-2xl py-[3.2cqw] text-[3.4cqw] font-semibold text-white shadow-md"
            style={{ background: "linear-gradient(to right, var(--teal), var(--success))" }}
          >
            Start a practice session
          </button>
        </div>
      </div>

      {/* Bottom nav */}
      <div className="flex shrink-0 items-center justify-around border-t border-border bg-card px-[2.9cqw] py-[3.6cqw]">
        <Home className="h-[4.6cqw] w-[4.6cqw] text-brand-ink" strokeWidth={2} />
        <SquarePen className="h-[4.6cqw] w-[4.6cqw] text-muted-foreground" strokeWidth={2} />
        <Trophy className="h-[4.6cqw] w-[4.6cqw] text-muted-foreground" strokeWidth={2} />
        <BarChart3 className="h-[4.6cqw] w-[4.6cqw] text-muted-foreground" strokeWidth={2} />
        <User className="h-[4.6cqw] w-[4.6cqw] text-muted-foreground" strokeWidth={2} />
      </div>
    </div>
  );
}
