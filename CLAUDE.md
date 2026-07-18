# CLAUDE.md — I Never Left

Persistent project memory for Claude. Read this before touching anything.

## What this project is

I Never Left (ineverleft.co.uk) — the only UK service built solely for freelancer re-engagement. Done-for-you: we reconnect freelancers with past clients after a break. Launched 2 May 2026. Registered Ltd company. Founder: Rich Allen.

Tagline: **"Take the break. Keep the clients."**

## Stack

- Vite + React + TypeScript
- Tailwind CSS + shadcn/ui
- Hosted on Vercel (every change must build and deploy cleanly — run `npm run build` before considering work done)
- Repo: ricoa21/i-never-left

## Brand — non-negotiable

- Dark, premium look. Dark backgrounds always; never light-mode marketing pages.
- Primary accent: purple `#7c3aed`
- Font: Outfit (all weights via Google Fonts)
- Voice: warm, confident, human. Never corporate, never salesy-slick.
- **Never claim or imply messaging is AI-generated. Anywhere. This is a hard rule** — the product's value is human re-engagement.

## Packages (source of truth for pricing copy)

| Package | Price |
|---|---|
| Starter | £99 |
| Pro | £249 |
| Concierge | £499+ |

## Working preferences

- Provide complete files, not diff fragments — Rich pastes whole files.
- Single-purpose components; keep shadcn/ui conventions.
- Don't add dependencies without flagging it.
- Mobile-first: check responsive behaviour on anything visual.
- If something looks off-brand (light background, wrong purple, non-Outfit font), fix it or flag it — don't ship it.

## Workflow

Explore → Plan → Code → Commit. For any non-trivial change: read the relevant files first, state the plan briefly, then implement. Verify with `npm run build` before finishing.
