import { skillGroups } from "@/content/skills";
import { TechIcon } from "@/components/TechIcon";
import { Certificates } from "../certificates/Certificates";

export function Skills() {
  return (
    <section id="skills" className="w-full max-w-[1280px] mx-auto px-margin-mobile lg:px-margin py-space-xl scroll-mt-24">
      <div className="max-w-2xl mb-space-xl">
        <h2 className="font-headline-lg text-headline-lg text-on-surface [text-wrap:balance]">Skills</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillGroups.map((g) => (
          <div key={g.title} className="bg-surface-container-lowest rounded-xl shadow-[0_1px_3px_0_rgba(0,0,0,0.03),0_6px_18px_-2px_rgba(0,0,0,0.05)] overflow-hidden flex flex-col">
            <div className="bg-surface-container-low py-2.5 px-4">
              <h3 className="font-headline-sm text-sm font-semibold text-on-surface">{g.title}</h3>
            </div>
            <ul data-skill-group className="p-5 flex-1 grid grid-cols-2 gap-x-4 gap-y-2 text-sm text-on-surface">
              {g.items.map((s, i) => (
                <li key={s.name} className={`flex items-center gap-2 min-h-[28px] ${i < 2 ? "font-medium" : "font-normal"}`}>
                  <span className="w-5 h-5 flex items-center justify-center shrink-0"><TechIcon name={s.icon} /></span>
                  <span>{s.name}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <Certificates />
    </section>
  );
}
