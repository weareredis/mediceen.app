import { useLayoutEffect, useRef, useState, type ReactNode } from "react";
import { PageContainer } from "@/components/layout/PageContainer";
import { PhoneMockup } from "@/components/ui/PhoneMockup";
import { McqExperience } from "@/components/product/McqExperience";
import { FlashcardExperience } from "@/components/product/FlashcardExperience";
import { ReviewQueueExperience } from "@/components/product/ReviewQueueExperience";
import { MockTestExperience } from "@/components/product/MockTestExperience";
import { ResultsExperience } from "@/components/product/ResultsExperience";
import { ProgressExperience } from "@/components/product/ProgressExperience";
import { LeaderboardExperience } from "@/components/product/LeaderboardExperience";
import { WordExperience } from "@/components/product/WordExperience";
import { gsap, ScrollTrigger, prefersReducedMotion, registerGsap } from "@/animations/gsap";
import { cn } from "@/lib/utils";

type Step = {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  points: string[];
  screen: ReactNode;
};

const steps: Step[] = [
  {
    id: "practice",
    eyebrow: "Practice MCQs",
    title: "Practice with purpose.",
    description:
      "Filter by subject and difficulty, choose how many questions to run, and work through a MECEE-BL scoped bank.",
    points: ["Subject and difficulty filters", "Pick your question count"],
    screen: <McqExperience />,
  },
  {
    id: "recall",
    eyebrow: "Flashcards",
    title: "Turn information into recall.",
    description: "Use flashcards to strengthen memory and rate each card as Easy, Hard, or Missed.",
    points: ["Flip to reveal the answer", "Self-rate to shape your next session"],
    screen: <FlashcardExperience />,
  },
  {
    id: "review",
    eyebrow: "Spaced review",
    title: "Review before you forget.",
    description:
      "Mediceen uses SM-2 scheduling to bring questions back when they are due for review.",
    points: ["Due-today queue on your Home screen", "Missed items return sooner"],
    screen: <ReviewQueueExperience />,
  },
  {
    id: "mock",
    eyebrow: "Weekly MECEE mock",
    title: "Feel the pressure before exam day.",
    description:
      "Take the weekly MECEE-style mock with countdown timing, auto-submit, and a cohort paper shared by the whole batch.",
    points: ["Paced toward 200 questions in 3 hours", "Resume if the app is interrupted"],
    screen: <MockTestExperience />,
  },
  {
    id: "results",
    eyebrow: "Results",
    title: "See the whole attempt.",
    description:
      "Once the attempt closes, your score, accuracy, and cohort rank arrive with full answer review.",
    points: ["Score, accuracy and rank", "Answer review after submission"],
    screen: <ResultsExperience />,
  },
  {
    id: "progress",
    eyebrow: "Insights",
    title: "Know exactly where you stand.",
    description: "Track subject accuracy and study trends across 7 and 30 days.",
    points: ["Accuracy per subject", "Trends over 7 and 30 days"],
    screen: <ProgressExperience />,
  },
  {
    id: "leaderboard",
    eyebrow: "Leaderboard",
    title: "Consistency deserves recognition.",
    description:
      "See how you rank against the MECEE-BL cohort weekly, monthly, and all-time — your streak keeps the habit intact.",
    points: ["Daily streak tracking", "Weekly, monthly and all-time boards"],
    screen: <LeaderboardExperience />,
  },
  {
    id: "word",
    eyebrow: "Word of the Day",
    title: "Learn something new every day.",
    description:
      "Build medical vocabulary one term at a time with a new Word of the Day on your Home screen.",
    points: ["A new term every morning", "Mark terms as learned"],
    screen: <WordExperience />,
  },
];

export function ProductShowcase() {
  const rootRef = useRef<HTMLElement | null>(null);
  const [active, setActive] = useState(0);

  useLayoutEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    registerGsap();
    const reduced = prefersReducedMotion();

    const ctx = gsap.context(() => {
      const panels = gsap.utils.toArray<HTMLElement>("[data-showcase-panel]");
      panels.forEach((panel, i) => {
        ScrollTrigger.create({
          trigger: panel,
          start: "top 60%",
          end: "bottom 40%",
          onEnter: () => setActive(i),
          onEnterBack: () => setActive(i),
        });

        if (reduced) return;
        gsap.from(panel.querySelectorAll("[data-panel-item]"), {
          opacity: 0,
          y: 22,
          duration: 0.7,
          ease: "power3.out",
          stagger: 0.07,
          scrollTrigger: { trigger: panel, start: "top 72%" },
        });
      });
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="product"
      ref={rootRef}
      className="scroll-mt-24 py-12 sm:py-16 lg:py-24"
      aria-labelledby="product-showcase-heading"
    >
      <h2 id="product-showcase-heading" className="sr-only">
        Inside the Mediceen app
      </h2>

      {/*
        Sticky two-column layout only from xl (1280+). At lg (1024) the sticky
        phone pins awkwardly on tall tablets — use the stacked layout instead.
      */}
      <PageContainer
        width="wide"
        className="relative hidden xl:grid xl:grid-cols-[max-content_1fr] xl:gap-14"
      >
        <div className="relative">
          {steps.map((step, i) => (
            <div
              key={step.id}
              data-showcase-panel
              className="flex min-h-screen items-center justify-start"
            >
              <Copy step={step} index={i} />
            </div>
          ))}
        </div>

        {/* Sticky phone — top offset clears the fixed navbar */}
        <div className="pointer-events-auto sticky top-24 flex h-[calc(100dvh-6rem)] items-center justify-end">
          <div className="relative">
            <PhoneMockup className="w-[min(25vw,17.5rem)]" screenClassName="bg-background">
              <div className="relative h-full w-full">
                {steps.map((step, i) => (
                  <div
                    key={step.id}
                    className={cn(
                      "absolute inset-0 transition-opacity duration-500 ease-out",
                      i === active ? "opacity-100" : "pointer-events-none opacity-0",
                    )}
                    aria-hidden={i !== active}
                    inert={i !== active}
                  >
                    {step.screen}
                  </div>
                ))}
              </div>
            </PhoneMockup>

            <div className="mt-6 flex items-center justify-center gap-1.5">
              {steps.map((step, i) => (
                <span
                  key={step.id}
                  className={cn(
                    "h-1.5 rounded-full transition-all duration-500",
                    i === active ? "w-6 bg-brand" : "w-1.5 bg-border",
                  )}
                />
              ))}
            </div>
          </div>
        </div>
      </PageContainer>

      {/* Below xl: stacked copy + phone pairs (includes 1024 tablet) */}
      <PageContainer className="space-y-20 xl:hidden">
        {steps.map((step, i) => (
          <div key={step.id} data-showcase-panel className="flex flex-col items-center gap-6">
            <Copy step={step} index={i} className="max-w-md text-center" headingTag="p" />
            <PhoneMockup className="w-[min(70.5vw,13rem)]" tilt={i % 2 === 0 ? "right" : "left"}>
              {step.screen}
            </PhoneMockup>
          </div>
        ))}
      </PageContainer>
    </section>
  );
}

function Copy({
  step,
  index,
  className,
  headingTag = "h3",
}: {
  step: Step;
  index: number;
  className?: string;
  headingTag?: "h3" | "p";
}) {
  const HeadingComp = headingTag;
  const headingProps =
    headingTag === "p" ? { role: "heading" as const, "aria-level": 3 } : {};

  return (
    <div className={cn("w-full max-w-xl", className)}>
      <p
        data-panel-item
        className="flex items-center gap-3 text-[0.72rem] font-semibold uppercase tracking-[0.32em] text-muted-foreground"
      >
        <span className="tabular-nums text-brand">{String(index + 1).padStart(2, "0")}</span>
        <span className="h-px w-8 bg-border" />
        <span className="text-brand">{step.eyebrow}</span>
      </p>
      <HeadingComp
        data-panel-item
        {...headingProps}
        className="mt-4 text-balance-tight font-display text-[clamp(2.8rem,6.5vw,4.8rem)] font-semibold leading-[1.05] text-brand-ink"
      >
        {step.title}
      </HeadingComp>
      <p
        data-panel-item
        className="mt-5 max-w-md text-[clamp(1.02rem,1.4vw,1.2rem)] leading-relaxed text-muted-foreground"
      >
        {step.description}
      </p>
      <ul data-panel-item className="mt-6 space-y-3">
        {step.points.map((point) => (
          <li key={point} className="flex items-start gap-3 text-base text-muted-foreground">
            <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-success" />
            {point}
          </li>
        ))}
      </ul>
    </div>
  );
}
