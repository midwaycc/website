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
          _id
          identifier {
            current
          }
        }
      }
    }
  `)

  if (result.errors) {
    throw result.errors
  }

  const ministryPages = result.data.allSanityMinistryPage.nodes || []
  ministryPages.forEach(({ _id, identifier }) => {
    createPage({
      path: `/ministries/${identifier.current}`,
      component: require.resolve('./src/templates/MinistryPage.tsx'),
      context: { _id }
    })
  })
}
