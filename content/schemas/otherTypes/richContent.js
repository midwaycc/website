export default {
  name: 'richContent',
  title: 'Content',
  type: 'array',
  of: [
    { type: 'block' },
    { type: 'verticalSpace' },
    { type: 'buttonLink' },
    { type: 'centerImage' },
    { type: 'leftImage' },
    { type: 'rightImage' },
    { type: 'centerImageWithWidth' },
    { type: 'leftImageWithWidth' },
    { type: 'rightImageWithWidth' },
    { type: 'videoEmbed' }
  ]
}
