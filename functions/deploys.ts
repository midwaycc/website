import fetch from 'node-fetch'
import { Handler } from '@netlify/functions'

const handler: Handler = async event => {
  const allowedOrigin = process.env.DEVELOPMENT
    ? 'http://localhost:4444'
    : 'https://midwaycc.sanity.studio'

  switch (event.httpMethod) {
    case 'OPTIONS':
      return {
        statusCode: 200,
        headers: { 'Access-Control-Allow-Origin': allowedOrigin },
        body: ''
      }
    case 'GET':
      return {
        statusCode: 200,
        headers: { 'Access-Control-Allow-Origin': allowedOrigin },
        body: JSON.stringify(
          await fetchDeploys(event.queryStringParameters?.siteId)
        )
      }
    default:
      return {
        statusCode: 400,
        headers: { 'Access-Control-Allow-Origin': allowedOrigin },
        body: `Method ${event.httpMethod} not allowed`
      }
  }
}

export { handler }

async function fetchDeploys(siteId: string | undefined) {
  if (!siteId) {
    return undefined
  }

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
