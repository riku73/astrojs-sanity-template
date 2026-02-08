import { defineType } from 'sanity';

export const testimonialBlock = defineType({
  name: 'testimonialBlock',
  title: 'Testimonial',
  type: 'object',
  fields: [
    {
      name: 'badge',
      title: 'Badge Text',
      type: 'string',
    },
    {
      name: 'quote',
      title: 'Quote',
      type: 'text',
      rows: 4,
    },
    {
      name: 'authorName',
      title: 'Author Name',
      type: 'string',
    },
    {
      name: 'authorRole',
      title: 'Author Role',
      type: 'string',
    },
    {
      name: 'avatars',
      title: 'Avatars',
      type: 'array',
      of: [{ type: 'testimonialAvatar' }],
    },
    {
      name: 'backgroundImage',
      title: 'Background Image',
      type: 'image',
    },
  ],
  preview: {
    select: { title: 'authorName', subtitle: 'badge' },
    prepare({ title, subtitle }) {
      return { title: title || 'Testimonial', subtitle: subtitle || 'Testimonial Section' };
    },
  },
});
