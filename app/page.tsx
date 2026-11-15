import Link from "next/link";
import type { ReactNode } from "react";
import {
  Accent,
  Body,
  ButtonLink,
  Card,
  Container,
  Eyebrow,
  Heading,
  Lead,
  Section,
  StatusNote,
} from "./components/primitives";
import { DeviceAnimation } from "./components/device-animation";
import { PdfFigure } from "./components/pdf-figure";
import {
  capabilities,
  competitionColumns,
  competitionRows,
  differences,
  market,
  marketFocus,
  milestones,
  patients,
  specs,
} from "./content/device";
import { ecosystem, site } from "./content/site";
import { supporters, team } from "./content/team";

/* ---------------------------------------------------------------------------
   Small inline icons, drawn as single strokes in the accent colour.
--------------------------------------------------------------------------- */

function IconTile({ children }: { children: ReactNode }) {
  return (
    <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-dura/20 bg-dura/10 text-dura">
      <svg
        viewBox="0 0 24 24"
        className="h-5 w-5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden
      >
        {children}
      </svg>
    </span>
  );
}

const featureIcons = {
  articulate: <path d="M5 19c0-8 6-14 14-14M15 5h4v4" />,
  "cuts-bone": (
    <>
      <path d="M12 3v8" />
      <path d="M8 11h8l-1 4H9z" />
      <path d="M6 21h12" />
    </>
  ),
  "right-scale": (
    <>
      <circle cx="12" cy="12" r="8" />
      <path d="M4 12h16" />
    </>
  ),
} as const;

const needPoints = [
  {
    lead: "Helmets and springs.",
    text: "Many endoscopic patients still need 6 to 12 months of helmeting, or a second procedure to remove a spring.",
  },
  {
    lead: "Excluded patients.",
    text: "Multisuture, older and complex cases are pushed to open surgery.",
  },
  {
    lead: "The opportunity.",
    text: "An articulating tool brings the benefits of minimally invasive surgery to more children.",
  },
] as const;

const pathways = [
  {
    label: "Today · straight tools",
    text: "Limited minimally invasive repair, then helmets, springs and repeat procedures",
  },
  {
    label: "Today · complex cases",
    text: "Open surgery, with more blood loss and a longer stay",
  },
  {
    label: "With Ossentra",
    text: "Articulating cuts, so minimally invasive repair reaches more children",
    highlight: true,
  },
] as const;

const requirements = [
  "Cuts bone",
  "Articulates",
  "Infant scale",
  "Endoscopic access",
  "Path to clearance",
] as const;

function Mark({ value }: { value: string }) {
  if (value === "yes")
    return (
      <span className="text-ok" aria-label="Yes">
        ✓
      </span>
    );
  if (value === "no")
    return (
      <span className="text-steel-dim" aria-label="No">
        ✗
      </span>
    );
  if (value === "partial")
    return (
      <span className="text-steel" aria-label="Partial">
        ~
      </span>
    );
  return (
    <span className="text-[0.72rem] font-semibold text-dura">510(k) path</span>
  );
}

/* ---------------------------------------------------------------------------
   Hero backdrop: faint grid, a blue glow, and three curves with dots
   travelling along them, like cut paths across a skull.
--------------------------------------------------------------------------- */

function HeroBackdrop() {
  const curves = [
    "M-40 210 C 320 120, 620 110, 900 210 S 1300 330, 1500 250",
    "M-40 330 C 300 250, 640 250, 930 340 S 1320 440, 1500 370",
    "M-40 450 C 340 380, 660 400, 960 470 S 1330 560, 1500 490",
  ];
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="hero-grid absolute inset-0" />
      <div className="absolute -right-40 -top-40 h-[560px] w-[560px] rounded-full bg-[#3b82f6]/20 blur-[120px]" />
      <svg
        className="absolute inset-0 h-full w-full opacity-40 sm:opacity-100"
        viewBox="0 0 1440 700"
        preserveAspectRatio="xMidYMid slice"
      >
        {curves.map((d) => (
          <g key={d}>
            <path d={d} fill="none" stroke="#3b82f6" strokeOpacity="0.1" strokeWidth="16" />
            <path
              d={d}
              fill="none"
              stroke="#06d6c6"
              strokeOpacity="0.7"
              strokeWidth="3"
              strokeLinecap="round"
              strokeDasharray="1 23"
              className="dash-travel"
            />
          </g>
        ))}
      </svg>
    </div>
  );
}

export default function HomePage() {
  return (
    <>
      {/* ---------------------------------------------------------------
          Hero
      --------------------------------------------------------------- */}
      <section id="top" className="relative overflow-hidden bg-bone py-20 sm:py-28">
        <HeroBackdrop />
        <Container className="relative">
          <div className="grid gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:items-center lg:gap-14">
            <div>
              <Heading level={1}>
                Reimagining cranial surgery,{" "}
                <Accent>one precise cut at a time.</Accent>
              </Heading>

              <Lead className="mt-7 max-w-xl">
                The first articulating, robot-ready bone-cutting instrument for
                minimally invasive pediatric skull surgery.
              </Lead>

              <div className="mt-9 flex flex-wrap gap-3">
                <ButtonLink href="#instrument">How it works →</ButtonLink>
                <ButtonLink href="#need" variant="outline">
                  Why it matters
                </ButtonLink>
              </div>

              <StatusNote className="mt-10 max-w-md">
                {site.regulatoryStatus}
              </StatusNote>
            </div>

            <DeviceAnimation caption="The shaft bends to the skull's curve and the bone punch cuts at the tip." />
          </div>
        </Container>
      </section>

      {/* ---------------------------------------------------------------
          Open surgery vs. Ossentra
      --------------------------------------------------------------- */}
      <section className="border-y border-hairline bg-field py-14">
        <Container>
          <Eyebrow>Open vs. minimally invasive repair</Eyebrow>
          <dl className="mt-8 grid grid-cols-2 gap-4 lg:grid-cols-4">
            {specs.map((spec) => (
              <Card key={spec.label} as="div" className="!p-4 sm:!p-6">
                <dt className="text-[0.8rem] font-semibold text-steel">
                  {spec.label}
                </dt>
                <dd className="tnum mt-3 text-[1.15rem] font-extrabold leading-[1.3] tracking-[-0.01em] sm:text-[1.5rem]">
                  {spec.value.split(" → ").map((part, i) => (
                    <span key={part}>
                      {i > 0 ? " " : null}
                      <span className="text-grad whitespace-nowrap">
                        {i > 0 ? "→ " : ""}
                        {part}
                      </span>
                    </span>
                  ))}
                </dd>
                <dd className="mt-2 text-sm leading-[1.55] text-steel">
                  {spec.note}
                </dd>
              </Card>
            ))}
          </dl>
        </Container>
      </section>

      {/* ---------------------------------------------------------------
          The instrument
      --------------------------------------------------------------- */}
      <Section id="instrument">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:items-center lg:gap-16">
          <div>
            <Eyebrow>The instrument</Eyebrow>
            <Heading className="mt-4">
              Others cut bone. Others articulate.{" "}
              <Accent>We do both.</Accent>
            </Heading>
            <Lead className="mt-6">
              Purpose-built for the 3 to 6-month infant skull. An articulating
              cutting instrument that follows the curve of the cranium through
              a small endoscopic incision.
            </Lead>
            <div className="mt-8">
              <ButtonLink href="/technology" variant="outline">
                Explore the technology →
              </ButtonLink>
            </div>
          </div>

          <PdfFigure
            src="/figures/solution-skull.png"
            alt="Ossentra articulating instrument following the curved endoscopic path beneath the scalp"
            caption="A steerable instrument for curved osteotomy trajectories."
          />
        </div>

        <div className="mt-14 grid gap-4 md:grid-cols-3">
          {capabilities.map((f) => (
            <Card key={f.id}>
              <IconTile>{featureIcons[f.id]}</IconTile>
              <p className="mt-5 text-[0.72rem] font-bold uppercase tracking-[0.14em] text-dura">
                {f.title}
              </p>
              <h3 className="mt-1.5 text-lg font-bold text-ink">{f.metric}</h3>
              <Body className="mt-2 text-[0.92rem]">{f.body}</Body>
            </Card>
          ))}
        </div>
        <p className="mt-6 text-[0.85rem] text-steel-dim">
          Peer reviewed: Law J et al., ASME Journal of Medical Devices, 2025.
          Patents pending in the US and Canada.
        </p>
      </Section>

      {/* ---------------------------------------------------------------
          Who it is for
      --------------------------------------------------------------- */}
      <Section register="field">
        <div className="mx-auto max-w-2xl text-center">
          <Eyebrow>Who it is for</Eyebrow>
          <Heading className="mt-4">
            Babies we move from open surgery to a{" "}
            <Accent>small incision</Accent>
          </Heading>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {patients.map((p) => (
            <Card key={p.name} className="flex flex-col">
              <p className="text-[0.72rem] font-bold uppercase tracking-[0.14em] text-dura">
                {p.tag}
              </p>
              <h3 className="mt-2 text-xl font-bold text-ink">
                {p.name}, {p.age}
              </h3>
              <div className="mt-5 rounded-xl border border-hairline bg-bonefill px-4 py-3">
                <p className="text-[0.7rem] font-bold uppercase tracking-[0.14em] text-steel-dim">
                  Now
                </p>
                <p className="mt-1 text-[0.92rem] leading-[1.55] text-steel">
                  {p.now}
                </p>
              </div>
              <div className="mt-3 rounded-xl border border-dura/30 bg-gradient-to-r from-[#3b82f6]/15 to-dura/15 px-4 py-3">
                <p className="text-[0.7rem] font-bold uppercase tracking-[0.14em] text-dura">
                  With Ossentra
                </p>
                <p className="mt-1 text-[0.92rem] leading-[1.55] text-ink">
                  {p.with}
                </p>
              </div>
            </Card>
          ))}
        </div>
        <p className="mt-6 text-center text-[0.82rem] text-steel-dim">
          Illustrative cases.
        </p>
      </Section>

      {/* ---------------------------------------------------------------
          The clinical need
      --------------------------------------------------------------- */}
      <Section id="need">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)] lg:items-center lg:gap-16">
          <div>
            <Eyebrow>The clinical need</Eyebrow>
            <Heading className="mt-4">Why this matters for children</Heading>
            <Body className="mt-6">
              Craniosynostosis is the premature fusion of an infant&apos;s
              cranial sutures, and it needs surgery to reshape the skull.
              Minimally invasive repair cuts blood loss, operative time and
              hospital stay. Today&apos;s straight, rigid instruments cannot
              follow the skull&apos;s curvature through a small incision.
            </Body>

            <ul className="mt-7 flex flex-col gap-4">
              {needPoints.map((p) => (
                <li key={p.lead} className="flex gap-3">
                  <svg
                    viewBox="0 0 24 24"
                    className="mt-1 h-4 w-4 shrink-0 text-ok"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden
                  >
                    <path d="M5 12l5 5L20 7" />
                  </svg>
                  <p className="text-[0.95rem] leading-[1.6] text-steel">
                    <strong className="font-semibold text-ink">{p.lead}</strong>{" "}
                    {p.text}
                  </p>
                </li>
              ))}
            </ul>

            <div className="mt-9">
              <ButtonLink href="/clinical-need" variant="outline">
                More on the clinical need →
              </ButtonLink>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-2xl border border-hairline bg-plate p-5 sm:p-6">
            <div
              aria-hidden
              className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-dura/10 blur-3xl"
            />
            <ul className="relative flex flex-col gap-3">
              {pathways.map((p) => (
                <li
                  key={p.label}
                  className={`rounded-xl border px-5 py-4 ${
                    "highlight" in p && p.highlight
                      ? "border-dura/30 bg-gradient-to-r from-[#3b82f6]/15 to-dura/15"
                      : "border-hairline bg-bonefill"
                  }`}
                >
                  <p className="text-[0.7rem] font-bold uppercase tracking-[0.14em] text-steel">
                    {p.label}
                  </p>
                  <p className="mt-1.5 text-[0.92rem] text-ink">{p.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* ---------------------------------------------------------------
          Value proposition
      --------------------------------------------------------------- */}
      <Section register="field">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-16">
          <div>
            <Eyebrow>Value proposition</Eyebrow>
            <p className="mt-5 text-[1.7rem] font-extrabold leading-[1.25] tracking-[-0.02em] text-ink sm:text-[2.1rem]">
              &ldquo;The reshaping control of open surgery through a{" "}
              <Accent>minimally invasive incision.</Accent>&rdquo;
            </p>
          </div>
          <dl className="flex flex-col">
            {differences.map((d) => (
              <div
                key={d.label}
                className="grid gap-1 border-t border-hairline py-4 last:border-b sm:grid-cols-[9rem_minmax(0,1fr)] sm:gap-6"
              >
                <dt className="text-[0.95rem] font-bold text-ink">{d.label}</dt>
                <dd className="text-[0.95rem] leading-[1.6] text-steel">
                  {d.body}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </Section>

      {/* ---------------------------------------------------------------
          Differentiation
      --------------------------------------------------------------- */}
      <Section>
        <div className="mx-auto max-w-2xl text-center">
          <Eyebrow>The differentiation</Eyebrow>
          <Heading className="mt-4">Five requirements. One instrument.</Heading>
          <Lead className="mt-6">
            Bone cutters are straight. Articulating tools are made for soft
            tissue. The closest, JPI&apos;s articulator, is built for adult
            joints. Ossentra is built to meet all five.
          </Lead>
        </div>

        <ol className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {requirements.map((r, i) => (
            <Card
              key={r}
              as="li"
              className="flex flex-col items-center !px-4 !py-6 text-center"
            >
              <span className="text-grad tnum text-3xl font-extrabold">
                {i + 1}
              </span>
              <span className="mt-2 text-[0.95rem] font-semibold text-ink">
                {r}
              </span>
            </Card>
          ))}
        </ol>

        <div className="mt-12 overflow-x-auto rounded-2xl border border-hairline bg-plate">
          <table className="w-full min-w-[40rem] border-collapse text-left">
            <caption className="sr-only">Competition at a glance</caption>
            <thead>
              <tr className="border-b border-hairline-strong">
                <th className="px-5 py-4 text-[0.72rem] font-bold uppercase tracking-[0.12em] text-steel">
                  Instrument
                </th>
                {competitionColumns.map((c) => (
                  <th
                    key={c}
                    className="px-3 py-4 text-center text-[0.72rem] font-bold uppercase tracking-[0.12em] text-steel"
                  >
                    {c}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {competitionRows.map((row) => {
                const ours = row.name === "Ossentra";
                return (
                  <tr
                    key={row.name}
                    className={`border-b border-hairline last:border-b-0 ${
                      ours ? "bg-gradient-to-r from-[#3b82f6]/15 to-dura/15" : ""
                    }`}
                  >
                    <th
                      scope="row"
                      className={`px-5 py-3.5 text-[0.92rem] ${
                        ours ? "font-bold text-ink" : "font-medium text-steel"
                      }`}
                    >
                      {row.name}
                    </th>
                    {row.marks.map((m, i) => (
                      <td key={i} className="px-3 py-3.5 text-center text-lg">
                        <Mark value={m} />
                      </td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-[0.82rem] leading-[1.6] text-steel-dim">
          ✓ full · ✗ no · ~ partial. Freedom to operate: 37 patents and
          applications reviewed, no blocking IP identified (June 2026).
          Ossentra is investigational and not yet cleared.
        </p>
      </Section>

      {/* ---------------------------------------------------------------
          Development status
      --------------------------------------------------------------- */}
      <Section id="status" register="field">
        <div className="max-w-2xl">
          <Eyebrow>Development status</Eyebrow>
          <Heading className="mt-4">A staged path to the clinic</Heading>
          <Body className="mt-6">
            From a published handheld prototype to a robot-ready instrument on
            the FDA 510(k) pathway, de-risked one milestone at a time.
          </Body>
        </div>

        <ol className="mt-14 grid gap-4 md:grid-cols-5">
          {milestones.map((m) => {
            const done = m.status === "complete";
            const active = m.status === "in progress";
            return (
              <li
                key={m.when}
                className={`rounded-2xl border p-5 ${
                  active
                    ? "border-dura/40 bg-gradient-to-b from-dura/15 to-plate"
                    : "border-hairline bg-plate"
                }`}
              >
                <div className="flex items-center gap-2">
                  <span
                    aria-hidden
                    className={`h-3 w-3 rounded-full border-2 ${
                      done
                        ? "border-ok bg-ok"
                        : active
                          ? "border-dura bg-dura shadow-[0_0_12px_rgba(6,214,198,0.7)]"
                          : "border-hairline-strong bg-field"
                    }`}
                  />
                  <span
                    className={`text-[0.68rem] font-bold uppercase tracking-[0.14em] ${
                      done ? "text-ok" : active ? "text-dura" : "text-steel-dim"
                    }`}
                  >
                    {done ? "Completed" : active ? "We are here" : "Planned"}
                  </span>
                </div>
                <p className="mt-4 text-[0.85rem] font-semibold text-steel">
                  {m.when}
                </p>
                <h3 className="mt-0.5 text-[1.05rem] font-bold text-ink">
                  {m.title}
                </h3>
                <ul className="mt-3 flex flex-col gap-1.5">
                  {m.items.map((it) => (
                    <li
                      key={it}
                      className="text-[0.85rem] leading-[1.45] text-steel"
                    >
                      {it}
                    </li>
                  ))}
                </ul>
              </li>
            );
          })}
        </ol>

        <p className="mt-6 text-[0.82rem] leading-[1.6] text-steel-dim">
          2026 programs: Creative Destruction Lab, Lab2Market, UTEST, ICUBE,
          H2i, an independent US surgeon study and a freedom-to-operate review.
        </p>
      </Section>

      {/* ---------------------------------------------------------------
          The market
      --------------------------------------------------------------- */}
      <Section>
        <div className="mx-auto max-w-2xl text-center">
          <Eyebrow>The market</Eyebrow>
          <Heading className="mt-4">
            A growing market with a clear regulatory path
          </Heading>
        </div>
        <dl className="mt-12 grid gap-4 md:grid-cols-3">
          {market.map((m) => (
            <Card key={m.value} as="div">
              <dt className="sr-only">{m.label}</dt>
              <dd className="text-grad tnum text-4xl font-extrabold tracking-[-0.02em]">
                {m.value}
              </dd>
              <dd className="mt-3 text-[0.92rem] leading-[1.6] text-steel">
                {m.label}
              </dd>
            </Card>
          ))}
        </dl>
        <dl className="mt-8 grid gap-x-6 gap-y-4 rounded-2xl border border-hairline p-6 sm:grid-cols-2 lg:grid-cols-5">
          {marketFocus.map((f) => (
            <div key={f.label}>
              <dt className="text-[0.7rem] font-bold uppercase tracking-[0.14em] text-dura">
                {f.label}
              </dt>
              <dd className="mt-1 text-[0.9rem] leading-[1.5] text-ink">
                {f.value}
              </dd>
            </div>
          ))}
        </dl>
      </Section>

      {/* ---------------------------------------------------------------
          The team
      --------------------------------------------------------------- */}
      <Section register="field">
        <div className="mx-auto max-w-2xl text-center">
          <Eyebrow>The team</Eyebrow>
          <Heading className="mt-4">Spun out of SickKids</Heading>
          <Lead className="mt-6">
            A surgeon and engineer team from {site.origin}, building where
            craniofacial surgery meets robotics.
          </Lead>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((person) => (
            <Card key={person.name} className="text-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={person.photo}
                alt={person.name}
                className="mx-auto h-24 w-24 rounded-full border-2 border-dura/40 object-cover object-top"
              />
              <h3 className="mt-5 text-[1.02rem] font-bold text-ink">
                {person.name}
              </h3>
              <p className="mt-1 text-[0.82rem] font-semibold text-dura">
                {person.role}
              </p>
              <p className="mt-2 text-[0.82rem] leading-[1.5] text-steel">
                {person.affiliation}
              </p>
            </Card>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          {ecosystem.map((e) => (
            <span
              key={e.name}
              title={e.detail}
              className="rounded-full border border-hairline-strong bg-white/[0.04] px-4 py-1.5 text-[0.85rem] font-semibold text-ink"
            >
              {e.name}
            </span>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/team"
            className="text-[0.95rem] font-semibold text-dura hover:text-ink"
          >
            Meet the team →
          </Link>
        </div>
      </Section>

      {/* ---------------------------------------------------------------
          Supported by
      --------------------------------------------------------------- */}
      <section className="bg-bone pt-20 sm:pt-24">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <Eyebrow>Acknowledgments</Eyebrow>
            <Heading className="mt-4">Supported by</Heading>
          </div>
          <ul className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-7">
            {supporters.map((s) => (
              <li
                key={s.name}
                className="flex h-20 items-center justify-center rounded-xl bg-white p-3"
                title={s.name}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={s.logo}
                  alt={s.name}
                  className="max-h-full max-w-full object-contain"
                />
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* ---------------------------------------------------------------
          Contact
      --------------------------------------------------------------- */}
      <section id="contact" className="bg-bone py-20 sm:py-24">
        <Container>
          <div className="relative overflow-hidden rounded-3xl border border-dura/20 bg-gradient-to-br from-[#3b82f6]/10 via-plate to-dura/10 px-6 py-14 text-center sm:px-12">
            <Eyebrow>Contact</Eyebrow>
            <Heading className="mx-auto mt-4 max-w-2xl">
              We want surgeons who&apos;ll tell us it doesn&apos;t work.
            </Heading>
            <Lead className="mx-auto mt-6 max-w-2xl">
              Bench and cadaveric evaluation is open to craniofacial and
              pediatric neurosurgeons. Procurement and investor materials are
              available on request.
            </Lead>
            <div className="mt-9 flex flex-wrap justify-center gap-3">
              <ButtonLink href={`mailto:${site.email}`}>{site.email}</ButtonLink>
              <ButtonLink href="/contact" variant="outline">
                Contact form
              </ButtonLink>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
