import logo from "@/assets/ecomtik-logo.png.asset.json";

export function Logo({
  size = "md",
}: {
  withWordmark?: boolean;
  size?: "sm" | "md" | "lg";
}) {
  // Bumped ~15% across all sizes
  const dims =
    size === "lg"
      ? "h-[70px] w-[70px] md:h-[78px] md:w-[78px]"
      : size === "sm"
      ? "h-[48px] w-[48px]"
      : "h-[60px] w-[60px] md:h-[66px] md:w-[66px]";

  return (
    <span className="flex items-center">
      <span
        className={`inline-flex items-center justify-center rounded-2xl bg-white overflow-hidden ${dims} p-1.5 transition-all duration-300`}
        style={{
          border: "1.5px solid rgba(245,126,3,0.6)",
          boxShadow:
            "0 0 24px rgba(245,126,3,0.45), 0 0 52px rgba(245,126,3,0.20), inset 0 0 0 1px rgba(255,255,255,0.95)",
        }}
      >
        <img
          src={logo.url}
          alt="Ecomtik"
          className="block h-full w-full object-contain"
          style={{ height: "100%", maxHeight: "100%" }}
        />
      </span>
    </span>
  );
}
