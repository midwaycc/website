import React from 'react'
import formatDistance from 'date-fns/formatDistance'
import Button from 'part:@sanity/components/buttons/default'
import styles from './styles.css'

export function ActionRow({ lastDeployed }) {
  return (
    <>
      <Button className={styles.actionButton} color="primary">
        Deploy now
      </Button>
      <span style={{ marginLeft: '1em' }}>
        Last deployed{' '}
        <strong>
          {formatDistance(Date.parse(lastDeployed), Date.now())} ago
        </strong>
        .
      </span>
    </>
  )
}
