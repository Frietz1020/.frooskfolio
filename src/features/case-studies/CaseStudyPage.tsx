import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/Button";
import type { CaseStudy } from "@/content/schema";
import meta from "@/content/image-meta.json";

export function CaseStudyPage({ study }: { study: CaseStudy }) {
  return (
    <main id="main" tabIndex={-1} className="w-full bg-surface pt-20 focus:outline-none">
      <div className="mx-auto max-w-[1280px] px-margin-mobile py-space-xl lg:px-margin">
        <Link
          href="/#projects"
          className="inline-flex min-h-11 items-center rounded-lg pr-space-sm text-sm font-medium text-secondary underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary"
        >
          Back to projects
        </Link>

        <header className="mt-space-lg max-w-3xl">
          <h1 className="font-display text-display-mobile text-on-surface [text-wrap:balance] lg:text-display">
            {study.title}
          </h1>
          <p className="mt-space-md max-w-2xl text-body-lg text-on-surface-variant [text-wrap:balance]">
            {study.description}
          </p>

          <dl className="mt-space-lg grid grid-cols-1 gap-space-md border-y border-outline-variant py-space-md sm:grid-cols-2 lg:grid-cols-3">
            <div>
              <dt className="text-sm font-medium text-on-surface-variant">Year</dt>
              <dd className="mt-1 text-body-md text-on-surface">{study.year}</dd>
            </div>
            <div>
              <dt className="text-sm font-medium text-on-surface-variant">Role</dt>
              <dd className="mt-1 text-body-md text-on-surface">{study.role}</dd>
            </div>
            <div className="sm:col-span-2 lg:col-span-1">
              <dt className="text-sm font-medium text-on-surface-variant">Built with</dt>
              <dd className="mt-1 text-body-md text-on-surface">{study.stack.join(", ")}</dd>
            </div>
          </dl>

          <div className="mt-space-lg flex flex-wrap gap-space-sm">
            {study.links.map((link) => (
              <Button
                key={`${link.label}-${link.href}`}
                href={link.href}
                variant={link.label === "View Project" ? "primary" : "neutral"}
                aria-label={`${link.label}: ${study.title}`}
              >
                {link.label}
              </Button>
            ))}
          </div>
        </header>

        <nav
          aria-label="Case study sections"
          className="mt-space-xl rounded-xl border border-outline-variant bg-surface-container-low p-space-lg"
        >
          <h2 className="font-headline-sm text-headline-sm text-on-surface">On this page</h2>
          <ul className="mt-space-md flex flex-wrap gap-x-space-lg gap-y-space-sm">
            {study.sections.map((section) => (
              <li key={section.id}>
                <a
                  href={`#${section.id}`}
                  className="inline-flex min-h-11 items-center text-sm font-medium text-secondary underline-offset-4 hover:underline focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary"
                >
                  {section.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <article className="mt-space-xl max-w-4xl">
          {study.sections.map((section) => (
            <section
              key={section.id}
              id={section.id}
              aria-labelledby={`${section.id}-heading`}
              className="scroll-mt-24 border-t border-outline-variant py-space-xl first:border-t-0 first:pt-0"
            >
              <h2
                id={`${section.id}-heading`}
                className="font-headline-lg text-headline-lg text-on-surface [text-wrap:balance]"
              >
                {section.title}
              </h2>
              <div className="mt-space-md space-y-space-md">
                {section.paragraphs.map((paragraph, index) => (
                  <p key={`${section.id}-paragraph-${index}`} className="max-w-[70ch] text-body-md text-on-surface-variant">
                    {paragraph}
                  </p>
                ))}
              </div>
              {section.image && (
                <figure className="mt-space-lg overflow-hidden rounded-xl border border-outline-variant bg-surface-container-low">
                  <Image
                    src={section.image.src}
                    alt={section.image.alt}
                    width={meta.project.width}
                    height={meta.project.height}
                    sizes="(max-width: 48rem) 100vw, 64rem"
                    loading="lazy"
                    className="block h-auto w-full"
                  />
                  <figcaption className="px-space-md py-space-sm text-sm text-on-surface-variant">
                    {section.image.caption}
                  </figcaption>
                </figure>
              )}
            </section>
          ))}
        </article>
      </div>
    </main>
  );
}
