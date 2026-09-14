import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { getPublishedRecords, slugFromPath } from "@/content/registry";

function shortLabel(title: string): string {
  return title.replace(/\s*\|\s*Ecomtik$/, "");
}

function useServiceFamilies() {
  const services = getPublishedRecords("service");
  const families = Array.from(new Set(services.map((s) => s.metadata.family ?? "Other services")));
  return families.map((family) => ({
    family,
    services: services.filter((s) => (s.metadata.family ?? "Other services") === family),
  }));
}

/** Shared dropdown body — grouped service columns plus a "view all" footer link. Used by both the desktop nav-menu content and the mobile accordion panel. */
export function ServicesMenuGrid({ onNavigate }: { onNavigate?: () => void }) {
  const groups = useServiceFamilies();

  return (
    <div>
      <div className="grid gap-x-8 gap-y-7 sm:grid-cols-2 lg:grid-cols-3">
        {groups.map(({ family, services }) => (
          <div key={family}>
            <p className="text-[11px] font-semibold tracking-[0.16em] text-brand-amber uppercase">
              {family}
            </p>
            <ul className="mt-3 space-y-2.5">
              {services.map((service) => (
                <li key={service.metadata.id}>
                  <Link
                    to="/services/$slug"
                    params={{ slug: slugFromPath(service.metadata.path) }}
                    onClick={onNavigate}
                    className="block rounded-md text-sm font-medium text-graphite/80 outline-none transition-colors hover:text-brand focus-visible:text-brand focus-visible:ring-2 focus-visible:ring-brand/50"
                  >
                    {shortLabel(service.metadata.title)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-7 border-t border-ink/8 pt-5">
        <Link
          to="/services"
          onClick={onNavigate}
          className="group inline-flex items-center gap-2 text-sm font-semibold text-brand outline-none transition-colors hover:text-brand-amber focus-visible:text-brand-amber focus-visible:ring-2 focus-visible:ring-brand/50"
        >
          View all services
          <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </div>
    </div>
  );
}
