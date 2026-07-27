import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Logo } from "./Logo";
import { trackAServices, trackBServices } from "@/data/services";
import { marketplacesByRegion } from "@/data/marketplaces";
import { WHATSAPP_URL } from "@/data/site";

const primary = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/blog", label: "Blog" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  const [mobileGroup, setMobileGroup] = useState<null | "services" | "marketplaces">(null);

  return (
    <header className="sticky top-0 z-40 border-b border-white/5 bg-background/70 backdrop-blur-xl">
      <div className="container-page flex h-16 items-center justify-between gap-4">
        <Link to="/" className="shrink-0" onClick={() => setOpen(false)}>
          <Logo />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          <HeaderLink to="/">Home</HeaderLink>

          {/* Services mega */}
          <MegaTrigger label="Services">
            <div className="grid gap-8 p-8 md:grid-cols-2">
              <MegaColumn
                eyebrow="Track A"
                title="Brand Building"
                items={trackAServices.map((s) => ({
                  to: `/services/${s.slug}`,
                  title: s.title,
                  desc: s.short,
                  Icon: s.icon,
                }))}
              />
              <MegaColumn
                eyebrow="Track B"
                title="Amazon Growth"
                items={trackBServices.map((s) => ({
                  to: `/services/${s.slug}`,
                  title: s.title,
                  desc: s.short,
                  Icon: s.icon,
                }))}
              />
            </div>
            <div className="border-t border-white/5 bg-white/[0.02] px-8 py-4 text-sm">
              <Link to="/services" className="text-brand-gradient font-medium">
                See all services →
              </Link>
            </div>
          </MegaTrigger>

          {/* Marketplaces mega */}
          <MegaTrigger label="Marketplaces" wide>
            <div className="grid gap-6 p-8 md:grid-cols-5">
              {marketplacesByRegion.map((r) => (
                <div key={r.region}>
                  <p className="eyebrow text-[10px]">{r.region}</p>
                  <ul className="mt-3 space-y-1.5">
                    {r.items.map((m) => (
                      <li key={m.slug}>
                        <Link
                          to={`/marketplaces/${m.slug}`}
                          className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
                        >
                          <span>{m.flag}</span>
                          <span>{m.name}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="border-t border-white/5 bg-white/[0.02] px-8 py-4 text-sm">
              <Link to="/marketplaces" className="text-brand-gradient font-medium">
                Explore all 21 marketplaces →
              </Link>
            </div>
          </MegaTrigger>

          <HeaderLink to="/blog">Blog</HeaderLink>
          <HeaderLink to="/about">About</HeaderLink>
          <HeaderLink to="/contact">Contact</HeaderLink>
        </nav>

        <div className="hidden lg:block">
          <Button asChild size="sm" className="bg-brand-gradient text-[oklch(0.15_0.02_265)] font-semibold hover:opacity-90 hover:scale-105 transition-transform">
            <a href={WHATSAPP_URL} target="_blank" rel="noreferrer">Book Free Consultation</a>
          </Button>
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          className="lg:hidden text-foreground"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-white/5 bg-background lg:hidden">
          <nav className="container-page flex flex-col gap-1 py-4">
            {primary.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2.5 text-sm text-muted-foreground hover:bg-white/5 hover:text-foreground"
                activeProps={{ className: "bg-white/5 text-foreground" }}
                activeOptions={{ exact: item.to === "/" }}
              >
                {item.label}
              </Link>
            ))}

            <MobileGroup
              open={mobileGroup === "services"}
              onToggle={() => setMobileGroup(mobileGroup === "services" ? null : "services")}
              label="Services"
            >
              <p className="mt-1 px-3 pt-2 text-[10px] uppercase tracking-widest text-muted-foreground">Track A</p>
              {trackAServices.map((s) => (
                <Link key={s.slug} to={`/services/${s.slug}`} onClick={() => setOpen(false)} className="block rounded-md px-3 py-2 text-sm text-muted-foreground hover:bg-white/5 hover:text-foreground">
                  {s.title}
                </Link>
              ))}
              <p className="mt-1 px-3 pt-2 text-[10px] uppercase tracking-widest text-muted-foreground">Track B</p>
              {trackBServices.map((s) => (
                <Link key={s.slug} to={`/services/${s.slug}`} onClick={() => setOpen(false)} className="block rounded-md px-3 py-2 text-sm text-muted-foreground hover:bg-white/5 hover:text-foreground">
                  {s.title}
                </Link>
              ))}
            </MobileGroup>

            <MobileGroup
              open={mobileGroup === "marketplaces"}
              onToggle={() => setMobileGroup(mobileGroup === "marketplaces" ? null : "marketplaces")}
              label="Marketplaces"
            >
              {marketplacesByRegion.map((r) => (
                <div key={r.region} className="pt-1">
                  <p className="px-3 pt-2 text-[10px] uppercase tracking-widest text-muted-foreground">{r.region}</p>
                  {r.items.map((m) => (
                    <Link key={m.slug} to={`/marketplaces/${m.slug}`} onClick={() => setOpen(false)} className="block rounded-md px-3 py-2 text-sm text-muted-foreground hover:bg-white/5 hover:text-foreground">
                      <span className="mr-2">{m.flag}</span>{m.name}
                    </Link>
                  ))}
                </div>
              ))}
            </MobileGroup>

            <Button asChild className="mt-3 bg-brand-gradient text-[oklch(0.15_0.02_265)] font-semibold">
              <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" onClick={() => setOpen(false)}>Book Free Consultation</a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}

function HeaderLink({ to, children }: { to: string; children: React.ReactNode }) {
  return (
    <Link
      to={to}
      className="rounded-full px-4 py-2 text-sm font-semibold text-muted-foreground transition-all duration-300 hover:text-foreground hover:bg-[oklch(0.72_0.18_55)]/10 hover:ring-1 hover:ring-[oklch(0.72_0.18_55)]/30 hover:shadow-[0_0_18px_oklch(0.72_0.18_55/0.2)] hover:backdrop-blur-sm"
      activeProps={{
        className:
          "bg-brand-gradient !text-[oklch(0.15_0.02_265)] shadow-[0_0_22px_oklch(0.72_0.18_55/0.55)] hover:!bg-brand-gradient hover:!text-[oklch(0.15_0.02_265)]",
      }}
      activeOptions={{ exact: to === "/" }}
      style={{ fontFamily: "Sora, ui-sans-serif, system-ui" }}
    >
      {children}
    </Link>
  );
}

function MegaTrigger({ label, children, wide }: { label: string; children: React.ReactNode; wide?: boolean }) {
  return (
    <div className="group relative">
      <button
        type="button"
        className="inline-flex items-center gap-1 rounded-full px-4 py-2 text-sm font-semibold text-muted-foreground transition-all duration-300 group-hover:text-foreground group-hover:bg-[oklch(0.72_0.18_55)]/10 group-hover:ring-1 group-hover:ring-[oklch(0.72_0.18_55)]/30 group-hover:shadow-[0_0_18px_oklch(0.72_0.18_55/0.2)]"
        style={{ fontFamily: "Sora, ui-sans-serif, system-ui" }}
      >
        {label}
        <ChevronDown className="h-3.5 w-3.5 transition-transform group-hover:rotate-180" />
      </button>
      <div
        className={`invisible absolute left-1/2 top-full z-50 -translate-x-1/2 pt-2 opacity-0 transition-all group-hover:visible group-hover:opacity-100 ${wide ? "w-[min(90vw,1100px)]" : "w-[min(90vw,720px)]"}`}
      >
        <div className="overflow-hidden rounded-2xl border border-white/10 bg-[oklch(0.16_0.018_265)] shadow-[0_30px_80px_-30px_rgba(0,0,0,0.8)]">
          {children}
        </div>
      </div>
    </div>
  );
}

function MegaColumn({
  eyebrow,
  title,
  items,
}: {
  eyebrow: string;
  title: string;
  items: { to: string; title: string; desc: string; Icon: React.ComponentType<{ className?: string }> }[];
}) {
  return (
    <div>
      <p className="eyebrow text-[10px]">{eyebrow}</p>
      <h3 className="mt-1 font-display text-base font-semibold">{title}</h3>
      <ul className="mt-4 space-y-1">
        {items.map((i) => (
          <li key={i.to}>
            <Link
              to={i.to}
              className="group/link flex items-start gap-3 rounded-lg p-2.5 transition-colors hover:bg-white/5"
            >
              <span className="mt-0.5 grid h-8 w-8 place-items-center rounded-md bg-brand-gradient text-[oklch(0.15_0.02_265)]">
                <i.Icon className="h-4 w-4" />
              </span>
              <span className="min-w-0">
                <span className="block text-sm font-medium text-foreground">{i.title}</span>
                <span className="block text-xs text-muted-foreground">{i.desc}</span>
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function MobileGroup({
  open,
  onToggle,
  label,
  children,
}: {
  open: boolean;
  onToggle: () => void;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-md">
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-center justify-between rounded-md px-3 py-2.5 text-sm text-muted-foreground hover:bg-white/5 hover:text-foreground"
      >
        {label}
        <ChevronDown className={`h-4 w-4 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && <div className="pl-2">{children}</div>}
    </div>
  );
}
