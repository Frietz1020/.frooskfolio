# Portfolio Section Boundaries Design

**Status:** Proposed; awaiting user review

**Date:** 2026-11-20

## Goal

Make the portfolio's existing Home, Projects, Skills, and Contact areas easier to distinguish while preserving its current visual identity and content. The audience is assumed to be recruiters and collaborators scanning selected work and ways to contact Frietz.

## Current State

The page already has semantic sections, section IDs, matching navigation links, and a clear heading hierarchy. Each section currently sits on the same page surface with a similar width and spacing rhythm, so the transitions rely mainly on whitespace. The Skills section also contains Certificates; that relationship remains unchanged in this design.

## Approved Direction

Use full-width bands that alternate the existing surface colors, with thin separators at transitions:

```text
Fixed header
Home       surface (#fbf9f4)
           ─ outline-variant separator
Projects   surface-container-low (#f5f3ee)
           ─ outline-variant separator
Skills     surface (#fbf9f4)
           ─ outline-variant separator
Contact    surface-container-low (#f5f3ee)
           ─ outline-variant separator
Footer
```

Projects and Contact receive the tinted bands. Home and Skills retain the base surface. Thin separators use the existing outline-variant token; no new color is introduced.

## Layout and Typography

- Bands extend edge to edge across the viewport.
- Existing section content remains centered at its current maximum width of 1280px and keeps its current responsive gutters and vertical spacing.
- Keep the existing Hanken Grotesk typography for headings and body copy and Brass Mono for the `.frb` wordmark.
- Preserve the existing project cards, skills grid, certificate list, contact links, and form. Do not add section numbers, labels, or new subsections.
- Keep the current header navigation, section IDs, focus behavior, and scroll offsets.

## Implementation Scope

Wrap the existing Projects and Contact components in full-width tinted containers with thin token-based separators in `src/app/page.tsx`. Leave the section components and their content unchanged. Do not alter the footer content or redesign its controls.

## Acceptance Criteria

1. Home and Skills use the base surface; Projects and Contact use the existing low surface token.
2. Background bands cover the full viewport while each section's content retains its present width and alignment.
3. Thin separators make each transition visible without reducing text contrast or replacing the rust accent system.
4. The layout remains usable at mobile, tablet, and desktop widths; all section anchors and fixed-header offsets continue to work.
5. Existing project content and interactive behavior remain unchanged.

## Verification Plan

- Run the existing lint, TypeScript, production build, and output verification commands.
- Inspect the page at desktop and narrow mobile widths for full-bleed bands, alignment, contrast, and overflow.

## Self-Review

- No unresolved placeholders or open requirements remain in this proposal.
- The proposed surface alternation is consistent with the existing token palette and leaves card, form, and navigation styling intact.
- Certificates stay within Skills, matching the user's clarification to make existing sections more distinct rather than split their content.
- Only the approved four-section boundary treatment is in scope; audit findings unrelated to section boundaries remain separate follow-up work.
