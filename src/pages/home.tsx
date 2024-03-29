import React from 'react'
import { GeneralAlert } from '~/views/GeneralAlert'
import { Hero } from '~/views/Hero'
import { RecentPosts } from '~/views/RecentPosts'
import { WeeklySchedule } from '~/views/WeeklySchedule'
import { QuickInfo } from '~/views/QuickInfo'
import { Heartbeat } from '~/views/Heartbeat'

export default function HomePage() {
  return (
    <>
      <GeneralAlert />
      <Hero />
      <QuickInfo />
      <RecentPosts onHomePage />
      <WeeklySchedule />
      <Heartbeat />
    </>
  )
}
