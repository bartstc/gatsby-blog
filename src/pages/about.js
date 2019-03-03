import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from "gatsby";
import Img from 'gatsby-image';
import SEO from '../components/seo';

import { TitleCenter } from '../utils/Title';
import { Button } from '../utils/Button';

const About = () => (
  <>
    <SEO
      title="About me"
      description="My short bio."
    />
    <TitleCenter>About me</TitleCenter>
    <StaticQuery
      query={graphql`
          query {
            placeholderImage: file(relativePath: { eq: "img/author.png" }) {
              childImageSharp {
                fluid(maxWidth: 900) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        `}
      render={data => <Img fluid={data.placeholderImage.childImageSharp.fluid} />}
    />
    <AboutTitle>Bart</AboutTitle>
    <p className="info">Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? <br /><br /> Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
    <AboutTitle>Get in touch</AboutTitle>
    <Form>
      <input type="text" placeholder="Email ..." />
      <textarea placeholder="Message ..." />
      <Button>Send</Button>
    </Form>
  </>
);

const AboutTitle = styled.h2`
  font-size: 1rem;
  font-weight: 600;
  line-height: 2rem;
  margin-top: .8em;

  @media (min-width: 768px) {
    font-size: 1.2rem;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 400px;
  margin-bottom: 2em;

  input, textarea {
    background: none;
    border: none;
    border-bottom: 1px solid #000;
    line-height: 1.3rem;
    margin-bottom: .8em;

    &::placeholder {
      color: #000;
    }
  }
`;

export default About;