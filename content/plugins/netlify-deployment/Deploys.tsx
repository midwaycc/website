import React from 'react'
import { Deploy } from './Deploy'
import { DeployObject } from './types'
import styles from './styles.css'

type Props = {
  deploys: DeployObject[]
}

export function Deploys({ deploys }: Props) {
  return (
    <div className={styles.deploys}>
      {deploys.map(deploy => (
        <Deploy key={deploy.id} {...deploy} />
      ))}
    </div>
  )
}
