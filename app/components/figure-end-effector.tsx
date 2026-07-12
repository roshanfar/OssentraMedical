/* ---------------------------------------------------------------------------
   FIG. 01 — Section through the end-effector, mid-osteotomy.

   The signature figure. Everything the instrument is about is in the vertical
   axis of this drawing: two millimetres of infant calvarium, a punch jaw above
   it, a dural protector below it, and dura underneath that.

   The bone to the right of the cut edge is gone — that is the strip being
   removed. The tool body sits in the pocket between the lifted scalp and the
   exposed dura, exactly as the paper describes it: "the bone-cutting tip
   follows the skull surface closely, while the tool body remains above and
   unobstructed by the bone."

   Geometry: the bone layers are concentric circular arcs about a centre far
   below the frame at (415, 4000), so offsetting a layer is just a change of
   radius. The numbers below are R and the chord endpoints at x = 130 / x = 700.

     R = 3720  outer table            apex y = 280
     R = 3640  inner table            apex y = 360   (80 units = 2.0 mm)
     R = 3600  dural protector face   apex y = 400
     R = 3560  dura                   apex y = 440

   Horizontal scale is 40 units/mm, which the 3 mm bar is drawn against. The
   soft tissue and the epidural plane are opened up beyond scale so they are
   legible — the caption says so.
--------------------------------------------------------------------------- */

const S = {
  steel: "var(--color-steel)",
  ink: "var(--color-ink)",
  dura: "var(--color-dura)",
  bone: "var(--color-bonefill)",
  scalp: "var(--color-scalp)",
};

const LABEL = {
  fontFamily: "var(--font-plex-mono)",
  fontSize: 13,
  letterSpacing: "0.09em",
  textTransform: "uppercase" as const,
};

const DIM = {
  fontFamily: "var(--font-plex-mono)",
  fontSize: 15,
  fontWeight: 500,
  letterSpacing: "0.03em",
};

/** Leader: a dot on the feature, a line out to the margin, a horizontal shoulder. */
function Leader({
  points,
  label,
  anchor = "start",
  color = S.steel,
  delay,
}: {
  points: [number, number][];
  label: string;
  anchor?: "start" | "end";
  color?: string;
  delay: string;
}) {
  const [dot] = points;
  const last = points[points.length - 1];
  const textX = anchor === "start" ? last[0] + 8 : last[0] - 8;

  return (
    <g className="fade" style={{ animationDelay: delay }}>
      <polyline
        points={points.map(([x, y]) => `${x},${y}`).join(" ")}
        fill="none"
        stroke={color}
        strokeWidth={0.9}
      />
      <circle cx={dot[0]} cy={dot[1]} r={2.5} fill={color} />
      <text
        x={textX}
        y={last[1]}
        dy="0.32em"
        textAnchor={anchor}
        fill={color}
        style={LABEL}
      >
        {label}
      </text>
    </g>
  );
}

export function FigureEndEffector() {
  return (
    <svg
      viewBox="0 0 1000 580"
      role="img"
      aria-labelledby="fig01-title fig01-desc"
      className="h-auto w-full"
    >
      <title id="fig01-title">
        Section through the end-effector during an osteotomy
      </title>
      <desc id="fig01-desc">
        A schematic cross-section of an infant skull, two millimetres thick,
        part-way through a strip osteotomy. To the left the bone is intact; to
        the right it has been removed. At the cut edge, the instrument&apos;s
        upper jaw sits above the bone and its lower jaw — which doubles as a
        dural protector — sits beneath it, between the punch and the dura. A
        scalp retractor lifts the soft tissue above, creating the pocket the
        endoscope looks into.
      </desc>

      {/* --- Intracranial space: the side of the dura the protector exists for --- */}
      <path
        className="fade"
        style={{ animationDelay: "0.45s" }}
        d="M 130 451.43 A 3560 3560 0 0 1 700 451.43 L 700 580 L 130 580 Z"
        fill={S.dura}
        opacity={0.07}
      />

      {/* --- Scalp, lifted by the retractor --- */}
      <path
        className="rise"
        d="M 130 222 C 175 216, 216 209, 242 197 C 274 179, 278 114, 316 88 C 362 60, 446 48, 540 46 C 620 45, 670 48, 700 50
           L 700 112 C 670 110, 620 107, 540 108 C 440 110, 350 122, 306 148 C 272 172, 268 246, 240 262 C 215 274, 175 280, 130 286 Z"
        fill={S.scalp}
        stroke={S.steel}
        strokeWidth="1"
        strokeLinejoin="round"
      />

      {/* --- Calvarium: intact to the left of the cut edge, removed to the right --- */}
      <g className="rise">
        <path
          d="M 130 290.93 A 3720 3720 0 0 1 380 280.16 L 380 360.17 A 3640 3640 0 0 0 130 371.17 Z"
          fill={S.bone}
          stroke={S.steel}
          strokeWidth="1.25"
        />
        {/* The freshly cut edge */}
        <line x1="380" y1="280.16" x2="380" y2="360.17" stroke={S.ink} strokeWidth="1.75" />
      </g>

      {/* --- Dura: the only line on this drawing that must not be crossed --- */}
      <path
        className="draw"
        style={{ animationDelay: "0.45s" }}
        pathLength={1}
        d="M 130 451.43 A 3560 3560 0 0 1 700 451.43"
        fill="none"
        stroke={S.dura}
        strokeWidth="2.75"
      />

      {/* --- The instrument --- */}
      <g className="fade" style={{ animationDelay: "1.0s" }}>
        {/* Body, truncated with a drafting break */}
        <path d="M 492 150 L 700 150 L 700 378 L 492 378 Z" fill={S.ink} />
        <path
          d="M 700 150 L 690 168 L 710 196 L 690 224 L 710 252 L 690 280 L 710 308 L 690 336 L 700 356 L 700 378"
          fill="none"
          stroke={S.ink}
          strokeWidth="2"
        />

        {/* Lower jaw / dural protector: slides under the bone edge and stays there */}
        <path
          d="M 270 362.89 A 3640 3640 0 0 1 520 361.51 L 520 401.53 A 3600 3600 0 0 0 270 402.92 Z"
          fill={S.ink}
        />
        <path d="M 270 362.89 L 234 382.9 L 270 402.92 Z" fill={S.ink} />

        {/* Upper jaw: the punch, open */}
        <path d="M 352 214 L 376 152 L 492 148 L 492 214 Z" fill={S.ink} />
        <circle cx="492" cy="182" r="7" fill="var(--color-plate)" />

        {/* Scalp retractor */}
        <path d="M 270 140 L 494 168 L 494 188 L 270 160 Z" fill={S.steel} />

        {/* Endoscope aperture */}
        <circle cx="600" cy="250" r="46" fill="var(--color-plate)" />
        <circle cx="600" cy="250" r="30" fill={S.steel} opacity={0.45} />
        <circle cx="600" cy="250" r="46" fill="none" stroke={S.steel} strokeWidth="1.5" />
      </g>

      {/* --- Dimension: calvarial thickness. The number the instrument is built around. --- */}
      <g className="fade" style={{ animationDelay: "1.5s" }} stroke={S.steel} fill={S.steel}>
        <line x1="130" y1="290.93" x2="76" y2="290.93" strokeWidth="0.75" />
        <line x1="130" y1="371.17" x2="76" y2="371.17" strokeWidth="0.75" />
        <line x1="88" y1="290.93" x2="88" y2="371.17" strokeWidth="1" />
        <line x1="81" y1="290.93" x2="95" y2="290.93" strokeWidth="1.5" />
        <line x1="81" y1="371.17" x2="95" y2="371.17" strokeWidth="1.5" />
        <text
          x="58"
          y="331"
          textAnchor="middle"
          stroke="none"
          fill={S.ink}
          transform="rotate(-90 58 331)"
          style={DIM}
        >
          2.0 mm
        </text>
      </g>

      {/* --- Dimension: jaw gap --- */}
      <g className="fade" style={{ animationDelay: "1.6s" }} stroke={S.steel} fill={S.steel}>
        <line x1="420" y1="214" x2="420" y2="360" strokeWidth="1" />
        <line x1="413" y1="214" x2="427" y2="214" strokeWidth="1.5" />
        <line x1="413" y1="360" x2="427" y2="360" strokeWidth="1.5" />
        <text x="432" y="287" dy="0.32em" stroke="none" fill={S.ink} style={DIM}>
          ≤ 4 mm
        </text>
      </g>

      {/* --- Annotation --- */}
      <Leader
        points={[
          [350, 150],
          [280, 60],
          [200, 60],
        ]}
        label="Scalp retractor"
        anchor="end"
        delay="1.75s"
      />
      <Leader
        points={[
          [430, 178],
          [330, 100],
          [250, 100],
        ]}
        label="Bone punch — upper jaw"
        anchor="end"
        delay="1.85s"
      />
      <Leader
        points={[
          [450, 78],
          [704, 58],
          [734, 58],
        ]}
        label="Scalp"
        delay="1.95s"
      />
      <Leader
        points={[
          [646, 250],
          [740, 250],
        ]}
        label="Endoscope"
        delay="2.05s"
      />
      <Leader
        points={[
          [455, 320],
          [700, 425],
          [740, 425],
        ]}
        label="Bone removed"
        delay="2.15s"
      />
      <Leader
        points={[
          [300, 382],
          [200, 480],
          [140, 480],
        ]}
        label="Dural protector — lower jaw"
        anchor="end"
        delay="2.25s"
      />
      <Leader
        points={[
          [390, 440],
          [420, 522],
          [490, 522],
        ]}
        label="Dura mater"
        color={S.dura}
        delay="2.35s"
      />

      {/* --- Scale --- */}
      <g className="fade" style={{ animationDelay: "2.45s" }} stroke={S.steel} fill={S.steel}>
        <line x1="740" y1="545" x2="860" y2="545" strokeWidth="1" />
        <line x1="740" y1="539" x2="740" y2="551" strokeWidth="1.5" />
        <line x1="860" y1="539" x2="860" y2="551" strokeWidth="1.5" />
        <text x="800" y="529" textAnchor="middle" stroke="none" style={LABEL} fontSize={11}>
          3 mm
        </text>
      </g>
    </svg>
  );
}
