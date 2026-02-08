import { defineType } from 'sanity';

export const logoStripBlock = defineType({
  name: 'logoStripBlock',
  title: 'Logo Strip',
  type: 'object',
  fields: [
    {
      name: 'heading',
      title: 'Heading',
      type: 'string',
    },
    {
      name: 'logos',
      title: 'Logos',
      type: 'array',
      of: [{ type: 'logoItem' }],
    },
  ],
  preview: {
    select: { title: 'heading' },
    prepare({ title }) {
      return { title: title || 'Logo Strip', subtitle: 'Logo Strip Section' };
    },
  },
});
