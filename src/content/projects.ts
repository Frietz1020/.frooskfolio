import type { Project } from "./schema";

const img = "/images/placeholder-project.svg";
export const projects: Project[] = [
  {
    title: "Portfolio Website", year: "2024", image: img,
    features: ["Next.js App Router", "Tailwind CSS v4", "Accessible & responsive"],
    description: "This portfolio — built with Next.js 16, Tailwind CSS v4, and React 19. Statically exported, keyboard-navigable, and optimised for performance from day one.",
    actions: [
      { label: "Visit Repo", href: "https://github.com/Frietz1020" },
    ],
  },
  {
    title: "Full-Stack Web Application", year: "2024", image: img,
    features: ["React frontend", "FastAPI backend", "PostgreSQL database"],
    description: "A full-stack web application combining a React frontend with a FastAPI backend and PostgreSQL database. Features user authentication, data visualisation, and a REST API.",
    actions: [
      { label: "Visit Repo", href: "https://github.com/Frietz1020" },
    ],
  },
];
