// template.config.js — Edit this file, then run: node scripts/setup.mjs

export default {
  // ─── Identity ──────────────────────────────────────
  clientName: 'Aireply',           // Brand name (Navbar, Footer, copyright, seed data)
  clientSlug: 'aireply',           // Lowercase (package.json name, sanity.config.ts)
  clientDomain: 'aireply.com',     // Used in copyright
  clientYear: '2026',              // Copyright year

  // ─── Sanity ────────────────────────────────────────
  sanityProjectId: '',             // Paste after creating project at sanity.io/manage
  sanityDataset: 'production',

  // ─── Design Tokens (Tailwind v4 @theme) ────────────
  colors: {
    'navy-950': '#0E0E0E',
    'navy-900': '#161616',
    'navy-800': '#1e1e1e',
    'navy-700': '#2a2a2a',
    'navy-600': '#3a3a3a',
    'sage-400': '#8aab9a',
    'sage-500': '#6d9680',
    'sage-800': '#2a4a3a',
    'sage-900': '#1a3328',
  },

  // ─── Fonts ─────────────────────────────────────────
  // Place font files in public/fonts/
  fonts: {
    sans: { family: 'Inter', file: 'inter-var.woff2' },
    serif: { family: 'Playfair Display', file: 'playfair-display-italic.woff2' },
  },

  // ─── Meta Defaults ─────────────────────────────────
  metaTitle: 'Company — Landing Page',
  metaDescription: 'Welcome to our platform.',
};
