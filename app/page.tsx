import { DeviceAnimation } from "./components/device-animation";
import { PdfFigure } from "./components/pdf-figure";
import { RoadmapLadder } from "./components/roadmap-ladder";
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
  capabilities,
  competitionColumns,
  competitionRows,
  differences,
  market,
  marketFocus,
  milestones,
  regulatorySteps,
  specs,
  workflow,
} from "./content/device";
import { operations, references } from "./content/need";
import { news, site } from "./content/site";
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
      <svg
        viewBox="0 0 24 24"
        className="mx-auto h-7 w-7 text-ok"
        fill="none"
        stroke="currentColor"
        strokeWidth="3.4"
        strokeLinecap="round"
        strokeLinejoin="round"
        role="img"
        aria-label="Yes"
      >
        <path d="M4.5 12.5l5 5L19.5 6.5" />
      </svg>
    );
  if (value === "no")
    return (
      <span className="text-[1.3rem] font-bold text-steel-dim" aria-label="No">
        –
      </span>
    );
  if (value === "partial")
    return (
      <span className="text-[1.3rem] font-bold text-steel" aria-label="Partial">
        ~
      </span>
    );
  return (
    <span className="font-mono text-[0.8rem] font-bold text-dura">
      510(k) path
    </span>
  );
}

function LogoGrid({
  items,
}: {
  items: readonly { name: string; logo: string; url?: string }[];
}) {
  return (
    <ul className="grid grid-cols-2 border-l border-t border-hairline sm:grid-cols-3 lg:grid-cols-4">
      {items.map((s) => (
        <li
          key={s.name}
          title={s.name}
          className="flex h-28 items-center justify-center border-b border-r border-hairline bg-white px-6 py-5"
        >
          {"url" in s && s.url ? (
            <a
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-full w-full items-center justify-center"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={s.logo}
                alt={s.name}
                className="max-h-full max-w-full object-contain"
              />
            </a>
          ) : (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={s.logo}
              alt={s.name}
              className="max-h-full max-w-full object-contain"
            />
          )}
        </li>
      ))}
    </ul>
  );
}

/** Links named organisations inside team bios. */
const bioLinks: Record<string, string> = {
  "Simulare Medical": "https://www.simularemedical.com/",
  PCIGITI: "https://pcigiti.com/",
};

function BioText({ text }: { text: string }) {
  const names = Object.keys(bioLinks);
  const parts = text.split(new RegExp(`(${names.join("|")})`));
  return (
    <>
      {parts.map((part, i) =>
        bioLinks[part] ? (
          <a
            key={i}
            href={bioLinks[part]}
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold text-dura underline underline-offset-4 hover:text-ink"
          >
            {part}
          </a>
        ) : (
          part
        ),
      )}
    </>
  );
}

/** Findings supported across our surgeon interviews (no names). */
const surgeonFindings = [
  {
    title: "Metopic cases are where reach is hardest.",
    body: "Surgeons pointed to metopic repair as the case where reaching the base through a small incision is difficult, and where a curved cutter would be most useful.",
  },
  {
    title: "Rigid tools force awkward hand angles.",
    body: "A rigid cutter has to sit under the dissection. Surgeons described wanting a tool whose curve follows the skull so the hand does not have to change position.",
  },
  {
    title: "The dura and sagittal sinus come first.",
    body: "Working over the superior sagittal sinus is the most stressful part of the case. A dural protector built into the cutting jaw was well received.",
  },
  {
    title: "A smaller scar matters to families.",
    body: "Fewer incisions were seen as a cosmetic and family-facing benefit, not a change in blood loss or recovery.",
  },
  {
    title: "Surgeons want to try it with their own hands.",
    body: "New instruments are adopted after a hands-on trial in a realistic model and a side-by-side comparison, often after hearing about it from a peer.",
  },
] as const;

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
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:items-end lg:gap-16">
            <div>
              <p className="font-mono font-bold text-[0.8rem] uppercase tracking-[0.1em] text-dura">
                Pediatric skull surgery
              </p>
              <h1 className="mt-6 font-display text-[2.6rem] font-bold leading-[1.06] tracking-[-0.02em] text-ink text-balance sm:text-[3.4rem] lg:text-[4.2rem]">
                Precision was never <Accent>a straight line.</Accent>
              </h1>
            </div>
            <div>
              <p className="max-w-xl text-[1.12rem] leading-[1.7] text-steel">
                The first articulating bone-cutting instrument for minimally
                invasive pediatric skull surgery.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <ButtonLink href="#technology">How it works</ButtonLink>
                <ButtonLink href="#need" variant="outline">
                  Why it matters
                </ButtonLink>
              </div>
            </div>
          </div>
        </Container>

        {/* The device animation spans 80% of the page width, at its own aspect ratio. */}
        <DeviceAnimation className="relative mx-auto mt-12 w-full sm:mt-16 sm:w-4/5" />

        <Container className="relative">
          <p className="mt-4 text-center text-sm leading-[1.6] text-steel-dim">
            The shaft bends to the curve of the skull and the bone punch closes
            at the tip.
          </p>
          <StatusNote className="mx-auto mt-8 max-w-2xl">
            {site.regulatoryStatus}
          </StatusNote>
        </Container>
      </section>

      {/* ---------------------------------------------------------------
          Outcomes
      --------------------------------------------------------------- */}
      <section className="bg-navy py-14 text-white">
        <Container>
          <p className="font-mono font-bold text-[0.8rem] uppercase tracking-[0.1em] text-[#9fb6ff]">
            Open vs. minimally invasive repair
          </p>
          <dl className="mt-8 grid gap-x-8 gap-y-10 sm:grid-cols-3">
            {specs.map((spec) => (
              <div key={spec.label} className="border-t border-white/25 pt-5">
                <dt className="font-mono font-bold text-[0.8rem] uppercase tracking-[0.1em] text-[#e1e7fa]">
                  {spec.label}
                </dt>
                <dd className="tnum mt-3 font-display text-[1.25rem] font-bold leading-[1.3] sm:text-[1.65rem]">
                  {spec.value.split(" → ").map((part, i) => (
                    <span key={part}>
                      {i > 0 ? " " : null}
                      <span className="whitespace-nowrap">
                        {i > 0 ? (
                          <span className="text-[#9fb6ff]">→ </span>
                        ) : null}
                        {part}
                      </span>
                    </span>
                  ))}
                </dd>
                <dd className="mt-2 text-[0.96rem] leading-[1.55] text-[#e1e7fa]">
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
              <h3 className="mt-3 font-display text-[1.3rem] font-bold text-ink">
                {c.metric}
              </h3>
              <Body className="mt-2">{c.body}</Body>
            </RuledCell>
          ))}
        </RuledColumns>
        <p className="mt-6 text-[0.9rem] text-steel-dim">
          Peer reviewed:{" "}
          <a
            href="https://doi.org/10.1115/1.4069208"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold text-dura underline underline-offset-4 hover:text-ink"
          >
            Law et al., ASME Journal of Medical Devices, 2025
          </a>{" "}
          [2]. Patents pending in the US and Canada [3].
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
            <h3 className="mt-3 font-display text-[1.6rem] font-bold leading-[1.2] text-ink">
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

        <div className="mt-20">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-16">
            <div>
              <Label>Articulation</Label>
              <h3 className="mt-3 font-display text-[1.6rem] font-bold leading-[1.2] text-ink">
                It bends to the skull&apos;s curve.
              </h3>
            </div>
            <div>
              <Body>
                A cable-driven bending section in two segments conforms to the
                roughly 140 mm curvature of the infant cranium. A worm-gear
                drive holds the angle without power and without back-driving.
              </Body>
              <Body className="mt-3">
                On the bench, the bending section held its shape under load, the
                tip swept a wide arc around a single incision point, and the
                punch cut bone analogue by hand. From one vertex incision it
                reached most of the target cutting paths on a skull phantom [2].
              </Body>
            </div>
          </div>
          <figure className="mt-10">
            <div className="relative">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/figures/articulating-cutter.webp"
                alt="The handheld prototype, its reach across a skull phantom from a single vertex incision, and cutting on the phantom"
                className="block h-auto w-full"
              />
              {/* The bottom-right panel plays the endoscope view as a loop. */}
              <video
                className="absolute bg-black object-cover"
                style={{
                  left: "81.41%",
                  top: "58.41%",
                  width: "18.59%",
                  height: "41.59%",
                }}
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
              The handheld prototype, reaching the frontal, parietal and
              occipital bones from a single vertex incision, and the endoscope
              view of the jaws cutting (bottom right, sped up 10x).
            </figcaption>
          </figure>
        </div>

        <div className="mt-20 grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-16">
          <div>
            <Label>Workflow</Label>
            <h3 className="mt-3 font-display text-[1.6rem] font-bold leading-[1.2] text-ink">
              One keyhole, and the endoscope surgeons already use.
            </h3>
            <Body className="mt-4">
              The same endoscope and punch workflow surgeons already know, and
              conversion to open surgery is always available.
            </Body>
          </div>
          <ol className="border-t border-ink/80">
            {workflow.map((w, i) => (
              <li
                key={w.step}
                className="grid grid-cols-[2.5rem_9rem_minmax(0,1fr)] items-baseline gap-2 border-b border-hairline py-3.5"
              >
                <span className="tnum font-mono font-bold text-[0.82rem] text-dura">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="font-semibold text-ink">{w.step}</span>
                <span className="text-[0.98rem] text-steel">{w.detail}</span>
              </li>
            ))}
          </ol>
        </div>
      </Section>

      {/* ---------------------------------------------------------------
          03 What surgeons told us
      --------------------------------------------------------------- */}
      <Section>
        <SectionHead
          index="03"
          label="What surgeons told us"
          title={
            <>
              Built around what we heard <Accent>in the OR.</Accent>
            </>
          }
          intro="Findings from our interviews with pediatric craniofacial surgeons and neurosurgeons at children's hospitals across North America."
        />
        <RuledColumns className="mt-12">
          {surgeonFindings.slice(0, 3).map((f) => (
            <RuledCell key={f.title}>
              <h3 className="font-display text-[1.25rem] font-bold leading-[1.3] text-ink">
                {f.title}
              </h3>
              <Body className="mt-3">{f.body}</Body>
            </RuledCell>
          ))}
        </RuledColumns>
        <RuledColumns cols={2} className="mt-10">
          {surgeonFindings.slice(3).map((f) => (
            <RuledCell key={f.title}>
              <h3 className="font-display text-[1.25rem] font-bold leading-[1.3] text-ink">
                {f.title}
              </h3>
              <Body className="mt-3">{f.body}</Body>
            </RuledCell>
          ))}
        </RuledColumns>
      </Section>

      {/* ---------------------------------------------------------------
          04 Clinical need
      --------------------------------------------------------------- */}
      <Section id="need" tone="grey">
        <SectionHead
          index="04"
          label="The clinical need"
          title="Two operations, each with a cost to the child."
          intro={
            <>
              Craniosynostosis is the premature fusion of an infant&apos;s
              cranial sutures, and it needs surgery to reshape the skull [4].
              Open repair gives full control but brings a long scalp incision
              and transfusion. Endoscopic repair is far smaller, but it is
              offered mainly to young infants and is followed by months of
              helmet therapy.
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
                <h3 className="font-display text-[1.3rem] font-bold text-ink">
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
            [
              "Age decides the approach",
              "Endoscopic repair is offered to young infants. Children who present later go to open surgery.",
            ],
            [
              "The burden after surgery",
              "After a strip craniectomy the child wears a helmet for months, or has a second operation to remove a spring.",
            ],
            [
              "Reach in metopic cases",
              "Getting a straight tool to the base of a metopic suture through a small incision is hard in a small working space.",
            ],
          ].map(([h, b]) => (
            <div key={h}>
              <h3 className="font-display text-[1.1rem] font-bold text-ink">
                {h}
              </h3>
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
            <div className="flex items-center gap-4 font-mono font-bold text-[0.8rem] uppercase tracking-[0.1em] text-dura">
              <span>05</span>
              <span>Value proposition</span>
              <span aria-hidden className="h-px flex-1 bg-hairline" />
            </div>
            <p className="mt-7 font-display text-[1.75rem] font-semibold leading-[1.3] tracking-[-0.01em] text-ink sm:text-[2.1rem]">
              A cutter whose curve follows the skull, so the{" "}
              <Accent>hand does not have to.</Accent>
            </p>
          </div>
          <dl className="border-t border-ink/80">
            {differences.map((d) => (
              <div
                key={d.label}
                className="grid gap-1 border-b border-hairline py-4 sm:grid-cols-[9rem_minmax(0,1fr)] sm:gap-6"
              >
                <dt className="font-mono font-bold text-[0.8rem] uppercase tracking-[0.1em] text-ink">
                  {d.label}
                </dt>
                <dd className="text-[0.98rem] leading-[1.6] text-steel">
                  {d.body}
                </dd>
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
          intro="Bone cutters are straight. Articulating tools are made for soft tissue or adult joints. Ossentra is built to meet all five."
        />
        <div className="mt-12 overflow-x-auto">
          <table className="w-full min-w-[44rem] border-collapse bg-white text-left">
            <caption className="sr-only">Competition at a glance</caption>
            <thead>
              <tr className="border-y border-ink/80">
                <th className="px-4 py-3.5 font-mono font-bold text-[0.8rem] uppercase tracking-[0.09em] text-steel-dim">
                  Instrument
                </th>
                {competitionColumns.map((c) => (
                  <th
                    key={c}
                    className="px-3 py-3.5 text-center font-mono font-bold text-[0.8rem] uppercase tracking-[0.08em] text-steel-dim"
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
                        ours ? "font-bold text-ink" : "font-normal text-steel"
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
          ✓ full · – no · ~ partial. Ossentra is investigational and not yet
          cleared.
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

        <RoadmapLadder milestones={milestones} />

        <div className="mt-20">
          <Label>Regulatory pathway · Class II 510(k)</Label>
          <ol className="mt-5 border-t border-ink/80">
            {regulatorySteps.map((r, i) => (
              <li
                key={r.step}
                className="grid gap-1 border-b border-hairline py-4 sm:grid-cols-[3rem_11rem_8rem_minmax(0,1fr)] sm:items-baseline sm:gap-4"
              >
                <span className="tnum font-mono font-bold text-[0.82rem] text-dura">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="font-semibold text-ink">{r.step}</span>
                <span className="font-mono font-bold text-[0.8rem] uppercase tracking-[0.08em] text-steel-dim">
                  {r.when}
                </span>
                <span className="text-[1rem] leading-[1.6] text-steel">
                  {r.detail}
                </span>
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
          title="Patent pending."
        />
        <div className="mt-10 max-w-3xl border-t border-ink/80 pt-6">
          <Body>
            The instrument is protected by the patent application{" "}
            <a
              href="https://patents.google.com/patent/WO2024156054A1/en"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-dura underline underline-offset-4 hover:text-ink"
            >
              WO2024156054A1, &ldquo;Articulable surgical instrument assembly
              and uses therefor&rdquo;
            </a>{" "}
            (PCT/CA2024/050074, priority January 2023), with national
            applications pending in the United States (19/150,344) and Canada
            (3,280,783). The applicant is The Hospital for Sick Children [3].
          </Body>
        </div>
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
        <RuledColumns cols={2} className="mt-12">
          {market.map((m) => (
            <RuledCell key={m.value}>
              <p className="tnum font-display text-[2.6rem] font-bold leading-none text-navy">
                {m.value}
              </p>
              <Body className="mt-4">{m.label}</Body>
            </RuledCell>
          ))}
        </RuledColumns>
        <dl className="mt-10 grid gap-x-8 gap-y-5 border-t border-hairline pt-6 sm:grid-cols-2 lg:grid-cols-4">
          {marketFocus.map((f) => (
            <div key={f.label}>
              <dt className="font-mono font-bold text-[0.8rem] uppercase tracking-[0.09em] text-steel-dim">
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
          intro={`A surgeon and engineer team from ${site.origin}, the world's number one children's hospital (Newsweek, World's Best Specialized Hospitals 2026 and 2027). We build where craniofacial surgery meets engineering.`}
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
              <h3 className="mt-5 font-display text-[1.2rem] font-bold text-ink">
                {person.name}
                <span className="ml-2 text-[0.9rem] text-steel-dim">
                  {person.credentials}
                </span>
              </h3>
              <p className="mt-1 font-mono font-bold text-[0.8rem] uppercase tracking-[0.1em] text-dura">
                {person.role}
              </p>
              <p className="mt-1 text-[0.95rem] text-steel-dim">
                <BioText text={person.affiliation} />
              </p>
              <Body className="mt-3 text-[0.94rem]">
                <BioText text={person.bio} />
              </Body>
              <a
                href={person.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2 text-[0.95rem] font-bold text-dura hover:text-ink"
              >
                <LinkedInIcon className="h-4 w-4" />
                LinkedIn
              </a>
            </article>
          ))}
        </div>

        <div className="mt-16">
          <Label>Advisors and support</Label>
          <RuledColumns cols={4} className="mt-5">
            {advisors.map((a) => (
              <RuledCell key={a.name}>
                <p className="font-semibold text-ink">{a.name}</p>
                <p className="mt-1 text-[0.98rem] text-steel">{a.role}</p>
              </RuledCell>
            ))}
          </RuledColumns>
        </div>
      </Section>

      {/* ---------------------------------------------------------------
          News
      --------------------------------------------------------------- */}
      <Section id="news">
        <SectionHead index="11" label="News" title="In the news." />
        <ul className="mt-12 border-t border-ink/80">
          {news.map((n) => (
            <li
              key={n.url}
              className="grid gap-6 border-b border-hairline py-8 md:grid-cols-[11rem_minmax(0,1fr)_auto] md:items-start md:gap-10"
            >
              <div>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={n.logo} alt={n.source} className="h-14 w-auto" />
                <p className="mt-4 text-[0.92rem] font-bold text-steel-dim">
                  {n.date}
                </p>
                <p className="text-[0.92rem] text-steel-dim">{n.source}</p>
              </div>
              <div>
                <h3 className="font-display text-[1.45rem] font-bold leading-[1.25] text-ink">
                  <a
                    href={n.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-dura"
                  >
                    {n.title}
                  </a>
                </h3>
                <Body className="mt-3 max-w-3xl">{n.summary}</Body>
              </div>
              <a
                href={n.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 self-start border border-ink/30 px-5 py-2.5 text-[0.95rem] font-bold text-ink transition-colors hover:border-ink"
              >
                Read the article →
              </a>
            </li>
          ))}
        </ul>
      </Section>

      {/* ---------------------------------------------------------------
          11 Supported by
      --------------------------------------------------------------- */}
      <Section id="support" tone="grey">
        <SectionHead
          index="12"
          label="Supported by"
          title="Accelerators, programs and institutions."
        />
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
          13 References
      --------------------------------------------------------------- */}
      <Section id="references">
        <SectionHead index="13" label="References" />
        <ol className="mt-8 border-t border-ink/80">
          {references.map((ref, i) => (
            <li
              key={ref}
              className="grid grid-cols-[3rem_minmax(0,1fr)] gap-2 border-b border-hairline py-3.5 text-[1rem] leading-[1.6] text-steel"
            >
              <span className="tnum font-mono font-bold text-[0.82rem] text-dura">
                [{i + 1}]
              </span>
              <span>{ref}</span>
            </li>
          ))}
        </ol>
      </Section>

      {/* ---------------------------------------------------------------
          Contact
      --------------------------------------------------------------- */}
      <section
        id="contact"
        className="border-t border-hairline bg-bone py-20 sm:py-24"
      >
        <Container>
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] lg:gap-16">
            <div>
              <div className="flex items-center gap-4 font-mono font-bold text-[0.8rem] uppercase tracking-[0.1em] text-dura">
                <span>Contact</span>
                <span aria-hidden className="h-px flex-1 bg-hairline" />
              </div>
              <h2 className="mt-7 font-display text-[1.9rem] font-bold leading-[1.15] text-ink text-balance sm:text-[2.45rem]">
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
                  className="inline-flex items-center gap-2 border border-ink/30 px-6 py-3 text-[1rem] font-semibold text-ink transition-colors hover:border-ink"
                >
                  <LinkedInIcon className="h-4 w-4" />
                  Follow on LinkedIn
                </a>
              </div>
            </div>

            <dl className="self-end border-t border-ink/80">
              <div className="grid gap-1 border-b border-hairline py-4 sm:grid-cols-[8rem_minmax(0,1fr)]">
                <dt className="font-mono font-bold text-[0.8rem] uppercase tracking-[0.08em] text-steel-dim">
                  Email
                </dt>
                <dd>
                  <a
                    href={`mailto:${site.email}`}
                    className="text-ink underline underline-offset-4 hover:text-dura"
                  >
                    {site.email}
                  </a>
                </dd>
              </div>
              <div className="grid gap-1 border-b border-hairline py-4 sm:grid-cols-[8rem_minmax(0,1fr)]">
                <dt className="font-mono font-bold text-[0.8rem] uppercase tracking-[0.08em] text-steel-dim">
                  Location
                </dt>
                <dd className="text-ink">
                  {site.address.map((line) => (
                    <span key={line} className="block">
                      {line.startsWith("PCIGITI") ? (
                        <>
                          <a
                            href={site.pcigiti}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-ink underline underline-offset-4 hover:text-dura"
                          >
                            PCIGITI
                          </a>
                          {line.slice("PCIGITI".length)}
                        </>
                      ) : (
                        line
                      )}
                    </span>
                  ))}
                </dd>
              </div>
            </dl>
          </div>
        </Container>
      </section>
    </>
  );
}
