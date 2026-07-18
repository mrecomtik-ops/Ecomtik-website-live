import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/site/Section";
import { GridBg } from "@/components/site/GridBg";
import { getPost, posts } from "@/data/blog";

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

  return (
    <>
      <section className="relative overflow-hidden border-b border-white/5">
        <GridBg />
        <div className="absolute inset-x-0 top-0 -z-10 h-96 bg-[radial-gradient(ellipse_60%_60%_at_50%_0%,oklch(0.72_0.18_55/.25),transparent_70%)]" />
        <div className="container-page py-20 md:py-28">
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <Link to="/blog" className="hover:text-foreground">Blog</Link>
            <span>/</span>
            <span className="text-brand-gradient">{p.category}</span>
          </div>
          <h1 className="mt-6 max-w-4xl text-balance text-4xl leading-[1.1] md:text-6xl">{p.title}</h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">{p.excerpt}</p>
          <div className="mt-6 flex items-center gap-3 text-xs text-muted-foreground">
            <span className="numeral">{new Date(p.date).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}</span>
            <span>·</span>
            <span>{p.readMins} min read</span>
          </div>
        </div>
      </section>

      <Section className="!py-16">
        <article className="prose prose-invert max-w-3xl">
          {p.body.map((para: string, i: number) => (
            <p key={i} className="mb-6 text-lg leading-relaxed text-foreground/90">{para}</p>
          ))}
        </article>
      </Section>

      <Section eyebrow="Keep reading" title="More from the blog.">
        <div className="grid gap-6 md:grid-cols-3">
          {others.map((o) => (
            <Link key={o.slug} to={`/blog/${o.slug}`} className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 hover:border-white/20">
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
              <p className="mt-3 text-muted-foreground">Book a discovery call — we'll come back with an initial point of view within two business days.</p>
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
