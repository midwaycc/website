exports.onCreatePage = ({ page, actions }) => {
  movePage('/home/', '/', page, actions)
}

function movePage(oldPath, newPath, page, { createPage, deletePage }) {
  if (page.path === oldPath) {
    deletePage(page)
    createPage({ ...page, path: newPath })
  }
}
