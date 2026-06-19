# GitHub Profile Analyzer

A production-ready Next.js App Router dashboard for analyzing GitHub users, repositories, languages, activity, contributions, developer score, comparisons, and reports.

## Stack
Next.js, TypeScript, Tailwind CSS, shadcn-style primitives, TanStack Query, Recharts, Framer Motion, Zod, Axios, Lucide React, next-themes.

## Setup
```bash
npm install
cp .env.example .env.local
# add GITHUB_TOKEN for GraphQL contributions and higher REST limits
npm run dev
```

## Features
- Public GitHub username validation and not-found states
- Profile overview cards
- Repository analytics, sorting, search, pagination, language filtering
- Recharts language distribution
- Developer score and rank calculation
- Contribution heatmap via GitHub GraphQL when `GITHUB_TOKEN` is set
- Activity timeline from public events
- Profile comparison API and UI
- JSON/CSV/PDF export utilities
- Dark/light/system theme foundation with `next-themes`

## Deployment on Vercel
1. Push this repository to GitHub.
2. Import the project in Vercel.
3. Add `GITHUB_TOKEN` as an encrypted environment variable.
4. Deploy with the default Next.js framework settings.
