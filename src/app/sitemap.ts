import type { MetadataRoute } from "next";
import { site } from "@/content/site";
import { caseStudies } from "@/content/case-studies";
export const dynamic = "force-static";
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return [
    { url: `${site.url}/`, lastModified },
    ...caseStudies.map(({ slug }) => ({ url: `${site.url}/projects/${slug}/`, lastModified })),
  ];
}
