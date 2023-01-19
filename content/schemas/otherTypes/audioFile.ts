import { blockIcon } from '../helpers/blockIcon'
import headphones from '../../icons/headphones.svg'

export const audioFile = {
  type: 'object',
  name: 'audioFile',
  title: 'Audio File',
  icon: blockIcon(headphones),
  fields: [
    { type: 'string', name: 'title', title: 'Title' },
    {
      type: 'file',
      name: 'audioFile',
      title: 'Audio File',
      accept: 'audio/*'
    }
  ]
}
