import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import Content from '~/layout/Content'
import Section from '~/layout/Section'

export default () => (
  <>
    <Section
      color="blue"
      innerCss="color: white"
      outerCss="box-shadow: 0 10px 15px black"
    >
      <div>hello world</div>
    </Section>
  </>
)
