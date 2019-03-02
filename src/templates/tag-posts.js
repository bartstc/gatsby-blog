import React from 'react';
import { graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Post from '../components/Post';

const TagPosts = (props) => {
  const { data } = props;
  const posts = data.allContentfulPost.edges;

  return (
    <Layout location={props.location} >
      <SEO
        title="All posts"
        keywords={[`blog`, `gatsby`, `javascript`, `react`]}
      />
      {posts.map(({ node }) => (
        <Post key={node.title} postContent={node}>
          <p className="info">{node.description}</p>
        </Post>
      ))}
    </Layout>
  )
};

export default TagPosts;

export const tagQuery = graphql`
  query BlogPostsByTag($tag: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    allContentfulPost (
      filter: {tags: {in: [$tag]}}
    ) {
      edges {
        node {
          id
          title
          date (formatString: "MMMM Do YYYY")
          slug
          description
          tags
          categories
          image {
            fluid {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
  }
`;