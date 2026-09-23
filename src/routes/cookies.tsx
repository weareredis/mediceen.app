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
            Our public website uses cookies and local storage needed for basic operation, security,
            and session handling, plus Google Analytics 4 to understand how the marketing site is
            used. We do not use advertising cookies.
          </p>
          <p>
            Essential cookies (if any) are used only for basic site delivery or security. Theme
            preference is stored locally in your browser. Google Analytics may set cookies or use
            similar identifiers to measure page views, traffic sources, and approximate location.
            IP addresses are anonymized in our GA configuration.
          </p>
          <LegalList
            items={[
              "Strictly necessary cookies — keep the site available and secure",
              "Preference storage — remember basic site settings (for example light/dark theme)",
              "Analytics — Google Analytics 4 on mediceen.app (measurement only, no ads)",
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
            You can clear cookies through your browser settings, use a browser tracking-prevention
            mode, or install Google’s Analytics opt-out add-on. Removing analytics cookies or
            blocking googletagmanager.com will not affect core site features. You can remove app
            storage by signing out or uninstalling the app. Disabling necessary cookies may affect
            site functionality.
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
