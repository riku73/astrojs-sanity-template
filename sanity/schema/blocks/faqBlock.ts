import { defineType } from 'sanity';

export const faqBlock = defineType({
  name: 'faqBlock',
  title: 'FAQ',
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
      title: 'FAQ Items',
      type: 'array',
      of: [{ type: 'faqItem' }],
    },
  ],
  preview: {
    select: { title: 'heading', subtitle: 'badge' },
    prepare({ title, subtitle }) {
      return { title: title || 'FAQ', subtitle: subtitle || 'FAQ Section' };
    },
  },
});
