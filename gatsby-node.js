exports.onCreatePage = ({ page, actions }) => {
  movePage('/home/', '/', page, actions)
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  await Promise.all([
    createPages(graphql, createPage),
    createMinistryPages(graphql, createPage),
    createPostPages(graphql, createPage)
  ])
}

exports.sourceNodes = ({ actions }) => {
  const { createTypes } = actions

  createTypes(`
    union SanityPlainOrPageLink = SanityPlainLink | SanityPageLink
  `)
}

exports.onCreateDevServer = ({ app }) => {}

////////////////////////////////////////////////////////////////////////////////
// Helpers

function movePage(oldPath, newPath, page, { createPage, deletePage }) {
  if (page.path === oldPath) {
    deletePage(page)
    createPage({ ...page, path: newPath })
  }
}

async function createPages(graphql, createPage) {
  const result = await graphql(`
    {
      allSanityPage {
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

  const pages = result.data.allSanityPage.nodes || []
  pages.forEach(page => {
    if (page.url) {
      createPage({
        path: page.url.current,
        component: require.resolve('./src/templates/Page.tsx'),
        context: { _id: page._id }
      })
    }
  })
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
    if (ministryPage.url) {
      createPage({
        path: ministryPage.url.current,
        component: require.resolve('./src/templates/MinistryPage.tsx'),
        context: { _id: ministryPage._id }
      })
      ministryPage.sections.forEach(section => {
        if (section.urlSuffix) {
          createPage({
            path: `${ministryPage.url.current}/${section.urlSuffix.current}`,
            component: require.resolve('./src/templates/MinistryPage.tsx'),
            context: { _id: ministryPage._id }
          })
        }
      })
    }
  })
}

async function createPostPages(graphql, createPage) {
  const perPage = 5

  const result = await graphql(`
    {
      allSanityPost {
        nodes {
          _id
          slug {
            current
          }
        }
      }
    }
  `)

  if (result.errors) {
    throw result.errors
  }

  const posts = result.data.allSanityPost.nodes || []
  posts.forEach(post => {
    if (post.slug) {
      createPage({
        path: `posts/${post.slug.current}`,
        component: require.resolve('./src/templates/Post.tsx'),
        context: { _id: post._id }
      })
    }
  })

  const maxPage = Math.ceil(posts.length / perPage)
  for (let page = 1; page <= maxPage; page++) {
    createPage({
      path: page === 1 ? 'posts' : `posts/page/${page}`,
      component: require.resolve('./src/templates/PostsPage.tsx'),
      context: {
        page,
        perPage,
        offset: (page - 1) * perPage,
        isFirst: page === 1,
        isLast: page === maxPage
      }
    })
  }
}
