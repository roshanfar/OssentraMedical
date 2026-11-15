import { DeviceAnimation } from "./components/device-animation";
import { PdfFigure } from "./components/pdf-figure";
import {
  Accent,
  Body,
  ButtonLink,
  Container,
  Label,
  Section,
  SectionHead,
  StatusNote,
} from "./components/primitives";
import { LinkedInIcon } from "./components/site-footer";
import {
  benchResults,
  capabilities,
  competitionColumns,
  competitionRows,
  differences,
  ipPosition,
  market,
  marketFocus,
  milestones,
  paper,
  patients,
  regulatorySteps,
  specs,
  workflow,
} from "./content/device";
import { operations, references } from "./content/need";
import { site } from "./content/site";
import { accelerators, advisors, institutions, team } from "./content/team";

/* ---------------------------------------------------------------------------
   Small building blocks used only on this page
--------------------------------------------------------------------------- */

/** Three or more columns separated by hairlines, like a spec sheet. */
function RuledColumns({
  children,
  cols = 3,
  className = "",
}: {
  children: React.ReactNode;
  cols?: 2 | 3 | 4 | 5;
  className?: string;
}) {
  const grid =
    cols === 5
      ? "md:grid-cols-5"
      : cols === 4
        ? "sm:grid-cols-2 lg:grid-cols-4"
        : cols === 2
          ? "md:grid-cols-2"
          : "md:grid-cols-3";
  return (
    <div
      className={`grid border-t border-ink/80 ${grid} md:divide-x md:divide-hairline ${className}`}
    >
      {children}
    </div>
  );
}

function RuledCell({ children }: { children: React.ReactNode }) {
  return (
    <div className="border-b border-hairline py-7 md:border-b-0 md:px-6 md:first:pl-0 md:last:pr-0">
      {children}
    </div>
  );
}

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
  return <span className="font-mono font-semibold text-[0.8rem] text-dura">510(k) path</span>;
}

function LogoGrid({
  items,
}: {
  items: readonly { name: string; logo: string }[];
}) {
  return (
    <ul className="grid grid-cols-2 border-l border-t border-hairline sm:grid-cols-3 lg:grid-cols-4">
      {items.map((s) => (
        <li
          key={s.name}
          title={s.name}
          className="flex h-28 items-center justify-center border-b border-r border-hairline bg-white px-6 py-5"
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
  );
}

export default function HomePage() {
  return (
    <>
      {/* ---------------------------------------------------------------
          Hero
      --------------------------------------------------------------- */}
      <section
        id="top"
        className="relative overflow-hidden bg-gradient-to-b from-field to-bone pt-16 pb-14 sm:pt-24 sm:pb-20"
      >
        <Container className="relative">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-center">
            <div>
              <p className="font-mono font-semibold text-[0.8rem] uppercase tracking-[0.1em] text-dura">
                Pediatric skull surgery · SickKids, Toronto
              </p>
              <h1 className="mt-6 font-display text-[2.6rem] font-bold leading-[1.06] tracking-[-0.02em] text-ink text-balance sm:text-[3.4rem] lg:text-[4rem]">
                Precision was never <Accent>a straight line.</Accent>
              </h1>
              <p className="mt-7 max-w-xl text-[1.12rem] leading-[1.7] text-steel">
                The first articulating bone-cutting instrument for minimally
                invasive pediatric skull surgery.
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <ButtonLink href="#technology">How it works</ButtonLink>
                <ButtonLink href="#need" variant="outline">
                  Why it matters
                </ButtonLink>
              </div>
              <StatusNote className="mt-10 max-w-md">{site.regulatoryStatus}</StatusNote>
            </div>

            <DeviceAnimation caption="The shaft bends to the curve of the skull and the bone punch closes at the tip." />
          </div>
        </Container>
      </section>

      {/* ---------------------------------------------------------------
          Outcomes
      --------------------------------------------------------------- */}
      <section className="bg-navy py-14 text-white">
        <Container>
          <p className="font-mono font-semibold text-[0.8rem] uppercase tracking-[0.1em] text-[#9fb6ff]">
            Open vs. minimally invasive repair
          </p>
          <dl className="mt-8 grid grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-4">
            {specs.map((spec) => (
              <div key={spec.label} className="border-t border-white/25 pt-5">
                <dt className="font-mono font-semibold text-[0.8rem] uppercase tracking-[0.1em] text-[#c3cdf0]">
                  {spec.label}
                </dt>
                <dd className="tnum mt-3 font-display text-[1.25rem] font-semibold leading-[1.3] sm:text-[1.65rem]">
                  {spec.value.split(" → ").map((part, i) => (
                    <span key={part}>
                      {i > 0 ? " " : null}
                      <span className="whitespace-nowrap">
                        {i > 0 ? <span className="text-[#9fb6ff]">→ </span> : null}
                        {part}
                      </span>
                    </span>
                  ))}
                </dd>
                <dd className="mt-2 text-[0.96rem] leading-[1.55] text-[#c3cdf0]">
                  {spec.note}
                </dd>
              </div>
            ))}
          </dl>
        </Container>
      </section>

      {/* ---------------------------------------------------------------
          01 The instrument
      --------------------------------------------------------------- */}
      <Section id="instrument">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:items-center lg:gap-16">
          <SectionHead
            index="01"
            label="The instrument"
            title={
              <>
                Others cut bone. Others articulate. <Accent>We do both.</Accent>
              </>
            }
            intro="Purpose-built for the 3 to 6-month infant skull. An articulating bone punch that follows the curve of the cranium through a small endoscopic incision."
          />
          <PdfFigure
            src="/figures/solution-skull.webp"
            alt="The instrument following the curved path beneath the scalp, over the dura"
            caption="A steerable punch for curved osteotomy paths."
          />
        </div>

        <RuledColumns className="mt-14">
          {capabilities.map((c, i) => (
            <RuledCell key={c.id}>
              <Label>
                {String(i + 1).padStart(2, "0")} · {c.title}
              </Label>
              <h3 className="mt-3 font-display text-[1.3rem] font-semibold text-ink">
                {c.metric}
              </h3>
              <Body className="mt-2">{c.body}</Body>
            </RuledCell>
          ))}
        </RuledColumns>
        <p className="mt-6 text-[0.9rem] text-steel-dim">
          Peer reviewed: Law et al., ASME Journal of Medical Devices, 2025 [2].
          Patents pending in the US and Canada [7].
        </p>
      </Section>

      {/* ---------------------------------------------------------------
          02 How it works
      --------------------------------------------------------------- */}
      <Section id="technology" tone="grey">
        <SectionHead
          index="02"
          label="How it works"
          title="Flexible tools go slack against bone. Rigid tools cannot follow the curve."
          intro="An infant's skull is about 2 mm of bone over the dura. It needs an instrument that bends, cuts, and protects at the same time."
        />

        <div className="mt-16 grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] lg:items-center lg:gap-16">
          <div>
            <Label>The end-effector</Label>
            <h3 className="mt-3 font-display text-[1.6rem] font-semibold leading-[1.2] text-ink">
              The jaw that cuts is the jaw that shields.
            </h3>
            <Body className="mt-4">
              A cable-driven bone punch. The lower jaw is the dural protector,
              staying between the punch and the dura through every bite. A scalp
              retractor above makes the pocket the endoscope sees into.
            </Body>
            <Body className="mt-3">
              Punch, dural protector and endoscope channel all fit in one 13 mm
              shaft. Protection is not a setting the surgeon turns on. It comes
              from the shape of the jaw.
            </Body>
          </div>
          <PdfFigure
            src="/figures/end-effector.webp"
            alt="End-effector: bone punch, scalp retractor, dural protector and endoscope opening"
            caption="Bone punch jaws, dural protector and endoscope opening, from minimum to maximum bend."
          />
        </div>

        <div className="mt-20 grid gap-12 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] lg:items-center lg:gap-16">
          <PdfFigure
            src="/figures/articulating-cutter.webp"
            alt="The prototype reaching along a skull phantom from a single vertex incision"
            caption="Reaching the frontal, parietal and occipital bones from a single vertex incision."
          />
          <div className="lg:order-first">
            <Label>Articulation</Label>
            <h3 className="mt-3 font-display text-[1.6rem] font-semibold leading-[1.2] text-ink">
              It bends to the skull&apos;s curve.
            </h3>
            <Body className="mt-4">
              A cable-driven bending section conforms to the roughly 140 mm
              curvature of the infant cranium. A worm-gear drive holds the angle
              without power and without back-driving.
            </Body>
            <Body className="mt-3">
              One shaft and one vertex incision reach where straight tools work
              blind or need a second cut.
            </Body>
          </div>
        </div>

        <div className="mt-20 grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-16">
          <div>
            <Label>Workflow</Label>
            <h3 className="mt-3 font-display text-[1.6rem] font-semibold leading-[1.2] text-ink">
              One keyhole, and the endoscope surgeons already use.
            </h3>
            <ol className="mt-7 border-t border-ink/80">
              {workflow.map((w, i) => (
                <li
                  key={w.step}
                  className="grid grid-cols-[2.5rem_9rem_minmax(0,1fr)] items-baseline gap-2 border-b border-hairline py-3.5"
                >
                  <span className="tnum font-mono font-semibold text-[0.82rem] text-dura">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="font-medium text-ink">{w.step}</span>
                  <span className="text-[0.98rem] text-steel">{w.detail}</span>
                </li>
              ))}
            </ol>
            <Body className="mt-5">
              Nothing new at the table. The cut extends beyond a strip, and
              conversion to open surgery is always available.
            </Body>
          </div>
          <figure>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/figures/prototype-handheld.webp"
              alt="The handheld prototype: rigid shaft, actuation unit, flexible endoscope and end-effector"
              className="block h-auto w-full"
            />
            <div className="mt-3 grid grid-cols-2 gap-3">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/figures/prototype-phantom.webp"
                alt="The prototype cutting on a skull phantom"
                className="block aspect-[4/3] h-full w-full object-cover"
              />
              <video
                className="block aspect-[4/3] h-full w-full bg-black object-cover"
                src="/media/endoscope-cutting.mp4"
                poster="/media/endoscope-cutting-poster.jpg"
                autoPlay
                muted
                loop
                playsInline
                aria-label="Endoscope view of the jaws cutting a bone phantom"
              />
            </div>
            <figcaption className="mt-4 text-center text-sm leading-[1.6] text-steel-dim">
              The handheld prototype (top), cutting on a skull phantom (left),
              and the endoscope view of the jaws cutting, sped up 10x (right).
            </figcaption>
          </figure>
        </div>

        <div className="mt-20">
          <Label>Bench characterization</Label>
          <div className="mt-5 overflow-x-auto">
            <table className="w-full min-w-[40rem] border-collapse text-left">
              <thead>
                <tr className="border-y border-ink/80">
                  {["Test", "Result", "Conditions"].map((h) => (
                    <th
                      key={h}
                      className="py-3 pr-6 font-mono font-semibold text-[0.8rem] uppercase tracking-[0.09em] text-steel-dim"
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {benchResults.map((row) => (
                  <tr key={row.test} className="border-b border-hairline">
                    <td className="py-4 pr-6 font-medium text-ink">{row.test}</td>
                    <td className="tnum py-4 pr-6 font-mono font-medium text-[0.98rem] text-dura">
                      {row.result}
                    </td>
                    <td className="py-4 text-[1rem] text-steel">{row.condition}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-[0.9rem] text-steel-dim">{paper.citation}</p>
        </div>
      </Section>

      {/* ---------------------------------------------------------------
          03 Who it is for
      --------------------------------------------------------------- */}
      <Section>
        <SectionHead
          index="03"
          label="Who it is for"
          title={
            <>
              Babies we move from open surgery to a <Accent>small incision.</Accent>
            </>
          }
        />
        <RuledColumns className="mt-12">
          {patients.map((p) => (
            <RuledCell key={p.tag}>
              <Label>{p.tag}</Label>
              <h3 className="mt-3 font-display text-[1.35rem] font-semibold text-ink">
                {p.age} old
              </h3>
              <dl className="mt-5 space-y-4">
                <div>
                  <dt className="font-mono font-semibold text-[0.8rem] uppercase tracking-[0.08em] text-steel-dim">
                    Now
                  </dt>
                  <dd className="mt-1 text-[1rem] leading-[1.6] text-steel">{p.now}</dd>
                </div>
                <div className="border-l-2 border-dura pl-4">
                  <dt className="font-mono font-semibold text-[0.8rem] uppercase tracking-[0.08em] text-dura">
                    With Ossentra
                  </dt>
                  <dd className="mt-1 text-[1rem] leading-[1.6] text-ink">{p.with}</dd>
                </div>
              </dl>
            </RuledCell>
          ))}
        </RuledColumns>
        <p className="mt-6 text-[0.9rem] text-steel-dim">Illustrative cases.</p>
      </Section>

      {/* ---------------------------------------------------------------
          04 Clinical need
      --------------------------------------------------------------- */}
      <Section id="need" tone="grey">
        <SectionHead
          index="04"
          label="The clinical need"
          title="The tool decides who gets open surgery."
          intro={
            <>
              Craniosynostosis is the premature fusion of an infant&apos;s cranial
              sutures, and it needs surgery to reshape the skull [3]. Minimally
              invasive repair cuts blood loss, operative time and hospital stay.
              Today&apos;s straight, rigid instruments cannot follow the
              skull&apos;s curvature through a small incision.
            </>
          }
        />

        <div className="mt-14 grid gap-14 md:grid-cols-2">
          {operations.map((op) => (
            <article key={op.name}>
              <div className="flex h-64 items-center justify-center">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={op.image}
                  alt={op.name}
                  className="max-h-full max-w-full object-contain"
                />
              </div>
              <div className="mt-8 border-t border-ink/80 pt-5">
                <h3 className="font-display text-[1.3rem] font-semibold text-ink">
                  {op.name}{" "}
                  <span className="text-[0.9rem] text-steel-dim">
                    {op.cite}
                  </span>
                </h3>
                <ul className="mt-3">
                  {op.points.map((pt) => (
                    <li
                      key={pt}
                      className="border-b border-hairline py-2.5 text-[0.98rem] text-steel"
                    >
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-14 grid gap-6 border-t border-ink/80 pt-8 md:grid-cols-3">
          {[
            ["Helmets and springs", "Many endoscopic patients still need months of helmeting, or a second procedure to remove a spring."],
            ["Excluded patients", "Multisuture, older and complex cases are pushed to open surgery."],
            ["The opportunity", "An articulating tool brings minimally invasive surgery to more children."],
          ].map(([h, b]) => (
            <div key={h}>
              <h3 className="font-display text-[1.1rem] font-semibold text-ink">{h}</h3>
              <Body className="mt-2">{b}</Body>
            </div>
          ))}
        </div>
      </Section>

      {/* ---------------------------------------------------------------
          05 Value proposition
      --------------------------------------------------------------- */}
      <Section>
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:gap-16">
          <div>
            <div className="flex items-center gap-4 font-mono font-semibold text-[0.8rem] uppercase tracking-[0.1em] text-dura">
              <span>05</span>
              <span>Value proposition</span>
              <span aria-hidden className="h-px flex-1 bg-hairline" />
            </div>
            <blockquote className="mt-7 font-display text-[1.75rem] font-medium leading-[1.3] tracking-[-0.01em] text-ink sm:text-[2.1rem]">
              &ldquo;The reshaping control of open surgery through a{" "}
              <Accent>minimally invasive incision.</Accent>&rdquo;
            </blockquote>
          </div>
          <dl className="border-t border-ink/80">
            {differences.map((d) => (
              <div
                key={d.label}
                className="grid gap-1 border-b border-hairline py-4 sm:grid-cols-[9rem_minmax(0,1fr)] sm:gap-6"
              >
                <dt className="font-mono font-semibold text-[0.8rem] uppercase tracking-[0.1em] text-ink">
                  {d.label}
                </dt>
                <dd className="text-[0.98rem] leading-[1.6] text-steel">{d.body}</dd>
              </div>
            ))}
          </dl>
        </div>
      </Section>

      {/* ---------------------------------------------------------------
          06 Competition
      --------------------------------------------------------------- */}
      <Section id="competition" tone="grey">
        <SectionHead
          index="06"
          label="Competition"
          title="Five requirements. One instrument."
          intro="Bone cutters are straight. Articulating tools are made for soft tissue. The closest, JPI's articulator, is built for adult joints. Ossentra is built to meet all five."
        />
        <div className="mt-12 overflow-x-auto">
          <table className="w-full min-w-[44rem] border-collapse bg-white text-left">
            <caption className="sr-only">Competition at a glance</caption>
            <thead>
              <tr className="border-y border-ink/80">
                <th className="px-4 py-3.5 font-mono font-semibold text-[0.8rem] uppercase tracking-[0.09em] text-steel-dim">
                  Instrument
                </th>
                {competitionColumns.map((c) => (
                  <th
                    key={c}
                    className="px-3 py-3.5 text-center font-mono font-semibold text-[0.8rem] uppercase tracking-[0.08em] text-steel-dim"
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
                    className={`border-b ${ours ? "border-ink/80 bg-sky" : "border-hairline"}`}
                  >
                    <th
                      scope="row"
                      className={`px-4 py-3.5 text-[1rem] ${
                        ours ? "font-semibold text-ink" : "font-normal text-steel"
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
        <p className="mt-4 text-[0.9rem] leading-[1.6] text-steel-dim">
          ✓ full · ✗ no · ~ partial. A June 2026 freedom-to-operate review of 37
          patents and applications found no blocking IP. Ossentra is
          investigational and not yet cleared.
        </p>
      </Section>

      {/* ---------------------------------------------------------------
          07 Roadmap
      --------------------------------------------------------------- */}
      <Section id="status">
        <SectionHead
          index="07"
          label="Development status"
          title="A staged path to the clinic."
          intro="From a published handheld prototype to a Class II 510(k) submission, de-risked one milestone at a time."
        />

        <ol className="relative mt-14 grid gap-y-10 md:grid-cols-4">
          <span
            aria-hidden
            className="absolute left-0 right-0 top-[7px] hidden h-px bg-ink/80 md:block"
          />
          {milestones.map((m) => {
            const done = m.status === "complete";
            const active = m.status === "in progress";
            return (
              <li key={m.when} className="relative md:pr-8">
                <span
                  aria-hidden
                  className={`relative block h-[15px] w-[15px] border-2 ${
                    done
                      ? "border-ok bg-ok"
                      : active
                        ? "border-dura bg-dura"
                        : "border-ink/60 bg-white"
                  }`}
                />
                <p
                  className={`mt-5 font-mono font-semibold text-[0.8rem] uppercase tracking-[0.09em] ${
                    done ? "text-ok" : active ? "text-dura" : "text-steel-dim"
                  }`}
                >
                  {done ? "Completed" : active ? "We are here" : "Planned"} · {m.when}
                </p>
                <h3 className="mt-2 font-display text-[1.25rem] font-semibold text-ink">
                  {m.title}
                </h3>
                <ul className="mt-3 space-y-1.5">
                  {m.items.map((it) => (
                    <li key={it} className="text-[1rem] leading-[1.5] text-steel">
                      {it}
                    </li>
                  ))}
                </ul>
              </li>
            );
          })}
        </ol>

        <div className="mt-20">
          <Label>Regulatory pathway · Class II 510(k)</Label>
          <ol className="mt-5 border-t border-ink/80">
            {regulatorySteps.map((r, i) => (
              <li
                key={r.step}
                className="grid gap-1 border-b border-hairline py-4 sm:grid-cols-[3rem_11rem_8rem_minmax(0,1fr)] sm:items-baseline sm:gap-4"
              >
                <span className="tnum font-mono font-semibold text-[0.82rem] text-dura">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="font-medium text-ink">{r.step}</span>
                <span className="font-mono font-semibold text-[0.8rem] uppercase tracking-[0.08em] text-steel-dim">
                  {r.when}
                </span>
                <span className="text-[1rem] leading-[1.6] text-steel">{r.detail}</span>
              </li>
            ))}
          </ol>
        </div>
      </Section>

      {/* ---------------------------------------------------------------
          08 Intellectual property
      --------------------------------------------------------------- */}
      <Section tone="grey">
        <SectionHead
          index="08"
          label="Intellectual property"
          title="Protected, with no blocking IP found."
        />
        <RuledColumns className="mt-12">
          {ipPosition.map((item) => (
            <RuledCell key={item.title}>
              <h3 className="font-display text-[1.2rem] font-semibold text-ink">
                {item.title}
              </h3>
              <Body className="mt-3">{item.body}</Body>
            </RuledCell>
          ))}
        </RuledColumns>
      </Section>

      {/* ---------------------------------------------------------------
          09 Market
      --------------------------------------------------------------- */}
      <Section>
        <SectionHead
          index="09"
          label="The market"
          title="A growing market with a clear regulatory path."
        />
        <RuledColumns className="mt-12">
          {market.map((m) => (
            <RuledCell key={m.value}>
              <p className="tnum font-display text-[2.6rem] font-semibold leading-none text-navy">
                {m.value}
              </p>
              <Body className="mt-4">{m.label}</Body>
            </RuledCell>
          ))}
        </RuledColumns>
        <dl className="mt-10 grid gap-x-8 gap-y-5 border-t border-hairline pt-6 sm:grid-cols-2 lg:grid-cols-4">
          {marketFocus.map((f) => (
            <div key={f.label}>
              <dt className="font-mono font-semibold text-[0.8rem] uppercase tracking-[0.09em] text-steel-dim">
                {f.label}
              </dt>
              <dd className="mt-1 text-[0.98rem] text-ink">{f.value}</dd>
            </div>
          ))}
        </dl>
      </Section>

      {/* ---------------------------------------------------------------
          10 Team
      --------------------------------------------------------------- */}
      <Section id="team" tone="grey">
        <SectionHead
          index="10"
          label="The team"
          title="Spun out of SickKids."
          intro={`A surgeon and engineer team from ${site.origin}, building where craniofacial surgery meets engineering.`}
        />
        <div className="mt-12 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((person) => (
            <article key={person.name}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={person.photo}
                alt={person.name}
                className="aspect-[4/5] w-full object-cover object-top"
              />
              <h3 className="mt-5 font-display text-[1.2rem] font-semibold text-ink">
                {person.name}
                <span className="ml-2 text-[0.9rem] text-steel-dim">
                  {person.credentials}
                </span>
              </h3>
              <p className="mt-1 font-mono font-semibold text-[0.8rem] uppercase tracking-[0.1em] text-dura">
                {person.role}
              </p>
              <p className="mt-1 text-[0.95rem] text-steel-dim">{person.affiliation}</p>
              <Body className="mt-3 text-[0.94rem]">{person.bio}</Body>
            </article>
          ))}
        </div>

        <div className="mt-16">
          <Label>Advisors and support</Label>
          <RuledColumns cols={4} className="mt-5">
            {advisors.map((a) => (
              <RuledCell key={a.name}>
                <p className="font-medium text-ink">{a.name}</p>
                <p className="mt-1 text-[0.98rem] text-steel">{a.role}</p>
              </RuledCell>
            ))}
          </RuledColumns>
        </div>
      </Section>

      {/* ---------------------------------------------------------------
          11 Supported by
      --------------------------------------------------------------- */}
      <Section id="support">
        <SectionHead index="11" label="Supported by" title="Accelerators, programs and institutions." />
        <div className="mt-12">
          <Label>Accelerators and programs</Label>
          <div className="mt-4">
            <LogoGrid items={accelerators} />
          </div>
        </div>
        <div className="mt-12">
          <Label>Institutions, funding and partners</Label>
          <div className="mt-4">
            <LogoGrid items={institutions} />
          </div>
        </div>
      </Section>

      {/* ---------------------------------------------------------------
          12 References
      --------------------------------------------------------------- */}
      <Section id="references" tone="grey">
        <SectionHead index="12" label="References" title="Published work and patent." />
        <ol className="mt-10 border-t border-ink/80">
          {references.map((ref, i) => (
            <li
              key={ref}
              className="grid grid-cols-[3rem_minmax(0,1fr)] gap-2 border-b border-hairline py-3.5 text-[1rem] leading-[1.6] text-steel"
            >
              <span className="tnum font-mono font-semibold text-[0.82rem] text-dura">[{i + 1}]</span>
              <span>{ref}</span>
            </li>
          ))}
        </ol>
      </Section>

      {/* ---------------------------------------------------------------
          Contact
      --------------------------------------------------------------- */}
      <section id="contact" className="border-t border-hairline bg-bone py-20 sm:py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] lg:gap-16">
            <div>
              <div className="flex items-center gap-4 font-mono font-semibold text-[0.8rem] uppercase tracking-[0.1em] text-dura">
                <span>Contact</span>
                <span aria-hidden className="h-px flex-1 bg-hairline" />
              </div>
              <h2 className="mt-7 font-display text-[1.9rem] font-semibold leading-[1.15] text-ink text-balance sm:text-[2.45rem]">
                We want surgeons who&apos;ll tell us it doesn&apos;t work.
              </h2>
              <p className="mt-5 max-w-xl text-[1.06rem] leading-[1.7] text-steel">
                Bench and cadaveric evaluation is open to craniofacial and
                pediatric neurosurgeons. Procurement and investor materials are
                available on request.
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <ButtonLink href={`mailto:${site.email}`}>Email us</ButtonLink>
                <a
                  href={site.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border border-ink/30 px-6 py-3 text-[1rem] font-medium text-ink transition-colors hover:border-ink"
                >
                  <LinkedInIcon className="h-4 w-4" />
                  Follow on LinkedIn
                </a>
              </div>
            </div>

            <dl className="self-end border-t border-ink/80">
              <div className="grid gap-1 border-b border-hairline py-4 sm:grid-cols-[8rem_minmax(0,1fr)]">
                <dt className="font-mono font-semibold text-[0.8rem] uppercase tracking-[0.08em] text-steel-dim">
                  Email
                </dt>
                <dd>
                  <a href={`mailto:${site.email}`} className="text-ink underline underline-offset-4 hover:text-dura">
                    {site.email}
                  </a>
                </dd>
              </div>
              <div className="grid gap-1 border-b border-hairline py-4 sm:grid-cols-[8rem_minmax(0,1fr)]">
                <dt className="font-mono font-semibold text-[0.8rem] uppercase tracking-[0.08em] text-steel-dim">
                  Location
                </dt>
                <dd className="text-ink">
                  {site.address.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </dd>
              </div>
              <div className="grid gap-1 border-b border-hairline py-4 sm:grid-cols-[8rem_minmax(0,1fr)]">
                <dt className="font-mono font-semibold text-[0.8rem] uppercase tracking-[0.08em] text-steel-dim">
                  LinkedIn
                </dt>
                <dd>
                  <a
                    href={site.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-ink underline underline-offset-4 hover:text-dura"
                  >
                    linkedin.com/company/ossentra
                  </a>
                </dd>
              </div>
            </dl>
          </div>
        </Container>
      </section>
    </>
  );
}
