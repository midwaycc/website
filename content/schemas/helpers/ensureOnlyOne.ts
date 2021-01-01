const DATASET = window.location.pathname.split('/')[1]
const QUERY_BASE = `https://iq9kxmf9.api.sanity.io/v1/data/query/${DATASET}`

// This was used before with the quick links and weekly schedule, where only one
// could be set to "active". This feature was removed, but I'm leaving this here
// in case something similar is needed in the future.
export function ensureOnlyOne(uniqueBool: string) {
  return async (doc: any) => {
    const query = `*[_type == '${doc._type}' && ${uniqueBool}]{_id}`
    const url = `${QUERY_BASE}?query=${encodeURIComponent(query)}`
    try {
      const response = await fetch(url, { mode: 'cors' })
      const { result }: { result: { _id: string }[] } = await response.json()
      const ids = result.map(r => r._id.replace('drafts.', ''))
      const conflicts = ids.filter(id => id !== doc._id.replace('drafts.', ''))
      return doc[uniqueBool] && conflicts.length
        ? `Only one "${uniqueBool}" is allowed for this collection!`
        : true
    } catch (e) {
      return true
    }
  }
}
