/**
 * Every figure on this site comes from this file, and every figure here comes
 * from the published prototype characterization:
 *
 *   Law J, Stickley E, Looi T, Diller E, Podolsky D.
 *   "A Novel Articulating Bone Cutting Tool for Minimally Invasive
 *    Craniosynostosis Surgery." ASME Journal of Medical Devices, 2025.
 *
 * These are bench values from the current prototype, not clinical results.
 * Say so wherever they appear.
 */

export const paper = {
  citation:
    "Law J, Stickley E, Looi T, Diller E, Podolsky D. A Novel Articulating Bone Cutting Tool for Minimally Invasive Craniosynostosis Surgery. ASME Journal of Medical Devices, 2025.",
  short: "Law et al., ASME J. Medical Devices, 2025",
} as const;

export const specs = [
  {
    label: "Shaft diameter",
    value: "13.5",
    unit: "mm",
    note: "Fits the 20–40 mm incisions already used for endoscopic repair",
  },
  {
    label: "Radius of curvature",
    value: "30–180",
    unit: "mm",
    note: "Spans the curvature of the infant cranium, from CT of three patients",
  },
  {
    label: "Reachability",
    value: "72–78",
    unit: "%",
    note: "Of the planned osteotomy, from one incision at the vertex",
  },
  {
    label: "Tip deflection",
    value: "≤5",
    unit: "mm",
    note: "Under the 5 N load measured for cutting bone",
  },
] as const;

/**
 * The three things the instrument does that a straight tool cannot. Ordered by
 * what surgeons themselves named first in the 2025 concept evaluation:
 * articulation, then the single access point, then dural protection.
 */
export const capabilities = [
  {
    id: "articulation",
    title: "It bends to the skull instead of the skull bending to it",
    body: "Three consecutive sliding curved joints, driven by an antagonistic tendon pair through a self-locking worm gear. Unlike a continuum tool it stays stiff enough to cut bone; unlike a motorized bendable drill it stays small enough to hold. The bending section traces a radius of curvature from 30 to 180 mm — the range of the infant cranium.",
    metric: "3 sliding curved joints",
  },
  {
    id: "access",
    title: "One 13.5 mm shaft carries the whole workflow",
    body: "Bone punch, dural protector, scalp retractor and a channel for a flexible endoscope, all through a single vertex incision. No exchanging instruments under the scalp, and no second incision bought just to reach around a curve.",
    metric: "⌀ 13.5 mm",
  },
  {
    id: "protection",
    title: "The dura is shielded by the jaw that does the cutting",
    body: "The lower jaw doubles as a dural protector: it slides beneath the bone edge and stays between the punch and the dura through the bite. A scalp retractor above creates the soft-tissue pocket the endoscope needs to see into.",
    metric: "Protector integral to the end-effector",
  },
] as const;

/** Bench characterization. Numbers, with the conditions attached. */
export const benchResults = [
  {
    test: "Reachability",
    result: "72.2% sagittal · 71.1% metopic · 78.4% unicoronal",
    condition:
      "Length of achievable osteotomy over planned path, tool tip constrained to the skull surface, single vertex incision. 3D-printed skulls from patient CT.",
  },
  {
    test: "Reachability with scalp",
    result: "1.2–10.9 mm tool deviation",
    condition:
      "Silicone scalp, 20 mm vertex incision, eight paths. Remaining path length is reached by lifting the shaft off the vertex — a scalp stretch a craniofacial surgeon judged feasible.",
  },
  {
    test: "Bending stiffness",
    result: "≤5 mm tip deflection under 5 N",
    condition:
      "At every bending configuration except 0°, which deflected 5.4 mm. 5 N is the cutting force measured on simulated bone.",
  },
  {
    test: "Cutting force at the handle",
    result: "53–64 N (PCF20) · 156–179 N (PCF30)",
    condition:
      "Full-thickness cut of 2.0 mm polyurethane bone analogue at 0–45° bending. Both are well under adult grip strength (303 N female, 493 N male). PCF20 and PCF30 both exceed the compressive strength of infant cranial bone.",
  },
  {
    test: "Kinematic accuracy",
    result: "42.6° achieved against 45° designed",
    condition:
      "Repeatable, with up to 0.5 revolutions of backlash from tendon stretch. Bending is operator-controlled under endoscopic view, so the mapping is usable as measured.",
  },
] as const;

/**
 * The open problems. Surgeons in the 2025 concept evaluation named these
 * before we did, and the published paper lists them as future work. Putting
 * them on the site is not a confession — it is the reason the rest of the page
 * is worth reading.
 */
export const openProblems = [
  {
    title: "The punch has to get faster",
    body: "A punch takes bites. Surgeons who reviewed the concept said plainly that a bite-by-bite tool is slower than a scissor or a router across a long suture, and that speed is the metric that matters in an infant under anaesthesia. Powered cutting is the next mechanism iteration.",
  },
  {
    title: "Suction and irrigation are not optional",
    body: "Bone bleeds the moment you cut it, and an endoscope that cannot be cleared is an endoscope that cannot be used. Integrated suction-irrigation was the second most requested feature, and it is a working-channel problem, not an afterthought.",
  },
  {
    title: "The handle has to feel like an instrument",
    body: "Haptic feedback and grip ergonomics came up repeatedly. The current handle is a research prototype in printed plastic. A surgeon needs to feel the bone give.",
  },
] as const;

/**
 * A real sequence — each stage gates the next.
 */
export const developmentStages = [
  {
    stage: "Mechanism design and handheld prototype",
    status: "complete",
    detail:
      "Tendon-driven bending section, integrated end-effector, flexible endoscope. Published in the ASME Journal of Medical Devices.",
  },
  {
    stage: "Bench characterization",
    status: "complete",
    detail:
      "Kinematic accuracy, bending stiffness, bone-cutting force, and reachability on CT-derived craniosynostosis skull models.",
  },
  {
    stage: "Blinded surgeon concept evaluation",
    status: "complete",
    detail:
      "Ten US craniosynostosis surgeons — four plastic, six neurosurgical — interviewed independently. It is the reason the roadmap below looks the way it does.",
  },
  {
    stage: "Design iteration: cutting speed, suction-irrigation, ergonomics",
    status: "in progress",
    detail:
      "The three things surgeons told us stand between a good concept and an instrument they would pick up.",
  },
  {
    stage: "Cadaveric and animal evaluation",
    status: "planned",
    detail:
      "Usability with multiple surgeons, then clinical feasibility. Nobody puts this in a child on the strength of a foam block.",
  },
  {
    stage: "FDA 510(k), Class II",
    status: "planned",
    detail:
      "Design freeze, verification, biocompatibility, and reprocessing validation against a sterilization-compatible build.",
  },
] as const;

/** Market context. From the 2026 investor deck — attach sources before publishing. */
export const market = [
  {
    value: "$500–570M",
    label:
      "Global craniosynostosis treatment market today, growing 6–7% a year to roughly $850M by 2031",
  },
  {
    value: "+195%",
    label:
      "Growth in US endoscopic craniosynostosis procedures over the past decade",
  },
  {
    value: "Class II",
    label: "Regulatory pathway — FDA 510(k), predicate-based",
  },
] as const;
