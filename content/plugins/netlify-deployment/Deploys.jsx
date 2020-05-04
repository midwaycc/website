import React from 'react'
import { Deploy } from './Deploy.jsx'
import styles from './styles.css'

export function Deploys({ deploys }) {
  return (
    <div className={styles.deploys}>
      {deploys.map(deploy => (
        <Deploy key={deploy.id} {...deploy} />
      ))}
    </div>
  )
}
