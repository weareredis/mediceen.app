import { X } from "lucide-react";
import { demoQuestions } from "@/data/product";

const TOTAL_QUESTIONS = 20;
const CURRENT_QUESTION = 1;
const TIME_REMAINING = "1:12";
const SELECTED_INDEX = 0;

export function McqExperience() {
  const q = demoQuestions[0]!;
  const progress = (CURRENT_QUESTION / TOTAL_QUESTIONS) * 100;

  return (
    <div className="flex h-full flex-col bg-surface">
      <div className="bg-card px-[7cqw] pb-[4cqw] pt-[7cqw]">
        <div className="flex items-center justify-between">
          <span className="w-[8cqw] shrink-0" aria-hidden="true" />
          <div className="flex-1 text-center">
            <p className="font-display text-[5cqw] font-semibold text-brand-ink">Practice MCQ</p>
            <p className="text-[3.8cqw] text-muted-foreground">
              Question {CURRENT_QUESTION} of {TOTAL_QUESTIONS}
            </p>
          </div>
          <button type="button" className="w-[8cqw] shrink-0 text-right text-brand-ink" aria-label="Close">
            <X className="ml-auto h-[4cqw] w-[4cqw]" strokeWidth={2.5} />
          </button>
        </div>

        <div className="mt-[4cqw] flex items-center gap-[3cqw]">
          <div className="h-[1.4cqw] flex-1 overflow-hidden rounded-xl bg-surface-2">
            <div className="h-full rounded-xl bg-brand" style={{ width: `${progress}%` }} />
          </div>
          <span className="text-[3.8cqw] text-brand-ink">{TIME_REMAINING}</span>
        </div>
      </div>

      <div className="px-[5.5cqw] pt-[5.5cqw]">
        <article
          data-mcq-card
          className="rounded-2xl border border-border bg-surface-2 p-[5.5cqw] shadow-soft"
        >
          <span className="inline-block rounded-full bg-success-soft px-[4.3cqw] py-[1.4cqw] text-[3.8cqw] font-medium text-success">
            {q.subject}
          </span>
          <h3 className="mt-[4cqw] font-display text-[4.9cqw] font-semibold leading-snug text-brand-ink">
            {q.stem}
          </h3>

          <ul className="mt-[5.5cqw] space-y-[3cqw]">
            {q.options.map((opt, oi) => {
              const isSelected = oi === SELECTED_INDEX;
              return (
                <li
                  key={opt}
                  data-mcq-option={oi}
                  className={`flex items-center gap-[3cqw] rounded-xl border px-[4.3cqw] py-[2.9cqw] text-[4.3cqw] font-medium ${
                    isSelected
                      ? "border-success bg-success-soft text-brand-ink"
                      : "border-border bg-card text-brand-ink"
                  }`}
                >
                  <span className="flex h-[8.5cqw] w-[8.5cqw] shrink-0 items-center justify-center rounded-full bg-surface-2 text-[3.8cqw] font-bold text-muted-foreground">
                    {String.fromCharCode(65 + oi)}
                  </span>
                  <span className="leading-snug">{opt}</span>
                </li>
              );
            })}
          </ul>
        </article>
      </div>

      <div className="flex-1" />

      <div className="border-t border-border bg-card px-[5.5cqw] py-[5.5cqw]">
        <div className="flex items-center gap-[3cqw]">
          <button
            type="button"
            className="rounded-2xl border border-border bg-card px-[7cqw] py-[3.6cqw] text-[5cqw] font-semibold text-brand-ink"
          >
            Skip
          </button>
          <button
            type="button"
            className="flex-1 rounded-2xl bg-gradient-to-r from-success to-teal py-[3.6cqw] text-[5cqw] font-semibold text-white"
          >
            Confirm answer
          </button>
        </div>
      </div>
    </div>
  );
}