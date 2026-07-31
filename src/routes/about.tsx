import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Brain, CheckCircle2, Eye, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/site/PageHero";
import { Section } from "@/components/site/Section";
import { WHATSAPP_URL } from "@/data/site";
import aboutImg from "@/assets/ecomtik-brand-strategy-workspace.webp";

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
        title="BUILT TO CREATE BRANDS THAT SCALE."
        description="Ecomtik helps businesses move from ideas to established brands through strategic branding, product development, marketplace expertise, and growth-focused execution."
      />

      <Section className="!pt-24">
        <div className="grid gap-12 md:grid-cols-12 items-center">
          <div className="md:col-span-6">
            <p className="eyebrow">Our story</p>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold" style={{ fontFamily: "Sora, ui-sans-serif, system-ui" }}>Where ideas become global brands.</h2>
            <div className="mt-6 space-y-5 text-base leading-relaxed text-foreground/90">
              <p>Ecomtik is a Dubai-based brand builder and Amazon growth agency. We work with entrepreneurs and businesses that want to turn a product idea into a brand — and a brand into a sustainable, multi-marketplace business.</p>
              <p>Our team combines brand design, product development and Amazon expertise under one roof. Whether you need a logo and packaging, or a full Amazon private label launch, you work with the same people from start to finish.</p>
              <p>We're honest, practical, and long-term. No template decks, no vanity metrics — just the work that actually moves brands forward.</p>
            </div>
          </div>
          <div className="md:col-span-6">
            <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-[0_25px_60px_-20px_rgba(0,0,0,0.5)]">
              <img
                src={aboutImg}
                alt="Ecomtik brand strategy workspace with premium product prototypes and analytics"
                className="w-full h-auto object-cover"
                loading="lazy"
                decoding="async"
              />
              <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-[oklch(0.72_0.18_55)]/20" />
            </div>
          </div>
        </div>
      </Section>

      <Section eyebrow="Our approach" title="How we build brands that last.">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {approach.map((a) => (
            <div key={a.t} className="group rounded-2xl border border-white/10 bg-white/[0.02] p-8 transition-all hover:border-[oklch(0.72_0.18_55)]/40 hover:shadow-[0_0_30px_oklch(0.72_0.18_55/0.15)] hover:-translate-y-1">
              <span className="grid h-11 w-11 place-items-center rounded-lg bg-brand-gradient text-[oklch(0.15_0.02_265)] transition-transform group-hover:scale-110">
                <a.icon className="h-5 w-5" />
              </span>
              <h3 className="mt-6 text-xl font-bold" style={{ fontFamily: "Sora, ui-sans-serif, system-ui" }}>{a.t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{a.d}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="!pt-0">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-[oklch(0.22_0.05_60)]/40 to-[oklch(0.14_0.015_265)] p-10 md:p-16">
          <div className="grid gap-6 md:grid-cols-2 md:items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold" style={{ fontFamily: "Sora, ui-sans-serif, system-ui" }}>Want to work with us?</h2>
              <p className="mt-3 text-muted-foreground">Tell us about your brand and marketplace goals. We'll come back with a practical point of view.</p>
            </div>
            <div className="flex flex-wrap gap-3 md:justify-end">
              <Button asChild size="lg" className="bg-brand-gradient text-[oklch(0.15_0.02_265)] font-semibold hover:opacity-90 hover:scale-105 transition-transform">
                <a href={WHATSAPP_URL} target="_blank" rel="noreferrer">Book Free Consultation <ArrowRight className="ml-2 h-4 w-4" /></a>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white/15 bg-white/5 hover:bg-white/10">
                <Link to="/services">See services</Link>
              </Button>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}

