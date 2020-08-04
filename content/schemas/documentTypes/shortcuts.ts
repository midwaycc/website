export default {
  name: 'shortcuts',
  title: 'Shortcuts',
  type: 'document',
  preview: {
    prepare: () => ({ title: 'Shortcuts' })
  },
  fields: [
    {
      name: 'active',
      type: 'boolean',
      title: 'Active',
      description: 'Whether or not the shortcuts will show on the home page'
    },
    {
      name: 'content',
      type: 'simpleRichContent',
      title: 'Content',
      description: 'This will be shown in a pop-up when the shortcuts are open'
    }
  ]
}
