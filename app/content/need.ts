/**
 * Clinical figures, drawn only from the CIHR grant and the pitch deck.
 */

export const epidemiology = [
  {
    value: "2–12",
    unit: "months",
    label: "age at corrective craniosynostosis surgery",
    source: "CIHR grant",
  },
  {
    value: "~2",
    unit: "mm",
    label: "thickness of the infant calvarium",
    source: "CIHR grant",
  },
  {
    value: "6–12",
    unit: "months",
    label: "molding helmet worn after endoscopic repair (~$4,200)",
    source: "CIHR grant",
  },
] as const;

export const problems = [
  {
    title: "The instruments are straight. The skull is not.",
    body: "Endoscopic repair uses straight, rigid tools through a small incision. None follow the curve of an infant's vault, so surgeons work blind or add another incision.",
  },
  {
    title: "The tool sets the osteotomy, not the plan.",
    body: "Cuts are limited by what the instruments can reach. Late-presenting and multi-suture cases go to open surgery, which means a large incision, more blood loss, and a longer stay.",
  },
  {
    title: "The child carries the difference.",
    body: "Open surgery risks blood loss up to 500% of total blood volume. Endoscopic repair leaves a helmet worn 6–12 months. The less a surgeon can cut, the more is left for after.",
  },
] as const;

/**
 * Open vs. minimally invasive repair (pitch deck, Appendix B).
 */
export const clinicalImpact = [
  {
    value: "90% → 20–40%",
    label: "Transfusion risk, open vs. endoscopic repair [2]",
  },
  {
    value: "4–8 h → 1–2 h",
    label: "Procedure time, with less anaesthesia exposure [2]",
  },
  {
    value: "3–5 d → 1–2 d",
    label: "Length of stay, so the bed is freed sooner [2, 6]",
  },
] as const;

/** The two operations today (pitch deck, "The problem"). */
export const operations = [
  {
    name: "Open vault remodeling",
    cite: "[2]",
    image: "/figures/open-vault-remodeling.jpg",
    points: [
      "Full reshaping control",
      "Ear-to-ear scar, 4 to 8 hours",
      "Over 90% transfused, 3 to 5 days in hospital",
    ],
  },
  {
    name: "Endoscopic strip craniectomy",
    cite: "[2, 3, 4]",
    image: "/figures/endoscopic-strip-craniectomy.jpg",
    points: [
      "Keyhole, home in a day",
      "Straight tools remove a strip only, so a helmet or spring follows",
      "Closed to late, multi-suture and curved cases",
    ],
  },
] as const;

/** References, numbered as cited across the site (pitch deck, "References"). */
export const references = [
  "Governale LS. Craniosynostosis. Pediatr Neurol. 2015;53(5).",
  "Proctor MR. Endoscopic craniosynostosis repair. Transl Pediatr. 2014;3(3):247-258.",
  "Suleman F et al. The role of helmet therapy in craniosynostosis: a systematic review. Asian J Neurosurg. 2024.",
  "Pearson G, Khansa I, Drapeau A. Spring cranioplasty: incorporation into practice. J Craniofac Surg. 2020;31(7).",
  "Data Bridge Market Research. Global Craniosynostosis Treatment Market, Industry Trends and Forecast to 2032. 2025.",
  "Fung E, Yu BZ, Roth JM, et al. Trends in open versus minimally invasive craniosynostosis repair: a 10-year national analysis. J Craniofac Surg. 2025;36(8):2773-2777.",
  "Law J, Stickley E, Looi T, Podolsky D. A novel articulating bone cutting tool for minimally invasive craniosynostosis surgery. ASME J Med Devices. 2025.",
  "Law J et al. Design and implementation of a snake robot for cranial surgery. IEEE ICRA. 2025.",
  "Law J et al. Force-guided collaborative control and simulation of a snake robot for cranial bone surgery. IEEE ICRA. 2026.",
  "Toronto Innovation Acceleration Partners. Independent qualitative concept evaluation with 10 US craniosynostosis surgeons. July 2025.",
  "Freedom-to-operate and patent landscape review covering 37 patents and applications. June 2026.",
  "WO2024156054A1, US 19/150,344, CA 3,280,783. Articulable surgical instrument assembly and uses thereof. Priority January 2023.",
  "Joint Preservation Innovations. FDA 510(k) clearance of the Articulator Arthroscopic Bur. December 2025.",
  "Thakkar A, Nayak T, Millett P, Bhatia S. Articulating rotary burs for enhanced bone resection: implications for arthroscopic, endoscopic spinal, and robotic surgery. Surg Innov. 2026.",
] as const;
