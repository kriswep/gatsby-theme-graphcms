const path = require(`path`)
const slugify = require('slugify')

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  const blogPost = require.resolve('./src/templates/blog-post.js')
  return graphql(
    `
      {
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

        // Create blog posts pages from GraphCMS
    const posts = result.data.gcms.posts

    posts.forEach((post, index) => {
      const slug = slugify(post.title, {
        lower: true
      })
      const previous = index === posts.length - 1 ? null : posts[index + 1]
      const next = index === 0 ? null : posts[index - 1]

      createPage({
        path: slug,
        component: blogPost,
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

/**
 * When shipping NPM modules, they typically need to be either
 * pre-compiled or the user needs to add bundler config to process the
 * files. Gatsby lets us ship the bundler config *with* the theme, so
 * we never need a lib-side build step.  Since we dont pre-compile the
 * theme, this is how we let webpack know how to process files.
 */
exports.onCreateWebpackConfig = ({ stage, loaders, plugins, actions }) => {
  actions.setWebpackConfig({
    module: {
      rules: [
        {
          test: /\.js$/,
          include: path.dirname(require.resolve('gatsby-theme-graphcms')),
          use: [loaders.js()]
        }
      ]
    }
  })
}
