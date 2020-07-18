import { blockIcon } from '../helpers/blockIcon'
import arrowsVertical from '../../icons/arrows-vertical.svg'

export default {
  type: 'object',
  name: 'verticalSpace',
  title: 'Vertical Space',
  fields: [
    {
      type: 'number',
      name: 'height',
      description:
        'Vertical space in `em` units (one `em` is the height of one line of text)'
    }
  ],
  icon: blockIcon(arrowsVertical),
  preview: {
    select: {
      height: 'height'
    },
    prepare(selection: any) {
      return {
        title: `\u2195 ${selection.height}em of vertical space`
      }
    }
  }
}
