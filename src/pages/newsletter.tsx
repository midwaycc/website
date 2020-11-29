import React from 'react'
import { graphql, Link } from 'gatsby'
import { css } from 'styled-components'
import { NewsletterQuery } from '~/types/graphqlTypes'
import Section from '~/layout/Section'
import { SquareButton } from '~/components/buttons/SquareButton'
import { CardContainer } from '~/components/CardContainer'
import { niceDate } from '~/utils/niceDate'
import Content from '~/layout/Content'

type Props = {
  data: NewsletterQuery
}

export const query = graphql`
  query Newsletter {
    allSanityNewsletter(sort: { fields: date, order: DESC }) {
      nodes {
        _id
        date
        link
      }
    }
  }
`

export default ({ data }: Props) => {
  if (!data.allSanityNewsletter) return null
  const newsletters = data.allSanityNewsletter.nodes
  return (
    <Section>
      <Content>
        <Link to="/">
          <SquareButton point="left">Home</SquareButton>
        </Link>
        <h1>Newsletter</h1>
        <CardContainer $big $noHover>
          {newsletters.map(newsletter =>
            newsletter._id && newsletter.link && newsletter.date ? (
              <div key={newsletter._id}>
                <h2
                  css={css`
                    margin: 0;
                    margin-bottom: 0.5em;
                    color: rgb(35, 74, 77);
                  `}
                >
                  {niceDate(newsletter.date)}
                </h2>
                <a
                  href={newsletter.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View in browser
                </a>
              </div>
            ) : null
          )}
        </CardContainer>
      </Content>
    </Section>
  )
}
