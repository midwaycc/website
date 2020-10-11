import { blockIcon } from '../helpers/blockIcon'
import book from '../../icons/book.svg'
import { Rule } from '@sanity/validation'

export default {
  name: 'scriptureReference',
  title: 'Scripture Reference',
  type: 'object',
  preview: {
    select: { verseReference: 'verseReference' },
    prepare: ({ verseReference }: any) => ({ title: verseReference })
  },
  icon: blockIcon(book),
  fields: [
    {
      name: 'text',
      title: 'Text',
      type: 'text',
      description: 'The scripture text itself',
      validation: (Rule: Rule) => Rule.required()
    },
    {
      name: 'verseReference',
      title: 'Reference',
      type: 'string',
      description: 'The scripture verse reference',
      validation: (Rule: Rule) => Rule.required()
    }
  ]
}
