import { defineType } from 'sanity';

export const featuresBlock = defineType({
  name: 'featuresBlock',
  title: 'Features',
  type: 'object',
  fields: [
    {
      name: 'badge',
      title: 'Badge Text',
      type: 'string',
    },
    {
      name: 'headingLine1',
      title: 'Heading Line 1 (italic)',
      type: 'string',
    },
    {
      name: 'headingLine2',
      title: 'Heading Line 2',
      type: 'string',
    },
    {
      name: 'cards',
      title: 'Feature Cards',
      type: 'array',
      of: [{ type: 'featureCard' }],
    },
  ],
  preview: {
    select: { title: 'headingLine2', subtitle: 'badge' },
    prepare({ title, subtitle }) {
      return { title: title || 'Features', subtitle: subtitle || 'Features Section' };
    },
  },
});
