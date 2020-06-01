export default {
  type: 'object',
  name: 'picture',
  fields: [
    { type: 'image', name: 'image', title: 'Image' },
    {
      type: 'string',
      name: 'size',
      title: 'Size',
      description: 'If not set, the default is "Full"',
      options: {
        list: [
          { title: 'Full', value: 'full' },
          { title: 'Small', value: 'small' },
          { title: 'Medium', value: 'medium' },
          { title: 'Large', value: 'large' }
        ]
      }
    },
    {
      type: 'string',
      name: 'align',
      title: 'Alignment',
      description: 'If not set, the default is "Center"',
      options: {
        list: [
          { title: 'Center', value: 'center' },
          { title: 'Left', value: 'left' },
          { title: 'Right', value: 'right' }
        ]
      }
    }
  ]
}
