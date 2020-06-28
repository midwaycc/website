import { alignment } from '../helpers/alignment'

export default {
  type: 'object',
  name: 'buttonLink',
  title: 'Button Link',
  fields: [
    {
      type: 'string',
      name: 'text',
      title: 'Text',
      description: 'The text that will appear in the button'
    },
    {
      type: 'string',
      name: 'href',
      title: 'Destination',
      description: 'The link/href the button should go to'
    },
    {
      type: 'string',
      name: 'align',
      title: 'Alignment',
      options: {
        list: alignment
      }
    },
    {
      type: 'boolean',
      name: 'thick',
      title: 'Thick?',
      description: 'Whether the button has a thick appearance'
    },
    {
      type: 'boolean',
      name: 'dark',
      title: 'Dark?',
      description:
        'Whether the button has a dark appearance (rather than light)'
    }
  ],
  preview: {
    select: {
      text: 'text',
      href: 'href'
    },
    prepare({ text, href }: any) {
      return {
        title: `Button Link "${text}" -> ${href}`
      }
    }
  }
}
