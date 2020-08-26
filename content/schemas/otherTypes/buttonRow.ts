import { blockIcon } from '../helpers/blockIcon'
import buttons from '../../icons/buttons.svg'

export default {
  name: 'buttonRow',
  title: 'Button Row',
  type: 'object',
  preview: {
    prepare: () => ({ title: 'Buttons (open to edit)' })
  },
  icon: blockIcon(buttons),
  fields: [
    {
      name: 'buttons',
      title: 'Buttons',
      type: 'array',
      of: [{ type: 'buttonLink' }]
    }
  ]
}
