const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)
const slugify = require('slugify')

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  const blogPost = require.resolve('./src/templates/blog-post.js')
  const blogPostCms = require.resolve('./src/templates/blog-post-cms.js')
  return graphql(
    `
      {
        allMarkdownRemark(
          sort: { fields: [frontmatter___date], order: DESC }
          limit: 1000
        ) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
              }
            }
          }
        }
        gcms {
          posts(orderBy:date_DESC) {
            id
            title
          }
        }
      }
    `
  ).then(result => {
    if (result.errors) {
      throw result.errors
    }

    // Create blog posts pages.
    const posts = result.data.allMarkdownRemark.edges

    posts.forEach((post, index) => {
      const previous = index === posts.length - 1 ? null : posts[index + 1].node
      const next = index === 0 ? null : posts[index - 1].node

      createPage({
        path: post.node.fields.slug,
        component: blogPost,
        context: {
          slug: post.node.fields.slug,
          previous,
          next,
        },
      })
    })

    // Create blog posts pages from GraphCMS
    const cmsPosts = result.data.gcms.posts

    cmsPosts.forEach((post, index) => {
      const slug = slugify(post.title, {
        lower: true
      })
      const previous = index === cmsPosts.length - 1 ? null : cmsPosts[index + 1]
      const next = index === 0 ? null : cmsPosts[index - 1]

      createPage({
        path: slug,
        component: blogPostCms,
        context: {
          id: post.id,
          slug,
          previous,
          next,
        },
      })
    })
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}
