import type { ReactNode } from "react";
import type { PublishedRecord } from "@/content/types";
import { PageHero } from "./PageHero";
import { MarkdownBody } from "./MarkdownBody";
import { Reveal } from "./Reveal";
import { JsonLd, buildBreadcrumbJsonLd } from "./JsonLd";

type Crumb = { label: string; to?: string };

export function CoreTemplate({
  record,
  eyebrow,
  crumbs = [],
  children,
}: {
  record: PublishedRecord;
  eyebrow: string;
  crumbs?: Crumb[];
  children?: ReactNode;
}) {
  const { h1, description, path } = record.metadata;

  return (
    <>
      <JsonLd
        data={buildBreadcrumbJsonLd(
          crumbs.map((c) => ({ name: c.label, path: c.to ?? path }))
        )}
      />
      <PageHero eyebrow={eyebrow} title={h1} intro={description} crumbs={crumbs} />

      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-[860px] px-6 lg:px-10">
          <Reveal>
            <MarkdownBody markdown={record.bodyMarkdown} />
          </Reveal>
        </div>
      </section>

      {children}
    </>
  );
}
