import { createServerFn } from "@tanstack/react-start";
import {
  accountTypeLabel,
  deleteAccountSchema,
  inboxForAccountType,
  reasonLabel,
  type DeleteAccountFormValues,
} from "@/lib/delete-account";

const RATE_WINDOW_MS = 15 * 60 * 1000;
const MAX_PER_IP = 5;
const MAX_PER_EMAIL = 3;

type RateBucket = { count: number; resetAt: number };

/** Best-effort in-memory limit (per serverless isolate). */
const ipBuckets = new Map<string, RateBucket>();
const emailBuckets = new Map<string, RateBucket>();

function hitRateLimit(map: Map<string, RateBucket>, key: string, max: number): boolean {
  const now = Date.now();
  const existing = map.get(key);
  if (!existing || existing.resetAt <= now) {
    map.set(key, { count: 1, resetAt: now + RATE_WINDOW_MS });
    return false;
  }
  if (existing.count >= max) {
    return true;
  }
  existing.count += 1;
  return false;
}

function pruneBuckets(map: Map<string, RateBucket>) {
  const now = Date.now();
  if (map.size < 200) return;
  for (const [key, bucket] of map) {
    if (bucket.resetAt <= now) map.delete(key);
  }
}

export type SubmitDeleteAccountResult = { ok: true } | { ok: false; error: string };

/**
 * Client-callable RPC. Handler runs only on the server (TanStack Start).
 * Kept under `src/lib/` — files in `src/server/` cannot be imported from client components.
 */
export const submitDeleteAccount = createServerFn({ method: "POST" })
  .validator((data: unknown) => data)
  .handler(async ({ data }): Promise<SubmitDeleteAccountResult> => {
    const { getRequestHeader, getRequestIP } = await import("@tanstack/react-start/server");
    const { Resend } = await import("resend");

    const payload = (data && typeof data === "object" ? data : {}) as Record<string, unknown>;

    // Honeypot — bots fill this; humans leave it empty. Fake success.
    if (typeof payload["website"] === "string" && payload["website"].trim() !== "") {
      return { ok: true };
    }

    const ip =
      getRequestIP({ xForwardedFor: true })?.trim() ||
      getRequestHeader("x-real-ip")?.trim() ||
      "unknown";
    const contactEmailPreview =
      typeof payload["contactEmail"] === "string"
        ? payload["contactEmail"].trim().toLowerCase()
        : "";

    pruneBuckets(ipBuckets);
    pruneBuckets(emailBuckets);

    if (hitRateLimit(ipBuckets, ip, MAX_PER_IP)) {
      return {
        ok: false,
        error: "Too many requests from this network. Please wait a bit, or email us directly.",
      };
    }
    if (contactEmailPreview && hitRateLimit(emailBuckets, contactEmailPreview, MAX_PER_EMAIL)) {
      return {
        ok: false,
        error: "Too many requests for this email. Please wait a bit, or email us directly.",
      };
    }

    const parsed = deleteAccountSchema.safeParse({
      ...payload,
      website: "",
    });
    if (!parsed.success) {
      const first = parsed.error.issues[0]?.message ?? "Invalid form data";
      return { ok: false, error: first };
    }

    const values = parsed.data;
    const apiKey = process.env["RESEND_API_KEY"]?.trim();
    if (!apiKey) {
      console.error("RESEND_API_KEY is not configured");
      return {
        ok: false,
        error: "Form delivery is temporarily unavailable. Please email us directly.",
      };
    }

    const to = inboxForAccountType(values.accountType);
    const from = process.env["RESEND_FROM"]?.trim() || "Mediceen <noreply@mediceen.app>";
    const userAgent = (getRequestHeader("user-agent") ?? "unknown").slice(0, 300);
    const body = buildEmailBody(values, userAgent);

    try {
      const resend = new Resend(apiKey);
      const { error } = await resend.emails.send({
        from,
        to: [to],
        replyTo: values.contactEmail,
        subject: "Account deletion request",
        text: body,
      });

      if (error) {
        console.error("Resend error:", error);
        return {
          ok: false,
          error: "Unable to send your request. Please email us directly.",
        };
      }

      return { ok: true };
    } catch (err) {
      console.error("Delete-account submit failed:", err);
      return {
        ok: false,
        error: "Unable to send your request. Please email us directly.",
      };
    }
  });

function buildEmailBody(values: DeleteAccountFormValues, userAgent: string): string {
  const reasonDetail =
    values.deleteReason === "other"
      ? (values.deleteReasonOther?.trim() ?? "")
      : values.deleteReasonOther?.trim()
        ? values.deleteReasonOther.trim()
        : "(none)";

  return [
    "A deletion request was submitted from the Mediceen website form.",
    "",
    `Account type: ${accountTypeLabel(values.accountType)}`,
    `Contact email (Reply-To): ${values.contactEmail}`,
    `Display name: ${values.displayName?.trim() || "(not provided)"}`,
    `Phone on account: ${values.phone?.trim() || "(not provided)"}`,
    `Reason: ${reasonLabel(values.deleteReason)}`,
    `Reason details: ${reasonDetail}`,
    `Submitted at (UTC): ${new Date().toISOString()}`,
    `User-Agent: ${userAgent}`,
    "",
    "The requester confirmed they want the account permanently deleted.",
    "Verify ownership before deleting.",
  ].join("\n");
}
