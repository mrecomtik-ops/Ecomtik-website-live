import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Building2, Compass, Handshake, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/site/PageHero";
import { Section } from "@/components/site/Section";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Ecomtik — Dubai Brand Builder & Amazon Agency" },
      {
        name: "description",
        content:
          "Founded in Dubai in 2019, Ecomtik is a team of operators, marketers and creatives building category-leading consumer brands on Amazon.",
      },
      { property: "og:title", content: "About Ecomtik" },
      {
        property: "og:description",
        content:
          "A Dubai team of operators, marketers and creatives building brands on Amazon.",
      },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

const values = [
  {
    icon: Compass,
    t: "Operators first",
    d: "Most of our team has run a P&L. We think like a category manager, not a media buyer.",
  },
  {
    icon: Handshake,
    t: "Aligned incentives",
    d: "We win when your unit economics improve. Retainers scale with results, not hours logged.",
  },
  {
    icon: Sparkles,
    t: "Craft over volume",
    d: "Fewer, better clients. Senior operators on every account — not a rotating junior team.",
  },
  {
    icon: Building2,
    t: "Regional, global reach",
    d: "Dubai HQ, satellite pods in Riyadh and London. Native content in Arabic, English, German.",
  },
];

const team = [
  { name: "Omar Haddad", role: "Founder & CEO", initials: "OH" },
  { name: "Sarah Meister", role: "Head of Growth", initials: "SM" },
  { name: "Yusuf Al Balushi", role: "Head of Media", initials: "YB" },
  { name: "Priya Nair", role: "Creative Director", initials: "PN" },
  { name: "Daniel Voss", role: "Head of Operations", initials: "DV" },
  { name: "Layla Kassab", role: "Client Partner, GCC", initials: "LK" },
];

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Ecomtik"
        title="Built by operators. Trusted by founders."
        description="We started Ecomtik in 2019 after a decade running ecommerce inside consumer brands. We were tired of agencies that optimized for hours, not outcomes — so we built the team we wished we could hire."
      />

      {/* Story */}
      <Section className="!pt-24">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <p className="eyebrow">Our story</p>
          </div>
          <div className="md:col-span-8">
            <div className="space-y-6 text-lg leading-relaxed text-foreground/90">
              <p>
                Ecomtik began with a single account in Amazon.ae and a hypothesis:
                that the operators building brands inside consumer companies would
                make the best agency team. Six years later, we've launched and scaled
                over 40 brands across nine marketplaces.
              </p>
              <p>
                We're headquartered in Business Bay, Dubai, with pods in Riyadh and
                London. Our clients range from founder-led beauty brands doing
                their first million on Amazon.ae, to established European
                manufacturers entering the GCC with full P&L accountability.
              </p>
              <p>
                What ties them together is a shared preference: strategic partners
                over service providers, craft over scale, and unit economics over
                vanity metrics.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Values */}
      <Section eyebrow="Values" title="How we operate.">
        <div className="grid gap-6 md:grid-cols-2">
          {values.map((v) => (
            <div key={v.t} className="rounded-2xl border border-border bg-card p-8">
              <v.icon className="h-6 w-6 text-primary" />
              <h3 className="mt-6 text-xl">{v.t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{v.d}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Team */}
      <Section eyebrow="Team" title="A senior team on every account.">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((m) => (
            <div key={m.name} className="rounded-2xl border border-border bg-card p-6">
              <div className="flex items-center gap-4">
                <div className="grid h-14 w-14 place-items-center rounded-full bg-gradient-to-br from-gold to-accent font-display text-lg font-semibold text-gold-foreground">
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

      {/* CTA */}
      <Section className="!pt-0">
        <div className="rounded-3xl border border-border bg-secondary/60 p-10 md:p-16">
          <div className="grid gap-6 md:grid-cols-2 md:items-center">
            <div>
              <h2 className="text-3xl md:text-4xl">Want to work with us?</h2>
              <p className="mt-3 text-muted-foreground">
                We take on a small number of new brands each quarter. Tell us where
                you are — we'll tell you honestly whether we can help.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 md:justify-end">
              <Button asChild size="lg">
                <Link to="/contact">Start a conversation <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/case-studies">See our work</Link>
              </Button>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
