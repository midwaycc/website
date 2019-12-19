import React from 'react'
import styled from 'styled-components'
import { Link, graphql, useStaticQuery } from 'gatsby'
import { RecentPostsQuery } from '~/types/graphqlTypes'
import RecentPost from './RecentPost'
import { SquareButton } from '~/components/SquareButton'
import paper from '~/../static/images/paper.jpg'
import { Title } from '~/components/Title'
import Content from '~/layout/Content'

type Props = {
  posts?: RecentPostsQuery['allSanityPost']['nodes']
}

export default ({ posts }: Props) => {
  const data: RecentPostsQuery = useStaticQuery(query)
  if (!data.allSanityPost || !data.allSanityPost.nodes) return null
  const postsToUse = posts || data.allSanityPost.nodes

  return (
    <Container color="#9FB94B">
      <Banner>
        <Title>Midway News</Title>
        <Subtitle>Find out what's happening.</Subtitle>
      </Banner>
      <Content>
        <Posts>
          {postsToUse.map((post, i) => (
            <RecentPost key={post._id || `post-${i}`} post={post} />
          ))}
          <SeeMoreRow>
            <Link to="/posts">
              <SquareButton thick dark point="right">
                View all
              </SquareButton>
            </Link>
          </SeeMoreRow>
        </Posts>
      </Content>
    </Container>
  )
}

const query = graphql`
  query RecentPosts {
    allSanityPost(
      limit: 6
      sort: { fields: date, order: DESC }
      filter: { featured: { eq: true } }
    ) {
      nodes {
        _id
        _rawSummary(resolveReferences: { maxDepth: 10 })
        thumbnail {
          asset {
            fixed(width: 75, height: 75) {
              ...GatsbySanityImageFixed
            }
          }
        }
        date
        slug {
          current
        }
        title
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
  background-color: white;
  padding-top: 1em;
  padding-bottom: 2em;
  position: relative;

  :after {
    position: absolute;
    bottom: -1em;
    right: 0;
    height: 2em;
    font-size: 1.25em;
    line-height: 2em;
    padding: 0 0.5em;
    background-color: #2b6667;
    color: white;
    content: 'Get involved! Get connected!';
    width: 40vw;
    min-width: 14em;
  }
`

const Subtitle = styled.h2`
  color: #5aa7a9;
  font-style: italic;
  text-align: center;
  font-size: 1.5em;
  margin-top: 0;
`

const Posts = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  padding-top: 2em;
`

const SeeMoreRow = styled.div`
  margin-top: 2.5em;
  text-align: center;
  width: 100%;
  display: flex;
  justify-content: center;
`
