import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  ArrowUpRight,
  BarChart3,
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
import { site } from "@/data/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ecomtik — Dubai Brand Builder & Amazon Growth Agency" },
      {
        name: "description",
        content:
          "Ecomtik builds consumer brands from Dubai and scales them across 21 Amazon marketplaces. Logo, packaging, PPC, PDPs, DSP — one team, one accountable partner.",
      },
      { name: "keywords", content: "Amazon agency Dubai, Amazon UAE agency, brand building Dubai, Amazon growth agency, Amazon PPC Dubai, ecommerce agency UAE" },
      { property: "og:title", content: "Ecomtik — Dubai Brand Builder & Amazon Growth Agency" },
      { property: "og:description", content: "Ecomtik builds consumer brands from Dubai and scales them across 21 Amazon marketplaces. Logo, packaging, PPC, PDPs, DSP — one team, one accountable partner." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

const stats = [
  { k: site.stats.gmv, v: "GMV managed across marketplaces" },
  { k: site.stats.brands, v: "Consumer brands scaled" },
  { k: `${site.stats.marketplaces}`, v: "Global Amazon marketplaces" },
  { k: "3.4x", v: "Avg. client revenue in 12 months" },
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
        <div className="container-page grid gap-12 py-24 md:grid-cols-12 md:py-32">
          <div className="md:col-span-7">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-muted-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-[oklch(0.72_0.18_55)] shadow-[0_0_10px_oklch(0.72_0.18_55)]" />
              Dubai · Est. 2019 · 21 global marketplaces
            </div>
            <h1 className="mt-5 text-balance text-5xl leading-[1.02] md:text-7xl">
              We build brands that <span className="text-brand-gradient">win the digital shelf.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
              Ecomtik is a full-service brand builder and Amazon growth agency. From
              logo and packaging to PPC and DSP, one Dubai team runs your brand across
              21 marketplaces — with a P&L you can defend.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg" className="bg-brand-gradient text-[oklch(0.15_0.02_265)] font-semibold hover:opacity-90">
                <Link to="/contact">Book a growth audit <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white/15 bg-white/5 hover:bg-white/10">
                <Link to="/case-studies">See client results</Link>
              </Button>
            </div>
            <div className="mt-10 flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex -space-x-2">
                {["N", "K", "A", "H"].map((c) => (
                  <div key={c} className="grid h-8 w-8 place-items-center rounded-full border-2 border-background bg-gradient-to-br from-[oklch(0.72_0.18_55)] to-[oklch(0.82_0.17_75)] text-xs font-semibold text-[oklch(0.15_0.02_265)]">
                    {c}
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-[oklch(0.82_0.17_75)] text-[oklch(0.82_0.17_75)]" />
                ))}
              </div>
              <span>Trusted by 40+ consumer brands</span>
            </div>
          </div>

          {/* Hero dashboard */}
          <div className="md:col-span-5">
            <div className="relative rounded-2xl glass-strong p-6 glow-brand">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs text-muted-foreground">Amazon.ae · Last 30 days</p>
                  <p className="mt-1 font-display numeral text-3xl">$1.284M</p>
                </div>
                <span className="inline-flex items-center gap-1 rounded-full bg-[oklch(0.72_0.18_55)]/20 px-2.5 py-1 text-xs font-medium text-[oklch(0.82_0.17_75)]">
                  <TrendingUp className="h-3 w-3" /> +38.4%
                </span>
              </div>
              <div className="mt-6 h-32">
                <svg viewBox="0 0 300 120" className="h-full w-full" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="g" x1="0" x2="0" y1="0" y2="1">
                      <stop offset="0%" stopColor="oklch(0.72 0.18 55)" stopOpacity="0.6" />
                      <stop offset="100%" stopColor="oklch(0.72 0.18 55)" stopOpacity="0" />
                    </linearGradient>
                    <linearGradient id="g2" x1="0" x2="1">
                      <stop offset="0%" stopColor="oklch(0.72 0.18 55)" />
                      <stop offset="100%" stopColor="oklch(0.82 0.17 75)" />
                    </linearGradient>
                  </defs>
                  <path d="M0,90 C40,80 60,60 100,55 C140,50 160,70 200,50 C240,30 260,25 300,10 L300,120 L0,120 Z" fill="url(#g)" />
                  <path d="M0,90 C40,80 60,60 100,55 C140,50 160,70 200,50 C240,30 260,25 300,10" fill="none" stroke="url(#g2)" strokeWidth="2.5" />
                </svg>
              </div>
              <div className="mt-4 grid grid-cols-3 gap-3 border-t border-white/10 pt-4 text-sm">
                <div>
                  <p className="text-xs text-muted-foreground">TACOS</p>
                  <p className="mt-1 font-medium numeral">8.1%</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Sessions</p>
                  <p className="mt-1 font-medium numeral">412k</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">CVR</p>
                  <p className="mt-1 font-medium numeral">14.2%</p>
                </div>
              </div>
            </div>
            <div className="mt-4 rounded-2xl glass p-5">
              <p className="text-sm text-muted-foreground">
                <span className="font-medium text-foreground">"Ecomtik doubled our GCC revenue in six months."</span>
                — Head of Ecommerce, personal care brand.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <Section className="!py-14">
        <div className="grid gap-8 rounded-2xl border border-white/10 bg-white/[0.02] px-8 py-10 md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.k}>
              <p className="font-display numeral text-4xl text-brand-gradient">{s.k}</p>
              <p className="mt-2 text-sm text-muted-foreground">{s.v}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Two tracks */}
      <Section
        eyebrow="Two tracks. One team."
        title="Everything a modern consumer brand needs — under one roof."
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
            desc="Listing SEO, sourcing, launch, PPC, DSP, creative and account operations."
            services={trackBServices}
            href="/services"
          />
        </div>
      </Section>

      {/* Marketplaces */}
      <Section
        eyebrow="21 Marketplaces"
        title="Global reach, one operating team."
        intro="From Amazon.ae to Amazon.jp, we manage your brand across five regions with local content, tax and logistics."
      >
        <div className="grid gap-6 md:grid-cols-5">
          {marketplacesByRegion.map((r) => (
            <div key={r.region} className="rounded-2xl border border-white/10 bg-white/[0.02] p-5">
              <p className="eyebrow text-[10px]">{r.region}</p>
              <p className="mt-2 font-display numeral text-2xl">{r.items.length}</p>
              <ul className="mt-4 space-y-1.5 text-sm text-muted-foreground">
                {r.items.slice(0, 4).map((m) => (
                  <li key={m.slug}>
                    <Link to={`/marketplaces/${m.slug}`} className="hover:text-foreground">
                      <span className="mr-1.5">{m.flag}</span>{m.name}
                    </Link>
                  </li>
                ))}
                {r.items.length > 4 && (
                  <li className="text-xs">+{r.items.length - 4} more</li>
                )}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Button asChild variant="outline" size="lg" className="border-white/15 bg-white/5 hover:bg-white/10">
            <Link to="/marketplaces">Explore all {marketplaces.length} marketplaces <ArrowRight className="ml-2 h-4 w-4" /></Link>
          </Button>
        </div>
      </Section>

      {/* Process */}
      <Section eyebrow="How we work" title="A four-step playbook, refined across 40+ brands.">
        <div className="grid gap-8 md:grid-cols-4">
          {[
            { n: "01", t: "Diagnose", d: "Category, competitor and P&L teardown. We surface the three levers that matter." },
            { n: "02", t: "Design", d: "A 90-day roadmap with owners, targets and the creative + media plan behind them." },
            { n: "03", t: "Deploy", d: "In-house pods for PPC, creative, catalog and ops — one accountable strategy lead." },
            { n: "04", t: "Compound", d: "Weekly optimization, quarterly reviews, marketplace expansion when unit economics prove out." },
          ].map((step) => (
            <div key={step.n} className="relative rounded-2xl border border-white/10 bg-white/[0.02] p-6">
              <p className="font-mono text-sm text-brand-gradient">{step.n}</p>
              <h3 className="mt-3 text-xl">{step.t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.d}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Testimonial CTA */}
      <Section className="!pt-0">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[oklch(0.18_0.02_265)] to-[oklch(0.14_0.015_265)] p-10 md:p-16">
          <div className="absolute inset-0 -z-10 opacity-40 grid-bg" />
          <div className="grid gap-10 md:grid-cols-5">
            <div className="md:col-span-3">
              <BarChart3 className="h-8 w-8 text-[oklch(0.82_0.17_75)]" />
              <blockquote className="mt-6 text-balance font-display text-2xl leading-snug md:text-3xl">
                "In eight months Ecomtik became our marketplace team. They rebuilt our
                catalog, cut wasted ad spend in half, and launched us in KSA and the UK.
                Revenue tripled — and margin followed."
              </blockquote>
              <div className="mt-8 flex items-center gap-3 text-sm">
                <div className="grid h-10 w-10 place-items-center rounded-full bg-brand-gradient font-semibold text-[oklch(0.15_0.02_265)]">LA</div>
                <div>
                  <p className="font-medium">Layla Al Nasser</p>
                  <p className="text-muted-foreground">CEO, Aurelia Beauty</p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 md:col-span-2">
              {[
                { k: "3.1x", v: "Revenue in 8 months" },
                { k: "-46%", v: "Wasted ad spend" },
                { k: "2", v: "New marketplaces" },
                { k: "14.6%", v: "PDP conversion" },
              ].map((s) => (
                <div key={s.k} className="rounded-xl border border-white/10 bg-white/5 p-5">
                  <p className="font-display numeral text-3xl text-brand-gradient">{s.k}</p>
                  <p className="mt-1 text-xs text-muted-foreground">{s.v}</p>
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
          <h2 className="mt-4 text-balance text-4xl md:text-5xl">Let's build the next category leader.</h2>
          <p className="mt-5 text-muted-foreground">
            Send us your brand and marketplace goals. We'll come back within two business days with an initial point of view — no template decks.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button asChild size="lg" className="bg-brand-gradient text-[oklch(0.15_0.02_265)] font-semibold hover:opacity-90">
              <Link to="/contact">Book a growth audit</Link>
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
    <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-8 transition-colors hover:border-white/20">
      <div className="flex items-start justify-between">
        <div>
          <p className="eyebrow">{label}</p>
          <h3 className="mt-2 text-2xl md:text-3xl">{title}</h3>
        </div>
        <span className="grid h-10 w-10 place-items-center rounded-lg bg-brand-gradient text-[oklch(0.15_0.02_265)]">
          {label === "Track A" ? <Sparkles className="h-5 w-5" /> : <TrendingUp className="h-5 w-5" />}
        </span>
      </div>
      <p className="mt-3 text-sm text-muted-foreground">{desc}</p>
      <ul className="mt-6 space-y-2">
        {services.map((s) => (
          <li key={s.slug}>
            <Link
              to={`/services/${s.slug}`}
              className="flex items-center justify-between rounded-lg border border-white/5 bg-white/[0.02] px-4 py-3 text-sm transition-colors hover:border-white/15 hover:bg-white/[0.05]"
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
