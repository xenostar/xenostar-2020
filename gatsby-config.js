/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
require('dotenv').config()

module.exports = {
  siteMetadata: {
    title: `Xenostar Studios`,
    subTitle: `XS`,
    description: `Xenostar.net is the official website of Bryan Leewood.`,
    author: `Bryan Leewood`,
    // siteUrl: `https://www.xenostar.net`,
    siteUrl: `https://xenostar-2020.netlify.app`
  },
  plugins: [
    /**
     *
     * Dev Plugins
     *
     */
    {
      resolve: `gatsby-plugin-webpack-bundle-analyser-v2`,
      options: {
        disable: process.env.NODE_ENV === 'production',
        devMode: false,
        analyzerPort: 3002
      }
    },

    /**
     *
     * Source Plugins
     *
     */
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              inlineCodeMarker: '›'
            }
          }
        ]
      }
    },
    {
      resolve: `gatsby-source-datocms`,
      options: {
        apiToken: process.env.DATO_API_TOKEN
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/assets/`
      }
    },

    /**
     *
     * Functionality Plugins
     *
     */
    `gatsby-alias-imports`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        displayName: true
      }
    },
    {
      resolve: `gatsby-plugin-webfonts`,
      options: {
        fonts: {
          google: [
            {
              family: `Open Sans`,
              variants: [`400`, `400i`, `700`, `700i`, `800`, `800i`]
            },
            {
              family: `Bebas Neue`,
              variants: [`400`]
            },
            {
              family: `Montserrat`,
              variants: [`700`, `700i`, `800`, `800i`, `900`, `900i`]
            }
          ]
        }
      }
    },
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`./src/components/Layout`)
      }
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
        icon: `src/assets/icon.svg` // This path is relative to the root of the site.
      }
    },
    `gatsby-plugin-offline` // MUST be after gatsby-plugin-manifest
  ]
}
