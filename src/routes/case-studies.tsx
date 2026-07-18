import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/site/PageHero";
import { Section } from "@/components/site/Section";

export const Route = createFileRoute("/case-studies")({
  head: () => ({
    meta: [
      { title: "Case Studies — Ecomtik Amazon Growth Results" },
      {
        name: "description",
        content:
          "Real results from consumer brands scaled by Ecomtik across the GCC, Europe and the US — beauty, home, wellness and F&B.",
      },
      { name: "keywords", content: "Amazon case studies, Amazon UAE results, Amazon growth case studies, ecommerce success stories Dubai" },
      { property: "og:title", content: "Ecomtik Case Studies" },
      { property: "og:description", content: "Amazon growth results from beauty, home, wellness and F&B brands." },
      { property: "og:url", content: "/case-studies" },
    ],
    links: [{ rel: "canonical", href: "/case-studies" }],
  }),
  component: CaseStudiesPage,
});

const cases = [
  {
    brand: "Aurelia Beauty",
    category: "Prestige skincare · UAE + KSA",
    headline: "Rebuilt the catalog, launched KSA, tripled revenue.",
    body: "Fragmented listings and untracked ad spend were capping growth. We consolidated the parent-child structure, launched a full-funnel PPC + DSP program, and opened Amazon.sa.",
    stats: [
      { k: "3.1x", v: "Revenue in 8 months" },
      { k: "-46%", v: "Wasted ad spend" },
      { k: "14.6%", v: "PDP conversion rate" },
    ],
  },
  {
    brand: "Halcyon Home",
    category: "Home textiles · UK + DE",
    headline: "One brand storefront, two European launches.",
    body: "A UK-based textile brand needed a scalable creative system before expanding into Germany. We built a modular A+ + storefront template and localized 240 SKUs.",
    stats: [
      { k: "2.4x", v: "Sessions in 6 months" },
      { k: "+38%", v: "Buy Box share" },
      { k: "1", v: "New marketplace launched" },
    ],
  },
  {
    brand: "Kayan Wellness",
    category: "Supplements · UAE + KSA + EG",
    headline: "From new brand to category leader in 12 months.",
    body: "Kayan launched on Amazon.ae with a single hero SKU. We built the launch plan, ran creator seeding, and expanded the range to 18 SKUs across three markets.",
    stats: [
      { k: "#1", v: "Category rank, Amazon.ae" },
      { k: "$4.2M", v: "GMV in year one" },
      { k: "3", v: "Marketplaces active" },
    ],
  },
  {
    brand: "Verdant Foods",
    category: "Specialty F&B · US",
    headline: "Made Amazon their most profitable channel.",
    body: "A DTC-first food brand needed Amazon to work economically at scale. We restructured pricing tiers, moved to a subscribe-and-save motion, and cut TACOS from 22% to 9%.",
    stats: [
      { k: "-59%", v: "TACOS reduction" },
      { k: "2.7x", v: "Contribution margin" },
      { k: "31%", v: "Subscribe rate" },
    ],
  },
];

function CaseStudiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Results"
        title="Growth you can put a number on."
        description="A selection of client work from the last 24 months. All figures verified with the brand."
      />

      <Section className="!pt-24">
        <div className="grid gap-8">
          {cases.map((c, i) => (
            <article
              key={c.brand}
              className="grid overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02] md:grid-cols-12"
            >
              <div className="relative flex flex-col justify-between border-b border-white/10 bg-gradient-to-br from-[oklch(0.22_0.05_60)]/50 to-[oklch(0.14_0.015_265)] p-10 md:col-span-4 md:border-b-0 md:border-r md:p-12">
                <div>
                  <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                    Case {String(i + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-4 font-display text-3xl md:text-4xl">{c.brand}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{c.category}</p>
                </div>
                <div className="mt-10 flex items-center gap-2 text-sm font-medium text-brand-gradient">
                  Read the story <ArrowUpRight className="h-4 w-4" />
                </div>
              </div>

              <div className="p-10 md:col-span-8 md:p-12">
                <h4 className="text-balance font-display text-2xl md:text-3xl">{c.headline}</h4>
                <p className="mt-4 max-w-2xl text-muted-foreground">{c.body}</p>
                <div className="mt-8 grid gap-6 border-t border-white/10 pt-6 sm:grid-cols-3">
                  {c.stats.map((s) => (
                    <div key={s.k}>
                      <p className="font-display numeral text-3xl text-brand-gradient">{s.k}</p>
                      <p className="mt-1 text-xs text-muted-foreground">{s.v}</p>
                    </div>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section className="!pt-0">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-[oklch(0.22_0.05_60)]/40 to-[oklch(0.14_0.015_265)] p-10 md:p-16">
          <div className="grid gap-6 md:grid-cols-2 md:items-center">
            <h2 className="text-3xl md:text-4xl">Your brand could be next.</h2>
            <div className="flex md:justify-end">
              <Button asChild size="lg" className="bg-brand-gradient text-[oklch(0.15_0.02_265)] font-semibold hover:opacity-90">
                <Link to="/contact">Book a growth audit <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
