import React, { useState, useEffect } from 'react'
import formatDistance from 'date-fns/formatDistance'
import Button from 'part:@sanity/components/buttons/default'
import styles from './styles.css'

type Props = {
  lastDeployed: string | null
  buildHookId: string
}

const HEROKU_APP =
  window.location.pathname.split('/')[1] === 'staging'
    ? 'midway-preview-staging'
    : 'midway-preview'

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
    fetch(`https://preview-midwaycc.gtsb.io/__refresh`, {
      method: 'POST'
    }).then(() => {
      setMessage('Preview data refreshed. Wait 10 seconds and refresh preview.')
    })
  }

  const restartPreview = () => {
    setMessage('Restarting...')
    fetch(`https://api.heroku.com/apps/${HEROKU_APP}/dynos`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/vnd.heroku+json; version=3',
        Authorization: `Bearer ${process.env.SANITY_STUDIO_HEROKU_TOKEN}`
      }
    }).then(() => {
      setMessage(
        'Preview site restarted. Wait 1-2 minutes and refresh preview.'
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
        onClick={refreshPreview}
      >
        Refresh Preview
      </Button>
      <Button
        disabled
        className={styles.actionButton}
        style={{ background: '#dd5555', borderColor: '#662a2a' }}
        color="secondary"
        onClick={restartPreview}
      >
        Restart Preview
      </Button>
      <div style={{ marginTop: '1em' }}>{message}</div>
    </>
  )
}
