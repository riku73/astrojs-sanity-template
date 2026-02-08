import { defineType } from 'sanity';

export const ctaBlock = defineType({
  name: 'ctaBlock',
  title: 'CTA',
  type: 'object',
  fields: [
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
      name: 'ctaLabel',
      title: 'Button Label',
      type: 'string',
    },
    {
      name: 'ctaHref',
      title: 'Button URL',
      type: 'string',
    },
    {
      name: 'backgroundImage',
      title: 'Background Image',
      type: 'image',
    },
  ],
  preview: {
    select: { title: 'heading', subtitle: 'ctaLabel' },
    prepare({ title, subtitle }) {
      return { title: title || 'CTA', subtitle: subtitle || 'CTA Section' };
    },
  },
});
