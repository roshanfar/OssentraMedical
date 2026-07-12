/**
 * Clinical figures. Sources are named because this page is read by surgeons
 * and by procurement committees, and an uncited number is worth nothing to
 * either of them. Full references live in `references` below.
 */

export const epidemiology = [
  {
    value: "3.5–4.5",
    unit: "per 10,000 births",
    label: "worldwide incidence of craniosynostosis",
    source: "Shlobin et al., World Neurosurgery, 2022",
  },
  {
    value: "2–12",
    unit: "months",
    label: "age at which the corrective surgery is performed",
    source: "Law et al., ASME J. Medical Devices, 2025",
  },
  {
    value: "2.0 ± 0.4",
    unit: "mm",
    label: "thickness of the infant calvarium at 4–10 months",
    source: "Igo et al., J. Mech. Behavior of Biomedical Materials, 2021",
  },
] as const;

export const problems = [
  {
    title:
      "The instruments are straight. The skull is not.",
    body: "Endoscopic craniosynostosis repair is done through incisions of 20 to 40 mm with Kerrison punches, rongeurs, Mayo scissors and elevators — every one of them rigid and straight. They cannot follow the curve of an infant's vault. Where the path bends, the surgeon works blind, presses down on the dura to force a straight line of sight, or opens another incision.",
  },
  {
    title:
      "So the extent of the osteotomy is set by the tool, not by the plan.",
    body: "The cuts that can be made are limited by what the instruments can reach. That is why some presentations of craniosynostosis cannot be corrected endoscopically at all and go to open surgery — a bicoronal incision, extensive bony reshaping, significant blood loss, and days in hospital rather than one night.",
  },
  {
    title:
      "And the child carries the difference afterwards.",
    body: "After an endoscopic strip craniectomy, the skull is reshaped by a moulding helmet worn for six to nine months, or by an internal spring that requires a second operation to remove. The less the surgeon can cut, the more work is left for what comes after.",
  },
] as const;

/**
 * Quotes are from Ossentra's own blinded concept-evaluation study of ten US
 * craniosynostosis surgeons (Qessential / TIAP, July 2025). Respondents are
 * anonymous by design.
 *
 * ⚠ CONFIRM YOU HAVE THE RIGHT TO PUBLISH THESE before this site goes live —
 * check the terms of the research engagement.
 */
export const surgeonQuotes = [
  {
    text: "I really haven't seen anything come along that's tried to address that curvature of the skull problem. There's a lot of people working on lighted instruments and improving visualization, but not the curvature issue.",
    attribution: "Pediatric neurosurgeon",
  },
  {
    text: "Oftentimes the hard part is when you go over a curve of the skull, because then it's much more difficult to see. Because the arm of this bends, then you can see exactly where you're cutting.",
    attribution: "Plastic surgeon, craniofacial",
  },
  {
    text: "You have to press down on the dura, compress the brain, and then you can bring your instrument in. This provides a somewhat safer way to do it, with less need to compress the dura to get to the bone on the other side.",
    attribution: "Pediatric neurosurgeon",
  },
] as const;

export const quoteSource =
  "Blinded concept evaluation, ten US craniosynostosis surgeons (four plastic, six neurosurgical), July 2025.";

/**
 * The claim we are deliberately not making. Nine of ten surgeons rejected it,
 * and their reasoning is correct: the helmet reshapes the skull after the
 * suture is released, which is not what a cutting instrument changes.
 */
export const rejectedClaim = {
  claim: "Ossentra removes the need for a post-operative moulding helmet.",
  verdict:
    "We do not claim this. Nine of the ten surgeons we interviewed rejected it, and they were right: the helmet guides skull growth after the fused suture is released, and a better cutting instrument does not change that. Where a claim has not survived contact with the people who would use the device, it should not survive contact with the website either.",
} as const;

export const references = [
  "Shlobin NA, et al. Global epidemiology of craniosynostosis: a systematic review and meta-analysis. World Neurosurgery, 2022;164:413–423.e3.",
  "Igo BJ, Cottler PS, Black JS, Panzer MB. The mechanical and microstructural properties of the pediatric skull. J Mech Behav Biomed Mater, 2021;120:104578.",
  "Goyal A, et al. Endoscopic versus open approach in craniosynostosis repair: a systematic review and meta-analysis of perioperative outcomes. Child's Nervous System, 2018;34:1627–1637.",
  "Jimenez DF, Barone CM. Endoscopic techniques for craniosynostosis. Atlas of the Oral and Maxillofacial Surgery Clinics, 2010;18:93–107.",
  "Law J, Stickley E, Looi T, Diller E, Podolsky D. A novel articulating bone cutting tool for minimally invasive craniosynostosis surgery. ASME Journal of Medical Devices, 2025.",
] as const;
