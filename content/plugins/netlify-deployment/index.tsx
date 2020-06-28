import React, { useState, useEffect } from 'react'
import { ActionRow } from './ActionRow'
import { Deploys } from './Deploys'
import { DeployObject } from './types'
import styles from './styles.css'

type Props = {
  site: {
    title: string
    name: string
    id: string
    buildHookId: string
  }
}

function NetlifyDeployment({ site }: Props) {
  const [deploys, setDeploys] = useState<DeployObject[]>([])

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

const deploysUrl = (siteId: string) =>
  `${
    process.env.NODE_ENV === 'development'
      ? 'http://localhost:34567'
      : 'https://midwaycc.org'
  }/.netlify/functions/deploys?siteId=${siteId}`

export default {
  name: 'netlify-deployment',
  component: NetlifyDeployment
}
