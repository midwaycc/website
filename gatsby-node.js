exports.onCreatePage = ({ page, actions }) => {
  movePage('/home/', '/', page, actions)
}

function movePage(oldPath, newPath, page, { createPage, deletePage }) {
  if (page.path === oldPath) {
    deletePage(page)
    createPage({ ...page, path: newPath })
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const result = await graphql(`
    {
      allSanityMinistryPage {
        nodes {
          identifier {
            current
          }
          name
          content {
            _key
            _type
            style
            list
          }
          splashImage {
            asset {
              url
              fixed(width: 950) {
                base64
                width
                height
                src
                srcSet
                srcWebp
                srcSetWebp
              }
            }
          }
        }
      }
    }
  `)

  if (result.errors) {
    throw result.errors
  }

  const ministryPages = result.data.allSanityMinistryPage.nodes || []
  ministryPages.forEach(page => {
    createPage({
      path: `/ministries/${page.identifier.current}`,
      component: require.resolve('./src/templates/MinistryPage.tsx'),
      context: page
    })
  })
}
