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
import { contributors, funding, originStory, team } from "../content/team";
import { ecosystem, site } from "../content/site";

export const metadata: Metadata = {
  title: "Team",
  description:
    "Ossentra was spun out of SickKids by the surgeon who invented the instrument and the engineers who built it.",
};

export default function TeamPage() {
  return (
    <>
      <Section className="border-b border-hairline">
        <div className="max-w-3xl">
          <Eyebrow>Team</Eyebrow>
          <Heading level={1} className="mt-6">
            The surgeon who invented it still operates.
          </Heading>
          <Lead className="mt-7">
            Ossentra came out of {site.centre} at {site.origin} — a lab where the
            engineers sit in on the case. The design requirements were not
            gathered from a market study. They were gathered from watching a
            craniosynostosis repair and noticing that the instrument, not the
            surgeon, was the thing that ran out.
          </Lead>
        </div>
      </Section>

      <Section>
        <LabelledRule className="mb-12">Founders</LabelledRule>

        <div className="grid gap-px bg-hairline sm:grid-cols-2">
          {team.map((person) => (
            <article key={person.name} className="bg-bone p-6 sm:p-8">
              <p className="font-mono text-[0.6875rem] font-medium uppercase tracking-[0.14em] text-dura">
                {person.role}
              </p>

              <h2 className="mt-5 font-display text-xl font-semibold tracking-[-0.015em] text-ink">
                {person.name}
                <span className="ml-2 font-mono text-sm font-normal uppercase tracking-[0.08em] text-steel">
                  {person.credentials}
                </span>
              </h2>

              <p className="mt-1.5 font-mono text-[0.6875rem] uppercase leading-[1.5] tracking-[0.1em] text-steel">
                {person.affiliation}
              </p>

              <Body className="mt-4">{person.bio}</Body>
            </article>
          ))}
        </div>


      </Section>

      {/* --- How it became a company --- */}
      <Section register="field">
        <div className="max-w-2xl">
          <Eyebrow register="field">From paper to product</Eyebrow>
          <Heading register="field" className="mt-5">
            Research asks whether it is possible. Founding asks whether it reaches
            the patient.
          </Heading>
        </div>

        <ol className="mt-14 grid gap-px bg-hairline-field md:grid-cols-4">
          {originStory.map((item, i) => (
            <li key={item.step} className="bg-ink p-6">
              <span className="tnum font-mono text-[0.6875rem] font-semibold uppercase tracking-[0.14em] text-dura-field">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-4 font-display text-lg font-semibold tracking-[-0.01em] text-bone-field">
                {item.step}
              </h3>
              <Body register="field" className="mt-2 text-[0.9375rem]">
                {item.detail}
              </Body>
            </li>
          ))}
        </ol>
      </Section>

      {/* --- The ecosystem --- */}
      <Section>
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.5fr)] lg:gap-20">
          <div>
            <Eyebrow>Built on</Eyebrow>
            <Heading className="mt-5">You do not do this alone.</Heading>
            <Body className="mt-6">{funding}</Body>
          </div>

          <ul className="flex flex-col">
            {ecosystem.map((item) => (
              <li
                key={item.name}
                className="grid gap-x-8 gap-y-1 border-t border-hairline py-5 last:border-b sm:grid-cols-[10rem_minmax(0,1fr)] sm:items-baseline"
              >
                <span className="font-display text-base font-semibold tracking-[-0.01em] text-ink">
                  {item.name}
                </span>
                <span className="font-serif text-[0.9375rem] leading-[1.6] text-steel">
                  {item.detail}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <Section className="border-t border-hairline">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
          <div className="max-w-2xl">
            <Heading>Hiring: mechanism design, verification, regulatory.</Heading>
            <Lead className="mt-6">
              If you have taken a Class II instrument that works near dura through
              a 510(k) and come out the other side, we would like to hear from
              you.
            </Lead>
          </div>
          <ButtonLink href="/contact">Get in touch</ButtonLink>
        </div>
      </Section>
    </>
  );
}
