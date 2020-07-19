export default {
  name: 'contentColumn',
  title: 'Content Column',
  type: 'object',
  preview: {
    prepare: () => ({ title: 'Column (open to edit)' })
  },
  fields: [{ name: 'content', type: 'simpleRichContent' }]
}
