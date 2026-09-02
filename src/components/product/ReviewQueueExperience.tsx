import {
  Check,
  ChevronLeft,
  ChevronRight,
  ChevronUp,
  Lightbulb,
  Star,
  X,
} from "lucide-react";
import { demoQuestions } from "@/data/product";
import { cn } from "@/lib/utils";

const CURRENT_QUESTION = 5;
const TOTAL_QUESTIONS = 20;
const CORRECT_INDEX = 0;
const SELECTED_INDEX = 1;

const EXPLANATION =
  "Vitamin B12 deficiency disrupts DNA synthesis, causing enlarged immature red blood cells (megaloblastic anaemia). It can also damage nerves, leading to numbness, tingling, weakness, or balance problems.";

const KEY_POINT =
  "Vitamin B12 is essential for red blood cell formation and nervous system function";

/** Answer review after an attempt: stem, marked options, explanation, and key points. */
export function ReviewQueueExperience() {
  const q = demoQuestions[0]!;

  return (
    <div className="flex h-full flex-col overflow-hidden bg-surface">
      <header className="shrink-0 bg-card px-[5.7cqw] pb-[3.6cqw] pt-[5cqw]">
        <div className="flex items-start gap-[2.5cqw]">
          <ChevronLeft
            className="mt-[0.7cqw] h-[5.5cqw] w-[5.5cqw] shrink-0 text-brand-ink"
            strokeWidth={2.5}
          />
          <div className="min-w-0">
            <p className="text-[5cqw] font-bold leading-tight text-brand-ink">
              Review answers
            </p>
            <p className="mt-[0.4cqw] text-[3.4cqw] text-muted-foreground">
              Question {CURRENT_QUESTION} of {TOTAL_QUESTIONS}
            </p>
          </div>
        </div>
      </header>

      <div className="flex min-h-0 flex-1 flex-col gap-[3.6cqw] overflow-hidden px-[5cqw] pb-[2.9cqw] pt-[2.1cqw]">
        <article className="shrink-0 rounded-[4cqw] bg-card px-[5cqw] pb-[5cqw] pt-[4.3cqw] shadow-soft">
          <div className="flex items-center justify-between gap-[2.9cqw]">
            <span className="inline-flex items-center rounded-full bg-success-soft px-[3.6cqw] py-[1.2cqw] text-[3cqw] font-semibold text-success">
              {q.subject}
            </span>
            <Star
              className="h-[5cqw] w-[5cqw] shrink-0 text-warning"
              strokeWidth={2}
              aria-hidden="true"
            />
          </div>

          <h3 className="mt-[4cqw] text-[4.6cqw] font-bold leading-snug tracking-tight text-brand-ink">
            {q.stem}
          </h3>

          <ul className="mt-[4.3cqw] space-y-[2.5cqw]">
            {q.options.map((opt, oi) => {
              const isCorrect = oi === CORRECT_INDEX;
              const isWrong = oi === SELECTED_INDEX && !isCorrect;
              const letter = String.fromCharCode(65 + oi);

              return (
                <li
                  key={opt}
                  className={cn(
                    "flex items-center gap-[3.2cqw] rounded-[3.2cqw] border px-[3.6cqw] py-[2.9cqw]",
                    isCorrect && "border-success/50 bg-success-soft",
                    isWrong && "border-destructive/50 bg-destructive/10",
                    !isCorrect && !isWrong && "border-border bg-card",
                  )}
                >
                  {isCorrect ? (
                    <span className="flex h-[7.5cqw] w-[7.5cqw] shrink-0 items-center justify-center rounded-full bg-success">
                      <Check className="h-[4cqw] w-[4cqw] text-white" strokeWidth={3} />
                    </span>
                  ) : isWrong ? (
                    <span className="flex h-[7.5cqw] w-[7.5cqw] shrink-0 items-center justify-center rounded-full bg-destructive">
                      <X className="h-[4cqw] w-[4cqw] text-white" strokeWidth={3} />
                    </span>
                  ) : (
                    <span className="flex h-[7.5cqw] w-[7.5cqw] shrink-0 items-center justify-center rounded-full bg-surface-2 text-[3.2cqw] font-bold text-muted-foreground">
                      {letter}
                    </span>
                  )}
                  <span className="text-[3.8cqw] font-semibold leading-snug text-brand-ink">
                    {opt}
                  </span>
                </li>
              );
            })}
          </ul>
        </article>

        <section className="min-h-0 shrink overflow-hidden rounded-[3.6cqw] border border-success/25 bg-success-soft px-[4.3cqw] py-[3.6cqw]">
          <div className="flex items-center justify-between gap-[2.9cqw]">
            <div className="flex items-center gap-[1.8cqw]">
              <span className="flex h-[6cqw] w-[6cqw] items-center justify-center rounded-full bg-success">
                <Lightbulb className="h-[3.4cqw] w-[3.4cqw] text-white" strokeWidth={2.4} />
              </span>
              <p className="text-[3.2cqw] font-bold uppercase tracking-wide text-brand-ink">
                Explanation
              </p>
            </div>
            <ChevronUp
              className="h-[4.3cqw] w-[4.3cqw] text-brand-ink"
              strokeWidth={2.5}
              aria-hidden="true"
            />
          </div>

          <p className="mt-[2.5cqw] text-[3.2cqw] font-medium leading-relaxed text-brand-ink/75">
            {EXPLANATION}
          </p>

          <div className="mt-[3.2cqw] rounded-[2.9cqw] border border-border/80 bg-card px-[3.6cqw] py-[2.9cqw]">
            <div className="flex items-center gap-[1.4cqw]">
              <span className="flex h-[5cqw] w-[5cqw] items-center justify-center rounded-full bg-success-soft">
                <Lightbulb className="h-[3cqw] w-[3cqw] text-success" strokeWidth={2.4} />
              </span>
              <p className="text-[2.8cqw] font-semibold text-brand-ink">Key Points</p>
            </div>
            <p className="mt-[1.4cqw] text-[2.8cqw] font-medium leading-relaxed text-brand-ink/70">
              {KEY_POINT}
            </p>
          </div>
        </section>
      </div>

      <footer className="shrink-0 border-t border-border/70 bg-surface px-[5cqw] py-[3.6cqw]">
        <div className="flex items-center gap-[2.9cqw]">
          <button
            type="button"
            className="flex flex-1 items-center justify-center gap-[1.4cqw] rounded-[3.2cqw] border border-border bg-card py-[3.2cqw] text-[3.6cqw] font-semibold text-brand-ink shadow-sm"
          >
            <ChevronLeft className="h-[4cqw] w-[4cqw]" strokeWidth={2.5} />
            Previous
          </button>
          <button
            type="button"
            className="flex flex-[1.15] items-center justify-center gap-[1.4cqw] rounded-[3.2cqw] bg-success py-[3.2cqw] text-[3.6cqw] font-semibold text-white shadow-sm"
          >
            Next
            <ChevronRight className="h-[4cqw] w-[4cqw]" strokeWidth={2.5} />
          </button>
        </div>
      </footer>
    </div>
  );
}
