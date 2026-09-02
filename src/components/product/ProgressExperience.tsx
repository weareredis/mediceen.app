import { Target } from "lucide-react";

const trend7 = [38, 44, 41, 52, 58, 63, 71];
const dayLabels = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

const strongestSubjects = [
  { name: "Anatomy", value: 88 },
  { name: "Physiology", value: 81 },
  { name: "Genetics", value: 72 },
];

const weakestSubjects = [
  { name: "Biochemistry", value: 48 },
  { name: "Microbiology", value: 40 },
];

const focusSubject = {
  name: "Biochemistry",
  accuracy: 48,
  questionCount: 42,
};

function toPath(values: number[], width = 260, height = 64) {
  const max = Math.max(...values);
  const min = Math.min(...values);
  const span = max - min || 1;
  return values
    .map((v, i) => {
      const x = (i / (values.length - 1)) * width;
      const y = height - ((v - min) / span) * height;
      return `${i === 0 ? "M" : "L"}${x.toFixed(1)},${y.toFixed(1)}`;
    })
    .join(" ");
}

function toAreaPath(values: number[], width = 260, height = 64) {
  const line = toPath(values, width, height);
  return `${line} L${width},${height} L0,${height} Z`;
}

/** Insights: strong/weak summary, accuracy trend, subject breakdowns, and a focus recommendation. */
export function ProgressExperience() {
  const first = trend7[0]!;
  const last = trend7[trend7.length - 1]!;
  const delta = last - first;
  const strongest = strongestSubjects[0]!;
  const weakest = weakestSubjects[0]!;

  return (
    <div className="flex h-full flex-col">
      <div className="px-[7.1cqw] pt-[7.1cqw]">
        <p className="font-display text-[8.6cqw] font-bold text-brand-ink">Insights</p>
        <p className="mt-[0.7cqw] text-[4cqw] text-muted-foreground">Last 7 days</p>
      </div>

      {/* Strong / weak summary */}
      <div className="mt-[5.7cqw] px-[7.1cqw]">
        <div className="rounded-2xl bg-card p-[4.3cqw] shadow-soft">
          <p className="text-[4.3cqw] font-semibold text-brand-ink">
            Strong at <span className="text-muted-foreground">{strongest.name} {strongest.value}%</span>
          </p>
          <p className="mt-[1.4cqw] text-[3.7cqw] text-muted-foreground">
            weak at <span className="text-destructive">{weakest.name} {weakest.value}%</span>
          </p>
          <button
            type="button"
            className="mt-[3.6cqw] flex w-full items-center justify-center rounded-2xl bg-primary py-[2.9cqw] text-[4cqw] font-medium text-primary-foreground"
          >
            Practice {weakest.name}
          </button>
        </div>
      </div>

      {/* Accuracy trend */}
      <div className="mt-[7.1cqw] px-[7.1cqw]">
        <p className="font-display text-[5.7cqw] font-semibold text-brand-ink">Accuracy trend</p>
      </div>

      <div className="mt-[4.3cqw] px-[7.1cqw]">
        <div data-insight-chart className="rounded-2xl bg-card p-[5.7cqw] shadow-soft">
          <div className="flex items-center gap-[2.9cqw]">
            <p className="font-display text-[7.1cqw] font-bold tabular-nums text-brand-ink">{last}%</p>
            <span className="rounded-xl bg-success-soft px-[2.9cqw] py-[0.7cqw] text-[3.5cqw] font-semibold text-success">
              {delta >= 0 ? "+" : ""}
              {delta} pts this week
            </span>
          </div>

          <div className="mt-[4.3cqw] border-t border-border pt-[4.3cqw]">
            <svg viewBox="0 0 260 64" className="h-[22.9cqw] w-full overflow-visible" aria-hidden="true">
              <path d={toAreaPath(trend7)} fill="var(--success)" fillOpacity={0.06} stroke="none" />
              <path
                data-insight-line
                d={toPath(trend7)}
                fill="none"
                stroke="var(--success)"
                strokeWidth={2.5}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              {trend7.map((v, i) => {
                const max = Math.max(...trend7);
                const min = Math.min(...trend7);
                const span = max - min || 1;
                const x = (i / (trend7.length - 1)) * 260;
                const y = 64 - ((v - min) / span) * 64;
                return (
                  <circle
                    key={i}
                    cx={x}
                    cy={y}
                    r={3}
                    fill="var(--card)"
                    stroke="var(--success)"
                    strokeWidth={2}
                  />
                );
              })}
            </svg>

            <div className="mt-[2.9cqw] flex justify-between text-[3.5cqw] text-muted-foreground">
              {dayLabels.map((day) => (
                <span key={day}>{day}</span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Strongest subjects */}
      <div className="mt-[7.1cqw] px-[7.1cqw]">
        <p className="font-display text-[5.7cqw] font-semibold text-brand-ink">Strongest subjects</p>
        <div className="mt-[3.6cqw] space-y-[3.6cqw] rounded-2xl bg-card p-[4.3cqw] shadow-soft">
          {strongestSubjects.map((subject) => (
            <div key={subject.name}>
              <div className="flex items-center justify-between text-[3.7cqw] font-semibold text-brand-ink">
                <span>{subject.name}</span>
                <span>{subject.value}%</span>
              </div>
              <div className="mt-[1.4cqw] h-[1.4cqw] overflow-hidden rounded-full bg-surface-2">
                <div
                  className="h-full rounded-full bg-success"
                  style={{ width: `${subject.value}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Weakest subjects */}
      <div className="mt-[7.1cqw] px-[7.1cqw]">
        <p className="font-display text-[5.7cqw] font-semibold text-brand-ink">Weakest subjects</p>
        <div className="mt-[3.6cqw] space-y-[3.6cqw] rounded-2xl bg-card p-[4.3cqw] shadow-soft">
          {weakestSubjects.map((subject) => (
            <div key={subject.name}>
              <div className="flex items-center justify-between text-[3.7cqw] font-semibold text-brand-ink">
                <span>{subject.name}</span>
                <span>{subject.value}%</span>
              </div>
              <div className="mt-[1.4cqw] h-[1.4cqw] overflow-hidden rounded-full bg-surface-2">
                <div
                  className="h-full rounded-full bg-destructive"
                  style={{ width: `${subject.value}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Focus recommendation */}
      <div className="mt-[7.1cqw] px-[7.1cqw] pb-[8.6cqw]">
        <div className="flex gap-[3.6cqw] rounded-2xl border border-border bg-card p-[4.3cqw] shadow-soft">
          <span className="flex h-[10cqw] w-[10cqw] shrink-0 items-center justify-center rounded-xl bg-brand-soft">
            <Target className="h-[5cqw] w-[5cqw] text-brand" strokeWidth={2} />
          </span>
          <div>
            <p className="text-[4cqw] font-semibold text-brand-ink">Focus on {focusSubject.name}</p>
            <p className="mt-[1.4cqw] text-[3.5cqw] leading-relaxed text-muted-foreground">
              Your accuracy is {focusSubject.accuracy}% across {focusSubject.questionCount} questions —
              the lowest of any subject you have practised this month.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}