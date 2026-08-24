import { Home, SquarePen, Trophy, BarChart3, User } from "lucide-react";
import { weeklyMock, pastMocks } from "@/data/product";

function scoreTone(score: number): "success" | "warning" | "danger" {
  if (score >= 65) return "success";
  if (score >= 35) return "warning";
  return "danger";
}

const badgeClasses = {
  success: "bg-success-soft text-success",
  warning: "bg-warning-soft text-warning",
  danger: "bg-destructive-soft text-destructive",
} as const;

const barClasses = {
  success: "bg-success",
  warning: "bg-warning",
  danger: "bg-destructive",
} as const;

/**
 * Weekly test hub: current week's test card plus past attempts with scores.
 * Choreographed artwork, not a live scheduler.
 */
export function MockTestExperience() {
  const progressPct = (weeklyMock.progress / weeklyMock.totalQuestions) * 100;

  return (
    <div className="flex h-full flex-col bg-surface">
      {/* Header */}
      <div className="bg-card px-5 pb-3 pt-5">
        <p className="font-display text-xl font-bold text-brand-ink">Weekly</p>
        <p className="mt-0.5 text-[0.7rem] text-muted-foreground">
          One test a week keeps you sharp
        </p>
      </div>

      <div className="flex-1 space-y-5 overflow-hidden px-4 pt-4">
        {/* This week's test — hero card */}
        <div className="rounded-2xl bg-gradient-to-br from-brand via-success/70 to-teal p-4">
          <p className="text-[0.6rem] font-bold uppercase tracking-wider text-white/75">
            This week&apos;s test
          </p>
          <p className="font-display text-lg font-bold text-white">{weeklyMock.subject}</p>
          <p className="mt-0.5 text-[0.72rem] text-white/80">
            {weeklyMock.totalQuestions} questions · {weeklyMock.daysLeft} day left
          </p>

          <div className="mt-3 flex items-center justify-between text-[0.62rem] font-medium text-white/80">
            <span>Progress</span>
            <span>
              {weeklyMock.progress} / {weeklyMock.totalQuestions}
            </span>
          </div>
          <div className="mt-1 h-1 overflow-hidden rounded-full bg-white/30">
            <div className="h-full rounded-full bg-white" style={{ width: `${progressPct}%` }} />
          </div>

          <button
            type="button"
            className="mt-3 w-full rounded-2xl bg-white py-2.5 text-sm font-semibold text-brand shadow-soft"
          >
            Start test
          </button>
        </div>

        {/* Past tests */}
        <div>
          <p className="font-display text-sm font-semibold text-brand-ink">Past tests</p>
          <div className="mt-2 space-y-2.5">
            {pastMocks.map((test) => {
              const tone = scoreTone(test.score);
              return (
                <div
                  key={test.week}
                  className="rounded-xl border border-border bg-card p-3"
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-[0.8rem] font-semibold text-brand-ink">{test.week}</p>
                      <p className="text-[0.62rem] text-muted-foreground">
                        {test.date} · {test.questions} questions
                      </p>
                    </div>
                    <span
                      className={`rounded-full px-2 py-0.5 text-[0.62rem] font-semibold ${badgeClasses[tone]}`}
                    >
                      {test.score}%
                    </span>
                  </div>
                  <div className="mt-2 h-1 overflow-hidden rounded-full bg-surface-2">
                    <div
                      className={`h-full rounded-full ${barClasses[tone]}`}
                      style={{ width: `${test.score}%` }}
                    />
                  </div>
                  <button
                    type="button"
                    className="mt-2.5 w-full rounded-xl bg-gradient-to-r from-success/60 to-teal/60 py-2 text-[0.75rem] font-medium text-white"
                  >
                    Review results
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Bottom nav */}
      <div className="flex items-center justify-around border-t border-border bg-card px-2 py-3">
        <Home className="h-4 w-4 text-muted-foreground" strokeWidth={2} />
        <SquarePen className="h-4 w-4 text-muted-foreground" strokeWidth={2} />
        <Trophy className="h-4 w-4 text-brand" strokeWidth={2} />
        <BarChart3 className="h-4 w-4 text-muted-foreground" strokeWidth={2} />
        <User className="h-4 w-4 text-muted-foreground" strokeWidth={2} />
      </div>
    </div>
  );
}