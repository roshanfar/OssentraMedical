"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";

type Milestone = {
  readonly when: string;
  readonly title: string;
  readonly status: string;
  readonly items: readonly string[];
};

const BAR = 6;

/**
 * Staircase roadmap. When it scrolls into view, a navy line draws itself
 * from the first step up to the current stage, carrying the "we are here"
 * marker with it. Visitors who prefer reduced motion see the end state.
 */
export function RoadmapLadder({ milestones }: { milestones: readonly Milestone[] }) {
  const wrap = useRef<HTMLDivElement>(null);
  const bars = useRef<(HTMLSpanElement | null)[]>([]);
  const [path, setPath] = useState<{ d: string; w: number; h: number } | null>(null);
  const [run, setRun] = useState(false);

  const activeIndex = Math.max(
    0,
    milestones.findIndex((m) => m.status === "in progress"),
  );

  // Build the path along the bar centre lines: across each reached step,
  // up each riser, ending at the marker on the current step.
  useLayoutEffect(() => {
    const measure = () => {
      const box = wrap.current?.getBoundingClientRect();
      if (!box || window.innerWidth < 768) {
        setPath(null);
        return;
      }
      const pts: [number, number][] = [];
      for (let i = 0; i <= activeIndex; i++) {
        const r = bars.current[i]?.getBoundingClientRect();
        if (!r) return;
        const y = r.top - box.top + BAR / 2;
        const left = r.left - box.left;
        if (i === 0) pts.push([left, y]);
        else pts.push([pts[pts.length - 1][0], y]);
        if (i < activeIndex) pts.push([r.right - box.left - BAR / 2, y]);
        else pts.push([left + 28, y]);
      }
      const d = pts.map(([x, y], k) => `${k ? "L" : "M"}${x.toFixed(1)} ${y.toFixed(1)}`).join(" ");
      setPath({ d, w: box.width, h: box.height });
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [activeIndex]);

  useEffect(() => {
    const el = wrap.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRun(true);
          io.disconnect();
        }
      },
      { threshold: 0.45 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const lifts = ["md:mt-[10.5rem]", "md:mt-[7rem]", "md:mt-[3.5rem]", "md:mt-0"];

  return (
    <div ref={wrap} className="relative mt-14 md:mt-24">
      <ol className="grid gap-y-10 md:grid-cols-4 md:items-start md:gap-y-0">
        {milestones.map((m, i) => {
          const done = m.status === "complete";
          const active = i === activeIndex && m.status === "in progress";
          const last = i === milestones.length - 1;
          return (
            <li key={m.when} className={`relative ${lifts[i] ?? ""}`}>
              <div className="relative">
                <span
                  ref={(el) => {
                    bars.current[i] = el;
                  }}
                  aria-hidden
                  className={`block h-[6px] w-full ${
                    done || active ? "bg-navy md:bg-[#c3cbe0]" : "bg-[#c3cbe0]"
                  }`}
                />
                {!last ? (
                  <span
                    aria-hidden
                    className="absolute bottom-0 right-0 hidden w-[6px] bg-[#c3cbe0] md:block"
                    style={{ height: `calc(3.5rem + ${BAR}px)` }}
                  />
                ) : null}
                {active ? (
                  <span
                    aria-hidden
                    className="absolute -top-[9px] left-4 h-6 w-6 rounded-full border-4 border-white bg-dura shadow-[0_0_0_2px_#1f56d8] md:hidden"
                  />
                ) : null}
              </div>
              <div className="md:pl-4 md:pr-8">
                <p
                  className={`mt-5 font-mono text-[0.8rem] font-bold uppercase tracking-[0.1em] ${
                    done ? "text-ok" : active ? "text-dura" : "text-steel-dim"
                  }`}
                >
                  {done ? "Completed" : active ? "We are here" : "Planned"}
                </p>
                <p
                  className={`mt-1 font-display text-[1.35rem] font-bold ${
                    active ? "text-dura" : "text-ink"
                  }`}
                >
                  {m.when}
                </p>
                <h3 className="mt-1 font-display text-[1.2rem] font-bold text-ink">
                  {m.title}
                </h3>
                <ul className="mt-3 space-y-1.5">
                  {m.items.map((it) => (
                    <li key={it} className="text-[0.98rem] leading-[1.5] text-steel">
                      {it}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          );
        })}
      </ol>

      {path ? (
        <svg
          aria-hidden
          className="pointer-events-none absolute left-0 top-0 hidden md:block"
          width={path.w}
          height={path.h}
          viewBox={`0 0 ${path.w} ${path.h}`}
          style={{ overflow: "visible" }}
        >
          <path
            d={path.d}
            fill="none"
            stroke="#011477"
            strokeWidth={BAR}
            strokeLinejoin="miter"
            strokeLinecap="square"
            pathLength={1}
            strokeDasharray="1 1"
            className="[transition:stroke-dashoffset_2.4s_cubic-bezier(0.45,0,0.2,1)] motion-reduce:[transition:none]"
            style={{ strokeDashoffset: run ? 0 : 1 }}
          />
          <g
            className="[transition:offset-distance_2.4s_cubic-bezier(0.45,0,0.2,1)] motion-reduce:[transition:none]"
            style={{
              offsetPath: `path("${path.d}")`,
              offsetRotate: "0deg",
              offsetDistance: run ? "100%" : "0%",
            }}
          >
            <circle r={12} fill="#ffffff" />
            <circle r={9} fill="#1f56d8" />
            <circle r={12} fill="none" stroke="#1f56d8" strokeWidth={2} />
          </g>
        </svg>
      ) : null}
    </div>
  );
}

