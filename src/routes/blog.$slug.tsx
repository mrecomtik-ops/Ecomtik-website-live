import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowRight, CalendarDays, Clock, ListOrdered, UserRound } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/site/Section";
import { GridBg } from "@/components/site/GridBg";
import { getPost, posts } from "@/data/blog";
import { blogAuthor, getBlogSections, slugify } from "@/data/detail-content";
import featuredImg from "@/assets/ecomtik-brand-strategy-workspace.webp";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = getPost(params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ loaderData }) => {
    const p = loaderData?.post;
    if (!p) return {};
    return {
      meta: [
        { title: `${p.title} | Ecomtik Blog` },
        { name: "description", content: p.excerpt },
        { property: "og:title", content: p.title },
        { property: "og:description", content: p.excerpt },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `/blog/${p.slug}` },
        { property: "article:published_time", content: p.date },
        { property: "article:section", content: p.category },
      ],
      links: [{ rel: "canonical", href: `/blog/${p.slug}` }],
    };
  },
  component: BlogPostPage,
  notFoundComponent: () => (
    <div className="container-page py-24 text-center">
      <p className="eyebrow">404</p>
      <h1 className="mt-4 text-4xl">Article not found</h1>
      <Link to="/blog" className="mt-6 inline-block text-brand-gradient">Back to blog →</Link>
    </div>
  ),
});

function BlogPostPage() {
  const { post: p } = Route.useLoaderData();
  const others = posts.filter((x) => x.slug !== p.slug).slice(0, 3);
  const sections = getBlogSections(p);

  return (
    <>
      <section className="relative overflow-hidden border-b border-white/5">
        <GridBg />
        <div className="absolute inset-x-0 top-0 -z-10 h-96 bg-[radial-gradient(ellipse_60%_60%_at_50%_0%,oklch(0.72_0.18_55/.25),transparent_70%)]" />
        <div className="container-page py-20 md:py-28">
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <Link to="/" className="hover:text-foreground">Home</Link>
            <span>/</span>
            <Link to="/blog" className="hover:text-foreground">Blog</Link>
            <span>/</span>
            <span className="text-brand-gradient">{p.category}</span>
          </div>
          <h1 className="mt-6 max-w-4xl text-balance text-4xl leading-[1.1] md:text-6xl">{p.title}</h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">{p.excerpt}</p>
          <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-2">
              <UserRound className="h-4 w-4 text-[oklch(0.82_0.17_75)]" />
              {blogAuthor.name} · {blogAuthor.role}
            </span>
            <span className="inline-flex items-center gap-2">
              <CalendarDays className="h-4 w-4 text-[oklch(0.82_0.17_75)]" />
              <span className="numeral">
                {new Date(p.date).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}
              </span>
            </span>
            <span className="inline-flex items-center gap-2">
              <Clock className="h-4 w-4 text-[oklch(0.82_0.17_75)]" />
              {p.readMins} min read
            </span>
          </div>
          <div className="mt-10 overflow-hidden rounded-3xl border border-white/10">
            <img
              src={featuredImg}
              alt={`${p.title} — Ecomtik article cover`}
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      <Section className="!py-16">
        <div className="grid gap-12 lg:grid-cols-12">
          <aside className="lg:col-span-4 lg:order-2">
            <div className="sticky top-28 rounded-2xl border border-white/10 bg-white/[0.02] p-6">
              <p className="eyebrow inline-flex items-center gap-2 text-[10px]">
                <ListOrdered className="h-3.5 w-3.5" /> On this page
              </p>
              <ul className="mt-4 space-y-2.5 text-sm">
                {sections.map((sec) => (
                  <li key={sec.heading}>
                    <a href={`#${slugify(sec.heading)}`} className="text-muted-foreground transition-colors hover:text-foreground">
                      {sec.heading}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          <article className="max-w-3xl lg:col-span-8 lg:order-1">
            <p className="text-xl leading-relaxed text-foreground/90">{p.excerpt}</p>
            {sections.map((sec) => (
              <section key={sec.heading} id={slugify(sec.heading)} className="scroll-mt-28 pt-10">
                <h2 className="text-2xl md:text-3xl">{sec.heading}</h2>
                <p className="mt-4 text-lg leading-relaxed text-foreground/90">{sec.body}</p>
              </section>
            ))}
          </article>
        </div>
      </Section>

      <Section eyebrow="Keep reading" title="More from the blog.">
        <div className="grid gap-6 md:grid-cols-3">
          {others.map((o) => (
            <Link key={o.slug} to="/blog/$slug" params={{ slug: o.slug }} className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 hover:border-white/20">
              <span className="text-xs text-muted-foreground">{o.category}</span>
              <h3 className="mt-3 font-display text-lg">{o.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground line-clamp-2">{o.excerpt}</p>
            </Link>
          ))}
        </div>
      </Section>

      <Section className="!pt-0">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-[oklch(0.22_0.05_60)]/40 to-[oklch(0.14_0.015_265)] p-10 md:p-16">
          <div className="grid gap-6 md:grid-cols-2 md:items-center">
            <div>
              <h2 className="text-3xl md:text-4xl">Want a plan like this for your brand?</h2>
              <p className="mt-3 text-muted-foreground">Book a discovery call — we usually respond within one business day.</p>
            </div>
            <div className="flex md:justify-end">
              <Button asChild size="lg" className="bg-brand-gradient text-[oklch(0.15_0.02_265)] font-semibold hover:opacity-90">
                <Link to="/contact">Book a call <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
