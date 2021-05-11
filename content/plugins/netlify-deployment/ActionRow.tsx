import React, { useState, useEffect } from 'react'
import formatDistance from 'date-fns/formatDistance'
import Button from 'part:@sanity/components/buttons/default'
import { hitPreviewWebhook } from '../wakeUpPreview'
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

  const restartPreview = () => {
    setMessage('Restarting...')
    hitPreviewWebhook().then(() => {
      setMessage(
        'Preview site restarted. Wait a minute and refresh the preview page.'
      )
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
        style={{
          marginLeft: '1rem'
        }}
        onClick={restartPreview}
      >
        Restart Preview
      </Button>
      <div style={{ marginTop: '1em' }}>{message}</div>
    </>
  )
}
