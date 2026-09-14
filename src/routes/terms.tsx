import { createFileRoute } from "@tanstack/react-router";

import { LegalPlaceholder } from "@/components/site/LegalPlaceholder";

const TITLE = "Terms | Ecomtik";
const DESCRIPTION = "Ecomtik's terms are pending confirmed legal and business details.";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
  component: TermsPage,
});

function TermsPage() {
  return <LegalPlaceholder title="Terms" />;
}
