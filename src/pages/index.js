import React from "react";
import { graphql, Link } from "gatsby";
import '../index.css';

import Layout from "../components/layout";
import SEO from "../components/seo";
import Post from '../components/Post';
import { Button } from '../utils/Button';

const BlogIndex = (props) => {
  const posts = props.data.allContentfulPost.edges;

  return (
    <Layout location={props.location} >
      <SEO
        title="All posts"
        keywords={[`blog`, `gatsby`, `javascript`, `react`]}
      />
      {posts.map(({ node }) => (
        <Post key={node.id} postContent={node}>
          <p className="info">{node.description}</p>
          <Link to={node.slug}>
            <Button>Read more</Button>
          </Link>
        </Post>

      ))}
    </Layout>
  )
}

export default BlogIndex;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        subtitle
      }
    }
    allContentfulPost {
      edges {
        node {
          id
          title
          date (formatString: "MMMM Do YYYY")
          description
          slug
          categories
          tags
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
