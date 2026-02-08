import { defineType } from 'sanity';

export const testimonialAvatar = defineType({
  name: 'testimonialAvatar',
  title: 'Avatar',
  type: 'object',
  fields: [
    {
      name: 'image',
      title: 'Image',
      type: 'image',
    },
  ],
  preview: {
    select: { media: 'image' },
  },
});
