import type { Metadata } from "next";
import { FigureEndEffector } from "../components/figure-end-effector";
import { FigureLandscape } from "../components/figure-landscape";
import { FigureReachability } from "../components/figure-reachability";
import {
  Body,
  ButtonLink,
  Eyebrow,
  FigurePlate,
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
    "A tendon-driven bending section of three sliding curved joints, a bone punch with an integrated dural protector, and a flexible endoscope — in a 13.5 mm shaft.",
};

export default function TechnologyPage() {
  return (
    <>
      <Section className="border-b border-hairline">
        <div className="max-w-3xl">
          <Eyebrow>Technology</Eyebrow>
          <Heading level={1} className="mt-6">
            Continuum tools bend but cannot cut. Powered benders cut but cannot
            be held.
          </Heading>
          <Lead className="mt-7">
            Steerable instruments already exist. The flexible ones are built for
            soft tissue and go slack against bone. The rigid, motorized bending
            drills are built for hips and shoulders — bulky, powered, and with no
            reason to protect anything above the bone, because in a joint there
            is nothing there. An infant&apos;s skull is 2 mm of bone with dura
            beneath it and paper-thin scalp on top. It needs a different
            instrument.
          </Lead>
          <StatusNote className="mt-8 max-w-lg">{site.regulatoryStatus}</StatusNote>
        </div>
      </Section>

      {/* --- The vertical case: the end-effector --- */}
      <Section>
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.3fr)] lg:items-center lg:gap-16">
          <div>
            <Eyebrow>Fig. 01 — End-effector</Eyebrow>
            <Heading className="mt-5">
              The jaw that cuts the bone is the jaw that shields the dura.
            </Heading>
            <Body className="mt-6">
              The end-effector is a two-jaw bone punch. The lower jaw is also the
              dural protector: it slides beneath the bone edge and stays between
              the punch and the dura through the bite. A scalp retractor above
              lifts the soft tissue into a pocket, which is the only reason the
              endoscope has anything to look at.
            </Body>
            <Body className="mt-4">
              The jaws open to 4 mm — enough to take the full 2 mm thickness of
              an infant calvarium in one bite, with clearance. Protection is not
              a mode the surgeon selects. It is the geometry of the tool.
            </Body>
          </div>

          <FigurePlate
            number="01"
            title="Section through the end-effector"
            caption="Schematic. Soft tissue and the epidural plane are drawn beyond scale for legibility."
          >
            <FigureEndEffector />
          </FigurePlate>
        </div>
      </Section>

      {/* --- The horizontal case: reachability --- */}
      <Section register="field">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] lg:items-center lg:gap-16">
          <FigurePlate
            number="02"
            title="Reachability, single vertex incision"
            register="field"
            caption="Tool tip constrained to the skull surface. 3D-printed skulls from the CT of three craniosynostosis patients. Dashed segments were reached by lifting the shaft off the vertex, stretching the simulated scalp by 1.2–10.9 mm."
          >
            <FigureReachability />
          </FigurePlate>

          <div className="lg:order-first">
            <Eyebrow register="field">Fig. 02 — Reachability</Eyebrow>
            <Heading register="field" className="mt-5">
              Three quarters of the osteotomy, from one hole.
            </Heading>
            <Body register="field" className="mt-6">
              Three consecutive sliding curved joints, driven by an antagonistic
              tendon pair, trace a radius of curvature from 30 to 180 mm — the
              curvature range of the infant cranium, taken from patient CT. A
              worm gear with a 1:40 reduction holds the angle without power and
              without back-driving.
            </Body>
            <Body register="field" className="mt-4">
              Sliding curved joints were chosen over hinges or rolling joints for
              a blunt reason: fewer parts, so more of the 13.5 mm cross-section is
              left for the things that actually matter — the punch, the protector,
              and the endoscope channel.
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
              <tr className="border-b border-ink">
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

      {/* --- The landscape --- */}
      <Section register="field">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] lg:items-center lg:gap-16">
          <div>
            <Eyebrow register="field">Fig. 03 — Landscape</Eyebrow>
            <Heading register="field" className="mt-5">
              Everyone solves half of it.
            </Heading>
            <Body register="field" className="mt-6">
              Scissors, rongeurs, drills and ultrasonic cutters remove bone, and
              none of them turn. ArtiSential and FlexDex articulate beautifully,
              for soft tissue. The closest thing to Ossentra is JPI&apos;s
              articulating bur — which is powered, and built for hip and shoulder
              joints rather than a 2 mm infant skull. A ROSA robot costs over a
              million dollars and does not cut bone along a curve.
            </Body>
          </div>

          <FigurePlate
            number="03"
            title="Where the instrument sits"
            register="field"
            caption="Positioning against instruments in current use and the nearest articulating devices. Axis positions are qualitative."
          >
            <FigureLandscape />
          </FigurePlate>
        </div>
      </Section>

      {/* --- What we still have to prove --- */}
      <Section>
        <div className="max-w-2xl">
          <Eyebrow>Open problems</Eyebrow>
          <Heading className="mt-5">What we still have to solve.</Heading>
          <Body className="mt-6">
            These came from the surgeons who reviewed the concept, and they are
            in the published paper as future work. A page that only listed what
            already works would be a worse page.
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
      </Section>

      {/* --- Materials --- */}
      <Section className="border-t border-hairline">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.3fr)] lg:gap-20">
          <div>
            <Eyebrow>Build & reprocessing</Eyebrow>
            <Heading className="mt-5">Designed to be reused.</Heading>
          </div>
          <div>
            <Body className="text-[1.0625rem]">
              The shaft is 6061 aluminium, the bending section SUS 316 stainless,
              the gears brass, the tendon guides superelastic nitinol. All are
              biocompatible and survive high-temperature sterilization. There are
              no electrical components in the instrument.
            </Body>
            <Body className="mt-4 text-[1.0625rem]">
              The handle on the current prototype is 3D-printed PLA — a research
              part, not a sterilizable one. Converting it to polypropylene with
              stainless load-bearing internals is a known design iteration, not an
              open question, and it is on the path to design freeze.
            </Body>
            <div className="mt-9 flex flex-wrap gap-3">
              <ButtonLink href="/contact">Request the bench data</ButtonLink>
              <ButtonLink href="/clinical-need" variant="outline">
                Clinical need
              </ButtonLink>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
