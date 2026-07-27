import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  ArrowUpRight,
  Globe2,
  Star,
  TrendingUp,
  Check,
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
  Quote,
  Monitor,
  Target,
  Palette as PaletteIcon,
  ShieldCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/site/Section";
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
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

const stats: { value: number; suffix: string; label: string }[] = [
  { value: 500, suffix: "+", label: "Brands Supported" },
  { value: 21, suffix: "", label: "Global Marketplaces" },
  { value: 98, suffix: "%", label: "Client Satisfaction" },
  { value: 5, suffix: "★", label: "Rated Service" },
];

const factoryStages = [
  { n: "01", title: "Discover", desc: "Category, customer and margin analysis to lock the opportunity.", Icon: Lightbulb },
  { n: "02", title: "Design", desc: "Brand identity, packaging and product content built to convert.", Icon: Palette },
  { n: "03", title: "Build", desc: "Sourcing, sampling and production with QC at every step.", Icon: Hammer },
  { n: "04", title: "Launch", desc: "Listing, PPC and creative that hit rank targets in 12 weeks.", Icon: Rocket },
  { n: "05", title: "Scale", desc: "New marketplaces, DTC and creator programs to compound growth.", Icon: BarChart3 },
];

const audiences = [
  { title: "First-Time Entrepreneurs", desc: "You have a product idea and need a partner who can build the brand and get it live on Amazon.", Icon: User },
  { title: "Amazon Sellers", desc: "You already sell on Amazon and want to fix listings, PPC and creative to unlock growth.", Icon: ShoppingBag },
  { title: "Existing Businesses", desc: "You run an offline or DTC business and want to add Amazon and marketplaces as a channel.", Icon: Building2 },
  { title: "Global Expansion Brands", desc: "You're established in one market and ready to scale across the GCC, Europe, US and Asia.", Icon: Globe },
];

const testimonials = [
  { quote: "Ecomtik rebuilt our Amazon.ae presence and got us into KSA within a quarter. Rank moved, conversion moved, and the reporting is honest.", author: "Founder", brand: "GCC beauty brand" },
  { quote: "One team from logo to launch. That was the whole reason we chose them and it delivered — our first FBA order was live in 11 weeks.", author: "COO", brand: "UAE home goods" },
  { quote: "They fixed our PPC waste inside four weeks and reset our creative for Q4. TACOS dropped, sales stayed flat, then grew.", author: "Head of Ecommerce", brand: "MENA supplements" },
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
              Global Brand Building &amp; Amazon Growth
            </div>
            <h1 className="mt-5 text-balance text-5xl leading-[1.02] font-bold md:text-7xl" style={{ fontFamily: "Sora, ui-sans-serif, system-ui" }}>
              BUILD BRANDS.<br />
              <span className="text-brand-gradient">SCALE GLOBALLY.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
              Ecomtik helps entrepreneurs and businesses create powerful brands, develop products,
              launch on Amazon, and expand across 21 Amazon marketplaces with practical strategy and execution.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg" className="bg-brand-gradient text-[oklch(0.15_0.02_265)] font-semibold hover:opacity-90 hover:scale-105 transition-transform shadow-[0_0_30px_oklch(0.72_0.18_55/0.4)]">
                <Link to="/contact">Book Free Consultation <ArrowRight className="ml-2 h-4 w-4" /></Link>
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
              <span>Trusted by 500+ brands across 21 Amazon marketplaces</span>
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
            <div key={s.label} className="text-center md:text-left">
              <p className="font-display numeral text-5xl text-brand-gradient font-bold">
                <CountUp value={s.value} suffix={s.suffix} />
              </p>
              <p className="mt-2 text-sm text-muted-foreground">{s.label}</p>
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
            desc="Logo, website, packaging, digital marketing and UAE company setup."
            services={trackAServices}
            href="/services"
          />
          <TrackCard
            label="Track B"
            title="Amazon Growth"
            desc="Sourcing, private label, wholesale, brand registry and brand launch."
            services={trackBServices}
            href="/services"
          />
        </div>
      </Section>

      {/* Ecomtik Brand Factory — 5 stages */}
      <Section
        eyebrow="Ecomtik Brand Factory"
        title="From idea to global brand in five stages."
        intro="One assembly line, five stages, one accountable team. Every brand we build moves through the same disciplined process."
      >
        <div className="grid gap-4 md:grid-cols-5">
          {factoryStages.map((s) => (
            <div
              key={s.n}
              className="group relative rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition-all hover:border-[oklch(0.72_0.18_55)]/40 hover:shadow-[0_0_30px_oklch(0.72_0.18_55/0.2)] hover:-translate-y-1"
            >
              <span className="grid h-11 w-11 place-items-center rounded-lg bg-brand-gradient text-[oklch(0.15_0.02_265)] transition-transform group-hover:scale-110 group-hover:rotate-6">
                <s.Icon className="h-5 w-5" />
              </span>
              <p className="mt-4 font-mono text-xs text-[oklch(0.82_0.17_75)]">{s.n}</p>
              <h3 className="mt-1 text-lg font-semibold" style={{ fontFamily: "Sora, ui-sans-serif, system-ui" }}>{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Who We Help */}
      <Section
        eyebrow="Who we help"
        title="Built for founders, sellers and expansion teams."
        intro="Whether you're starting from a blank page or already trading in five markets, we plug into where you are."
      >
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {audiences.map((a) => (
            <div
              key={a.title}
              className="group rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition-all hover:border-[oklch(0.72_0.18_55)]/40 hover:shadow-[0_0_30px_oklch(0.72_0.18_55/0.2)] hover:-translate-y-1"
            >
              <span className="grid h-11 w-11 place-items-center rounded-lg bg-brand-gradient text-[oklch(0.15_0.02_265)] transition-transform group-hover:scale-110 group-hover:rotate-6">
                <a.Icon className="h-5 w-5" />
              </span>
              <h3 className="mt-5 text-lg font-semibold" style={{ fontFamily: "Sora, ui-sans-serif, system-ui" }}>{a.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{a.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Marketplaces */}
      <Section
        eyebrow="21 Amazon Marketplaces"
        title="Global reach, one operating team."
        intro="From Amazon.ae to Amazon.jp, we manage your brand across global marketplaces with local content, tax and logistics."
      >
        <div className="grid gap-8 lg:grid-cols-5 items-center">
          <div className="lg:col-span-2 relative rounded-3xl overflow-hidden border border-white/10">
            <img
              src={globeImg.url}
              alt="Global marketplace network connecting Amazon storefronts worldwide"
              className="w-full h-auto object-cover"
              loading="lazy"
              decoding="async"
            />
            <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-[oklch(0.82_0.17_75)]/20" />
          </div>
          <div className="lg:col-span-3 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
            {marketplacesByRegion.map((r) => (
              <Link
                key={r.region}
                to="/marketplaces"
                hash={regionAnchors[r.region]}
                className="group rounded-2xl border border-white/10 bg-white/[0.02] p-5 transition-all hover:border-[oklch(0.72_0.18_55)]/40 hover:shadow-[0_0_30px_oklch(0.72_0.18_55/0.2)] hover:-translate-y-1"
              >
                <div className="flex items-center gap-2">
                  <Globe2 className="h-4 w-4 text-[oklch(0.82_0.17_75)] transition-transform group-hover:rotate-12" />
                  <p className="eyebrow text-[10px]">{r.region}</p>
                </div>
                <p className="mt-2 font-display numeral text-2xl font-bold">{r.items.length}</p>
                <ul className="mt-3 space-y-1 text-xs text-muted-foreground">
                  {r.items.slice(0, 3).map((m) => (
                    <li key={m.slug}>
                      <span className="mr-1">{m.flag}</span>{m.name}
                    </li>
                  ))}
                  {r.items.length > 3 && (
                    <li className="text-[11px]">+{r.items.length - 3} more</li>
                  )}
                </ul>
              </Link>
            ))}
          </div>
        </div>
        <div className="mt-10 text-center">
          <Button asChild variant="outline" size="lg" className="border-white/15 bg-white/5 hover:bg-white/10">
            <Link to="/marketplaces">Explore all {marketplaces.length} Amazon marketplaces <ArrowRight className="ml-2 h-4 w-4" /></Link>
          </Button>
        </div>
      </Section>

      {/* Trusted By Growing Brands */}
      <Section
        eyebrow="Trusted by growing brands"
        title="Real teams, real results."
        intro="A snapshot of what founders and operators say after working with us."
      >
        <div className="grid gap-5 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure
              key={t.author + t.brand}
              className="group flex flex-col rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition-all hover:border-[oklch(0.72_0.18_55)]/40 hover:shadow-[0_0_30px_oklch(0.72_0.18_55/0.2)] hover:-translate-y-1"
            >
              <Quote className="h-6 w-6 text-[oklch(0.82_0.17_75)]" />
              <blockquote className="mt-4 flex-1 text-sm leading-relaxed">"{t.quote}"</blockquote>
              <figcaption className="mt-6 border-t border-white/5 pt-4 text-xs text-muted-foreground">
                <span className="block font-semibold text-foreground">{t.author}</span>
                {t.brand}
              </figcaption>
            </figure>
          ))}
        </div>
        <div className="mt-10 rounded-2xl border border-white/10 bg-white/[0.02] p-6">
          <p className="eyebrow text-[10px] text-center">Brand proof</p>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 text-sm font-semibold uppercase tracking-widest text-muted-foreground/70">
            <span>Aurelia Beauty</span>
            <span>·</span>
            <span>Nomad Coffee</span>
            <span>·</span>
            <span>Kayan Home</span>
            <span>·</span>
            <span>Sirius Supplements</span>
            <span>·</span>
            <span>Palma Kids</span>
          </div>
        </div>
      </Section>

      {/* Free Demo Website */}
      <Section>
        <div className="relative overflow-hidden rounded-3xl border border-[oklch(0.72_0.18_55)]/25 bg-[oklch(0.13_0.02_265)]/60 backdrop-blur-xl p-8 md:p-14 shadow-[0_30px_80px_-30px_oklch(0.72_0.18_55/0.35)]">
          <div
            className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full"
            style={{ background: "radial-gradient(circle, oklch(0.72 0.18 55 / 0.35), transparent 70%)" }}
          />
          <div
            className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full"
            style={{ background: "radial-gradient(circle, oklch(0.82 0.17 75 / 0.25), transparent 70%)" }}
          />
          <div className="relative grid gap-10 md:grid-cols-2 md:items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-[oklch(0.72_0.18_55)]/30 bg-[oklch(0.72_0.18_55)]/10 px-3 py-1 text-[11px] font-semibold tracking-widest uppercase text-[oklch(0.82_0.17_75)]">
                <Monitor className="h-3.5 w-3.5" />
                Free Website Demo
              </div>
              <h2 className="mt-5 text-balance text-3xl md:text-4xl lg:text-5xl font-bold" style={{ fontFamily: "Sora, ui-sans-serif, system-ui" }}>
                See Your Business Online <span className="text-brand-gradient">Before You Commit.</span>
              </h2>
              <p className="mt-5 text-muted-foreground leading-relaxed">
                Share your business requirements with Ecomtik, and we will create a free demo website
                concept tailored to your brand, industry, and goals. Review the design direction before
                deciding to continue with the full website.
              </p>
              <ul className="mt-6 space-y-3 text-sm">
                {[
                  { Icon: Target, text: "Tailored to your business requirements" },
                  { Icon: PaletteIcon, text: "Designed for your brand and audience" },
                  { Icon: ShieldCheck, text: "No obligation after reviewing the demo" },
                ].map(({ Icon, text }) => (
                  <li key={text} className="flex items-start gap-3">
                    <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-brand-gradient text-[oklch(0.15_0.02_265)]">
                      <Icon className="h-4 w-4" />
                    </span>
                    <span className="pt-1.5 text-foreground/90">{text}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Button
                  asChild
                  size="lg"
                  className="bg-brand-gradient text-[oklch(0.15_0.02_265)] font-semibold hover:opacity-90 hover:scale-105 transition-transform shadow-[0_0_30px_oklch(0.72_0.18_55/0.4)]"
                >
                  <a href={FREE_DEMO_WHATSAPP} target="_blank" rel="noreferrer">
                    Request Your Free Demo Website <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <p className="mt-3 text-xs text-muted-foreground">
                  Free initial demo concept — not a complete free website.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden border border-[oklch(0.72_0.18_55)]/30 bg-black/40 shadow-[0_25px_80px_-20px_oklch(0.72_0.18_55/0.45)] animate-[float_6s_ease-in-out_infinite]">
                <img
                  src={demoMockup}
                  alt="Ecomtik free demo website concept — dark themed premium website mockup on a laptop"
                  className="w-full h-auto object-cover"
                  loading="lazy"
                  decoding="async"
                  width={1024}
                  height={1024}
                />
                <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-[oklch(0.82_0.17_75)]/20 rounded-3xl" />
              </div>
            </div>
          </div>
        </div>
      </Section>


      <Section align="center" className="!pt-0">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">Ready to build your brand?</p>
          <h2 className="mt-4 text-balance text-4xl md:text-5xl" style={{ fontFamily: "Sora, ui-sans-serif, system-ui" }}>Let's build the next category leader.</h2>
          <p className="mt-5 text-muted-foreground">
            Send us your brand and marketplace goals. We'll come back with a practical point of view — no template decks.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button asChild size="lg" className="bg-brand-gradient text-[oklch(0.15_0.02_265)] font-semibold hover:opacity-90 hover:scale-105 transition-transform">
              <Link to="/contact">Book Free Consultation</Link>
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
    <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-8 transition-all hover:border-[oklch(0.72_0.18_55)]/40 hover:shadow-[0_0_40px_oklch(0.72_0.18_55/0.2)] hover:-translate-y-1">
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
