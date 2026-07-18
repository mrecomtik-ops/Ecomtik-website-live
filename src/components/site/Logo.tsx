import logo from "@/assets/ecomtik-logo.png.asset.json";

export function Logo({ withWordmark = true, size = 32 }: { withWordmark?: boolean; size?: number }) {
  return (
    <span className="flex items-center gap-2.5">
      <span
        className="grid place-items-center rounded-lg overflow-hidden bg-white/5 ring-1 ring-white/10"
        style={{ width: size, height: size }}
      >
        <img src={logo.url} alt="Ecomtik" className="h-full w-full object-contain" />
      </span>
      {withWordmark && (
        <span className="font-display text-lg font-semibold tracking-tight text-foreground">
          Ecomtik
        </span>
      )}
    </span>
  );
}
