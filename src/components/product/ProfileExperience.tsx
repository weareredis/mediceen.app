import {
  ArrowUp,
  Bookmark,
  ChevronRight,
  Lock,
  ShieldCheck,
  CircleHelp,
  LogOut,
  Crown,
  Home,
  SquarePen,
  Trophy,
  BarChart3,
  User,
} from "lucide-react";
import { profileUser, leaderboardPodium, accountLinks } from "@/data/product";
import { cn } from "@/lib/utils";

const iconMap = {
  lock: Lock,
  shield: ShieldCheck,
  help: CircleHelp,
  logout: LogOut,
};

const REMINDER_TIMES = ["8:00 Am", "8:00 Am", "8:00 Am"] as const;

const podiumTones: Record<number, string> = {
  1: "bg-warning-soft text-warning",
  2: "bg-brand-soft text-brand",
  3: "bg-teal-soft text-teal",
};

const rankBadgeColor: Record<number, string> = {
  1: "bg-warning",
  2: "bg-muted-foreground",
  3: "bg-brand/70",
};

const sparkles = [
  "left-[4cqw] top-[4cqw] h-[4cqw] w-[3cqw] text-brand/35",
  "left-[18cqw] top-[7cqw] h-[2.2cqw] w-[1.6cqw] text-brand/35",
  "left-[32cqw] top-[11cqw] h-[3.2cqw] w-[2.4cqw] text-teal/40",
  "left-[30cqw] top-[29cqw] h-[2cqw] w-[1.6cqw] text-brand/20",
  "left-[36cqw] top-[3cqw] h-[4.5cqw] w-[3.4cqw] text-brand/20",
  "left-[56cqw] top-[8cqw] h-[2cqw] w-[1.5cqw] text-brand/20",
  "left-[58cqw] top-[16cqw] h-[3.4cqw] w-[2.6cqw] text-teal/40",
  "left-[71cqw] top-[6cqw] h-[4cqw] w-[3cqw] text-brand/20",
  "left-[86cqw] top-[10cqw] h-[3.6cqw] w-[2.8cqw] text-brand/35",
  "left-[8cqw] top-[36cqw] h-[4cqw] w-[3cqw] text-brand/20",
  "left-[82cqw] top-[37cqw] h-[2.4cqw] w-[1.8cqw] text-brand/35",
  "left-[57cqw] top-[36cqw] h-[2.4cqw] w-[1.8cqw] text-brand/35",
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

/** Profile: identity card, leaderboard podium with rank, bookmarks, reminders, account settings. */
export function ProfileExperience() {
  const orderedPodium = [2, 1, 3]
    .map((place) => leaderboardPodium.find((p) => p.place === place)!)
    .filter(Boolean);
  const progressPct = Math.min(
    100,
    (profileUser.xp / (profileUser.xp + profileUser.xpToTop10)) * 100,
  );

  return (
    <div className="flex h-full flex-col overflow-hidden bg-surface">
      <header className="shrink-0 border-b border-border bg-card px-[6.4cqw] py-[4.3cqw]">
        <p className="text-[7.1cqw] font-bold leading-tight text-brand-ink">Profile</p>
      </header>

      <div className="min-h-0 flex-1 space-y-[5cqw] overflow-y-auto px-[6.4cqw] pb-[4.3cqw] pt-[5cqw] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {/* Profile card */}
        <div className="rounded-xl bg-card p-[4.3cqw] shadow-soft">
          <div className="flex items-start justify-between gap-[2.9cqw]">
            <div className="flex min-w-0 items-center gap-[3.2cqw]">
              <span className="flex h-[14.3cqw] w-[14.3cqw] shrink-0 items-center justify-center rounded-full bg-success text-[4.6cqw] font-bold text-white">
                {profileUser.initials}
              </span>
              <div className="min-w-0">
                <p className="truncate text-[4.6cqw] font-semibold leading-tight text-brand-ink">
                  {profileUser.name}
                </p>
                <p className="mt-[0.4cqw] truncate text-[3.5cqw] text-muted-foreground">
                  {profileUser.email}
                </p>
              </div>
            </div>
            <button
              type="button"
              className="shrink-0 rounded-full border border-border px-[3.6cqw] py-[1.4cqw] text-[3cqw] font-semibold text-success"
            >
              View
            </button>
          </div>

          <div className="mt-[4.3cqw] grid grid-cols-3 divide-x divide-border border-t border-border pt-[3.6cqw]">
            <Stat value={profileUser.questions.toLocaleString()} label="Answered" />
            <Stat value={`${profileUser.accuracy}%`} label="Accuracy" />
            <Stat value={String(profileUser.streak)} label="Day streak" />
          </div>
        </div>

        {/* Leaderboard */}
        <div>
          <p className="text-[4.6cqw] font-bold text-brand-ink">Leaderboard</p>
          <div className="mt-[3.2cqw] flex items-center gap-[2.5cqw]">
            <span className="rounded-full border border-border bg-card px-[3.6cqw] py-[1.6cqw] text-[3cqw] font-semibold text-brand-ink">
              Weekly
            </span>
            <span className="rounded-full bg-success px-[3.6cqw] py-[1.6cqw] text-[3cqw] font-semibold text-white">
              All time
            </span>
          </div>

          <div className="relative mt-[3.6cqw] overflow-hidden rounded-3xl bg-card p-[4.3cqw] shadow-soft">
            {sparkles.map((className) => (
              <Sparkle key={className} className={className} />
            ))}

            <div className="relative flex items-end justify-center gap-[4.3cqw] pt-[4cqw]">
              {orderedPodium.map((entry) => (
                <PodiumPerson key={entry.place} entry={entry} />
              ))}
            </div>

            <div className="relative mt-[4.3cqw] rounded-xl bg-success-soft px-[3.2cqw] py-[3.5cqw]">
              <div className="flex items-center gap-[2.4cqw]">
                <p className="shrink-0 text-[3.2cqw] font-bold text-muted-foreground">
                  #{profileUser.rank}
                </p>
                <span className="flex h-[9.6cqw] w-[9.6cqw] shrink-0 items-center justify-center rounded-full bg-success text-[3.2cqw] font-semibold text-white">
                  {profileUser.initials}
                </span>
                <div className="min-w-0 flex-1">
                  <p className="text-[2.6cqw] font-semibold tracking-tight text-muted-foreground">
                    Your rank
                  </p>
                  <p className="truncate text-[3.7cqw] font-semibold leading-tight text-brand-ink">
                    {profileUser.name}
                  </p>
                </div>
                <div className="shrink-0 text-right">
                  <p className="text-[3.7cqw] font-bold leading-tight text-brand-ink">
                    {profileUser.xp.toLocaleString()} XP
                  </p>
                  <p className="mt-[0.4cqw] inline-flex items-center justify-end gap-[0.6cqw] text-[3cqw] font-medium text-success">
                    <ArrowUp className="h-[2.8cqw] w-[2.8cqw]" strokeWidth={2.5} />
                    {profileUser.weeklyGainRank} this week
                  </p>
                </div>
              </div>

              <div className="mt-[4cqw] h-[1.5cqw] overflow-hidden rounded-full bg-card">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-success to-teal"
                  style={{ width: `${progressPct}%` }}
                />
              </div>
              <p className="mt-[1.6cqw] text-[3.2cqw] leading-snug text-muted-foreground">
                You&apos;re{" "}
                <span className="font-bold text-brand-ink">{profileUser.xpToTop10} XP</span> away
                from the top 10.
              </p>
            </div>
          </div>
        </div>

        {/* Bookmarks */}
        <button
          type="button"
          className="flex w-full items-center justify-between rounded-xl bg-card px-[4.3cqw] py-[2.9cqw] shadow-soft"
        >
          <span className="flex items-center gap-[4cqw]">
            <span className="flex h-[12cqw] w-[12cqw] items-center justify-center rounded-xl bg-success text-white">
              <Bookmark className="h-[5cqw] w-[5cqw]" strokeWidth={2.2} fill="currentColor" />
            </span>
            <span className="text-[4cqw] font-semibold text-brand-ink">Bookmarks</span>
          </span>
          <span className="flex h-[7cqw] w-[7cqw] items-center justify-center rounded-full bg-success shadow-sm">
            <ChevronRight className="h-[3.6cqw] w-[3.6cqw] text-white" strokeWidth={2.6} />
          </span>
        </button>

        {/* Study reminders */}
        <div className="rounded-xl bg-card px-[4.3cqw] py-[5cqw] shadow-soft">
          <div className="flex items-center justify-between gap-[3cqw]">
            <div className="min-w-0">
              <p className="text-[4.6cqw] font-semibold text-brand-ink">Study reminders</p>
              <p className="mt-[0.4cqw] text-[3cqw] text-muted-foreground">
                Review and weekly mock notification
              </p>
            </div>
            <span
              aria-hidden="true"
              className="relative h-[5cqw] w-[11cqw] shrink-0 rounded-full bg-muted-foreground/50"
            >
              <span className="absolute right-0 top-1/2 h-[5.5cqw] w-[5.5cqw] -translate-y-1/2 rounded-full bg-success shadow-sm" />
            </span>
          </div>

          <div className="mt-[5cqw]">
            <p className="text-[4.6cqw] font-semibold text-brand-ink">Reminder time</p>
            <div className="mt-[3.2cqw] flex items-center gap-[1.6cqw]">
              {REMINDER_TIMES.map((time, i) => (
                <span
                  key={`${time}-${i}`}
                  className={cn(
                    "flex-1 rounded-xl py-[2.1cqw] text-center text-[3.5cqw]",
                    i === 0
                      ? "bg-success font-semibold text-white"
                      : "border border-border font-medium text-brand-ink",
                  )}
                >
                  {time}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Account links */}
        <div className="overflow-hidden rounded-[5cqw] border border-border bg-card shadow-soft">
          {accountLinks.map((link, i) => {
            const Icon = iconMap[link.icon];
            const danger = Boolean(link.danger);
            return (
              <div
                key={link.label}
                className={cn(
                  "flex items-center gap-[3.6cqw] px-[4cqw] py-[3.6cqw]",
                  i > 0 && "border-t border-border",
                )}
              >
                <span
                  className={cn(
                    "flex h-[9cqw] w-[9cqw] shrink-0 items-center justify-center rounded-[2.5cqw]",
                    danger ? "bg-destructive/10" : "bg-surface",
                  )}
                >
                  <Icon
                    className={cn(
                      "h-[4cqw] w-[4cqw]",
                      danger ? "text-destructive" : "text-muted-foreground",
                    )}
                    strokeWidth={2}
                  />
                </span>
                <p
                  className={cn(
                    "flex-1 text-[4cqw] font-medium",
                    danger ? "text-destructive" : "text-brand-ink",
                  )}
                >
                  {link.label}
                </p>
                <ChevronRight
                  className="h-[4cqw] w-[4cqw] text-muted-foreground/60"
                  strokeWidth={2}
                />
              </div>
            );
          })}
        </div>
      </div>

      <nav className="flex shrink-0 items-center justify-around border-t border-border bg-card px-[2.9cqw] py-[3.6cqw]">
        <Home className="h-[5.7cqw] w-[5.7cqw] text-muted-foreground" strokeWidth={2} />
        <SquarePen className="h-[5.7cqw] w-[5.7cqw] text-muted-foreground" strokeWidth={2} />
        <Trophy className="h-[5.7cqw] w-[5.7cqw] text-muted-foreground" strokeWidth={2} />
        <BarChart3 className="h-[5.7cqw] w-[5.7cqw] text-muted-foreground" strokeWidth={2} />
        <User className="h-[5.7cqw] w-[5.7cqw] text-brand" strokeWidth={2} />
      </nav>
    </div>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="text-center">
      <p className="text-[4.6cqw] font-bold text-brand-ink">{value}</p>
      <p className="mt-[0.4cqw] text-[3cqw] text-muted-foreground">{label}</p>
    </div>
  );
}

function PodiumPerson({
  entry,
}: {
  entry: { place: number; name: string; xp: number };
}) {
  const isFirst = entry.place === 1;
  const initial = entry.name.charAt(0).toUpperCase();

  return (
    <div className={cn("flex w-[21cqw] flex-col items-center", isFirst && "-translate-y-[3cqw]")}>
      <div className="relative mb-[1.5cqw] flex h-[24cqw] w-[21cqw] items-end justify-center">
        {isFirst ? (
          <Crown
            className="absolute left-1/2 top-0 h-[4cqw] w-[4.6cqw] -translate-x-1/2 fill-warning text-warning"
            strokeWidth={1.5}
          />
        ) : null}
        <span
          className={cn(
            "relative flex items-center justify-center rounded-full",
            isFirst
              ? "h-[17cqw] w-[17cqw] border-[1.1cqw] border-warning/40"
              : "h-[17cqw] w-[17cqw]",
          )}
        >
          <span
            className={cn(
              "flex h-[16cqw] w-[16cqw] items-center justify-center rounded-full text-[5cqw] font-bold",
              podiumTones[entry.place],
            )}
          >
            {initial}
          </span>
          <span
            className={cn(
              "absolute -bottom-[0.4cqw] left-1/2 flex h-[4.3cqw] w-[4.3cqw] -translate-x-1/2 items-center justify-center rounded-full text-[2.6cqw] font-medium text-white",
              rankBadgeColor[entry.place],
            )}
          >
            {entry.place}
          </span>
        </span>
      </div>
      <p className="text-center text-[3.5cqw] font-semibold leading-tight text-brand-ink">
        {entry.name}
      </p>
      <p className="mt-[0.3cqw] text-center text-[3cqw] text-muted-foreground">
        {entry.xp.toLocaleString()} XP
      </p>
    </div>
  );
}
