export default function resolveProductionUrl(document) {
  return `https://midway-preview.herokuapp.com${path(document)}`
}

function path(document) {
  switch (document._type) {
    case 'page':
    case 'ministryPage':
      return document.url.current
    case 'heroSection':
    case 'navigation':
      return '/'
    case 'post':
      return `/posts/${document.slug.current}`
  }
}
