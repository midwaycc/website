require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`
})

const siteMetadata = require('./siteMetadata')

module.exports = {
  siteMetadata,
  plugins: [
    'gatsby-plugin-typescript',
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
        dataset: 'production',
        ...(process.env.NODE_ENV === 'production'
          ? {}
          : {
              watchMode: true,
              overlayDrafts: true,
              token: process.env.SANITY_TOKEN
            })
      }
    },
    {
      resolve: 'gatsby-plugin-netlify',
      options: {
        headers: {
          '/static/d/*': ['Cache-Control: public, max-age=0, must-revalidate']
        }
      }
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-158652076-1',
        head: true
      }
    }
  ]
}
