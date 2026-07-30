import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { AlertTriangle, ArrowRight, Check, Globe2, Languages, Receipt, Truck, TriangleAlert, UserRound } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/site/Section";
import { GridBg } from "@/components/site/GridBg";
import { getMarketplace, marketplaces } from "@/data/marketplaces";
import { services } from "@/data/services";
import { getMarketplaceDetail } from "@/data/detail-content";

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
  const d = getMarketplaceDetail(m);
  const relatedServices = services.filter((x) =>
    ["amazon-brand-launch", "brand-registry", "digital-marketing", "company-setup"].includes(x.slug),
  );

  return (
    <>
      <section className="relative overflow-hidden border-b border-white/5">
        <GridBg />
        <div className="absolute inset-x-0 top-0 -z-10 h-96 bg-[radial-gradient(ellipse_60%_60%_at_50%_0%,oklch(0.72_0.18_55/.25),transparent_70%)]" />
        <div className="container-page py-20 md:py-28">
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <Link to="/" className="hover:text-foreground">Home</Link>
            <span>/</span>
            <Link to="/marketplaces" className="hover:text-foreground">Marketplaces</Link>
            <span>/</span>
            <span className="text-brand-gradient">{m.name}</span>
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
          {m.opportunity.map((o: string) => (
            <div key={o} className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.02] p-6">
              <Check className="mt-0.5 h-5 w-5 text-[oklch(0.82_0.17_75)]" />
              <p className="text-base">{o}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="Seller profile" title={`Who succeeds in ${m.name}.`}>
        <div className="grid gap-4 md:grid-cols-2">
          {d.sellerProfile.map((x) => (
            <div key={x} className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.02] p-6">
              <UserRound className="mt-0.5 h-5 w-5 shrink-0 text-[oklch(0.82_0.17_75)]" />
              <p className="text-base">{x}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="Registration" title="Getting your account live.">
        <ul className="divide-y divide-white/10 rounded-2xl border border-white/10 bg-white/[0.02]">
          {d.registration.map((r, i) => (
            <li key={r} className="flex items-start gap-4 p-5">
              <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-brand-gradient text-xs font-semibold text-[oklch(0.15_0.02_265)]">{i + 1}</span>
              <span className="text-base">{r}</span>
            </li>
          ))}
        </ul>
      </Section>

      <Section eyebrow="Localisation" title={`Speaking to ${m.name} buyers.`}>
        <div className="grid gap-4 md:grid-cols-2">
          {d.localisation.map((x) => (
            <div key={x} className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.02] p-6">
              <Languages className="mt-0.5 h-5 w-5 shrink-0 text-[oklch(0.82_0.17_75)]" />
              <p className="text-base">{x}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="Fulfilment" title="Getting stock to the buyer.">
        <div className="grid gap-4 md:grid-cols-2">
          {d.fulfilment.map((x) => (
            <div key={x} className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.02] p-6">
              <Truck className="mt-0.5 h-5 w-5 shrink-0 text-[oklch(0.82_0.17_75)]" />
              <p className="text-base">{x}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="Tax & compliance" title="What to confirm before you ship.">
        <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-8">
          <Receipt className="h-6 w-6 text-[oklch(0.82_0.17_75)]" />
          <ul className="mt-4 space-y-3 text-base text-muted-foreground">
            {d.tax.map((x) => (
              <li key={x} className="flex items-start gap-3">
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[oklch(0.82_0.17_75)]" />
                <span>{x}</span>
              </li>
            ))}
          </ul>
          <p className="mt-6 flex items-start gap-3 rounded-xl border border-[oklch(0.72_0.18_55)]/30 bg-[oklch(0.72_0.18_55)]/[0.07] p-4 text-sm text-muted-foreground">
            <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-[oklch(0.82_0.17_75)]" />
            <span>Disclaimer: this page is general market information, not legal, tax or accounting advice. Always confirm your obligations with a licensed advisor in {m.name}.</span>
          </p>
        </div>
      </Section>

      <Section eyebrow="Common challenges" title={`Where ${m.name} launches go wrong.`}>
        <div className="grid gap-4 md:grid-cols-2">
          {d.challenges.map((x) => (
            <div key={x} className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.02] p-6">
              <TriangleAlert className="mt-0.5 h-5 w-5 shrink-0 text-[oklch(0.82_0.17_75)]" />
              <p className="text-base">{x}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="Our launch process" title={`How we take you live in ${m.name}.`}>
        <div className="grid gap-4 md:grid-cols-3">
          {d.launchProcess.map((p, i) => (
            <div key={p.step} className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
              <p className="numeral text-3xl text-brand-gradient">{String(i + 1).padStart(2, "0")}</p>
              <h3 className="mt-3 text-lg">{p.step}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.description}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="Requirements" title="What you need to launch.">
        <ul className="divide-y divide-white/10 rounded-2xl border border-white/10 bg-white/[0.02]">
          {m.requirements.map((r: string) => (
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
            <Link key={r.slug} to="/marketplaces/$slug" params={{ slug: r.slug }} className="rounded-2xl border border-white/10 bg-white/[0.02] p-5 hover:border-white/20">
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

      <Section eyebrow="Related services" title="What we run in this market.">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {relatedServices.map((sv) => (
            <Link
              key={sv.slug}
              to="/services/$slug"
              params={{ slug: sv.slug }}
              className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition-colors hover:border-white/20"
            >
              <sv.icon className="h-5 w-5 text-[oklch(0.82_0.17_75)]" />
              <p className="mt-3 font-medium">{sv.title}</p>
              <p className="mt-1 text-sm text-muted-foreground">{sv.short}</p>
            </Link>
          ))}
        </div>
      </Section>

      <Section eyebrow="FAQ" title={`${m.name} questions.`}>
        <div className="divide-y divide-white/10 rounded-2xl border border-white/10 bg-white/[0.02]">
          {d.faq.map((f) => (
            <div key={f.q} className="p-6">
              <h3 className="text-lg">{f.q}</h3>
              <p className="mt-2 text-base leading-relaxed text-muted-foreground">{f.a}</p>
            </div>
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
