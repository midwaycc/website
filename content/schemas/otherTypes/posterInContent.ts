import { alignment } from '../helpers/alignment'
import { size } from '../helpers/size'
import { blockIcon } from '../helpers/blockIcon'
import { poster } from '../documentTypes/poster'
import image from '../../icons/image.svg'

export const posterInContent = {
  type: 'object',
  name: 'posterInContent',
  title: 'Poster',
  fields: [
    {
      name: 'poster',
      title: 'Poster',
      type: 'reference',
      to: [{ type: 'poster' }]
    },
    {
      type: 'string',
      name: 'size',
      title: 'Size',
      options: {
        list: size
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
    select: Object.fromEntries(
      Object.entries(poster.preview.select).map(([k, v]) => [k, 'poster.' + v])
    ),
    prepare: (posterDoc: any) => {
      return poster.preview.prepare(posterDoc)
    }
  }
}
