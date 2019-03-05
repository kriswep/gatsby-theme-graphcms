# Gatsby and GraphCMS

This is a monorepo containing several Gatsby themes to make working with [GraphCMS](https://graphcms.com/) in [GatsbyJS](https://www.gatsbyjs.org/) easier.

## Contained themes

Several packages are contained in the `./packages` folder.

[./packages/core](./packages/core) contains the core Gatsby theme `gatsby-theme-graphcms`, which exposed any GraphCMS endpoint to your Gatsby GraphQl datalayer.

[./packages/blog](./packages/blog) contains a theme `gatsby-theme-graphcms-blog` mirroring the official Gatby starter blog, but is powered by a GraphCMS endpoint. It levearges the core `gatsby-theme-graphcms` theme.

## Usage examples

There are some usage examples included in the `./samples` directory.

[./samples/core-site](./samples/core-site) showcases how to setup the core theme `gatsby-theme-graphcms`.

[./samples/blog](./samples/blog) showcases how to use the blog theme `gatsby-theme-graphcms-blog`.
