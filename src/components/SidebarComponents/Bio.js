import React from "react";
import { StaticQuery, graphql, Link } from "gatsby";
import Img from "gatsby-image";

import { TitleCenter } from "../../utils/Title";

const Bio = () => {
  return (
    <article className="sidebar-article">
      <TitleCenter>About me</TitleCenter>
      <StaticQuery
        query={graphql`
          query {
            placeholderImage: file(relativePath: { eq: "img/me.jpg" }) {
              childImageSharp {
                fluid(maxWidth: 900) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        `}
        render={data => <Link to="/about"><Img fluid={data.placeholderImage.childImageSharp.fluid} /></Link>}
      />
      <p className="info" style={{ marginTop: '.5em', fontSize: '.85rem' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam ut mollitia cupiditate, eaque saepe accusamus consectetur possimus repellendus ab natus!</p>
    </article>
  )
}

export default Bio;