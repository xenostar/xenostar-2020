/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
require('dotenv').config()

module.exports = {
  siteMetadata: {
    title: `Unused - Xenostar Studios`,
    subTitle: `Unused - XS`,
    description: `Unused - Xenostar.net is the official website of Bryan Leewood.`,
    author: `Unused - Bryan Leewood`,
    siteUrl: `https://xenostar-2020.netlify.com/`,
  },
  plugins: [
    /**
     *
     * Source Plugins
     *
     */
    {
      resolve: `gatsby-source-datocms`,
      options: {
        apiToken: process.env.DATO_API_TOKEN,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/assets/`,
      },
    },

    /**
     *
     * Functionality Plugins
     *
     */
    `gatsby-alias-imports`,
    // `gatsby-plugin-remove-trailing-slashes`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Open Sans`,
            subsets: [`latin`],
            variants: [`400`, `400i`, `700`, `700i`, `800`, `800i`]
          },
          {
            family: `Bebas Neue`,
            subsets: [`latin`],
            variants: [`400`]
          },
          {
            family: `Montserrat`,
            subsets: [`latin`],
            variants: [`400`, `400i`, `500`, `500i`, `600`, `600i`,  `700`, `700i`, `800`, `800i`, `900`, `900i`]
          },
        ],
      },
    },
    // {
    //   resolve: `gatsby-plugin-transition-link`,
    //   options: {
    //     layout: require.resolve(`./src/components/Layout/Layout`),
    //   },
    // },
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`./src/components/Layout/Layout`),
      },
    },

    /**
     *
     * SEO Plugins
     *
     */
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-react-helmet-async`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Xenostar Studios`,
        short_name: `Xenostar Studios`,
        start_url: `/`,
        background_color: `#6b37bf`,
        theme_color: `#6b37bf`,
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: `standalone`,
        icon: `src/assets/icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-offline`, // MUST be after gatsby-plugin-manifest
  ]
}
