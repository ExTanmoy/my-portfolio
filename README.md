# Tanmoy Debnath — Portfolio

A modern, responsive personal portfolio website showcasing my skills, projects, education, and professional background as a Full Stack Developer.

## About

Hi, I'm **Tanmoy Debnath**, a Full Stack Developer from Barishal, Bangladesh, with 1+ year of experience in web development.

I enjoy building practical web applications, exploring modern technologies, and solving real-world problems through code. My interests include AI-assisted development, web performance, SEO, and secure application development. My long-term goal is to become an AI Engineer.

## Live Website

**Portfolio:** [Add your deployed portfolio URL here]

## Features

- Modern, responsive dark-themed design
- Emerald-accented visual design system
- Responsive navigation with mobile menu
- Hero section with personal introduction
- About section highlighting background and professional goals
- Categorized technical skills showcase
- Project showcase with screenshots and external links
- Education section
- Contact information and social links
- SEO-friendly page metadata
- Reusable components and centralized portfolio data

## Tech Stack

| Technology | Purpose |
|---|---|
| Next.js 16 (App Router) | React framework and routing |
| React 19 | UI development |
| TypeScript | Static typing |
| Tailwind CSS 4 | Utility-first styling |
| shadcn/ui | UI component system |
| Base UI | Accessible component primitives |
| Lucide React | Icons |
| Class Variance Authority | Component variant management |
| ESLint 9 | Code quality and linting |

## Featured Projects

### 1. BAZAR DOR — Market Price Tracker

A Bangla-first market price tracking application that helps users explore daily prices of essential products across different markets in Bangladesh.

**Key Highlights**
- Daily market price information
- Market-wise price comparison
- Price trends and change indicators
- Product categories and sorting

**Technologies:** Next.js, React, TypeScript, Tailwind CSS, DaisyUI, Better Auth, REST API, MongoDB

- [Live Demo](https://a7-bazar-dor-green.vercel.app/)
- [GitHub Repository](https://github.com/ExTanmoy/a7-bazar-dor)

### 2. FITLOG — Workout Management App

A workout management application where users can explore exercises, organize daily workout plans, and save their favorite workouts.

**Key Highlights**
- Workout library and category browsing
- Workout details
- Daily workout planning
- Saved workouts
- Shared state management with Context API
- Local storage persistence

**Technologies:** Next.js, React, TypeScript, Tailwind CSS, DaisyUI, Context API, REST API, Local Storage

- [Live Demo](https://a06-fit-log-jet.vercel.app/)
- [GitHub Repository](https://github.com/ExTanmoy/a06-fit-log)

### 3. DEVSTACK — Developer Stack Builder

An interactive application that allows users to explore developer technologies and build a custom technology stack.

**Key Highlights**
- Explore technologies from categorized collections
- Add and remove technologies from a custom stack
- Prevent duplicate selections
- Responsive technology cards
- Toast notifications for user interactions

**Technologies:** React, TypeScript, JavaScript, Tailwind CSS, DaisyUI, Vite

- [Live Demo](https://devstack-a05-ph-ex.netlify.app/)
- [GitHub Repository](https://github.com/ExTanmoy/A05-DevStack-React-Ts)

## Project Structure

```text
my-portfolio/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Skills.tsx
│   │   ├── Projects.tsx
│   │   ├── Education.tsx
│   │   └── Contact.tsx
│   └── ui/
├── data/
│   └── portfolio.ts
├── lib/
│   └── utils.ts
├── public/
│   └── images/
├── AGENTS.md
├── components.json
├── next.config.ts
├── package.json
└── tsconfig.json
```

## Getting Started

### Prerequisites

- Node.js
- npm

### Installation

Clone the repository:

```bash
git clone YOUR_REPOSITORY_URL
```

Navigate to the project directory:

```bash
cd my-portfolio
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start the development server |
| `npm run build` | Build the production application |
| `npm run start` | Start the production server |
| `npm run lint` | Run ESLint |

Additional TypeScript validation:

```bash
npx tsc --noEmit
```

## Centralized Portfolio Data

Portfolio content is maintained in:

```text
data/portfolio.ts
```

Personal information, social links, skills, education, and project information are organized in one place to make future updates easier.

## Contact

**Tanmoy Debnath**  
Full Stack Developer  
Barishal, Bangladesh

- Email: [ExTanmoy0@gmail.com](mailto:ExTanmoy0@gmail.com)
- GitHub: [ExTanmoy](https://github.com/ExTanmoy)
- LinkedIn: [extanmoy](https://www.linkedin.com/in/extanmoy/)

---

Built with Next.js, React, TypeScript, and Tailwind CSS.