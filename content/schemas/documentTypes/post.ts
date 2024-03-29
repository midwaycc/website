import { posterPreviewForField } from '../helpers/PosterPreview'
import { Rule } from '@sanity/validation'

export const post = {
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      validation: (Rule: Rule) => Rule.required()
    },
    {
      name: 'featured',
      type: 'boolean',
      title: 'Featured',
      description:
        'The most recent featured posts will appear on the home page.'
    },
    {
      name: 'hidden',
      title: 'Hidden',
      type: 'boolean',
      description:
        'Hidden posts will not show up anywhere on the site (though links will still be generated for them).'
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: {
        source: 'title'
      },
      validation: (Rule: Rule) =>
        Rule.required().custom(slug =>
          slug.current.includes(' ')
            ? 'Since this goes in the URL, it should not have any spaces or special characters. Clicking the "generate" button is usually the right thing to do here.'
            : true
        )
    },
    {
      name: 'date',
      type: 'date',
      title: 'Publish Date',
      options: {
        default: 'today'
      },
      validation: (Rule: Rule) => Rule.required()
    },
    {
      name: 'thumbnail',
      type: 'image',
      title: 'Thumbnail',
      description:
        'Should be square and relatively small (preferably 400px by 400px)'
    },
    {
      name: 'thumbnailPoster',
      hidden: true,
      title: 'Thumbnail Poster',
      description:
        'If present, this takes precedence over the image field above.',
      type: 'reference',
      to: [{ type: 'poster' }]
    },
    {
      name: 'thumbnailPosterPreview',
      hidden: true,
      title: 'Thumbnail Poster Preview',
      type: 'number',
      inputComponent: posterPreviewForField('thumbnailPoster')
    },
    {
      name: 'oneClickLink',
      type: 'url',
      title: 'One-Click Link',
      description: 'If present, clicking the post on the home page will open this URL in a new tab instead of going to the full post page.'
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
            ]
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
