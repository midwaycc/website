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
    case 'generalAlert':
    case 'scheduleAlert':
    case 'weeklySchedule':
      return '/'
    case 'post':
      return `/posts/${document.slug.current}`
    case 'newsletter':
      return '/newsletter'
    case 'sermonUpload':
      return '/sermons'
    default:
      alert('Kevin needs to set up a preview link for this one!')
      return '/'
  }
}
