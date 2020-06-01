export default {
  type: 'object',
  name: 'picture',
  fields: [
    { type: 'image', name: 'image', title: 'Image' },
    {
      type: 'string',
      name: 'size',
      title: 'Size',
      validation: Rule => Rule.required(),
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
      validation: Rule => Rule.required(),
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
