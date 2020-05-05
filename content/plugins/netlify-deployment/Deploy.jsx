import React from 'react'
import formatRelative from 'date-fns/formatRelative'
import styles from './styles.css'

export function Deploy({
  title,
  created_at,
  deploy_time,
  branch,
  state,
  context,
  commit_ref,
  error_message
}) {
  return (
    <div className={styles.deploy}>
      <div className={styles.deployRow}>
        <span>
          <strong>{context}</strong>: {branch}@
          {commit_ref ? commit_ref.slice(0, 7) : 'HEAD'}
          <span
            className={`${styles.deployStatus} ${
              state === 'ready'
                ? styles.success
                : state === 'error'
                ? styles.error
                : ''
            }`}
          >
            {state === 'ready'
              ? 'Published'
              : state === 'building'
              ? 'Building...'
              : error_message && error_message.toLowerCase().includes('failed')
              ? 'Failed'
              : error_message &&
                error_message.toLowerCase().includes('canceled')
              ? 'Cancelled'
              : 'Unknown'}
          </span>
        </span>
        <span>{formatRelative(Date.parse(created_at), Date.now())}</span>
      </div>
      <div className={styles.deployRow}>
        <span className={styles.deemphasized}>
          {title || 'Manually triggered'}
        </span>
        {state === 'ready' && (
          <span className={styles.deemphasized}>
            Deployed in {duration(deploy_time)}
          </span>
        )}
      </div>
    </div>
  )
}

function duration(seconds) {
  const m = Math.floor(seconds / 60.0)
  const s = seconds - m * 60

  if (!m) return `${s}s`
  return `${m}m ${s}s`
}
