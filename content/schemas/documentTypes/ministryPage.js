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
      name: 'subLogoWidth',
      type: 'number',
      title: 'Sub-logo width',
      description:
        'In pixels. Used to display the sublogos at a consistent size. Must be less than 600.',
      validation: Rule => Rule.required().max(600)
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
