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
    affiliation: "Research Associate, SickKids",
    bio: "Surgical-robotics engineer. Eight years making surgery safer with robots. Leads the venture.",
    photo: "/figures/Majid.jpg",
  },
  {
    name: "Dale Podolsky",
    credentials: "MD, PhD",
    role: "Chief Medical Officer",
    affiliation: "Pediatric craniofacial surgeon · Co-Director, PCIGITI",
    bio: "Surgeon, engineer, and inventor of the device. He still operates, which is why the requirements came from a real case instead of a market study.",
    photo: "/figures/Dale.jpg",
  },
  {
    name: "Thomas Looi",
    credentials: "PhD",
    role: "Chief Operating Officer",
    affiliation: "Co-Lead, PCIGITI",
    bio: "Fifteen years translating surgical innovation from bench to clinic. Owns the path to something a hospital can buy, reprocess and trust.",
    photo: "/figures/Thomas.jpg",
  },
  {
    name: "Jones Law",
    credentials: "PhD Candidate",
    role: "Chief Technology Officer",
    affiliation: "PCIGITI, SickKids",
    bio: "Engineering lead and first author on the characterization paper. Owns the bending section, the end-effector, and the punch-to-dura tolerance stack.",
    photo: "/figures/Jones.png",
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
    role: "Co-author on the characterization paper",
  },
] as const;

/** How the paper became a company. Each step gated the next. */
export const originStory = [
  {
    step: "Validate",
    detail: "Shadowed surgeons in the OR. The gap wasn't knowledge. It was an instrument.",
  },
  {
    step: "Build",
    detail: "Prototyped inside PCIGITI with a craniofacial surgeon in the room, then characterized on the bench.",
  },
  {
    step: "Protect",
    detail: "US patent filed through SickKids Industry Partnerships & Commercialization.",
  },
  {
    step: "Launch",
    detail: "Spun out as Ossentra, backed by a SickKids Proof-of-Principle grant and UTEST 2026.",
  },
] as const;

export const funding =
  "Supported by a SickKids Proof-of-Principle grant and a CIHR Project Grant, with a US patent filed through SickKids.";
