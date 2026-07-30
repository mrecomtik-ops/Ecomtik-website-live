import { Link } from "@tanstack/react-router";
import { Sparkles } from "lucide-react";
import { WHATSAPP_URL } from "@/data/site";

export function AnnouncementBar() {
  return (
    <div
      className="relative z-50 border-b border-white/5 text-[#1a1305]"
      style={{
        background:
          "linear-gradient(90deg, #E65D02, #F57E03, #FDA903)",
      }}
    >
      <div className="container-page flex items-center justify-center gap-2 py-1.5 text-[12px] font-semibold">
        <Sparkles className="h-3.5 w-3.5" />
        <span className="hidden sm:inline">Building brands across global marketplaces.</span>
        <Link to="/contact" className="underline underline-offset-2 hover:no-underline">
          Book your free consultation →
        </Link>
        <span className="hidden sm:inline opacity-70">·</span>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noreferrer"
          className="hidden sm:inline underline underline-offset-2 hover:no-underline"
        >
          or chat on WhatsApp
        </a>
      </div>
    </div>
  );
}
