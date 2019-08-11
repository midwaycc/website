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
      resolve: 'gatsby-plugin-netlify-cms',
      options: {
        manualInit: true,
        modulePath: require.resolve('./cms/index.tsx'),
        htmlTitle: 'Midway Admin'
      }
    },
    'gatsby-transformer-yaml',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: './cms/nav'
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
    'gatsby-plugin-netlify'
  ]
}
