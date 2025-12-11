# Track Route Prime — Next.js + Tailwind + TypeScript

This is a migration of the original Vite React project to **Next.js (App Router)** with Tailwind CSS and TypeScript.

## Quick start

```bash
pnpm i   # or npm i / yarn
pnpm dev # http://localhost:3000
```

- Routes: App Router (`/src/app/page.tsx`)
- Styling: Tailwind (`/src/app/globals.css`)
- Components: moved under `/src/components/*`
- Images: moved from `src/assets/*` to `public/images/*` and rendered via `next/image`.
- Theme + Toaster mounted in `src/app/providers.tsx`

## Notes

- Many interactive components are marked `"use client"` to avoid SSR pitfalls.
- Hash navigation (`#about`, etc.) continues to work.
- The `IntersectionObserver` animations are preserved in `page.tsx`.
