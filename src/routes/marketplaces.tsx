import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { Section } from "@/components/site/Section";
import { marketplacesByRegion, marketplaces } from "@/data/marketplaces";

export const Route = createFileRoute("/marketplaces")({
  head: () => ({
    meta: [
      { title: "21 Amazon Marketplaces — Global Coverage | Ecomtik" },
      {
        name: "description",
        content:
          "Launch and scale your brand across 21 Amazon marketplaces — from Amazon.ae and Amazon.sa to Amazon.com, Amazon.jp and beyond. Local pricing, tax and creative from Ecomtik.",
      },
      { name: "keywords", content: "Amazon global marketplaces, Amazon international expansion, sell on Amazon UAE, sell on Amazon Saudi Arabia, Amazon Europe launch" },
      { property: "og:title", content: "21 Amazon Marketplaces | Ecomtik" },
      { property: "og:description", content: "Global Amazon coverage — 21 Amazon marketplaces, one operating team." },
      { property: "og:url", content: "/marketplaces" },
    ],
    links: [{ rel: "canonical", href: "/marketplaces" }],
  }),
  component: MarketplacesPage,
});

const regionSlugs: Record<string, string> = {
  "GCC & MENA": "gcc-mena",
  "Europe": "europe",
  "North America": "north-america",
  "Asia Pacific": "asia-pacific",
  "Latin America": "latin-america",
};

function MarketplacesPage() {
  return (
    <>
      <PageHero
        eyebrow={`${marketplaces.length} Amazon marketplaces`}
        title="One team. Every Amazon marketplace worth being on."
        description="We operate across 21 Amazon marketplaces globally — with local content, tax, logistics and creative. Pick a market to see how we launch there."
      />

      <Section className="!pt-24">
        <div className="space-y-16">
          {marketplacesByRegion.map((r) => (
            <div key={r.region} id={regionSlugs[r.region]} className="scroll-mt-28">
              <div className="flex items-baseline justify-between">
                <div>
                  <p className="eyebrow">{r.region}</p>
                  <h2 className="mt-2 text-3xl md:text-4xl">{r.items.length} marketplace{r.items.length > 1 ? "s" : ""}</h2>
                </div>
              </div>
              <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {r.items.map((m) => (
                  <Link
                    key={m.slug}
                    to={`/marketplaces/${m.slug}`}
                    className="group flex items-start justify-between gap-4 rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition-colors hover:border-white/20 hover:bg-white/[0.05]"
                  >
                    <div>
                      <div className="flex items-center gap-3">
                        <span className="text-3xl">{m.flag}</span>
                        <div>
                          <h3 className="font-display text-lg font-semibold">{m.name}</h3>
                          <p className="font-mono text-xs text-muted-foreground">{m.code}</p>
                        </div>
                      </div>
                      <p className="mt-4 text-sm leading-relaxed text-muted-foreground line-clamp-2">{m.overview}</p>
                    </div>
                    <ArrowUpRight className="h-5 w-5 shrink-0 text-muted-foreground transition-colors group-hover:text-foreground" />
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
