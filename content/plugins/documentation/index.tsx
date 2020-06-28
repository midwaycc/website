import React from 'react'
import Markdown from 'react-markdown'
import styles from './styles.css'

const docs = `
This should serve as a guide for how the site is put together.

### Major pieces:

- [Sanity](https://midwaycc.sanity.studio/): Stores the content for the site and
  lets admins edit everything without touching code
- [Netlify](https://www.netlify.com): Hosts the site itself. Rebuilds the site
  when code is changed, when content is updated, or when triggered manually.
- [Gatsby](https://www.gatsbyjs.org/): The main tool used to build the site.
  This is code-only, and won't be interacted with by admins. Pulls content from
  Sanity and anywhere else necessary, and produces static assets that are
  deployed to Netlify.
- [GitHub](https://github.com/midwaycc/website): The code for the site and the
  Sanity admin interface.
`

function Documentation() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h2 className={styles.title}>Documentation</h2>
      </header>
      <div className={styles.content}>
        <Markdown source={docs} />
      </div>
    </div>
  )
}

export default {
  name: 'documentation',
  component: Documentation
}
