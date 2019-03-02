import React from "react";
import { graphql } from "gatsby";
import styled from 'styled-components';

import Layout from "../components/layout";
import Post from '../components/Post';
import SEO from "../components/seo";

import facebook from '../assets/icons/fb.png';
import google from '../assets/icons/g_plus.png';
import instagram from '../assets/icons/instagram.png';
import twitter from '../assets/icons/twitter.png';

const BlogPostTemplate = (props) => {
  const post = props.data.contentfulPost;
  const siteTitle = props.data.site.siteMetadata.title;
  // const { previous, next } = props.pageContext; // we have access to that values thanks to context object defined in request in gatsby-node.js

  const baseUrl = 'https://www.m-blog-example.netlify.com';

  return (
    <Layout location={props.location} title={siteTitle}>
      <SEO
        title={post.title}
        description={post.description}
      />
      <Post postContent={post}>
        <div className="info" dangerouslySetInnerHTML={{ __html: post.content.childContentfulRichText.html }} />

        {/* <nav>
            <Links>
              <li className="info">
                {previous && (
                  <Link to={previous.slug} rel="prev">
                    ← {previous.title}
                  </Link>
                )}
              </li>
              <li className="info">
                {next && (
                  <Link to={next.slug} rel="next">
                    {next.title} →
                </Link>
                )}
              </li>
            </Links>
          </nav> */}
        <ShareWrapper className="share">
          <p className="info bold">Share this post</p>
          <SocialLinks>
            <li className="info"><a href={`https://www.facebook.com/sharer/sharer.php?u=${baseUrl}${post.slug}`} className="facebook" target="_blank" rel="noopener noreferrer">
              <img src={facebook} alt="" />
            </a></li>
            <li className="info"><a href={`https://www.facebook.com/sharer/sharer.php?u=${baseUrl}${post.slug}`} className="facebook" target="_blank" rel="noopener noreferrer">
              <img src={google} alt="" />
            </a></li>
            <li className="info"><a href={`https://www.facebook.com/sharer/sharer.php?u=${baseUrl}${post.slug}`} className="facebook" target="_blank" rel="noopener noreferrer">
              <img src={instagram} alt="" />
            </a></li>
            <li className="info"><a href={`https://www.facebook.com/sharer/sharer.php?u=${baseUrl}${post.slug}`} className="facebook" target="_blank" rel="noopener noreferrer">
              <img src={twitter} alt="" />
            </a></li>
          </SocialLinks>
        </ShareWrapper>
      </Post>
    </Layout>
  )
}

// const Links = styled.ul`
//   display: flex;
//   flex-wrap: wrap;
//   justify-content: space-between;
//   margin-top: 1.6em;
// `;

const ShareWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SocialLinks = styled.ul`
  display: flex;
  width: 140px;
  justify-content: space-between;

  img {
    width: 30px;
  }
`;

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    contentfulPost(slug: { eq: $slug }) {
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
      content {
        childContentfulRichText {
          html
        }
      }
    }
  }
`;
