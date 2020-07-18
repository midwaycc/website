import { alignment } from '../helpers/alignment'
import { blockIcon } from '../helpers/blockIcon'
import image from '../../icons/image.svg'

export default {
  type: 'object',
  name: 'picture',
  title: 'Picture',
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
  icon: blockIcon(image),
  preview: {
    select: {
      name: 'image.asset.originalFilename',
      size: 'size',
      align: 'align',
      media: 'image'
    },
    prepare: ({ name, size, align, media }: any) => {
      const sizePart = (size || 'full') + ' width'
      const alignPart = (align || 'center') + ' aligned'
      return { title: `${name} (${sizePart}, ${alignPart})`, media }
    }
  }
}
