import React from 'react'
import Section from '~/layout/Section'
import loadable from '@loadable/component'

const Calendar = loadable(() => import('~/components/Calendar'))

export default () => {
  return (
    <Section
      color="#2B6667"
      css="padding: 2em 1em; color: white"
      outerCss="flex: 1"
    >
      <Calendar />
    </Section>
  )
}
