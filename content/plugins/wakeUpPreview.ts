if (typeof fetch === 'function') {
  fetch('https://midway-preview.herokuapp.com/___graphql', {
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
