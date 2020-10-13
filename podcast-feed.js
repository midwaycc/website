const format = require('date-fns/format')

module.exports = {
  resolve: 'gatsby-plugin-feed',
  options: {
    query: `
      {
        site {
          id
        }
      }
    `,
    setup: options => ({
      ...options,
      custom_namespaces: {
        itunes: 'http://www.itunes.com/dtds/podcast-1.0.dtd'
      },
      custom_elements: [
        { language: 'en-us' },
        {
          'itunes:image': {
            _attr: { href: 'https://midwaycc.org/logos/square-logo-large.png' }
          }
        },
        { 'itunes:author': 'Midway Community Church' },
        {
          'itunes:owner': [
            { 'itunes:name': 'Kevin Smith' },
            { 'itunes:email': 'midwaycc@kevinsmith.xyz' }
          ]
        },
        {
          'itunes:category': [
            {
              _attr: {
                text: 'Religion & Spirituality'
              }
            },
            {
              'itunes:category': {
                _attr: {
                  text: 'Christianity'
                }
              }
            }
          ]
        },
        { 'itunes:subtitle': 'Helping people follow Jesus.' },
        {
          'itunes:summary':
            'The weekly sermons preached by Pastor Dean Ropp of Midway Community Church in Alpharetta, GA'
        },
        { 'itunes:explicit': 'clean' }
      ]
    }),
    feeds: [
      {
        output: '/rss.xml',
        title: 'Midway Community Church Sermons',
        description:
          'The weekly sermons preached by Pastor Dean Ropp of Midway Community Church in Alpharetta, GA',
        site_url: 'https://midwaycc.org',
        feed_url: 'https://midwaycc.org/rss.xml',
        query: `
          {
            allSanitySermonUpload(sort: {order: DESC, fields: date}) {
              nodes {
                audioFile {
                  asset {
                    url
                    size
                    mimeType
                  }
                }
                date
                extraInfo
                id
              }
            }
          }
        `,
        serialize: ({ query }) => {
          return query.allSanitySermonUpload.nodes
            .map(node => {
              if (!node.date || !node.audioFile || !node.audioFile.asset) {
                return null
              }

              const date = new Date(node.date)
              const pubDate = format(date, 'ccc, d LLL yyyy') + ' 18:00:00 GMT'
              const title = [format(date, 'MMMM do, yyyy'), node.extraInfo]
                .filter(Boolean)
                .join(' - ')
              const { url, size, mimeType } = node.audioFile.asset

              if (!url || !size || !mimeType) {
                return null
              }

              return {
                guid: node.id,
                title,
                url: 'https://midwaycc.org/sermons',
                enclosure: { url, size, type: mimeType },
                custom_elements: [{ pubDate }]
              }
            })
            .filter(Boolean)
        }
      }
    ]
  }
}
