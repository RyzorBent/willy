# Willy Foundation

Marketing and information site for the **Willy Foundation** — the permanent home of the Bra Willy Back-A-Buddy & Legacy Project. Surfaces the foundation's story, programmes, events, transparency reporting, and pathways to get involved or donate.

## Status

This is the **initial mock**. Content is hard-coded in `src/lib/data.ts` — there is **no database yet**. Imagery is placeholder.

## Tech stack

- Next.js 16 (App Router) + React 19
- TypeScript
- Plain CSS (`globals.css`) with Fraunces + Inter via `next/font`
- pnpm

## Hosting

Deployed on **Vercel** (project: `willy`).

## Local dev

```bash
pnpm install
pnpm dev
```

Open http://localhost:3000.

## Roadmap

1. Verify copy across all pages
2. Move things around — corrections to layout, IA, and structure
3. Bring in MongoDB and replace placeholder content with professional imagery and real data
4. …
