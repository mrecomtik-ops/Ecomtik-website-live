import logo from "@/assets/ecomtik-logo.png.asset.json";

export function Logo({ withWordmark = true }: { withWordmark?: boolean }) {
  return (
    <span className="flex items-center gap-3">
      <span
        className="inline-flex items-center justify-center rounded-2xl bg-white overflow-hidden h-[44px] w-[44px] md:h-[54px] md:w-[54px] p-1.5 transition-all duration-300"
        style={{
          border: "1.5px solid rgba(245,126,3,0.55)",
          boxShadow:
            "0 0 20px rgba(245,126,3,0.35), 0 0 40px rgba(245,126,3,0.15), inset 0 0 0 1px rgba(255,255,255,0.9)",
        }}
      >
        <img
          src={logo.url}
          alt="Ecomtik"
          className="block h-full w-full object-contain"
        />
      </span>
      {withWordmark && (
        <span className="hidden sm:inline font-display text-lg font-bold tracking-tight text-foreground">
          Ecomtik
        </span>
      )}
    </span>
  );
}
