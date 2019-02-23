module.exports = ({ endpoint }) => ({
  plugins: [
    {
      resolve: `gatsby-source-graphql`,
      options: {
        // This type will contain remote schema Query type
        typeName: `GCMS`,
        // This is field under which it's accessible
        fieldName: `gcms`,
        // Url to query from
        url: endpoint,
      },
    },
  ]
})