type Doc = {
  _type: string
  url?: {
    current: string
  }
  slug?: {
    current: string
  }
}

export default function resolveProductionUrl(document: Doc) {
  return `https://midway-preview.herokuapp.com${path(document)}`
}

function path(document: Doc) {
  switch (document._type) {
    case 'page':
    case 'ministryPage':
      return document.url?.current
    case 'heroSection':
    case 'navigation':
    case 'shortcuts':
    case 'generalAlert':
    case 'scheduleAlert':
    case 'weeklySchedule':
    case 'poster':
      return '/'
    case 'post':
      return `/posts/${document.slug?.current}`
    case 'newsletter':
      return '/newsletter'
    case 'sermonUpload':
      return '/sermons'
    default:
      alert('Kevin needs to set up a preview link for this one!')
      return '/'
  }
}
