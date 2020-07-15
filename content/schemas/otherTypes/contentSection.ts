export default {
  type: 'object',
  name: 'contentSection',
  title: 'Content Section',
  preview: {
    prepare() {
      return { title: 'Click Edit to see content' }
    }
  },
  fields: [
    {
      type: 'boolean',
      name: 'squished',
      title: 'Constrain Width',
      description:
        'If set, this section will be constrained to the width of the rest of the content. It defaults to full width.'
    },
    {
      type: 'string',
      name: 'backgroundColor',
      title: 'Background Color',
      description: 'Optional, will default to no background color.'
    },
    {
      type: 'richContentWithoutContentSections',
      name: 'content',
      title: 'Content',
      description: 'The content will always be centered and not full width.'
    }
  ]
}
