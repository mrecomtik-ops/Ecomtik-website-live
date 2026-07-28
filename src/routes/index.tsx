import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  ArrowUpRight,
  Globe2,
  Sparkles,
  Lightbulb,
  Palette,
  Hammer,
  Rocket,
  BarChart3,
  User,
  ShoppingBag,
  Building2,
  Globe,
  Monitor,
  Target,
  Palette as PaletteIcon,
  ShieldCheck,
  TrendingUp,
  MessageSquare,
  Compass,
  Wrench,
  Handshake,
  Layers,
  Factory,
} from "lucide-react";
import { Button } from "@/components/ui/button";

import { GridBg } from "@/components/site/GridBg";
import { CountUp } from "@/components/site/CountUp";
import { trackAServices, trackBServices } from "@/data/services";
import { marketplacesByRegion, marketplaces } from "@/data/marketplaces";
import heroImg from "@/assets/ecomtik-brand-factory-hero.webp.asset.json";
import globeImg from "@/assets/ecomtik-global-marketplace-network.webp.asset.json";
import demoMockup from "@/assets/ecomtik-demo-website-mockup.webp";

const FREE_DEMO_WHATSAPP =
  "https://wa.me/971561677408?text=Hello%20Ecomtik%2C%20I%20would%20like%20to%20request%20a%20free%20demo%20website%20for%20my%20business.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ecomtik — Global Brand Building & Amazon Growth Agency" },
      {
        name: "description",
        content:
          "Ecomtik helps entrepreneurs and businesses create powerful brands, develop products, launch on Amazon, and expand across 21 Amazon marketplaces — from Dubai.",
      },
      { name: "keywords", content: "brand building agency, Amazon growth agency, Amazon private label, product sourcing, brand launch Dubai, global marketplace expansion" },
      { property: "og:title", content: "Ecomtik — Build Brands. Scale Globally." },
      { property: "og:description", content: "Global brand building and Amazon growth agency based in Dubai. From idea to global brand." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

const stats: { value: number; suffix: string; label: string; sub: string; Icon: typeof Globe2 }[] = [
  { value: 21, suffix: "", label: "Global Marketplaces", sub: "Amazon + regional", Icon: Globe2 },
  { value: 11, suffix: "", label: "Specialized Services", sub: "Brand & Amazon", Icon: Layers },
  { value: 5, suffix: "", label: "Brand-Building Stages", sub: "One assembly line", Icon: Factory },
  { value: 1, suffix: "", label: "End-to-End Partner", sub: "One accountable team", Icon: Handshake },
];

const factoryStages = [
  { n: "01", title: "Discover", desc: "Category, customer and margin analysis to lock the opportunity.", Icon: Lightbulb },
  { n: "02", title: "Design", desc: "Brand identity, packaging and product content built to convert.", Icon: Palette },
  { n: "03", title: "Build", desc: "Sourcing, sampling and production with QC at every step.", Icon: Hammer },
  { n: "04", title: "Launch", desc: "Listing, PPC and creative that hit rank targets in 12 weeks.", Icon: Rocket },
  { n: "05", title: "Scale", desc: "New marketplaces, DTC and creator programs to compound growth.", Icon: BarChart3 },
];

const audiences = [
  { title: "First-Time Entrepreneurs", desc: "You have a product idea and need a partner who can build the brand and get it live on Amazon.", Icon: User, featured: true },
  { title: "Amazon Sellers", desc: "You already sell on Amazon and want to fix listings, PPC and creative to unlock growth.", Icon: ShoppingBag },
  { title: "Existing Businesses", desc: "You run an offline or DTC business and want to add Amazon and marketplaces as a channel.", Icon: Building2 },
  { title: "Global Expansion Brands", desc: "You're established in one market and ready to scale across the GCC, Europe, US and Asia.", Icon: Globe },
];

const values = [
  { title: "Strategic Thinking", desc: "Every decision starts with category, margin and customer — not templates.", Icon: Compass },
  { title: "Quality Execution", desc: "Design, sourcing and listings shipped to a standard we'd sign our own name to.", Icon: Wrench },
  { title: "Transparent Process", desc: "You see the plan, the numbers and the tradeoffs. No black boxes.", Icon: ShieldCheck },
  { title: "Long-Term Partnership", desc: "We build with you across quarters and marketplaces, not one-off deliverables.", Icon: Handshake },
];

const regionAnchors: Record<string, string> = {
  "GCC & MENA": "gcc-mena",
  "Europe": "europe",
  "North America": "north-america",
  "Asia Pacific": "asia-pacific",
  "Latin America": "latin-america",
};

function HomePage() {
  return (
    <>
      {/* ───────── HERO ───────── */}
      <section className="relative overflow-hidden border-b border-white/5 section-bg-1">
        <GridBg />
        <div
          className="absolute inset-x-0 top-0 -z-10 h-[600px]"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 20% 10%, oklch(0.72 0.18 55 / 0.28), transparent 70%), radial-gradient(ellipse 50% 40% at 80% 20%, oklch(0.82 0.17 75 / 0.22), transparent 70%)",
          }}
        />
        <div className="container-page grid gap-12 py-20 md:grid-cols-12 md:py-28 items-center">
          <div className="md:col-span-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-[oklch(0.72_0.18_55)]/30 bg-[oklch(0.72_0.18_55)]/10 px-3 py-1 text-[11px] font-semibold tracking-widest uppercase text-[oklch(0.82_0.17_75)]">
              <span className="h-1.5 w-1.5 rounded-full bg-[oklch(0.72_0.18_55)] shadow-[0_0_10px_oklch(0.72_0.18_55)]" />
              Global Brand Building &amp; Amazon Growth
            </div>
            <h1 className="mt-5 text-balance text-5xl leading-[1.02] font-bold md:text-7xl" style={{ fontFamily: "Sora, ui-sans-serif, system-ui" }}>
              BUILD BRANDS.<br />
              <span className="text-brand-gradient">SCALE GLOBALLY.</span>
            </h1>
            <p className="mt-6 max-w-xl text-[19px] leading-[1.65] text-muted-foreground">
              Ecomtik helps entrepreneurs and businesses create powerful brands, develop products,
              launch on Amazon, and expand across 21 Amazon marketplaces with practical strategy and execution.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg" className="bg-brand-gradient text-[oklch(0.15_0.02_265)] font-semibold text-[16px] px-7 py-6 hover:opacity-90 hover:scale-105 transition-transform shadow-[0_0_30px_oklch(0.72_0.18_55/0.4)]">
                <Link to="/contact">Book Free Consultation <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white/15 bg-white/5 text-[16px] px-7 py-6 hover:bg-white/10">
                <Link to="/services">Explore Services</Link>
              </Button>
            </div>
            <p className="mt-8 text-[15px] text-muted-foreground/95">
              Practical guidance. Honest consultation. Built in Dubai for global brands.
            </p>
          </div>

          {/* Hero visual — factory HUD */}
          <div className="md:col-span-6">
            <div className="relative">
              {/* orange energy rings */}
              <div className="pointer-events-none absolute -inset-6 -z-10">
                <div className="absolute inset-0 rounded-[2rem] border border-[oklch(0.72_0.18_55)]/15" />
                <div className="absolute inset-4 rounded-[1.75rem] border border-[oklch(0.72_0.18_55)]/10" />
                <div className="absolute -top-8 left-1/2 h-40 w-40 -translate-x-1/2 rounded-full blur-3xl" style={{ background: "radial-gradient(circle, oklch(0.72 0.18 55 / 0.55), transparent 70%)" }} />
              </div>

              <div className="relative rounded-3xl overflow-hidden border border-[oklch(0.72_0.18_55)]/30 bg-black/40 backdrop-blur-sm shadow-[0_25px_80px_-20px_oklch(0.72_0.18_55/0.45)] animate-float">
                <img
                  src={heroImg.url}
                  alt="Ecomtik brand factory — futuristic product creation lab with global analytics"
                  className="w-full h-auto object-cover"
                  loading="eager"
                  decoding="async"
                />
                {/* HUD corner brackets */}
                <span className="pointer-events-none absolute left-3 top-3 h-5 w-5 border-l-2 border-t-2 border-[oklch(0.82_0.17_75)]/70" />
                <span className="pointer-events-none absolute right-3 top-3 h-5 w-5 border-r-2 border-t-2 border-[oklch(0.82_0.17_75)]/70" />
                <span className="pointer-events-none absolute left-3 bottom-3 h-5 w-5 border-l-2 border-b-2 border-[oklch(0.82_0.17_75)]/70" />
                <span className="pointer-events-none absolute right-3 bottom-3 h-5 w-5 border-r-2 border-b-2 border-[oklch(0.82_0.17_75)]/70" />
                {/* light sweep */}
                <span className="pointer-events-none absolute inset-y-0 -left-1/3 w-1/3 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-sweep" />
                <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-[oklch(0.82_0.17_75)]/20 rounded-3xl" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ───────── FACTUAL STATS ───────── */}
      <section className="relative section-bg-2 border-b border-white/5">
        <div className="container-page py-20 md:py-24">
          <div className="mb-10 flex items-end justify-between gap-6 flex-wrap">
            <div>
              <p className="eyebrow">Ecomtik at a glance</p>
              <h2 className="mt-3 text-3xl md:text-4xl font-bold" style={{ fontFamily: "Sora" }}>
                One team. One plan. <span className="text-brand-gradient">Global reach.</span>
              </h2>
            </div>
            <p className="max-w-md text-[15px] text-muted-foreground">
              A practical service footprint — designed to take an idea from category research to a live, scaling brand across marketplaces.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-6 backdrop-blur-sm transition-all hover:border-[oklch(0.72_0.18_55)]/40 hover:shadow-[0_0_30px_oklch(0.72_0.18_55/0.18)]">
                <div className="flex items-center justify-between">
                  <span className="grid h-10 w-10 place-items-center rounded-lg bg-[oklch(0.72_0.18_55)]/12 text-[oklch(0.82_0.17_75)] ring-1 ring-[oklch(0.72_0.18_55)]/30">
                    <s.Icon className="h-5 w-5" />
                  </span>
                  <span className="font-mono text-[10px] text-muted-foreground/70">/{String(stats.indexOf(s) + 1).padStart(2, "0")}</span>
                </div>
                <p className="mt-6 numeral text-6xl font-bold text-brand-gradient">
                  <CountUp value={s.value} suffix={s.suffix} />
                </p>
                <div className="mt-1 h-px bg-gradient-to-r from-[oklch(0.72_0.18_55)]/50 via-[oklch(0.82_0.17_75)]/30 to-transparent" />
                <p className="mt-3 text-[15px] font-semibold text-foreground">{s.label}</p>
                <p className="text-[13px] text-muted-foreground">{s.sub}</p>
                <span className="pointer-events-none absolute inset-y-0 -left-1/3 w-1/3 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-sweep" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────── FREE DEMO WEBSITE ───────── */}
      <section className="relative section-bg-1 border-b border-white/5">
        <div className="container-page py-20 md:py-24">
          <div className="relative overflow-hidden rounded-3xl border border-[oklch(0.72_0.18_55)]/25 bg-[oklch(0.13_0.02_265)]/70 backdrop-blur-xl p-8 md:p-14 shadow-[0_30px_80px_-30px_oklch(0.72_0.18_55/0.4)]">
            <div className="pointer-events-none absolute inset-0 -z-10 blueprint-bg opacity-40" />
            <div className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full" style={{ background: "radial-gradient(circle, oklch(0.72 0.18 55 / 0.4), transparent 70%)" }} />
            <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full" style={{ background: "radial-gradient(circle, oklch(0.82 0.17 75 / 0.28), transparent 70%)" }} />
            <span className="pointer-events-none absolute left-4 top-4 h-6 w-6 border-l-2 border-t-2 border-[oklch(0.82_0.17_75)]/60" />
            <span className="pointer-events-none absolute right-4 top-4 h-6 w-6 border-r-2 border-t-2 border-[oklch(0.82_0.17_75)]/60" />
            <span className="pointer-events-none absolute left-4 bottom-4 h-6 w-6 border-l-2 border-b-2 border-[oklch(0.82_0.17_75)]/60" />
            <span className="pointer-events-none absolute right-4 bottom-4 h-6 w-6 border-r-2 border-b-2 border-[oklch(0.82_0.17_75)]/60" />

            <div className="relative grid gap-12 md:grid-cols-12 md:items-center">
              <div className="md:col-span-7">
                <div className="inline-flex items-center gap-2 rounded-full border border-[oklch(0.72_0.18_55)]/30 bg-[oklch(0.72_0.18_55)]/10 px-3 py-1 text-[12px] font-semibold tracking-widest uppercase text-[oklch(0.82_0.17_75)]">
                  <Monitor className="h-3.5 w-3.5" />
                  Free Website Demo
                </div>
                <h2 className="mt-5 text-balance text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.1]" style={{ fontFamily: "Sora" }}>
                  See Your Business Online<br />
                  <span className="text-brand-gradient">Before You Commit.</span>
                </h2>
                <p className="mt-6 text-[18px] leading-[1.7] text-muted-foreground">
                  Share your business requirements with Ecomtik, and we will create a free initial website
                  demo concept tailored to your brand, industry and goals. Review the design direction before
                  deciding whether to continue with the complete website.
                </p>
                <ul className="mt-7 space-y-3.5 text-[17px]">
                  {[
                    { Icon: Target, text: "Tailored to your business requirements" },
                    { Icon: PaletteIcon, text: "Designed around your brand and target audience" },
                    { Icon: ShieldCheck, text: "No obligation after reviewing the initial demo" },
                  ].map(({ Icon, text }) => (
                    <li key={text} className="flex items-start gap-3">
                      <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-brand-gradient text-[oklch(0.15_0.02_265)]">
                        <Icon className="h-[18px] w-[18px]" />
                      </span>
                      <span className="pt-1.5 text-foreground/95">{text}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-9 flex flex-wrap gap-3">
                  <Button asChild size="lg" className="bg-brand-gradient text-[oklch(0.15_0.02_265)] font-semibold text-[16px] px-7 py-6 hover:opacity-90 hover:scale-105 transition-transform shadow-[0_0_30px_oklch(0.72_0.18_55/0.4)]">
                    <a href={FREE_DEMO_WHATSAPP} target="_blank" rel="noreferrer">
                      Request Your Free Demo Website <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="border-white/15 bg-white/5 text-[16px] px-7 py-6 hover:bg-white/10">
                    <a href={FREE_DEMO_WHATSAPP} target="_blank" rel="noreferrer">
                      <MessageSquare className="mr-2 h-4 w-4" /> Discuss Your Website
                    </a>
                  </Button>
                </div>
                <p className="mt-5 rounded-lg border border-[oklch(0.72_0.18_55)]/25 bg-[oklch(0.72_0.18_55)]/8 px-4 py-3 text-[14px] leading-relaxed text-foreground/85">
                  <strong className="text-[oklch(0.85_0.16_75)]">Note:</strong> This is a free initial demo concept, not a complete free website.
                </p>
              </div>

              <div className="md:col-span-5 relative">
                {/* orange platform */}
                <div className="pointer-events-none absolute -bottom-6 left-1/2 h-8 w-4/5 -translate-x-1/2 rounded-full blur-2xl" style={{ background: "radial-gradient(ellipse, oklch(0.72 0.18 55 / 0.55), transparent 70%)" }} />
                <div className="relative rounded-3xl overflow-hidden border border-[oklch(0.72_0.18_55)]/30 bg-black/40 shadow-[0_25px_80px_-20px_oklch(0.72_0.18_55/0.45)] animate-float">
                  <img
                    src={demoMockup}
                    alt="Ecomtik free demo website concept — dark themed premium website mockup on a laptop"
                    className="w-full h-auto object-cover"
                    loading="lazy"
                    decoding="async"
                    width={1024}
                    height={1024}
                  />
                  <span className="pointer-events-none absolute inset-y-0 -left-1/3 w-1/3 bg-gradient-to-r from-transparent via-white/15 to-transparent animate-sweep" />
                  <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-[oklch(0.82_0.17_75)]/25 rounded-3xl" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ───────── ECOSYSTEM / TWO TRACKS ───────── */}
      <section className="relative section-bg-3 border-b border-white/5">
        <div className="container-page py-20 md:py-24">
          <div className="max-w-2xl">
            <p className="eyebrow">Two tracks. One team.</p>
            <h2 className="mt-3 text-3xl md:text-5xl font-bold" style={{ fontFamily: "Sora" }}>
              A complete brand growth <span className="text-brand-gradient">ecosystem.</span>
            </h2>
            <p className="mt-5 text-[17px] text-muted-foreground">
              Two connected production tracks powered by one accountable team. Track A builds the brand.
              Track B scales it on Amazon. Every module plugs into the next.
            </p>
          </div>
          <div className="mt-14 grid gap-6 lg:grid-cols-2">
            <FactoryTrack
              label="Track A · Brand Building"
              title="Brand Building"
              desc="Logo, website, packaging, digital marketing and UAE company setup."
              services={trackAServices}
              accent="A"
            />
            <FactoryTrack
              label="Track B · Amazon Growth"
              title="Amazon Growth"
              desc="Sourcing, private label, wholesale, brand registry and brand launch."
              services={trackBServices}
              accent="B"
            />
          </div>
        </div>
      </section>

      {/* ───────── FACTORY PIPELINE ───────── */}
      <section className="relative section-bg-2 border-b border-white/5 overflow-hidden">
        <div className="pointer-events-none absolute inset-0 blueprint-bg opacity-40" />
        <div className="container-page py-20 md:py-24 relative">
          <div className="max-w-2xl">
            <p className="eyebrow">Ecomtik Brand Factory</p>
            <h2 className="mt-3 text-3xl md:text-5xl font-bold" style={{ fontFamily: "Sora" }}>
              From idea to global brand in <span className="text-brand-gradient">five stages.</span>
            </h2>
            <p className="mt-5 text-[17px] text-muted-foreground">
              One assembly line, five stages, one accountable team. Every brand we build moves through the same disciplined process.
            </p>
          </div>

          {/* pipeline */}
          <div className="mt-16 relative">
            {/* connecting rail — desktop */}
            <div className="hidden lg:block absolute top-16 left-[6%] right-[6%] h-px" style={{ background: "linear-gradient(90deg, transparent, oklch(0.72 0.18 55 / 0.55), oklch(0.82 0.17 75 / 0.55), transparent)" }}>
              <span className="absolute -top-1 h-3 w-24 rounded-full blur-md animate-pulse-x" style={{ background: "linear-gradient(90deg, transparent, oklch(0.82 0.17 75 / 0.9), transparent)" }} />
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-5">
              {factoryStages.map((s, i) => (
                <div
                  key={s.n}
                  className="group relative rounded-2xl border border-white/10 bg-white/[0.02] p-6 backdrop-blur-sm transition-all hover:border-[oklch(0.72_0.18_55)]/45 hover:shadow-[0_0_30px_oklch(0.72_0.18_55/0.22)] hover:-translate-y-1"
                >
                  <div className="flex items-center justify-between">
                    <span className="grid h-12 w-12 place-items-center rounded-xl bg-brand-gradient text-[oklch(0.15_0.02_265)] transition-transform group-hover:scale-110 group-hover:rotate-6">
                      <s.Icon className="h-5 w-5" />
                    </span>
                    <span className="font-mono text-xs text-[oklch(0.82_0.17_75)]">{s.n}</span>
                  </div>
                  <h3 className="mt-5 text-lg font-semibold" style={{ fontFamily: "Sora" }}>{s.title}</h3>
                  <p className="mt-2 text-[14px] text-muted-foreground leading-relaxed">{s.desc}</p>
                  {i < factoryStages.length - 1 && (
                    <span className="hidden lg:block absolute -right-3 top-16 h-2 w-2 rounded-full bg-[oklch(0.82_0.17_75)] shadow-[0_0_12px_oklch(0.82_0.17_75)]" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ───────── WHO WE HELP · BENTO ───────── */}
      <section className="relative section-bg-1 border-b border-white/5">
        <div className="container-page py-20 md:py-24">
          <div className="max-w-2xl">
            <p className="eyebrow">Who we help</p>
            <h2 className="mt-3 text-3xl md:text-5xl font-bold" style={{ fontFamily: "Sora" }}>
              Built for founders, sellers <span className="text-brand-gradient">and expansion teams.</span>
            </h2>
            <p className="mt-5 text-[17px] text-muted-foreground">
              Whether you're starting from a blank page or already trading in five markets, we plug into where you are.
            </p>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3 lg:grid-rows-2 lg:auto-rows-fr">
            {/* featured */}
            <div className="group relative overflow-hidden rounded-2xl border border-[oklch(0.72_0.18_55)]/30 bg-gradient-to-br from-[oklch(0.72_0.18_55)]/10 via-[oklch(0.13_0.02_265)]/70 to-[oklch(0.13_0.02_265)]/40 p-8 md:col-span-2 md:row-span-2 lg:col-span-2 lg:row-span-2 transition-all hover:border-[oklch(0.72_0.18_55)]/60">
              <div className="pointer-events-none absolute -top-20 -right-20 h-64 w-64 rounded-full" style={{ background: "radial-gradient(circle, oklch(0.72 0.18 55 / 0.35), transparent 70%)" }} />
              {/* Subtle futuristic brand-building visual: orbital rings + floating brand tokens */}
              <div className="pointer-events-none absolute inset-0 opacity-70">
                <div className="absolute right-[8%] bottom-[10%] h-56 w-56">
                  <div className="absolute inset-0 rounded-full border border-[oklch(0.72_0.18_55)]/25 animate-orbit-slow" />
                  <div className="absolute inset-6 rounded-full border border-[oklch(0.82_0.17_75)]/20" />
                  <div className="absolute inset-12 rounded-full border border-[oklch(0.72_0.18_55)]/15" />
                  <span className="absolute left-1/2 top-0 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[oklch(0.82_0.17_75)] shadow-[0_0_14px_oklch(0.82_0.17_75)]" />
                  <span className="absolute right-0 top-1/2 h-2 w-2 translate-x-1/2 -translate-y-1/2 rounded-full bg-[oklch(0.72_0.18_55)] shadow-[0_0_12px_oklch(0.72_0.18_55)]" />
                  <span className="absolute left-2 bottom-6 h-1.5 w-1.5 rounded-full bg-[oklch(0.82_0.17_75)] shadow-[0_0_10px_oklch(0.82_0.17_75)]" />
                  <div className="absolute inset-0 grid place-items-center">
                    <div className="grid h-16 w-16 place-items-center rounded-2xl bg-[oklch(0.13_0.02_265)]/80 backdrop-blur-sm border border-[oklch(0.72_0.18_55)]/40 shadow-[0_0_30px_oklch(0.72_0.18_55/0.4)]">
                      <Sparkles className="h-7 w-7 text-[oklch(0.82_0.17_75)]" />
                    </div>
                  </div>
                </div>
                <div className="absolute inset-0 blueprint-bg opacity-40" />
              </div>
              <span className="relative grid h-14 w-14 place-items-center rounded-2xl bg-brand-gradient text-[oklch(0.15_0.02_265)] transition-transform group-hover:scale-110">
                <User className="h-6 w-6" />
              </span>
              <h3 className="relative mt-6 text-2xl md:text-3xl font-bold" style={{ fontFamily: "Sora" }}>First-Time Entrepreneurs</h3>
              <p className="relative mt-3 max-w-md text-[16px] leading-relaxed text-muted-foreground">
                You have a product idea and need a partner who can build the brand, source the product and get it live on Amazon — without losing months in guesswork.
              </p>
              <div className="relative mt-6 flex flex-wrap gap-2 text-xs">
                {["Brand identity", "Product sourcing", "Amazon launch", "PPC"].map((t) => (
                  <span key={t} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-muted-foreground">{t}</span>
                ))}
              </div>
            </div>

            {audiences.slice(1).map((a) => (
              <div key={a.title} className="group relative rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition-all hover:border-[oklch(0.72_0.18_55)]/40 hover:shadow-[0_0_30px_oklch(0.72_0.18_55/0.2)] hover:-translate-y-1">
                <span className="grid h-11 w-11 place-items-center rounded-lg bg-brand-gradient text-[oklch(0.15_0.02_265)] transition-transform group-hover:scale-110 group-hover:rotate-6">
                  <a.Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-5 text-lg font-semibold" style={{ fontFamily: "Sora" }}>{a.title}</h3>
                <p className="mt-2 text-[15px] text-muted-foreground leading-relaxed">{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────── MARKETPLACES ───────── */}
      <section className="relative section-bg-3 border-b border-white/5">
        <div className="container-page py-20 md:py-24">
          <div className="max-w-2xl">
            <p className="eyebrow">21 Amazon Marketplaces</p>
            <h2 className="mt-3 text-3xl md:text-5xl font-bold" style={{ fontFamily: "Sora" }}>
              Global reach, one <span className="text-brand-gradient">operating team.</span>
            </h2>
            <p className="mt-5 text-[17px] text-muted-foreground">
              From Amazon.ae to Amazon.jp, we manage your brand across global marketplaces with local content, tax and logistics.
            </p>
          </div>

          <div className="mt-14 grid gap-8 lg:grid-cols-5 items-center">
            <div className="lg:col-span-2 relative">
              <div className="pointer-events-none absolute inset-0 -m-6 rounded-full animate-orbit-slow" aria-hidden>
                <span className="absolute left-1/2 top-0 h-2 w-2 -translate-x-1/2 rounded-full bg-[oklch(0.82_0.17_75)] shadow-[0_0_12px_oklch(0.82_0.17_75)]" />
                <span className="absolute right-0 top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-[oklch(0.72_0.18_55)] shadow-[0_0_12px_oklch(0.72_0.18_55)]" />
                <span className="absolute left-0 bottom-1/2 h-2 w-2 rounded-full bg-[oklch(0.82_0.17_75)] shadow-[0_0_12px_oklch(0.82_0.17_75)]" />
              </div>
              <div className="relative rounded-3xl overflow-hidden border border-[oklch(0.72_0.18_55)]/30 bg-black/40 shadow-[0_25px_80px_-20px_oklch(0.72_0.18_55/0.35)]">
                <img
                  src={globeImg.url}
                  alt="Global marketplace network connecting Amazon storefronts worldwide"
                  className="w-full h-auto object-cover"
                  loading="lazy"
                  decoding="async"
                />
                <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-[oklch(0.82_0.17_75)]/20" />
              </div>
              <div className="mt-6 text-center lg:text-left">
                <p className="numeral text-5xl font-bold text-brand-gradient">21</p>
                <p className="text-sm text-muted-foreground">Global Amazon marketplaces managed by one operating team</p>
              </div>
            </div>
            <div className="lg:col-span-3 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {marketplacesByRegion.map((r) => (
                <Link
                  key={r.region}
                  to="/marketplaces"
                  hash={regionAnchors[r.region]}
                  className="group rounded-2xl border border-white/10 bg-white/[0.02] p-5 transition-all hover:border-[oklch(0.72_0.18_55)]/45 hover:shadow-[0_0_30px_oklch(0.72_0.18_55/0.2)] hover:-translate-y-1"
                >
                  <div className="flex items-center gap-2">
                    <Globe2 className="h-4 w-4 text-[oklch(0.82_0.17_75)] transition-transform group-hover:rotate-12" />
                    <p className="eyebrow text-[11px]">{r.region}</p>
                  </div>
                  <p className="mt-2 numeral text-3xl font-bold">{r.items.length}</p>
                  <ul className="mt-3 space-y-1.5 text-[14px] text-muted-foreground">
                    {r.items.slice(0, 3).map((m) => (
                      <li key={m.slug}>
                        <span className="mr-1">{m.flag}</span>{m.name}
                      </li>
                    ))}
                    {r.items.length > 3 && (
                      <li className="text-[13px]">+{r.items.length - 3} more</li>
                    )}
                  </ul>
                </Link>
              ))}
            </div>
          </div>
          <div className="mt-10 text-center">
            <Button asChild variant="outline" size="lg" className="border-white/15 bg-white/5 text-[16px] px-7 py-6 hover:bg-white/10">
              <Link to="/marketplaces">Explore all {marketplaces.length} Amazon marketplaces <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ───────── HOW WE WORK · VALUES ───────── */}
      <section className="relative section-bg-1 border-b border-white/5">
        <div className="container-page py-20 md:py-24">
          <div className="max-w-2xl">
            <p className="eyebrow">How we work</p>
            <h2 className="mt-3 text-3xl md:text-5xl font-bold" style={{ fontFamily: "Sora" }}>
              Built on strategy, execution <span className="text-brand-gradient">and transparency.</span>
            </h2>
            <p className="mt-5 text-[17px] text-muted-foreground">
              The four values that shape every engagement — from a first consultation to a fifth-marketplace launch.
            </p>
          </div>
          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <div key={v.title} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition-all hover:border-[oklch(0.72_0.18_55)]/45 hover:shadow-[0_0_30px_oklch(0.72_0.18_55/0.2)] hover:-translate-y-1">
                <div className="pointer-events-none absolute inset-0 blueprint-bg opacity-30" />
                <span className="relative grid h-12 w-12 place-items-center rounded-xl bg-brand-gradient text-[oklch(0.15_0.02_265)] transition-transform group-hover:scale-110">
                  <v.Icon className="h-5 w-5" />
                </span>
                <h3 className="relative mt-5 text-lg font-semibold" style={{ fontFamily: "Sora" }}>{v.title}</h3>
                <p className="relative mt-2 text-[15px] text-muted-foreground leading-relaxed">{v.desc}</p>
                <span className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[oklch(0.72_0.18_55)]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────── FINAL CTA · LAUNCH PORTAL ───────── */}
      <section className="relative section-bg-2 overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl" style={{ background: "radial-gradient(circle, oklch(0.72 0.18 55 / 0.3), transparent 60%)" }} />
          <div className="absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[oklch(0.72_0.18_55)]/20" />
          <div className="absolute left-1/2 top-1/2 h-[560px] w-[560px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[oklch(0.72_0.18_55)]/10" />
          <div className="absolute left-1/2 top-1/2 h-[720px] w-[720px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[oklch(0.72_0.18_55)]/5" />
        </div>
        <div className="container-page relative py-20 md:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-[oklch(0.72_0.18_55)]/30 bg-[oklch(0.72_0.18_55)]/10 px-3 py-1 text-[12px] font-semibold tracking-widest uppercase text-[oklch(0.82_0.17_75)]">
              <Rocket className="h-3.5 w-3.5" />
              Start with a free demo
            </div>
            <h2 className="mt-6 text-balance text-4xl md:text-6xl font-bold leading-[1.05]" style={{ fontFamily: "Sora" }}>
              Let's Build Your Brand, <br className="hidden md:block" />
              <span className="text-brand-gradient">Starting With a Free Demo.</span>
            </h2>
            <p className="mt-6 text-[18px] leading-[1.65] text-muted-foreground">
              Share your business requirements and review a tailored website concept before moving forward.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Button asChild size="lg" className="bg-brand-gradient text-[oklch(0.15_0.02_265)] font-semibold text-[17px] px-8 py-6 hover:opacity-90 hover:scale-105 transition-transform shadow-[0_0_40px_oklch(0.72_0.18_55/0.5)]">
                <a href={FREE_DEMO_WHATSAPP} target="_blank" rel="noreferrer">
                  Get My Free Website Demo <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white/15 bg-white/5 text-[16px] px-7 py-6 backdrop-blur hover:bg-white/10">
                <Link to="/services">Explore Services</Link>
              </Button>
            </div>
            <p className="mt-6 text-[15px] font-medium text-foreground/85">
              Practical guidance. Honest consultation. No obligation.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

function FactoryTrack({
  label,
  title,
  desc,
  services,
  accent,
}: {
  label: string;
  title: string;
  desc: string;
  services: { slug: string; title: string; short: string }[];
  accent: "A" | "B";
}) {
  return (
    <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02] p-8 transition-all hover:border-[oklch(0.72_0.18_55)]/45 hover:shadow-[0_0_50px_oklch(0.72_0.18_55/0.22)] hover:-translate-y-1">
      <div className="pointer-events-none absolute -top-24 -right-24 h-56 w-56 rounded-full" style={{ background: "radial-gradient(circle, oklch(0.72 0.18 55 / 0.25), transparent 70%)" }} />
      <span className="pointer-events-none absolute left-4 top-4 h-5 w-5 border-l-2 border-t-2 border-[oklch(0.82_0.17_75)]/50" />
      <span className="pointer-events-none absolute right-4 bottom-4 h-5 w-5 border-r-2 border-b-2 border-[oklch(0.82_0.17_75)]/50" />

      <div className="flex items-start justify-between">
        <div>
          <p className="eyebrow">{label}</p>
          <h3 className="mt-2 text-2xl md:text-3xl font-bold" style={{ fontFamily: "Sora" }}>{title}</h3>
        </div>
        <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand-gradient text-[oklch(0.15_0.02_265)] transition-transform group-hover:scale-110 group-hover:rotate-6">
          {accent === "A" ? <Sparkles className="h-5 w-5" /> : <TrendingUp className="h-5 w-5" />}
        </span>
      </div>
      <p className="mt-3 text-[15px] text-muted-foreground">{desc}</p>

      <ul className="mt-6 space-y-2 relative">
        {/* connecting line */}
        <span className="pointer-events-none absolute left-4 top-2 bottom-2 w-px bg-gradient-to-b from-transparent via-[oklch(0.72_0.18_55)]/30 to-transparent" />
        {services.map((s, i) => (
          <li key={s.slug} className="relative">
            <Link
              to={`/services/${s.slug}`}
              className="flex items-center justify-between rounded-lg border border-white/5 bg-white/[0.02] px-4 py-3 pl-9 text-[14px] transition-all hover:border-[oklch(0.72_0.18_55)]/45 hover:bg-white/[0.05] hover:translate-x-1"
            >
              <span className="absolute left-3 top-1/2 -translate-y-1/2 grid h-4 w-4 place-items-center rounded-full bg-[oklch(0.13_0.02_265)] ring-1 ring-[oklch(0.72_0.18_55)]/50">
                <span className="h-1.5 w-1.5 rounded-full bg-[oklch(0.82_0.17_75)]" />
              </span>
              <span className="flex items-center gap-2">
                <span className="font-mono text-[10px] text-muted-foreground/60">M{String(i + 1).padStart(2, "0")}</span>
                <span>{s.title}</span>
              </span>
              <ArrowUpRight className="h-4 w-4 text-muted-foreground" />
            </Link>
          </li>
        ))}
      </ul>
      <div className="mt-6">
        <Link to="/services" className="inline-flex items-center gap-1 text-sm font-medium text-brand-gradient">
          Explore {title.toLowerCase()} <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}
