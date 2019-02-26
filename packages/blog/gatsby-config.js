module.exports = ({ endpoint }) => ({
  __experimentalThemes: [
    {
      resolve: "gatsby-theme-graphcms",
      options: {
        endpoint,
      },
    },
  ],
  siteMetadata: {
    title: `Gatsby Starter Blog`,
    author: `Todd Mitchelle`,
    location: `Germany`,
    description: `A theme blog demonstrating what Gatsby can do.`,
    siteUrl: `https://github.com/kriswep/gatsby-theme-graphcms/`,
    social: {
      twitter: `kriswep`,
    },
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-page-creator',
      options: {
        path: `${__dirname}/src/pages`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        //trackingId: `ADD YOUR TRACKING ID HERE`,
      },
    },
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Gatsby Starter Blog Theme`,
        short_name: `GatsbyTheme`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        // icon: `content/assets/gatsby-icon.png`,
        icon: `${__dirname}/content/assets/gatsby-icon.png`,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `${__dirname}/src/utils/typography`,

      },
    },
  ],
})
