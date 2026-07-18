import { Link } from "@tanstack/react-router";
import { Mail, MapPin, MessageCircle, Linkedin, Instagram } from "lucide-react";
import { Logo } from "./Logo";
import { site, whatsappUrl } from "@/data/site";
import { trackAServices, trackBServices } from "@/data/services";
import { marketplacesByRegion } from "@/data/marketplaces";

export function Footer() {
  return (
    <footer className="relative mt-24 border-t border-white/5 bg-[oklch(0.11_0.015_265)]">
      <div className="container-page py-16">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-4">
            <Link to="/">
              <Logo />
            </Link>
            <p className="mt-4 max-w-sm text-sm text-muted-foreground">
              A Dubai-based brand builder and Amazon growth agency operating across
              21 global marketplaces. We build brands that win the digital shelf.
            </p>
            <ul className="mt-6 space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 text-primary" />
                <span>{site.address.line1}, {site.address.line2}, {site.address.country}</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary" /> <a href={`mailto:${site.email}`}>{site.email}</a>
              </li>
              <li className="flex items-center gap-2">
                <MessageCircle className="h-4 w-4 text-primary" />
                <a href={whatsappUrl()} target="_blank" rel="noreferrer">WhatsApp {site.whatsappDisplay}</a>
              </li>
            </ul>
            <div className="mt-6 flex gap-3">
              <a href={site.socials.linkedin} target="_blank" rel="noreferrer" className="grid h-9 w-9 place-items-center rounded-md border border-white/10 text-muted-foreground hover:text-foreground">
                <Linkedin className="h-4 w-4" />
              </a>
              <a href={site.socials.instagram} target="_blank" rel="noreferrer" className="grid h-9 w-9 place-items-center rounded-md border border-white/10 text-muted-foreground hover:text-foreground">
                <Instagram className="h-4 w-4" />
              </a>
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
              <li><Link to="/about" className="hover:text-foreground">About</Link></li>
              <li><Link to="/case-studies" className="hover:text-foreground">Case studies</Link></li>
              <li><Link to="/blog" className="hover:text-foreground">Blog</Link></li>
              <li><Link to="/contact" className="hover:text-foreground">Contact</Link></li>
              <li><Link to="/marketplaces" className="hover:text-foreground">Marketplaces</Link></li>
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
          <p>Dubai · Riyadh · London</p>
        </div>
      </div>
    </footer>
  );
}
