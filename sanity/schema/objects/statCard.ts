import { defineType } from 'sanity';

export const statCard = defineType({
  name: 'statCard',
  title: 'Stat',
  type: 'object',
  fields: [
    {
      name: 'label',
      title: 'Label',
      type: 'string',
      validation: (rule) => rule.required(),
    },
    {
      name: 'value',
      title: 'Value',
      type: 'string',
      validation: (rule) => rule.required(),
    },
    {
      name: 'unit',
      title: 'Unit',
      type: 'string',
      description: 'Optional unit suffix (e.g. "hrs/day")',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'string',
      validation: (rule) => rule.required(),
    },
  ],
  preview: {
    select: { title: 'label', subtitle: 'value' },
  },
});
