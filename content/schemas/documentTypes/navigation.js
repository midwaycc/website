export default {
  name: 'navigation',
  title: 'Navigation',
  type: 'document',
  fields: [
    { name: 'title', type: 'string', title: 'Title' },
    {
      name: 'items',
      title: 'Menu Items',
      type: 'array',
      of: [{ type: 'plainLink' }, { type: 'pageLink' }, { type: 'nestedMenu' }]
    }
  ]
}
