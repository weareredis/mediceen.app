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
      <div className="bg-card px-[7cqw] pb-[4.3cqw] pt-[7.1cqw]">
        <p className="font-display text-[7.1cqw] font-bold text-brand-ink">Weekly</p>
        <p className="mt-[0.7cqw] text-[3.6cqw] text-muted-foreground">
          One test a week keeps you sharp
        </p>
      </div>

      <div className="flex-1 space-y-[7.1cqw] overflow-hidden px-[5.7cqw] pt-[5.7cqw]">
        {/* This week's test — hero card */}
        <div className="rounded-2xl bg-gradient-to-br from-brand via-success/70 to-teal p-[5.7cqw]">
          <p className="text-[3cqw] font-bold uppercase tracking-wider text-white/75">
            This week&apos;s test
          </p>
          <p className="font-display text-[6.4cqw] font-bold text-white">{weeklyMock.subject}</p>
          <p className="mt-[0.7cqw] text-[3.9cqw] text-white/80">
            {weeklyMock.totalQuestions} questions · {weeklyMock.daysLeft} day left
          </p>

          <div className="mt-[4.3cqw] flex items-center justify-between text-[3.3cqw] font-medium text-white/80">
            <span>Progress</span>
            <span>
              {weeklyMock.progress} / {weeklyMock.totalQuestions}
            </span>
          </div>
          <div className="mt-[1.4cqw] h-[1.4cqw] overflow-hidden rounded-full bg-white/30">
            <div className="h-full rounded-full bg-white" style={{ width: `${progressPct}%` }} />
          </div>

          <button
            type="button"
            className="mt-[4.3cqw] w-full rounded-2xl bg-white py-[3.6cqw] text-[4.3cqw] font-semibold text-brand shadow-soft"
          >
            Start test
          </button>
        </div>

        {/* Past tests */}
        <div>
          <p className="font-display text-[4.3cqw] font-semibold text-brand-ink">Past tests</p>
          <div className="mt-[2.9cqw] space-y-[3.6cqw]">
            {pastMocks.map((test) => {
              const tone = scoreTone(test.score);
              return (
                <div
                  key={test.week}
                  className="rounded-xl border border-border bg-card p-[4.3cqw]"
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-[4.6cqw] font-semibold text-brand-ink">{test.week}</p>
                      <p className="text-[3.3cqw] text-muted-foreground">
                        {test.date} · {test.questions} questions
                      </p>
                    </div>
                    <span
                      className={`rounded-full px-[2.9cqw] py-[0.7cqw] text-[3.3cqw] font-semibold ${badgeClasses[tone]}`}
                    >
                      {test.score}%
                    </span>
                  </div>
                  <div className="mt-[2.9cqw] h-[1.4cqw] overflow-hidden rounded-full bg-surface-2">
                    <div
                      className={`h-full rounded-full ${barClasses[tone]}`}
                      style={{ width: `${test.score}%` }}
                    />
                  </div>
                  <button
                    type="button"
                    className="mt-[3.6cqw] w-full rounded-xl bg-gradient-to-r from-success/60 to-teal/60 py-[2.9cqw] text-[4.3cqw] font-medium text-white"
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
      <div className="flex items-center justify-around border-t border-border bg-card px-[2.9cqw] py-[4.3cqw]">
        <Home className="h-[5cqw] w-[5cqw] text-muted-foreground" strokeWidth={2} />
        <SquarePen className="h-[5cqw] w-[5cqw] text-muted-foreground" strokeWidth={2} />
        <Trophy className="h-[5cqw] w-[5cqw] text-brand" strokeWidth={2} />
        <BarChart3 className="h-[5cqw] w-[5cqw] text-muted-foreground" strokeWidth={2} />
        <User className="h-[5cqw] w-[5cqw] text-muted-foreground" strokeWidth={2} />
      </div>
    </div>
  );
}