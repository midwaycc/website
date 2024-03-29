import React from 'react'
import styled from 'styled-components'
import { Link, graphql, useStaticQuery } from 'gatsby'
import { Content } from '~/layout/Content'
import { SquareButton } from '~/components/SquareButton'
import { CardContainer } from '~/components/CardContainer'
import { PostCard } from '~/components/PostCard'
import { Title } from '~/components/Title'
import { media } from '~/utils/media'
import { colors } from '~/theme/colors'
import { RecentPostsQuery } from '~/types/graphqlTypes'
import paper from '~/../static/images/paper.jpg'
import stamp from '~/../static/images/stamp.png'

type Props = {
  posts?: RecentPostsQuery['allSanityPost']['nodes']
  onHomePage?: boolean
}

export function RecentPosts({ posts, onHomePage }: Props) {
  const data: RecentPostsQuery = useStaticQuery(query)
  if (!data.allSanityPost || !data.allSanityPost.nodes) return null
  const postsToUse = posts || data.allSanityPost.nodes

  return (
    <Container color={colors.lime.hex}>
      {onHomePage && (
        <Banner>
          <Title>Midway News</Title>
          <Subtitle>Find out what's happening.</Subtitle>
        </Banner>
      )}
      <Content style={{ padding: '1em' }}>
        <CardContainer>
          {postsToUse.map((post, i) => (
            <PostCard key={post._id || `post-${i}`} post={post} />
          ))}
        </CardContainer>
        {onHomePage && (
          <ViewAllRow>
            <Stamp />
            <Link to="/posts" style={{ zIndex: 1, margin: '1rem 0' }}>
              <SquareButton thick dark point="right">
                View Past Events
              </SquareButton>
            </Link>
          </ViewAllRow>
        )}
      </Content>
    </Container>
  )
}

const query = graphql`
  query RecentPosts {
    allSanityPost(
      limit: 6
      sort: { fields: date, order: DESC }
      filter: { featured: { eq: true }, hidden: { ne: true } }
    ) {
      nodes {
        ...PostCardDetails
      }
    }
  }
`

const Container = styled.div`
  width: 100%;
  background-image: url('${paper}');
  padding-bottom: 3em;
`

const Banner = styled.div`
  background-color: ${props => props.theme.colors.white.hex};
  padding-top: 1em;
  padding-bottom: 2em;
  position: relative;

  :after {
    position: absolute;
    bottom: -1em;
    right: 0;
    height: 2em;
    line-height: 2em;
    padding: 0 0.5em;
    background-color: ${props => props.theme.colors.mediumTeal.hex};
    color: ${props => props.theme.colors.white.hex};
    content: 'Get involved! Get connected!';
    width: 40vw;
    min-width: 14em;

    ${media.sm} {
      font-size: 1.25em;
    }
  }
`

const Subtitle = styled.h2`
  color: ${props => props.theme.colors.lightTurquoise.hex};
  font-style: italic;
  text-align: center;
  font-size: 1.5em;
  margin-top: 0;
`

const ViewAllRow = styled.div`
  margin-top: 4rem;
  text-align: center;
  width: 100%;
  display: flex;
  justify-content: center;
  position: relative;
`

const Stamp = styled.img.attrs({ src: stamp })`
  position: absolute;
  width: 7rem;
  height: auto;
  left: calc(50% - 11rem);
  top: -2rem;
`
