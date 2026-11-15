/** Founders and roles, from the pitch deck (V4, November 2026). */

export const team = [
  {
    name: "Majid Roshanfar",
    credentials: "PhD",
    role: "Co-founder & CEO",
    affiliation: "Research Associate, SickKids",
    bio: "Surgical robotics engineer at SickKids with 55+ papers and 6 patents. Recipient of the 2026 Andrew Sass-Kortsak Award. Leads the venture.",
    photo: "/figures/Majid.jpg",
    linkedin: "https://www.linkedin.com/in/majidroshanfar/",
  },
  {
    name: "Dale Podolsky",
    credentials: "MD, PhD, FRCSC, FACS",
    role: "Co-founder & CMO",
    affiliation: "Pediatric craniofacial surgeon · Lead, PCIGITI",
    bio: "Craniofacial surgeon and engineer, and developer of the device. He still operates, which is why the requirements came from a real case. Founded and exited Simulare Medical.",
    photo: "/figures/Dale.jpg",
    linkedin:
      "https://www.linkedin.com/in/dale-podolsky-md-phd-frcsc-facs-2b307143/",
  },
  {
    name: "Thomas Looi",
    credentials: "PhD, MBA",
    role: "Co-founder & Co-CTO",
    affiliation: "Program Director, PCIGITI",
    bio: "Fifteen years taking surgical innovation from bench to clinic. Owns the path to something a hospital can buy, reprocess and trust.",
    photo: "/figures/Thomas.jpg",
    linkedin: "https://www.linkedin.com/in/thomas-looi-ba657a8/",
  },
  {
    name: "Jones Law",
    credentials: "PhD Candidate",
    role: "Co-founder & CTO",
    affiliation: "PCIGITI · University of Toronto",
    bio: "Inventor and lead developer, and first author on the characterization paper. Owns the bending section, the end-effector and the punch-to-dura tolerance stack.",
    photo: "/figures/Jones.png",
    linkedin: "https://www.linkedin.com/in/jones-law-316791128/",
  },
] as const;

/** Advisors and support (pitch deck, "Team and advisors"). */
export const advisors = [
  { name: "SickKids IP&C", role: "Licensing, freedom to operate, investors" },
  { name: "Creative Destruction Lab", role: "Mentors and Sauder MBA team" },
  { name: "UTEST and Rotman", role: "Torys LLP and MBA venture team" },
] as const;

/** Accelerators and programs Ossentra is part of, shown as logos. */
export const accelerators = [
  { name: "Creative Destruction Lab", logo: "/logos/cdl.png" },
  { name: "UTEST", logo: "/logos/utest.png" },
  { name: "Health Innovation Hub (H2i)", logo: "/logos/h2i.png" },
  { name: "ICUBE UTM", logo: "/logos/icube.png" },
  { name: "Lab2Market Validate", logo: "/logos/lab2market.png" },
  { name: "Lab2Market Launch", logo: "/logos/lab2market-launch.png" },
  { name: "BioHubNet", logo: "/logos/biohubnet.png" },
  { name: "MDDC", logo: "/logos/mddc.png" },
  { name: "The Cradle", logo: "/logos/the-cradle.png" },
] as const;

/** Institutions, funders and partners behind the work. */
export const institutions = [
  { name: "SickKids", logo: "/logos/sickkids.png" },
  { name: "University of Toronto", logo: "/logos/uoft.png" },
  { name: "PCIGITI", logo: "/logos/pcigiti.png" },
  {
    name: "SickKids Proof of Principle Grant",
    logo: "/logos/proof-of-principle.png",
  },
  { name: "CIHR", logo: "/logos/cihr.png" },
  { name: "NSERC", logo: "/logos/nserc.png" },
  { name: "Toronto Innovation Acceleration Partners", logo: "/logos/tiap.png" },
] as const;

/** Co-authors on the characterization paper who are not company officers. */
export const contributors = [
  {
    name: "Emma Stickley",
    role: "Technologist, PCIGITI, prototype fabrication and bench testing",
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
    detail:
      "Shadowed surgeons in the OR. The gap wasn't knowledge. It was an instrument.",
  },
  {
    step: "Build",
    detail:
      "Prototyped inside PCIGITI with a craniofacial surgeon in the room, then characterized on the bench.",
  },
  {
    step: "Protect",
    detail:
      "US patent filed through SickKids Industry Partnerships & Commercialization.",
  },
  {
    step: "Launch",
    detail:
      "Spun out as Ossentra, backed by a SickKids Proof-of-Principle grant and UTEST 2026.",
  },
] as const;

export const funding =
  "Supported by a SickKids Proof-of-Principle grant, with the underlying research funded by CIHR and NSERC grants held at SickKids. Patents are pending in the US and Canada through SickKids.";
