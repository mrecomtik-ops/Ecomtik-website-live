import { createFileRoute, notFound } from "@tanstack/react-router";

import { getPublishedRecordBySlug } from "@/content/registry";
import { buildRecordHead } from "@/content/head";
import { ArticleTemplate } from "@/components/site/ArticleTemplate";
import { getPublishedCustomPost, customPostToRecord } from "@/lib/blog-store-server-fn";

export const Route = createFileRoute("/blog/$slug")({
  loader: async ({ params }) => {
    const record = getPublishedRecordBySlug("blog", params.slug);
    if (record) return record;

    const customPost = await getPublishedCustomPost({ data: { slug: params.slug } });
    if (customPost) return customPostToRecord(customPost);

    throw notFound();
  },
  head: ({ loaderData }) => (loaderData ? buildRecordHead(loaderData) : {}),
  component: ArticlePage,
});

function ArticlePage() {
  const record = Route.useLoaderData();
  return <ArticleTemplate record={record} />;
}
