const gatsbyConfig = require('./gatsby-config')

const moduleResolverConfig = gatsbyConfig.plugins.find(
  plugin =>
    Boolean(plugin) &&
    typeof plugin === 'object' &&
    plugin.resolve === 'gatsby-plugin-module-resolver'
).options

const babelOptions = {
  presets: ['@babel/typescript', 'babel-preset-gatsby'],
  plugins: [
    [
      require.resolve('babel-plugin-module-resolver'),
      {
        root: '.',
        alias: {
          '~': './src'
        }
      }
    ]
  ]
}

module.exports = require('babel-jest').default.createTransformer(babelOptions)
