export const site = {
  name: "Ossentra",
  tagline:
    "The first articulating bone-cutting instrument for minimally invasive pediatric skull surgery",
  origin: "The Hospital for Sick Children (SickKids), Toronto",
  centre:
    "Wilfred and Joyce Posluns Centre for Image-Guided Innovation and Therapeutic Intervention (PCIGITI)",
  // Shown wherever a claim about the device could be read as a clinical claim.
  regulatoryStatus:
    "Investigational device. Bench-stage prototype, not cleared for clinical use. Advancing toward FDA Class II 510(k).",
  email: "majid.roshanfar@sickkids.ca",
  linkedin: "https://www.linkedin.com/company/ossentra/",
  address: [
    "PCIGITI, The Hospital for Sick Children",
    "555 University Avenue",
    "Toronto, ON M5G 1X8, Canada",
  ],
} as const;

export const nav = [
  { href: "#instrument", label: "Instrument" },
  { href: "#technology", label: "Technology" },
  { href: "#need", label: "Clinical need" },
  { href: "#status", label: "Roadmap" },
  { href: "#team", label: "Team" },
  { href: "#news", label: "News" },
] as const;

/** News and coverage, newest first. Summaries are our own words. */
export const news = [
  {
    date: "September 10, 2026",
    source: "MDDC Insight to Innovation",
    logo: "/logos/mddc.png",
    title: "Ossentra receives an MDDC Discovery Sprint Award",
    summary:
      "The Medical Device Development Centre profiled Ossentra after the team, led by Majid Roshanfar and Dr. Dale Podolsky at SickKids, won a $5,000 Discovery Sprint Award for an unmet need in bone cutting for minimally invasive craniosynostosis surgery. The piece describes the reusable articulating handheld instrument developed at PCIGITI and the company's plan for FDA Class II 510(k) clearance.",
    url: "https://mddc.org/i2i-success/ossentra-precision-was-never-a-straight-line/",
  },
] as const;

/** Programmes and institutions that are actually behind the company. */
export const ecosystem = [
  {
    name: "SickKids",
    detail: "Clinical home, IP, and the Proof-of-Principle grant",
  },
  {
    name: "PCIGITI",
    detail: "The lab the instrument was designed and built in",
  },
  { name: "UTEST", detail: "2026 cohort, early-stage technology incubation" },
] as const;
