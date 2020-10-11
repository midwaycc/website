const DATASET = window.location.pathname.split('/')[1]
const QUERY_BASE = `https://iq9kxmf9.api.sanity.io/v1/data/query/${DATASET}`

export function ensureOnlyOne(uniqueBool: string) {
  return async (doc: any) => {
    const query = `*[_type == '${doc._type}' && ${uniqueBool}]{_id}`
    const url = `${QUERY_BASE}?query=${encodeURIComponent(query)}`
    try {
      const response = await fetch(url, { mode: 'cors' })
      const { result }: { result: { _id: string }[] } = await response.json()
      const ids = result.map(r => r._id.replace('drafts.', ''))
      const conflicts = ids.filter(id => id !== doc._id.replace('drafts.', ''))
      console.log({ doc, result, conflicts })
      return doc[uniqueBool] && conflicts.length
        ? `Only one "${uniqueBool}" is allowed for this collection!`
        : true
    } catch (e) {
      return true
    }
  }
}
