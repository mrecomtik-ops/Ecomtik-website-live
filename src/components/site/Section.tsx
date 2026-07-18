import type { ReactNode } from "react";

export function Section({
  eyebrow,
  title,
  intro,
  children,
  className = "",
  align = "left",
}: {
  eyebrow?: string;
  title?: string;
  intro?: string;
  children?: ReactNode;
  className?: string;
  align?: "left" | "center";
}) {
  return (
    <section className={`container-page py-20 md:py-28 ${className}`}>
      {(eyebrow || title || intro) && (
        <div className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}>
          {eyebrow && <p className="eyebrow">{eyebrow}</p>}
          {title && (
            <h2 className="mt-4 text-balance text-3xl md:text-4xl lg:text-5xl">{title}</h2>
          )}
          {intro && (
            <p className="mt-5 text-balance text-base leading-relaxed text-muted-foreground md:text-lg">
              {intro}
            </p>
          )}
        </div>
      )}
      {children && <div className={title ? "mt-14" : ""}>{children}</div>}
    </section>
  );
}
