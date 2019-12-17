import React from 'react'
import Hero from '~/views/Hero'
import CriticalInfo from '~/views/CriticalInfo'
import RecentPosts from '~/views/RecentPosts'
import WeeklySchedule from '~/views/WeeklySchedule'

export default () => {
  return (
    <>
      <Hero />
      <CriticalInfo />
      <RecentPosts />
      <WeeklySchedule />
    </>
  )
}
