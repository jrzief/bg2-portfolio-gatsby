import React from "react"
import Image from "gatsby-image"
import { Link } from "gatsby"
import { graphql, useStaticQuery } from "gatsby"
import SocialLinks from "../constants/socialLinks"
const query = graphql`
  {
    file(relativePath: { eq: "BGheadshot.jpg" }) {
      childImageSharp {
        fixed(width: 250, height: 250) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`
const Hero = () => {
  const {
    file: {
      childImageSharp: { fixed },
    },
  } = useStaticQuery(query)

  return (
    <header className="hero">
      <div className="section-center hero-center">
        <article className="hero-info">
          <div>
            <div className="underline"></div>
            <h1>Brian Griner</h1>
            <h4>Deep Learning Wizard</h4>
            <Link to="/contact" className="btn">
              contact me
            </Link>
            <SocialLinks styleClass="footer-links" />
          </div>
        </article>
        <Image fixed={fixed} className="hero-img" />
      </div>
    </header>
  )
}

export default Hero
