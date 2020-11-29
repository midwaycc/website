import { Rule } from '@sanity/validation'

export const posterLine = {
  name: 'posterLine',
  title: 'Line',
  type: 'object',
  fields: [
    {
      name: 'text',
      title: 'Text',
      type: 'string'
    },
    {
      name: 'fontSize',
      title: 'Font Size',
      type: 'number',
      description: 'Relative font size in px',
      validation: (Rule: Rule) => Rule.min(0)
    },
    {
      name: 'position',
      title: 'Vertical Position',
      type: 'number',
      description: '0-100, where 0 is the very top and 100 is the very bottom',
      validation: (Rule: Rule) => Rule.min(0).max(100)
    }
  ]
}
