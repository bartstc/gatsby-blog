import React from "react";
import { graphql } from "gatsby";
import styled from 'styled-components';

import Post from '../components/Post';
import SEO from "../components/seo";
import RelatedPosts from '../components/RelatedPosts';

import facebook from '../assets/icons/fb.png';
import google from '../assets/icons/g_plus.png';
import instagram from '../assets/icons/instagram.png';
import twitter from '../assets/icons/twitter.png';

const BlogPostTemplate = (props) => {
  const post = props.data.contentfulPost;
  const relatedPosts = props.data.allContentfulPost.edges;

  const baseUrl = 'https://www.m-blog-example.netlify.com';

  return (
    <>
      <SEO
        title={post.title}
        description={post.description}
      />
      <Post postContent={post}>
        <div className="info" dangerouslySetInnerHTML={{ __html: post.content.childContentfulRichText.html }} />
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
        <RelatedPosts relatedPosts={relatedPosts} />
      </Post>
    </>
  )
}

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
  query BlogPostBySlug($slug: String!, $mainCategory: String!, $mainTag: String!) {
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
    allContentfulPost (
      filter: {slug: {ne: $slug}, categories: {in: [$mainCategory]}, tags: {in: [$mainTag]}}
      sort: {fields: [date], order: DESC}
      limit: 2
    ) 
    {
      edges {
        node {
          id
          slug
          title
          date (formatString: "MMMM Do YYYY")
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
