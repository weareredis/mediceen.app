import { useState } from "react";
import { Star, X, Atom } from "lucide-react";
import { demoFlashcards } from "@/data/product";

const TOTAL_QUESTIONS = 20;
const CURRENT_QUESTION = 1;
const TIME_REMAINING = "1:12";
const STREAK = 5;

export function FlashcardExperience() {
  const card = demoFlashcards[0]!;
  const progress = (CURRENT_QUESTION / TOTAL_QUESTIONS) * 100;
  const [flipped, setFlipped] = useState(false);

  return (
    <div className="flex h-full flex-col bg-card">
      <div className="px-[5.7cqw] pb-[2.9cqw] pt-[5.7cqw]">
        <div className="flex items-center justify-between">
          <span className="w-[8.6cqw] shrink-0" aria-hidden="true" />
          <div className="flex-1 text-center">
            <p className="font-display text-[4.3cqw] font-semibold text-brand-ink">
              Practice Flash card
            </p>
            <p className="text-[3.3cqw] text-muted-foreground">
              Question {CURRENT_QUESTION} of {TOTAL_QUESTIONS}
            </p>
          </div>
          <button type="button" className="w-[8.6cqw] shrink-0 text-right text-brand-ink" aria-label="Close">
            <X className="ml-auto h-[5cqw] w-[5cqw]" strokeWidth={2.5} />
          </button>
        </div>

        <div className="mt-[2.9cqw] flex items-center gap-[2.9cqw]">
          <div className="h-[1.4cqw] flex-1 overflow-hidden rounded-xl bg-surface-2">
            <div className="h-full rounded-xl bg-brand" style={{ width: `${progress}%` }} />
          </div>
          <span className="text-[3.7cqw] text-brand-ink">{TIME_REMAINING}</span>
        </div>
      </div>

      <div className="flex justify-center pb-[2.9cqw]">
        <span className="flex items-center gap-[1.4cqw] rounded-full bg-card px-[3.6cqw] py-[1.4cqw] text-[4.3cqw] font-extrabold text-brand-ink shadow-soft">
          <span aria-hidden="true">🔥</span>
          {STREAK}
        </span>
      </div>

      <div
        className="relative flex flex-1 items-center justify-center px-[8.6cqw]"
        style={{ perspective: "1200px" }}
        data-card-scene
      >
        <div className="relative aspect-[4/5] w-[68%]">
          <div
            className="absolute inset-0 translate-x-[1.4cqw] translate-y-[0.7cqw] rotate-2 rounded-[1.4rem] bg-brand/30"
            aria-hidden="true"
          />
          <div
            className="absolute inset-0 -translate-x-[0.7cqw] translate-y-[0.7cqw] -rotate-2 rounded-[1.4rem] bg-surface-2 shadow-soft"
            aria-hidden="true"
          />

          <button
            type="button"
            data-card-inner
            onClick={() => setFlipped((f) => !f)}
            aria-pressed={flipped}
            aria-label={flipped ? "Show question" : "Reveal answer"}
            className="relative h-full w-full cursor-pointer pointer-events-auto transition-transform duration-500 ease-out"
            style={{
              transformStyle: "preserve-3d",
              transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
            }}
          >
            <Face className="border-none bg-success shadow-soft outline outline-2 -outline-offset-2 outline-success">
              <div className="flex items-start justify-between">
                <span className="rounded-3xl bg-white/40 px-[2.9cqw] py-[0.7cqw] text-[3cqw] font-extrabold text-success">
                  {card.subject}
                </span>
                <Star className="h-[4.3cqw] w-[4.3cqw] fill-yellow-400 text-yellow-400" aria-hidden="true" />
              </div>
              <p className="mt-[5.7cqw] flex-1 text-center font-display text-[3.9cqw] font-extrabold leading-snug text-white">
                {card.front}
              </p>
              <p className="text-center text-[2.7cqw] font-extrabold uppercase tracking-wide text-white/75">
                Tap to reveal answer
              </p>
            </Face>

            <Face
              className="border-none bg-success shadow-soft outline outline-2 -outline-offset-2 outline-success"
              style={{ transform: "rotateY(180deg)" }}
            >
              <Atom className="absolute left-[2.9cqw] top-[2.9cqw] h-[8.6cqw] w-[8.6cqw] text-white/25" strokeWidth={1.5} aria-hidden="true" />
              <Atom className="absolute bottom-[2.9cqw] right-[2.9cqw] h-[8.6cqw] w-[8.6cqw] rotate-45 text-white/25" strokeWidth={1.5} aria-hidden="true" />
              <div className="flex flex-1 items-center justify-center">
                <p className="text-center font-display text-[5cqw] font-extrabold text-white">
                  {card.back}
                </p>
              </div>
            </Face>
          </button>
        </div>
      </div>

      <div className="px-[5.7cqw] pb-[5.7cqw] pt-[1.4cqw]">
        <p className="mb-[2.9cqw] text-center text-[3.7cqw] text-muted-foreground">How well did you know it?</p>
        <div data-card-ratings className="grid grid-cols-3 gap-[2.9cqw]">
          <Rating label="Missed" emoji="🙁" tone="danger" />
          <Rating label="Hard" emoji="😐" tone="warning" />
          <Rating label="Easy" emoji="😊" tone="success" />
        </div>
      </div>
    </div>
  );
}

function Face({ children, className, style }: { children: React.ReactNode; className?: string; style?: React.CSSProperties }) {
  return (
    <div
      className={`absolute inset-0 flex flex-col justify-between overflow-hidden rounded-[1.4rem] p-[5cqw] ${className ?? ""}`}
      style={{ backfaceVisibility: "hidden", ...style }}
    >
      {children}
    </div>
  );
}

function Rating({ label, emoji, tone }: { label: string; emoji: string; tone: "success" | "warning" | "danger" }) {
  const tones = {
    success: "border-success/40 bg-success-soft text-success",
    warning: "border-warning/40 bg-warning-soft text-warning",
    danger: "border-destructive/40 bg-destructive-soft text-destructive",
  } as const;
  return (
    <span className={`flex flex-col items-center gap-[0.7cqw] rounded-lg border py-[2.9cqw] text-center text-[3.4cqw] ${tones[tone]}`}>
      <span className="text-[5cqw]" aria-hidden="true">{emoji}</span>
      {label}
    </span>
  );
}