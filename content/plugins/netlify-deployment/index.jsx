import React, { useState, useEffect } from 'react'
import { ActionRow } from './ActionRow.jsx'
import { Deploys } from './Deploys.jsx'
import styles from './styles.css'

const deploysUrl = siteId =>
  `${
    process.env.NODE_ENV === 'development'
      ? 'http://localhost:34567'
      : 'https://midwaycc.org'
  }/.netlify/functions/deploys?siteId=${siteId}`

function NetlifyDeployment({ site }) {
  const [deploys, setDeploys] = useState([])

  useEffect(() => {
    fetch(deploysUrl(site.id))
      .then(r => r.json())
      .then(setDeploys)
  }, [])

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h2 className={styles.title}>Deployment</h2>
      </header>
      <div className={styles.content}>
        <ActionRow
          lastDeployed={deploys.length ? deploys[0].created_at : null}
          buildHookId={site.buildHookId}
        />
        <Deploys deploys={deploys} />
      </div>
    </div>
  )
}

export default {
  name: 'netlify-deployment',
  component: NetlifyDeployment
}
