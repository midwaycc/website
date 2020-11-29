export const nestedMenu = {
  name: 'nestedMenu',
  title: 'Nested Menu',
  type: 'object',
  fields: [
    {
      name: 'text',
      title: 'Text',
      type: 'string',
      description: 'The title of the menu'
    },
    {
      name: 'items',
      title: 'Sub Items',
      type: 'array',
      of: [{ type: 'plainLink' }, { type: 'pageLink' }]
    }
  ],
  preview: {
    select: { text: 'text', items: 'items' },
    prepare(selection: any) {
      const n = selection.items.length
      const items = n === 1 ? 'item' : 'items'
      return {
        title: `${selection.text} (${n} ${items}) ↓`
      }
    }
  }
}
