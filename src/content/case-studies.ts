import type { CaseStudy } from "./schema";

export const caseStudies: CaseStudy[] = [
  {
    slug: "summify",
    projectId: "summify",
    title: "Summify",
    year: "2026",
    description: "A mobile-first document workspace for summaries and key-concept relationships.",
    role: "Solo developer",
    stack: ["React", "Vite", "Firebase", "Firestore", "PDF.js", "Mammoth", "Cloudflare Workers"],
    links: [
      { label: "View Project", href: "https://summify-pearl.vercel.app" },
      { label: "Visit Repo", href: "https://github.com/Frietz1020/summify" },
    ],
    sections: [
      {
        id: "problem",
        title: "The problem",
        paragraphs: [
          "The design challenge was to help readers move from a long source document to a useful overview without losing the relationships between its main ideas. Summify keeps document input, summary formats, and key terms within one workspace.",
        ],
      },
      {
        id: "users",
        title: "Who it is for",
        paragraphs: [
          "Summify is for readers working with PDF, DOCX, or TXT documents, as well as people who paste text directly. It provides several ways to review the same material: a concise summary, a detailed summary, bullet points, and extracted terms.",
        ],
      },
      {
        id: "process",
        title: "Process and decisions",
        paragraphs: [
          "I built file parsing for PDF, DOCX, and TXT inputs, then connected the extracted text to shared document state. The summary and graph views use that same document context, so the reader can change how they inspect an input without starting over.",
          "I kept multiple summary formats and a searchable history. The formats support different review needs, while saved entries make previous work available again.",
        ],
      },
      {
        id: "design",
        title: "The interface",
        paragraphs: [
          "The document view separates the original text, generated summary, and graph into selectable views. The graph places the central idea among related terms, giving readers a visual way to inspect the extracted concepts.",
        ],
        image: {
          src: "/images/summify.png",
          width: 1565,
          height: 986,
          alt: "Summify's Graph view showing a central volleyball concept connected to related terms.",
          caption: "The Graph view connects extracted terms from a document.",
        },
      },
      {
        id: "result",
        title: "What I built",
        paragraphs: [
          "Summify is a mobile-first web app with document parsing, several generated summary formats, an interactive key-term graph, and searchable saved history. The project also includes account and profile flows.",
        ],
      },
      {
        id: "lessons",
        title: "Lessons",
        paragraphs: [
          "A summary becomes more useful when readers can choose its level of detail and then explore how its terms relate. Keeping those views tied to one source document helps the interface support quick review and deeper reading in the same workflow.",
        ],
      },
      {
        id: "ownership",
        title: "My contribution",
        paragraphs: [
          "I developed Summify independently, including the interface, document-processing flow, summaries, graph view, saved history, and account features.",
        ],
      },
    ],
  },
  {
    slug: "seminex",
    projectId: "seminex",
    title: "Seminex",
    year: "2026",
    description: "A seminar-management platform for participants, student organizations, and faculty at CCS Gordon College.",
    role: "Team project; I contributed across most of the work and led the initial frontend implementation.",
    stack: ["React", "TypeScript", "Supabase", "Tailwind CSS", "Vite"],
    links: [
      { label: "Visit Repo", href: "https://github.com/Frietz1020/seminex" },
    ],
    sections: [
      {
        id: "problem",
        title: "The problem",
        paragraphs: [
          "Seminar work involves different tasks for students, organization members, and faculty. Seminex brings seminar discovery and participation together with the tools organizations and advisers use to manage events and review activity.",
        ],
      },
      {
        id: "users",
        title: "Who it is for",
        paragraphs: [
          "Participants browse seminars, register, access their tickets, check attendance, and complete evaluations. Organization officers manage seminars and participant workflows. Advisers and faculty use the administration area to oversee organization activity.",
        ],
      },
      {
        id: "process",
        title: "Process and decisions",
        paragraphs: [
          "The application separates participant, organization, and administration routes and applies session and role checks around protected areas. This structure gives each group a clear starting point and keeps its work within the relevant portal.",
          "The participant workflow connects seminar registration with ticket access, attendance, evaluation, and certificate eligibility. The organization workflow includes seminar management and attendance review. The repository also includes offline read access for selected participant and organization data.",
        ],
      },
      {
        id: "design",
        title: "The interface",
        paragraphs: [
          "The landing page presents the portal choices before sign-in. Each option names the audience and describes the work available in that area, so people can choose a relevant path before entering the system.",
        ],
        image: {
          src: "/images/seminex.png",
          width: 1635,
          height: 1007,
          alt: "Seminex's landing page with separate entry cards for participants, organizations, and administrators.",
          caption: "The landing page distinguishes the three portal audiences.",
        },
      },
      {
        id: "result",
        title: "What the team built",
        paragraphs: [
          "The current repository contains participant, organization, and administration areas, with seminar, registration, attendance, and evaluation flows. Certificate eligibility uses attendance and evaluation requirements; the project sets a 60% attendance threshold by default.",
          "Seminex is linked here through its source repository.",
        ],
      },
      {
        id: "lessons",
        title: "Lessons",
        paragraphs: [
          "When one system serves several groups, role-specific entry points make the available work easier to identify. Eligibility rules also need to be visible where they affect a participant's next step, especially when attendance and evaluation both determine certificate access.",
        ],
      },
      {
        id: "ownership",
        title: "My contribution",
        paragraphs: [
          "I contributed to almost all parts of Seminex and spearheaded the initial frontend implementation. Other members of the team continued the frontend work later.",
        ],
      },
    ],
  },
];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((study) => study.slug === slug);
}
