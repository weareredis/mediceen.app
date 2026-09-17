import { createFileRoute } from "@tanstack/react-router";
import { LegalPage, LegalList, LegalSection } from "@/components/layout/LegalPage";
import { DEVELOPER, DEVELOPER_URL, PLACEHOLDERS } from "@/lib/constants";

const title = "About Mediceen";
const description =
  "Mediceen helps MECEE-BL aspirants prepare with curated MCQs, spaced repetition, and weekly timed mocks. Built by Redis Digital in Kathmandu.";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      {
        property: "og:description",
        content: "Independent MECEE-BL prep for Nepal medical entrance students. Built by Redis Digital.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://mediceen.app/about" },
    ],
    links: [{ rel: "canonical", href: "https://mediceen.app/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <main>
      <LegalPage
        eyebrow="About"
        title="Our mission"
        intro="Mediceen exists to give MECEE-BL aspirants in Nepal a clearer, more focused way to prepare — practice that builds recall, review that respects how memory works, and timed mocks that feel closer to exam day. We build for students who need structure, not noise: curated MCQs, spaced repetition, flashcards, progress insights, and weekly mocks in one mobile app."
      >
        <LegalSection heading="What Mediceen offers">
          <LegalList
            items={[
              <>
                <span className="font-medium text-brand-ink">Practice</span> — MCQs across core Phase
                1 subjects so you can drill what the exam actually tests.
              </>,
              <>
                <span className="font-medium text-brand-ink">Recall</span> — Spaced repetition (SM-2)
                and flashcards so review happens when it helps most.
              </>,
              <>
                <span className="font-medium text-brand-ink">Mocks</span> — Weekly timed MECEE-style
                mocks so pacing and stamina aren’t a surprise on exam day.
              </>,
              <>
                <span className="font-medium text-brand-ink">Progress</span> — Insights and a
                leaderboard so you can see streaks, weak spots, and how you compare — as motivation,
                not as a ranking guarantee.
              </>,
              <>
                <span className="font-medium text-brand-ink">Word of the Day</span> — A small daily
                habit to keep vocabulary and concepts moving.
              </>,
            ]}
          />
        </LegalSection>

        <LegalSection heading="Phase 1 scope">
          <p>
            Phase 1 focuses on core undergraduate subjects: Anatomy, Physiology, Pharmacology,
            Pathology, Biochemistry, Microbiology, and Immunology. Support for additional exams may
            follow as the product grows.
          </p>
        </LegalSection>

        <LegalSection heading="Who we serve">
          <LegalList
            items={[
              "Students use the Mediceen mobile app to practice, review, and sit weekly mocks.",
              "Content teams use a separate admin dashboard to ingest past papers, review AI-assisted drafts, and publish the question bank. That dashboard is not open to the public.",
            ]}
          />
        </LegalSection>

        <LegalSection heading="Built by Redis Digital">
          <p>
            Mediceen is designed and built by{" "}
            <a
              href={DEVELOPER_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-brand-ink transition-colors hover:text-[#e31d3e]"
            >
              {DEVELOPER.name}
            </a>{" "}
            (also known as Redis — Re-digify Idea Solution), a Kathmandu-based digital product
            studio. Redis Digital designs and builds websites, mobile apps, and other digital
            products for teams that need strategy and execution in one place — from branding and
            digital presence through to engineering.
          </p>
          <p>
            They are based in {PLACEHOLDERS.registeredAddress}, and work on products like Mediceen
            that are meant for real users in Nepal’s education and exam-prep space.
          </p>
          <p>
            Studio questions:{" "}
            <a
              href="mailto:hello@redisdigital.com"
              className="text-brand transition-colors hover:text-green-700"
            >
              hello@redisdigital.com
            </a>
            {" · "}
            <a
              href={DEVELOPER_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand transition-colors hover:text-[#e31d3e]"
            >
              redisdigital.com
            </a>
          </p>
        </LegalSection>

        <LegalSection heading="Who we are">
          <p>
            {PLACEHOLDERS.legalEntityName}
            <br />
            {PLACEHOLDERS.registeredAddress}
          </p>
          <p>
            Product support:{" "}
            <a
              href={`mailto:${PLACEHOLDERS.supportEmail}`}
              className="text-brand transition-colors hover:text-green-700"
            >
              {PLACEHOLDERS.supportEmail}
            </a>
          </p>
        </LegalSection>

        <LegalSection heading="Disclaimer">
          <p>
            Mediceen is an independent learning product. References to MECEE, NMC, or MECEE-BL
            describe the exam we prepare for; they do not imply official partnership, endorsement,
            or certification. Mediceen does not provide medical advice, diagnosis, or treatment.
          </p>
        </LegalSection>
      </LegalPage>
    </main>
  );
}
