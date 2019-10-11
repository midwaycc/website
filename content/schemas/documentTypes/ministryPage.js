export default {
  name: 'ministryPage',
  title: 'Ministry Page',
  type: 'document',
  fields: [
    { name: 'name', type: 'string', title: 'Name' },
    {
      name: 'url',
      type: 'slug',
      title: 'URL',
      description: 'Should look like "/ministries/whatever"',
      validation: Rule => [
        Rule.required(),
        Rule.custom(url =>
          /\/ministries\/.+/.test(url.current)
            ? true
            : 'Must match format: /ministries/{ministry_name}'
        )
      ]
    },
    {
      name: 'subLogo',
      type: 'image',
      title: 'Sub-logo'
    },
    {
      name: 'content',
      title: 'Content',
      type: 'richContent'
    },
    {
      name: 'sections',
      title: 'Sections',
      type: 'array',
      of: [{ type: 'pageSection' }]
    }
  ]
}
