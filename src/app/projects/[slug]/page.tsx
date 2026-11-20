import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { caseStudies, getCaseStudy } from "@/content/case-studies";
import { Header } from "@/features/header/Header";
import { CaseStudyPage } from "@/features/case-studies/CaseStudyPage";
import { SiteFooter } from "@/features/footer/SiteFooter";

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
      <SiteFooter />
    </>
  );
}
