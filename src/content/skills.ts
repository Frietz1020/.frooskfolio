import type { SkillGroup } from "./schema";
import available from "./icons.generated.json";

const STEM: Record<string, string> = {
  C: "c-plain", "C++": "cplusplus-plain", "C#": "csharp-plain", Java: "java-plain", Python: "python-plain",
  PHP: "php-plain", JavaScript: "javascript-plain", TypeScript: "typescript-plain", HTML: "html5-plain", CSS: "css3-plain",
  React: "react-original", "React Native": "react-original", "Next.js": "nextjs-plain", "Node.js": "nodejs-plain",
  FastAPI: "fastapi-plain", TailwindCSS: "tailwindcss-original", Bootstrap: "bootstrap-plain",
  PostgreSQL: "postgresql-plain", MySQL: "mysql-plain", Firebase: "firebase-plain", Supabase: "supabase-plain",
  NumPy: "numpy-plain", Pandas: "pandas-plain", Matplotlib: "matplotlib-plain",
  Git: "git-plain", GitHub: "github-original", GitLab: "gitlab-plain", NPM: "npm-original-wordmark",
  Docker: "docker-plain", Cloudflare: "cloudflare-plain",
};
const mk = (names: string[]) =>
  names.map((name) => ({ name, icon: STEM[name] && (available as string[]).includes(STEM[name]) ? STEM[name] : undefined }));

export const skillGroups: SkillGroup[] = [
  { title: "Languages", items: mk(["C", "C++", "C#", "Java", "Python", "PHP", "JavaScript", "TypeScript", "HTML", "CSS"]) },
  { title: "Frameworks and Runtime", items: mk(["React", "React Native", "Next.js", "Node.js", "FastAPI", "TailwindCSS", "Bootstrap"]) },
  { title: "Databases and Backend Services", items: mk(["PostgreSQL", "MySQL", "Firebase", "Supabase"]) },
  { title: "Data Analysis", items: mk(["NumPy", "Pandas", "Matplotlib", "Seaborn"]) },
  { title: "Version Control", items: mk(["Git", "GitHub", "GitLab", "GitLens", "NPM"]) },
  { title: "Dev Environment and Deployment", items: mk(["Docker", "Cloudflare", "Insomnia", "Laragon"]) },
];
