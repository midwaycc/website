exports.onCreatePage = ({ page, actions }) => {
  movePage('/home/', '/', page, actions)
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  await Promise.all([
    createPages(graphql, createPage),
    createMinistryPages(graphql, createPage)
  ])
}

exports.sourceNodes = ({ actions }) => {
  const { createTypes } = actions

  createTypes(`
    union SanityPlainOrPageLink = SanityPlainLink | SanityPageLink
  `)
}

////////////////////////////////////////////////////////////////////////////////
// Helpers

function movePage(oldPath, newPath, page, { createPage, deletePage }) {
  if (page.path === oldPath) {
    deletePage(page)
    createPage({ ...page, path: newPath })
  }
}

async function createPages(graphql, createPage) {
  return
}

async function createMinistryPages(graphql, createPage) {
  const result = await graphql(`
    {
      allSanityMinistryPage {
        nodes {
          _id
          url {
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
  ministryPages.forEach(({ _id, url }) => {
    createPage({
      path: url.current,
      component: require.resolve('./src/templates/MinistryPage.tsx'),
      context: { _id }
    })
  })
}
