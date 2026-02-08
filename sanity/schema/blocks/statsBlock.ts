import { defineType } from 'sanity';

export const statsBlock = defineType({
  name: 'statsBlock',
  title: 'Stats',
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
      name: 'mission',
      title: 'Mission Text',
      type: 'text',
      rows: 3,
    },
    {
      name: 'backgroundImage',
      title: 'Background Image',
      type: 'image',
    },
    {
      name: 'stats',
      title: 'Stat Cards',
      type: 'array',
      of: [{ type: 'statCard' }],
    },
  ],
  preview: {
    select: { title: 'headingLine2', subtitle: 'badge' },
    prepare({ title, subtitle }) {
      return { title: title || 'Stats', subtitle: subtitle || 'Stats Section' };
    },
  },
});
