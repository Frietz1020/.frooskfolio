import { Icon, type IconName } from "@/components/Icon";
import { site } from "@/content/site";
import { ContactForm } from "./ContactForm";

const rows: { icon: IconName; label: string; text: string; href: string }[] = [
  { icon: "mail", label: "Email", text: site.email, href: `mailto:${site.email}` },
  { icon: "github", label: "Repository code", text: site.github.replace("https://", ""), href: site.github },
  { icon: "linkedin", label: "Professional profile", text: site.linkedin.replace("https://", ""), href: site.linkedin },
];

export function Contact() {
  return (
    <section id="contact" className="w-full max-w-[1280px] mx-auto px-margin-mobile lg:px-margin py-space-xl scroll-mt-24">
      <div className="max-w-2xl mb-space-xl">
        <h2 className="font-headline-lg text-headline-lg text-on-surface [text-wrap:balance]">Contact</h2>
        <p className="mt-space-sm font-body-lg text-body-lg text-on-surface-variant [text-wrap:balance]">I’m open to new projects and roles. Tell me what you’re building and I’ll reply as soon as I can.</p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-start">
        <div className="lg:col-span-5 space-y-space-md">
          {rows.map((r) => (
            <a key={r.label} href={r.href} {...(r.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className="min-h-[56px] p-space-md bg-surface-container-lowest rounded-xl flex items-center gap-space-md shadow-[0_1px_3px_0_rgba(0,0,0,0.03),0_6px_18px_-2px_rgba(0,0,0,0.05)] hover:bg-surface-container focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary transition-colors">
              <span className="w-11 h-11 rounded-lg bg-surface-container flex items-center justify-center text-on-surface"><Icon name={r.icon} /></span>
              <span>
                <span className="block text-sm text-on-surface-variant font-headline-sm">{r.label}</span>
                <span className="block text-body-md text-on-surface font-headline-sm">{r.text}</span>
              </span>
            </a>
          ))}
        </div>
        <div className="lg:col-span-7 bg-surface-container-lowest rounded-xl p-space-lg shadow-[0_1px_3px_0_rgba(0,0,0,0.03),0_6px_18px_-2px_rgba(0,0,0,0.05)]">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
