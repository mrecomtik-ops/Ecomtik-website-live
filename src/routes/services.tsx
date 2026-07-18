import { createFileRoute, Link } from "@tanstack/react-router";
import {
  BarChart3,
  Boxes,
  Camera,
  Globe2,
  Megaphone,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  ArrowRight,
  Check,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/site/PageHero";
import { Section } from "@/components/site/Section";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Amazon Growth, PPC, Creative | Ecomtik" },
      {
        name: "description",
        content:
          "Amazon growth strategy, PPC & DSP, creative production, catalog operations and marketplace expansion — delivered by Ecomtik's Dubai team.",
      },
      { property: "og:title", content: "Ecomtik Services" },
      {
        property: "og:description",
        content:
          "Full-service Amazon growth: strategy, PPC, creative, catalog and marketplace expansion.",
      },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

const pillars = [
  {
    icon: TrendingUp,
    title: "Growth Strategy",
    body: "A quantified plan for the next four quarters — category, pricing, assortment, media mix and unit economics.",
    features: [
      "Category & competitor teardown",
      "Pricing & ranging strategy",
      "Unit-economics modelling",
      "12-month growth roadmap",
    ],
  },
  {
    icon: Megaphone,
    title: "PPC & Retail Media",
    body: "Sponsored Products, Brands, Display, DSP and AMC — orchestrated against a TACOS target, not vanity ROAS.",
    features: [
      "Full-funnel campaign architecture",
      "Search-term & placement optimization",
      "DSP + AMC audience strategy",
      "Weekly reporting with commentary",
    ],
  },
  {
    icon: Sparkles,
    title: "Creative & Brand",
    body: "A+ content, brand stores, listing imagery and video that earn attention on a 5-inch screen.",
    features: [
      "A+ & Premium A+ modules",
      "Brand storefront design",
      "Studio + lifestyle photography",
      "Short-form product video",
    ],
  },
  {
    icon: Boxes,
    title: "Catalog & Operations",
    body: "The unglamorous work that unlocks growth: clean data, healthy inventory, fewer tickets.",
    features: [
      "Listing & variation optimization",
      "Brand Registry & A-Z Guarantee",
      "FBA forecasting & replenishment",
      "Case management & escalations",
    ],
  },
  {
    icon: Globe2,
    title: "Marketplace Expansion",
    body: "Launch and scale into new geographies with local content, tax, logistics and media plans.",
    features: [
      "UAE, KSA, EG, UK, DE, US, JP",
      "Local pricing & VAT setup",
      "Translated & localized content",
      "Launch media plan & KPIs",
    ],
  },
  {
    icon: ShieldCheck,
    title: "Brand Protection",
    body: "Keep the Buy Box, defend margin and shut down unauthorized sellers with a documented process.",
    features: [
      "MAP policy & monitoring",
      "Unauthorized seller removal",
      "IP enforcement (Brand Registry)",
      "Review & rating hygiene",
    ],
  },
];

const engagements = [
  {
    name: "Launch",
    tag: "0 → 1",
    price: "From $6,500 / mo",
    description: "For brands going live on Amazon or entering a new marketplace.",
    includes: [
      "Full account & catalog setup",
      "Brand Registry & storefront",
      "Launch media plan (12 weeks)",
      "Weekly working sessions",
    ],
  },
  {
    name: "Growth",
    tag: "Most popular",
    price: "From $9,500 / mo",
    description: "For established brands ready to scale profitably across the funnel.",
    includes: [
      "Everything in Launch",
      "PPC + DSP management",
      "Creative production sprint (monthly)",
      "Dedicated strategy lead",
    ],
    featured: true,
  },
  {
    name: "Global",
    tag: "Multi-market",
    price: "Custom",
    description: "For portfolios operating in 3+ marketplaces with regional P&Ls.",
    includes: [
      "Everything in Growth",
      "Multi-market operations pod",
      "AMC & audience strategy",
      "Executive QBRs",
    ],
  },
];

function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Everything your brand needs to win on Amazon."
        description="Strategy, media, creative and operations — under one roof, with one accountable lead. No stitched-together agency stack."
      >
        <Button asChild size="lg">
          <Link to="/contact">Request a proposal <ArrowRight className="ml-2 h-4 w-4" /></Link>
        </Button>
      </PageHero>

      <Section eyebrow="Capabilities" title="Six pillars, one team.">
        <div className="grid gap-6 md:grid-cols-2">
          {pillars.map((p) => (
            <div
              key={p.title}
              className="rounded-2xl border border-border bg-card p-8 transition-shadow hover:shadow-lg"
            >
              <div className="flex items-start justify-between">
                <p.icon className="h-6 w-6 text-primary" />
                <span className="rounded-full border border-border bg-secondary px-3 py-1 text-xs text-muted-foreground">
                  {p.title.split(" ")[0]}
                </span>
              </div>
              <h3 className="mt-6 text-2xl">{p.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
              <ul className="mt-6 space-y-2 border-t border-border pt-6 text-sm">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <Check className="mt-0.5 h-4 w-4 text-gold" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      {/* Engagements */}
      <Section
        eyebrow="Engagements"
        title="Three ways to work with us."
        intro="Retainer-based, quarterly reviewed. All engagements include a named strategy lead and a working slack channel."
      >
        <div className="grid gap-6 md:grid-cols-3">
          {engagements.map((e) => (
            <div
              key={e.name}
              className={`relative flex flex-col rounded-2xl border p-8 ${
                e.featured
                  ? "border-primary bg-primary text-primary-foreground shadow-xl"
                  : "border-border bg-card"
              }`}
            >
              <div className="flex items-center justify-between">
                <h3 className={`text-2xl ${e.featured ? "text-primary-foreground" : ""}`}>{e.name}</h3>
                <span
                  className={`rounded-full px-3 py-1 text-xs font-medium ${
                    e.featured
                      ? "bg-gold text-gold-foreground"
                      : "bg-secondary text-muted-foreground"
                  }`}
                >
                  {e.tag}
                </span>
              </div>
              <p className={`mt-2 font-display text-2xl ${e.featured ? "text-gold" : ""}`}>
                {e.price}
              </p>
              <p className={`mt-3 text-sm ${e.featured ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
                {e.description}
              </p>
              <ul className="mt-6 flex-1 space-y-2 text-sm">
                {e.includes.map((i) => (
                  <li key={i} className="flex items-start gap-2">
                    <Check className={`mt-0.5 h-4 w-4 ${e.featured ? "text-gold" : "text-primary"}`} />
                    <span>{i}</span>
                  </li>
                ))}
              </ul>
              <Button
                asChild
                variant={e.featured ? "secondary" : "outline"}
                className="mt-8"
              >
                <Link to="/contact">Get started</Link>
              </Button>
            </div>
          ))}
        </div>
      </Section>

      {/* Add-ons */}
      <Section eyebrow="Add-ons" title="Sprint work when you need it.">
        <div className="grid gap-4 md:grid-cols-3">
          {[
            { icon: Camera, t: "Creative Sprint", d: "2-week production of photography, video and A+ modules." },
            { icon: BarChart3, t: "Growth Audit", d: "A 20-page teardown with a prioritized 90-day plan." },
            { icon: Globe2, t: "Market Launch", d: "End-to-end launch into a new marketplace in 8 weeks." },
          ].map((a) => (
            <div key={a.t} className="rounded-xl border border-border bg-card p-6">
              <a.icon className="h-5 w-5 text-primary" />
              <h4 className="mt-4 text-lg">{a.t}</h4>
              <p className="mt-1 text-sm text-muted-foreground">{a.d}</p>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
