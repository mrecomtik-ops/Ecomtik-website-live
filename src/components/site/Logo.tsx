import logo from "@/assets/ecomtik-logo.png.asset.json";

export function Logo({
  withWordmark = false,
  size = "md",
}: {
  withWordmark?: boolean;
  size?: "sm" | "md" | "lg";
}) {
  const dims =
    size === "lg"
      ? "h-[60px] w-[60px] md:h-[68px] md:w-[68px]"
      : size === "sm"
      ? "h-[42px] w-[42px]"
      : "h-[52px] w-[52px] md:h-[58px] md:w-[58px]";

  return (
    <span className="flex items-center gap-3">
      <span
        className={`inline-flex items-center justify-center rounded-2xl bg-white overflow-hidden ${dims} p-1.5 transition-all duration-300`}
        style={{
          border: "1.5px solid rgba(245,126,3,0.55)",
          boxShadow:
            "0 0 22px rgba(245,126,3,0.42), 0 0 44px rgba(245,126,3,0.18), inset 0 0 0 1px rgba(255,255,255,0.95)",
        }}
      >
        <img
          src={logo.url}
          alt="Ecomtik"
          className="block h-full w-full object-contain"
          style={{ height: "100%", maxHeight: "100%" }}
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
