import {
  BarChart3,
  BookOpen,
  Layers,
  ListChecks,
  Sparkles,
  SquarePen,
  Timer,
  Trophy,
} from "lucide-react";
import { cn } from "@/lib/utils";
import {
  demoFlashcards,
  demoQuestions,
  flashcardReviewSummary,
  leaderboardPodium,
  quizReviewsDueTotal,
  resultsPreview,
  weeklyMock,
  wordOfTheDay,
} from "@/data/product";

/**
 * Named placement slots around the hero phone.
 * Intentionally omits bottomLeft — reserved for the QR glass card.
 */
type FloaterSlot =
  | "topLeft"
  | "topRight"
  | "upperLeft"
  | "midLeft"
  | "midRight"
  | "bottomRight"
  | "bottomCenter"
  | "lowerMidRight";

type RichAt = "lg" | "xl";

type FloaterDef = {
  id: string;
  slot: FloaterSlot;
  layer: "behind" | "front";
  /** From this breakpoint up the floater renders as a rich peek; below that (but ≥ lg) as a compact chip. */
  richAt: RichAt;
  label: string;
  icon: typeof SquarePen;
};

const FLOATERS: FloaterDef[] = [
  {
    id: "mcq",
    slot: "midRight",
    layer: "front",
    richAt: "lg",
    label: "Practice MCQs",
    icon: SquarePen,
  },
  {
    id: "flashcards",
    slot: "topLeft",
    layer: "behind",
    richAt: "lg",
    label: "Flashcards",
    icon: Layers,
  },
  {
    id: "leaderboard",
    slot: "topRight",
    layer: "front",
    richAt: "xl",
    label: "Leaderboard",
    icon: Trophy,
  },
  {
    id: "results",
    slot: "bottomCenter",
    layer: "front",
    richAt: "xl",
    label: "Results",
    icon: BookOpen,
  },
  {
    id: "review",
    slot: "midLeft",
    layer: "behind",
    richAt: "xl",
    label: "Spaced review",
    icon: ListChecks,
  },
  {
    id: "mock",
    slot: "bottomRight",
    layer: "front",
    richAt: "xl",
    label: "Weekly mock",
    icon: Timer,
  },
  {
    id: "insights",
    slot: "upperLeft",
    layer: "behind",
    richAt: "xl",
    label: "Insights",
    icon: BarChart3,
  },
  {
    id: "word",
    slot: "lowerMidRight",
    layer: "behind",
    richAt: "xl",
    label: "Word of the Day",
    icon: Sparkles,
  },
];

/** Slot positions — never bottomLeft (QR lives there on the device group). */
const SLOT_CLASS: Record<FloaterSlot, string> = {
  topLeft: "left-0 top-[6%] -translate-x-[72%] -rotate-6",
  topRight: "right-0 top-[10%] translate-x-[68%] rotate-5",
  upperLeft: "left-0 top-[22%] -translate-x-[70%] rotate-3",
  midLeft: "left-0 top-[44%] -translate-x-[78%] -rotate-4",
  midRight: "right-0 top-[36%] translate-x-[72%] rotate-4",
  bottomRight: "right-0 bottom-[16%] translate-x-[58%] rotate-3",
  bottomCenter: "left-1/2 bottom-[4%] -translate-x-[18%] translate-y-[18%] rotate-2",
  lowerMidRight: "right-0 bottom-[38%] translate-x-[78%] -rotate-3",
};

const RICH_SURFACE =
  "rounded-2xl border border-border bg-card/95 p-3 shadow-[0_18px_40px_-18px_rgba(31,60,104,0.35)] dark:shadow-[0_18px_40px_-18px_rgba(0,0,0,0.55)]";
const CHIP_SURFACE =
  "flex items-center gap-2 rounded-full border border-border bg-card/95 px-3 py-1.5 shadow-soft";

function CompactChip({
  label,
  icon: Icon,
  detail,
}: {
  label: string;
  icon: typeof SquarePen;
  detail?: string | undefined;
}) {
  return (
    <div className={CHIP_SURFACE}>
      <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-surface-2">
        <Icon className="size-3.5 text-brand" strokeWidth={2} />
      </span>
      <div className="min-w-0">
        <p className="truncate text-[0.7rem] font-semibold text-brand-ink">{label}</p>
        {detail ? (
          <p className="truncate text-[0.62rem] text-muted-foreground">{detail}</p>
        ) : null}
      </div>
    </div>
  );
}

function McqRich() {
  const q = demoQuestions[0]!;
  return (
    <div className={cn(RICH_SURFACE, "w-[11.5rem]")}>
      <p className="text-[0.62rem] font-semibold uppercase tracking-[0.14em] text-brand">
        {q.subject}
      </p>
      <p className="mt-1.5 line-clamp-3 text-[0.72rem] font-medium leading-snug text-brand-ink">
        {q.stem}
      </p>
      <div className="mt-2 space-y-1">
        {q.options.slice(0, 2).map((opt, i) => (
          <div
            key={opt}
            className={cn(
              "rounded-lg border px-2 py-1 text-[0.65rem]",
              i === 0
                ? "border-brand/40 bg-brand/10 font-medium text-brand-ink"
                : "border-border text-muted-foreground",
            )}
          >
            {opt}
          </div>
        ))}
      </div>
    </div>
  );
}

function FlashcardRich() {
  const card = demoFlashcards[0]!;
  return (
    <div className={cn(RICH_SURFACE, "w-[10.5rem]")}>
      <p className="text-[0.62rem] font-semibold uppercase tracking-[0.14em] text-teal">
        Flashcard
      </p>
      <p className="mt-1.5 line-clamp-4 text-[0.75rem] font-semibold leading-snug text-brand-ink">
        {card.front}
      </p>
      <p className="mt-2 text-[0.62rem] text-muted-foreground">{card.subject}</p>
    </div>
  );
}

function LeaderboardRich() {
  const top =
    leaderboardPodium.find((p) => p.place === 1) ?? leaderboardPodium[0]!;
  return (
    <div className={cn(RICH_SURFACE, "w-[9.5rem]")}>
      <p className="text-[0.62rem] font-semibold uppercase tracking-[0.14em] text-brand">
        Leaderboard
      </p>
      <div className="mt-2 flex items-end gap-2">
        <span className="flex size-8 items-center justify-center rounded-full bg-brand text-[0.7rem] font-bold text-white">
          1
        </span>
        <div className="min-w-0">
          <p className="truncate text-[0.75rem] font-semibold text-brand-ink">{top.name}</p>
          <p className="text-[0.62rem] text-muted-foreground">{top.xp.toLocaleString()} XP</p>
        </div>
      </div>
    </div>
  );
}

function ResultsRich() {
  const pct = Math.round((resultsPreview.score / resultsPreview.total) * 100);
  return (
    <div className={cn(RICH_SURFACE, "flex w-[9rem] items-center gap-2.5")}>
      <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-brand text-[0.75rem] font-bold text-white">
        {pct}%
      </span>
      <div className="min-w-0">
        <p className="text-[0.7rem] font-semibold text-brand-ink">Results</p>
        <p className="text-[0.62rem] text-muted-foreground">
          {resultsPreview.score}/{resultsPreview.total} correct
        </p>
      </div>
    </div>
  );
}

function compactDetail(id: string): string | undefined {
  switch (id) {
    case "review":
      return `${quizReviewsDueTotal} due`;
    case "mock":
      return weeklyMock.subject;
    case "insights":
      return "7-day trends";
    case "word":
      return wordOfTheDay.term;
    case "leaderboard":
      return "Weekly ranks";
    case "results":
      return `${resultsPreview.score}/${resultsPreview.total}`;
    case "flashcards":
      return `${flashcardReviewSummary.count} due`;
    case "mcq":
      return demoQuestions[0]!.subject;
    default:
      return undefined;
  }
}

function RichBody({ id }: { id: string }) {
  switch (id) {
    case "mcq":
      return <McqRich />;
    case "flashcards":
      return <FlashcardRich />;
    case "leaderboard":
      return <LeaderboardRich />;
    case "results":
      return <ResultsRich />;
    default:
      return null;
  }
}

/**
 * Features that stay compact at every desktop breakpoint (never upgrade to rich).
 * Still count toward the locked “all 8 visible” requirement.
 */
const ALWAYS_COMPACT = new Set(["review", "mock", "insights", "word"]);

function FloaterItem({ def }: { def: FloaterDef }) {
  const alwaysCompact = ALWAYS_COMPACT.has(def.id);
  const showRichFromLg = def.richAt === "lg" && !alwaysCompact;
  const showRichFromXl = def.richAt === "xl" && !alwaysCompact;

  return (
    <div
      className={cn("pointer-events-none absolute hidden lg:block", SLOT_CLASS[def.slot])}
      data-hero-floater
      data-layer={def.layer}
    >
      {/* Entrance outer / idle inner — GSAP targets these separately */}
      <div data-hero-floater-enter>
        <div data-hero-floater-idle>
          {showRichFromLg ? (
            <div className="hidden lg:block">
              <RichBody id={def.id} />
            </div>
          ) : null}

          {showRichFromXl ? (
            <>
              <div className="hidden xl:block">
                <RichBody id={def.id} />
              </div>
              <div className="hidden lg:block xl:hidden">
                <CompactChip
                  label={def.label}
                  icon={def.icon}
                  detail={compactDetail(def.id)}
                />
              </div>
            </>
          ) : null}

          {alwaysCompact ? (
            <div className="hidden lg:block">
              <CompactChip
                label={def.label}
                icon={def.icon}
                detail={compactDetail(def.id)}
              />
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export function HeroFeatureFloaters({ layer }: { layer: "behind" | "front" }) {
  const items = FLOATERS.filter((f) => f.layer === layer);

  return (
    <div
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute inset-0",
        layer === "behind" ? "z-0" : "z-20",
      )}
    >
      {items.map((def) => (
        <FloaterItem key={def.id} def={def} />
      ))}
    </div>
  );
}
