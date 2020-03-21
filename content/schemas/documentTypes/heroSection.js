export default {
  name: 'heroSection',
  title: 'Hero Section',
  type: 'document',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      validation: Rule => Rule.required()
    },
    {
      name: 'subtitle',
      type: 'string',
      title: 'Subtitle',
      validation: Rule => Rule.required()
    },
    {
      name: 'alertActive',
      type: 'boolean',
      title: 'Splash Active',
      description: 'Whether or not the splash message should display'
    },
    {
      name: 'alertMessage',
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
      title: 'Splash Message',
      description:
        'This will be displayed just above the New Here button, for special alerts/messages.'
    },
    {
      name: 'video',
      type: 'file',
      title: 'Splash Video',
      description: 'Must be under 100MB',
      validation: Rule => Rule.required()
    },
    {
      name: 'poster',
      type: 'image',
      title: 'Still Image',
      description: 'Shown while the video is loading'
    }
  ]
}
