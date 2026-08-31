import {
  ChevronRight,
  Lock,
  ShieldCheck,
  CircleHelp,
  LogOut,
  Crown,
  UserRound,
  Home,
  SquarePen,
  Trophy,
  BarChart3,
  User,
} from "lucide-react";
import { profileUser, leaderboardPodium, accountLinks } from "@/data/product";

const iconMap = {
  lock: Lock,
  shield: ShieldCheck,
  help: CircleHelp,
  logout: LogOut,
};

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

/** Profile: identity card, leaderboard podium with rank, account settings. */
export function ProfileExperience() {
  const first = leaderboardPodium.find((p) => p.place === 1)!;
  const others = leaderboardPodium.filter((p) => p.place !== 1);
  const progressPct = Math.min(
    100,
    (profileUser.xp / (profileUser.xp + profileUser.xpToTop10)) * 100,
  );

  return (
    <div className="flex h-full flex-col overflow-hidden bg-surface">
      {/* Header */}
      <div className="border-b border-border bg-card px-[5.7cqw] pb-[3.6cqw] pt-[5.7cqw]">
        <p className="font-display text-[6.4cqw] font-bold text-brand-ink">Profile</p>
      </div>

      <div className="flex-1 space-y-[5cqw] overflow-hidden px-[5cqw] pt-[5cqw]">
        {/* Profile card */}
        <div className="rounded-2xl bg-card p-[4.3cqw] shadow-soft">
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-[3.6cqw]">
              <Avatar size="h-[14.3cqw] w-[14.3cqw]" />
              <div>
                <p className="text-[4.5cqw] font-semibold text-brand-ink">{profileUser.name}</p>
                <p className="text-[3.5cqw] text-muted-foreground">{profileUser.email}</p>
              </div>
            </div>
            <button
              type="button"
              className="shrink-0 rounded-full border border-border px-[3.6cqw] py-[0.7cqw] text-[3.5cqw] font-semibold text-success"
            >
              Edit
            </button>
          </div>

          <div className="mt-[3.6cqw] grid grid-cols-3 divide-x divide-border border-t border-border pt-[3.6cqw]">
            <Stat value={profileUser.questions.toLocaleString()} label="Questions" />
            <Stat value={`${profileUser.accuracy}%`} label="Accuracy" />
            <Stat value={String(profileUser.streak)} label="Day streak" />
          </div>
        </div>

        {/* Leaderboard */}
        <div>
          <div className="flex items-center justify-between">
            <p className="font-display text-[4.9cqw] font-bold text-brand-ink">Leaderboard</p>
            <div className="flex items-center gap-[2.1cqw]">
              <span className="rounded-full border border-border px-[2.9cqw] py-[0.7cqw] text-[3.3cqw] font-semibold text-brand-ink">
                Weekly
              </span>
              <span className="rounded-full bg-muted-foreground/80 px-[2.9cqw] py-[0.7cqw] text-[3.3cqw] font-semibold text-white">
                All time
              </span>
            </div>
          </div>

          <div className="mt-[2.9cqw] rounded-2xl bg-card p-[4.3cqw] shadow-soft">
            {/* Podium */}
            <div className="flex items-end justify-center gap-[4.3cqw]">
              {others
                .filter((p) => p.place === 2)
                .map((p) => (
                  <Podium key={p.name} entry={p} size="sm" />
                ))}
              <Podium entry={first} size="lg" crown />
              {others
                .filter((p) => p.place === 3)
                .map((p) => (
                  <Podium key={p.name} entry={p} size="sm" />
                ))}
            </div>

            {/* Your rank */}
            <div className="mt-[4.3cqw] rounded-xl bg-success-soft p-[3.6cqw]">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-[2.1cqw]">
                  <span className="text-[3.7cqw] font-bold text-muted-foreground">
                    #{profileUser.rank}
                  </span>
                  <Avatar size="h-[8.6cqw] w-[8.6cqw]" iconSize="h-[4.3cqw] w-[4.3cqw]" />
                  <div>
                    <p className="text-[3.1cqw] font-semibold uppercase tracking-wide text-muted-foreground">
                      Your rank
                    </p>
                    <p className="text-[4cqw] font-semibold text-brand-ink">
                      {profileUser.name}
                    </p>
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
                  className="h-full rounded-full bg-gradient-to-r from-muted-foreground to-success"
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
        </div>

        {/* Accounts — heading only, establishes context without needing scroll */}
        <p className="font-display text-[4.9cqw] font-semibold text-brand-ink">Accounts</p>
      </div>

      {/* Bottom nav */}
      <div className="flex items-center justify-around border-t border-border bg-card px-[2.9cqw] py-[3.6cqw]">
        <Home className="h-[5.7cqw] w-[5.7cqw] text-muted-foreground" strokeWidth={2} />
        <SquarePen className="h-[5.7cqw] w-[5.7cqw] text-muted-foreground" strokeWidth={2} />
        <Trophy className="h-[5.7cqw] w-[5.7cqw] text-muted-foreground" strokeWidth={2} />
        <BarChart3 className="h-[5.7cqw] w-[5.7cqw] text-muted-foreground" strokeWidth={2} />
        <User className="h-[5.7cqw] w-[5.7cqw] text-brand" strokeWidth={2} />
      </div>
    </div>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="text-center">
      <p className="font-display text-[5cqw] font-bold text-brand-ink">{value}</p>
      <p className="text-[3.3cqw] text-muted-foreground">{label}</p>
    </div>
  );
}

function Avatar({ size, iconSize = "h-[7.1cqw] w-[7.1cqw]" }: { size: string; iconSize?: string }) {
  return (
    <span
      className={`flex ${size} shrink-0 items-center justify-center rounded-full bg-surface-2`}
    >
      <UserRound className={`${iconSize} text-muted-foreground`} strokeWidth={2} />
    </span>
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