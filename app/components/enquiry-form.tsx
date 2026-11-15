"use client";

import { useActionState, useId, useState } from "react";
import { useFormStatus } from "react-dom";
import { submitEnquiry } from "../contact/actions";
import { initialEnquiryState, type EnquiryState } from "../contact/enquiry-state";
import { contactRoutes, type ContactRouteId } from "../content/site";
import { Button } from "./primitives";

const fieldClasses =
  "w-full rounded-xl border border-hairline bg-plate px-3.5 py-2.5 font-serif text-base text-ink placeholder:text-steel/60 focus:border-dura focus:outline-none";

const labelClasses =
  "font-mono text-[0.6875rem] font-medium uppercase tracking-[0.14em] text-steel";

function FieldError({ id, children }: { id: string; children?: string }) {
  if (!children) return null;
  return (
    <p
      id={id}
      className="mt-1.5 font-mono text-[0.6875rem] uppercase tracking-[0.08em] text-dura"
    >
      {children}
    </p>
  );
}

function Submit() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending}>
      {pending ? "Sending…" : "Send enquiry"}
    </Button>
  );
}

export function EnquiryForm() {
  const [state, formAction] = useActionState<EnquiryState, FormData>(
    submitEnquiry,
    initialEnquiryState,
  );
  const [route, setRoute] = useState<ContactRouteId>(state.values.route);
  const id = useId();

  const selected = contactRoutes.find((r) => r.id === route) ?? contactRoutes[0];

  return (
    <form action={formAction} className="flex flex-col gap-8">
      {/* Who you are decides who reads this, so it is the first thing we ask. */}
      <fieldset>
        <legend className={labelClasses}>Who should read this?</legend>
        <div className="mt-3 grid gap-3 sm:grid-cols-3">
          {contactRoutes.map((option) => {
            const active = option.id === route;
            return (
              <label
                key={option.id}
                /* Keep every `bg-*` in one branch — two background utilities on
                   the same element resolve by stylesheet order, not by the
                   order they appear in this string. */
                className={`cursor-pointer rounded-xl border px-4 py-3 font-mono text-[0.6875rem] font-medium uppercase leading-[1.4] tracking-[0.1em] transition-colors has-[:focus-visible]:outline has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-dura ${
                  active
                    ? "border-dura/50 bg-dura/10 text-ink"
                    : "border-hairline bg-plate text-steel hover:text-ink"
                }`}
              >
                <input
                  type="radio"
                  name="route"
                  value={option.id}
                  checked={active}
                  onChange={() => setRoute(option.id)}
                  className="sr-only"
                />
                {option.audience}
              </label>
            );
          })}
        </div>
        <p className="mt-3 font-serif text-sm leading-[1.6] text-steel">
          {selected.detail}
        </p>
      </fieldset>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor={`${id}-name`} className={labelClasses}>
            Name
          </label>
          <input
            id={`${id}-name`}
            name="name"
            defaultValue={state.values.name}
            aria-invalid={Boolean(state.errors.name)}
            aria-describedby={state.errors.name ? `${id}-name-error` : undefined}
            className={`mt-2 ${fieldClasses}`}
          />
          <FieldError id={`${id}-name-error`}>{state.errors.name}</FieldError>
        </div>

        <div>
          <label htmlFor={`${id}-email`} className={labelClasses}>
            Email
          </label>
          <input
            id={`${id}-email`}
            name="email"
            type="email"
            defaultValue={state.values.email}
            aria-invalid={Boolean(state.errors.email)}
            aria-describedby={state.errors.email ? `${id}-email-error` : undefined}
            className={`mt-2 ${fieldClasses}`}
          />
          <FieldError id={`${id}-email-error`}>{state.errors.email}</FieldError>
        </div>
      </div>

      <div>
        <label htmlFor={`${id}-org`} className={labelClasses}>
          Hospital, institution, or firm
        </label>
        <input
          id={`${id}-org`}
          name="organization"
          defaultValue={state.values.organization}
          aria-invalid={Boolean(state.errors.organization)}
          aria-describedby={state.errors.organization ? `${id}-org-error` : undefined}
          className={`mt-2 ${fieldClasses}`}
        />
        <FieldError id={`${id}-org-error`}>{state.errors.organization}</FieldError>
      </div>

      <div>
        <label htmlFor={`${id}-message`} className={labelClasses}>
          Message
        </label>
        <textarea
          id={`${id}-message`}
          name="message"
          rows={5}
          defaultValue={state.values.message}
          aria-invalid={Boolean(state.errors.message)}
          aria-describedby={state.errors.message ? `${id}-message-error` : undefined}
          className={`mt-2 resize-y ${fieldClasses}`}
        />
        <FieldError id={`${id}-message-error`}>{state.errors.message}</FieldError>
      </div>

      <div className="flex flex-wrap items-center gap-x-6 gap-y-4">
        <Submit />

        {/* The form has no destination yet, so it says so rather than
            accepting the message and losing it. */}
        <p
          role="status"
          aria-live="polite"
          className="font-mono text-[0.6875rem] uppercase leading-[1.6] tracking-[0.1em] text-steel"
        >
          {state.status === "unconfigured" ? (
            <span className="text-dura">
              This form has no destination wired up yet. Email{" "}
              <a
                href={`mailto:${selected.email}`}
                className="underline underline-offset-2"
              >
                {selected.email}
              </a>{" "}
              directly.
            </span>
          ) : state.status === "invalid" ? (
            <span className="text-dura">Check the fields marked above.</span>
          ) : (
            <>Replies come from a person, usually within two working days.</>
          )}
        </p>
      </div>
    </form>
  );
}
