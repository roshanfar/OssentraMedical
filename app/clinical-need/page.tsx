import type { Metadata } from "next";
import { PdfFigure } from "../components/pdf-figure";
import {
  Body,
  ButtonLink,
  Eyebrow,
  Heading,
  LabelledRule,
  Lead,
  Section,
} from "../components/primitives";
import {
  clinicalImpact,
  epidemiology,
  operations,
  problems,
  references,
} from "../content/need";

export const metadata: Metadata = {
  title: "Clinical need",
  description:
    "Whether a child gets the small operation or the big one is partly a question of how far a straight instrument can reach.",
};

export default function ClinicalNeedPage() {
  return (
    <>
      <Section className="border-b border-hairline">
        <div className="max-w-3xl">
          <Eyebrow>Clinical need</Eyebrow>
          <Heading level={1} className="mt-6">
            The operation a child gets depends on how far the tools can reach.
          </Heading>
          <Lead className="mt-7">
            In craniosynostosis a suture fuses too early. The fix is surgical:
            cut the bone, release the suture, let the brain grow. How much bone a
            surgeon can reach through a small incision decides which operation.
          </Lead>
        </div>
      </Section>

      {/* --- The numbers --- */}
      <div className="border-b border-hairline py-12">
        <div className="mx-auto w-full max-w-[1140px] px-6">
          <dl className="grid gap-x-8 gap-y-8 sm:grid-cols-3">
            {epidemiology.map((fact) => (
              <div key={fact.label} className="border-t border-hairline pt-4">
                <dt className="sr-only">{fact.label}</dt>
                <dd className="tnum font-display text-2xl font-semibold tracking-[-0.02em] text-ink sm:text-3xl">
                  {fact.value}
                  <span className="ml-1.5 font-mono text-sm font-normal tracking-[0.02em] text-steel">
                    {fact.unit}
                  </span>
                </dd>
                <dd className="mt-2 max-w-xs font-serif text-sm leading-[1.55] text-steel">
                  {fact.label}
                </dd>
                <dd className="mt-2 font-mono text-[0.625rem] uppercase tracking-[0.1em] text-steel">
                  {fact.source}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      {/* --- Two approaches --- */}
      <Section>
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:items-center lg:gap-16">
          <div>
            <Eyebrow>Open vs. endoscopic</Eyebrow>
            <Heading className="mt-5">
              Extensive reshaping, or a small incision. Not both.
            </Heading>
            <Body className="mt-6">
              Open surgery reshapes the vault but is highly invasive. Endoscopic
              surgery is minimally invasive but limited in what it can reach.
              Ossentra is built to close that gap.
            </Body>
          </div>

          <PdfFigure
            src="/figures/craniosynostosis-surgery.png"
            alt="Craniosynostosis surgery: open vs. endoscopic approach"
            caption="Open surgery vs. endoscopic surgery for craniosynostosis."
          />
        </div>
      </Section>

      {/* --- The two operations today --- */}
      <Section register="field">
        <div className="max-w-2xl">
          <Eyebrow>The problem</Eyebrow>
          <Heading className="mt-5">
            The tool decides who gets open surgery.
          </Heading>
        </div>
        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {operations.map((op) => (
            <article
              key={op.name}
              className="overflow-hidden rounded-2xl border border-hairline bg-plate"
            >
              <div className="flex h-64 items-center justify-center bg-white p-4">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={op.image}
                  alt={op.name}
                  loading="lazy"
                  className="max-h-full max-w-full object-contain"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-ink">
                  {op.name}{" "}
                  <span className="text-[0.8rem] font-medium text-steel-dim">
                    {op.cite}
                  </span>
                </h3>
                <ul className="mt-3 flex flex-col gap-2">
                  {op.points.map((pt) => (
                    <li
                      key={pt}
                      className="flex gap-2.5 text-[0.95rem] leading-[1.55] text-steel"
                    >
                      <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-dura" />
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </Section>

      {/* --- The chain --- */}
      <Section className="border-t border-hairline">
        <LabelledRule className="mb-12">How the limit propagates</LabelledRule>

        <div className="flex flex-col">
          {problems.map((problem) => (
            <article
              key={problem.title}
              className="grid gap-x-12 gap-y-4 border-t border-hairline py-10 last:border-b lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)]"
            >
              <h2 className="font-display text-2xl font-semibold leading-[1.15] tracking-[-0.02em] text-ink text-balance">
                {problem.title}
              </h2>
              <Body className="text-[1.0625rem]">{problem.body}</Body>
            </article>
          ))}
        </div>
      </Section>

      {/* --- The impact --- */}
      <Section register="field">
        <div className="max-w-2xl">
          <Eyebrow register="field">Open vs. minimally invasive</Eyebrow>
          <Heading register="field" className="mt-5">
            What changes for the infant.
          </Heading>
        </div>

        <dl className="mt-12 grid gap-4 md:grid-cols-3">
          {clinicalImpact.map((item) => (
            <div key={item.value} className="rounded-2xl border border-hairline bg-plate p-6 sm:p-7">
              <dd className="tnum text-grad font-display text-3xl font-display font-bold tracking-[-0.02em]">
                {item.value}
              </dd>
              <dt className="mt-3 font-serif text-[0.9375rem] leading-[1.55] text-steel-field">
                {item.label}
              </dt>
            </div>
          ))}
        </dl>

        <div className="mt-10 flex flex-wrap gap-3">
          <ButtonLink href="/technology" register="field">
            How it works
          </ButtonLink>
          <ButtonLink href="/contact" register="field" variant="outline">
            Talk to us
          </ButtonLink>
        </div>
      </Section>

      {/* --- References --- */}
      <Section className="border-t border-hairline">
        <LabelledRule className="mb-8">References</LabelledRule>
        <ol className="flex flex-col gap-3">
          {references.map((ref, i) => (
            <li
              key={ref}
              className="grid grid-cols-[2rem_minmax(0,1fr)] gap-x-3 font-serif text-sm leading-[1.6] text-steel"
            >
              <span className="tnum font-mono text-[0.6875rem] text-steel">
                [{i + 1}]
              </span>
              <span>{ref}</span>
            </li>
          ))}
        </ol>
      </Section>
    </>
  );
}
