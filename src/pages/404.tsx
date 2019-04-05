import React from 'react'
import Section from '~/layout/Section'
import { Link } from 'gatsby'

export default () => (
  <>
    <Section css="height: 100vh; padding-top: 2em">
      <div>
        Sorry, that page doesn't seem to exist (yet)!{' '}
        <Link to="/">Go home</Link>?
      </div>
    </Section>
  </>
)
