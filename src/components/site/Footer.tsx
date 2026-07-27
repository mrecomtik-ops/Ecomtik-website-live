import { Link } from "@tanstack/react-router";
import { Mail, MapPin, MessageCircle, Instagram, Facebook } from "lucide-react";
import { Logo } from "./Logo";
import { site, whatsappUrl } from "@/data/site";
import { trackAServices, trackBServices } from "@/data/services";
import { marketplacesByRegion } from "@/data/marketplaces";

// Lucide has no TikTok — use a simple inline SVG.
function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M19.6 6.3a5.6 5.6 0 0 1-3.4-1.4 5.6 5.6 0 0 1-1.5-3.2h-3.3v13.6a2.7 2.7 0 1 1-2.7-2.7c.3 0 .6 0 .8.1V9.3a6 6 0 0 0-.8-.1 6 6 0 1 0 6 6V9a8.9 8.9 0 0 0 4.9 1.5V7.2c-.4 0-.7 0-1-.1z" />
    </svg>
  );
}

const socials = [
  { href: site.socials.instagram, label: "Instagram", Icon: Instagram },
  { href: site.socials.tiktok, label: "TikTok", Icon: TikTokIcon },
  { href: site.socials.facebook, label: "Facebook", Icon: Facebook },
];

export function Footer() {
  return (
    <footer className="relative mt-24 border-t border-white/5 bg-[oklch(0.11_0.015_265)]">
      <div
        className="absolute inset-x-0 top-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, oklch(0.76 0.16 60 / 0.9), oklch(0.86 0.14 78 / 0.9), transparent)" }}
      />
      <div className="container-page py-16">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <Link to="/">
              <Logo size="lg" />
            </Link>
            <p className="mt-5 max-w-sm text-[15px] leading-relaxed text-muted-foreground">
              A Dubai-based brand builder and Amazon growth agency operating across
              21 global marketplaces. From idea to established brand — one team, one plan.
            </p>
            <ul className="mt-6 space-y-2.5 text-[15px] text-muted-foreground">
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 text-primary" />
                <span>{site.address.line1}, {site.address.line2}, {site.address.country}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 text-primary" /> <a href={`mailto:${site.email}`} className="hover:text-foreground">{site.email}</a>
              </li>
              <li className="flex items-center gap-2.5">
                <MessageCircle className="h-4 w-4 text-primary" />
                <a href={whatsappUrl()} target="_blank" rel="noreferrer" className="hover:text-foreground">WhatsApp {site.whatsappDisplay}</a>
              </li>
            </ul>
            <div className="mt-7 flex gap-3">
              {socials.map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="grid h-12 w-12 place-items-center rounded-full border border-white/10 bg-white/5 text-muted-foreground transition-all hover:text-[oklch(0.15_0.02_265)] hover:bg-brand-gradient hover:border-transparent hover:shadow-[0_0_24px_oklch(0.72_0.18_55/0.55)] hover:scale-110"
                >
                  <Icon className="h-[18px] w-[18px]" />
                </a>
              ))}
            </div>
          </div>


          <div className="md:col-span-2">
            <h4 className="eyebrow text-[10px]">Brand Building</h4>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              {trackAServices.map((s) => (
                <li key={s.slug}>
                  <Link to={`/services/${s.slug}`} className="hover:text-foreground">{s.title}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="eyebrow text-[10px]">Amazon Growth</h4>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              {trackBServices.map((s) => (
                <li key={s.slug}>
                  <Link to={`/services/${s.slug}`} className="hover:text-foreground">{s.title}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="eyebrow text-[10px]">Company</h4>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li><Link to="/" className="hover:text-foreground">Home</Link></li>
              <li><Link to="/about" className="hover:text-foreground">About</Link></li>
              <li><Link to="/services" className="hover:text-foreground">Services</Link></li>
              <li><Link to="/marketplaces" className="hover:text-foreground">Marketplaces</Link></li>
              <li><Link to="/blog" className="hover:text-foreground">Blog</Link></li>
              <li><Link to="/contact" className="hover:text-foreground">Contact</Link></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="eyebrow text-[10px]">Top markets</h4>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              {marketplacesByRegion[0].items.slice(0, 3).map((m) => (
                <li key={m.slug}>
                  <Link to={`/marketplaces/${m.slug}`} className="hover:text-foreground">{m.flag} {m.name}</Link>
                </li>
              ))}
              <li><Link to="/marketplaces/amazon-uk" className="hover:text-foreground">🇬🇧 United Kingdom</Link></li>
              <li><Link to="/marketplaces/amazon-us" className="hover:text-foreground">🇺🇸 United States</Link></li>
              <li><Link to="/marketplaces/amazon-de" className="hover:text-foreground">🇩🇪 Germany</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-white/5 pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} {site.legal}. All rights reserved.</p>
          <p>Global Brand Building &amp; Amazon Growth Agency</p>
        </div>
      </div>
    </footer>
  );
}
