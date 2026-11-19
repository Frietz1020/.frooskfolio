export type Placeholder = { placeholder?: true };
export type Skill = { name: string; icon?: string }; // icon = file stem in public/icons
export type SkillGroup = { title: string; items: Skill[] };
export type ProjectAction = { label: "View Project" | "Visit Repo" | "View Case Study"; href: string };
export type Project = Placeholder & {
  title: string; year: string; image: string; features: [string, string, string];
  description: string; actions: ProjectAction[];
};
export type Certificate = Placeholder & { title: string; issuer: string; year: string; pdf: string };
