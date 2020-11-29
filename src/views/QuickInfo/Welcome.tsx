import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { Title } from '~/components/Title'
import { SquareButton } from '~/components/SquareButton'
import { Column } from './Columns'
import { media } from '~/utils/media'

export function Welcome() {
  return (
    <Column>
      <Title $color="#9fb94b">Welcome</Title>
      <Subtitle>You're invited! Sunday mornings.</Subtitle>
      <a
        href="http://midwaycc.sermon.net/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Button>Stream Live</Button>
      </a>
      <Link to="/sermons">
        <Button>Past Sermons</Button>
      </Link>
    </Column>
  )
}

const Subtitle = styled.h2`
  margin: 0;
  font-weight: normal;
  font-size: 1.5rem;

  ${media.xs} {
    font-size: 1.65rem;
  }
`

const Button = styled(SquareButton)`
  padding-left: 0.5em;
  padding-right: 0.5em;
  margin: 1.5em 0.5em;
`
