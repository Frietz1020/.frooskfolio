import type { Placeholder } from "./schema";

export const site: Placeholder & {
  name: string; email: string; github: string; linkedin: string; headline: string; subline: string;
  description: string; url: string; cv: string; portrait: string;
} = {
  name: "Frietz Ranz Bayog",
  email: "frietzranzbayog@gmail.com",
  github: "https://github.com/Frietz1020",
  linkedin: "https://linkedin.com/in/frietzranzbayog1020",
  headline: "Building thoughtful software from frontend to backend.",
  subline: "CS student turning ideas into clean, working code — one project at a time.",
  description: "Portfolio of Frietz Ranz Bayog: selected projects, technical skills, certificates, and how to get in touch.",
  url: "https://example.com",
  cv: "/assets/portfolio/documents/resume.pdf",
  portrait: "/assets/portfolio/images/portrait.webp",
};
