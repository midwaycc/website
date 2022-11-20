export const navigation = {
  name: 'navigation',
  title: 'Navigation',
  type: 'document',
  preview: {
    prepare: () => ({ title: 'Navigation' })
  },
  fields: [
    {
      name: 'items',
      title: 'Menu Items',
      type: 'array',
      of: [{ type: 'plainLink' }, { type: 'pageLink' }, { type: 'nestedMenu' }]
    },
    {
      name: 'heartbeat',
      title: 'Heartbeat',
      description:
        'This is updated automatically to monitor the preview site, do not manually change.',
      type: 'datetime'
    }
  ]
}
