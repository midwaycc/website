import React from 'react'
import { Link } from 'gatsby'
import InfoWidget from './InfoWidget'
import { ActionButton } from '~/components/Pills'

export default () => (
  <InfoWidget title="Sermons">
    <a href="http://midwaycc.sermon.net/" target="_blank">
      <ActionButton>Tune In Live</ActionButton>
    </a>
    <Link to="/sermons">
      <ActionButton css="margin-top: 1em">Past Sermons</ActionButton>
    </Link>
  </InfoWidget>
)
