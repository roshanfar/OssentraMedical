/**
 * All copy and figures on this site are drawn from two documents only:
 *   - Two Small Fish pitch deck (Ossentra), July 2026
 *   - CIHR Project Grant — "Development of a minimally invasive bone cutting
 *     tool for craniosynostosis surgery" (Podolsky et al.)
 * Numbers below come from those two PDFs.
 */

export const paper = {
  citation:
    "Law J, et al. A Novel Articulating Bone Cutting Tool for Minimally Invasive Craniosynostosis Surgery. ASME Journal of Medical Devices, 2025. Patent WO2024156054A1.",
  short: "Law et al., ASME J. Medical Devices, 2025",
} as const;

/**
 * Homepage headline strip — the clinical and economic impact of converting a
 * case from open to minimally invasive (pitch deck, Appendix B).
 */
export const specs = [
  {
    label: "Blood transfusion rate",
    value: "83→10",
    unit: "%",
    note: "Open versus endoscopic, life-altering for a 3-month-old",
  },
  {
    label: "Less OR time per case",
    value: "40–50",
    unit: "%",
    note: "Open surgery cut to 1.5–2 hours",
  },
  {
    label: "Saved per converted case",
    value: "$80K",
    unit: "",
    note: "Open ~$120K vs. endoscopic ~$40K",
  },
  {
    label: "ICU stay",
    value: "3→1",
    unit: "day",
    note: "Recovery within the 3–6-month window",
  },
] as const;

/**
 * The three things that make the instrument — pitch deck, "Ossentra's Solution".
 */
export const capabilities = [
  {
    id: "articulate",
    title: "Articulate",
    body: "Follows the curved endoscopic path along the infant cranium.",
    metric: "3 sliding curved joints",
  },
  {
    id: "cuts-bone",
    title: "Cuts bone",
    body: "Interchangeable tips: bone punch, burr, ultrasonic cutter.",
    metric: "Punch · Burr · Ultrasonic",
  },
  {
    id: "right-scale",
    title: "Right scale",
    body: "Purpose-built for the 3–6-month infant skull.",
    metric: "⌀ 13 mm shaft",
  },
] as const;

/** Bench values — CIHR grant preliminary results and pitch deck. */
export const benchResults = [
  {
    test: "Tip deflection",
    result: "3.6 mm at 10 N (0° bending)",
    condition: "Stiffness of the bending section under external load.",
  },
  {
    test: "Workspace",
    result: "23.7 mm reach · 120° sweep",
    condition: "Kinematic analysis of the tool tip about a fixed incision point.",
  },
  {
    test: "Cutting force",
    result: "< 40 N cable tension",
    condition: "Cutting 2 mm PCF 30 & 40 polyurethane bone analogue.",
  },
  {
    test: "Bending range",
    result: "Segment 1: 60° · Segment 2: 90°",
    condition: "Two-segment tendon-driven articulation, variable stiffness.",
  },
  {
    test: "Shaft",
    result: "13 mm diameter",
    condition: "Bone punch jaws, dural protector, and endoscope channel in one shaft.",
  },
] as const;

/**
 * What still has to be built — CIHR grant Aim 1 (the device work) and the
 * pitch deck roadmap.
 */
export const openProblems = [
  {
    title: "Powered, faster cutting",
    body: "A manual punch is slow. A powered bone-cutting mechanism is the next end-effector.",
  },
  {
    title: "Suction and irrigation",
    body: "Bone bleeds the moment you cut it. Two more channels clear the field for the endoscope.",
  },
  {
    title: "Bleeding control",
    body: "The dural protector, scalp retractor and suction tip double as cautery.",
  },
] as const;

/**
 * Where the programme is — pitch deck roadmap and CIHR aims. Each stage gates
 * the next.
 */
export const developmentStages = [
  {
    stage: "Handheld prototype, published",
    status: "complete",
    detail: "Cable-driven bending section, integrated end-effector, flexible endoscope. ASME J. Medical Devices, 2025.",
  },
  {
    stage: "Bench characterization",
    status: "complete",
    detail: "Stiffness, cutting force, and workspace on CT-derived skull phantoms.",
  },
  {
    stage: "Surgeon evaluation (TIAP study)",
    status: "complete",
    detail: "TIAP study of 10 US surgeons. Half would trial it, and articulation was the feature they valued most.",
  },
  {
    stage: "Powered cutting, suction-irrigation",
    status: "in progress",
    detail: "Adding the functions surgeons need for a real osteotomy: 12–18 months to 510(k) filing.",
  },
  {
    stage: "Phantom & porcine testing",
    status: "planned",
    detail: "Osteotomies compared against open and endoscopic technique.",
  },
  {
    stage: "FDA 510(k), Class II",
    status: "planned",
    detail: "Predicate-based clearance; CE Mark and Health Canada filed in parallel.",
  },
] as const;

/** Business case — pitch deck, "The Compelling Business Case". */
export const market = [
  {
    value: "$570M",
    label: "Global craniosynostosis market today, ~$850M by 2031",
  },
  {
    value: "+195%",
    label: "Growth in US endoscopic procedures, 2012–2024",
  },
  {
    value: "Class II",
    label: "FDA 510(k), predicate-based pathway",
  },
] as const;
