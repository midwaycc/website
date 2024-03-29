import { Rule } from '@sanity/validation'

export const pageSection = {
  name: 'pageSection',
  title: 'Page Section',
  type: 'object',
  fields: [
    { name: 'name', title: 'Name', type: 'string' },
    { name: 'hidden', title: 'Hidden', type: 'boolean' },
    {
      name: 'urlSuffix',
      title: 'URL Suffix',
      type: 'slug',
      description: `Appended to the end of the page URL. For example, if you enter "preschool" in this field for a section in a page with the URL "/ministries/children", this section would live at "/ministries/children/preschool".`,
      validation: (Rule: Rule) => [
        Rule.required(),
        Rule.custom(url =>
          url.current.indexOf('/') === 0
            ? 'Must not start with a /'
            : /[a-z]+/.test(url.current)
            ? true
            : 'Must consist only of lowercase letters'
        )
      ]
    },
    {
      name: 'content',
      title: 'Content',
      type: 'richContent'
    }
  ],
  preview: {
    select: { name: 'name', urlSuffix: 'urlSuffix' },
    prepare(selection: any) {
      return {
        title: `${selection.name} (.../${selection.urlSuffix.current})`
      }
    }
  }
}
