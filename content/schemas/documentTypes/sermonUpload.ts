import { Rule } from '@sanity/validation'
import format from 'date-fns/format'

export default {
  name: 'sermonUpload',
  title: 'Sermon Upload',
  type: 'document',
  orderings: [
    {
      title: 'Chronological',
      name: 'chronological',
      customDefault: true,
      by: [{ field: 'date', direction: 'desc' }]
    }
  ],
  fields: [
    {
      name: 'date',
      type: 'date',
      title: 'Service Date',
      validation: (Rule: Rule) => Rule.required()
    },
    {
      name: 'extraInfo',
      type: 'string',
      title: 'Extra Info',
      description:
        'Scripture reference, speaker, or anything else to show up in the title. Do not include a manual date here.'
    },
    {
      name: 'audioFile',
      type: 'file',
      title: 'Audio File',
      description: '.mp3 only'
    }
  ],
  preview: {
    select: {
      date: 'date',
      extraInfo: 'extraInfo'
    },
    prepare({ date, extraInfo }: any) {
      if (!date) {
        return { title: [`Message`, extraInfo].filter(Boolean).join(' - ') }
      }
      const [y, m, d] = date.split('-').map(Number)
      const niceDate = format(
        new Date(
          // 720 = 12 hours in minutes
          Date.UTC(y, m - 1, d) + 720 * 60 * 1000
        ),
        'MMMM do, yyyy'
      )
      return {
        title: [`Message: ${niceDate}`, extraInfo].filter(Boolean).join(' - ')
      }
    }
  }
}
