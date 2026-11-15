/**
 * Copy and figures on this site come from the Ossentra pitch deck (V4,
 * November 2026), the CIHR Project Grant (Podolsky et al.) and the ASME
 * J. Medical Devices paper. Bracketed numbers refer to `references` in
 * need.ts. No financial projections or fundraising terms appear here.
 */

export const paper = {
  citation: "Bench values from Law et al., ASME Journal of Medical Devices, 2025 [2].",
  short: "Law et al., ASME J. Medical Devices, 2025",
} as const;

/**
 * Open vs. minimally invasive repair, from the literature (pitch deck,
 * "Value proposition" and Appendix B).
 */
export const specs = [
  { label: "Transfusion risk", value: "90% → 20–40%", note: "Open vs. endoscopic repair [1]" },
  { label: "Procedure time", value: "4–8 h → 1–2 h", note: "Less anaesthesia for the infant [1]" },
  { label: "Hospital stay", value: "3–5 d → 1–2 d", note: "Home in a day or two [1]" },
  { label: "Incision", value: "Ear-to-ear → 1 cm", note: "One keyhole at the vertex [1, 2]" },
] as const;

/** The three things that make the instrument (pitch deck, "Our solution"). */
export const capabilities = [
  {
    id: "articulate",
    title: "Articulates",
    body: "A cable-driven, self-locking bend that follows the curve of the infant cranium.",
    metric: "3 sliding curved joints",
  },
  {
    id: "cuts-bone",
    title: "Cuts bone",
    body: "A cable-driven bone punch. Its lower jaw is the dural protector, so the jaw that cuts is the jaw that shields.",
    metric: "Bone punch",
  },
  {
    id: "right-scale",
    title: "Right scale",
    body: "Punch, dural protector and endoscope channel in one shaft, built for the infant skull.",
    metric: "⌀ 13 mm shaft",
  },
] as const;

/**
 * The babies the instrument is meant for (patient personas). Illustrative
 * cases, not real patients.
 */
export const patients = [
  {
    age: "5 months",
    tag: "Diagnosed late",
    now: "Too old for the small-incision surgery, so the full open operation is the only option.",
    with: "Still eligible for the small-incision surgery.",
  },
  {
    age: "4 months",
    tag: "Several skull joints fused",
    now: "Straight tools cannot reach every fused joint, so the case goes to open surgery.",
    with: "One bending tool reaches every joint through small openings.",
  },
  {
    age: "3 months",
    tag: "Needs a curved cut",
    now: "Straight tools cannot follow the curve, so surgeons switch to open surgery.",
    with: "The tool bends along the curve through one small opening.",
  },
] as const;

/** How Ossentra differs from today's tools (pitch deck, "Value proposition"). */
export const differences = [
  {
    label: "Complexity",
    body: "One instrument, the same incision and endoscope, and no capital robot.",
  },
  {
    label: "Training",
    body: "A familiar punch and endoscope workflow, with hands-on training at pilot sites.",
  },
  {
    label: "Patient",
    body: "A 1 cm scar, fewer transfusions, and home in a day or two.",
  },
  {
    label: "Failure modes",
    body: "A self-locking bend and a dural protector. Conversion to open surgery is always available.",
  },
  {
    label: "Adoption",
    body: "The procedure is already covered by CPT 61550, so there is no new billing code.",
  },
] as const;

/** Surgical workflow (pitch deck, "Workflow"). */
export const workflow = [
  { step: "Incision", detail: "1 cm at the vertex" },
  { step: "Tunnel", detail: "Under the pericranium" },
  { step: "Entry", detail: "Through a burr hole" },
  { step: "Steer and cut", detail: "Along the curved path, under endoscopic view" },
  { step: "Check", detail: "Osteotomy complete" },
  { step: "Close", detail: "About 1.5 to 2 hours in the OR" },
] as const;

/** Competition at a glance (pitch deck). "~" means partial. */
export const competitionColumns = [
  "Cuts bone",
  "Articulates",
  "Infant scale",
  "Endoscopic",
  "Cleared",
] as const;

export const competitionRows = [
  { name: "Scissors and rongeurs", marks: ["yes", "no", "partial", "no", "yes"] },
  { name: "Powered drills, ultrasonic", marks: ["yes", "no", "partial", "partial", "yes"] },
  { name: "ArtiSential, FlexDex (soft tissue)", marks: ["no", "yes", "no", "yes", "yes"] },
  { name: "JPI Articulator (orthopedic)", marks: ["yes", "yes", "no", "partial", "yes"] },
  { name: "Fixed-angle cranial drill (Pittsburgh)", marks: ["yes", "no", "yes", "yes", "no"] },
  { name: "Robotic platforms (ROSA)", marks: ["no", "partial", "partial", "no", "yes"] },
  { name: "Ossentra", marks: ["yes", "yes", "yes", "yes", "pathway"] },
] as const;

/** Milestones (pitch deck, "Milestones"). */
export const milestones = [
  {
    when: "2023 to 2025",
    title: "Proof of concept",
    status: "complete",
    items: ["Patent filed", "Prototype validated", "ASME publication", "SickKids Proof-of-Principle grant"],
  },
  {
    when: "Q4 2026",
    title: "Design freeze",
    status: "in progress",
    items: ["Bench validation", "Incorporation and licence"],
  },
  {
    when: "2027",
    title: "Regulatory",
    status: "planned",
    items: ["FDA Pre-Submission (Q-Sub)", "Design for manufacturing, ISO 10993", "510(k) filing, Q4"],
  },
  {
    when: "2028",
    title: "First patients",
    status: "planned",
    items: ["510(k) clearance", "10-patient trial at SickKids", "Pilot sites"],
  },
] as const;

/** Regulatory pathway (pitch deck, "Regulatory pathway" and Appendix C). */
export const regulatorySteps = [
  {
    step: "Predicate",
    detail: "JPI Articulator Arthroscopic Bur, 510(k) cleared December 2025.",
    when: "In progress",
  },
  {
    step: "Pre-Submission",
    detail: "Q-Sub for FDA written feedback on classification, predicate and test plan.",
    when: "Q1 2027",
  },
  {
    step: "Evidence",
    detail: "Bench verification, ISO 10993 biocompatibility, sterilization and reprocessing, IEC 62366 usability.",
    when: "2027",
  },
  {
    step: "510(k) filed",
    detail: "Health Canada Class II licence filed in parallel, on one ISO 13485 quality system via MDSAP.",
    when: "Q4 2027",
  },
  {
    step: "Clearance",
    detail: "Typical FDA review of 130 to 170 days, then a 10-patient first-in-human study at SickKids under REB approval.",
    when: "2028",
  },
] as const;

/** Intellectual property (pitch deck, Appendix D). */
export const ipPosition = [
  {
    title: "Patents",
    body: "Articulable surgical instrument assembly and uses therefor [7]. PCT/CA2024/050074, priority January 2023; US 19/150,344 and CA 3,280,783 pending. Assignee SickKids, with an exclusive licence to Ossentra under negotiation.",
  },
  {
    title: "Freedom to operate",
    body: "A June 2026 review of 37 patents and applications, including Ethicon, Covidien, Intuitive, JPI and the University of Pittsburgh, found no blocking IP.",
  },
  {
    title: "Data and know-how",
    body: "The only peer-reviewed publication on an articulating bone cutter for craniosynostosis, an independent study of 10 US surgeons, and SickKids clinical access and phantom library.",
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
    test: "Reachability",
    result: "72 to 78%",
    condition: "Reachability of the articulating tip across the target cutting paths.",
  },
  {
    test: "Shaft",
    result: "13 mm diameter",
    condition: "Bone punch jaws, dural protector, and endoscope channel in one shaft.",
  },
] as const;



/** Market (pitch deck, "Market"). Third-party market data only. */
export const market = [
  {
    value: "$570M",
    label: "Global craniosynostosis treatment market in 2024, growing to about $920M by 2032 (Data Bridge Market Research, 2025).",
  },
  {
    value: "3x",
    label: "The minimally invasive share of US craniosynostosis repairs rose from 3% to 9% between 2013 and 2022 [6].",
  },
  {
    value: "Class II",
    label: "FDA 510(k) pathway, with an articulating bone cutter now cleared as a predicate.",
  },
] as const;

export const marketFocus = [
  { label: "Beachhead", value: "Craniosynostosis, 3 to 12 months" },
  { label: "Users", value: "Pediatric neurosurgeons and craniofacial surgeons" },
  { label: "Buyers", value: "Children's hospitals" },
  { label: "Geography", value: "US, Canada, EU, Japan" },
] as const;
