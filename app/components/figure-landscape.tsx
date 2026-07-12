/* ---------------------------------------------------------------------------
   FIG. 03 — Where the instrument sits.

   Two axes, because the whole company is the claim that nobody occupies the
   corner where they meet: instruments that cut bone are straight, and
   instruments that articulate are for soft tissue.
--------------------------------------------------------------------------- */

const S = {
  steel: "var(--color-steel-field)",
  ink: "var(--color-bone-field)",
  dura: "var(--color-dura-field)",
  rule: "var(--color-hairline-field)",
};

const LABEL = {
  fontFamily: "var(--font-plex-mono)",
  fontSize: 12,
  letterSpacing: "0.08em",
  textTransform: "uppercase" as const,
};

const AXIS = {
  fontFamily: "var(--font-plex-mono)",
  fontSize: 13,
  fontWeight: 500,
  letterSpacing: "0.14em",
  textTransform: "uppercase" as const,
};

const ENTRIES = [
  { x: 190, y: 400, label: "Manual scissors,", label2: "rongeurs", anchor: "start" as const },
  { x: 268, y: 322, label: "Powered drills,", label2: "BoneScalpel", anchor: "start" as const },
  { x: 396, y: 424, label: "ROSA robot", label2: "($1M+)", anchor: "start" as const },
  { x: 610, y: 398, label: "ArtiSential,", label2: "FlexDex", anchor: "end" as const },
  { x: 596, y: 292, label: "JPI bur", label2: "(hip, shoulder)", anchor: "end" as const },
];

export function FigureLandscape() {
  return (
    <svg
      viewBox="0 0 760 500"
      role="img"
      aria-labelledby="fig03-title fig03-desc"
      className="h-auto w-full"
    >
      <title id="fig03-title">Competitive landscape</title>
      <desc id="fig03-desc">
        A two-axis plot. The horizontal axis is articulation; the vertical axis
        is the ability to cut bone along curved paths. Manual scissors and
        rongeurs, powered drills and the BoneScalpel, and the ROSA robot all cut
        bone but do not articulate. ArtiSential and FlexDex articulate but are
        for soft tissue. JPI&apos;s articulating bur does both but is built for
        hip and shoulder joints. Ossentra occupies the empty upper-right corner.
      </desc>

      {/* Quadrant rules */}
      <g stroke={S.rule} strokeWidth="1" strokeDasharray="4 6">
        <line x1="410" y1="50" x2="410" y2="440" />
        <line x1="110" y1="245" x2="710" y2="245" />
      </g>

      {/* Axes */}
      <g stroke={S.steel} strokeWidth="1.25" fill="none">
        <line x1="110" y1="440" x2="710" y2="440" />
        <line x1="110" y1="440" x2="110" y2="50" />
        <path d="M 702 434 L 712 440 L 702 446" />
        <path d="M 104 58 L 110 48 L 116 58" />
      </g>
      <text x="710" y="468" textAnchor="end" fill={S.steel} style={AXIS}>
        Articulation →
      </text>
      <text
        x="82"
        y="245"
        textAnchor="middle"
        fill={S.steel}
        style={AXIS}
        transform="rotate(-90 82 245)"
      >
        Cuts bone along curves →
      </text>

      {/* The field */}
      {ENTRIES.map((e, i) => (
        <g key={e.label} className="fade" style={{ animationDelay: `${0.3 + i * 0.1}s` }}>
          <circle cx={e.x} cy={e.y} r="7" fill={S.steel} />
          <text
            x={e.anchor === "start" ? e.x + 14 : e.x - 14}
            y={e.y - 2}
            textAnchor={e.anchor}
            fill={S.ink}
            style={LABEL}
          >
            {e.label}
          </text>
          <text
            x={e.anchor === "start" ? e.x + 14 : e.x - 14}
            y={e.y + 14}
            textAnchor={e.anchor}
            fill={S.steel}
            style={LABEL}
          >
            {e.label2}
          </text>
        </g>
      ))}

      {/* The empty corner */}
      <g className="fade" style={{ animationDelay: "1.0s" }}>
        <circle cx="640" cy="112" r="26" fill={S.dura} opacity={0.18} />
        <circle cx="640" cy="112" r="11" fill={S.dura} />
        <text x="640" y="72" textAnchor="middle" fill={S.ink} style={AXIS} fontSize={16}>
          Ossentra
        </text>
      </g>
    </svg>
  );
}
