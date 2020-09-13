import { Rule } from '@sanity/validation'

export default {
  name: 'poster',
  title: 'Poster',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      description:
        "This is just for reference, it won't appear anywhere on the site."
    },
    {
      name: 'lines',
      title: 'Text Lines',
      type: 'array',
      of: [{ type: 'posterLine' }]
    },
    {
      name: 'background',
      title: 'Background Image',
      type: 'image'
    },
    {
      name: 'overlayColor',
      title: 'Overlay Color',
      type: 'string',
      description: 'Leave blank for no overlay.'
    },
    {
      name: 'overlayOpacity',
      title: 'Overlay Opacity',
      type: 'number',
      description: '0-100',
      validation: (Rule: Rule) => Rule.min(0).max(100)
    }
  ]
}
