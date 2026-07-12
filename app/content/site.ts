export const site = {
  name: "Ossentra",
  tagline:
    "A handheld articulating bone-cutting instrument for minimally invasive pediatric skull surgery",
  origin: "The Hospital for Sick Children (SickKids), Toronto",
  centre:
    "Wilfred and Joyce Posluns Centre for Image-Guided Innovation and Therapeutic Intervention (PCIGITI)",
  // Shown wherever a claim about the device could be read as a clinical claim.
  regulatoryStatus:
    "Investigational device. Bench-stage prototype. Not cleared or approved for clinical use in any jurisdiction. Advancing toward FDA clearance via the Class II 510(k) pathway.",
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
      "Usability sessions, cadaveric and animal evaluation, and investigator-led study participation. We are actively recruiting craniofacial surgeons and pediatric neurosurgeons to test the prototype and tell us where it fails.",
    email: site.email,
  },
  {
    id: "procurement",
    audience: "Hospital procurement & value analysis",
    detail:
      "Regulatory pathway, reprocessing and sterilization plan, and evaluation units. Ossentra is not yet available for purchase and has no clinical clearance.",
    email: site.email,
  },
  {
    id: "investor",
    audience: "Investors & partners",
    detail:
      "Development plan, 510(k) strategy, published bench data, and the surgeon research behind the roadmap. Materials are shared under NDA.",
    email: site.email,
  },
] as const;

export type ContactRouteId = (typeof contactRoutes)[number]["id"];

/** Programmes and institutions that are actually behind the company. */
export const ecosystem = [
  {
    name: "SickKids",
    detail: "Clinical home, IP, and the Industry Partnerships & Commercialization Proof-of-Principle grant",
  },
  { name: "PCIGITI", detail: "The lab the instrument was designed and built in" },
  { name: "University of Toronto", detail: "Institute of Biomedical Engineering" },
  { name: "UTEST", detail: "2026 cohort — early-stage technology incubation" },
  { name: "H2i", detail: "Health Innovation Hub — venture coaching for health founders" },
  { name: "The Cradle", detail: "Canada's first pediatric-specific accelerator" },
] as const;
