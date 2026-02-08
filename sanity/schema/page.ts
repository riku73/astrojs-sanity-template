import { defineType } from 'sanity';

export const page = defineType({
  name: 'page',
  title: 'Page',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title' },
      validation: (rule) => rule.required(),
    },
    {
      name: 'metaTitle',
      title: 'Meta Title',
      type: 'string',
      description: 'Override the page title for SEO (defaults to title if empty)',
    },
    {
      name: 'metaDescription',
      title: 'Meta Description',
      type: 'text',
      rows: 2,
    },
    {
      name: 'sections',
      title: 'Sections',
      type: 'array',
      of: [
        { type: 'heroBlock' },
        { type: 'logoStripBlock' },
        { type: 'benefitsBlock' },
        { type: 'featuresBlock' },
        { type: 'howItWorksBlock' },
        { type: 'statsBlock' },
        { type: 'testimonialBlock' },
        { type: 'faqBlock' },
        { type: 'ctaBlock' },
      ],
    },
  ],
  preview: {
    select: { title: 'title', slug: 'slug.current' },
    prepare({ title, slug }) {
      return { title: title || 'Untitled Page', subtitle: `/${slug || ''}` };
    },
  },
});
