import React from 'react'
import Section from '~/layout/Section'
import { Link } from 'gatsby'

export default () => (
  <>
    <Section css="padding-top: 2em">
      Sorry, that page doesn't seem to exist (yet)! Do you want to&nbsp;
      <Link to="/">go home</Link>?
    </Section>
  </>
)
