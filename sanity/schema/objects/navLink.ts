import { defineType } from 'sanity';

export const navLink = defineType({
  name: 'navLink',
  title: 'Link',
  type: 'object',
  fields: [
    {
      name: 'label',
      title: 'Label',
      type: 'string',
      validation: (rule) => rule.required(),
    },
    {
      name: 'href',
      title: 'URL',
      type: 'string',
      validation: (rule) => rule.required(),
    },
  ],
});
