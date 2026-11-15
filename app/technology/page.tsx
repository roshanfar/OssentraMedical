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
  StatusNote,
} from "../components/primitives";
import { benchResults, openProblems, paper } from "../content/device";
import { site } from "../content/site";

export const metadata: Metadata = {
  title: "Technology",
  description:
    "A cable-driven bending section, a bone punch with an integrated dural protector, and a flexible endoscope, all in a 13 mm shaft.",
};

export default function TechnologyPage() {
  return (
    <>
      <Section className="border-b border-hairline">
        <div className="max-w-3xl">
          <Eyebrow>Technology</Eyebrow>
          <Heading level={1} className="mt-6">
            Bend but can&apos;t cut. Cut but can&apos;t be held.
          </Heading>
          <Lead className="mt-7">
            Flexible instruments go slack against bone. Powered benders are built
            for hips and shoulders. An infant&apos;s skull is 2 mm of bone over
            dura. It needs a different instrument.
          </Lead>
          <StatusNote className="mt-8 max-w-lg">{site.regulatoryStatus}</StatusNote>
        </div>
      </Section>

      {/* --- The end-effector --- */}
      <Section>
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.3fr)] lg:items-center lg:gap-16">
          <div>
            <Eyebrow>The end-effector</Eyebrow>
            <Heading className="mt-5">
              The jaw that cuts is the jaw that shields.
            </Heading>
            <Body className="mt-6">
              A cable-driven bone punch. The lower jaw is the dural protector,
              staying between the punch and the dura through every bite. A scalp
              retractor above makes the pocket the endoscope sees into.
            </Body>
            <Body className="mt-4">
              Punch, dural protector, and endoscope channel all fit in one 13 mm
              shaft. Protection isn&apos;t a setting the surgeon turns on. It comes
              from the shape of the jaw.
            </Body>
          </div>

          <PdfFigure
            src="/figures/end-effector.png"
            alt="End-effector: bone punch, scalp retractor, dural protector, and endoscope channel"
            caption="Bone punch jaws, dural protector, and endoscope channel."
          />
        </div>
      </Section>

      {/* --- Articulation / reach --- */}
      <Section register="field">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] lg:items-center lg:gap-16">
          <PdfFigure
            src="/figures/articulating-cutter.png"
            alt="Articulating skull cutter reaching along a craniosynostosis phantom from a single vertex incision"
            caption="Reaches the distal frontal, parietal and occipital bones from a single vertex incision."
          />

          <div className="lg:order-first">
            <Eyebrow register="field">Articulation</Eyebrow>
            <Heading register="field" className="mt-5">
              It bends to the skull&apos;s curve.
            </Heading>
            <Body register="field" className="mt-6">
              A cable-driven bending section conforms to the ~140 mm curvature of
              the infant cranium. A worm-gear drive holds the angle without power
              and without back-driving.
            </Body>
            <Body register="field" className="mt-4">
              One shaft and one vertex incision reach where straight tools work
              blind or need a second cut.
            </Body>
          </div>
        </div>
      </Section>

      {/* --- The bench --- */}
      <Section>
        <LabelledRule className="mb-10">Bench characterization</LabelledRule>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[42rem] border-collapse text-left">
            <thead>
              <tr className="border-b border-hairline-strong">
                <th className="w-40 pb-3 font-mono text-[0.6875rem] font-medium uppercase tracking-[0.14em] text-steel">
                  Test
                </th>
                <th className="w-72 pb-3 font-mono text-[0.6875rem] font-medium uppercase tracking-[0.14em] text-steel">
                  Result
                </th>
                <th className="pb-3 font-mono text-[0.6875rem] font-medium uppercase tracking-[0.14em] text-steel">
                  Conditions
                </th>
              </tr>
            </thead>
            <tbody>
              {benchResults.map((row) => (
                <tr key={row.test} className="border-b border-hairline align-top">
                  <td className="py-5 pr-6 font-display text-base font-semibold tracking-[-0.01em] text-ink">
                    {row.test}
                  </td>
                  <td className="tnum py-5 pr-6 font-mono text-sm leading-[1.6] text-dura">
                    {row.result}
                  </td>
                  <td className="py-5 font-serif text-[0.9375rem] leading-[1.6] text-steel">
                    {row.condition}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="mt-6 font-mono text-[0.6875rem] uppercase leading-[1.6] tracking-[0.1em] text-steel">
          {paper.citation}
        </p>
      </Section>

      {/* --- Robot-ready --- */}
      <Section register="field">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] lg:items-center lg:gap-16">
          <div>
            <Eyebrow register="field">Robot-ready</Eyebrow>
            <Heading register="field" className="mt-5">
              The same cable that the surgeon pulls, a robot can.
            </Heading>
            <Body register="field" className="mt-6">
              The cable-driven mechanism is the class used in leading surgical
              robots. It is manual today, and the same architecture mounts as an
              end-effector on a robotic arm with no redesign. Only the drive needs
              motorizing.
            </Body>
          </div>

          <PdfFigure
            src="/figures/robot-ready.png"
            alt="Ossentra handle mounted as an end-effector on a robotic arm"
            caption="Phase 2: the handle mounts on a collaborative robotic arm. Same end-effectors, same 510(k) class."
          />
        </div>
      </Section>

      {/* --- What we still have to prove --- */}
      <Section>
        <div className="max-w-2xl">
          <Eyebrow>What&apos;s next</Eyebrow>
          <Heading className="mt-5">What we still have to build.</Heading>
          <Body className="mt-6">
            The functions between a proven concept and a real osteotomy.
          </Body>
        </div>

        <div className="mt-14 grid gap-x-14 gap-y-10 lg:grid-cols-3">
          {openProblems.map((problem) => (
            <article key={problem.title} className="border-t border-dura pt-5">
              <h2 className="font-display text-xl font-semibold leading-[1.2] tracking-[-0.015em] text-ink text-balance">
                {problem.title}
              </h2>
              <Body className="mt-4">{problem.body}</Body>
            </article>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap gap-3">
          <ButtonLink href="/contact">Request the bench data</ButtonLink>
          <ButtonLink href="/clinical-need" variant="outline">
            Clinical need
          </ButtonLink>
        </div>
      </Section>
    </>
  );
}
