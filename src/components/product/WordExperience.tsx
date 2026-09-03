import { useState } from "react";
import { Bell, Flame, Sparkles, ChevronDown } from "lucide-react";
import { wordOfTheDay } from "@/data/product";

const TODAY_GOAL = { done: 12, total: 20 };
const WEEKLY_MOCK = { subject: "Medical Biology", total: 20, daysLeft: 1, progress: 0 };

/** Marketing depiction of the app's Home screen, with an interactive Word of the Day card. */
export function WordExperience() {
  const [revealed, setRevealed] = useState(true);
  const goalPct = (TODAY_GOAL.done / TODAY_GOAL.total) * 100;
  const mockPct = (WEEKLY_MOCK.progress / WEEKLY_MOCK.total) * 100;

  return (
    <div className="flex h-full flex-col overflow-hidden bg-background">
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
            <p className="text-[2.7cqw] font-semibold uppercase tracking-[0.18em]">
              Word of the day
            </p>
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
                className={`h-[3.6cqw] w-[3.6cqw] text-white transition-transform duration-300 ${
                  revealed ? "rotate-180" : ""
                }`}
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
            <span>
              {WEEKLY_MOCK.progress} / {WEEKLY_MOCK.total}
            </span>
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
    </div>
  );
}