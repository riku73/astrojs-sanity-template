import { defineType } from 'sanity';

export const heroBlock = defineType({
  name: 'heroBlock',
  title: 'Hero',
  type: 'object',
  fields: [
    {
      name: 'badge',
      title: 'Badge Text',
      type: 'string',
    },
    {
      name: 'heading',
      title: 'Heading',
      type: 'string',
      description: 'Use *asterisks* around words for italic serif styling',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
    },
    {
      name: 'backgroundImage',
      title: 'Background Image',
      type: 'image',
      options: { hotspot: true },
    },
    {
      name: 'ctaLabel',
      title: 'CTA Button Label',
      type: 'string',
    },
    {
      name: 'ctaHref',
      title: 'CTA Button URL',
      type: 'string',
    },
  ],
  preview: {
    select: { title: 'heading', subtitle: 'badge' },
    prepare({ title, subtitle }) {
      return { title: title || 'Hero', subtitle: subtitle || 'Hero Section' };
    },
  },
});
