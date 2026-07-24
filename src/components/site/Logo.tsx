import logo from "@/assets/ecomtik-logo.png.asset.json";

export function Logo({ withWordmark = true, size = 44 }: { withWordmark?: boolean; size?: number }) {
  return (
    <span className="flex items-center gap-3">
      <span
        className="grid place-items-center rounded-xl overflow-hidden bg-gradient-to-br from-white/[0.08] to-white/[0.02] ring-1 ring-[oklch(0.72_0.18_55)]/40 shadow-[0_0_20px_oklch(0.72_0.18_55/0.25)] px-2 py-1.5"
        style={{ height: size }}
      >
        <img src={logo.url} alt="Ecomtik" className="h-full w-auto object-contain" style={{ height: size - 12 }} />
      </span>
      {withWordmark && (
        <span className="hidden sm:inline font-display text-lg font-bold tracking-tight text-foreground">
          Ecomtik
        </span>
      )}
    </span>
  );
}
