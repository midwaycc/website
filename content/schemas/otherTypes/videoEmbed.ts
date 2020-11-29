import { blockIcon } from '../helpers/blockIcon'
import video from '../../icons/video.svg'

export const videoEmbed = {
  type: 'object',
  name: 'videoEmbed',
  title: 'Vimeo Embed',
  icon: blockIcon(video),
  fields: [
    {
      type: 'string',
      name: 'videoId',
      title: 'Video ID',
      description: 'This is a vimeo video id'
    }
  ]
}
