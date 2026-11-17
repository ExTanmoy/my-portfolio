# AGENTS.md

## Project Overview

This is a personal portfolio website for **Tanmoy Debnath**, built with Next.js App Router, React, TypeScript, and Tailwind CSS.

The website showcases personal information, technical skills, projects, education, and contact details.

## Technology Stack

- Next.js 16 with App Router
- React 19
- TypeScript
- Tailwind CSS 4
- shadcn/ui
- Base UI
- Lucide React
- Class Variance Authority
- ESLint 9

Do not introduce additional libraries unless they are genuinely necessary and explicitly justified.

## Project Architecture

The project uses the root-level `app/` directory. Do not migrate it to `src/app/`.

Main directories:

- `app/` — App Router pages, root layout, and global styles.
- `components/layout/` — Shared layout components such as Navbar and Footer.
- `components/sections/` — Homepage sections such as Hero, About, Skills, Projects, Education, and Contact.
- `components/ui/` — Existing shadcn UI components.
- `data/` — Centralized portfolio content.
- `lib/` — Shared utility functions.
- `public/images/` — Static images and project screenshots.

## Data Management

`data/portfolio.ts` is the single source of truth for portfolio content.

It contains:
- Personal information
- Social links
- Skills
- Education
- Project information

Rules:

1. Always read existing portfolio data before creating or updating content.
2. Do not duplicate personal information, project descriptions, URLs, or skill lists inside UI components.
3. Do not invent achievements, work experience, education details, or project features.
4. Use the existing TypeScript interfaces and maintain type safety.
5. Keep content updates centralized in `data/portfolio.ts`.

## Next.js and React Guidelines

1. Use Server Components by default.
2. Add `"use client"` only when client-side interactivity, React state, effects, event handlers, or browser APIs are required.
3. Keep `app/page.tsx` as a Server Component unless there is a clear technical reason to change it.
4. Use Next.js navigation and image optimization features appropriately.
5. Avoid unnecessary client-side JavaScript.
6. Use semantic HTML elements and maintain a logical heading hierarchy.

## Styling Guidelines

1. Follow the existing dark visual theme with emerald accents.
2. Use the existing design tokens and CSS variables from `app/globals.css`.
3. Use Tailwind CSS 4 conventions.
4. Keep layouts mobile-first and fully responsive.
5. Maintain consistent spacing, typography, borders, and surface colors.
6. Prefer subtle transitions and hover effects over excessive animations.
7. Avoid introducing a second styling system.

## Component Guidelines

1. Prefer small, focused, reusable components when they provide genuine value.
2. Avoid unnecessary abstraction and excessive component splitting.
3. Reuse existing components from `components/ui/` where appropriate.
4. Use Lucide React for icons.
5. Follow existing naming conventions and file organization.
6. Use the existing `cn()` utility from `lib/utils.ts` when conditional class merging is needed.

## Accessibility

- Use semantic navigation, buttons, sections, and links.
- Provide meaningful image alt text.
- Ensure keyboard accessibility for interactive elements.
- Use appropriate ARIA attributes where needed.
- Maintain visible focus states.
- Ensure sufficient text and background contrast.

## Links and Images

- Use `next/image` for local project and profile images where appropriate.
- Preserve existing image paths under `public/images/`.
- Use `mailto:` for email links and `tel:` for phone links.
- For external links opened in a new tab, use `target="_blank"` with `rel="noopener noreferrer"`.
- Never create fake or placeholder project URLs in production content.

## SEO

- Maintain appropriate page title and description in the root metadata.
- Keep metadata accurate and consistent with the actual portfolio content.
- Use meaningful section IDs that match Navbar anchor links.
- Do not add unsupported claims to SEO descriptions or Open Graph metadata.

## Development Workflow

Before making changes:

1. Inspect the relevant files and existing implementation.
2. Understand the current component structure and data flow.
3. Make only the changes required for the requested task.
4. Preserve existing working functionality.
5. Avoid unrelated refactoring.

Do not:

- Install packages without a clear requirement.
- Modify unrelated files.
- Replace working components unnecessarily.
- Suppress lint, TypeScript, or build errors to force a passing result.
- Add dependencies that duplicate existing functionality.

## Validation Commands

Run the relevant checks after implementation:

```bash
npm run lint
npx tsc --noEmit
npm run build
```

Fix errors caused by your changes before considering the task complete.

## General Instruction

Prioritize maintainability, accessibility, responsive design, performance, and code clarity.

When a requirement is unclear, inspect the existing code and preserve established project conventions rather than making assumptions.