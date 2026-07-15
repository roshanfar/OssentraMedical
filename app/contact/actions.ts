"use server";

import { contactRoutes, type ContactRouteId } from "../content/site";
import { DEFAULT_ROUTE, type EnquiryState } from "./enquiry-state";

function isRoute(value: string): value is ContactRouteId {
  return contactRoutes.some((route) => route.id === value);
}

export async function submitEnquiry(
  _prev: EnquiryState,
  formData: FormData,
): Promise<EnquiryState> {
  const raw = {
    route: String(formData.get("route") ?? ""),
    name: String(formData.get("name") ?? "").trim(),
    email: String(formData.get("email") ?? "").trim(),
    organization: String(formData.get("organization") ?? "").trim(),
    message: String(formData.get("message") ?? "").trim(),
  };

  const values = {
    ...raw,
    route: isRoute(raw.route) ? raw.route : DEFAULT_ROUTE,
  };

  const errors: EnquiryState["errors"] = {};
  if (!values.name) errors.name = "Enter your name.";
  if (!values.email) {
    errors.email = "Enter an email address we can reply to.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = "That address is missing an @ or a domain.";
  }
  if (!values.organization) {
    errors.organization = "Enter your hospital, institution, or firm.";
  }
  if (values.message.length < 20) {
    errors.message = "Tell us a little more, at least a sentence or two.";
  }

  if (Object.keys(errors).length > 0) {
    return { status: "invalid", errors, values };
  }

  // NOTE: no delivery destination is wired up yet. Rather than accept the
  // enquiry and drop it, the form says so and hands the sender the direct
  // address. Replace this branch with the real send (email relay, CRM, or an
  // inbox webhook) and return a `sent` status once it can actually deliver.
  return { status: "unconfigured", errors: {}, values };
}
