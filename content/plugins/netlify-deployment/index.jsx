import React from 'react'
import { ActionRow } from './ActionRow.jsx'
import { Deploys } from './Deploys.jsx'
import styles from './styles.css'

const fakeDeploys = [
  {
    id: 'a',
    title: 'Deploy the first',
    created_at: '2020-05-04T00:39:02.666Z',
    deploy_time: 89,
    branch: 'master',
    context: 'production',
    state: 'ready'
  },
  {
    id: 'b',
    title: 'Deploy the second',
    created_at: '2020-05-04T00:39:02.666Z',
    deploy_time: 45,
    branch: 'master',
    state: 'error',
    context: 'production',
    error_message: 'Canceled build'
  },
  {
    id: 'c',
    title: 'Deploy the third',
    created_at: '2020-05-04T00:39:02.666Z',
    deploy_time: 148,
    branch: 'master',
    state: 'ready',
    context: 'production',
    commit_ref: '616da17c35809f99bb21d5907a825d6467a6394e'
  }
]

function NetlifyDeployment() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h2 className={styles.title}>Deployment</h2>
      </header>
      <div className={styles.content}>
        <ActionRow lastDeployed={fakeDeploys[0].created_at} />
        <Deploys deploys={fakeDeploys} />
      </div>
    </div>
  )
}

export default {
  name: 'netlify-deployment',
  component: NetlifyDeployment
}
