import { defineType } from 'sanity';

export const benefitItem = defineType({
  name: 'benefitItem',
  title: 'Benefit',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    },
    {
      name: 'content',
      title: 'Description',
      type: 'text',
      rows: 3,
      validation: (rule) => rule.required(),
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: { hotspot: true },
    },
  ],
  preview: {
    select: { title: 'title', media: 'image' },
  },
});
