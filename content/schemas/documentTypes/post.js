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
      name: 'featured',
      type: 'boolean',
      title: 'Featured',
      description:
        'The most recent featured posts will appear on the home page.'
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
            decorators: [
              { title: 'Bold', value: 'strong' },
              { title: 'Italic', value: 'em' },
              { title: 'Underline', value: 'underline' }
            ],
            annotations: []
          }
        }
      ],
      title: 'Short Summary',
      description:
        'This appears where the thumbnail is displayed, before opening up the post. Can include basic formatting and links.'
    },
    {
      name: 'body',
      type: 'richContent',
      title: 'Body',
      description:
        'Can include images! Leave blank to just use the summary as the body.'
    },
    {
      name: 'ministries',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'ministryPage' }]
        }
      ],
      title: 'Category Tags',
      description: 'What tags should this post have?'
    }
  ]
}
