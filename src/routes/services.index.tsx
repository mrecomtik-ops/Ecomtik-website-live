import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/site/PageHero";
import { Section } from "@/components/site/Section";
import { trackAServices, trackBServices, type Service } from "@/data/services";

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      { title: "Services — Brand Building & Amazon Growth | Ecomtik" },
      {
        name: "description",
        content:
          "Two tracks, one team. Ecomtik's brand building services (logo, packaging, photography, website) and Amazon growth services (SEO, PPC, DSP, ops) — delivered from Dubai.",
      },
      { name: "keywords", content: "Amazon services Dubai, Amazon PPC agency, brand identity Dubai, packaging design UAE, Amazon SEO services" },
      { property: "og:title", content: "Ecomtik Services — Brand Building + Amazon Growth" },
      { property: "og:description", content: "11 services across two tracks — brand building and Amazon growth." },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

const engagements = [
  {
    name: "Launch",
    tag: "0 → 1",
    price: "From $6,500 / mo",
    description: "For brands going live on Amazon or entering a new marketplace.",
    includes: ["Account & catalog setup", "Brand Registry & storefront", "Launch media plan (12 weeks)", "Weekly working sessions"],
  },
  {
    name: "Growth",
    tag: "Most popular",
    price: "From $9,500 / mo",
    description: "For established brands ready to scale profitably across the funnel.",
    includes: ["Everything in Launch", "PPC + DSP management", "Creative production sprint (monthly)", "Dedicated strategy lead"],
    featured: true,
  },
  {
    name: "Global",
    tag: "Multi-market",
    price: "Custom",
    description: "For portfolios operating in 3+ marketplaces with regional P&Ls.",
    includes: ["Everything in Growth", "Multi-market operations pod", "AMC & audience strategy", "Executive QBRs"],
  },
];

function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Two tracks. Eleven services. One accountable team."
        description="Track A builds the brand. Track B scales it on Amazon. Most clients start with one and grow into both — with a single strategy lead across every workstream."
      >
        <Button asChild size="lg" className="bg-brand-gradient text-[oklch(0.15_0.02_265)] font-semibold hover:opacity-90">
          <Link to="/contact">Request a proposal <ArrowRight className="ml-2 h-4 w-4" /></Link>
        </Button>
      </PageHero>

      <Section eyebrow="Track A" title="Brand Building" intro="The foundations every consumer brand needs before it scales.">
        <ServiceGrid services={trackAServices} />
      </Section>

      <Section eyebrow="Track B" title="Amazon Growth" intro="The playbook that turns Amazon into your most profitable channel.">
        <ServiceGrid services={trackBServices} />
      </Section>

      <Section eyebrow="Engagements" title="Three ways to work with us." intro="Retainer-based, quarterly reviewed. Every engagement includes a named strategy lead.">
        <div className="grid gap-6 md:grid-cols-3">
          {engagements.map((e) => (
            <div
              key={e.name}
              className={`relative flex flex-col rounded-2xl border p-8 ${
                e.featured
                  ? "border-[oklch(0.72_0.18_55)]/40 bg-gradient-to-b from-[oklch(0.22_0.05_60)]/40 to-[oklch(0.18_0.02_265)] glow-brand"
                  : "border-white/10 bg-white/[0.02]"
              }`}
            >
              <div className="flex items-center justify-between">
                <h3 className="text-2xl">{e.name}</h3>
                <span className={`rounded-full px-3 py-1 text-xs font-medium ${e.featured ? "bg-brand-gradient text-[oklch(0.15_0.02_265)]" : "border border-white/10 bg-white/5 text-muted-foreground"}`}>
                  {e.tag}
                </span>
              </div>
              <p className={`mt-2 font-display numeral text-2xl ${e.featured ? "text-brand-gradient" : ""}`}>{e.price}</p>
              <p className="mt-3 text-sm text-muted-foreground">{e.description}</p>
              <ul className="mt-6 flex-1 space-y-2 text-sm">
                {e.includes.map((i) => (
                  <li key={i} className="flex items-start gap-2">
                    <Check className="mt-0.5 h-4 w-4 text-[oklch(0.82_0.17_75)]" />
                    <span>{i}</span>
                  </li>
                ))}
              </ul>
              <Button asChild className={`mt-8 ${e.featured ? "bg-brand-gradient text-[oklch(0.15_0.02_265)] font-semibold hover:opacity-90" : ""}`} variant={e.featured ? "default" : "outline"}>
                <Link to="/contact">Get started</Link>
              </Button>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}

function ServiceGrid({ services }: { services: Service[] }) {
  return (
    <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
      {services.map((s) => (
        <Link
          key={s.slug}
          to={`/services/${s.slug}`}
          className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition-colors hover:border-white/20 hover:bg-white/[0.05]"
        >
          <div className="flex items-center justify-between">
            <span className="grid h-11 w-11 place-items-center rounded-lg bg-brand-gradient text-[oklch(0.15_0.02_265)]">
              <s.icon className="h-5 w-5" />
            </span>
            <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-colors group-hover:text-foreground" />
          </div>
          <h3 className="mt-5 text-xl">{s.title}</h3>
          <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{s.short}</p>
        </Link>
      ))}
    </div>
  );
}
