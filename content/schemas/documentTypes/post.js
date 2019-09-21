export default {
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      validation: Rule => Rule.required()
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: {
        source: 'title'
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'date',
      type: 'date',
      title: 'Publish Date',
      options: {
        default: 'today'
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'thumbnail',
      type: 'image',
      title: 'Thumbnail',
      description: 'Should be square and relatively small (under 200px)'
    },
    {
      name: 'summary',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [{ title: 'Normal', value: 'normal' }],
          lists: [],
          marks: {
            decorators: [],
            annotations: []
          }
        }
      ],
      title: 'Short Summary',
      description:
        'This appears where the thumbnail is displayed, before opening up the post.'
    },
    {
      name: 'body',
      type: 'array',
      of: [{ type: 'block' }, { type: 'image' }],
      title: 'Body',
      description: 'Can include images!'
    }
  ]
}
