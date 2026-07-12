import type { ContactRouteId } from "../content/site";

/**
 * Lives outside `actions.ts` on purpose: a "use server" module may only export
 * async functions, so the initial state and its type cannot go there.
 */
export type EnquiryState = {
  status: "idle" | "invalid" | "unconfigured";
  errors: Partial<Record<"name" | "email" | "organization" | "message", string>>;
  values: {
    route: ContactRouteId;
    name: string;
    email: string;
    organization: string;
    message: string;
  };
};

export const DEFAULT_ROUTE: ContactRouteId = "clinical";

export const initialEnquiryState: EnquiryState = {
  status: "idle",
  errors: {},
  values: {
    route: DEFAULT_ROUTE,
    name: "",
    email: "",
    organization: "",
    message: "",
  },
};
