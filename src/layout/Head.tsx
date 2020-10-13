import React from 'react'
import { Helmet } from 'react-helmet'

export default () => (
  <Helmet>
    <title>Midway Community Church</title>
    <link
      rel="alternate"
      type="application/rss+xml"
      title="Midway Community Church Sermons"
      href="https://midwaycc.org/rss.xml"
    />
  </Helmet>
)
