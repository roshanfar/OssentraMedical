import {
  Body,
  ButtonLink,
  Container,
  Eyebrow,
  Heading,
  LabelledRule,
  Lead,
  Section,
  StatusNote,
} from "./components/primitives";
import { PdfFigure } from "./components/pdf-figure";
import { capabilities, developmentStages, market, specs } from "./content/device";
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
            <div>
              <Eyebrow>Craniosynostosis · SickKids</Eyebrow>

              <Heading level={1} className="mt-6">
                Robotics for the smallest skulls.
              </Heading>

              <Lead className="mt-7 max-w-xl">
                The first articulating, robot-ready bone-cutting instrument for
                minimally invasive pediatric skull surgery.
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

            <PdfFigure
              src="/figures/solution-skull.png"
              alt="Ossentra articulating instrument following the curved endoscopic path beneath the scalp"
              caption="A steerable instrument for curved osteotomy trajectories."
            />
          </div>
        </Container>
      </section>

      {/* ---------------------------------------------------------------
          Spec strip. Bench values, stated as bench values.
      --------------------------------------------------------------- */}
      <div className="bg-ink py-10 text-bone-field">
        <Container>
          <Eyebrow register="field">Open surgery vs. Ossentra</Eyebrow>
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
            Others cut bone. Others articulate. We do both.
          </Heading>
          <Body className="mt-6">
            Tools that cut bone are rigid and straight. Tools that bend are made
            for soft tissue. No instrument has done both, until now.
          </Body>
        </div>

        <div className="mt-14 grid gap-px bg-hairline sm:grid-cols-3">
          {capabilities.map((cap) => (
            <article key={cap.id} className="bg-plate p-6 sm:p-8">
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
          Competition. Field register.
      --------------------------------------------------------------- */}
      <Section register="field">
        <div className="max-w-2xl">
          <Eyebrow register="field">Competition</Eyebrow>
          <Heading register="field" className="mt-5">
            Others cut bone. Others articulate. We do both.
          </Heading>
          <Lead register="field" className="mt-7">
            Bone cutters are straight. Articulating tools are for soft tissue.
            The closest thing, JPI&apos;s bur, is built for adult joints.
            Ossentra is the only device that does all five.
          </Lead>
        </div>

        <PdfFigure
          src="/figures/competition.png"
          alt="Competitive comparison: Ossentra vs. bone cutters, articulating tools, and robots"
          caption="Cuts bone × articulates × infant scale × endoscopic access × cleared. Ossentra satisfies all five."
          className="mt-12"
        />

        <div className="mt-10">
          <ButtonLink href="/technology" register="field" variant="outline">
            How it works
          </ButtonLink>
        </div>
      </Section>

      {/* ---------------------------------------------------------------
          Where the programme is. Numbered, because each stage gates the next.
      --------------------------------------------------------------- */}
      <Section>
        <div className="max-w-2xl">
          <Eyebrow>Development status</Eyebrow>
          <Heading className="mt-5">Where the programme is.</Heading>
          <Body className="mt-6">
            Each stage gates the next. Nothing skipped, nothing finished early.
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
              We want surgeons who&apos;ll tell us it doesn&apos;t work.
            </Heading>
            <Lead className="mt-6">
              Bench and cadaveric evaluation is open to craniofacial and
              pediatric neurosurgeons. Procurement and investor materials on
              request.
            </Lead>
          </div>
          <ButtonLink href="/contact">Contact Ossentra</ButtonLink>
        </div>
      </Section>
    </>
  );
}
