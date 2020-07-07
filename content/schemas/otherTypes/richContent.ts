export default {
  name: 'richContent',
  title: 'Content',
  type: 'array',
  of: [
    { type: 'block' },
    { type: 'verticalSpace' },
    { type: 'buttonLink' },
    { type: 'picture' },
    { type: 'videoEmbed' }
  ]
}
