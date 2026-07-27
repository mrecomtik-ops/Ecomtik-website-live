import { Sparkles } from "lucide-react";
import { WHATSAPP_URL } from "@/data/site";

export function AnnouncementBar() {
  return (
    <div
      className="relative z-50 border-b border-white/5 text-[oklch(0.16_0.02_265)]"
      style={{
        background:
          "linear-gradient(90deg, oklch(0.76 0.15 55 / 0.95), oklch(0.83 0.14 68 / 0.95), oklch(0.87 0.13 78 / 0.95))",
      }}
    >
      <div className="container-page flex items-center justify-center gap-2 py-1.5 text-[11px] font-medium">
        <Sparkles className="h-3 w-3" />
        <span className="hidden sm:inline">Building brands across global marketplaces.</span>
        <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="underline underline-offset-2 hover:no-underline">
          Book your free consultation →
        </a>
      </div>
    </div>
  );
}
