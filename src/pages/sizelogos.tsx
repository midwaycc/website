import React from 'react'
import { graphql } from 'gatsby'
import { SubLogo } from '~/templates/MinistryPage'
import Section from '~/layout/Section'

export default ({ data }: { data: any }) => {
  const ministries = data.allSanityMinistryPage.nodes

  return (
    <Section css="padding: 2em 1.5em">
      {ministries.map((ministry: any) => (
        <SubLogo
          key={ministry.name}
          width={ministry.subLogoWidth}
          fluid={ministry.subLogo.asset.fluid}
          css="margin-bottom: 2em"
        />
      ))}
    </Section>
  )
}

export const query = graphql`
  query AllSubLogos {
    allSanityMinistryPage {
      nodes {
        name
        subLogoWidth
        subLogo {
          asset {
            fluid(maxWidth: 600) {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
    }
  }
`
