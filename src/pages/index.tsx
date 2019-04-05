import React from 'react'
import Slideshow from '~/components/sections/Slideshow'
import CriticalInfo from '~/components/sections/CriticalInfo'

export default () => (
  <>
    <Slideshow color="#7ba088" title={data.title} subtitle={data.subtitle} />
    <CriticalInfo />
  </>
)

const data = {
  title: 'Welcome!',
  subtitle:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
}
