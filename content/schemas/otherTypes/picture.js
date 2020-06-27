import { alignment } from '../helpers/alignment'

export default {
  type: 'object',
  name: 'picture',
  fields: [
    { type: 'image', name: 'image', title: 'Image' },
    {
      type: 'string',
      name: 'size',
      title: 'Size',
      options: {
        list: [
          { title: 'Full', value: 'full' },
          { title: 'Large', value: 'large' },
          { title: 'Medium', value: 'medium' },
          { title: 'Small', value: 'small' },
          { title: 'Tiny', value: 'tiny' },
          { title: 'Mini', value: 'mini' }
        ]
      }
    },
    {
      type: 'string',
      name: 'align',
      title: 'Alignment',
      options: {
        list: alignment
      }
    },
    {
      type: 'string',
      name: 'caption',
      title: 'Caption (optional)'
    }
  ],
  preview: {
    select: {
      name: 'image.asset.originalFilename',
      size: 'size',
      align: 'align',
      media: 'image'
    },
    prepare: ({ name, size, align, media }) => {
      const sizePart = (size || 'full') + ' width'
      const alignPart = (align || 'center') + ' aligned'
      return { title: `${name} (${sizePart}, ${alignPart})`, media }
    }
  }
}
