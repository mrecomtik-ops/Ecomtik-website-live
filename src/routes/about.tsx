import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Brain, CheckCircle2, Eye, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/site/PageHero";
import { Section } from "@/components/site/Section";
import { WHATSAPP_URL } from "@/data/site";
import aboutImg from "@/assets/ecomtik-brand-strategy-workspace.webp.asset.json";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Ecomtik — Built to Create Brands That Scale" },
      {
        name: "description",
        content:
          "Ecomtik helps businesses move from ideas to established brands through strategic branding, product development, marketplace expertise, and growth-focused execution.",
      },
      { name: "keywords", content: "brand building agency, Amazon growth agency Dubai, brand strategy, product development" },
      { property: "og:title", content: "About Ecomtik — Built to Create Brands That Scale" },
      { property: "og:description", content: "Brands built with strategic thinking, quality execution and long-term growth in mind." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

const approach = [
  { icon: Brain, t: "Strategic Thinking", d: "We combine research, creativity, and marketplace knowledge to build brands with a clear point of view." },
  { icon: CheckCircle2, t: "Quality Execution", d: "Every stage — from logo to listing — is built with attention to detail and craftsmanship." },
  { icon: Eye, t: "Transparent Process", d: "Clear communication from planning to launch. You always know what's happening and why." },
  { icon: TrendingUp, t: "Long-Term Growth", d: "We build brands designed for sustainable expansion across categories and marketplaces." },
];

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Ecomtik"
        title="Built by operators. Trusted by founders."
        description="We started Ecomtik in 2019 after a decade running ecommerce inside consumer brands. We were tired of agencies that optimized for hours, not outcomes — so we built the team we wished we could hire."
      />

      <Section className="!pt-24">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <p className="eyebrow">Our story</p>
          </div>
          <div className="md:col-span-8">
            <div className="space-y-6 text-lg leading-relaxed text-foreground/90">
              <p>Ecomtik began with a single account on Amazon.ae and a hypothesis: that operators who had built brands from the inside would make the best agency team. Six years later, we've launched and scaled over 40 brands across 21 marketplaces.</p>
              <p>We're headquartered in Dubai's Al Karama district, with satellite pods in Riyadh and London. Our clients range from founder-led beauty brands doing their first million on Amazon.ae, to established European manufacturers entering the GCC with full P&L accountability.</p>
              <p>What ties them together is a shared preference: strategic partners over service providers, craft over scale, and unit economics over vanity metrics.</p>
            </div>
          </div>
        </div>
      </Section>

      <Section eyebrow="Values" title="How we operate.">
        <div className="grid gap-6 md:grid-cols-2">
          {values.map((v) => (
            <div key={v.t} className="rounded-2xl border border-white/10 bg-white/[0.02] p-8">
              <span className="grid h-11 w-11 place-items-center rounded-lg bg-brand-gradient text-[oklch(0.15_0.02_265)]">
                <v.icon className="h-5 w-5" />
              </span>
              <h3 className="mt-6 text-xl">{v.t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{v.d}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="Team" title="A senior team on every account.">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((m) => (
            <div key={m.name} className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
              <div className="flex items-center gap-4">
                <div className="grid h-14 w-14 place-items-center rounded-full bg-brand-gradient font-display text-lg font-semibold text-[oklch(0.15_0.02_265)]">
                  {m.initials}
                </div>
                <div>
                  <p className="font-medium">{m.name}</p>
                  <p className="text-sm text-muted-foreground">{m.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section className="!pt-0">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-[oklch(0.22_0.05_60)]/40 to-[oklch(0.14_0.015_265)] p-10 md:p-16">
          <div className="grid gap-6 md:grid-cols-2 md:items-center">
            <div>
              <h2 className="text-3xl md:text-4xl">Want to work with us?</h2>
              <p className="mt-3 text-muted-foreground">We take on a small number of new brands each quarter. Tell us where you are — we'll tell you honestly whether we can help.</p>
            </div>
            <div className="flex flex-wrap gap-3 md:justify-end">
              <Button asChild size="lg" className="bg-brand-gradient text-[oklch(0.15_0.02_265)] font-semibold hover:opacity-90">
                <Link to="/contact">Start a conversation <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white/15 bg-white/5 hover:bg-white/10">
                <Link to="/case-studies">See our work</Link>
              </Button>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
