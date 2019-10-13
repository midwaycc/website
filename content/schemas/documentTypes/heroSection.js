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
      name: 'video',
      type: 'file',
      title: 'Splash Video',
      description: 'Must be under 100MB',
      validation: Rule => Rule.required()
    }
  ]
}
