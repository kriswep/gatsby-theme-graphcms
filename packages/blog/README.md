<p align="center">
  <a href="https://www.gatsbyjs.org">
    <img alt="Gatsby" src="https://www.gatsbyjs.org/monogram.svg" width="60" />
  </a>
</p>
<h1 align="center">
  Gatsby's blog theme with a GraphCMS API backend
</h1>

Kick off your project with this theme four your [Gatsby](https://www.gatsbyjs.org) blog. It ships with the main Gatsby configuration files you might need to get up and running blazing fast with the blazing fast app generator for React. It leverages [GraphCMS](https://graphcms.com/) as the API for your content. They provide an intuitive way for creators to manage their content.

## 🚀 Quick start

This is a theme for a Gatsby blog. In order to use it, we must create a new, gatsby site and configure it to use this theme. Also, we have to do some setup in GraphCMS, our CMS of choice.

If you get stuck along the way, have a look at a [demo setup](https://github.com/kriswep/gatsby-theme-graphcms/tree/master/samples/blog).

1.  **Create a new Gatsby site.**

    Use the Gatsby CLI to create a new site, specifying the basic starter. This adds the minimal needed dependencies for a Gatsby site.

    ```sh
    # create a new Gatsby site using the blog starter
    npx gatsby new my-blog https://github.com/gatsbyjs/gatsby-starter-hello-world
    ```

    You could delete the src folder in the newly generated folder for basic setups.

1. **Setup your GraphCMS API**
    Head over to [GraphCMS](https://graphcms.com/), login or create an account. The free plan should be enough to begin, although the paid plans comes with some nice advanced featurey, like different access roles. This theme expect a certain data model to be existent, which you have to create via their UI. Later on, you (or another content editor of your choice) can write your content right in GraphCMS.

    ![The needed GraphCMS data model](https://raw.githubusercontent.com/kriswep/gatsby-theme-graphcms/master/packages/blog/graphcms-model.png)

    Finally, don't forget to allow public access to the `QUERY` Scope under settings. While you're there, grap your API endpoint, which we'll need in a moment.

1. **Add this theme as dependency.**

    Back in your terminal, add this theme as a dependecy to your newly created blog.

    ```sh
    cd my-blog/
    npm i -S gatsby-theme-graphcms-blog
    ```

1. **Configure Gatsby.**

    Create a `gatsby-config.js` file with the following content, adding the endpoint you've found in the GraphCMS settings.

    ```javascript
    module.exports = {
      __experimentalThemes: [
        {
          resolve: "gatsby-theme-graphcms-blog",
          options: {
            endpoint: "https://add-your-graphcms-endpoint.here",
          },
        },
      ],
    }
    ```

1.  **Start Gatsby.**

    Navigate into your new site’s directory and start it up.

    ```sh
    # develop mode
    npm run develop
    # production build, outputs to static files to ./public, which can be hosted nearly anywhere.
    npm run build
    ```

1.  **Enjoy and start writing!**

    Your site is now running at `http://localhost:8000`!

    _Note: You'll also see a second link: _`http://localhost:8000/___graphql`_. This is a tool you can use to experiment with querying your data. Learn more about using this tool in the [Gatsby tutorial](https://www.gatsbyjs.org/tutorial/part-five/#introducing-graphiql)._


## 🎓 Learning Gatsby

Looking for more guidance? Full documentation for Gatsby lives [on the website](https://www.gatsbyjs.org/). Here are some places to start:

- **For most developers, we recommend starting with our [in-depth tutorial for creating a site with Gatsby](https://www.gatsbyjs.org/tutorial/).** It starts with zero assumptions about your level of ability and walks through every step of the process.

- **To dive straight into code samples, head [to our documentation](https://www.gatsbyjs.org/docs/).** In particular, check out the _Guides_, _API Reference_, and _Advanced Tutorials_ sections in the sidebar.
