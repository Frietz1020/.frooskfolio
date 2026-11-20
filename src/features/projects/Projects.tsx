import Image from "next/image";
import { Button } from "@/components/Button";
import { projects } from "@/content/projects";
import meta from "@/content/image-meta.json";

export function Projects() {
  return (
    <section id="projects" className="w-full max-w-[1280px] mx-auto px-margin-mobile lg:px-margin py-space-xl scroll-mt-24">
      <div className="max-w-2xl mb-space-xl">
        <h2 className="font-headline-lg text-headline-lg text-on-surface [text-wrap:balance]">Projects</h2>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-space-xl">
        {projects.map((p) => (
          <article id={`project-${p.id}`} key={p.id} className="project-card-target scroll-mt-24 bg-surface-container-lowest rounded-xl p-space-lg shadow-[0_1px_3px_0_rgba(0,0,0,0.03),0_6px_18px_-2px_rgba(0,0,0,0.05)] flex flex-col overflow-hidden">
            <div className="flex items-center justify-between mb-space-md">
              <h3 className="font-headline-sm text-headline-sm text-on-surface">{p.title}</h3>
              <span className="text-sm font-headline-sm text-on-surface-variant tabular-nums">{p.year}</span>
            </div>
            <div className="relative w-full aspect-[16/10] rounded-lg overflow-hidden bg-surface-container mb-space-md">
              <Image src={p.image} alt={`Screenshot of ${p.title}`} width={meta.project.width} height={meta.project.height} loading="lazy" className="w-full h-full object-cover" />
            </div>
            <ul className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm font-medium text-on-surface mb-3">
              {p.features.map((f) => <li key={f}>{f}</li>)}
            </ul>
            <p className="text-body-md text-on-surface-variant mb-space-lg flex-1">{p.description}</p>
            <div className="flex flex-wrap items-center gap-space-sm pt-space-xs border-t border-surface-container">
              {p.actions.map((a) => (
                <Button key={a.label} href={a.href} variant={a.label === "View Case Study" ? "primary" : "neutral"} aria-label={`${a.label}: ${p.title}`}>{a.label}</Button>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
