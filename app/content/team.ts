/**
 * Real people. Sourced from the 2026 founder deck and h2i.utoronto.ca/startup/ossentra.
 *
 * ⚠ ONE THING TO CHECK: the deck's team slide is ambiguous about which of
 * Jones Law and Dale Podolsky holds CTO vs CMO. The layout reads Jones Law as
 * CTO (engineering lead) and Dale Podolsky as CMO (the surgeon), which is also
 * the sensible mapping — but confirm before publishing.
 */

export const team = [
  {
    name: "Majid Roshanfar",
    credentials: "PhD",
    role: "Co-founder & CEO",
    affiliation: "Postdoctoral fellow, SickKids and University of Toronto",
    bio: "Surgical-robotics engineer. Eight years on one question — how to make surgery safer with robots — across Concordia, the U of T Microrobotics Lab, and PCIGITI. Previously lead engineer at FemTherapeutics. Leads the venture.",
  },
  {
    name: "Dale Podolsky",
    credentials: "MD, PhD",
    role: "Chief Medical Officer",
    affiliation: "Pediatric craniofacial surgeon · Co-Director, PCIGITI",
    bio: "Surgeon and engineer, and the inventor of the device. He still operates, which is why the design requirements came out of a craniosynostosis case rather than a market study. Previously founded Simulare Medical.",
  },
  {
    name: "Thomas Looi",
    credentials: "PhD",
    role: "Chief Operating Officer",
    affiliation: "Co-Lead, PCIGITI",
    bio: "Fifteen years translating surgical innovation from bench to clinic. Owns the path from a characterized prototype to something a hospital can actually buy, reprocess and trust.",
  },
  {
    name: "Jones Law",
    credentials: "PhD Candidate",
    role: "Chief Technology Officer",
    affiliation: "Institute of Biomedical Engineering, University of Toronto",
    bio: "Engineering and product development lead, and first author on the paper that characterizes the instrument. Owns the bending section, the end-effector, and the tolerance stack that keeps the punch off the dura.",
  },
] as const;

/** Co-authors on the characterization paper who are not company officers. */
export const contributors = [
  {
    name: "Emma Stickley",
    role: "Technologist, PCIGITI — prototype fabrication and bench testing",
  },
  {
    name: "Eric Diller",
    credentials: "PhD",
    role: "Microrobotics Laboratory, University of Toronto — co-author",
  },
] as const;

/** How the paper became a company. Each step gated the next. */
export const originStory = [
  {
    step: "Validate",
    detail: "Shadowed surgeons in the operating room and mapped the workflow. The gap was not knowledge. It was an instrument.",
  },
  {
    step: "Build",
    detail: "Prototyped inside PCIGITI with a craniofacial surgeon in the room, and characterized it on the bench.",
  },
  {
    step: "Protect",
    detail: "US patent filed through SickKids Industry Partnerships & Commercialization.",
  },
  {
    step: "Launch",
    detail: "Spun out as Ossentra, backed by a SickKids Proof-of-Principle grant and the UTEST 2026 cohort.",
  },
] as const;

export const funding =
  "The underlying research was supported by NSERC (Canada Graduate Scholarship–Doctoral) and the Canadian Institutes of Health Research.";
