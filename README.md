# Khizar Studio

Premium business website portfolio built with Next.js 16, React 19, TypeScript, Tailwind CSS 4, Motion, GSAP, and Lenis.

## Run locally

```bash
npm ci
npm run dev
```

Open http://localhost:3000. Check production output with `npm run build` and lint with `npm run lint`.

## Project organization

- `src/app`: routes, global CSS, SEO metadata.
- `src/components/sections`: homepage sections and project case studies.
- `src/components/ui`: shared visual primitives.
- `src/components/animations` and `src/components/interactions`: reusable motion and interaction wrappers.
- `src/components/providers/EntranceProvider.tsx`: coordinates loading overlay and Hero entrance.
- `src/design-system`: design tokens, typography and motion presets.
- `src/styles/variables.css`: **authoritative CSS custom properties** for site colors, fonts, layout, radii and CSS motion timings.
- `src/config/site.ts`: site name, canonical URL, public email and links.
- `src/data`: projects, services, testimonials, FAQ, contact and other page copy.

## Deployment configuration

Set `NEXT_PUBLIC_SITE_URL` to your actual public website URL before production deployment. The fallback is the current Vercel preview domain. Update the public email in `src/config/site.ts` when needed.

## Portfolio content

The included Summit Construction and Creative Agency entries are website concepts. Verify that all testimonials, statistics, and client claims are genuine before publishing them as real customer results.

## Motion and accessibility

The loading screen signals completion before Hero entrance animations begin. Reduced-motion visitors receive minimal animation. The horizontal pinned Projects gallery is intentionally retained for desktop visitors without reduced-motion preferences.
