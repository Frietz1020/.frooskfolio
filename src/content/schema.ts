export type Placeholder = { placeholder?: true };
export type Skill = { name: string; icon?: string }; // icon = file stem in public/icons
export type SkillGroup = { title: string; items: Skill[] };
export type ProjectAction = { label: "View Project" | "Visit Repo" | "View Case Study"; href: string };
export type Project = Placeholder & {
  id: string; title: string; year: string; image: string; logo: string; features: [string, string, string];
  description: string; actions: ProjectAction[];
};
export type CaseStudyImage = { src: string; width: number; height: number; alt: string; caption: string };
export type CaseStudySection = { id: string; title: string; paragraphs: string[]; image?: CaseStudyImage };
export type CaseStudy = {
  slug: string; projectId: string; title: string; year: string; description: string;
  role: string; stack: string[]; links: ProjectAction[]; sections: CaseStudySection[];
};
export type Certificate = Placeholder & { title: string; issuer: string; year: string; pdf: string };
