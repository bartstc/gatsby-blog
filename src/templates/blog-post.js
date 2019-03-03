import React from "react";
import { graphql, Link } from "gatsby";
import styled from 'styled-components';
import Img from 'gatsby-image';

import Post from '../components/Post';
import SEO from "../components/seo";
import { TitleCenter } from '../utils/Title';

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

        <RelatedPosts>
          <TitleCenter>Related posts</TitleCenter>
          <div className="related-posts-wrapper">
            {relatedPosts
              ?
              relatedPosts.map(({ node }) => (
                <article className="related-post" key={node.id}>
                  <Link to={node.slug}>
                    <Img fluid={node.image.fluid} />
                  </Link>
                  <h2 className="title">{node.title}</h2>
                  <p className="date">{node.date}</p>
                </article>
              ))
              :
              <p>There is no any related posts.</p>
            }
          </div>
        </RelatedPosts>
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

const RelatedPosts = styled.section`
  margin-top: 1.6em;

  .related-posts-wrapper {
    display: flex;
    flex-wrap: wrap;
  }

  .related-post {
    flex: 45%;
    max-width: 45%;
    
    &:first-child {
      margin-right: .8em;

      @media (min-width: 992px) {
        margin-right: 2em;
      }
    }

    .title {
      text-transform: capitalize;
      font-size: 1rem;
      font-weight: 600;
      margin-top: .3em;
    }
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
