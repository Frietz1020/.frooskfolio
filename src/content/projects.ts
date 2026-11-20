import type { Project } from "./schema";

const summifyImage = "/images/summify.png";
const seminexImage = "/images/seminex.png";
const summifyLogo = "/images/summify-logo.png";
const seminexLogo = "/images/seminex-logo.png";
export const projects: Project[] = [
  {
    id: "summify", title: "Summify", year: "2026", image: summifyImage, logo: summifyLogo,
    features: ["AI document summaries", "PDF, DOCX & TXT upload", "Interactive knowledge graph"],
    description: "A mobile-first AI document summarizer that turns uploaded or pasted text into concise, detailed, and bullet summaries, then maps key concepts in an interactive graph.",
    actions: [
      { label: "View Case Study", href: "/projects/summify/" },
      { label: "View Project", href: "https://summify-pearl.vercel.app" },
      { label: "Visit Repo", href: "https://github.com/Frietz1020/summify" },
    ],
  },
  {
    id: "seminex", title: "Seminex", year: "2026", image: seminexImage, logo: seminexLogo,
    features: ["Student, organization & adviser portals", "Seminar registration & QR attendance", "Evaluations & certificates"],
    description: "A seminar management platform for CCS Gordon College. Students discover and register for seminars, track attendance through QR scanning, complete evaluations, and access eligible certificates; organizations manage events while advisers review membership requests.",
    actions: [
      { label: "View Case Study", href: "/projects/seminex/" },
      { label: "Visit Repo", href: "https://github.com/Frietz1020/seminex" },
    ],
  },
];
