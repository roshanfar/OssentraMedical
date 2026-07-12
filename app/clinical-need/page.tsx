import type { Metadata } from "next";
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
  epidemiology,
  problems,
  quoteSource,
  references,
  rejectedClaim,
  surgeonQuotes,
} from "../content/need";

export const metadata: Metadata = {
  title: "Clinical need",
  description:
    "Whether a child gets the small operation or the big one is partly a question of how far a straight instrument can reach.",
};
//test

export default function ClinicalNeedPage() {
  return (
    <>
      <Section className="border-b border-hairline">
        <div className="max-w-3xl">
          <Eyebrow>Clinical need</Eyebrow>
          <Heading level={1} className="mt-6">
            Whether a child gets the small operation or the big one is partly a
            question of reach.
          </Heading>
          <Lead className="mt-7">
            In craniosynostosis, a cranial suture fuses too early. The skull stops
            growing where it should and the pressure goes somewhere else. The fix
            is surgical: cut the bone, release the suture, let the brain grow.
            How much bone the surgeon can cut through a small incision decides
            whether the child needs the small operation at all.
          </Lead>
        </div>
      </Section>

      {/* --- The numbers --- */}
      <div className="border-b border-hairline bg-plate py-12">
        <div className="mx-auto w-full max-w-6xl px-6 sm:px-8">
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

      {/* --- The chain --- */}
      <Section>
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

      {/* --- What surgeons said --- */}
      <Section register="field">
        <div className="max-w-2xl">
          <Eyebrow register="field">In their words</Eyebrow>
          <Heading register="field" className="mt-5">
            The curvature problem is the one nobody has been working on.
          </Heading>
        </div>

        <div className="mt-12 grid gap-px bg-hairline-field md:grid-cols-3">
          {surgeonQuotes.map((quote) => (
            <figure key={quote.text.slice(0, 16)} className="bg-ink p-6 sm:p-7">
              <blockquote className="font-serif text-lg leading-[1.55] text-bone-field text-pretty">
                &ldquo;{quote.text}&rdquo;
              </blockquote>
              <figcaption className="mt-5 font-mono text-[0.6875rem] uppercase tracking-[0.12em] text-steel-field">
                {quote.attribution}
              </figcaption>
            </figure>
          ))}
        </div>

        <p className="mt-8 font-mono text-[0.6875rem] uppercase leading-[1.6] tracking-[0.1em] text-steel-field">
          {quoteSource}
        </p>
      </Section>

      {/* --- The claim we are not making. The most important block on the site. --- */}
      <Section>
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] lg:gap-20">
          <div>
            <Eyebrow>A claim we do not make</Eyebrow>
            <Heading className="mt-5">
              &ldquo;{rejectedClaim.claim}&rdquo;
            </Heading>
          </div>
          <div className="border-l-2 border-dura pl-7">
            <Body className="text-[1.0625rem]">{rejectedClaim.verdict}</Body>
            <Body className="mt-4 text-[1.0625rem]">
              What Ossentra changes is narrower, and we think more useful: the
              extent of bone a surgeon can remove through a small incision, and
              how much of that work is done with the dura covered.
            </Body>
            <div className="mt-9 flex flex-wrap gap-3">
              <ButtonLink href="/technology">See how it works</ButtonLink>
              <ButtonLink href="/contact" variant="outline">
                Talk to us
              </ButtonLink>
            </div>
          </div>
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
