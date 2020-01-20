import format from 'date-fns/format'

export default {
  name: 'sermonUpload',
  title: 'Sermon Upload',
  type: 'document',
  fields: [
    {
      name: 'date',
      type: 'date',
      title: 'Service Date',
      validation: Rule => Rule.required()
    },
    {
      name: 'extraInfo',
      type: 'string',
      title: 'Extra Info',
      description:
        'Scripture reference, speaker, or anything else to show up in the title'
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
    prepare({ date, extraInfo }) {
      if (!date) {
        return { title: [`Message`, extraInfo].filter(Boolean).join(' - ') }
      }
      const [y, m, d] = date.split('-').map(Number)
      const niceDate = format(
        new Date(
          Date.UTC(y, m - 1, d) + new Date().getTimezoneOffset() * 60 * 1000
        ),
        'MMMM do, yyyy'
      )
      return {
        title: [`Message: ${niceDate}`, extraInfo].filter(Boolean).join(' - ')
      }
    }
  }
}
