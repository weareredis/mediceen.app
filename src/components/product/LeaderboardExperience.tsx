import { ChevronLeft, Crown, UserRound } from "lucide-react";
import { leaderboardPodium, profileUser } from "@/data/product";

const WEEK_LABEL = "Week 12 • Medical Biology";
const COMPLETED_COUNT = "1,240 students completed this weekly test.";
const FOOTNOTE = "Ranks are final for completed weekly tests. Ties are broken by completion time.";

const rankRingColor: Record<number, string> = {
  1: "ring-warning",
  2: "ring-border",
  3: "ring-brand/50",
};

const rankBadgeColor: Record<number, string> = {
  1: "bg-warning",
  2: "bg-muted-foreground",
  3: "bg-brand/70",
};

/** Full-screen weekly leaderboard: podium, your-rank card, and closing note. */
export function LeaderboardExperience() {
  const first = leaderboardPodium.find((p) => p.place === 1)!;
  const second = leaderboardPodium.find((p) => p.place === 2)!;
  const third = leaderboardPodium.find((p) => p.place === 3)!;
  const progressPct = Math.min(
    100,
    (profileUser.xp / (profileUser.xp + profileUser.xpToTop10)) * 100,
  );

  return (
    <div className="flex h-full flex-col bg-gradient-to-b from-brand-ink to-brand">
      <div className="border-b border-white/10 bg-card px-[5.7cqw] pb-[3.6cqw] pt-[7.1cqw]">
        <div className="flex items-center gap-[2.9cqw]">
          <ChevronLeft className="h-[5cqw] w-[5cqw] text-brand-ink" strokeWidth={2.5} />
          <div>
            <p className="font-display text-[4.6cqw] font-bold text-brand-ink">Leaderboard</p>
            <p className="text-[3.3cqw] text-muted-foreground">{WEEK_LABEL}</p>
          </div>
        </div>
      </div>

      <div className="flex-1 space-y-[3.6cqw] overflow-hidden px-[5.7cqw] pt-[5.7cqw]">
        <p className="text-[3.4cqw] font-medium text-white/90">{COMPLETED_COUNT}</p>

        <div className="rounded-[6cqw] bg-card p-[5cqw] shadow-soft">
          <div className="flex items-end justify-center gap-[4.3cqw] pt-[2.9cqw]">
            <Podium entry={second} size="sm" />
            <Podium entry={first} size="lg" crown />
            <Podium entry={third} size="sm" />
          </div>

          <div className="mt-[5cqw] rounded-2xl bg-success-soft p-[3.6cqw]">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-[2.1cqw]">
                <span className="text-[3.7cqw] font-bold text-muted-foreground">
                  #{profileUser.rank}
                </span>
                <span className="flex h-[8.6cqw] w-[8.6cqw] shrink-0 items-center justify-center rounded-full bg-surface-2">
                  <UserRound className="h-[4.3cqw] w-[4.3cqw] text-muted-foreground" strokeWidth={2} />
                </span>
                <div>
                  <p className="text-[3.1cqw] font-semibold uppercase tracking-wide text-muted-foreground">
                    Your rank
                  </p>
                  <p className="text-[4cqw] font-semibold text-brand-ink">{profileUser.name}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-[3.7cqw] font-bold text-brand-ink">
                  {profileUser.xp.toLocaleString()} XP
                </p>
                <p className="text-[3.1cqw] text-muted-foreground">
                  ↑{profileUser.weeklyGainRank} this week
                </p>
              </div>
            </div>

            <div className="mt-[2.9cqw] h-[2.1cqw] overflow-hidden rounded-full bg-white/60">
              <div
                className="h-full rounded-full bg-gradient-to-r from-success/70 to-success"
                style={{ width: `${progressPct}%` }}
              />
            </div>
            <p className="mt-[2.1cqw] text-[3.4cqw] text-muted-foreground">
              You&apos;re{" "}
              <span className="font-semibold text-brand-ink">{profileUser.xpToTop10} XP</span>{" "}
              away from the top 10.
            </p>
          </div>
        </div>

        <p className="px-[4.3cqw] text-center text-[3.3cqw] text-white/70">{FOOTNOTE}</p>
      </div>
    </div>
  );
}

function Podium({
  entry,
  size,
  crown,
}: {
  entry: { place: number; name: string; xp: number };
  size: "sm" | "lg";
  crown?: boolean;
}) {
  const dim = size === "lg" ? "h-[17.1cqw] w-[17.1cqw]" : "h-[12.9cqw] w-[12.9cqw]";
  const iconDim = size === "lg" ? "h-[8.6cqw] w-[8.6cqw]" : "h-[5.7cqw] w-[5.7cqw]";
  return (
    <div className="flex flex-col items-center">
      <div className="relative">
        {crown && (
          <Crown
            className="absolute -top-[4.3cqw] left-1/2 h-[5cqw] w-[5cqw] -translate-x-1/2 fill-warning text-warning"
            strokeWidth={1.5}
          />
        )}
        <span
          className={`flex ${dim} items-center justify-center rounded-full bg-surface-2 ring-[1.4cqw] ring-offset-[0.7cqw] ring-offset-card ${rankRingColor[entry.place]}`}
        >
          <UserRound className={`${iconDim} text-muted-foreground`} strokeWidth={2} />
        </span>
        <span
          className={`absolute -bottom-[1.4cqw] left-1/2 flex h-[5.7cqw] w-[5.7cqw] -translate-x-1/2 items-center justify-center rounded-full text-[3cqw] font-bold text-white ring-[0.7cqw] ring-card ${rankBadgeColor[entry.place]}`}
        >
          {entry.place}
        </span>
      </div>
      <p className="mt-[2.9cqw] text-[3.5cqw] font-semibold text-brand-ink">{entry.name}</p>
      <p className="text-[3.1cqw] text-muted-foreground">{entry.xp.toLocaleString()} XP</p>
    </div>
  );
}