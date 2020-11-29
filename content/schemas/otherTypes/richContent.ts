export const richContent = {
  name: 'richContent',
  title: 'Content',
  type: 'array',
  of: [
    { type: 'block' },
    { type: 'verticalSpace' },
    { type: 'buttonLink' },
    { type: 'buttonRow' },
    { type: 'picture' },
    { type: 'posterInContent' },
    { type: 'videoEmbed' },
    { type: 'contentSection' },
    { type: 'columnRow' },
    { type: 'scriptureReference' }
  ]
}

const disallowedTypes = ['contentSection', 'columnRow']

export const simpleRichContent = {
  ...richContent,
  name: 'simpleRichContent',
  of: richContent.of.filter(element => !disallowedTypes.includes(element.type))
}
