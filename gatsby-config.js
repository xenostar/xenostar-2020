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
    siteUrl: `https://www.xenostar.net`
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
              inlineCodeMarker: '›',
              aliases: {
                js: 'javascript'
              }
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

    /**
     *
     * Functionality Plugins
     *
     */
    `gatsby-alias-imports`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
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
              variants: [`700`, `900`]
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
        icon: `src/assets/favicon.svg`, // This path is relative to the root of the site.
        icon_options: {
          purpose: `any maskable`
        }
      }
    },
    `gatsby-plugin-offline` // MUST be after gatsby-plugin-manifest
  ]
}
