#!/usr/bin/env node
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');

// Load config
const { default: config } = await import(path.resolve(root, 'template.config.js'));

function read(relPath) {
  return fs.readFileSync(path.resolve(root, relPath), 'utf-8');
}

function write(relPath, content) {
  fs.writeFileSync(path.resolve(root, relPath), content, 'utf-8');
}

function replaceAll(str, search, replacement) {
  return str.split(search).join(replacement);
}

// ─── 1. package.json ─────────────────────────────────
function updatePackageJson() {
  const pkg = JSON.parse(read('package.json'));
  pkg.name = `${config.clientSlug}-landing`;
  if (!pkg.scripts.setup) {
    pkg.scripts.setup = 'node scripts/setup.mjs';
  }
  write('package.json', JSON.stringify(pkg, null, 2) + '\n');
  console.log('  package.json — name + setup script');
}

// ─── 2. sanity.config.ts ─────────────────────────────
function updateSanityConfig() {
  let content = read('sanity.config.ts');
  content = content.replace(/name:\s*'[^']+'/, `name: '${config.clientSlug}'`);
  content = content.replace(/title:\s*'[^']+'/, `title: '${config.clientName}'`);
  write('sanity.config.ts', content);
  console.log('  sanity.config.ts — name + title');
}

// ─── 3. astro.config.mjs ────────────────────────────
function updateAstroConfig() {
  let content = read('astro.config.mjs');
  // Remove hardcoded fallback project ID
  content = content.replace(
    /const projectId = process\.env\.PUBLIC_SANITY_PROJECT_ID \|\| '[^']+';/,
    'const projectId = process.env.PUBLIC_SANITY_PROJECT_ID;'
  );
  write('astro.config.mjs', content);
  console.log('  astro.config.mjs — removed hardcoded project ID fallback');
}

// ─── 4. global.css ───────────────────────────────────
function updateGlobalCss() {
  let content = read('src/styles/global.css');

  // Replace colors in @theme block
  for (const [name, hex] of Object.entries(config.colors)) {
    const regex = new RegExp(`(--color-${name}:\\s*)#[0-9a-fA-F]{6}`, 'g');
    content = content.replace(regex, `$1${hex}`);
  }

  // Replace font families if changed
  if (config.fonts?.sans?.family) {
    content = content.replace(
      /font-family:\s*"[^"]+"/,
      `font-family: "${config.fonts.sans.family}"`
    );
    content = content.replace(
      /(--font-sans:\s*)"[^"]+"/,
      `$1"${config.fonts.sans.family}"`
    );
  }

  if (config.fonts?.serif?.family) {
    // Match the second @font-face font-family (serif)
    const fontFaceBlocks = content.split('@font-face');
    if (fontFaceBlocks.length >= 3) {
      fontFaceBlocks[2] = fontFaceBlocks[2].replace(
        /font-family:\s*"[^"]+"/,
        `font-family: "${config.fonts.serif.family}"`
      );
    }
    content = fontFaceBlocks.join('@font-face');
    content = content.replace(
      /(--font-serif:\s*)"[^"]+"/,
      `$1"${config.fonts.serif.family}"`
    );
  }

  // Replace font file paths
  if (config.fonts?.sans?.file) {
    content = content.replace(
      /src:\s*url\("\/fonts\/[^"]+"\)\s*format\("woff2"\);/,
      `src: url("/fonts/${config.fonts.sans.file}") format("woff2");`
    );
  }

  if (config.fonts?.serif?.file) {
    const fontFaceBlocks = content.split('@font-face');
    if (fontFaceBlocks.length >= 3) {
      fontFaceBlocks[2] = fontFaceBlocks[2].replace(
        /src:\s*url\("\/fonts\/[^"]+"\)\s*format\("woff2"\);/,
        `src: url("/fonts/${config.fonts.serif.file}") format("woff2");`
      );
    }
    content = fontFaceBlocks.join('@font-face');
  }

  write('src/styles/global.css', content);
  console.log('  global.css — colors + fonts');
}

// ─── 5. Layout.astro ────────────────────────────────
function updateLayout() {
  let content = read('src/layouts/Layout.astro');
  content = content.replace(
    /title\s*=\s*'[^']+'/,
    `title = '${config.metaTitle}'`
  );
  content = content.replace(
    /description\s*=\s*'[^']+'/,
    `description = '${config.metaDescription}'`
  );

  // Update font preload paths
  if (config.fonts?.sans?.file) {
    content = content.replace(
      /href="\/fonts\/inter-var\.woff2"/,
      `href="/fonts/${config.fonts.sans.file}"`
    );
  }
  if (config.fonts?.serif?.file) {
    content = content.replace(
      /href="\/fonts\/playfair-display-italic\.woff2"/,
      `href="/fonts/${config.fonts.serif.file}"`
    );
  }

  write('src/layouts/Layout.astro', content);
  console.log('  Layout.astro — meta title + description');
}

// ─── 6. Navbar.astro ────────────────────────────────
function updateNavbar() {
  let content = read('src/components/Navbar.astro');
  content = content.replace(
    /<span class="text-lg font-semibold text-white">.*?<\/span>/,
    `<span class="text-lg font-semibold text-white">${config.clientName}</span>`
  );
  write('src/components/Navbar.astro', content);
  console.log('  Navbar.astro — brand name');
}

// ─── 7. Footer.astro ────────────────────────────────
function updateFooter() {
  let content = read('src/components/Footer.astro');
  content = content.replace(
    /<span class="text-lg font-normal text-white">.*?<\/span>/,
    `<span class="text-lg font-normal text-white">${config.clientName}</span>`
  );
  content = content.replace(
    /\\u00a9\d{4}\s+\w+\.\s*All rights reserved\./,
    `\\u00a9${config.clientYear} ${config.clientName}. All rights reserved.`
  );
  // Also handle the ?? fallback string
  content = content.replace(
    /'\u00a9\d{4}\s+\w+\.\s*All rights reserved\.'/,
    `'\\u00a9${config.clientYear} ${config.clientName}. All rights reserved.'`
  );
  write('src/components/Footer.astro', content);
  console.log('  Footer.astro — brand name + copyright');
}

// ─── 8. seed-sanity.mjs ─────────────────────────────
function updateSeedScript() {
  let content = read('scripts/seed-sanity.mjs');
  content = replaceAll(content, 'Aireply', config.clientName);
  // Update copyright year in seed data
  content = content.replace(
    /\\u00a9\d{4}/g,
    `\\u00a9${config.clientYear}`
  );
  write('scripts/seed-sanity.mjs', content);
  console.log('  seed-sanity.mjs — brand name + copyright year');
}

// ─── 9. CLAUDE.md ──────────────────────────────────
function updateClaudeMd() {
  const filePath = path.resolve(root, 'CLAUDE.md');
  if (!fs.existsSync(filePath)) return;
  let content = read('CLAUDE.md');
  content = replaceAll(content, '{clientName}', config.clientName);
  content = replaceAll(content, '{clientSlug}', config.clientSlug);
  write('CLAUDE.md', content);
  console.log('  CLAUDE.md — client name + slug');
}

// ─── 10. Generate .env ──────────────────────────────
function generateEnv() {
  const projectId = config.sanityProjectId || 'your_project_id';
  const dataset = config.sanityDataset || 'production';

  const envContent = `# Sanity Connection — get from https://www.sanity.io/manage
PUBLIC_SANITY_PROJECT_ID=${projectId}
PUBLIC_SANITY_DATASET=${dataset}
SANITY_STUDIO_PROJECT_ID=${projectId}
SANITY_STUDIO_DATASET=${dataset}

# Write Token — for seed script only (Editor role)
# Create at sanity.io/manage > API > Tokens > Add token
SANITY_API_TOKEN=your_token_here
`;

  write('.env', envContent);
  console.log('  .env — generated from config');
}

// ─── Run all ─────────────────────────────────────────
console.log(`\nSetting up project for: ${config.clientName}\n`);

updatePackageJson();
updateSanityConfig();
updateAstroConfig();
updateGlobalCss();
updateLayout();
updateNavbar();
updateFooter();
updateSeedScript();
updateClaudeMd();
generateEnv();

console.log(`
--- Setup complete! ---

Next steps:
  1. Replace images in public/assets/ with client images
  2. Replace logos (SVGs) in public/assets/ with client logos
  3. Replace fonts in public/fonts/ if using different fonts
  4. Create a Sanity project: npx sanity init --bare
  5. Copy the project ID into .env (PUBLIC_SANITY_PROJECT_ID + SANITY_STUDIO_PROJECT_ID)
  6. Create an API token at sanity.io/manage > API > Tokens (Editor role)
  7. Copy the token into .env (SANITY_API_TOKEN)
  8. Customize content in scripts/seed-sanity.mjs
  9. Run: npm install
 10. Seed Sanity: node scripts/seed-sanity.mjs
 11. Start dev: npm run dev
 12. Deploy: vercel
`);
