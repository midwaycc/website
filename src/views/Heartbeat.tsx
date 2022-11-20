import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'
import { HeartbeatQuery } from '~/types/graphqlTypes'
import { useInterval } from '~/utils/useInterval'
import { getShortDuration } from '~/utils/dateUtils'

export function Heartbeat() {
  const data: HeartbeatQuery = useStaticQuery(query)
  const heartbeat = data?.sanityNavigation?.heartbeat
  const [display, setDisplay] = useState(getShortDuration(heartbeat))
  const [expanded, setExpanded] = useState(
    typeof localStorage !== 'undefined'
      ? !localStorage.getItem('hidePreviewHeartbeat')
      : false
  )

  useInterval(() => {
    setDisplay(getShortDuration(heartbeat))
    return undefined
  }, 1000)

  useEffect(() => {
    if (expanded) {
      localStorage.removeItem('hidePreviewHeartbeat')
    } else {
      localStorage.setItem('hidePreviewHeartbeat', expanded.toString())
    }
  }, [expanded])

  if (process.env.NODE_ENV !== 'development') {
    return null
  }

  if (!data || !data.sanityNavigation || !data.sanityNavigation.heartbeat) {
    return null
  }

  if (!expanded) {
    return <Dot onClick={() => setExpanded(true)} />
  }

  return (
    <LastHeartbeat onClick={() => setExpanded(false)}>
      Preview heartbeat:
      <br />
      {display}
      <br />
      (click to close)
    </LastHeartbeat>
  )
}

const query = graphql`
  query Heartbeat {
    sanityNavigation {
      heartbeat
    }
  }
`

const LastHeartbeat = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  text-align: center;
  background: white;
  cursor: default;
  user-select: none;
  color: black;
  border: 1px solid black;
  opacity: 0.5;
  padding: 0.5rem;
`

const Dot = styled.div`
  position: fixed;
  bottom: 0.5rem;
  left: 0.5rem;
  text-align: center;
  background: white;
  width: 1rem;
  height: 1rem;
  border: 1px solid black;
  opacity: 0.5;
  border-radius: 50%;
`
