export default {
  name: 'ministryPage',
  title: 'Ministry Page',
  type: 'document',
  // TODO: validate fields as required, etc
  fields: [
    { name: 'name', type: 'string', title: 'Name' },
    {
      name: 'identifier',
      type: 'slug',
      title: 'URL Identifier (slug)',
      description:
        'This will be the last part of the URL (example: to make this page live at /ministries/men, put "men" in this field).'
    },
    {
      name: 'splashImage',
      type: 'image',
      title: 'Splash Image',
      description: 'The size should be exactly 1900px by 300px.'
      // TODO: validate image dimensions
    },
    {
      name: 'content',
      type: 'array',
      of: [{ type: 'block' }],
      title: 'Content'
    }
  ]
}
