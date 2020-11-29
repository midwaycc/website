import format from 'date-fns/format'
import { Rule } from '@sanity/validation'

export const newsletter = {
  name: 'newsletter',
  title: 'Newsletter',
  type: 'document',
  fields: [
    {
      name: 'date',
      type: 'date',
      title: 'Date',
      validation: (Rule: Rule) => Rule.required()
    },
    {
      name: 'link',
      type: 'string',
      title: 'Link',
      description: 'Direct link from MailChimp'
    }
  ],
  orderings: [
    {
      title: 'Chronological',
      name: 'chronological',
      by: [{ field: 'date', direction: 'desc' }]
    }
  ],
  preview: {
    select: {
      date: 'date'
    },
    prepare({ date }: any) {
      if (!date) {
        return { title: '(no date)' }
      }
      const [y, m, d] = date.split('-').map(Number)
      const niceDate = format(
        new Date(
          Date.UTC(y, m - 1, d) + new Date().getTimezoneOffset() * 60 * 1000
        ),
        'MMMM do, yyyy'
      )
      return {
        title: niceDate
      }
    }
  }
}
