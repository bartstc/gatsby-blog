import React from "react";
import { graphql } from "gatsby";
import '../index.css';

import Layout from "../components/layout";
import SEO from "../components/seo";
import Post from '../components/Post';

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props;
    const posts = data.allContentfulPost.edges;

    return (
      <Layout location={this.props.location} >
        <SEO
          title="All posts"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
        {posts.map(({ node }) => (
          <Post key={node.id} postContent={node}>
            <p className="info">{node.description}</p>
          </Post>
        ))}
      </Layout>
    )
  }
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
