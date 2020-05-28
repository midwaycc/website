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
      title: 'destination',
      description: 'The link/href the button should go to'
    },
    {
      type: 'boolean',
      name: 'dark',
      title: 'Dark?',
      description:
        'Whether the button has a dark appearance (rather than light)'
    },
    {
      type: 'boolean',
      name: 'thick',
      title: 'Thick?',
      description: 'Whether the button has a thick appearance'
    }
  ],
  preview: {
    select: {
      text: 'text',
      href: 'href'
    },
    prepare({ text, href }) {
      return {
        title: `Button Link "${text}" -> ${href}`
      }
    }
  }
}
