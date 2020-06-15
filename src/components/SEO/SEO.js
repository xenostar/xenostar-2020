import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet-async'
import { useSeoApi } from 'hooks'

export const SEO = ({
  description = '',
  lang = 'en',
  meta = [],
  title = ''
}) => {
  const { globalSeo: site } = useSeoApi()
  const metaDescription = description || site.fallbackSeo.description
  const metaTitle = title ? `${site.siteName} | ${title}` : site.siteName

  return (
    <Helmet
      htmlAttributes={{ lang }}
      title={title}
      defaultTitle={site.siteName}
      titleTemplate={`${site.siteName} | %s`}
      meta={[
        { name: 'description', content: metaDescription },
        { property: 'og:title', content: metaTitle },
        { property: 'og:description', content: metaDescription },
        { property: 'og:type', content: 'website' },
        { name: 'twitter:card', content: site.fallbackSeo.twitterCard },
        { name: 'twitter:creator', content: site.twitterAccount },
        { name: 'twitter:title', content: metaTitle },
        { name: 'twitter:description', content: metaDescription }
      ].concat(meta)}
    />
  )
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string
}
