import { ChevronLeft, ListChecks, Home, SquarePen, Trophy, BarChart3, User } from "lucide-react";
import {
  reviewQueueSummary,
  quizReviews,
  quizReviewsDueTotal,
  flashcardReviewSummary,
} from "@/data/product";

export function ReviewQueueExperience() {
  return (
    <div className="flex h-full flex-col bg-surface">
      <div className="bg-card px-4 pb-4 pt-5">
        <div className="flex items-center gap-2">
          <ChevronLeft className="h-4 w-4 text-brand-ink" strokeWidth={2.5} />
          <p className="font-display text-sm font-semibold text-brand-ink">Today&apos;s review</p>
        </div>
        <p className="mt-1 pl-6 text-[0.68rem] text-muted-foreground">
          {reviewQueueSummary.itemsDue} items due
        </p>
      </div>

      <div className="flex-1 space-y-4 overflow-hidden px-4 pt-4">
        <div className="rounded-2xl border border-border bg-card p-3.5 shadow-soft">
          <p className="text-[0.78rem] font-semibold text-brand-ink">Why review matters</p>
          <p className="mt-1 text-[0.66rem] leading-relaxed text-muted-foreground">
            Questions you got wrong come back at the moment you are most likely to forget them.
            Clearing today&apos;s queue takes about 9 minutes.
          </p>
        </div>

        <div>
          <div className="flex items-center justify-between">
            <p className="font-display text-sm font-semibold text-brand-ink">Quiz reviews</p>
            <span className="text-[0.7rem] font-semibold text-brand">
              {quizReviewsDueTotal} due
            </span>
          </div>
          <div className="mt-2 overflow-hidden rounded-2xl border border-border bg-card shadow-soft">
            {quizReviews.map((row, i) => (
              <div
                key={row.subject}
                className={`flex items-center gap-3 px-3.5 py-2.5 ${
                  i > 0 ? "border-t border-border" : ""
                }`}
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-[10px] bg-surface-2">
                  <ListChecks className="h-4 w-4 text-success" strokeWidth={2} />
                </span>
                <span className="flex-1 text-[0.8rem] font-medium text-brand-ink">
                  {row.subject}
                </span>
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-surface-2 text-[0.66rem] font-semibold text-muted-foreground">
                  {row.due}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div>
          <p className="font-display text-sm font-semibold text-brand-ink">Flashcard reviews</p>
          <div className="mt-2 rounded-2xl border border-border bg-card p-3.5 shadow-soft">
            <p className="text-[0.78rem] font-semibold text-brand-ink">
              {flashcardReviewSummary.count} cards due
            </p>
            <p className="mt-0.5 text-[0.66rem] text-muted-foreground">
              {flashcardReviewSummary.subjects}
            </p>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-around border-t border-border bg-card px-2 py-3">
        <Home className="h-4 w-4 text-brand-ink" strokeWidth={2} />
        <SquarePen className="h-4 w-4 text-muted-foreground" strokeWidth={2} />
        <Trophy className="h-4 w-4 text-muted-foreground" strokeWidth={2} />
        <BarChart3 className="h-4 w-4 text-muted-foreground" strokeWidth={2} />
        <User className="h-4 w-4 text-muted-foreground" strokeWidth={2} />
      </div>
    </div>
  );
}