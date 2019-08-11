export default {
  name: 'page',
  title: 'Page',
  type: 'document',
  fields: [
    { name: 'name', title: 'Name', type: 'string' },
    {
      name: 'url',
      title: 'URL',
      type: 'slug',
      description: 'Starts with "/"',
      validation: Rule => [
        Rule.required(),
        Rule.custom(url =>
          /\/.+/.test(url.current)
            ? true
            : 'Must start with "/" and have at least one letter'
        )
      ]
    }
  ]
}
