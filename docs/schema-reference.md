# Sanity Schema Reference for Landing Page Content

This document defines every field in the `landingPage` document type. Content written for `scripts/seed-sanity.mjs` must match these types, constraints, and patterns exactly.

---

## Document Root

- `_id`: `'landingPage'` (fixed singleton)
- `_type`: `'landingPage'` (fixed)

---

## SEO Fields

| Field | Type | Required | Constraints |
|-------|------|----------|-------------|
| `metaTitle` | string | Yes | 50-60 chars, include primary keyword, brand name at end |
| `metaDescription` | text | Yes | 150-160 chars, include keyword, compelling CTA |

---

## Navigation

| Field | Type | Required | Constraints |
|-------|------|----------|-------------|
| `navLinks` | array of navLink | No | 4-6 items recommended |
| `navCtaLabel` | string | No | 2-4 words, action-oriented |
| `navCtaHref` | string | No | URL or anchor |

### navLink Object

```json
{ "_type": "navLink", "_key": "nav1", "label": "Benefits", "href": "#benefits" }
```

| Field | Type | Required |
|-------|------|----------|
| `label` | string | Yes |
| `href` | string | Yes |

---

## Hero Section

| Field | Type | Required | Constraints |
|-------|------|----------|-------------|
| `heroBadge` | string | No | 1-3 words |
| `heroHeading` | string | No | 4-10 words, supports `*asterisk*` for italic serif |
| `heroDescription` | text (rows: 3) | No | 2-3 sentences |
| `heroBackgroundImage` | image | No | Image with hotspot (not set via seed) |
| `heroCtaLabel` | string | No | 2-4 words, action verb + what they get |
| `heroCtaHref` | string | No | URL |

**Note:** `heroHeading` supports `*asterisk*` syntax. Text wrapped in `*...*` renders in italic serif font via the StyledHeading component.

---

## Benefits Section

| Field | Type | Required | Constraints |
|-------|------|----------|-------------|
| `benefitsBadge` | string | No | 1-2 words |
| `benefitsHeading` | string | No | 3-6 words, question format works well |
| `benefitsSubheading` | string | No | 3-7 words, renders in italic serif automatically |
| `benefitsItems` | array of benefitItem | No | Exactly 4 items |

### benefitItem Object

```json
{ "_type": "benefitItem", "_key": "b1", "title": "Save time effortlessly", "content": "Focus on what truly matters..." }
```

| Field | Type | Required | Constraints |
|-------|------|----------|-------------|
| `title` | string | Yes | 3-5 words, benefit-oriented outcome |
| `content` | text (rows: 3) | Yes | 2-3 sentences |
| `image` | image | No | Optional, with hotspot (not set via seed) |

---

## Features Section

| Field | Type | Required | Constraints |
|-------|------|----------|-------------|
| `featuresBadge` | string | No | 1-2 words |
| `featuresHeadingLine1` | string | No | 5-10 words, renders italic automatically |
| `featuresHeadingLine2` | string | No | 4-8 words, regular weight |
| `featuresCards` | array of featureCard | No | Exactly 3 items |

### featureCard Object

```json
{ "_type": "featureCard", "_key": "f1", "title": "Smart summaries", "description": "Get instant, accurate summaries..." }
```

| Field | Type | Required | Constraints |
|-------|------|----------|-------------|
| `title` | string | Yes | 2-4 words |
| `description` | string | Yes | 1-2 sentences (NOTE: string type, not text) |
| `image` | image | No | Optional, with hotspot (not set via seed) |

---

## How It Works Section

| Field | Type | Required | Constraints |
|-------|------|----------|-------------|
| `howItWorksBadge` | string | No | 1-3 words |
| `howItWorksHeading` | string | No | 4-10 words, supports `*asterisk*` |
| `howItWorksSteps` | array of howItWorksStep | No | 3-4 items |

### howItWorksStep Object

```json
{ "_type": "howItWorksStep", "_key": "h1", "title": "Connect your inbox", "description": "Quickly and securely..." }
```

| Field | Type | Required | Constraints |
|-------|------|----------|-------------|
| `title` | string | Yes | 2-5 words, starts with action verb |
| `description` | text (rows: 3) | Yes | 2-3 sentences |
| `image` | image | No | Optional, with hotspot (not set via seed) |

**Note:** The component auto-generates step numbers (01, 02, 03...) from array index. Do not include numbers in titles.

---

## Stats Section

| Field | Type | Required | Constraints |
|-------|------|----------|-------------|
| `statsBadge` | string | No | 1-2 words |
| `statsHeadingLine1` | string | No | 4-8 words, renders italic automatically |
| `statsHeadingLine2` | string | No | 3-6 words, regular weight |
| `statsMission` | text (rows: 3) | No | 2-4 sentences, brand philosophy |
| `statsBackgroundImage` | image | No | Optional (not set via seed) |
| `statsCards` | array of statCard | No | Exactly 3 items |

### statCard Object

```json
{ "_type": "statCard", "_key": "s1", "label": "Processing speed", "value": "8\u00d7", "description": "Faster inbox triage across all channels." }
```

| Field | Type | Required | Constraints |
|-------|------|----------|-------------|
| `label` | string | Yes | 1-3 words, what is being measured |
| `value` | string | Yes | Number, percentage, or multiplier (e.g., "8\u00d7", "98%", "3.5") |
| `unit` | string | No | Optional suffix (e.g., "hrs/day", "min") |
| `description` | string | Yes | 1 sentence (NOTE: string type, not text) |

---

## Testimonial Section

| Field | Type | Required | Constraints |
|-------|------|----------|-------------|
| `testimonialBadge` | string | No | 1-2 words |
| `testimonialQuote` | text (rows: 4) | No | 3-5 sentences, first-person voice |
| `testimonialAuthorName` | string | No | Realistic full name |
| `testimonialAuthorRole` | string | No | Job title matching target customer persona |
| `testimonialAvatars` | array of testimonialAvatar | No | Image objects (not set via seed) |
| `testimonialBackgroundImage` | image | No | Optional (not set via seed) |

---

## FAQ Section

| Field | Type | Required | Constraints |
|-------|------|----------|-------------|
| `faqBadge` | string | No | 1-2 words |
| `faqHeading` | string | No | 3-6 words, often a question |
| `faqSubheading` | string | No | 2-5 words, renders italic automatically |
| `faqItems` | array of faqItem | No | 4-6 items |

### faqItem Object

```json
{ "_type": "faqItem", "_key": "q1", "question": "What exactly does X do?", "answer": "X does..." }
```

| Field | Type | Required | Constraints |
|-------|------|----------|-------------|
| `question` | string | Yes | Full question ending with ? |
| `answer` | text (rows: 4) | Yes | 2-4 sentences, direct answer first |

---

## CTA Section

| Field | Type | Required | Constraints |
|-------|------|----------|-------------|
| `ctaHeading` | string | No | 3-7 words, supports `*asterisk*` |
| `ctaDescription` | text (rows: 3) | No | 2-3 sentences |
| `ctaButtonLabel` | string | No | 2-5 words, action verb + outcome |
| `ctaButtonHref` | string | No | URL |
| `ctaBackgroundImage` | image | No | Optional (not set via seed) |

---

## Footer Section

| Field | Type | Required | Constraints |
|-------|------|----------|-------------|
| `footerDescription` | text (rows: 2) | No | 1-2 sentences, brand summary |
| `footerColumns` | array of footerColumn | No | 3 columns |
| `footerSocialLinks` | array of socialLink | No | Up to 4 platforms |
| `footerCopyright` | string | No | "\u00a9{year} {brand}. All rights reserved." |
| `footerLegalLinks` | array of navLink | No | 2 items: Privacy policy, Terms of service |

### footerColumn Object

```json
{
  "_type": "footerColumn", "_key": "col1",
  "heading": "Product",
  "links": [
    { "_type": "navLink", "_key": "p1", "label": "Overview", "href": "#" },
    { "_type": "navLink", "_key": "p2", "label": "Features", "href": "#features" }
  ]
}
```

| Field | Type | Required |
|-------|------|----------|
| `heading` | string | Yes |
| `links` | array of navLink | Yes |

### socialLink Object

```json
{ "_type": "socialLink", "_key": "so1", "platform": "instagram", "url": "#" }
```

| Field | Type | Required | Constraints |
|-------|------|----------|-------------|
| `platform` | string | Yes | Must be one of: `instagram`, `youtube`, `linkedin`, `x` |
| `url` | string | No | URL or `#` placeholder |

---

## Key Rules

1. **ALL array items MUST have `_type` and `_key` fields**
2. `_key` values must be unique within their array (use sequential IDs: nav1, b1, f1, h1, s1, q1, col1, so1, etc.)
3. `string` fields are single-line; `text` fields are multi-line
4. **Asterisk italic support**: only `heroHeading`, `howItWorksHeading`, `ctaHeading`
5. **Auto-italic fields** (rendered in serif italic by CSS, no asterisks needed): `benefitsSubheading`, `faqSubheading`, `featuresHeadingLine1`, `statsHeadingLine1`
6. Image fields are optional and NOT set via the seed script (uploaded later via Sanity Studio)
7. Special characters: use `\u00d7` for multiplication sign, `\u00a9` for copyright, `\u2014` for em-dash
