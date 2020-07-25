export default {
  name: 'generalAlert',
  title: 'General Alert',
  type: 'document',
  preview: {
    prepare: () => ({ title: 'General Alert' })
  },
  fields: [
    {
      name: 'active',
      type: 'boolean',
      title: 'Active',
      description:
        'Whether or not this alert will show when loading the home page'
    },
    {
      name: 'content',
      type: 'simpleRichContent',
      title: 'Content',
      description:
        'This will be shown as a full-screen popup when the home page is first loaded.'
    }
  ]
}
