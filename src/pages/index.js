import React from "react";
import { Link, graphql } from "gatsby";
import Image from 'gatsby-image';
import styled from 'styled-components';

import Layout from "../components/layout";
import SEO from "../components/seo";

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props;
    const siteTitle = data.site.siteMetadata.title;
    const posts = data.allContentfulPost.edges;

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="All posts"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
        {posts.map(({ node }) => {
          const title = node.title || node.slug;

          return (
            <Post key={node.slug}>
              <PostImage>
                <Image fluid={node.image.fluid} />
              </PostImage>
              <PostText>
                <h3>
                  <Link style={{ boxShadow: `none` }} to={node.slug}>
                    {title}
                  </Link>
                </h3>
                <small>{node.date}</small>
                <p>{node.description}</p>
              </PostText>

            </Post>
          )
        })}
      </Layout>
    )
  }
}

const Post = styled.div`
  display: flex;
`;

const PostImage = styled.div`
  flex: 25%;
  margin-right: 1rem;
`;

const PostText = styled.div`
  flex: 75%;
`;

export default BlogIndex;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allContentfulPost {
      edges {
        node {
          title
          date
          description
          slug
          image {
            fluid {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
  }
`
