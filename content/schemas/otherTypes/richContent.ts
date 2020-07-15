const richContent = {
  name: 'richContent',
  title: 'Content',
  type: 'array',
  of: [
    { type: 'block' },
    { type: 'verticalSpace' },
    { type: 'buttonLink' },
    { type: 'picture' },
    { type: 'videoEmbed' },
    { type: 'contentSection' }
  ]
}

export default richContent

export const richContentWithoutContentSections = {
  ...richContent,
  name: 'richContentWithoutContentSections',
  of: richContent.of.filter(element => element.type !== 'contentSection')
}
