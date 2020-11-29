export const pageLink = {
  name: 'pageLink',
  title: 'Page link',
  type: 'object',
  fields: [
    {
      name: 'text',
      title: 'Text',
      type: 'string',
      description: 'The text for the link'
    },
    {
      name: 'page',
      title: 'Page',
      type: 'reference',
      to: [{ type: 'page' }, { type: 'ministryPage' }]
    }
  ],
  preview: {
    select: { text: 'text', pageName: 'page.name' },
    prepare(selection: any) {
      return {
        title: `${selection.text} → "${selection.pageName}" page`
      }
    }
  }
}
