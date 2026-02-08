import { defineType } from 'sanity';

export const footerColumn = defineType({
  name: 'footerColumn',
  title: 'Footer Column',
  type: 'object',
  fields: [
    {
      name: 'heading',
      title: 'Heading',
      type: 'string',
      validation: (rule) => rule.required(),
    },
    {
      name: 'links',
      title: 'Links',
      type: 'array',
      of: [{ type: 'navLink' }],
      validation: (rule) => rule.required(),
    },
  ],
  preview: {
    select: { title: 'heading' },
  },
});
