import React from "react";
import { Link, graphql } from "gatsby";
import Image from 'gatsby-image';
import styled from 'styled-components';
import '../index.css';

import Layout from "../components/layout";
import SEO from "../components/seo";
import { Title } from "../utils/Title";

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
        {posts.map(({ node }) => {
          const title = node.title || node.slug;

          return (
            <Post key={node.slug}>
              <Link className="main-link" to={node.slug}>
                <Title title={title} />
              </Link>
              <small className="date">{node.date}</small>
              <Link to={node.slug}>
                <Image fluid={node.image.fluid} />
              </Link>
              <p className="info">{node.description}</p>
              <span className="bold info">Categories:</span>
              <ul className="link-group">
                {node.categories.split(', ').map((category, i) => (
                  <li key={category} className="link"><Link className="info" to={`/categories/${category}`}>{category}</Link></li>
                ))}
              </ul>
              <span className="bold info">Tags:</span>
              <ul className="link-group">
                {node.tags.split(', ').map(tag => (
                  <li key={tag} className="link"><Link className="info" to={`/tags/${tag}`}>{tag}</Link></li>
                ))}
              </ul>
            </Post>
          )
        })}
      </Layout>
    )
  }
}

const Post = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 2.2em;

  .main-link {
    align-self: flex-start;
  }

  .link {
    margin-right: .4em;
  }

  .link-group {
    display: flex;
  }

  .date {
    font-style: italic;
    font-size: .8rem;
    margin-bottom: .8em;
  }

  .info {
    margin-top: .7em;
  }
`;

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
