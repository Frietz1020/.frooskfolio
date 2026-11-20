import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { caseStudies, getCaseStudy } from "@/content/case-studies";
import { Header } from "@/features/header/Header";
import { CaseStudyPage } from "@/features/case-studies/CaseStudyPage";

type PageProps = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return caseStudies.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudy(slug);

  if (!study) return { title: "Case study not found" };

  return {
    title: `${study.title} case study`,
    description: study.description,
    alternates: { canonical: `/projects/${study.slug}/` },
    openGraph: {
      title: `${study.title} case study`,
      description: study.description,
      url: `/projects/${study.slug}/`,
      type: "article",
    },
  };
}

export default async function ProjectCaseStudyRoute({ params }: PageProps) {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) notFound();

  return (
    <>
      <Header />
      <CaseStudyPage study={study} />
      <footer className="w-full border-t border-surface-container bg-surface-container-low py-space-lg">
        <div className="mx-auto flex max-w-[1280px] items-center justify-between px-margin-mobile text-sm text-on-surface-variant lg:px-margin">
          <span className="font-medium text-on-surface">{site.name}</span>
          <span className="font-medium tabular-nums text-on-surface">{new Date().getFullYear()}</span>
        </div>
      </footer>
    </>
  );
}
