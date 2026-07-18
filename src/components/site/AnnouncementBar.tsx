import { Link } from "@tanstack/react-router";
import { Sparkles } from "lucide-react";

export function AnnouncementBar() {
  return (
    <div className="relative z-50 border-b border-white/5 bg-gradient-to-r from-[oklch(0.72_0.18_55)] via-[oklch(0.78_0.17_65)] to-[oklch(0.82_0.17_75)] text-[oklch(0.15_0.02_265)]">
      <div className="container-page flex items-center justify-center gap-2 py-2 text-xs font-medium">
        <Sparkles className="h-3.5 w-3.5" />
        <span className="hidden sm:inline">Now onboarding brands for Q3 launches across 21 Amazon marketplaces.</span>
        <span className="sm:hidden">Now onboarding Q3 launches.</span>
        <Link to="/contact" className="underline underline-offset-2 hover:no-underline">
          Book a discovery call →
        </Link>
      </div>
    </div>
  );
}
