require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`
})

const podcastFeed = require('./podcast-feed')

const siteMetadata = require('./siteMetadata')

const isProd = process.env.NODE_ENV === 'production'
const previewEnabled =
  (process.env.GATSBY_IS_PREVIEW || 'false').toLowerCase() === 'true'

module.exports = {
  siteMetadata,
  plugins: [
    'gatsby-plugin-image',
    {
      resolve: 'gatsby-plugin-styled-components',
      options: {
        cssProp: true
      }
    },
    {
      resolve: 'gatsby-plugin-module-resolver',
      options: {
        root: './src',
        aliases: {
          '~': '.'
        }
      }
    },
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-layout',
      options: {
        component: require.resolve('./src/layout/Layout.tsx')
      }
    },
    {
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: 'iq9kxmf9',
        token: process.env.SANITY_TOKEN,
        dataset: process.env.USE_STAGING === 'true' ? 'staging' : 'production',
        watchMode: !isProd,
        overlayDrafts: !isProd || previewEnabled
      }
    },
    'gatsby-plugin-netlify',
    'gatsby-plugin-gatsby-cloud',
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-158652076-1',
        head: true
      }
    },
    {
      resolve: `gatsby-plugin-facebook-pixel`,
      options: {
        pixelId: '2307295726222106'
      }
    },
    podcastFeed
  ]
}
