import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  ArrowUpRight,
  Globe2,
  Star,
  TrendingUp,
  Check,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/site/Section";
import { GridBg } from "@/components/site/GridBg";
import { trackAServices, trackBServices } from "@/data/services";
import { marketplacesByRegion, marketplaces } from "@/data/marketplaces";
import { site, WHATSAPP_URL } from "@/data/site";
import heroImg from "@/assets/ecomtik-brand-factory-hero.webp.asset.json";
import processImg from "@/assets/ecomtik-brand-creation-process.webp.asset.json";
import globeImg from "@/assets/ecomtik-global-marketplace-network.webp.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ecomtik — Global Brand Building & Amazon Growth Agency" },
      {
        name: "description",
        content:
          "Ecomtik helps entrepreneurs and businesses create powerful brands, develop products, launch on Amazon, and expand across 21 global marketplaces — from Dubai.",
      },
      { name: "keywords", content: "brand building agency, Amazon growth agency, Amazon private label, product sourcing, brand launch Dubai, global marketplace expansion" },
      { property: "og:title", content: "Ecomtik — Build Brands. Scale Globally." },
      { property: "og:description", content: "Global brand building and Amazon growth agency based in Dubai. From idea to global brand." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

const stats = [
  { k: site.stats.brands, v: "Brands Supported" },
  { k: `${site.stats.marketplaces}`, v: "Global Marketplaces" },
  { k: site.stats.satisfaction, v: "Client Satisfaction" },
  { k: site.stats.rating, v: "Rated Service" },
];

function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-white/5">
        <GridBg />
        <div
          className="absolute inset-x-0 top-0 -z-10 h-[600px]"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 20% 10%, oklch(0.72 0.18 55 / 0.3), transparent 70%), radial-gradient(ellipse 50% 40% at 80% 20%, oklch(0.82 0.17 75 / 0.25), transparent 70%)",
          }}
        />
        <div className="container-page grid gap-12 py-20 md:grid-cols-12 md:py-28 items-center">
          <div className="md:col-span-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-[oklch(0.72_0.18_55)]/30 bg-[oklch(0.72_0.18_55)]/10 px-3 py-1 text-[11px] font-semibold tracking-widest uppercase text-[oklch(0.82_0.17_75)]">
              <span className="h-1.5 w-1.5 rounded-full bg-[oklch(0.72_0.18_55)] shadow-[0_0_10px_oklch(0.72_0.18_55)]" />
              Global Brand Building & Amazon Growth
            </div>
            <h1 className="mt-5 text-balance text-5xl leading-[1.02] font-bold md:text-7xl" style={{ fontFamily: "Sora, ui-sans-serif, system-ui" }}>
              BUILD BRANDS.<br />
              <span className="text-brand-gradient">SCALE GLOBALLY.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
              Ecomtik helps entrepreneurs and businesses create powerful brands, develop products,
              launch on Amazon, and expand across global marketplaces with practical strategy and execution.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg" className="bg-brand-gradient text-[oklch(0.15_0.02_265)] font-semibold hover:opacity-90 hover:scale-105 transition-transform shadow-[0_0_30px_oklch(0.72_0.18_55/0.4)]">
                <a href={WHATSAPP_URL} target="_blank" rel="noreferrer">Book Free Consultation <ArrowRight className="ml-2 h-4 w-4" /></a>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white/15 bg-white/5 hover:bg-white/10">
                <Link to="/services">Explore Services</Link>
              </Button>
            </div>
            <div className="mt-10 flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-[oklch(0.82_0.17_75)] text-[oklch(0.82_0.17_75)]" />
                ))}
              </div>
              <span>Trusted by 500+ brands across 21 marketplaces</span>
            </div>
          </div>

          {/* Hero image */}
          <div className="md:col-span-6">
            <div className="relative rounded-3xl overflow-hidden border border-[oklch(0.72_0.18_55)]/30 bg-black/40 backdrop-blur-sm shadow-[0_25px_80px_-20px_oklch(0.72_0.18_55/0.4)] animate-[float_6s_ease-in-out_infinite]">
              <img
                src={heroImg.url}
                alt="Ecomtik brand factory — futuristic product creation lab with global analytics"
                className="w-full h-auto object-cover"
                loading="eager"
                decoding="async"
              />
              <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-[oklch(0.82_0.17_75)]/20 rounded-3xl" />
            </div>
          </div>
        </div>
        <style>{`@keyframes float { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-10px); } }`}</style>
      </section>

      {/* Stats */}
      <Section className="!py-14">
        <div className="grid gap-8 rounded-2xl border border-white/10 bg-white/[0.02] px-8 py-10 md:grid-cols-4 backdrop-blur-sm">
          {stats.map((s) => (
            <div key={s.v} className="text-center md:text-left">
              <p className="font-display numeral text-5xl text-brand-gradient font-bold">{s.k}</p>
              <p className="mt-2 text-sm text-muted-foreground">{s.v}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Two tracks */}
      <Section
        eyebrow="Two tracks. One team."
        title="A complete brand growth ecosystem."
        intro="We combine brand craft with marketplace performance. Track A builds the brand. Track B scales it on Amazon. Most clients engage both."
      >
        <div className="grid gap-6 md:grid-cols-2">
          <TrackCard
            label="Track A"
            title="Brand Building"
            desc="Logo, identity, packaging, product content, website and brand strategy."
            services={trackAServices}
            href="/services"
          />
          <TrackCard
            label="Track B"
            title="Amazon Growth"
            desc="Sourcing, listing SEO, launch, PPC, DSP, creative and account operations."
            services={trackBServices}
            href="/services"
          />
        </div>
      </Section>

      {/* Brand factory process */}
      <Section
        eyebrow="From idea to global brand"
        title="A brand factory built for global growth."
        intro="Ideas become products, products become brands, and brands become businesses that scale across 21 marketplaces. Here's the assembly line."
      >
        <div className="group relative rounded-3xl overflow-hidden border border-white/10 bg-white/[0.02] shadow-[0_20px_60px_-20px_rgba(0,0,0,0.5)]">
          <img
            src={processImg.url}
            alt="Ecomtik brand creation process — from idea to 3D modeling, packaging, manufacturing and global distribution"
            className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
            decoding="async"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 grid grid-cols-2 gap-4 md:grid-cols-6">
            {[
              "Idea",
              "3D Design",
              "Packaging",
              "Manufacturing",
              "Amazon Listing",
              "Global Launch",
            ].map((step, i) => (
              <div key={step} className="rounded-lg border border-[oklch(0.72_0.18_55)]/30 bg-black/50 backdrop-blur-md px-3 py-2 text-center text-xs font-semibold">
                <span className="text-[oklch(0.82_0.17_75)]">0{i + 1}.</span> {step}
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Marketplaces */}
      <Section
        eyebrow="21 Marketplaces"
        title="Global reach, one operating team."
        intro="From Amazon.ae to Amazon.jp, we manage your brand across five regions with local content, tax and logistics."
      >
        <div className="grid gap-8 lg:grid-cols-5 items-center">
          <div className="lg:col-span-2 relative rounded-3xl overflow-hidden border border-white/10">
            <img
              src={globeImg.url}
              alt="Global marketplace network connecting Amazon storefronts across five regions"
              className="w-full h-auto object-cover"
              loading="lazy"
              decoding="async"
            />
            <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-[oklch(0.82_0.17_75)]/20" />
          </div>
          <div className="lg:col-span-3 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
            {marketplacesByRegion.map((r) => (
              <div key={r.region} className="group rounded-2xl border border-white/10 bg-white/[0.02] p-5 transition-all hover:border-[oklch(0.72_0.18_55)]/40 hover:shadow-[0_0_30px_oklch(0.72_0.18_55/0.15)] hover:-translate-y-1">
                <div className="flex items-center gap-2">
                  <Globe2 className="h-4 w-4 text-[oklch(0.82_0.17_75)]" />
                  <p className="eyebrow text-[10px]">{r.region}</p>
                </div>
                <p className="mt-2 font-display numeral text-2xl font-bold">{r.items.length}</p>
                <ul className="mt-3 space-y-1 text-xs text-muted-foreground">
                  {r.items.slice(0, 3).map((m) => (
                    <li key={m.slug}>
                      <Link to={`/marketplaces/${m.slug}`} className="hover:text-foreground">
                        <span className="mr-1">{m.flag}</span>{m.name}
                      </Link>
                    </li>
                  ))}
                  {r.items.length > 3 && (
                    <li className="text-[11px]">+{r.items.length - 3} more</li>
                  )}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-10 text-center">
          <Button asChild variant="outline" size="lg" className="border-white/15 bg-white/5 hover:bg-white/10">
            <Link to="/marketplaces">Explore all {marketplaces.length} marketplaces <ArrowRight className="ml-2 h-4 w-4" /></Link>
          </Button>
        </div>
      </Section>

      {/* CTA */}
      <Section align="center" className="!pt-0">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">Ready to build your brand?</p>
          <h2 className="mt-4 text-balance text-4xl md:text-5xl" style={{ fontFamily: "Sora, ui-sans-serif, system-ui" }}>Let's build the next category leader.</h2>
          <p className="mt-5 text-muted-foreground">
            Send us your brand and marketplace goals. We'll come back with a practical point of view — no template decks.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button asChild size="lg" className="bg-brand-gradient text-[oklch(0.15_0.02_265)] font-semibold hover:opacity-90 hover:scale-105 transition-transform">
              <a href={WHATSAPP_URL} target="_blank" rel="noreferrer">Book Free Consultation</a>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white/15 bg-white/5 hover:bg-white/10">
              <Link to="/services">See services</Link>
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}

function TrackCard({
  label,
  title,
  desc,
  services,
  href,
}: {
  label: string;
  title: string;
  desc: string;
  services: { slug: string; title: string; short: string }[];
  href: string;
}) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-8 transition-all hover:border-[oklch(0.72_0.18_55)]/40 hover:shadow-[0_0_40px_oklch(0.72_0.18_55/0.15)] hover:-translate-y-1">
      <div className="flex items-start justify-between">
        <div>
          <p className="eyebrow">{label}</p>
          <h3 className="mt-2 text-2xl md:text-3xl font-bold" style={{ fontFamily: "Sora, ui-sans-serif, system-ui" }}>{title}</h3>
        </div>
        <span className="grid h-10 w-10 place-items-center rounded-lg bg-brand-gradient text-[oklch(0.15_0.02_265)] transition-transform group-hover:scale-110 group-hover:rotate-6">
          {label === "Track A" ? <Sparkles className="h-5 w-5" /> : <TrendingUp className="h-5 w-5" />}
        </span>
      </div>
      <p className="mt-3 text-sm text-muted-foreground">{desc}</p>
      <ul className="mt-6 space-y-2">
        {services.map((s) => (
          <li key={s.slug}>
            <Link
              to={`/services/${s.slug}`}
              className="flex items-center justify-between rounded-lg border border-white/5 bg-white/[0.02] px-4 py-3 text-sm transition-all hover:border-[oklch(0.72_0.18_55)]/40 hover:bg-white/[0.05] hover:translate-x-1"
            >
              <span className="flex items-center gap-2">
                <Check className="h-3.5 w-3.5 text-[oklch(0.82_0.17_75)]" />
                {s.title}
              </span>
              <ArrowUpRight className="h-4 w-4 text-muted-foreground" />
            </Link>
          </li>
        ))}
      </ul>
      <div className="mt-6">
        <Link to={href} className="inline-flex items-center gap-1 text-sm font-medium text-brand-gradient">
          Explore {title.toLowerCase()} <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}
