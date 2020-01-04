/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
require('dotenv').config()

module.exports = {
  siteMetadata: {
    title: `Xenostar`,
    subtitle: `Studios`,
    description: `Xenostar.net is the official website of Bryan Leewood.`,
    author: `Bryan Leewood`,
    siteUrl: `https://xenostar-2020.netlify.com/`,
  },
  plugins: [
    `gatsby-alias-imports`,
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`./src/components/Layout/Layout`),
      },
    },
    {
      resolve: `gatsby-source-datocms`,
      options: {
        apiToken: process.env.DATO_API_TOKEN,
      },
    },
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
            variants: [`400`, `400i`, `700`, `700i`, `900`, `900i`]
          },
          {
            family: `Permanent Marker`,
            subsets: [`latin`],
            variants: [`400`]
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `XENOSTAR 2020`,
        short_name: `XENOSTAR 2020`,
        start_url: `/`,
        background_color: `#6b37bf`,
        theme_color: `#6b37bf`,
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: `standalone`,
        icon: `src/assets/icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-offline`
  ]
}
