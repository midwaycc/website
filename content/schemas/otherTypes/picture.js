export default {
  type: 'object',
  name: 'picture',
  fields: [
    { type: 'image', name: 'image', title: 'Image' },
    {
      type: 'number',
      name: 'size',
      title: 'Width (optional)',
      description:
        'The percentage of a desktop-sized screen that the image will fill. It will go full-width at smaller screen sizes.',
      validation: Rule => Rule.min(1).max(100)
    },
    {
      type: 'string',
      name: 'align',
      title: 'Alignment (optional)',
      description:
        'Images without width will be full-width by default. If a width is specified, this controls how the image will be aligned.',
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
