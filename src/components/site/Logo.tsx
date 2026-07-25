import logo from "@/assets/ecomtik-logo.png.asset.json";

export function Logo({ withWordmark = true }: { withWordmark?: boolean }) {
  return (
    <span className="flex items-center gap-3">
      <span
        className="grid place-items-center rounded-xl overflow-hidden px-2.5 py-1.5 h-[38px] md:h-[48px]"
        style={{
          background: "rgba(255,255,255,0.06)",
          border: "1px solid rgba(245,126,3,0.35)",
          backdropFilter: "blur(12px)",
          boxShadow: "0 0 24px rgba(245,126,3,0.18)",
        }}
      >
        <img src={logo.url} alt="Ecomtik" className="h-full w-auto object-contain" />
      </span>
      {withWordmark && (
        <span className="hidden sm:inline font-display text-lg font-bold tracking-tight text-foreground">
          Ecomtik
        </span>
      )}
    </span>
  );
}
