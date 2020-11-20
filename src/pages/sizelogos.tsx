import React from 'react'
import { graphql } from 'gatsby'
import { FluidObject } from 'gatsby-image'
import { SubLogo } from '~/templates/MinistryPage'
import Section from '~/layout/Section'

export default ({ data }: { data: any }) => {
  const ministries = data.allSanityMinistryPage.nodes

  return (
    <Section>
      {ministries.map((ministry: any) =>
        ministry && ministry.subLogo && ministry.subLogo.asset ? (
          <SubLogo
            key={ministry.name}
            fluid={ministry.subLogo.asset.fluid as FluidObject}
            $width={ministry.subLogoWidth}
            css="margin-bottom: 2em"
          />
        ) : null
      )}
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
