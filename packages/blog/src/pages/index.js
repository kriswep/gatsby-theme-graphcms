import React from "react"
import { Link, graphql } from "gatsby"
import slugify from "slugify"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.gcms.posts

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="All posts"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
        <Bio />
        {posts.map( post => {
          const title = post.title
          const slug = slugify(title, {
            lower: true
          })
          return (
            <div key={post.id}>
              <h3
                style={{
                  marginBottom: rhythm(1 / 4),
                }}
              >
                <Link style={{ boxShadow: `none` }} to={slug}>
                  {title}
                </Link>
              </h3>
              <small>{new Date(post.date).toLocaleDateString()}</small>
              <p
                dangerouslySetInnerHTML={{
                  __html: post.description,
                }}
              />
            </div>
          )
        })}
      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    gcms {
      posts(orderBy:date_DESC) {
        id
        title
        description
        date
      }
    }
  }
`
