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
  const dataset = window.location.pathname.split('/')[1] as
    | 'production'
    | 'staging'

  if (dataset === 'production') {
    return `https://preview-midwaycc.gtsb.io${path(document)}`
  }

  return `https://preview-midwaycc.gtsb.io${path(document)}`
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
