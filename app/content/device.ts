/**
 * Copy and figures on this site come from the Ossentra pitch deck (V4,
 * November 2026), the CIHR Project Grant (Podolsky et al.) and the ASME
 * J. Medical Devices paper. Bracketed numbers refer to `references` in
 * need.ts. No financial projections or fundraising terms appear here.
 */


/**
 * Open vs. minimally invasive repair, from the literature (pitch deck,
 * "Value proposition" and Appendix B).
 */
export const specs = [
  { label: "Transfusion risk", value: "90% → 20–40%", note: "Open vs. endoscopic repair [1]" },
  { label: "Procedure time", value: "4–8 h → 1–2 h", note: "Less anaesthesia for the infant [1]" },
  { label: "Hospital stay", value: "3–5 d → 1–2 d", note: "Home in a day or two [1]" },
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


/** How Ossentra differs from today's tools (pitch deck, "Value proposition"). */
export const differences = [
  {
    label: "Hand position",
    body: "The bend follows the skull, so the surgeon's hand stays where it is instead of angling a rigid tool under the dissection.",
  },
  {
    label: "Dura",
    body: "The lower jaw of the punch is the dural protector, between the cut and the dura on every bite.",
  },
  {
    label: "One instrument",
    body: "Punch, dural protector and endoscope channel in one shaft.",
  },
  {
    label: "Scar",
    body: "Fewer and smaller incisions, a benefit families notice.",
  },
  {
    label: "Training",
    body: "Hands-on sessions on skull phantoms, then in-OR support for the first cases.",
  },
] as const;

/** Surgical workflow (pitch deck, "Workflow"). */
export const workflow = [
  { step: "Incision", detail: "1 cm at the vertex" },
  { step: "Tunnel", detail: "Under the pericranium" },
  { step: "Entry", detail: "Through a burr hole" },
  { step: "Steer and cut", detail: "Along the curved path, under endoscopic view" },
  { step: "Check", detail: "Osteotomy complete" },
  { step: "Close", detail: "Standard closure" },
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
  { name: "Powered drills and ultrasonic cutters", marks: ["yes", "no", "partial", "partial", "yes"] },
  { name: "Articulating soft-tissue instruments", marks: ["no", "yes", "no", "yes", "yes"] },
  { name: "Articulating orthopedic bur", marks: ["yes", "yes", "no", "partial", "yes"] },
  { name: "Fixed-angle cranial drill", marks: ["yes", "no", "yes", "yes", "no"] },
  { name: "Robotic surgical platforms", marks: ["no", "partial", "partial", "no", "yes"] },
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
    detail: "An articulating arthroscopic bone cutter, 510(k) cleared December 2025.",
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





/** Market (pitch deck, "Market"). Third-party market data only. */
export const market = [
  {
    value: "3x",
    label: "The minimally invasive share of US craniosynostosis repairs rose from 3% to 9% between 2013 and 2022 [7].",
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
