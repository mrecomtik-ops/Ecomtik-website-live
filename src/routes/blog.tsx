import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { Section } from "@/components/site/Section";
import { posts } from "@/data/blog";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Blog — Amazon Growth & Brand Building Insights | Ecomtik" },
      {
        name: "description",
        content:
          "Practical playbooks on Amazon PPC, brand building, marketplace expansion and packaging — from Ecomtik's Dubai team.",
      },
      { name: "keywords", content: "Amazon blog, Amazon PPC guide, Amazon UAE tips, ecommerce blog Dubai, brand building blog" },
      { property: "og:title", content: "Ecomtik Blog — Amazon + Brand Playbooks" },
      { property: "og:description", content: "Playbooks on Amazon growth and brand building from Dubai." },
      { property: "og:url", content: "/blog" },
    ],
    links: [{ rel: "canonical", href: "/blog" }],
  }),
  component: BlogIndex,
});

function BlogIndex() {
  const [featured, ...rest] = posts;
  return (
    <>
      <PageHero
        eyebrow="Blog"
        title="Playbooks from operators who ship, not theorists who tweet."
        description="Field notes on Amazon growth, brand building and marketplace expansion — written by the Ecomtik team."
      />

      <Section className="!pt-24">
        <Link
          to={`/blog/${featured.slug}`}
          className="group grid gap-8 rounded-3xl border border-white/10 bg-gradient-to-br from-[oklch(0.22_0.05_60)]/30 to-[oklch(0.14_0.015_265)] p-8 transition-colors hover:border-white/20 md:grid-cols-12 md:p-10"
        >
          <div className="md:col-span-8">
            <div className="flex items-center gap-3 text-xs">
              <span className="rounded-full bg-brand-gradient px-3 py-1 font-semibold text-[oklch(0.15_0.02_265)]">Featured</span>
              <span className="text-muted-foreground">{featured.category} · {featured.readMins} min read</span>
            </div>
            <h2 className="mt-5 text-balance font-display text-3xl md:text-4xl">{featured.title}</h2>
            <p className="mt-4 text-muted-foreground">{featured.excerpt}</p>
            <span className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-brand-gradient">
              Read the article <ArrowUpRight className="h-4 w-4" />
            </span>
          </div>
          <div className="md:col-span-4">
            <div className="h-full rounded-2xl border border-white/10 bg-white/5 p-6">
              <p className="eyebrow text-[10px]">Publication</p>
              <p className="mt-3 font-display numeral text-xl">{new Date(featured.date).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}</p>
            </div>
          </div>
        </Link>
      </Section>

      <Section>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {rest.map((p) => (
            <Link
              key={p.slug}
              to={`/blog/${p.slug}`}
              className="group flex flex-col rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition-colors hover:border-white/20 hover:bg-white/[0.05]"
            >
              <div className="flex items-center justify-between text-xs">
                <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-muted-foreground">{p.category}</span>
                <span className="text-muted-foreground">{p.readMins} min</span>
              </div>
              <h3 className="mt-5 flex-1 font-display text-xl">{p.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground line-clamp-3">{p.excerpt}</p>
              <div className="mt-6 flex items-center justify-between text-xs text-muted-foreground">
                <span className="numeral">{new Date(p.date).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" })}</span>
                <ArrowUpRight className="h-4 w-4 transition-colors group-hover:text-foreground" />
              </div>
            </Link>
          ))}
        </div>
      </Section>
    </>
  );
}
