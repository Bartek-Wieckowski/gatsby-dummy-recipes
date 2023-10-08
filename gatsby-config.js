/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: "Dummy Recipes",
    description: "Nice and clean recipes site",
    author: "@theBart",
    person: { name: "bart", age: 33 },
    simpleData: ["item1", "item2"],
    complexData: [
      { name: "bart", age: 33 },
      { name: "susan", age: 20 },
    ],
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
  ],
};
