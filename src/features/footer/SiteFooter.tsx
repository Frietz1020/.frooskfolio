import { site } from "@/content/site";

export function SiteFooter() {
  return (
    <footer className="w-full bg-surface-container-low py-space-lg border-t border-surface-container">
      <div className="max-w-[1280px] mx-auto px-margin-mobile lg:px-margin flex items-center justify-between text-sm text-on-surface-variant">
        <span className="font-medium text-on-surface">{site.name}</span>
        <span className="font-medium tabular-nums text-on-surface">{new Date().getFullYear()}</span>
      </div>
    </footer>
  );
}
