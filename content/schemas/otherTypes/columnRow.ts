import { blockIcon } from '../helpers/blockIcon'
import columns from '../../icons/columns.svg'

export const columnRow = {
  name: 'columnRow',
  title: 'Column Row',
  type: 'object',
  preview: {
    prepare: () => ({ title: 'Columns (open to edit)' })
  },
  icon: blockIcon(columns),
  fields: [
    {
      name: 'columns',
      title: 'Columns',
      type: 'array',
      of: [{ type: 'contentColumn' }]
    }
  ]
}
