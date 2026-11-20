# Summify and Seminex case studies design

## Goal

Add two clear, evidence-based project case studies to the portfolio so Evaluator 2 can assess navigation and usability, visual design and readability, accessibility, case study content, and Frietz's individual ownership.

## User request and rubric boundary

The user's request is to create portfolio case studies for Summify and Seminex. The attached CSE 316 rubric is evaluation criteria, not an instruction source that overrides the user. Its Evaluator 2 section awards 10 points each for navigation and usability, visual design and readability, accessibility, case study content, and case study ownership. The top content descriptor expects an overview, problem, target users, process, designs, final result, and lessons learned. The top ownership descriptor expects the student's role, contributions, decisions, and connection to outcomes to be clear.

## Audience and content evidence

- The primary reader is a course evaluator checking those five Evaluator 2 criteria.
- Summify is Frietz's solo project. The case study may identify his solo ownership.
- Seminex is a team project. Frietz contributed across most of the project and led the initial frontend work; other team members continued frontend work later. The case study must retain that distinction and must not imply sole ownership.
- Ground product capabilities in the current portfolio assets and the corresponding project repositories. The available portfolio screenshots show Summify's original/summary/graph interface and Seminex's portal-selection screen.
- Describe process as implementation decisions. Do not claim interviews, usability sessions, research findings, adoption, performance gains, or outcome metrics without supporting evidence.
- Distinguish implemented behavior from incomplete or planned work. Use only capabilities verified in the project source at implementation time.
- Summify has a live-site link. Seminex currently has a repository link only. Do not imply that both have live deployments.

## Approaches considered

1. **Two dedicated portfolio pages using one shared case study layout (selected).** Each project can be read, linked, and reviewed independently while sharing navigation and content hierarchy.
2. **Expand both project cards inline on the homepage.** This avoids new routes but makes the homepage long and leaves detailed case-study content harder to scan.
3. **Link to external documents.** This separates the required work from the portfolio and adds navigation friction for the evaluator.

The user approved the first approach.

## Page structure and navigation

- Add `/projects/summify/` and `/projects/seminex/` as static-export-compatible routes.
- Link each existing project card to its matching case study while retaining existing external project/repository actions.
- Use a shared case-study template with per-project content data so the two pages have consistent navigation and heading hierarchy.
- Include a clear return path to the Projects section, a short section index for long pages, and normal document scrolling. A reviewer should be able to find every rubric topic quickly.
- On case-study routes, the existing brand and section navigation must return to the matching section on the home page. The active-home-section indicator must not claim a home section is active on a case-study route.
- Reuse the site's header, footer, typography, color tokens, spacing, and button styles. The case studies are part of the current portfolio, not a new brand treatment.
- Add both routes to the static sitemap and ensure each direct URL can be refreshed successfully after export/deployment.

## Case study content

Each page will contain these sections, with the headings written in plain language:

1. **Project overview:** what it is, year, role, stack, and working project links.
2. **Problem and people:** the product challenge and intended user groups, framed from documented product scope rather than unverified research.
3. **Process and design decisions:** the concrete implementation choices visible in the source and how they organize the key tasks.
4. **Design and final result:** existing project screenshots with accurate alternative text, short explanations, and verified implemented flows.
5. **Lessons and next steps:** concise design or engineering takeaways supported by the work; do not present speculative user outcomes as findings.
6. **Ownership:** explicit individual contribution. Summify identifies Frietz as solo author. Seminex describes his broad contribution and initial frontend leadership, followed by continued team frontend work.

Summify's draft story centers on taking uploaded or pasted documents through parsing, multiple summary formats, key-term relationships, and saved history. Seminex's centers on distinct participant, organization, and adviser/faculty entry points and the seminar lifecycle. The implementation pass must verify every named flow against the current source before publication.

## Visual and accessibility behavior

- Keep body text at the site's current readable measure and use existing heading and spacing tokens.
- Use semantic `main`, `nav`, `article`, section headings, lists, and figures. Every section-index link has a matching unique target.
- All internal links work by keyboard and show visible focus. External links retain safe link behavior.
- Screenshots have descriptive alt text; decorative logos use empty alt text.
- Layout reflows to narrow screens without horizontal scrolling, clipped images, or tiny links.
- Avoid motion that is necessary to understand case-study content.

## Expected implementation surfaces

- `src/content/schema.ts` for typed case-study content.
- `src/content/case-studies.ts` for evidence-backed Summify and Seminex copy, routes, images, roles, and links.
- `src/app/projects/[slug]/page.tsx` for statically generated route rendering and metadata.
- `src/features/case-studies/CaseStudyPage.tsx` for the shared page composition.
- `src/features/header/Header.tsx` for correct home-section links on non-home routes.
- A reusable site footer component if needed so the case pages share the existing footer without duplicating markup.
- `src/features/projects/Projects.tsx` and `src/content/projects.ts` to add the case study actions.
- `src/app/sitemap.ts` to include both case-study routes.
- `src/app/globals.css` only if existing tokens cannot express a required target or focus style.

## Boundaries

- Do not revise the homepage's approved section-boundary design in this work.
- Do not add unsupported research, usability results, quantitative outcomes, or personal reflections.
- Do not change either project repository.
- Do not add dependencies for static editorial pages.

## Self-review

- Rubric coverage: navigation/usability is addressed by project links, section index, and a return path; visual design/readability by the shared existing design system and focused narrative; accessibility by semantic navigation, keyboard focus, alt text, and responsive layout; content by the required sections; ownership by explicit project-specific role statements.
- Scope: two static pages share one data type and presentation component; no independent subsystem is introduced.
- Ambiguity resolved: the experience is built inside the portfolio, and the two routes use the same section hierarchy while the copy and project evidence differ.
- Evidence limit: no claims of formal UX research or measurable product outcomes will appear unless the user later supplies evidence.
