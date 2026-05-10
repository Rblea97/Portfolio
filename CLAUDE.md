# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What This Is

Richard Blea's personal portfolio site. Single-page, static export. Targets IT support employers. Framing: security-aware IT professional — not "doing IT while aiming for security."

**Stack:** Next.js 15 (App Router) · Tailwind CSS v4 · Framer Motion v11 · TypeScript strict · pnpm · Vitest

## Commands

```bash
pnpm dev          # dev server at localhost:3000
pnpm build        # static export → out/
pnpm test         # run all Vitest tests (non-watch)
pnpm test:watch   # watch mode
pnpm lint         # ESLint
pnpm typecheck    # tsc --noEmit
```

Run a single test file:
```bash
pnpm test __tests__/hooks/useTypewriter.test.ts
```

## Architecture

Single page assembled in `app/page.tsx` from isolated section components. No server — `output: 'export'` in `next.config.ts` produces pure HTML/CSS/JS in `out/`.

**Data flow:** All content lives in `lib/data/` as typed arrays. Components import directly — no API, no fetch, no state management library.

**Animation pattern:** Every section component uses `useInView` from Framer Motion to trigger `staggerChildren` reveal on scroll. Hero uses the `useTypewriter` custom hook. Nav uses `useScrollSpy` for active-link highlighting. Both hooks live in `lib/hooks/` and are unit-tested with fake timers.

**Styling:** Tailwind v4 with `@theme` tokens in `globals.css`. Color tokens are `--color-green` (#00ff9f), `--color-purple` (#a78bfa), `--color-bg` (#080b12). Reference as `var(--color-green)` in inline styles or `text-[var(--color-green)]` in Tailwind classes. **Do not** use Tailwind color names like `text-green-400` — always use the design tokens.

**Font variables:** `--font-inter` (body) and `--font-geist-mono` (terminal accents) are injected by `app/layout.tsx` via `next/font`. Reference as `font-mono` (Tailwind) or `font-family: var(--font-mono)`.

## Key Constraints

- **Static export only** — no `use server`, no API routes, no dynamic routes. `next/image` requires `unoptimized: true` (already set).
- **All components are Client Components** (`'use client'`) because Framer Motion requires the browser.
- **No phone number on site** — resume PDF only. Never add it.
- **Resume files** in `public/`: `resume-ats.txt` (ATS plain text, already present), `resume.pdf` (designed PDF, add before launch).

## Content Framing

The portfolio positions Richard as an IT professional with security depth — not a security professional willing to do IT. Any copy changes must maintain this. Key phrases to use: "security-aware IT professional", "security fundamentals built in", "available for IT support and infrastructure roles." Avoid: "blue team / SOC", "cybersecurity roles", anything implying IT is a stepping stone.

## Deployment

Vercel. `pnpm build` must pass cleanly before pushing. The `out/` directory is the build artifact — it is gitignored.

## Docs

- Design spec: `docs/superpowers/specs/2026-05-09-portfolio-design.md`
- Implementation plan: `docs/superpowers/plans/2026-05-09-portfolio-site.md`
