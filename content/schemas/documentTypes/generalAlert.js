export default {
  name: 'generalAlert',
  title: 'General Alert',
  type: 'document',
  preview: {
    select: {},
    prepare() {
      return {
        title: 'Message'
      }
    }
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
      name: 'message',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [{ title: 'Normal', value: 'normal' }],
          lists: [],
          marks: {
            decorators: [
              { title: 'Bold', value: 'strong' },
              { title: 'Italic', value: 'em' },
              { title: 'Underline', value: 'underline' }
            ]
          }
        }
      ],
      title: 'Message',
      description:
        'This will be shown as a full-screen popup when the home page is first loaded.'
    }
  ]
}
