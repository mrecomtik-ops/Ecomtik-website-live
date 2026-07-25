import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/site/Section";
import { GridBg } from "@/components/site/GridBg";
import { getService, services } from "@/data/services";

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    const service = getService(params.slug);
    if (!service) throw notFound();
    return { service };
  },
  head: ({ loaderData }) => {
    const s = loaderData?.service;
    if (!s) return {};
    return {
      meta: [
        { title: `${s.title} — Ecomtik ${s.trackLabel}` },
        { name: "description", content: s.short },
        { name: "keywords", content: s.keywords },
        { property: "og:title", content: `${s.title} | Ecomtik` },
        { property: "og:description", content: s.short },
        { property: "og:url", content: `/services/${s.slug}` },
      ],
      links: [{ rel: "canonical", href: `/services/${s.slug}` }],
    };
  },
  component: ServiceDetailPage,
  notFoundComponent: () => (
    <div className="container-page py-24 text-center">
      <p className="eyebrow">404</p>
      <h1 className="mt-4 text-4xl">Service not found</h1>
      <Link to="/services" className="mt-6 inline-block text-brand-gradient">See all services →</Link>
    </div>
  ),
});

function ServiceDetailPage() {
  const { service: s } = Route.useLoaderData();
  const others = services.filter((x) => x.slug !== s.slug && x.track === s.track).slice(0, 3);

  return (
    <>
      <section className="relative overflow-hidden border-b border-white/5">
        <GridBg />
        <div className="absolute inset-x-0 top-0 -z-10 h-96 bg-[radial-gradient(ellipse_60%_60%_at_50%_0%,oklch(0.72_0.18_55/.25),transparent_70%)]" />
        <div className="container-page py-20 md:py-28">
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <Link to="/services" className="hover:text-foreground">Services</Link>
            <span>/</span>
            <span className="text-brand-gradient">Track {s.track} · {s.trackLabel}</span>
          </div>
          <div className="mt-6 grid gap-10 md:grid-cols-12">
            <div className="md:col-span-8">
              <div className="flex items-center gap-4">
                <span className="grid h-14 w-14 place-items-center rounded-xl bg-brand-gradient text-[oklch(0.15_0.02_265)]">
                  <s.icon className="h-7 w-7" />
                </span>
                <p className="eyebrow">{s.trackLabel}</p>
              </div>
              <h1 className="mt-6 text-balance text-4xl leading-[1.05] md:text-6xl">{s.title}</h1>
              <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">{s.short}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button asChild size="lg" className="bg-brand-gradient text-[oklch(0.15_0.02_265)] font-semibold hover:opacity-90">
                  <Link to="/contact">Book a discovery call <ArrowRight className="ml-2 h-4 w-4" /></Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-white/15 bg-white/5 hover:bg-white/10">
                  <Link to="/case-studies">See results</Link>
                </Button>
              </div>
            </div>
            <div className="md:col-span-4">
              <div className="rounded-2xl glass-strong p-6">
                <p className="eyebrow text-[10px]">What you get</p>
                <ul className="mt-4 space-y-3 text-sm">
                  {s.deliverables.map((d: string) => (
                    <li key={d} className="flex items-start gap-2">
                      <Check className="mt-0.5 h-4 w-4 text-[oklch(0.82_0.17_75)]" />
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Section eyebrow="Overview" title="What this service does for your brand.">
        <p className="max-w-3xl text-lg leading-relaxed text-muted-foreground">{s.overview}</p>
      </Section>

      <Section eyebrow="Process" title="How we deliver it.">
        <div className="grid gap-6 md:grid-cols-4">
          {s.process.map((p: { step: string; description: string }, i: number) => (
            <div key={p.step} className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
              <p className="font-mono text-sm text-brand-gradient">{String(i + 1).padStart(2, "0")}</p>
              <h3 className="mt-3 text-xl">{p.step}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.description}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="Outcomes" title="What clients see after 90 days.">
        <div className="grid gap-4 md:grid-cols-3">
          {s.outcomes.map((o: string) => (
            <div key={o} className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
              <Check className="h-5 w-5 text-[oklch(0.82_0.17_75)]" />
              <p className="mt-4 text-base leading-relaxed">{o}</p>
            </div>
          ))}
        </div>
      </Section>

      {s.faq.length > 0 && (
        <Section eyebrow="FAQ" title="Common questions.">
          <div className="divide-y divide-white/10 rounded-2xl border border-white/10 bg-white/[0.02]">
            {s.faq.map((f: { q: string; a: string }) => (
              <details key={f.q} className="group p-6">
                <summary className="flex cursor-pointer items-center justify-between text-base font-medium">
                  {f.q}
                  <span className="text-brand-gradient transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{f.a}</p>
              </details>
            ))}
          </div>
        </Section>
      )}

      <Section eyebrow={`More in Track ${s.track}`} title="Related services.">
        <div className="grid gap-5 md:grid-cols-3">
          {others.map((o) => (
            <Link key={o.slug} to={`/services/${o.slug}`} className="group rounded-2xl border border-white/10 bg-white/[0.02] p-6 hover:border-white/20">
              <span className="grid h-10 w-10 place-items-center rounded-lg bg-brand-gradient text-[oklch(0.15_0.02_265)]">
                <o.icon className="h-5 w-5" />
              </span>
              <h3 className="mt-4 text-lg">{o.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{o.short}</p>
            </Link>
          ))}
        </div>
      </Section>

      <Section className="!pt-0">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-[oklch(0.22_0.05_60)]/40 to-[oklch(0.14_0.015_265)] p-10 md:p-16">
          <div className="grid gap-6 md:grid-cols-2 md:items-center">
            <div>
              <h2 className="text-3xl md:text-4xl">Ready to talk about {s.title.toLowerCase()}?</h2>
              <p className="mt-3 text-muted-foreground">Send us your brief. We usually respond within one business day with an initial point of view.</p>
            </div>
            <div className="flex md:justify-end">
              <Button asChild size="lg" className="bg-brand-gradient text-[oklch(0.15_0.02_265)] font-semibold hover:opacity-90">
                <Link to="/contact">Book a discovery call <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
