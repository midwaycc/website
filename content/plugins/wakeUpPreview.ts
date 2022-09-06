export function hitPreviewWebhook() {
  return fetch(
    `https://webhook.gatsbyjs.com/hooks/data_source/08a62576-94db-4915-b627-37400eef818a`,
    { method: 'POST' }
  )
}
