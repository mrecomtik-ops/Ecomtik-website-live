export function JsonLd({ data }: { data: Record<string, unknown> }) {
  const json = JSON.stringify(data).replace(/</g, "\\u003c");
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: json }} />
  );
}

export const ORGANIZATION_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://ecomtik.com/#organization",
  name: "Ecomtik",
  url: "https://ecomtik.com/",
};

const SITE_ORIGIN = "https://ecomtik.com";

/** Builds BreadcrumbList JSON-LD matching the visible PageHero breadcrumb trail. `crumbs` excludes the implicit "Home" root. */
export function buildBreadcrumbJsonLd(
  crumbs: { name: string; path: string }[]
): Record<string, unknown> {
  const items = [
    { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_ORIGIN}/` },
    ...crumbs.map((c, i) => ({
      "@type": "ListItem",
      position: i + 2,
      name: c.name,
      item: `${SITE_ORIGIN}${c.path}`,
    })),
  ];
  return { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: items };
}
