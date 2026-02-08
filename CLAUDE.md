# {clientName} Website

## Stack
- **Framework:** Astro v5 (static + server routes via `export const prerender = false`)
- **CMS:** Sanity (headless, studio at /studio)
- **Styling:** Tailwind CSS v4 (Vite plugin, theme in `src/styles/global.css`)
- **Deployment:** Vercel

## Content Pipeline

Follow this order to create client-specific content:

```
1. /research-content    -- Research industry, competitors, keywords
                           Output: content-brief.md
2. Review the brief     -- Edit content-brief.md if needed
3. /write-content       -- Write copy from brief, seed Sanity
                           Output: scripts/seed-sanity.mjs (rewritten)
4. npm run dev          -- Preview at localhost:4321
5. Edit in Studio       -- Fine-tune at localhost:4321/studio
```

## Project Structure

```
template.config.js          -- Client identity, colors, fonts, meta
scripts/setup.mjs           -- Applies config across project (run after editing config)
scripts/seed-sanity.mjs     -- Sanity seed data (content pipeline output)
src/components/             -- Astro components (consume Sanity data via props)
src/layouts/Layout.astro    -- Base layout with meta tags
src/styles/global.css       -- Tailwind v4 @theme (colors, fonts)
sanity/schema/              -- Sanity schema definitions
docs/schema-reference.md    -- Complete field-by-field schema map
docs/copy-examples.md       -- Good vs bad copy examples per section
docs/content-brief-template.md -- Content brief structure reference
content-brief.md            -- Generated content brief (after /research-content)
```

## Key Patterns

### Styled Headings with *asterisks*
Three fields support `*text*` for italic serif accent: `heroHeading`, `howItWorksHeading`, `ctaHeading`. The StyledHeading component parses asterisks into `<em class="font-serif italic">`.

### Auto-Italic Fields
These render in italic serif automatically (no asterisks needed): `benefitsSubheading`, `faqSubheading`, `featuresHeadingLine1`, `statsHeadingLine1`.

### Tailwind v4
Uses `@theme` block in `src/styles/global.css`, NOT `tailwind.config.js`. Custom color tokens: navy-950 through navy-600 (dark backgrounds), sage-400 through sage-900 (accent).

### Component Data Flow
All components receive a `data` prop from Sanity with `??` fallback defaults. Edit content via Sanity Studio or seed script, not component files directly.

### Images
- Static: `public/assets/` (optimized WebP, max 1920px, quality 80)
- Dynamic: Sanity image uploads (transformed via `urlFor().width(1920).format('webp').quality(80)`)

## Environment Variables

```
PUBLIC_SANITY_PROJECT_ID    -- Sanity project ID
PUBLIC_SANITY_DATASET       -- Usually "production"
SANITY_API_TOKEN            -- Editor token for seed script (never commit)
```

## Git Conventions
- Email: `207792564+riku73@users.noreply.github.com`
- Never merge branches without explicit user consent
- Never deploy to production without explicit confirmation
