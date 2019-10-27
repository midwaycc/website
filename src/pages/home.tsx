import React from 'react'
import Hero from '~/views/Hero'
import CriticalInfo from '~/views/CriticalInfo'
import RecentPosts from '~/views/RecentPosts'
import ContactForm from '~/views/ContactForm'

export default () => {
  return (
    <>
      <Hero />
      <CriticalInfo />
      <RecentPosts />
      <ContactForm />
    </>
  )
}
