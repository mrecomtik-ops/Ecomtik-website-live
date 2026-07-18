import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowRight, Check, Globe2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/site/Section";
import { GridBg } from "@/components/site/GridBg";
import { getMarketplace, marketplaces } from "@/data/marketplaces";

export const Route = createFileRoute("/marketplaces/$slug")({
  loader: ({ params }) => {
    const marketplace = getMarketplace(params.slug);
    if (!marketplace) throw notFound();
    return { marketplace };
  },
  head: ({ loaderData }) => {
    const m = loaderData?.marketplace;
    if (!m) return {};
    return {
      meta: [
        { title: `Sell on ${m.code} — ${m.name} Launch Agency | Ecomtik` },
        { name: "description", content: `Launch and scale your brand on ${m.code}. ${m.overview.slice(0, 140)}` },
        { name: "keywords", content: m.keywords },
        { property: "og:title", content: `Sell on ${m.code} | Ecomtik` },
        { property: "og:description", content: m.overview },
        { property: "og:url", content: `/marketplaces/${m.slug}` },
      ],
      links: [{ rel: "canonical", href: `/marketplaces/${m.slug}` }],
    };
  },
  component: MarketplaceDetailPage,
  notFoundComponent: () => (
    <div className="container-page py-24 text-center">
      <p className="eyebrow">404</p>
      <h1 className="mt-4 text-4xl">Marketplace not found</h1>
      <Link to="/marketplaces" className="mt-6 inline-block text-brand-gradient">See all marketplaces →</Link>
    </div>
  ),
});

function MarketplaceDetailPage() {
  const { marketplace: m } = Route.useLoaderData();
  const regional = marketplaces.filter((x) => x.slug !== m.slug && x.region === m.region).slice(0, 4);

  return (
    <>
      <section className="relative overflow-hidden border-b border-white/5">
        <GridBg />
        <div className="absolute inset-x-0 top-0 -z-10 h-96 bg-[radial-gradient(ellipse_60%_60%_at_50%_0%,oklch(0.72_0.18_55/.25),transparent_70%)]" />
        <div className="container-page py-20 md:py-28">
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <Link to="/marketplaces" className="hover:text-foreground">Marketplaces</Link>
            <span>/</span>
            <span className="text-brand-gradient">{m.region}</span>
          </div>
          <div className="mt-6 flex items-center gap-6">
            <span className="text-7xl leading-none">{m.flag}</span>
            <div>
              <p className="eyebrow">{m.region}</p>
              <h1 className="mt-2 text-balance text-4xl md:text-6xl">{m.name}</h1>
              <p className="mt-2 font-mono text-sm text-muted-foreground">{m.code}</p>
            </div>
          </div>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground">{m.overview}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild size="lg" className="bg-brand-gradient text-[oklch(0.15_0.02_265)] font-semibold hover:opacity-90">
              <Link to="/contact">Plan a {m.name} launch <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white/15 bg-white/5 hover:bg-white/10">
              <Link to="/services">See services</Link>
            </Button>
          </div>
        </div>
      </section>

      <Section>
        <div className="grid gap-6 md:grid-cols-3">
          <Fact label="Currency" value={m.currency} />
          <Fact label="Language" value={m.language} />
          <Fact label="Region" value={m.region} />
        </div>
      </Section>

      <Section eyebrow="Opportunity" title={`Why brands launch in ${m.name}.`}>
        <div className="grid gap-4 md:grid-cols-2">
          {m.opportunity.map((o) => (
            <div key={o} className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.02] p-6">
              <Check className="mt-0.5 h-5 w-5 text-[oklch(0.82_0.17_75)]" />
              <p className="text-base">{o}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="Requirements" title="What you need to launch.">
        <ul className="divide-y divide-white/10 rounded-2xl border border-white/10 bg-white/[0.02]">
          {m.requirements.map((r) => (
            <li key={r} className="flex items-start gap-3 p-5">
              <Globe2 className="mt-0.5 h-5 w-5 text-[oklch(0.82_0.17_75)]" />
              <span>{r}</span>
            </li>
          ))}
        </ul>
      </Section>

      <Section eyebrow={`Other ${m.region} markets`} title="Regional coverage.">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {regional.map((r) => (
            <Link key={r.slug} to={`/marketplaces/${r.slug}`} className="rounded-2xl border border-white/10 bg-white/[0.02] p-5 hover:border-white/20">
              <div className="flex items-center gap-3">
                <span className="text-2xl">{r.flag}</span>
                <div>
                  <p className="font-medium">{r.name}</p>
                  <p className="font-mono text-xs text-muted-foreground">{r.code}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Section>

      <Section className="!pt-0">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-[oklch(0.22_0.05_60)]/40 to-[oklch(0.14_0.015_265)] p-10 md:p-16">
          <div className="grid gap-6 md:grid-cols-2 md:items-center">
            <div>
              <h2 className="text-3xl md:text-4xl">Launching on {m.code}?</h2>
              <p className="mt-3 text-muted-foreground">We handle setup, compliance, catalog, creative and media — end to end.</p>
            </div>
            <div className="flex md:justify-end">
              <Button asChild size="lg" className="bg-brand-gradient text-[oklch(0.15_0.02_265)] font-semibold hover:opacity-90">
                <Link to="/contact">Talk to our team <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}

function Fact({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
      <p className="eyebrow text-[10px]">{label}</p>
      <p className="mt-2 font-display text-xl">{value}</p>
    </div>
  );
}
