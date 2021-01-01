export const shortcuts = {
  name: 'shortcuts',
  title: 'Quick Links',
  type: 'document',
  preview: {
    prepare: () => ({
      title: 'Quick Links'
    })
  },
  fields: [
    {
      name: 'content',
      type: 'simpleRichContent',
      title: 'Content',
      description: 'This will be shown in a pop-up when the shortcuts are open'
    }
  ]
}
