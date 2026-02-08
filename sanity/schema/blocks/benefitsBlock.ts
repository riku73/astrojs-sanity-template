import { defineType } from 'sanity';

export const benefitsBlock = defineType({
  name: 'benefitsBlock',
  title: 'Benefits',
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
    },
    {
      name: 'subheading',
      title: 'Subheading (italic)',
      type: 'string',
    },
    {
      name: 'items',
      title: 'Benefit Items',
      type: 'array',
      of: [{ type: 'benefitItem' }],
    },
  ],
  preview: {
    select: { title: 'heading', subtitle: 'badge' },
    prepare({ title, subtitle }) {
      return { title: title || 'Benefits', subtitle: subtitle || 'Benefits Section' };
    },
  },
});
