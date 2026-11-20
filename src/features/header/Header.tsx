"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/Button";
import { Icon } from "@/components/Icon";
import { site } from "@/content/site";
import { useActiveSection } from "./useActiveSection";

const IDS = ["home", "projects", "skills", "contact"] as const;
const LABELS: Record<string, string> = { home: "Home", projects: "Projects", skills: "Skills", contact: "Contact" };

export function Header() {
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const active = useActiveSection(IDS, isHomePage);
  const sectionHref = (id: string) => isHomePage ? `#${id}` : `/#${id}`;
  const [open, setOpen] = useState(false);
  const btn = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") { setOpen(false); btn.current?.focus(); } };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[200] focus:bg-secondary focus:text-on-secondary focus:px-4 focus:py-2 focus:rounded-xl">Skip to content</a>
      <header className="fixed top-0 w-full z-50 bg-surface/90 backdrop-blur-md shadow-[0_1px_8px_rgba(0,0,0,0.04)] pt-[env(safe-area-inset-top)]">
        <div className="h-20 max-w-[1280px] mx-auto px-margin-mobile lg:px-margin flex items-center justify-between">
          <Link href={sectionHref("home")} aria-label={`.frb — ${site.name}'s portfolio`} className="flex min-h-[44px] items-center rounded-lg font-brand text-2xl tracking-[-0.06em] text-on-surface focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary">
            .frb
          </Link>
          <nav aria-label="Primary" className="hidden md:flex items-center gap-space-lg h-20">
            {IDS.map((id) => (
              <Link key={id} href={sectionHref(id)} aria-current={active === id ? "location" : undefined}
                className={`relative h-full flex items-center px-space-sm text-sm font-medium transition-colors border-b-2 ${active === id ? "text-on-surface border-secondary" : "text-on-surface-variant hover:text-on-surface border-transparent"}`}>
                {LABELS[id]}
              </Link>
            ))}
          </nav>
          <div className="hidden md:flex"><Button href={sectionHref("contact")}>Get in touch</Button></div>
          <button ref={btn} type="button" aria-expanded={open} aria-controls="mobile-nav" aria-label="Toggle navigation menu"
            onClick={() => setOpen((o) => !o)}
            className="md:hidden w-11 h-11 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-xl text-on-surface hover:bg-surface-container focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary">
            <Icon name={open ? "close" : "menu"} className="size-6" />
          </button>
        </div>
        <nav id="mobile-nav" aria-label="Mobile" hidden={!open}
          className="md:hidden border-t border-surface-container px-margin-mobile py-space-md bg-surface shadow-lg flex flex-col gap-space-sm">
          {IDS.map((id) => (
            <Link key={id} href={sectionHref(id)} onClick={() => setOpen(false)} aria-current={active === id ? "location" : undefined}
              className={`flex items-center min-h-[44px] pl-3 text-sm font-medium ${active === id ? "text-on-surface border-l-2 border-secondary" : "text-on-surface-variant hover:text-on-surface"}`}>
              {LABELS[id]}
            </Link>
          ))}
          <Button href={sectionHref("contact")} className="w-full" aria-label="Get in touch">Get in touch</Button>
        </nav>
      </header>
    </>
  );
}
