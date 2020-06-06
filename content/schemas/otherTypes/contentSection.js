export default {
  name: 'contentSection',
  title: 'Content Section',
  type: 'object',
  fields: [
    {
      name: 'content',
      title: 'Content',
      type: 'richContent'
    },
    {
      name: 'color',
      title: 'Background Color',
      type: 'string'
    },
    {
      name: 'backgroundImage',
      title: 'Background Image',
      type: 'image'
    },
    {
      name: 'parallax',
      title: 'Parallax',
      type: 'boolean'
    }
  ]
}