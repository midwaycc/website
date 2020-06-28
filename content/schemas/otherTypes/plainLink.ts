export default {
  name: 'plainLink',
  title: 'Plain link',
  type: 'object',
  fields: [
    {
      name: 'text',
      title: 'Text',
      type: 'string',
      description: 'The text for the link'
    },
    {
      name: 'link',
      title: 'Link',
      type: 'string',
      description:
        'Can be relative (/whatever) or absolute (https://some.external.site.com)'
    },
    {
      name: 'sameWindow',
      title: 'Open in same window?',
      type: 'boolean',
      description:
        'If set, this link will replace the current page instead of opening in a new tab.'
    }
  ],
  preview: {
    select: { link: 'link', text: 'text', sameWindow: 'sameWindow' },
    prepare(selection: any) {
      return {
        title: `${selection.text} → ${
          selection.sameWindow ? '(same window) ' : ''
        }${selection.link}`
      }
    }
  }
}
