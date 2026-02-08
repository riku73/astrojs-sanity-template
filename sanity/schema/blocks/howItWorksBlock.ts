import { defineType } from 'sanity';

export const howItWorksBlock = defineType({
  name: 'howItWorksBlock',
  title: 'How It Works',
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
      name: 'steps',
      title: 'Steps',
      type: 'array',
      of: [{ type: 'howItWorksStep' }],
    },
  ],
  preview: {
    select: { title: 'heading', subtitle: 'badge' },
    prepare({ title, subtitle }) {
      return { title: title || 'How It Works', subtitle: subtitle || 'How It Works Section' };
    },
  },
});
