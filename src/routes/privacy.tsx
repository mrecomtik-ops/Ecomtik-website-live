import { createFileRoute } from "@tanstack/react-router";

import { LegalPlaceholder } from "@/components/site/LegalPlaceholder";

const TITLE = "Privacy Notice | Ecomtik";
const DESCRIPTION = "Ecomtik's privacy notice is pending confirmed legal and business details.";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return <LegalPlaceholder title="Privacy notice" />;
}
