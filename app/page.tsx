import { FigureEndEffector } from "./components/figure-end-effector";
import {
  Body,
  ButtonLink,
  Container,
  Eyebrow,
  FigurePlate,
  Heading,
  LabelledRule,
  Lead,
  Section,
  StatusNote,
} from "./components/primitives";
import { capabilities, developmentStages, market, paper, specs } from "./content/device";
import { quoteSource, surgeonQuotes } from "./content/need";
import { site } from "./content/site";

export default function HomePage() {
  return (
    <>
      {/* ---------------------------------------------------------------
          Hero. The figure is the argument; the copy names the instrument.
      --------------------------------------------------------------- */}
      <section className="border-b border-hairline py-16 sm:py-24">
        <Container>
          <div className="grid gap-14 lg:grid-cols-[minmax(0,0.82fr)_minmax(0,1.18fr)] lg:items-center lg:gap-16">
            <div className="rise">
              <Eyebrow>Craniosynostosis · {site.origin}</Eyebrow>

              <Heading level={1} className="mt-6">
                The skull curves. Every tool we cut it with is straight.
              </Heading>

              <Lead className="mt-7 max-w-xl">
                Ossentra is a handheld articulating bone-cutting instrument for
                minimally invasive craniosynostosis surgery. It bends to follow
                the curve of an infant&apos;s cranium, shields the dura and scalp
                with the jaw that does the cutting, and reaches 72–78% of the
                planned osteotomy through a single incision at the vertex.
              </Lead>

              <div className="mt-9 flex flex-wrap gap-3">
                <ButtonLink href="/technology">How it works</ButtonLink>
                <ButtonLink href="/clinical-need" variant="outline">
                  Why it matters
                </ButtonLink>
              </div>

              <StatusNote className="mt-9 max-w-md">
                {site.regulatoryStatus}
              </StatusNote>
            </div>

            <FigurePlate
              number="01"
              title="Section through the end-effector"
              caption="Schematic. Soft tissue and the epidural plane are drawn beyond scale for legibility; the 3 mm bar applies to the horizontal axis. Bone thickness after Igo et al. (2021); instrument after Law et al. (2025)."
              className="fade"
            >
              <FigureEndEffector />
            </FigurePlate>
          </div>
        </Container>
      </section>

      {/* ---------------------------------------------------------------
          Spec strip. Bench values, stated as bench values.
      --------------------------------------------------------------- */}
      <div className="bg-ink py-10 text-bone-field">
        <Container>
          <Eyebrow register="field">
            Characterized prototype — {paper.short}
          </Eyebrow>
          <dl className="mt-7 grid grid-cols-2 gap-x-8 gap-y-9 lg:grid-cols-4">
            {specs.map((spec) => (
              <div key={spec.label} className="border-t border-hairline-field pt-4">
                <dt className="font-mono text-[0.6875rem] uppercase tracking-[0.16em] text-steel-field">
                  {spec.label}
                </dt>
                <dd className="tnum mt-3 font-display text-3xl font-semibold tracking-[-0.02em] text-bone-field sm:text-4xl">
                  {spec.value}
                  <span className="ml-1 text-lg text-steel-field sm:text-xl">
                    {spec.unit}
                  </span>
                </dd>
                <dd className="mt-2 font-serif text-sm leading-[1.55] text-steel-field">
                  {spec.note}
                </dd>
              </div>
            ))}
          </dl>
        </Container>
      </div>

      {/* ---------------------------------------------------------------
          What the instrument does.
      --------------------------------------------------------------- */}
      <Section>
        <div className="max-w-2xl">
          <Eyebrow>The instrument</Eyebrow>
          <Heading className="mt-5">
            A bone cutter that articulates, and an articulating tool that cuts
            bone.
          </Heading>
          <Body className="mt-6">
            Those two things have not existed in the same instrument. Tools that
            cut bone — scissors, rongeurs, drills, ultrasonic cutters — are rigid
            and straight. Tools that bend are made for soft tissue.
          </Body>
        </div>

        <div className="mt-14 grid gap-px bg-hairline sm:grid-cols-3">
          {capabilities.map((cap) => (
            <article key={cap.id} className="bg-bone p-6 sm:p-8">
              <p className="tnum font-mono text-[0.6875rem] font-medium uppercase tracking-[0.14em] text-dura">
                {cap.metric}
              </p>
              <h3 className="mt-5 font-display text-xl font-semibold leading-[1.2] tracking-[-0.015em] text-ink text-balance">
                {cap.title}
              </h3>
              <Body className="mt-4">{cap.body}</Body>
            </article>
          ))}
        </div>

        <div className="mt-12">
          <ButtonLink href="/technology" variant="outline">
            Technology
          </ButtonLink>
        </div>
      </Section>

      {/* ---------------------------------------------------------------
          What surgeons said. Field register.
      --------------------------------------------------------------- */}
      <Section register="field">
        <div className="max-w-2xl">
          <Eyebrow register="field">From the operating room</Eyebrow>
          <Heading register="field" className="mt-5">
            We asked ten surgeons what was wrong with it before we asked anyone
            to like it.
          </Heading>
          <Lead register="field" className="mt-7">
            In 2025 we put the concept in front of ten US craniosynostosis
            surgeons, blinded, and let them take it apart. What they valued and
            what they rejected are both on this site.
          </Lead>
        </div>

        <div className="mt-14 grid gap-px bg-hairline-field md:grid-cols-3">
          {surgeonQuotes.map((quote) => (
            <figure key={quote.attribution + quote.text.slice(0, 12)} className="bg-ink p-6 sm:p-7">
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

        <div className="mt-9">
          <ButtonLink href="/clinical-need" register="field" variant="outline">
            The clinical need
          </ButtonLink>
        </div>
      </Section>

      {/* ---------------------------------------------------------------
          Where the programme is. Numbered, because each stage gates the next.
      --------------------------------------------------------------- */}
      <Section>
        <div className="max-w-2xl">
          <Eyebrow>Development status</Eyebrow>
          <Heading className="mt-5">Where the programme actually is.</Heading>
          <Body className="mt-6">
            Each stage gates the one after it. Nothing below is skipped, and
            nothing below is finished early.
          </Body>
        </div>

        <ol className="mt-14">
          {developmentStages.map((stage, i) => {
            const done = stage.status === "complete";
            const active = stage.status === "in progress";
            return (
              <li
                key={stage.stage}
                className="grid gap-x-6 gap-y-2 border-t border-hairline py-6 last:border-b sm:grid-cols-[3rem_minmax(0,1fr)_9rem] sm:items-baseline"
              >
                <span
                  className={`tnum font-mono text-xs font-semibold ${
                    active ? "text-dura" : "text-steel"
                  }`}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>

                <div>
                  <h3
                    className={`font-display text-lg font-semibold tracking-[-0.01em] ${
                      done || active ? "text-ink" : "text-steel"
                    }`}
                  >
                    {stage.stage}
                  </h3>
                  <Body className="mt-1.5 max-w-xl">{stage.detail}</Body>
                </div>

                <span
                  className={`justify-self-start font-mono text-[0.6875rem] font-medium uppercase tracking-[0.14em] sm:justify-self-end ${
                    active ? "text-dura" : done ? "text-ink" : "text-steel"
                  }`}
                >
                  {stage.status}
                </span>
              </li>
            );
          })}
        </ol>

        {/* Market context, for the people who read the timeline as a plan. */}
        <dl className="mt-16 grid gap-x-8 gap-y-8 sm:grid-cols-3">
          {market.map((item) => (
            <div key={item.value} className="border-t border-hairline pt-4">
              <dt className="sr-only">{item.label}</dt>
              <dd className="tnum font-display text-2xl font-semibold tracking-[-0.02em] text-ink">
                {item.value}
              </dd>
              <dd className="mt-2 font-serif text-sm leading-[1.55] text-steel">
                {item.label}
              </dd>
            </div>
          ))}
        </dl>
      </Section>

      {/* ---------------------------------------------------------------
          Close.
      --------------------------------------------------------------- */}
      <Section className="border-t border-hairline">
        <LabelledRule className="mb-10">Get in touch</LabelledRule>
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
          <div className="max-w-2xl">
            <Heading>
              We are looking for surgeons who will tell us it does not work.
            </Heading>
            <Lead className="mt-6">
              Bench and cadaveric evaluation is open to craniofacial surgeons and
              pediatric neurosurgeons. Procurement and investor materials are
              available on request.
            </Lead>
          </div>
          <ButtonLink href="/contact">Contact Ossentra</ButtonLink>
        </div>
      </Section>
    </>
  );
}
