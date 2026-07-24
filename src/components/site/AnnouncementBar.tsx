import { Sparkles } from "lucide-react";
import { WHATSAPP_URL } from "@/data/site";

export function AnnouncementBar() {
  return (
    <div className="relative z-50 border-b border-white/5 bg-gradient-to-r from-[oklch(0.72_0.18_55)] via-[oklch(0.78_0.17_65)] to-[oklch(0.82_0.17_75)] text-[oklch(0.15_0.02_265)]">
      <div className="container-page flex items-center justify-center gap-2 py-2 text-xs font-medium">
        <Sparkles className="h-3.5 w-3.5" />
        <span className="hidden sm:inline">Building brands across global marketplaces.</span>
        <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="underline underline-offset-2 hover:no-underline">
          Book your free consultation →
        </a>
      </div>
    </div>
  );
}
