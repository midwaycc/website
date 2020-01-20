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
      allSanityMinistryPage(filter: { name: { ne: "Get Involved" } }) {
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

async function createAllPostPages(graphql, createPage) {
  const perPage = 10

  const [allPostsResult, getInvolvedPostsResult] = await Promise.all([
    graphql(`
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
    `),
    graphql(`
      {
        allSanityPost(
          filter: {
            ministries: { elemMatch: { name: { eq: "Get Involved" } } }
          }
        ) {
          totalCount
        }
      }
    `)
  ])

  if (allPostsResult.errors) {
    throw allPostsResult.errors
  }

  if (getInvolvedPostsResult.errors) {
    throw getInvolvedPostsResult.errors
  }

  const allPosts = allPostsResult.data.allSanityPost.nodes || []
  const numGetInvolvedPosts =
    getInvolvedPostsResult.data.allSanityPost.totalCount

  allPosts.forEach(post => {
    if (post.slug) {
      createPage({
        path: `posts/${post.slug.current}`,
        component: require.resolve('./src/templates/Post.tsx'),
        context: { _id: post._id }
      })
    }
  })

  createPostPages(
    createPage,
    allPosts.length,
    perPage,
    'posts',
    require.resolve('./src/templates/PostsPage.tsx')
  )
  createPostPages(
    createPage,
    numGetInvolvedPosts,
    perPage,
    'get-involved',
    require.resolve('./src/templates/GetInvolvedPostsPage.tsx')
  )
}

function createPostPages(
  createPage,
  totalCount,
  perPage,
  urlPrefix,
  component
) {
  const maxPage = Math.ceil(totalCount / perPage)
  for (let page = 1; page <= maxPage; page++) {
    createPage({
      path: page === 1 ? urlPrefix : `${urlPrefix}/page/${page}`,
      component,
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
