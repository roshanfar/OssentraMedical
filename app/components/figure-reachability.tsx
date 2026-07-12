/* ---------------------------------------------------------------------------
   FIG. 02 — Reachability from a single vertex incision. Superior view.

   Eight osteotomy paths radiate from the vertex, as in the published
   characterization. The solid portion of each is what the prototype reached
   with the shaft held at the insertion point; the dashed remainder is what it
   could not reach without lifting the shaft off the vertex and stretching the
   scalp (measured at 1.2–10.9 mm — a stretch a craniofacial surgeon judged
   feasible).

   Scale is ~3 units/mm, so the 60-unit incision is the 20 mm one used in the
   soft-constraint experiment.
--------------------------------------------------------------------------- */

const S = {
  steel: "var(--color-steel)",
  ink: "var(--color-ink)",
  dura: "var(--color-dura)",
  bone: "var(--color-bonefill)",
};

const LABEL = {
  fontFamily: "var(--font-plex-mono)",
  fontSize: 12,
  letterSpacing: "0.09em",
  textTransform: "uppercase" as const,
};

const VERTEX: [number, number] = [380, 292];

/** Table 1 of the paper, as drawn. `reach` is the measured fraction. */
const PATHS = [
  { n: 1, end: [380, 548], reach: 0.722, label: "Sagittal suture" },
  { n: 2, end: [190, 384], reach: 0.75, label: "Parietal, left" },
  { n: 3, end: [204, 266], reach: 0.784, label: "Coronal suture, left" },
  { n: 4, end: [248, 126], reach: 0.75, label: "Frontal, left" },
  { n: 5, end: [380, 64], reach: 0.711, label: "Metopic suture" },
  { n: 6, end: [512, 126], reach: 0.75, label: "Frontal, right" },
  { n: 7, end: [556, 266], reach: 0.784, label: "Coronal suture, right" },
  { n: 8, end: [570, 384], reach: 0.75, label: "Parietal, right" },
] as const;

function lerp(a: readonly [number, number], b: readonly [number, number], t: number) {
  return [a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t] as [number, number];
}

export function FigureReachability() {
  return (
    <svg
      viewBox="0 0 760 620"
      role="img"
      aria-labelledby="fig02-title fig02-desc"
      className="h-auto w-full"
    >
      <title id="fig02-title">
        Reachability of the instrument from a single vertex incision
      </title>
      <desc id="fig02-desc">
        A superior view of an infant skull with the cranial sutures marked. Eight
        planned osteotomy paths radiate from a 20 millimetre incision at the
        vertex. Roughly three quarters of each path is reached by the prototype
        with the shaft held at the insertion point; the remainder requires
        lifting the shaft and stretching the scalp. Measured coverage was 72.2
        per cent on the sagittal skull, 71.1 per cent on the metopic, and 78.4
        per cent on the unicoronal.
      </desc>

      {/* --- Calvarium, superior view. Anterior at the top. --- */}
      <path
        className="rise"
        d="M 380 62 C 470 62, 545 132, 560 232 C 575 332, 560 452, 480 532 C 430 580, 330 580, 280 532 C 200 452, 185 332, 200 232 C 215 132, 290 62, 380 62 Z"
        fill={S.bone}
        stroke={S.steel}
        strokeWidth="1.5"
      />

      {/* --- Sutures. The metopic, sagittal, coronal and lambdoid. --- */}
      <g
        className="fade"
        style={{ animationDelay: "0.4s" }}
        fill="none"
        stroke={S.steel}
        strokeWidth="2"
        strokeLinecap="round"
      >
        <path d="M 380 64 L 380 210" />
        <path d="M 380 210 L 380 470" />
        <path d="M 380 210 C 320 222, 250 240, 206 264" />
        <path d="M 380 210 C 440 222, 510 240, 554 264" />
        <path d="M 380 470 C 340 486, 290 502, 258 514" />
        <path d="M 380 470 C 420 486, 470 502, 502 514" />
      </g>

      {/* --- Paths: solid where the tool reached, dashed where it did not --- */}
      {PATHS.map((p, i) => {
        const stop = lerp(VERTEX, p.end, p.reach);
        const numAt = lerp(VERTEX, p.end, 1.075);
        return (
          <g key={p.n} className="fade" style={{ animationDelay: `${0.9 + i * 0.07}s` }}>
            <title>
              {p.label} — {Math.round(p.reach * 100)}% reached
            </title>
            <line
              x1={VERTEX[0]}
              y1={VERTEX[1]}
              x2={stop[0]}
              y2={stop[1]}
              stroke={S.ink}
              strokeWidth="3.5"
              strokeLinecap="round"
            />
            <line
              x1={stop[0]}
              y1={stop[1]}
              x2={p.end[0]}
              y2={p.end[1]}
              stroke={S.dura}
              strokeWidth="2"
              strokeDasharray="4 5"
            />
            <circle cx={stop[0]} cy={stop[1]} r="3.5" fill={S.ink} />
            <text
              x={numAt[0]}
              y={numAt[1]}
              dy="0.32em"
              textAnchor="middle"
              fill={S.steel}
              style={LABEL}
              fontSize={11}
            >
              {p.n}
            </text>
          </g>
        );
      })}

      {/* --- The incision. Everything else on this plate happens through it. --- */}
      <g className="fade" style={{ animationDelay: "0.7s" }}>
        <path
          d="M 380 262 C 390 275, 390 309, 380 322 C 370 309, 370 275, 380 262 Z"
          fill="var(--color-plate)"
          stroke={S.ink}
          strokeWidth="2"
        />
        <polyline
          points="392,292 600,180 646,180"
          fill="none"
          stroke={S.steel}
          strokeWidth="0.9"
        />
        <text x="654" y="180" dy="0.32em" fill={S.ink} style={LABEL}>
          20 mm incision
        </text>
        <text x="654" y="200" dy="0.32em" fill={S.steel} style={LABEL} fontSize={11}>
          at the vertex
        </text>
      </g>

      {/* --- Key --- */}
      <g className="fade" style={{ animationDelay: "1.6s" }}>
        <line x1="40" y1="588" x2="80" y2="588" stroke={S.ink} strokeWidth="3.5" strokeLinecap="round" />
        <text x="90" y="588" dy="0.32em" fill={S.steel} style={LABEL} fontSize={11}>
          Reached
        </text>
        <line
          x1="220"
          y1="588"
          x2="260"
          y2="588"
          stroke={S.dura}
          strokeWidth="2"
          strokeDasharray="4 5"
        />
        <text x="270" y="588" dy="0.32em" fill={S.steel} style={LABEL} fontSize={11}>
          Needs scalp stretch
        </text>
      </g>
    </svg>
  );
}
