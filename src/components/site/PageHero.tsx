import type { ReactNode } from "react";
import { GridBg } from "./GridBg";

export function PageHero({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden border-b border-white/5">
      <GridBg />
      <div className="absolute inset-x-0 top-0 -z-10 h-96 bg-[radial-gradient(ellipse_60%_60%_at_50%_0%,oklch(0.72_0.18_55/.25),transparent_70%)]" />
      <div className="container-page py-20 md:py-28">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="mt-4 max-w-4xl text-balance text-4xl leading-[1.05] md:text-6xl">
          {title}
        </h1>
        {description && (
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            {description}
          </p>
        )}
        {children && <div className="mt-8">{children}</div>}
      </div>
    </section>
  );
}
