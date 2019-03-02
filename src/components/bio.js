import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import { TitleCenter } from "../utils/Title";

function Bio() {
  return (
    <article>
      <TitleCenter title="About me" />
      <StaticQuery
        query={graphql`
          query {
            placeholderImage: file(relativePath: { eq: "img/author.jpeg" }) {
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
      <p className="info" style={{ marginTop: '.5em' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam ut mollitia cupiditate, eaque saepe accusamus consectetur possimus repellendus ab natus!</p>
    </article>
  )
}

export default Bio;