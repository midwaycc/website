import React from 'react'
import { Link } from 'gatsby'
import { Section } from '~/layout/Section'

export default function FourOhFourPage() {
  return (
    <>
      <Section>
        Sorry, that page doesn't seem to exist (yet)! Do you want to&nbsp;
        <Link to="/">go Home</Link>?
      </Section>
    </>
  )
}
