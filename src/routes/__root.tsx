import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
  Link,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { Header } from "../components/site/Header";
import { Footer } from "../components/site/Footer";
import { AnnouncementBar } from "../components/site/AnnouncementBar";
import { WhatsAppButton } from "../components/site/WhatsAppButton";
import { Toaster } from "@/components/ui/sonner";
import { site } from "../data/site";

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: site.name,
  legalName: site.legal,
  description:
    "Dubai-based brand builder and Amazon growth agency operating across 21 global marketplaces.",
  telephone: site.whatsapp,
  email: site.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: `${site.address.line1}, ${site.address.line2}`,
    addressLocality: "Dubai",
    addressCountry: "AE",
  },
  areaServed: ["AE", "SA", "EG", "GB", "DE", "FR", "IT", "ES", "NL", "SE", "PL", "US", "CA", "JP", "SG", "AU", "IN", "TR", "MX", "BR"],
  sameAs: [site.socials.linkedin, site.socials.instagram],
};

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="container-page flex flex-1 items-center justify-center py-24">
        <div className="max-w-md text-center">
          <p className="eyebrow">404</p>
          <h1 className="mt-4 text-4xl md:text-5xl">Page not found</h1>
          <p className="mt-4 text-muted-foreground">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <div className="mt-8">
            <Link
              to="/"
              className="inline-flex items-center justify-center rounded-md bg-brand-gradient px-5 py-2.5 text-sm font-semibold text-[oklch(0.15_0.02_265)] transition-opacity hover:opacity-90"
            >
              Return home
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-2xl">This page didn't load</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong. Try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="rounded-md bg-brand-gradient px-4 py-2 text-sm font-semibold text-[oklch(0.15_0.02_265)] hover:opacity-90"
          >
            Try again
          </button>
          <a
            href="/"
            className="rounded-md border border-white/10 bg-transparent px-4 py-2 text-sm font-medium text-foreground hover:bg-white/5"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "theme-color", content: "#0A0A0F" },
      { title: "Ecomtik — Dubai Brand Builder & Amazon Growth Agency" },
      {
        name: "description",
        content:
          "Ecomtik is a Dubai-based brand builder and Amazon growth agency helping consumer brands scale profitably across 21 global marketplaces.",
      },
      { name: "author", content: "Ecomtik" },
      { property: "og:site_name", content: "Ecomtik" },
      { property: "og:type", content: "website" },
      { property: "og:title", content: "Ecomtik — Dubai Amazon Growth Agency" },
      {
        property: "og:description",
        content:
          "Brand builder and Amazon growth partner for ambitious consumer brands.",
      },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.png", type: "image/png" },
      { rel: "apple-touch-icon", href: "/favicon.png" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Sora:wght@400;500;600;700&family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@400;500;600;700&display=swap",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(localBusinessJsonLd),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="dark">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex min-h-screen flex-col">
        <AnnouncementBar />
        <Header />
        <main className="flex-1">
          <Outlet />
        </main>
        <Footer />
      </div>
      <WhatsAppButton />
      <Toaster theme="dark" />
    </QueryClientProvider>
  );
}
