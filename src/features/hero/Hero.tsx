import Image from "next/image";
import { Button } from "@/components/Button";
import { site } from "@/content/site";
import { projects } from "@/content/projects";
import meta from "@/content/image-meta.json";
import { ViewCvButton } from "../viewer/ViewCvButton";

export function Hero() {
  return (
    <section id="home" className="relative w-full overflow-hidden scroll-mt-24">
      <div className="relative max-w-[1280px] mx-auto px-margin-mobile lg:px-margin pt-space-xl pb-20 md:pb-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-center">
          <div className="lg:col-span-7 order-2 lg:order-1 flex flex-col justify-center text-left">
            <h1 className="font-display text-display-mobile lg:text-display text-on-surface [text-wrap:balance]">{site.headline}</h1>
            <p className="mt-space-md font-body-lg text-body-lg text-on-surface-variant max-w-2xl [text-wrap:balance]">{site.subline}</p>
            <div className="mt-space-lg flex flex-wrap items-center gap-space-md">
              <Button href="#projects" className="h-12 px-space-lg text-body-md">View projects</Button>
              <ViewCvButton />
            </div>
            <div className="mt-8 pt-6 border-t border-surface-container flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
              <span className="text-sm font-medium text-on-surface-variant shrink-0">Selected work</span>
              <div className="flex items-center gap-3">
                {projects.map((p) => (
                  <a key={p.title} href="#projects" title={p.title} className="group/thumb relative block w-24 h-16 rounded-lg overflow-hidden bg-surface-container border border-surface-container-high shadow-sm hover:border-secondary transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary">
                    <Image src={p.image} alt={`Thumbnail preview of ${p.title}`} width={meta.project.width} height={meta.project.height} loading="lazy" className="w-full h-full object-cover group-hover/thumb:scale-105 transition-transform duration-200" />
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="lg:col-span-5 order-1 lg:order-2 flex justify-center lg:justify-end items-center">
            <div className="w-[min(68vw,240px)] flex-shrink-0 lg:w-[360px]">
              <div className="border border-outline-variant bg-surface p-2 pb-7 shadow-[0_14px_28px_-18px_rgba(27,28,25,0.45)] lg:p-3 lg:pb-9">
                <Image src={site.portrait} alt={`Portrait of ${site.name}`} width={meta.portrait.width} height={meta.portrait.height} priority className="block h-auto w-full border border-outline-variant object-contain" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
