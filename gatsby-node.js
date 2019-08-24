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
          sections {
            urlSuffix {
              current
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
  ministryPages.forEach(ministryPage => {
    createPage({
      path: ministryPage.url.current,
      component: require.resolve('./src/templates/MinistryPage.tsx'),
      context: { _id: ministryPage._id }
    })
    ministryPage.sections.forEach(section => {
      createPage({
        path: `${ministryPage.url.current}/${section.urlSuffix.current}`,
        component: require.resolve('./src/templates/MinistryPage.tsx'),
        context: { _id: ministryPage._id }
      })
    })
  })
}
