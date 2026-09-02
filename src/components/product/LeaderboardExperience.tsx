import { ArrowUp, ChevronLeft, Crown } from "lucide-react";
import { cn } from "@/lib/utils";

const WEEK_LABEL = "Week 12 • Medical Biology";
const COMPLETED_COUNT = "1,240 students completed this weekly test.";
const FOOTNOTE = "Ranks are final for completed weekly tests. Ties are broken by completion time.";

const podium = [
  { place: 2, name: "Ram", xp: "16,420 XP", initials: "R", tone: "bg-rose-200 text-rose-800" },
  { place: 1, name: "Rohan", xp: "18,420 XP", initials: "R", tone: "bg-amber-200 text-amber-900" },
  { place: 3, name: "Sam", xp: "12,420 XP", initials: "S", tone: "bg-sky-200 text-sky-800" },
] as const;

const nearbyRanks = [
  { rank: 4, name: "Sujata Bhandari", time: "22m 15s", score: "18/20" },
  { rank: 5, name: "Rohan Thapa", time: "24m 02s", score: "18/20" },
  { rank: 6, name: "Manisha Gurung", time: "23m 48s", score: "17/20" },
  { rank: 127, name: "Bibek Rai", time: "27m 30s", score: "14/20" },
  { rank: 128, name: "You (you)", time: "28m 12s", score: "14/20", you: true },
  { rank: 129, name: "Sneha Joshi", time: "28m 55s", score: "14/20" },
];

const sparkles = [
  "left-[4cqw] top-[4cqw] h-[4cqw] w-[3cqw] text-blue-300",
  "left-[18cqw] top-[7cqw] h-[2.2cqw] w-[1.6cqw] text-blue-300",
  "left-[32cqw] top-[11cqw] h-[3.2cqw] w-[2.4cqw] text-sky-300",
  "left-[30cqw] top-[29cqw] h-[2cqw] w-[1.6cqw] text-blue-100",
  "left-[36cqw] top-[3cqw] h-[4.5cqw] w-[3.4cqw] text-blue-100",
  "left-[56cqw] top-[8cqw] h-[2cqw] w-[1.5cqw] text-blue-100",
  "left-[58cqw] top-[16cqw] h-[3.4cqw] w-[2.6cqw] text-sky-300",
  "left-[71cqw] top-[6cqw] h-[4cqw] w-[3cqw] text-blue-100",
  "left-[86cqw] top-[10cqw] h-[3.6cqw] w-[2.8cqw] text-blue-300",
  "left-[8cqw] top-[36cqw] h-[4cqw] w-[3cqw] text-blue-100",
  "left-[82cqw] top-[37cqw] h-[2.4cqw] w-[1.8cqw] text-blue-300",
  "left-[57cqw] top-[36cqw] h-[2.4cqw] w-[1.8cqw] text-blue-300",
];

function Sparkle({ className }: { className: string }) {
  return (
    <span
      aria-hidden="true"
      className={cn("pointer-events-none absolute bg-current", className)}
      style={{
        clipPath:
          "polygon(50% 0%, 61% 35%, 100% 50%, 61% 65%, 50% 100%, 39% 65%, 0% 50%, 39% 35%)",
      }}
    />
  );
}

/** Weekly leaderboard: podium, your-rank card, and nearby ranks. */
export function LeaderboardExperience() {
  return (
    <div className="flex h-full flex-col overflow-hidden bg-slate-50">
      <header className="flex shrink-0 items-center gap-[2.9cqw] border-b border-gray-200 bg-white px-[3.2cqw] py-[4.3cqw]">
        <span className="flex h-[8.6cqw] w-[8.6cqw] shrink-0 items-center justify-center rounded-full">
          <ChevronLeft className="h-[5cqw] w-[5cqw] text-gray-900" strokeWidth={2.4} />
        </span>
        <div className="min-w-0">
          <p className="text-[4.3cqw] font-bold leading-tight text-gray-900">Leaderboard</p>
          <p className="mt-[0.4cqw] text-[3.2cqw] font-normal leading-tight text-slate-500">
            {WEEK_LABEL}
          </p>
        </div>
      </header>

      <div className="min-h-0 flex-1 overflow-y-auto px-[6.4cqw] pb-[4.3cqw] pt-[3.2cqw] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        <p className="text-[3.2cqw] font-medium text-slate-500">{COMPLETED_COUNT}</p>

        <div className="relative mt-[3.2cqw] overflow-hidden rounded-[6cqw] bg-white">
          {sparkles.map((className) => (
            <Sparkle key={className} className={className} />
          ))}

          <div className="relative flex items-end justify-center gap-[6cqw] px-[4cqw] pb-[2cqw] pt-[8cqw]">
            {podium.map((entry) => (
              <PodiumPerson key={entry.place} entry={entry} />
            ))}
          </div>

          <div className="relative mx-[4.5cqw] mb-[4.5cqw] mt-[2.5cqw] rounded-xl bg-green-50 px-[3.2cqw] py-[3.5cqw]">
            <div className="flex items-center gap-[2.4cqw]">
              <p className="shrink-0 text-[3.2cqw] font-bold text-green-700">#24</p>
              <span className="flex h-[9.6cqw] w-[9.6cqw] shrink-0 items-center justify-center rounded-full bg-green-700 text-[3.2cqw] font-semibold text-white">
                BP
              </span>
              <div className="min-w-0 flex-1">
                <p className="text-[2.6cqw] font-semibold tracking-tight text-neutral-500">
                  Your rank
                </p>
                <p className="truncate text-[3.7cqw] font-semibold leading-tight text-gray-900">
                  Alex Karki
                </p>
              </div>
              <div className="shrink-0 text-right">
                <p className="text-[3.7cqw] font-bold leading-tight text-gray-900">9,310 XP</p>
                <p className="mt-[0.4cqw] inline-flex items-center justify-end gap-[0.6cqw] text-[3cqw] font-medium text-green-700">
                  <ArrowUp className="h-[2.8cqw] w-[2.8cqw]" strokeWidth={2.5} />
                  1 this week
                </p>
              </div>
            </div>

            <div className="mt-[4cqw] h-[1.5cqw] overflow-hidden rounded-full bg-white">
              <div
                className="h-full rounded-full bg-gradient-to-r from-green-400 to-emerald-300"
                style={{ width: "70%" }}
              />
            </div>
            <p className="mt-[1.6cqw] text-[3.2cqw] leading-snug text-slate-500">
              You&apos;re <span className="font-bold text-black">640 XP</span> away from the top 10.
            </p>
          </div>
        </div>

        <p className="mt-[4.3cqw] text-[3.2cqw] font-bold uppercase tracking-wider text-slate-500">
          Around your rank
        </p>

        <div className="mt-[2.5cqw] overflow-hidden rounded-2xl border border-gray-200 bg-white">
          {nearbyRanks.map((row, i) => (
            <div
              key={row.rank}
              className={cn(
                "flex items-center gap-[3.2cqw] px-[4.3cqw] py-[3.4cqw]",
                i > 0 && "border-t border-gray-200",
                row.you && "bg-indigo-50",
              )}
            >
              <span
                className={cn(
                  "w-[9cqw] shrink-0 text-[3.2cqw] font-bold",
                  row.you ? "text-indigo-600" : "text-slate-500",
                )}
              >
                #{row.rank}
              </span>
              <div className="min-w-0 flex-1">
                <p
                  className={cn(
                    "truncate text-[3.7cqw] font-semibold leading-tight",
                    row.you ? "text-indigo-600" : "text-gray-900",
                  )}
                >
                  {row.name}
                </p>
                <p className="mt-[0.4cqw] text-[3.2cqw] font-normal text-slate-500">{row.time}</p>
              </div>
              <span className="shrink-0 text-[3.7cqw] font-bold text-gray-900">{row.score}</span>
            </div>
          ))}
        </div>

        <p className="mx-auto mt-[3.6cqw] max-w-[78cqw] pb-[2cqw] text-center text-[3.2cqw] leading-snug text-slate-500">
          {FOOTNOTE}
        </p>
      </div>
    </div>
  );
}

function PodiumPerson({
  entry,
}: {
  entry: (typeof podium)[number];
}) {
  const isFirst = entry.place === 1;
  const badge =
    entry.place === 1
      ? "bg-amber-400"
      : entry.place === 2
        ? "bg-gray-400"
        : "bg-orange-400";

  return (
    <div className={cn("flex w-[21cqw] flex-col items-center", isFirst && "-translate-y-[3cqw]")}>
      <div className="relative mb-[1.5cqw] flex h-[24cqw] w-[21cqw] items-end justify-center">
        {isFirst ? (
          <Crown
            className="absolute left-1/2 top-0 h-[4cqw] w-[4.6cqw] -translate-x-1/2 fill-amber-400 text-amber-400"
            strokeWidth={1.5}
          />
        ) : null}
        <span
          className={cn(
            "relative flex items-center justify-center rounded-full",
            isFirst
              ? "h-[17cqw] w-[17cqw] border-[1.1cqw] border-orange-100"
              : "h-[17cqw] w-[17cqw]",
          )}
        >
          <span
            className={cn(
              "flex h-[16cqw] w-[16cqw] items-center justify-center rounded-full text-[5cqw] font-bold",
              entry.tone,
            )}
          >
            {entry.initials}
          </span>
          <span
            className={cn(
              "absolute -bottom-[0.4cqw] left-1/2 flex h-[4.3cqw] w-[4.3cqw] -translate-x-1/2 items-center justify-center rounded-full text-[2.6cqw] font-medium text-white",
              badge,
            )}
          >
            {entry.place}
          </span>
        </span>
      </div>
      <p className="text-center text-[3.7cqw] font-semibold leading-tight text-gray-900">
        {entry.name}
      </p>
      <p className="mt-[0.3cqw] text-center text-[3.2cqw] font-normal text-slate-500">{entry.xp}</p>
    </div>
  );
}
