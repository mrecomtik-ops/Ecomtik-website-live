export function GridBg({ className = "" }: { className?: string }) {
  return (
    <div className={`pointer-events-none absolute inset-0 -z-10 grid-bg ${className}`} aria-hidden />
  );
}
