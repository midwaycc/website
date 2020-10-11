import React, { useState, useEffect } from 'react'
import formatDistance from 'date-fns/formatDistance'
import Button from 'part:@sanity/components/buttons/default'
import styles from './styles.css'

type Props = {
  lastDeployed: string | null
  buildHookId: string
}

export function ActionRow({ lastDeployed, buildHookId }: Props) {
  const [message, setMessage] = useState<React.ReactNode>('Loading...')

  useEffect(() => {
    if (lastDeployed) {
      setMessage(
        <>
          Last deployed{' '}
          <strong>
            {formatDistance(Date.parse(lastDeployed), Date.now())} ago
          </strong>
          .
        </>
      )
    }
  }, [lastDeployed])

  const startDeployment = () => {
    setMessage('Deploying...')
    fetch(`https://api.netlify.com/build_hooks/${buildHookId}`, {
      method: 'POST'
    }).then(() => {
      setMessage('Deploy started. Refresh to check status.')
    })
  }

  const refreshPreview = () => {
    setMessage('Refreshing...')
    fetch('https://midway-preview.herokuapp.com/__refresh', {
      method: 'POST'
    }).then(() => {
      setMessage('Preview data refreshed. Wait 10 seconds and refresh preview.')
    })
  }

  return (
    <>
      <Button
        className={styles.actionButton}
        color="primary"
        onClick={startDeployment}
      >
        Deploy now
      </Button>
      <Button
        className={styles.actionButton}
        color="secondary"
        onClick={refreshPreview}
      >
        Refresh Preview
      </Button>
      <span style={{ marginLeft: '1em' }}>{message}</span>
    </>
  )
}
