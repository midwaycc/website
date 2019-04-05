import React from 'react'
import Section from '~/layout/Section'
import { Link } from 'gatsby'

export default () => (
  <>
    <Section css="height: 100vh; padding-top: 2em">
      <div>
        Sorry, that page doesn't seem to exist (yet)! Do you want to&nbsp;
        <Link to="/">go home</Link>?
      </div>
    </Section>
  </>
)
