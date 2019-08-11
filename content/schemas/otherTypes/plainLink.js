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
    }
  ],
  preview: {
    select: { link: 'link', text: 'text' },
    prepare(selection) {
      return {
        title: `${selection.text} → ${selection.link}`
      }
    }
  }
}
