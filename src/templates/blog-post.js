import React from "react";
import { Link, graphql } from "gatsby";
import Image from 'gatsby-image';

// import Bio from "../components/bio"
import Layout from "../components/layout";
import SEO from "../components/seo";

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.contentfulPost;
    const siteTitle = this.props.data.site.siteMetadata.title;
    const { previous, next } = this.props.pageContext; // we have access to that values thanks to context object defined in request in gatsby-node.js!!!

    console.log(post.content.childContentfulRichText.html)

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title={post.title}
          description={post.description}
        />
        <Image fluid={post.image.fluid} />
        <h1>{post.title}</h1>
        <p>{post.date}</p>
        <div dangerouslySetInnerHTML={{ __html: post.content.childContentfulRichText.html }} />
        {/* <Bio /> */}

        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
          }}
        >
          <li>
            {previous && (
              <Link to={previous.slug} rel="prev">
                ← {previous.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.slug} rel="next">
                {next.title} →
              </Link>
            )}
          </li>
        </ul>
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    contentfulPost(slug: { eq: $slug }) {
      title
      date
      slug
      description
      tags
      categories
      image {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
      content {
        childContentfulRichText {
          html
        }
      }
    }
  }
`;
