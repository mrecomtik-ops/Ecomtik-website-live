import { Link } from "@tanstack/react-router";
import { PageHero } from "./PageHero";
import { Reveal } from "./Reveal";

export function LegalPlaceholder({ title }: { title: string }) {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title={title}
        intro="This page is not yet published. Ecomtik has not confirmed the legal and business details needed to publish an accurate version, so no policy text is shown here."
        crumbs={[{ label: title }]}
      />
      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-[720px] px-6 lg:px-10">
          <Reveal>
            <p className="text-sm leading-relaxed text-graphite/75">
              If you have a question in the meantime, contact Ecomtik directly and it will be
              answered individually.
            </p>
            <Link
              to="/contact"
              className="group mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand hover:text-brand-amber"
            >
              Contact Ecomtik
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
