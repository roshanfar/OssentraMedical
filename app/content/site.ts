export const site = {
  name: "Ossentra",
  tagline:
    "The first articulating, robot-ready bone-cutting instrument for pediatric skull surgery",
  origin: "The Hospital for Sick Children (SickKids), Toronto",
  centre:
    "Wilfred and Joyce Posluns Centre for Image-Guided Innovation and Therapeutic Intervention (PCIGITI)",
  // Shown wherever a claim about the device could be read as a clinical claim.
  regulatoryStatus:
    "Investigational device. Bench-stage prototype, not cleared for clinical use. Advancing toward FDA Class II 510(k).",
  email: "majid.roshanfar@sickkids.ca",
} as const;

export const nav = [
  { href: "/technology", label: "Technology" },
  { href: "/clinical-need", label: "Clinical need" },
  { href: "/team", label: "Team" },
  { href: "/contact", label: "Contact" },
] as const;

/**
 * A single real inbox today. When dedicated addresses exist, add them here —
 * this is the only place the site reads contact details from.
 */
export const contactRoutes = [
  {
    id: "clinical",
    audience: "Surgeons & clinical collaborators",
    detail:
      "We're recruiting craniofacial and pediatric neurosurgeons to test the prototype and tell us where it fails.",
    email: site.email,
  },
  {
    id: "procurement",
    audience: "Hospital procurement & value analysis",
    detail:
      "Regulatory pathway, reprocessing plan, and evaluation units. Not yet available for purchase.",
    email: site.email,
  },
  {
    id: "investor",
    audience: "Investors & partners",
    detail:
      "Development plan, 510(k) strategy, and bench data. Shared under NDA.",
    email: site.email,
  },
] as const;

export type ContactRouteId = (typeof contactRoutes)[number]["id"];

/** Programmes and institutions that are actually behind the company. */
export const ecosystem = [
  {
    name: "SickKids",
    detail: "Clinical home, IP, and the Proof-of-Principle grant",
  },
  { name: "PCIGITI", detail: "The lab the instrument was designed and built in" },
  { name: "UTEST", detail: "2026 cohort, early-stage technology incubation" },
] as const;
