import { defineType } from 'sanity';

export const logoItem = defineType({
  name: 'logoItem',
  title: 'Logo',
  type: 'object',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (rule) => rule.required(),
    },
    {
      name: 'logo',
      title: 'Logo',
      type: 'image',
      options: { accept: 'image/svg+xml,image/png,image/webp' },
    },
  ],
  preview: {
    select: { title: 'name', media: 'logo' },
  },
});
