import { useState, useEffect, useRef } from "react";

const STEPS = [
  { phase: "Step 1", title: "Discovery & Strategy", desc: "We map your business goals, target clients, and the exact message your site needs to communicate." },
  { phase: "Step 2", title: "Design & Content", desc: "Brand-aligned layouts and copy written for your audience — no lorem ipsum, no placeholder thinking." },
  { phase: "Step 3", title: "Build & Review", desc: "The site comes together. You review, request changes, and we refine until it's exactly right." },
  { phase: "Step 4", title: "Launch & Handover", desc: "Launch the site on your domain, understand on how it runs, working for you without daily upkeep." },
];

const SNAKE_PATH =
  "M 12 30 C 20 30, 25 70, 37 70 C 49 70, 51 30, 63 30 C 75 30, 80 70, 88 70";
const SNAKE_POINTS = [
  { x: 12, y: 30 },
  { x: 37, y: 70 },
  { x: 63, y: 30 },
  { x: 88, y: 70 },
];

export default function Process() {
  const outerRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const [progress, setProgress] = useState(0);
  const [pathLen, setPathLen] = useState(1000);
  const [fractions, setFractions] = useState<number[]>([0, 0.34, 0.67, 1]);
  const [reducedMotion] = useState(
    () => typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );

  // Scroll progress
  useEffect(() => {
    const onScroll = () => {
      const el = outerRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const total = el.offsetHeight - window.innerHeight;
      const scrolled = Math.max(0, -rect.top);
      setProgress(total > 0 ? Math.min(1, scrolled / total) : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Measure the path
  useEffect(() => {
    const p = pathRef.current;
    if (!p) return;
    const L = p.getTotalLength();
    setPathLen(L);
    const fr = SNAKE_POINTS.map((pt) => {
      let best = 0;
      let bestDist = Infinity;
      for (let i = 0; i <= 200; i++) {
        const f = i / 200;
        const c = p.getPointAtLength(f * L);
        const d = (c.x - pt.x) ** 2 + (c.y - pt.y) ** 2;
        if (d < bestDist) {
          bestDist = d;
          best = f;
        }
      }
      return best;
    });
    setFractions(fr);
  }, []);

  const n = STEPS.length;
  const p = reducedMotion ? 1 : progress;
  const revealedCount = fractions.reduce((acc, f) => acc + (p >= f ? 1 : 0), 0);
  const pct = Math.min(100, ((p * (n + 0.8)) / n) * 100);
  const draw = pathLen * (1 - Math.min(1, Math.max(0, p)));

  const teal = "var(--color-teal)";
  const rule = "var(--color-rule)";
  const fg = "var(--color-fg)";
  const fgDim = "var(--color-fg-dim)";
  const canvas = "var(--color-canvas)";

  return (
    <div
      ref={outerRef}
      id="process"
      className="relative border-t border-rule"
      style={{ height: `${STEPS.length * 90 + 60}vh` }}
    >
      <div
        className="sticky top-0 flex flex-col justify-center overflow-hidden bg-canvas"
        style={{
          height: "100vh",
          padding: "clamp(3rem, 6vh, 5rem) clamp(1.5rem, 5vw, 4rem)",
        }}
      >
        {/* Header */}
        <p className="mb-2.5 text-[0.68rem] uppercase tracking-[0.24em] text-teal">How it works</p>
        <h2
          className="font-display mb-[clamp(1.5rem,3vh,2.5rem)] text-[clamp(1.8rem,4vw,3rem)] font-normal leading-[1.1]"
          style={{ color: fg }}
        >
          10 days — <em className="italic text-teal"> from start to launch.</em>
        </h2>

        {/* Snake */}
        <div className="snake-wrap" style={{ ["--snake-pct" as string]: `${pct}%` }}>
          <svg className="snake-svg" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
            <path d={SNAKE_PATH} fill="none" stroke={rule} strokeWidth="1.6" vectorEffect="non-scaling-stroke" strokeLinecap="round" />
            <path
              ref={pathRef}
              d={SNAKE_PATH}
              fill="none"
              stroke={teal}
              strokeWidth="1.6"
              vectorEffect="non-scaling-stroke"
              strokeLinecap="round"
              style={{ strokeDasharray: pathLen, strokeDashoffset: draw }}
            />
          </svg>

          {STEPS.map((step, i) => {
            const pt = SNAKE_POINTS[i];
            const above = i % 2 === 0;
            const visible = p >= fractions[i];
            return (
              <div key={step.phase} className="snake-step">
                <div
                  className="snake-marker"
                  style={{ left: `${pt.x}%`, top: `${pt.y}%` }}
                >
                  <div
                    className="font-display flex items-center justify-center rounded-full text-[0.75rem] font-semibold"
                    style={{
                      width: "36px",
                      height: "36px",
                      backgroundColor: visible ? teal : canvas,
                      border: `2px solid ${visible ? teal : rule}`,
                      color: visible ? canvas : fgDim,
                      transition: "background-color 0.35s ease, border-color 0.35s ease, color 0.35s ease",
                    }}
                  >
                    {i + 1}
                  </div>
                </div>

                <div
                  className="snake-card"
                  style={{
                    left: `${pt.x}%`,
                    top: `${pt.y}%`,
                    opacity: visible ? 1 : 0,
                    transform: visible
                      ? `translate(-50%, ${above ? "calc(-100% - 1.5rem)" : "1.5rem"})`
                      : `translate(-50%, ${above ? "calc(-100% - 2rem)" : "2rem"})`,
                    transition: "opacity 0.45s ease, transform 0.45s ease",
                    transitionDelay: visible ? "0.08s" : "0s",
                  }}
                >
                  <p className="mb-1.5 text-[0.6rem] uppercase tracking-[0.2em] text-teal">{step.phase}</p>
                  <h3 className="font-display mb-1.5 text-[clamp(0.95rem,1.5vw,1.1rem)] font-normal leading-[1.2]" style={{ color: fg }}>
                    {step.title}
                  </h3>
                  <p className="text-[0.75rem] leading-[1.6]" style={{ color: fgDim }}>{step.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

        <p className="mt-[clamp(1.25rem,2.5vh,2rem)] text-[0.7rem] tracking-[0.1em]" style={{ color: fgDim }}>
          <span className="font-display text-[1rem] text-teal">{revealedCount}</span>
          {" / "}{n} steps
        </p>
      </div>
    </div>
  );
}
