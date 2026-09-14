import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X, ChevronDown } from "lucide-react";
import { IMAGES } from "@/lib/site-assets";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { ServicesMenuGrid } from "./ServicesNavMenu";

const NAV_LINK_CLASS =
  "relative rounded-sm text-base font-bold tracking-wide text-graphite/80 outline-none transition-colors hover:text-ink after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-0 after:bg-brand after:transition-all after:duration-300 hover:after:w-full focus-visible:text-ink focus-visible:ring-2 focus-visible:ring-brand/60 focus-visible:ring-offset-2 focus-visible:ring-offset-warm";

const NAV = [
  { label: "Home", to: "/", exact: true },
  { label: "Marketplaces", to: "/marketplaces" },
  { label: "Insights", to: "/blog" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  // Close the mobile menu whenever the route changes.
  useEffect(() => {
    setOpen(false);
    setMobileServicesOpen(false);
  }, [pathname]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-black/[0.06] bg-warm/95 shadow-[0_1px_30px_-12px_rgba(8,8,8,0.12)] backdrop-blur-md">
      <div className="mx-auto flex h-28 max-w-[1280px] items-center justify-between gap-6 px-6 lg:px-10">
        <Link to="/" className="flex shrink-0 items-center" aria-label="Ecomtik home">
          <img src={IMAGES.logo} alt="Ecomtik" className="h-20 w-auto lg:h-24" />
        </Link>

        <NavigationMenu className="hidden max-w-none flex-none justify-start xl:flex">
          <NavigationMenuList className="flex items-center gap-x-5 space-x-0">
            <NavigationMenuItem>
              <Link
                to="/"
                activeOptions={{ exact: true }}
                activeProps={{ className: "text-ink after:w-full" }}
                className={NAV_LINK_CLASS}
              >
                Home
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger
                className={cn(
                  NAV_LINK_CLASS,
                  "h-auto w-auto bg-transparent p-0 font-bold hover:bg-transparent focus:bg-transparent data-[state=open]:bg-transparent",
                  pathname.startsWith("/services") && "text-ink after:w-full",
                )}
              >
                Services
              </NavigationMenuTrigger>
              <NavigationMenuContent className="!w-[min(46rem,90vw)] rounded-[24px] border border-ink/8 bg-white p-8 shadow-[0_30px_70px_-30px_rgba(8,8,8,0.35)]">
                <ServicesMenuGrid />
              </NavigationMenuContent>
            </NavigationMenuItem>

            {NAV.filter((item) => item.label !== "Home").map((item) => (
              <NavigationMenuItem key={item.label}>
                <NavigationMenuLink asChild>
                  <Link
                    to={item.to}
                    activeProps={{ className: "text-ink after:w-full" }}
                    className={NAV_LINK_CLASS}
                  >
                    {item.label}
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        <div className="flex items-center gap-3">
          <Link
            to="/contact"
            className="hidden rounded-full bg-brand px-6 py-3 text-[13px] font-semibold text-ink shadow-[0_10px_30px_-12px_color-mix(in_oklab,var(--brand)_80%,transparent)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-amber sm:inline-flex"
          >
            Start Growing
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle navigation"
            aria-expanded={open}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border text-ink xl:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="max-h-[calc(100svh-7rem)] overflow-y-auto border-t border-border bg-warm xl:hidden">
          <nav className="mx-auto flex max-w-[1280px] flex-col px-6 py-4">
            <Link
              to="/"
              activeOptions={{ exact: true }}
              activeProps={{ className: "text-brand" }}
              className="border-b border-border/60 py-3.5 text-base font-bold text-graphite"
            >
              Home
            </Link>

            <div className="border-b border-border/60">
              <button
                type="button"
                onClick={() => setMobileServicesOpen((v) => !v)}
                aria-expanded={mobileServicesOpen}
                aria-controls="mobile-services-panel"
                className={cn(
                  "flex w-full items-center justify-between rounded-sm py-3.5 text-base font-bold text-graphite outline-none focus-visible:ring-2 focus-visible:ring-brand/60 focus-visible:ring-offset-2 focus-visible:ring-offset-warm",
                  pathname.startsWith("/services") && "text-brand",
                )}
              >
                Services
                <ChevronDown
                  className={cn(
                    "h-4 w-4 transition-transform duration-300",
                    mobileServicesOpen && "rotate-180",
                  )}
                  aria-hidden="true"
                />
              </button>
              {mobileServicesOpen && (
                <div id="mobile-services-panel" className="pb-4">
                  <ServicesMenuGrid />
                </div>
              )}
            </div>

            {NAV.filter((item) => item.label !== "Home").map((item) => (
              <Link
                key={item.label}
                to={item.to}
                activeProps={{ className: "text-brand" }}
                className="border-b border-border/60 py-3.5 text-base font-bold text-graphite last:border-0"
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/contact"
              className="mt-4 rounded-full bg-brand px-6 py-3 text-center text-sm font-semibold text-ink"
            >
              Start Growing
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
