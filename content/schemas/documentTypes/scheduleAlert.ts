export const scheduleAlert = {
  name: 'scheduleAlert',
  title: 'Schedule Alert',
  type: 'document',
  preview: {
    prepare: () => ({ title: 'Schedule Alert' })
  },
  fields: [
    {
      name: 'active',
      type: 'boolean',
      title: 'Active',
      description:
        'Whether or not this alert will show under the Weekly Schedule'
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
        'This will be displayed just above the weekly schedule, and should be used for weeks where the schedule differs from normal.'
    }
  ]
}
