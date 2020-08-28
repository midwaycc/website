import { Rule } from '@sanity/validation'
import { ensureOnlyOne } from '../helpers/ensureOnlyOne'

export default {
  name: 'shortcuts',
  title: 'Quick Links',
  type: 'document',
  preview: {
    select: {
      active: 'active'
    },
    prepare: ({ active }: any) => ({
      title: `Quick Links${active ? ' (active)' : ''}`
    })
  },
  validation: (Rule: Rule) => Rule.custom(ensureOnlyOne('active')),
  fields: [
    {
      name: 'active',
      type: 'boolean',
      title: 'Active',
      description: 'Whether or not the shortcuts will show on the home page'
    },
    {
      name: 'content',
      type: 'simpleRichContent',
      title: 'Content',
      description: 'This will be shown in a pop-up when the shortcuts are open'
    }
  ]
}
