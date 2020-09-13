import React from 'react'
import { graphql } from 'gatsby'
import Section from '~/layout/Section'
import Content from '~/layout/Content'
import { AllPostersQuery } from '~/types/graphqlTypes'
import { Poster } from '~/components/Poster'

export const query = graphql`
  query AllPosters {
    allSanityPoster {
      nodes {
        _id
        name
        lines {
          text
          fontSize
          position
        }
        background {
          asset {
            metadata {
              dimensions {
                width
                height
              }
            }
            url
          }
        }
        overlayColor
        overlayOpacity
      }
    }
  }
`

export default function Boxes(props: { data: AllPostersQuery }) {
  const { allSanityPoster } = props.data
  const { nodes } = allSanityPoster

  return (
    <Section>
      <Content>
        {nodes.map(poster => (
          <Poster key={poster._id} poster={poster} />
        ))}
      </Content>
    </Section>
  )
}
