import { defineType } from 'sanity';

export const landingPage = defineType({
  name: 'landingPage',
  title: 'Landing Page',
  type: 'document',
  groups: [
    { name: 'seo', title: 'SEO' },
    { name: 'navigation', title: 'Navigation' },
    { name: 'hero', title: 'Hero' },
    { name: 'logoStrip', title: 'Logo Strip' },
    { name: 'benefits', title: 'Benefits' },
    { name: 'features', title: 'Features' },
    { name: 'howItWorks', title: 'How It Works' },
    { name: 'stats', title: 'Stats' },
    { name: 'testimonial', title: 'Testimonial' },
    { name: 'faq', title: 'FAQ' },
    { name: 'cta', title: 'CTA' },
    { name: 'footer', title: 'Footer' },
  ],
  fields: [
    // ─── SEO ────────────────────────────────────────
    {
      name: 'metaTitle',
      title: 'Meta Title',
      type: 'string',
      group: 'seo',
      validation: (rule) => rule.required(),
    },
    {
      name: 'metaDescription',
      title: 'Meta Description',
      type: 'text',
      rows: 2,
      group: 'seo',
      validation: (rule) => rule.required(),
    },

    // ─── Navigation ─────────────────────────────────
    {
      name: 'navLinks',
      title: 'Navigation Links',
      type: 'array',
      of: [{ type: 'navLink' }],
      group: 'navigation',
    },
    {
      name: 'navCtaLabel',
      title: 'CTA Button Label',
      type: 'string',
      group: 'navigation',
    },
    {
      name: 'navCtaHref',
      title: 'CTA Button URL',
      type: 'string',
      group: 'navigation',
    },

    // ─── Hero ───────────────────────────────────────
    {
      name: 'heroBadge',
      title: 'Badge Text',
      type: 'string',
      group: 'hero',
    },
    {
      name: 'heroHeading',
      title: 'Heading',
      type: 'string',
      description: 'Use *asterisks* around words for italic serif styling',
      group: 'hero',
    },
    {
      name: 'heroDescription',
      title: 'Description',
      type: 'text',
      rows: 3,
      group: 'hero',
    },
    {
      name: 'heroBackgroundImage',
      title: 'Background Image',
      type: 'image',
      options: { hotspot: true },
      group: 'hero',
    },
    {
      name: 'heroCtaLabel',
      title: 'CTA Button Label',
      type: 'string',
      group: 'hero',
    },
    {
      name: 'heroCtaHref',
      title: 'CTA Button URL',
      type: 'string',
      group: 'hero',
    },

    // ─── Logo Strip ─────────────────────────────────
    {
      name: 'logoStripHeading',
      title: 'Heading',
      type: 'string',
      group: 'logoStrip',
    },
    {
      name: 'logoStripLogos',
      title: 'Logos',
      type: 'array',
      of: [{ type: 'logoItem' }],
      group: 'logoStrip',
    },

    // ─── Benefits ───────────────────────────────────
    {
      name: 'benefitsBadge',
      title: 'Badge Text',
      type: 'string',
      group: 'benefits',
    },
    {
      name: 'benefitsHeading',
      title: 'Heading',
      type: 'string',
      group: 'benefits',
    },
    {
      name: 'benefitsSubheading',
      title: 'Subheading (italic)',
      type: 'string',
      group: 'benefits',
    },
    {
      name: 'benefitsItems',
      title: 'Benefit Items',
      type: 'array',
      of: [{ type: 'benefitItem' }],
      group: 'benefits',
    },

    // ─── Features ───────────────────────────────────
    {
      name: 'featuresBadge',
      title: 'Badge Text',
      type: 'string',
      group: 'features',
    },
    {
      name: 'featuresHeadingLine1',
      title: 'Heading Line 1 (italic)',
      type: 'string',
      group: 'features',
    },
    {
      name: 'featuresHeadingLine2',
      title: 'Heading Line 2',
      type: 'string',
      group: 'features',
    },
    {
      name: 'featuresCards',
      title: 'Feature Cards',
      type: 'array',
      of: [{ type: 'featureCard' }],
      group: 'features',
    },

    // ─── How It Works ───────────────────────────────
    {
      name: 'howItWorksBadge',
      title: 'Badge Text',
      type: 'string',
      group: 'howItWorks',
    },
    {
      name: 'howItWorksHeading',
      title: 'Heading',
      type: 'string',
      description: 'Use *asterisks* around words for italic serif styling',
      group: 'howItWorks',
    },
    {
      name: 'howItWorksSteps',
      title: 'Steps',
      type: 'array',
      of: [{ type: 'howItWorksStep' }],
      group: 'howItWorks',
    },

    // ─── Stats ──────────────────────────────────────
    {
      name: 'statsBadge',
      title: 'Badge Text',
      type: 'string',
      group: 'stats',
    },
    {
      name: 'statsHeadingLine1',
      title: 'Heading Line 1 (italic)',
      type: 'string',
      group: 'stats',
    },
    {
      name: 'statsHeadingLine2',
      title: 'Heading Line 2',
      type: 'string',
      group: 'stats',
    },
    {
      name: 'statsMission',
      title: 'Mission Text',
      type: 'text',
      rows: 3,
      group: 'stats',
    },
    {
      name: 'statsBackgroundImage',
      title: 'Background Image',
      type: 'image',
      group: 'stats',
    },
    {
      name: 'statsCards',
      title: 'Stat Cards',
      type: 'array',
      of: [{ type: 'statCard' }],
      group: 'stats',
    },

    // ─── Testimonial ────────────────────────────────
    {
      name: 'testimonialBadge',
      title: 'Badge Text',
      type: 'string',
      group: 'testimonial',
    },
    {
      name: 'testimonialQuote',
      title: 'Quote',
      type: 'text',
      rows: 4,
      group: 'testimonial',
    },
    {
      name: 'testimonialAuthorName',
      title: 'Author Name',
      type: 'string',
      group: 'testimonial',
    },
    {
      name: 'testimonialAuthorRole',
      title: 'Author Role',
      type: 'string',
      group: 'testimonial',
    },
    {
      name: 'testimonialAvatars',
      title: 'Avatars',
      type: 'array',
      of: [{ type: 'testimonialAvatar' }],
      group: 'testimonial',
    },
    {
      name: 'testimonialBackgroundImage',
      title: 'Background Image',
      type: 'image',
      group: 'testimonial',
    },

    // ─── FAQ ────────────────────────────────────────
    {
      name: 'faqBadge',
      title: 'Badge Text',
      type: 'string',
      group: 'faq',
    },
    {
      name: 'faqHeading',
      title: 'Heading',
      type: 'string',
      group: 'faq',
    },
    {
      name: 'faqSubheading',
      title: 'Subheading (italic)',
      type: 'string',
      group: 'faq',
    },
    {
      name: 'faqItems',
      title: 'FAQ Items',
      type: 'array',
      of: [{ type: 'faqItem' }],
      group: 'faq',
    },

    // ─── CTA ────────────────────────────────────────
    {
      name: 'ctaHeading',
      title: 'Heading',
      type: 'string',
      description: 'Use *asterisks* around words for italic serif styling',
      group: 'cta',
    },
    {
      name: 'ctaDescription',
      title: 'Description',
      type: 'text',
      rows: 3,
      group: 'cta',
    },
    {
      name: 'ctaButtonLabel',
      title: 'Button Label',
      type: 'string',
      group: 'cta',
    },
    {
      name: 'ctaButtonHref',
      title: 'Button URL',
      type: 'string',
      group: 'cta',
    },
    {
      name: 'ctaBackgroundImage',
      title: 'Background Image',
      type: 'image',
      group: 'cta',
    },

    // ─── Footer ─────────────────────────────────────
    {
      name: 'footerDescription',
      title: 'Description',
      type: 'text',
      rows: 2,
      group: 'footer',
    },
    {
      name: 'footerColumns',
      title: 'Link Columns',
      type: 'array',
      of: [{ type: 'footerColumn' }],
      group: 'footer',
    },
    {
      name: 'footerSocialLinks',
      title: 'Social Links',
      type: 'array',
      of: [{ type: 'socialLink' }],
      group: 'footer',
    },
    {
      name: 'footerCopyright',
      title: 'Copyright Text',
      type: 'string',
      group: 'footer',
    },
    {
      name: 'footerLegalLinks',
      title: 'Legal Links',
      type: 'array',
      of: [{ type: 'navLink' }],
      group: 'footer',
    },
  ],
  preview: {
    prepare() {
      return { title: 'Landing Page' };
    },
  },
});
