import { PhoneStatusBar } from "@/components/ui/PhoneMockup";

/** End-of-attempt summary: score, answer review, practice-again path. */
export function ResultsExperience() {
  return (
    <div className="flex h-full flex-col">
      <PhoneStatusBar label="Results" />

      <div className="flex flex-1 flex-col items-center justify-center px-[8.6cqw] text-center">
        <p className="text-[3.5cqw] font-semibold uppercase tracking-[0.22em] text-brand">
          Attempt submitted
        </p>
        <p
          data-result-score
          className="mt-[4.3cqw] font-display text-[14.3cqw] font-semibold tabular-nums text-brand-ink"
        >
          78%
        </p>
        <p className="mt-[2.9cqw] text-[4cqw] text-muted-foreground">
          156 of 200 correct · Weekly MECEE mock
        </p>

        <div className="mt-[10cqw] grid w-full grid-cols-2 gap-[2.9cqw]">
          <Metric label="Accuracy" value="78%" tone="success" />
          <Metric label="Rank" value="#5" tone="brand" />
        </div>

        <div className="mt-[4.3cqw] w-full space-y-[2.9cqw]">
          <span className="block rounded-xl bg-brand py-[2.9cqw] text-[4.1cqw] font-medium text-primary-foreground">
            Review answers
          </span>
          <span className="block rounded-xl border border-border py-[2.9cqw] text-[4.1cqw] text-muted-foreground">
            Practice again (unscored)
          </span>
        </div>
      </div>
    </div>
  );
}

function Metric({
  label,
  value,
  tone,
}: {
  label: string;
  value: string;
  tone: "success" | "brand";
}) {
  return (
    <div
      data-result-metric
      className={`rounded-xl border p-[4.3cqw] text-left ${
        tone === "success" ? "border-success/30 bg-success-soft" : "border-brand/25 bg-brand-soft"
      }`}
    >
      <p className="text-[3.3cqw] uppercase tracking-[0.18em] text-muted-foreground">{label}</p>
      <p className="mt-[1.4cqw] font-display text-[5cqw] font-semibold text-brand-ink">{value}</p>
    </div>
  );
}