import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  Boxes,
  Globe2,
  Megaphone,
  ShieldCheck,
  Sparkles,
  Star,
  TrendingUp,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/site/Section";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ecomtik — Dubai Amazon Growth Agency & Brand Builder" },
      {
        name: "description",
        content:
          "We build category-leading consumer brands on Amazon. Strategy, catalog, PPC, creative and marketplace expansion — engineered in Dubai for global growth.",
      },
      { property: "og:title", content: "Ecomtik — Dubai Amazon Growth Agency" },
      {
        property: "og:description",
        content:
          "Full-service Amazon growth and brand building from Dubai. Strategy, PPC, creative and marketplace expansion.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

const services = [
  {
    icon: TrendingUp,
    title: "Amazon Growth Strategy",
    body: "Category audits, pricing, ranging and roadmaps that turn Amazon into your largest, most profitable channel.",
  },
  {
    icon: Megaphone,
    title: "PPC & Retail Media",
    body: "Sponsored Ads, DSP and AMC. We engineer campaigns for TACOS targets, not vanity ROAS.",
  },
  {
    icon: Sparkles,
    title: "Creative & Brand",
    body: "A+ content, storefronts, product photography and video that convert on mobile-first PDPs.",
  },
  {
    icon: Boxes,
    title: "Catalog & Operations",
    body: "Listing optimization, variations, brand registry, FBA planning and case management done right the first time.",
  },
  {
    icon: Globe2,
    title: "Marketplace Expansion",
    body: "Launch and scale into UAE, KSA, UK, Germany and the US with local pricing, VAT and logistics.",
  },
  {
    icon: ShieldCheck,
    title: "Brand Protection",
    body: "IP enforcement, MAP monitoring and unauthorized seller removal to defend Buy Box and margin.",
  },
];

const stats = [
  { k: "$180M+", v: "GMV managed across marketplaces" },
  { k: "42", v: "Consumer brands scaled since 2019" },
  { k: "9", v: "Amazon marketplaces launched" },
  { k: "3.4x", v: "Average client revenue in 12 months" },
];

const logos = ["NORA", "KAYAN", "Aurelia", "Halcyon", "Bloomhaus", "Verdant"];

function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border/60">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-secondary/70 via-background to-background" />
        <div
          className="absolute inset-x-0 top-0 -z-10 h-96 opacity-40 [mask-image:radial-gradient(60%_60%_at_50%_0%,black,transparent)]"
          style={{
            background:
              "radial-gradient(60% 40% at 20% 10%, oklch(0.82 0.14 75 / 0.35), transparent), radial-gradient(50% 40% at 80% 20%, oklch(0.85 0.06 260 / 0.4), transparent)",
          }}
        />
        <div className="container-page grid gap-12 py-24 md:grid-cols-12 md:py-32">
          <div className="md:col-span-7">
            <p className="eyebrow">Dubai · Est. 2019</p>
            <h1 className="mt-5 text-balance text-5xl leading-[1.05] md:text-7xl">
              We build brands that <span className="italic text-primary/90">win</span> on Amazon.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
              Ecomtik is a full-service brand builder and Amazon growth agency for
              ambitious consumer brands. From Dubai, we operate across the GCC,
              Europe and North America — where the shelf is digital and the margins
              are earned.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg">
                <Link to="/contact">
                  Book a growth audit <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="ghost">
                <Link to="/case-studies">See client results</Link>
              </Button>
            </div>
            <div className="mt-10 flex items-center gap-3 text-sm text-muted-foreground">
              <div className="flex -space-x-2">
                {[0, 1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="grid h-8 w-8 place-items-center rounded-full border-2 border-background bg-gradient-to-br from-accent to-secondary text-xs font-semibold"
                  >
                    {["N", "K", "A", "H"][i]}
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-gold text-gold" />
                ))}
              </div>
              <span>Trusted by 40+ consumer brands</span>
            </div>
          </div>

          {/* Hero panel */}
          <div className="md:col-span-5">
            <div className="relative rounded-2xl border border-border bg-card p-6 shadow-[0_30px_60px_-30px_rgba(20,20,40,0.25)]">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs text-muted-foreground">Amazon.ae · Last 30 days</p>
                  <p className="mt-1 font-display text-2xl">$1.284M</p>
                </div>
                <span className="inline-flex items-center gap-1 rounded-full bg-gold/15 px-2.5 py-1 text-xs font-medium text-gold-foreground">
                  <TrendingUp className="h-3 w-3" /> +38.4%
                </span>
              </div>
              <div className="mt-6 h-32">
                <svg viewBox="0 0 300 120" className="h-full w-full" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="g" x1="0" x2="0" y1="0" y2="1">
                      <stop offset="0%" stopColor="oklch(0.72 0.14 75)" stopOpacity="0.5" />
                      <stop offset="100%" stopColor="oklch(0.72 0.14 75)" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M0,90 C40,80 60,60 100,55 C140,50 160,70 200,50 C240,30 260,25 300,10 L300,120 L0,120 Z"
                    fill="url(#g)"
                  />
                  <path
                    d="M0,90 C40,80 60,60 100,55 C140,50 160,70 200,50 C240,30 260,25 300,10"
                    fill="none"
                    stroke="oklch(0.22 0.02 260)"
                    strokeWidth="2"
                  />
                </svg>
              </div>
              <div className="mt-4 grid grid-cols-3 gap-3 border-t border-border pt-4 text-sm">
                <div>
                  <p className="text-xs text-muted-foreground">TACOS</p>
                  <p className="mt-1 font-medium">8.1%</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Sessions</p>
                  <p className="mt-1 font-medium">412k</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">CVR</p>
                  <p className="mt-1 font-medium">14.2%</p>
                </div>
              </div>
            </div>
            <div className="mt-4 rounded-2xl border border-border bg-secondary/50 p-5">
              <p className="text-sm text-muted-foreground">
                <span className="font-medium text-foreground">"Ecomtik doubled our GCC
                revenue in six months."</span> — Head of Ecommerce, personal care brand.
              </p>
            </div>
          </div>
        </div>

        {/* Logo strip */}
        <div className="border-t border-border/60 bg-background/60">
          <div className="container-page flex flex-wrap items-center justify-between gap-6 py-6">
            <p className="text-xs uppercase tracking-widest text-muted-foreground">
              Building brands with
            </p>
            <div className="flex flex-wrap items-center gap-x-10 gap-y-3">
              {logos.map((l) => (
                <span key={l} className="font-display text-lg text-muted-foreground/70">
                  {l}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <Section className="!py-16">
        <div className="grid gap-8 border-y border-border/60 py-10 md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.k}>
              <p className="font-display text-4xl text-primary">{s.k}</p>
              <p className="mt-2 text-sm text-muted-foreground">{s.v}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Services */}
      <Section
        eyebrow="What we do"
        title="An operating system for marketplace growth."
        intro="We combine strategy, media, creative and operations under one roof — so your brand grows without stitching agencies together."
      >
        <div className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <div key={s.title} className="group relative bg-card p-8 transition-colors hover:bg-secondary/60">
              <s.icon className="h-6 w-6 text-primary" />
              <h3 className="mt-6 text-xl">{s.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
              <span className="mt-6 inline-flex items-center gap-1 text-xs font-medium text-primary opacity-0 transition-opacity group-hover:opacity-100">
                Learn more <ArrowUpRight className="h-3 w-3" />
              </span>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Button asChild variant="outline" size="lg">
            <Link to="/services">Explore all services <ArrowRight className="ml-2 h-4 w-4" /></Link>
          </Button>
        </div>
      </Section>

      {/* Process */}
      <Section
        eyebrow="How we work"
        title="A four-step playbook, refined across 40+ brands."
      >
        <div className="grid gap-10 md:grid-cols-4">
          {[
            { n: "01", t: "Diagnose", d: "Category, competitor and P&L teardown. We surface the 3 levers that matter." },
            { n: "02", t: "Design", d: "A 90-day roadmap with owners, targets and the creative + media plan behind them." },
            { n: "03", t: "Deploy", d: "In-house pods for PPC, creative, catalog and ops — reporting to one strategy lead." },
            { n: "04", t: "Compound", d: "Weekly optimization, quarterly reviews, marketplace expansion when unit economics prove out." },
          ].map((step) => (
            <div key={step.n}>
              <p className="font-display text-sm text-gold">{step.n}</p>
              <h3 className="mt-3 text-xl">{step.t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.d}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Testimonial */}
      <Section className="!pt-0">
        <div className="rounded-3xl border border-border bg-primary p-10 text-primary-foreground md:p-16">
          <div className="grid gap-10 md:grid-cols-5">
            <div className="md:col-span-3">
              <BarChart3 className="h-8 w-8 text-gold" />
              <blockquote className="mt-6 text-balance font-display text-2xl leading-snug md:text-3xl">
                "In eight months Ecomtik became our marketplace team. They rebuilt our
                catalog, cut wasted ad spend in half, and launched us in KSA and the UK.
                Revenue tripled — and margin followed."
              </blockquote>
              <div className="mt-8 flex items-center gap-3 text-sm">
                <div className="grid h-10 w-10 place-items-center rounded-full bg-gold text-gold-foreground font-semibold">
                  LA
                </div>
                <div>
                  <p className="font-medium">Layla Al Nasser</p>
                  <p className="text-primary-foreground/70">CEO, Aurelia Beauty</p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6 md:col-span-2">
              {[
                { k: "3.1x", v: "Revenue in 8 months" },
                { k: "-46%", v: "Wasted ad spend" },
                { k: "2", v: "New marketplaces launched" },
                { k: "14.6%", v: "Average PDP conversion" },
              ].map((s) => (
                <div key={s.k} className="rounded-xl border border-primary-foreground/10 bg-primary-foreground/5 p-5">
                  <p className="font-display text-3xl text-gold">{s.k}</p>
                  <p className="mt-1 text-xs text-primary-foreground/70">{s.v}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section align="center" className="!pt-0">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">Ready to scale?</p>
          <h2 className="mt-4 text-balance text-4xl md:text-5xl">
            Let's build the next category leader.
          </h2>
          <p className="mt-5 text-muted-foreground">
            Send us your brand and marketplace goals. We'll come back within two
            business days with an initial point of view — no template decks.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button asChild size="lg">
              <Link to="/contact">Book a growth audit</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link to="/services">See services</Link>
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
