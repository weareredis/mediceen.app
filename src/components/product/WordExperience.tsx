import { PhoneStatusBar } from "@/components/ui/PhoneMockup";
import { wordOfTheDay } from "@/data/product";

const learned = ["Bradycardia", "Dyspnea", "Haemostasis"];

/** Marketing depiction of the Word of the Day card on the Home screen. */
export function WordExperience() {
  return (
    <div className="flex h-full flex-col">
      <PhoneStatusBar label="Home" />

      <div className="px-[5.7cqw]">
        <div className="rounded-2xl border border-teal/40 bg-teal-soft p-[5.7cqw]">
          <p className="text-[3.4cqw] font-semibold uppercase tracking-[0.2em] text-brand">
            Word of the Day
          </p>
          <p className="mt-[2.9cqw] font-display text-[7.1cqw] font-semibold text-brand-ink">
            {wordOfTheDay.term}
          </p>
          <p className="mt-[2.9cqw] text-[4cqw] leading-relaxed text-muted-foreground">
            {wordOfTheDay.definition}
          </p>
          <span className="mt-[5.7cqw] inline-flex rounded-full bg-brand px-[4.3cqw] py-[1.4cqw] text-[3.5cqw] font-medium text-primary-foreground">
            Learned
          </span>
        </div>
      </div>

      <p className="mt-[7.1cqw] px-[7.1cqw] text-[3.4cqw] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
        Earlier this week
      </p>
      <ul className="mt-[2.9cqw] space-y-[2.9cqw] px-[5.7cqw]">
        {learned.map((term) => (
          <li
            key={term}
            className="flex items-center justify-between rounded-xl border border-border bg-card px-[4.3cqw] py-[3.6cqw] text-[4.3cqw] text-brand-ink"
          >
            {term}
            <span className="text-[3.4cqw] text-success">Learned</span>
          </li>
        ))}
      </ul>
    </div>
  );
}