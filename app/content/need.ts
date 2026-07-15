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
 * Open surgery vs. Ossentra — pitch deck, Appendix B (clinical and economic
 * impact of converting a case to minimally invasive).
 */
export const clinicalImpact = [
  {
    value: "83% → ~10%",
    label: "Blood transfusion rate drops about ninefold, which is life-altering for a 3-month-old",
  },
  {
    value: "95%",
    label: "Less tissue trauma than a full craniotomy, with no reshaping of the whole vault",
  },
  {
    value: "40–50%",
    label: "Less OR time; ICU recovery from 3 days to 1",
  },
] as const;

export const references = [
  "Law J, et al. A Novel Articulating Bone Cutting Tool for Minimally Invasive Craniosynostosis Surgery. ASME Journal of Medical Devices, 2025.",
  "Podolsky D, et al. Development of a minimally invasive bone cutting tool for craniosynostosis surgery. CIHR Project Grant.",
  "Cable-driven continuum mechanism. Patent WO2024156054A1, filed 2024, licensed to Ossentra.",
] as const;
