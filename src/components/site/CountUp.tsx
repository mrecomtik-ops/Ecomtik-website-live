import { useEffect, useRef, useState } from "react";

/**
 * Number that is present in the server-rendered HTML immediately (SEO + no-JS safe).
 * The count-up animation is layered on top visually as an aria-hidden overlay,
 * so the DOM never renders a misleading "0".
 */
export function CountUp({
  value,
  suffix = "",
  duration = 1400,
  className,
}: {
  value: number;
  suffix?: string;
  duration?: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const [n, setN] = useState<number | null>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting && !started.current) {
            started.current = true;
            setN(0);
            const start = performance.now();
            const step = (t: number) => {
              const p = Math.min(1, (t - start) / duration);
              const eased = 1 - Math.pow(1 - p, 3);
              setN(Math.round(eased * value));
              if (p < 1) requestAnimationFrame(step);
              else setN(null);
            };
            requestAnimationFrame(step);
          }
        }
      },
      { threshold: 0.4 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [value, duration]);

  return (
    <span ref={ref} className={`relative inline-block ${className ?? ""}`}>
      {/* Real value — always in the HTML */}
      <span style={n !== null ? { visibility: "hidden" } : undefined}>
        {value}
        {suffix}
      </span>
      {/* Animated overlay */}
      {n !== null && (
        <span aria-hidden className="absolute inset-0">
          {n}
          {suffix}
        </span>
      )}
    </span>
  );
}
