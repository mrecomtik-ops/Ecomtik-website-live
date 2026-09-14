import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import type { PublishedRecord } from "@/content/types";
import { getRecordById, slugFromPath } from "@/content/registry";
import { PageHero } from "./PageHero";
import { MarkdownBody } from "./MarkdownBody";
import { Reveal } from "./Reveal";
import { JsonLd, buildBreadcrumbJsonLd } from "./JsonLd";

export function ArticleTemplate({ record }: { record: PublishedRecord }) {
  const { h1, description, category, author, publishedAt, canonicalOnPublication, path } =
    record.metadata;
  const relatedServiceId = record.metadata.relatedServiceIds?.[0];
  const relatedService = relatedServiceId ? getRecordById(relatedServiceId) : undefined;

  return (
    <>
      <JsonLd
        data={buildBreadcrumbJsonLd([
          { name: "Blog", path: "/blog" },
          { name: h1, path },
        ])}
      />
      {/* Article schema requires real author/publication-date facts before it
          can render — currently sourced from src/content/records.json's
          author/publishedAt fields, set to a genuine editorial byline and
          the verified date this content first went live in production. */}
      {author && publishedAt && (
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: h1,
            description,
            mainEntityOfPage: canonicalOnPublication,
            author: { "@type": "Organization", name: author },
            publisher: { "@id": "https://ecomtik.com/#organization" },
            datePublished: publishedAt,
            ...(record.metadata.reviewedAt ? { dateModified: record.metadata.reviewedAt } : {}),
          }}
        />
      )}
      <PageHero
        eyebrow={category ?? "Guide"}
        title={h1}
        intro={description}
        crumbs={[{ label: "Blog", to: "/blog" }, { label: h1 }]}
      />

      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-[720px] px-6 lg:px-10">
          {(author || publishedAt) && (
            <p className="mb-8 text-sm text-graphite/60">
              {author && <span>By {author}</span>}
              {author && publishedAt && <span> · </span>}
              {publishedAt && (
                <time dateTime={publishedAt}>
                  {new Date(publishedAt).toLocaleDateString("en-GB", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </time>
              )}
              {record.metadata.reviewedAt && (
                <>
                  {" "}
                  · Updated{" "}
                  <time dateTime={record.metadata.reviewedAt}>
                    {new Date(record.metadata.reviewedAt).toLocaleDateString("en-GB", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </time>
                </>
              )}
            </p>
          )}
          <Reveal>
            <MarkdownBody markdown={record.bodyMarkdown} />
          </Reveal>

          {relatedService && relatedService.status === "published" ? (
            <div className="mt-14 rounded-[24px] border border-ink/8 bg-softgray p-8">
              <p className="text-sm font-semibold text-ink">Need a structured review?</p>
              <p className="mt-2 text-sm leading-relaxed text-graphite/75">
                {relatedService.metadata.h1}
              </p>
              <div className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-2">
                <Link
                  to="/contact"
                  search={{ service: relatedService.metadata.id }}
                  className="group inline-flex items-center gap-2 text-sm font-semibold text-brand hover:text-brand-amber"
                >
                  Get a scoped review
                  <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
                <Link
                  to="/services/$slug"
                  params={{ slug: slugFromPath(relatedService.metadata.path) }}
                  className="text-sm font-medium text-graphite/70 hover:text-ink"
                >
                  Read the full service scope
                </Link>
              </div>
            </div>
          ) : (
            // The topically closest service record (e.g. account health,
            // FBA operations) is still gated pending business confirmation —
            // see BUSINESS-INPUTS-NEEDED.md. Every article still needs a
            // next-step CTA, so fall back to a general enquiry link rather
            // than showing nothing.
            <div className="mt-14 rounded-[24px] border border-ink/8 bg-softgray p-8">
              <p className="text-sm font-semibold text-ink">Need help with this?</p>
              <p className="mt-2 text-sm leading-relaxed text-graphite/75">
                Tell Ecomtik what you're seeing and get a candid view of the next step.
              </p>
              <Link
                to="/contact"
                className="group mt-4 inline-flex items-center gap-2 text-sm font-semibold text-brand hover:text-brand-amber"
              >
                Get in touch
                <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
