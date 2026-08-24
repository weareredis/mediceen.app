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
      <div className="border-b border-border bg-card px-4 pb-2.5 pt-4">
        <p className="font-display text-lg font-bold text-brand-ink">Profile</p>
      </div>

      <div className="flex-1 space-y-3.5 overflow-hidden px-3.5 pt-3.5">
        {/* Profile card */}
        <div className="rounded-2xl bg-card p-3 shadow-soft">
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-2.5">
              <Avatar size="h-10 w-10" />
              <div>
                <p className="text-[0.78rem] font-semibold text-brand-ink">{profileUser.name}</p>
                <p className="text-[0.62rem] text-muted-foreground">{profileUser.email}</p>
              </div>
            </div>
            <button
              type="button"
              className="shrink-0 rounded-full border border-border px-2.5 py-0.5 text-[0.62rem] font-semibold text-success"
            >
              Edit
            </button>
          </div>

          <div className="mt-2.5 grid grid-cols-3 divide-x divide-border border-t border-border pt-2.5">
            <Stat value={profileUser.questions.toLocaleString()} label="Questions" />
            <Stat value={`${profileUser.accuracy}%`} label="Accuracy" />
            <Stat value={String(profileUser.streak)} label="Day streak" />
          </div>
        </div>

        {/* Leaderboard */}
        <div>
          <div className="flex items-center justify-between">
            <p className="font-display text-[0.85rem] font-bold text-brand-ink">Leaderboard</p>
            <div className="flex items-center gap-1.5">
              <span className="rounded-full border border-border px-2 py-0.5 text-[0.58rem] font-semibold text-brand-ink">
                Weekly
              </span>
              <span className="rounded-full bg-muted-foreground/80 px-2 py-0.5 text-[0.58rem] font-semibold text-white">
                All time
              </span>
            </div>
          </div>

          <div className="mt-2 rounded-2xl bg-card p-3 shadow-soft">
            {/* Podium */}
            <div className="flex items-end justify-center gap-3">
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
            <div className="mt-3 rounded-xl bg-success-soft p-2.5">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <span className="text-[0.65rem] font-bold text-muted-foreground">
                    #{profileUser.rank}
                  </span>
                  <Avatar size="h-6 w-6" iconSize="h-3 w-3" />
                  <div>
                    <p className="text-[0.55rem] font-semibold uppercase tracking-wide text-muted-foreground">
                      Your rank
                    </p>
                    <p className="text-[0.7rem] font-semibold text-brand-ink">
                      {profileUser.name}
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-[0.65rem] font-bold text-brand-ink">
                    {profileUser.xp.toLocaleString()} XP
                  </p>
                  <p className="text-[0.55rem] text-muted-foreground">
                    ↑{profileUser.weeklyGainRank} this week
                  </p>
                </div>
              </div>

              <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-white/60">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-muted-foreground to-success"
                  style={{ width: `${progressPct}%` }}
                />
              </div>
              <p className="mt-1.5 text-[0.6rem] text-muted-foreground">
                You&apos;re{" "}
                <span className="font-semibold text-brand-ink">{profileUser.xpToTop10} XP</span>{" "}
                away from the top 10.
              </p>
            </div>
          </div>
        </div>

        {/* Accounts — heading only, establishes context without needing scroll */}
        <p className="font-display text-[0.85rem] font-semibold text-brand-ink">Accounts</p>
      </div>

      {/* Bottom nav */}
      <div className="flex items-center justify-around border-t border-border bg-card px-2 py-2.5">
        <Home className="h-4 w-4 text-muted-foreground" strokeWidth={2} />
        <SquarePen className="h-4 w-4 text-muted-foreground" strokeWidth={2} />
        <Trophy className="h-4 w-4 text-muted-foreground" strokeWidth={2} />
        <BarChart3 className="h-4 w-4 text-muted-foreground" strokeWidth={2} />
        <User className="h-4 w-4 text-brand" strokeWidth={2} />
      </div>
    </div>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="text-center">
      <p className="font-display text-sm font-bold text-brand-ink">{value}</p>
      <p className="text-[0.58rem] text-muted-foreground">{label}</p>
    </div>
  );
}

function Avatar({ size, iconSize = "h-5 w-5" }: { size: string; iconSize?: string }) {
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
  const dim = size === "lg" ? "h-12 w-12" : "h-9 w-9";
  const iconDim = size === "lg" ? "h-6 w-6" : "h-4 w-4";
  return (
    <div className="flex flex-col items-center">
      <div className="relative">
        {crown && (
          <Crown
            className="absolute -top-3 left-1/2 h-3.5 w-3.5 -translate-x-1/2 fill-warning text-warning"
            strokeWidth={1.5}
          />
        )}
        <span
          className={`flex ${dim} items-center justify-center rounded-full bg-surface-2 ring-4 ring-offset-2 ring-offset-card ${rankRingColor[entry.place]}`}
        >
          <UserRound className={`${iconDim} text-muted-foreground`} strokeWidth={2} />
        </span>
        <span
          className={`absolute -bottom-1 left-1/2 flex h-4 w-4 -translate-x-1/2 items-center justify-center rounded-full text-[0.52rem] font-bold text-white ring-2 ring-card ${rankBadgeColor[entry.place]}`}
        >
          {entry.place}
        </span>
      </div>
      <p className="mt-2 text-[0.62rem] font-semibold text-brand-ink">{entry.name}</p>
      <p className="text-[0.55rem] text-muted-foreground">{entry.xp.toLocaleString()} XP</p>
    </div>
  );
}