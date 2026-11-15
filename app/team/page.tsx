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
import { advisors, funding, originStory, team } from "../content/team";
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
            Ossentra came out of PCIGITI at {site.origin}, a lab where the
            engineers sit in on the case. The requirements came from watching a
            repair and seeing the instrument run out before the surgeon did.
          </Lead>
        </div>
      </Section>

      <Section>
        <LabelledRule className="mb-12">Founders</LabelledRule>

        <div className="grid gap-4 sm:grid-cols-2">
          {team.map((person) => (
            <article key={person.name} className="rounded-2xl border border-hairline bg-plate p-6 sm:p-8">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={person.photo}
                alt={person.name}
                className="h-32 w-32 rounded-full border-2 border-dura/40 object-cover object-top"
              />

              <h2 className="mt-6 font-display text-xl font-semibold tracking-[-0.015em] text-ink">
                {person.name}
                <span className="ml-2 font-mono text-sm font-normal uppercase tracking-[0.08em] text-steel">
                  {person.credentials}
                </span>
              </h2>

              <p className="mt-2 font-mono text-[0.6875rem] font-medium uppercase tracking-[0.14em] text-dura">
                {person.role}
              </p>

              <p className="mt-1.5 font-mono text-[0.6875rem] uppercase leading-[1.5] tracking-[0.1em] text-steel">
                {person.affiliation}
              </p>

              <Body className="mt-4">{person.bio}</Body>
            </article>
          ))}
        </div>

        <LabelledRule className="mb-8 mt-16">Advisors and support</LabelledRule>
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {advisors.map((a) => (
            <li
              key={a.name}
              className="rounded-2xl border border-hairline bg-plate p-5"
            >
              <p className="text-[0.98rem] font-bold text-ink">{a.name}</p>
              <p className="mt-1 text-[0.88rem] leading-[1.5] text-steel">
                {a.role}
              </p>
            </li>
          ))}
        </ul>
      </Section>

      {/* --- How it became a company --- */}
      <Section register="field">
        <div className="max-w-2xl">
          <Eyebrow register="field">From paper to product</Eyebrow>
          <Heading register="field" className="mt-5">
            Research asks if it&apos;s possible. Founding asks if it reaches the
            patient.
          </Heading>
        </div>

        <ol className="mt-14 grid gap-4 md:grid-cols-4">
          {originStory.map((item, i) => (
            <li key={item.step} className="rounded-2xl border border-hairline bg-plate p-6">
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
            <Heading className="mt-5">Not done alone.</Heading>
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
              Taken a Class II instrument through a 510(k) and out the other
              side? We&apos;d like to hear from you.
            </Lead>
          </div>
          <ButtonLink href="/contact">Get in touch</ButtonLink>
        </div>
      </Section>
    </>
  );
}
