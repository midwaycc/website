require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`
})

const podcastFeed = require('./podcast-feed')

const siteMetadata = require('./siteMetadata')

module.exports = {
  siteMetadata,
  plugins: [
    'gatsby-plugin-image',
    'gatsby-plugin-typescript',
    'gatsby-plugin-preact',
    'gatsby-plugin-styled-components',
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
        dataset: process.env.USE_STAGING === 'true' ? 'staging' : 'production',
        ...(process.env.NODE_ENV === 'production'
          ? {}
          : {
              watchMode: true,
              overlayDrafts: true,
              token: process.env.SANITY_TOKEN
            })
      }
    },
    'gatsby-plugin-netlify',
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
