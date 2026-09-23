import { createFileRoute } from "@tanstack/react-router";
import { LegalPage, LegalList, LegalSection } from "@/components/layout/LegalPage";
import { DeleteAccountForm } from "@/components/support/DeleteAccountForm";
import { PLACEHOLDERS } from "@/lib/constants";

const title = "Delete Account & Data - Mediceen";
const description = "How to request deletion of your Mediceen account and personal data.";

export const Route = createFileRoute("/support/delete-account")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { name: "robots", content: "index, follow" },
      { property: "og:title", content: "Delete Account - Mediceen" },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      {
        property: "og:url",
        content: "https://mediceen.app/support/delete-account",
      },
    ],
    links: [{ rel: "canonical", href: "https://mediceen.app/support/delete-account" }],
  }),
  component: DeleteAccountPage,
});

function DeleteAccountPage() {
  return (
    <main>
      <LegalPage
        eyebrow="Support"
        title="Delete account & data"
        intro="To delete your Mediceen account and associated personal data, email us or use the optional form at the bottom of this page."
      >
        <LegalSection heading="Request deletion">
          <p>
            You can request permanent deletion of your account and associated personal data by
            contacting us directly. We will first verify that the request comes from the account
            owner or an authorized contact.
          </p>
          <ol className="space-y-2">
            {[
              <>
                Email{" "}
                <a
                  href={`mailto:${PLACEHOLDERS.privacyEmail}?subject=Account%20deletion%20request`}
                  className="text-brand transition-colors hover:text-green-700"
                >
                  {PLACEHOLDERS.privacyEmail}
                </a>{" "}
                from the same email address registered on your account.
              </>,
              "Subject line: Account deletion request",
              "Include your display name (if known), the phone number on your account (if any), and a statement that you want your account permanently deleted.",
            ].map((item, i) => (
              <li key={i} className="flex gap-3">
                <span className="font-display text-sm tabular-nums text-brand">{i + 1}.</span>
                <span>{item}</span>
              </li>
            ))}
          </ol>
          <p>
            If you signed up with Google or Apple only (including Hide My Email) and cannot email
            from that address, contact{" "}
            <a
              href={`mailto:${PLACEHOLDERS.supportEmail}?subject=Account%20ownership%20verification`}
              className="text-brand transition-colors hover:text-green-700"
            >
              {PLACEHOLDERS.supportEmail}
            </a>{" "}
            with proof of account ownership (we will verify manually).
          </p>
          <p>
            Prefer a form instead? Use{" "}
            <a
              href="#request-by-form"
              className="text-brand transition-colors hover:text-green-700"
            >
              Request by form
            </a>{" "}
            below — email still works the same way.
          </p>
          <p>
            When in-app account deletion is added to the app, this page will be updated to describe
            that flow first.
          </p>
        </LegalSection>

        <LegalSection heading="What we delete">
          <p>After verifying your identity, we delete or anonymize:</p>
          <LegalList
            items={[
              "Account credentials and profile (email, phone number, display name, avatar URL)",
              "Quiz history, answers, scores, bookmarks, streaks, and spaced-repetition data",
              "Leaderboard entries tied to your account",
              "Saved preferences that are directly linked to your user profile",
            ]}
          />
        </LegalSection>

        <LegalSection heading="What we may retain">
          <LegalList
            items={[
              "Aggregated, anonymized statistics that cannot identify you",
              "Security and audit logs for a limited period where required by law or legitimate security needs",
              "Backup copies until overwritten on our normal backup cycle (typically up to 30 days)",
              "Records required to meet legal, tax, or anti-fraud obligations",
            ]}
          />
        </LegalSection>

        <LegalSection heading="What happens after deletion">
          <p>
            After your request is completed, you will no longer be able to sign in to the deleted
            account, and your history will no longer appear in the app. Deletion is generally
            irreversible. If you later create a new account, it will start without the deleted
            account&apos;s data.
          </p>
        </LegalSection>

        <LegalSection heading="Timeline">
          <p>
            We process verified requests within 48 hours and confirm by email when complete. More
            complex requests may take longer if we need to confirm ownership or complete backup
            rotation.
          </p>
        </LegalSection>

        <LegalSection heading="Request by form">
          <div id="request-by-form" className="scroll-mt-24 space-y-4">
            <p>
              You can still email{" "}
              <a
                href={`mailto:${PLACEHOLDERS.privacyEmail}?subject=Account%20deletion%20request`}
                className="text-brand transition-colors hover:text-green-700"
              >
                {PLACEHOLDERS.privacyEmail}
              </a>{" "}
              or{" "}
              <a
                href={`mailto:${PLACEHOLDERS.supportEmail}?subject=Account%20ownership%20verification`}
                className="text-brand transition-colors hover:text-green-700"
              >
                {PLACEHOLDERS.supportEmail}
              </a>
              . The form below is optional — choose how you signed up so we route the request to the
              right inbox (email / password → privacy; Google or Apple → support). We do not delete
              your account automatically from this form; we verify ownership first.
            </p>
            <DeleteAccountForm />
          </div>
        </LegalSection>

        <LegalSection heading="Questions">
          <p>
            <a
              href={`mailto:${PLACEHOLDERS.privacyEmail}?subject=Privacy%20question`}
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
