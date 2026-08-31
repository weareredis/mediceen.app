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
      <div className="bg-card px-[5.7cqw] pb-[5.7cqw] pt-[7.1cqw]">
        <div className="flex items-center gap-[2.9cqw]">
          <ChevronLeft className="h-[5cqw] w-[5cqw] text-brand-ink" strokeWidth={2.5} />
          <p className="font-display text-[4.3cqw] font-semibold text-brand-ink">Today&apos;s review</p>
        </div>
        <p className="mt-[1.4cqw] pl-[8.6cqw] text-[3.3cqw] text-muted-foreground">
          {reviewQueueSummary.itemsDue} items due
        </p>
      </div>

      <div className="flex-1 space-y-[5.7cqw] overflow-hidden px-[5.7cqw] pt-[5.7cqw]">
        <div className="rounded-2xl border border-border bg-card p-[5cqw] shadow-soft">
          <p className="text-[3.7cqw] font-semibold text-brand-ink">Why review matters</p>
          <p className="mt-[1.4cqw] text-[3.2cqw] leading-relaxed text-muted-foreground">
            Questions you got wrong come back at the moment you are most likely to forget them.
            Clearing today&apos;s queue takes about 9 minutes.
          </p>
        </div>

        <div>
          <div className="flex items-center justify-between">
            <p className="font-display text-[4.3cqw] font-semibold text-brand-ink">Quiz reviews</p>
            <span className="text-[3.6cqw] font-semibold text-brand">
              {quizReviewsDueTotal} due
            </span>
          </div>
          <div className="mt-[2.9cqw] overflow-hidden rounded-2xl border border-border bg-card shadow-soft">
            {quizReviews.map((row, i) => (
              <div
                key={row.subject}
                className={`flex items-center gap-[4.3cqw] px-[5cqw] py-[3.6cqw] ${
                  i > 0 ? "border-t border-border" : ""
                }`}
              >
                <span className="flex h-[11.4cqw] w-[11.4cqw] shrink-0 items-center justify-center rounded-[10px] bg-surface-2">
                  <ListChecks className="h-[5.7cqw] w-[5.7cqw] text-success" strokeWidth={2} />
                </span>
                <span className="flex-1 text-[4.6cqw] font-medium text-brand-ink">
                  {row.subject}
                </span>
                <span className="flex h-[8.6cqw] w-[8.6cqw] items-center justify-center rounded-full bg-surface-2 text-[3.4cqw] font-semibold text-muted-foreground">
                  {row.due}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div>
          <p className="font-display text-[4.3cqw] font-semibold text-brand-ink">Flashcard reviews</p>
          <div className="mt-[2.9cqw] rounded-2xl border border-border bg-card p-[5cqw] shadow-soft">
            <p className="text-[3.7cqw] font-semibold text-brand-ink">
              {flashcardReviewSummary.count} cards due
            </p>
            <p className="mt-[0.7cqw] text-[3.2cqw] text-muted-foreground">
              {flashcardReviewSummary.subjects}
            </p>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-around border-t border-border bg-card px-[2.9cqw] py-[4.3cqw]">
        <Home className="h-[5cqw] w-[5cqw] text-brand-ink" strokeWidth={2} />
        <SquarePen className="h-[5cqw] w-[5cqw] text-muted-foreground" strokeWidth={2} />
        <Trophy className="h-[5cqw] w-[5cqw] text-muted-foreground" strokeWidth={2} />
        <BarChart3 className="h-[5cqw] w-[5cqw] text-muted-foreground" strokeWidth={2} />
        <User className="h-[5cqw] w-[5cqw] text-muted-foreground" strokeWidth={2} />
      </div>
    </div>
  );
}