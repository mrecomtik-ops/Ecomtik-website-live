import { createFileRoute, notFound } from "@tanstack/react-router";

import { getRecordById } from "@/content/registry";
import { buildRecordHead } from "@/content/head";
import { CoreTemplate } from "@/components/site/CoreTemplate";
import { ArticleDirectory } from "@/components/site/ArticleDirectory";
import { listPublishedCustomPosts, customPostToRecord } from "@/lib/blog-store-server-fn";

export const Route = createFileRoute("/blog/")({
  loader: async () => {
    const record = getRecordById("blog");
    if (!record) throw notFound();
    const customPosts = await listPublishedCustomPosts();
    return { record, customRecords: customPosts.map(customPostToRecord) };
  },
  head: ({ loaderData }) => (loaderData ? buildRecordHead(loaderData.record) : {}),
  component: BlogIndexPage,
});

function BlogIndexPage() {
  const { record, customRecords } = Route.useLoaderData();
  return (
    <CoreTemplate record={record} eyebrow="Insights" crumbs={[{ label: "Blog" }]}>
      <ArticleDirectory extra={customRecords} />
    </CoreTemplate>
  );
}
