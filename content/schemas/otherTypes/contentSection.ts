import { blockIcon } from '../helpers/blockIcon'
import box from '../../icons/box.svg'

export default {
  type: 'object',
  name: 'contentSection',
  title: 'Content Section',
  icon: blockIcon(box),
  preview: {
    prepare: () => ({ title: 'Section (open to edit)' })
  },
  fields: [
    {
      type: 'simpleRichContent',
      name: 'content',
      title: 'Content',
      description: 'The content will always be centered and not full width.'
    },
    {
      type: 'number',
      name: 'verticalPadding',
      title: 'Vertical Padding',
      description:
        'This controls how much space appears at the top and bottom of the section, as a plain number. Decimals are okay too.'
    },
    {
      type: 'string',
      name: 'textColor',
      title: 'Text Color',
      description: 'Optional, will default to white.'
    },
    {
      type: 'string',
      name: 'backgroundColor',
      title: 'Background Color',
      description: 'Optional, will default to no background color.'
    },
    {
      type: 'image',
      name: 'backgroundImage',
      title: 'Background Image',
      description:
        'If set, this will be a full-width background image behind this section.'
    },
    {
      type: 'number',
      name: 'backgroundOpacity',
      title: 'Background Opacity',
      description:
        'A number between 0 and 100. If both a background image and a background color are set, this controls the opacity of the background color overlay.'
    },
    {
      type: 'number',
      name: 'backgroundBlurStrength',
      title: 'Background Blur Strength',
      description:
        'A number greater than 0. Empty or 0 means no blur, and it can be increased to however high is desired.'
    },
    {
      type: 'boolean',
      name: 'backgroundParallax',
      title: 'Parallax',
      description:
        'If a background image is set, this controls whether it will use a parallax effect.'
    }
  ]
}
