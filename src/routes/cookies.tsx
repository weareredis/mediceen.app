import { createFileRoute } from "@tanstack/react-router";
import { LegalList, LegalPage, LegalSection } from "@/components/layout/LegalPage";
import { PLACEHOLDERS } from "@/lib/constants";

const title = "Cookie Notice - Mediceen";
const description = "Cookie and tracking practices on mediceen.app.";

export const Route = createFileRoute("/cookies")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://mediceen.app/cookies" },
    ],
    links: [{ rel: "canonical", href: "https://mediceen.app/cookies" }],
  }),
  component: CookiesPage,
});

function CookiesPage() {
  return (
    <main>
      <LegalPage eyebrow="Legal" title="Cookie notice" showEffectiveDate>
        <LegalSection heading="Cookies on our website">
          <p>
            Our public website is designed to run with only the cookies and local storage needed for
            basic operation, security, and session handling. We do not use advertising cookies.
          </p>
          <p>
            Essential cookies (if any) are used only for basic site delivery or security. If we add
            privacy-friendly analytics or similar measurement tools later, we will update this page
            and, where required, ask for consent before enabling them.
          </p>
          <LegalList
            items={[
              "Strictly necessary cookies — keep the site available and secure",
              "Preference storage — remember basic site settings where used",
              "Analytics cookies — only if introduced in the future and disclosed here",
            ]}
          />
        </LegalSection>

        <LegalSection heading="Mobile app storage">
          <p>
            The Mediceen mobile app does not use browser cookies. It stores your login session in
            secure device storage (SecureStore on native platforms) so you can stay signed in
            between app launches.
          </p>
          <p>
            The app may also use local caches or on-device storage to improve performance and reduce
            repeated network requests.
          </p>
        </LegalSection>

        <LegalSection heading="Your choices">
          <p>
            You can clear cookies through your browser settings and remove app storage by signing
            out or uninstalling the app. Disabling necessary cookies may affect site functionality.
          </p>
          <p>
            Contact:{" "}
            <a
              href={`mailto:${PLACEHOLDERS.privacyEmail}`}
              className="text-brand transition-colors hover:text-green-700"
            >
              {PLACEHOLDERS.privacyEmail}
            </a>
          </p>
        </LegalSection>
      </LegalPage>
    </main>
  );
}
