import React from 'react'
import Hero from '~/views/Hero'
import RecentPosts from '~/views/RecentPosts'
import WeeklySchedule from '~/views/WeeklySchedule'
import QuickInfo from '~/views/QuickInfo'

export default () => {
  return (
    <>
      <Hero />
      <QuickInfo />
      <RecentPosts withBanner />
      <WeeklySchedule />
    </>
  )
}
