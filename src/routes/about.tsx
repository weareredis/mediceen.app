import { createFileRoute } from "@tanstack/react-router";
import { LegalPage, LegalList, LegalSection } from "@/components/layout/LegalPage";
import { DEVELOPER, DEVELOPER_URL, PLACEHOLDERS } from "@/lib/constants";

const title = "About Mediceen";
const description =
  "CEE and MECEE-BL preparation for Nepal's medical entrance exam. Curated MCQs, spaced repetition, and weekly timed mocks. Built by Redis Digital in Kathmandu.";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      {
        property: "og:description",
        content:
          "Independent CEE and MECEE-BL preparation for Nepal's medical entrance exam. Built by Redis Digital in Kathmandu.",
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
        intro="Mediceen exists to give MECEE-BL aspirants in Nepal a clearer, more focused way to prepare — practice that builds recall, review that respects how memory works, and timed mocks that feel closer to exam day. It is CEE preparation and MECEE-BL preparation in one mobile app: curated MCQs, spaced repetition, flashcards, progress insights, and weekly mocks."
      >
        <LegalSection heading="What Mediceen offers">
          <LegalList
            items={[
              <>
                <span className="font-medium text-brand-ink">Practice</span> : MCQs across core Phase
                1 subjects so you can drill what the exam actually tests.
              </>,
              <>
                <span className="font-medium text-brand-ink">Recall</span> : Spaced repetition (SM-2)
                and flashcards so review happens when it helps most.
              </>,
              <>
                <span className="font-medium text-brand-ink">Mocks</span> : Weekly timed MECEE-style
                mocks so pacing and stamina aren’t a surprise on exam day.
              </>,
              <>
                <span className="font-medium text-brand-ink">Progress</span> : Insights and a
                leaderboard so you can see streaks, weak spots, and how you compare(as motivation),
                not as a ranking guarantee.
              </>,
              <>
                <span className="font-medium text-brand-ink">Word of the Day</span> : A small daily
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
          <LegalList
            items={[
              "Anatomy MCQs for MECEE-BL, filtered by subject and difficulty.",
              "Physiology questions for students who still call the exam CEE.",
              "Pharmacology MCQ practice for Nepal's bachelor-level medical entrance.",
              "Pathology MECEE-BL questions in the same question bank.",
              "Biochemistry MCQs for Nepal, alongside the other Phase 1 subjects.",
              "Microbiology practice questions for MECEE-BL.",
              "Immunology MCQs for CEE-style revision of the same exam.",
            ]}
          />
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
            (Redigify Idea Solution), a Kathmandu-based digital product
            studio. Redis Digital designs and builds websites, mobile apps, and other digital
            products for teams that need strategy and execution in one place from branding and
            digital presence through to engineering.
          </p>
          <p>
            They are based in {PLACEHOLDERS.registeredAddress} and work on products like Mediceen
            that are meant for real users in Nepal’s education and exam-prep space. The app is
            MECEE-BL preparation for students across Nepal, built in Kathmandu — not a coaching
            center or a set of CEE classes.
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
            Mediceen is an independent learning product. References to the Medical Education
            Commission (MEC), NMC, or MECEE-BL describe the exam we prepare for; they do not imply
            official partnership, endorsement, or certification. Mediceen does not provide medical
            advice, diagnosis, or treatment.
          </p>
        </LegalSection>
      </LegalPage>
    </main>
  );
}
