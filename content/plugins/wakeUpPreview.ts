if (typeof fetch === 'function') {
  fetch('https://preview-midwaycc.gtsb.io/___graphql', {
    headers: {
      'content-type': 'application/json',
      accept: 'application/json'
    },
    body: '{"query":"query{allSitePage{totalCount}}"}',
    method: 'POST',
    mode: 'cors'
  })
    .then(response => response.json())
    .then(json =>
      console.log(
        'Preview responded! There are',
        json.data.allSitePage.totalCount,
        'pages.'
      )
    )
}
