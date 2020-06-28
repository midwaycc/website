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

  const handleClick = () => {
    setMessage('Deploying...')
    fetch(`https://api.netlify.com/build_hooks/${buildHookId}`, {
      method: 'POST'
    }).then(() => {
      setMessage('Deploy started. Refresh to check status.')
    })
  }

  return (
    <>
      <Button
        className={styles.actionButton}
        color="primary"
        onClick={handleClick}
      >
        Deploy now
      </Button>
      <span style={{ marginLeft: '1em' }}>{message}</span>
    </>
  )
}
