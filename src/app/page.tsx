import { site } from "@/content/site";
import { Header } from "@/features/header/Header";
import { Hero } from "@/features/hero/Hero";
import { Projects } from "@/features/projects/Projects";
import { Skills } from "@/features/skills/Skills";
import { Contact } from "@/features/contact/Contact";
import { ViewerProvider } from "@/features/viewer/ViewerProvider";
import { DocumentViewer } from "@/features/viewer/DocumentViewer";

export default function Home() {
  const person = { "@context": "https://schema.org", "@type": "Person", name: site.name, url: site.url, email: site.email, sameAs: [site.github, site.linkedin] };
  return (
    <ViewerProvider>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(person) }} />
      <Header />
      <main id="main" tabIndex={-1} className="w-full pt-20 bg-surface focus:outline-none">
        <div className="flex flex-col w-full text-on-surface">
          <Hero /><Projects /><Skills /><Contact />
        </div>
      </main>
      <footer className="w-full bg-surface-container-low py-space-lg border-t border-surface-container">
        <div className="max-w-[1280px] mx-auto px-margin-mobile lg:px-margin flex items-center justify-between text-sm text-on-surface-variant">
          <span className="font-medium text-on-surface">{site.name}</span>
          <span className="font-medium tabular-nums text-on-surface">{new Date().getFullYear()}</span>
        </div>
      </footer>
      <DocumentViewer />
    </ViewerProvider>
  );
}
