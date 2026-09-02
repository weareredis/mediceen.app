import { Atom, Microscope, HeartPulse, FlaskConical, Target, CheckCircle2 } from "lucide-react";

const SCORE = 5;
const SCORE_TOTAL = 10;
const TIME_TAKEN = "1m 34s";

const subjects = [
  { name: "Physics", correct: 2, total: 2, status: "Mastered" as const, icon: Atom },
  { name: "Microbiology", correct: 0, total: 1, status: "Review" as const, icon: Microscope },
  { name: "Physiology", correct: 2, total: 6, status: "Needs practice" as const, icon: HeartPulse },
  { name: "Chemistry", correct: 1, total: 1, status: "Mastered" as const, icon: FlaskConical },
];

const focusSubject = { name: "Physiology", accuracy: 54, questionCount: 42 };

const statusStyle = {
  Mastered: { badge: "bg-emerald-50 text-green-700", bar: "bg-green-700" },
  Review: { badge: "bg-gray-100 text-slate-500", bar: "bg-slate-500" },
  "Needs practice": { badge: "bg-slate-100 text-slate-500", bar: "bg-slate-500" },
} as const;

/** End-of-attempt summary: score, subject breakdown, focus recommendation, and next actions. */
export function ResultsExperience() {
  const accuracy = Math.round((SCORE / SCORE_TOTAL) * 100);
  const circumference = 2 * Math.PI * 34;
  const offset = circumference * (1 - SCORE / SCORE_TOTAL);

  return (
    <div className="flex h-full flex-col overflow-hidden bg-white">
      {/* Header */}
      <div className="px-[4.3cqw] pt-[4.3cqw]">
        <div
          className="relative overflow-hidden rounded-2xl px-[4.3cqw] pb-[4.3cqw] pt-[5.7cqw]"
          style={{
            background: "linear-gradient(139deg, var(--teal) 0%, var(--success) 100%)",
          }}
        >
          <div className="absolute -right-[8cqw] -top-[10cqw] h-[24cqw] w-[24cqw] rounded-full bg-white/10 blur-xl" />
          <div className="absolute -bottom-[6cqw] -left-[8cqw] h-[16cqw] w-[16cqw] rounded-full bg-white/10" />

          <div className="relative flex items-start justify-between gap-[2.9cqw]">
            <div className="min-w-0">
              <p className="text-[3cqw] font-semibold uppercase tracking-[0.2em] text-white/80">
                Practice results
              </p>
              <p className="mt-[0.7cqw] font-display text-[5.7cqw] font-extrabold text-white">
                Session complete!
              </p>
              <p className="mt-[0.7cqw] text-[3cqw] font-medium text-white/90">
                {accuracy}% accuracy · {TIME_TAKEN}
              </p>
            </div>

            <div className="relative flex h-[20cqw] w-[20cqw] shrink-0 items-center justify-center">
              <svg viewBox="0 0 80 80" className="h-full w-full -rotate-90">
                <circle cx="40" cy="40" r="34" fill="none" stroke="rgba(255,255,255,0.25)" strokeWidth="8" />
                <circle
                  cx="40"
                  cy="40"
                  r="34"
                  fill="none"
                  stroke="white"
                  strokeWidth="8"
                  strokeLinecap="round"
                  strokeDasharray={circumference}
                  strokeDashoffset={offset}
                />
              </svg>
              <div className="absolute flex flex-col items-center">
                <p className="font-display text-[5cqw] font-extrabold leading-none text-white">
                  {SCORE}
                  <span className="text-[3.4cqw] font-bold text-white/80">/{SCORE_TOTAL}</span>
                </p>
                <p className="mt-[0.7cqw] text-[2.5cqw] font-semibold uppercase tracking-wider text-white/80">
                  Score
                </p>
              </div>
            </div>
          </div>

          <div className="relative mt-[3.6cqw] flex items-center gap-[2.9cqw] rounded-2xl bg-white/20 p-[2.9cqw] backdrop-blur-sm">
            <span className="relative flex h-[10cqw] w-[10cqw] shrink-0 items-center justify-center overflow-hidden rounded-full bg-white">
              <img
                src="/results-brain.png"
                alt=""
                aria-hidden="true"
                className="h-[132%] w-[132%] max-w-none object-cover"
              />
            </span>
            <p className="text-[3.2cqw] font-bold leading-snug text-white">
              Nice effort! Let&apos;s turn those mistakes into progress.
            </p>
          </div>
        </div>
      </div>

      {/* Subject performance */}
      <div className="px-[4.3cqw] pt-[5cqw]">
        <p className="text-[3.4cqw] font-extrabold text-slate-500">Subject performance</p>

        <div className="mt-[2.5cqw] space-y-[2.1cqw]">
        {subjects.map((subject) => {
            const style = statusStyle[subject.status];
            const fillPct = (subject.correct / subject.total) * 100;
            const Icon = subject.icon;
            return (
              <div
                key={subject.name}
                className="rounded-xl border border-gray-200 bg-white p-[2.9cqw]"
              >
                <div className="flex items-center gap-[2.9cqw]">
                  <span className="flex h-[7.5cqw] w-[7.5cqw] shrink-0 items-center justify-center rounded-xl bg-gray-100">
                    <Icon className="h-[3.6cqw] w-[3.6cqw] text-slate-500" strokeWidth={2} />
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="text-[3.2cqw] font-semibold text-gray-900">{subject.name}</p>
                    <p className="text-[2.6cqw] font-medium text-slate-500">
                      {subject.correct}/{subject.total} correct
                    </p>
                  </div>
                  <span className={`shrink-0 rounded-full px-[2.5cqw] py-[0.9cqw] text-[2.4cqw] font-bold ${style.badge}`}>
                    {subject.status}
                  </span>
                </div>
                <div className="mt-[1.8cqw] h-[1.1cqw] overflow-hidden rounded-full bg-zinc-200">
                <div className={`h-full rounded-full ${style.bar}`} style={{ width: `${fillPct}%` }} />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Focus recommendation */}
      <div className="px-[4.3cqw] pt-[3.6cqw]">
        <div className="flex gap-[2.9cqw] rounded-2xl border border-gray-200 bg-white p-[3.2cqw] shadow-sm">
          <span className="flex h-[7.9cqw] w-[7.9cqw] shrink-0 items-center justify-center rounded-xl bg-indigo-50">
            <Target className="h-[4cqw] w-[4cqw] text-indigo-600" strokeWidth={2} />
          </span>
          <div>
            <p className="text-[3.2cqw] font-semibold text-gray-900">Focus on {focusSubject.name}</p>
            <p className="mt-[0.9cqw] text-[2.7cqw] leading-relaxed text-slate-500">
              Your accuracy is {focusSubject.accuracy}% across {focusSubject.questionCount} questions
              the lowest of any subject you have practised this month.
            </p>
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="space-y-[2.1cqw] px-[4.3cqw] pt-[3.6cqw]">
        <button
          type="button"
          className="flex w-full flex-col items-center rounded-2xl py-[2.9cqw] shadow-md"
          style={{ background: "linear-gradient(to right, var(--teal), var(--success))" }}
        >
          <span className="text-[3.6cqw] font-semibold text-white">Practice Mistakes</span>
          <span className="text-[2.6cqw] font-semibold text-white/60">Up to 20 questions · Unlimited</span>
        </button>
        <button
          type="button"
          className="w-full rounded-2xl border border-gray-200 py-[3.2cqw] text-[3.6cqw] font-semibold text-black/60 shadow-sm"
        >
          Review answer
        </button>
        <p className="pt-[1.1cqw] text-center text-[3.2cqw] font-semibold text-slate-500">
          Back to Home
        </p>
      </div>

      {/* Completion toast */}
      <div className="px-[4.3cqw] pb-[4.3cqw] pt-[4.3cqw]">
        <div className="relative flex items-center gap-[2.9cqw] overflow-hidden rounded-xl border border-gray-200 bg-white p-[2.9cqw]">
          <span className="absolute left-0 top-0 h-full w-[0.5cqw] bg-green-700" />
          <span className="absolute left-[3cqw] top-[1.5cqw] h-[1cqw] w-[1cqw] rounded-full bg-slate-400" />
          <span className="absolute bottom-[1.5cqw] left-[2cqw] h-[1.4cqw] w-[1.4cqw] rounded-full bg-amber-300" />
          <span className="absolute bottom-[1.5cqw] left-[15cqw] h-[1.4cqw] w-[1.4cqw] rounded-full bg-pink-400" />
          <span className="absolute right-[8cqw] top-0 h-[1.4cqw] w-[1.4cqw] rounded-full bg-pink-400" />
          <span className="absolute bottom-[2cqw] right-[10cqw] h-[1.8cqw] w-[1.8cqw] rounded-full bg-blue-300" />
          <span className="absolute right-[3cqw] top-[2cqw] h-[1.2cqw] w-[1.2cqw] rounded-full bg-blue-300" />
          <span className="relative flex h-[10cqw] w-[10cqw] shrink-0 items-center justify-center rounded-full bg-emerald-50">
            <CheckCircle2 className="h-[5.7cqw] w-[5.7cqw] text-green-700" strokeWidth={2} fill="currentColor" />
          </span>
          <div className="relative">
            <p className="text-[3.2cqw] font-semibold text-gray-900">Session complete</p>
            <p className="text-[2.8cqw] font-medium text-slate-500">Your result have been saved</p>
          </div>
        </div>
      </div>
    </div>
  );
}