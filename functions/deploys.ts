import fetch from 'node-fetch'

export async function handler(event: any) {
  const allowedOrigin = process.env.DEVELOPMENT
    ? 'http://localhost:4444'
    : 'https://midwaycc.sanity.studio'

  switch (event.httpMethod) {
    case 'OPTIONS':
      return {
        statusCode: 200,
        headers: {
          'Access-Control-Allow-Origin': allowedOrigin
        },
        body: ''
      }
    case 'GET':
      return {
        statusCode: 200,
        headers: {
          'Access-Control-Allow-Origin': allowedOrigin
        },
        body: JSON.stringify(
          await fetchDeploys(event.queryStringParameters.siteId)
        )
      }
  }
}

async function fetchDeploys(siteId: string) {
  const response = await fetch(
    `https://api.netlify.com/api/v1/sites/${siteId}/deploys?page=1&per_page=15`,
    {
      headers: { Authorization: `Bearer ${process.env.NETLIFY_TOKEN}` }
    }
  )

  if (!response.ok) {
    console.error(response)
    throw new Error(`${name} request failed: ${response.statusText}`)
  }

  return response.json()
}
