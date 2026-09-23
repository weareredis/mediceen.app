"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  DELETE_REASON_OPTIONS,
  deleteAccountSchema,
  inboxForAccountType,
  type DeleteAccountFormValues,
  type DeleteReasonValue,
} from "@/lib/delete-account";
import { PLACEHOLDERS } from "@/lib/constants";
import { submitDeleteAccount } from "@/lib/submit-delete-account";
import { Button } from "@/components/ui/brand-button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";

type Status = "idle" | "submitting" | "success" | "error";

export function DeleteAccountForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
    reset,
  } = useForm<DeleteAccountFormValues>({
    resolver: zodResolver(deleteAccountSchema),
    defaultValues: {
      contactEmail: "",
      displayName: "",
      phone: "",
      deleteReasonOther: "",
      confirmDeletion: false,
      website: "",
    },
  });

  const accountType = watch("accountType");
  const deleteReason = watch("deleteReason");
  const confirmDeletion = watch("confirmDeletion");
  const phoneRequired = accountType === "google" || accountType === "apple";

  const inboxHint =
    accountType === "email" || accountType === "google" || accountType === "apple"
      ? `This request will be sent to ${inboxForAccountType(accountType)}.`
      : null;

  async function onSubmit(values: DeleteAccountFormValues) {
    setStatus("submitting");
    setErrorMessage(null);

    try {
      const result = await submitDeleteAccount({
        data: {
          accountType: values.accountType,
          contactEmail: values.contactEmail,
          displayName: values.displayName ?? "",
          phone: values.phone ?? "",
          deleteReason: values.deleteReason,
          deleteReasonOther: values.deleteReasonOther?.trim() ?? "",
          confirmDeletion: true,
          website: values.website ?? "",
        },
      });

      if (!result.ok) {
        throw new Error(result.error);
      }

      setStatus("success");
      reset();
      setValue("confirmDeletion", false);
      setValue("website", "");
    } catch (err) {
      setStatus("error");
      setErrorMessage(
        err instanceof Error
          ? err.message
          : "Unable to submit. Please email us using the addresses above.",
      );
    }
  }

  if (status === "success") {
    return (
      <div
        role="status"
        className="rounded-2xl border border-success/30 bg-success-soft px-5 py-4 text-sm leading-relaxed text-brand-ink"
      >
        <p className="font-medium">Request sent</p>
        <p className="mt-1 text-muted-foreground">
          We received your deletion request. We will verify ownership and follow up by email,
          usually within 30 days. You can still contact{" "}
          <a
            href={`mailto:${PLACEHOLDERS.privacyEmail}`}
            className="text-brand transition-colors hover:text-green-700"
          >
            {PLACEHOLDERS.privacyEmail}
          </a>{" "}
          or{" "}
          <a
            href={`mailto:${PLACEHOLDERS.supportEmail}`}
            className="text-brand transition-colors hover:text-green-700"
          >
            {PLACEHOLDERS.supportEmail}
          </a>{" "}
          if you need help.
        </p>
        <Button
          type="button"
          variant="outline"
          size="sm"
          className="mt-4"
          onClick={() => setStatus("idle")}
        >
          Submit another request
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="relative space-y-6" noValidate>
      <fieldset className="space-y-3">
        <legend className="text-sm font-medium text-brand-ink">How did you sign up?</legend>
        <RadioGroup
          value={accountType}
          onValueChange={(value) =>
            setValue("accountType", value as DeleteAccountFormValues["accountType"], {
              shouldValidate: true,
            })
          }
          className="grid gap-3 sm:grid-cols-3"
          aria-invalid={!!errors.accountType}
        >
          {(
            [
              { value: "email", label: "Email / password" },
              { value: "google", label: "Google" },
              { value: "apple", label: "Apple" },
            ] as const
          ).map((option) => (
            <Label
              key={option.value}
              htmlFor={`account-${option.value}`}
              className={cn(
                "flex cursor-pointer items-center gap-2 rounded-xl border border-border bg-card px-3 py-3 text-sm font-normal text-brand-ink transition-colors hover:border-brand/40",
                accountType === option.value && "border-brand bg-brand-soft",
              )}
            >
              <RadioGroupItem id={`account-${option.value}`} value={option.value} />
              {option.label}
            </Label>
          ))}
        </RadioGroup>
        {errors.accountType ? (
          <p className="text-sm text-destructive">{errors.accountType.message}</p>
        ) : null}
        {inboxHint ? <p className="text-xs text-muted-foreground">{inboxHint}</p> : null}
        {phoneRequired ? (
          <p className="text-xs text-muted-foreground">
            Include the phone number on your account — we verify Google / Apple (including Hide My
            Email) requests manually.
          </p>
        ) : null}
      </fieldset>

      <div className="space-y-3">
        <Label htmlFor="deleteReason">Why do you want to delete the account?</Label>
        <Select
          value={deleteReason}
          onValueChange={(value) =>
            setValue("deleteReason", value as DeleteReasonValue, { shouldValidate: true })
          }
        >
          <SelectTrigger
            id="deleteReason"
            className="h-auto min-h-9 py-2"
            aria-invalid={!!errors.deleteReason}
          >
            <SelectValue placeholder="Select a reason" />
          </SelectTrigger>
          <SelectContent>
            {DELETE_REASON_OPTIONS.map((option) => (
              <SelectItem key={option.value} value={option.value}>
                {option.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        {errors.deleteReason ? (
          <p className="text-sm text-destructive">{errors.deleteReason.message}</p>
        ) : null}

        {deleteReason === "other" ? (
          <div className="space-y-2">
            <Label htmlFor="deleteReasonOther">Please tell us more</Label>
            <Textarea
              id="deleteReasonOther"
              rows={3}
              placeholder="A short note helps us improve Mediceen"
              aria-invalid={!!errors.deleteReasonOther}
              {...register("deleteReasonOther")}
            />
            {errors.deleteReasonOther ? (
              <p className="text-sm text-destructive">{errors.deleteReasonOther.message}</p>
            ) : null}
          </div>
        ) : null}
      </div>

      <div className="space-y-2">
        <Label htmlFor="contactEmail">Contact email</Label>
        <Input
          id="contactEmail"
          type="email"
          autoComplete="email"
          placeholder="Where we should reply"
          aria-invalid={!!errors.contactEmail}
          {...register("contactEmail")}
        />
        {errors.contactEmail ? (
          <p className="text-sm text-destructive">{errors.contactEmail.message}</p>
        ) : (
          <p className="text-xs text-muted-foreground">
            Prefer the email on your Mediceen account when possible.
          </p>
        )}
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="displayName">
            Display name <span className="font-normal text-muted-foreground">(optional)</span>
          </Label>
          <Input id="displayName" autoComplete="nickname" {...register("displayName")} />
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone">
            Phone on account{" "}
            {phoneRequired ? null : (
              <span className="font-normal text-muted-foreground">(optional)</span>
            )}
          </Label>
          <Input
            id="phone"
            type="tel"
            autoComplete="tel"
            placeholder="+977…"
            aria-invalid={!!errors.phone}
            required={phoneRequired}
            {...register("phone")}
          />
          {errors.phone ? <p className="text-sm text-destructive">{errors.phone.message}</p> : null}
        </div>
      </div>

      {/* Honeypot — visually hidden from humans */}
      <div className="absolute -left-[9999px] h-0 w-0 overflow-hidden" aria-hidden="true">
        <Label htmlFor="website">Website</Label>
        <Input id="website" tabIndex={-1} autoComplete="off" {...register("website")} />
      </div>

      <div className="flex items-start gap-3">
        <Checkbox
          id="confirmDeletion"
          checked={confirmDeletion === true}
          onCheckedChange={(checked) =>
            setValue("confirmDeletion", checked === true, { shouldValidate: true })
          }
          aria-invalid={!!errors.confirmDeletion}
        />
        <Label htmlFor="confirmDeletion" className="font-normal leading-snug text-muted-foreground">
          I want my Mediceen account permanently deleted. I understand this is generally
          irreversible.
        </Label>
      </div>
      {errors.confirmDeletion ? (
        <p className="text-sm text-destructive">{errors.confirmDeletion.message}</p>
      ) : null}

      {status === "error" && errorMessage ? (
        <p
          role="alert"
          className="rounded-xl border border-destructive/30 bg-destructive/5 px-4 py-3 text-sm text-destructive"
        >
          {errorMessage} You can also email{" "}
          <a
            href={`mailto:${PLACEHOLDERS.privacyEmail}?subject=Account%20deletion%20request`}
            className="underline"
          >
            {PLACEHOLDERS.privacyEmail}
          </a>{" "}
          or{" "}
          <a
            href={`mailto:${PLACEHOLDERS.supportEmail}?subject=Account%20ownership%20verification`}
            className="underline"
          >
            {PLACEHOLDERS.supportEmail}
          </a>
          .
        </p>
      ) : null}

      <Button type="submit" disabled={status === "submitting"}>
        {status === "submitting" ? "Sending…" : "Submit deletion request"}
      </Button>
    </form>
  );
}
