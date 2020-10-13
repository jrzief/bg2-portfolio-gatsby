import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/Layout"
import ReactMarkdown from "react-markdown"
import Image from "gatsby-image"
import SEO from "../components/SEO"

const ComponentName = ({ data }) => {
  const { content, title, desc, image } = data.blog

  return (
    <Layout>
      <SEO title={title} description={desc} />
      <section className="blog-template">
        {image && (
          <Image
            fluid={image.childImageSharp.fluid}
            className="blog-template-img"
          />
        )}
        <div className="section-center">
          <article className="blog-content">
            <ReactMarkdown source={content} />
          </article>
          <Link to="/blog" className="btn center-btn">
            blog
          </Link>
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query GetSingleBlog($slug: String) {
    blog: strapiBlogs(slug: { eq: $slug }) {
      content
      title
      desc
      image {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`

export default ComponentName
