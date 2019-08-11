import React from 'react'
import { graphql } from 'gatsby'
import Hero from '~/views/Hero'
import CriticalInfo from '~/views/CriticalInfo'

export default () => {
  return (
    <>
      <Hero />
      <CriticalInfo />
    </>
  )
}
