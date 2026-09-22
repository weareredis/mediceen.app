import { z } from "zod";
import { PLACEHOLDERS } from "@/lib/constants";

export const DELETE_REASON_OPTIONS = [
  {
    value: "no_longer_preparing",
    label: "I’m no longer preparing for MECEE-BL / medical entrance",
  },
  { value: "switching_method", label: "I’m switching to another study method or app" },
  { value: "not_useful", label: "The app isn’t useful for me right now" },
  { value: "privacy", label: "Privacy or data concerns" },
  {
    value: "duplicate",
    label: "I created this account by mistake / I have a duplicate account",
  },
  { value: "other", label: "Other" },
] as const;

export type DeleteReasonValue = (typeof DELETE_REASON_OPTIONS)[number]["value"];

const reasonValues = DELETE_REASON_OPTIONS.map((option) => option.value) as [
  DeleteReasonValue,
  ...DeleteReasonValue[],
];

export const deleteAccountSchema = z
  .object({
    accountType: z.enum(["email", "google", "apple"], {
      required_error: "Choose how you signed up",
    }),
    contactEmail: z.string().email("Enter a valid contact email"),
    displayName: z.string().max(80).optional(),
    phone: z.string().max(40).optional(),
    deleteReason: z.enum(reasonValues, { required_error: "Choose a reason" }),
    deleteReasonOther: z.string().max(500).optional(),
    confirmDeletion: z
      .boolean()
      .refine((value) => value === true, "Confirm that you want permanent deletion"),
    /** Honeypot — must stay empty */
    website: z.string().max(0).optional(),
  })
  .superRefine((values, ctx) => {
    if (values.deleteReason === "other" && !values.deleteReasonOther?.trim()) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["deleteReasonOther"],
        message: "Please tell us a bit more",
      });
    }

    const needsPhone = values.accountType === "google" || values.accountType === "apple";
    if (needsPhone && !values.phone?.trim()) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["phone"],
        message: "Phone on account is required for Google / Apple sign-up",
      });
    }
  });

export type DeleteAccountFormValues = z.infer<typeof deleteAccountSchema>;

export function inboxForAccountType(
  accountType: DeleteAccountFormValues["accountType"],
): string {
  return accountType === "email" ? PLACEHOLDERS.privacyEmail : PLACEHOLDERS.supportEmail;
}

export function accountTypeLabel(
  accountType: DeleteAccountFormValues["accountType"],
): string {
  switch (accountType) {
    case "email":
      return "Email / password";
    case "google":
      return "Google Sign-In";
    case "apple":
      return "Sign in with Apple";
  }
}

export function reasonLabel(reason: DeleteReasonValue): string {
  return DELETE_REASON_OPTIONS.find((option) => option.value === reason)?.label ?? reason;
}
