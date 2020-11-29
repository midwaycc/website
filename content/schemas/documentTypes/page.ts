import { Rule } from '@sanity/validation'

export const page = {
  name: 'page',
  title: 'Page',
  type: 'document',
  fields: [
    { name: 'name', title: 'Name', type: 'string' },
    {
      name: 'url',
      title: 'URL',
      type: 'slug',
      description: 'Starts with "/"',
      validation: (Rule: Rule) => [
        Rule.required(),
        Rule.custom(url =>
          /\/.+/.test(url.current)
            ? true
            : 'Must start with "/" and have at least one letter'
        )
      ]
    },
    { name: 'content', title: 'Content', type: 'richContent' }
  ]
}
