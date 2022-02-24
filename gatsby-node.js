const fs = require('fs')

exports.onCreatePage = ({ page, actions }) => {
  movePage('/home/', '/', page, actions)
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  await Promise.all([
    createPages(graphql, createPage),
    createMinistryPages(graphql, createPage),
    createAllPostPages(graphql, createPage)
  ])
}

exports.createSchemaCustomization = ({ actions }) => {
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
        component: require.resolve('./src/templates/MinistryPage/index.tsx'),
        context: { _id: ministryPage._id }
      })
      ministryPage.sections.forEach(section => {
        if (section.urlSuffix) {
          createPage({
            path: `${ministryPage.url.current}/${section.urlSuffix.current}`,
            component: require.resolve(
              './src/templates/MinistryPage/index.tsx'
            ),
            context: { _id: ministryPage._id }
          })
        }
      })
    }
  })
}

async function createAllPostPages(graphql, createPage) {
  const perPage = 12

  const result = await graphql(`
    {
      allPosts: allSanityPost {
        nodes {
          _id
          slug {
            current
          }
        }
      }
      archivePosts: allSanityPost(
        filter: { featured: { eq: false }, hidden: { ne: true } }
      ) {
        totalCount
      }
    }
  `)

  if (result.errors) {
    throw result.errors
  }

  const allPosts = result.data.allPosts.nodes || []
  const numArchivePosts = result.data.archivePosts.totalCount

  allPosts.forEach(post => {
    if (post.slug) {
      createPage({
        path: `posts/${post.slug.current}`,
        component: require.resolve('./src/templates/Post.tsx'),
        context: { _id: post._id }
      })
    }
  })

  const maxPage = Math.ceil(numArchivePosts / perPage)
  const onlyOne = numArchivePosts <= perPage

  for (let page = 0; page < maxPage; page++) {
    createPage({
      path: page === 0 ? 'posts' : `posts/page/${page}`,
      component: require.resolve('./src/templates/PostsPage.tsx'),
      context: {
        page,
        perPage,
        offset: page * perPage,
        isFirst: page === 0,
        isLast: page === maxPage - 1,
        onlyOne
      }
    })
  }
}
