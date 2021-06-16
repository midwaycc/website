import fetch from 'node-fetch'

const LATEST_DOCUMENT_QUERY =
  '*[!(_id in path("drafts.**") || _id in path("_.**"))]|order(_updatedAt desc)[0]._updatedAt'

export async function handler() {
  try {
    const [lastContentUpdate, lastDeploy] = await Promise.all([
      minutesSinceLastContentUpdate(),
      minutesSinceLastDeploy()
    ])

    let deployed = false
    let success

    if (lastContentUpdate < lastDeploy && lastContentUpdate > 5) {
      success = await triggerDeploy()
      deployed = true
    }

    const body = { lastContentUpdate, lastDeploy, deployed, success }
    console.log(body)

    return {
      statusCode: 200,
      body: JSON.stringify(body)
    }
  } catch (err) {
    console.error(err)

    return {
      statusCode: 500,
      body: JSON.stringify({ msg: err.message })
    }
  }
}

const checkTimestamp = (
  url: string,
  token: string | undefined,
  name: string | undefined,
  getTimestamp: (data: any) => string
) => async () => {
  const response = await fetch(url, {
    headers: { Authorization: `Bearer ${token}` }
  })

  if (!response.ok) {
    console.error(response)
    throw new Error(`${name} request failed: ${response.statusText}`)
  }

  const data = await response.json()
  const now = new Date()
  const lastUpdate = new Date(getTimestamp(data))
  return (Number(now) - Number(lastUpdate)) / 1000 / 60
}

const minutesSinceLastContentUpdate = checkTimestamp(
  `https://iq9kxmf9.api.sanity.io/v1/data/query/production?query=${LATEST_DOCUMENT_QUERY}`,
  process.env.SANITY_TOKEN,
  'Sanity',
  (data: { result: string }) => data.result
)

const minutesSinceLastDeploy = checkTimestamp(
  `https://api.netlify.com/api/v1/sites/c096d1f2-899d-4c18-ad5b-211790e57ad8/deploys?page=1&per_page=1`,
  process.env.NETLIFY_TOKEN,
  'Netlify',
  (data: Array<{ created_at: string }>) => data[0].created_at
)

const triggerDeploy = async () => {
  const response = await fetch(
    'https://api.netlify.com/build_hooks/5da9b0c2d464018b1d2ca970',
    { method: 'POST' }
  )

  await fetch(
    'https://webhook.gatsbyjs.com/hooks/data_source/publish/08a62576-94db-4915-b627-37400eef818a',
    { method: 'POST' }
  )

  if (!response.ok) {
    console.error(response)
  }

  return response.ok
}
