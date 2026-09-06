import { createFileRoute } from "@tanstack/react-router";
import { LegalPage, LegalList, LegalSection } from "@/components/layout/LegalPage";
import { PLACEHOLDERS } from "@/lib/constants";

const title = "Open Source Licenses - Mediceen";
const description = "Open-source acknowledgments for the Mediceen app.";

export const Route = createFileRoute("/licenses")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://mediceen.app/licenses" },
    ],
    links: [{ rel: "canonical", href: "https://mediceen.app/licenses" }],
  }),
  component: LicensesPage,
});

function LicensesPage() {
  return (
    <main>
      <LegalPage
        eyebrow="Legal"
        title="Open-source licenses"
        intro="Mediceen is built with open-source software. We are grateful to the communities behind projects included in the app and website, including:"
      >
        <LegalSection heading="Acknowledgements">
          <p>
            This page is a summary of key projects used by Mediceen. Where required, full license
            texts and notices are included with the application build or in the relevant in-app
            acknowledgements screen.
          </p>
          <LegalList
            items={[
              "React and React DOM — user interface rendering",
              "TanStack Router and TanStack Query — routing and data fetching",
              "Radix UI — accessible UI primitives",
              "Tailwind CSS — styling system",
              "Lucide React — icon set",
            ]}
          />
          <p>
            Some dependencies may be used indirectly through other packages. If you need a specific
            third-party license text, contact{" "}
            <a
              href={`mailto:${PLACEHOLDERS.supportEmail}`}
              className="text-brand transition-colors hover:text-green-700"
            >
              {PLACEHOLDERS.supportEmail}
            </a>{" "}
            and we will provide the relevant notice where available.
          </p>
        </LegalSection>
      </LegalPage>
    </main>
  );
}
