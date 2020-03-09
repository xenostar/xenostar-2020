import React from 'react'
import {
  Page,
  SEO,
  Header,
  // Section,
  // Row,
  // Col,
  PortfolioGrid,
  PortfolioItem,
  Footer,
} from 'components'
import { usePortfolioApi, usePortfolioItemApi } from 'hooks'

export default () => {
  const { seo, introText } = usePortfolioApi()
  const { items } = usePortfolioItemApi()

  return (
    <Page>
      <SEO title={seo.title} description={seo.description} />
      <Header title={seo.title} introText={introText} />
      <PortfolioGrid>
        {items.map((data, i) => (
          <PortfolioItem
            key={data.name}
            featuredImage={data.featuredImage}
            image={data.image}
            name={data.name}
            number={i + 1}
            slug={data.slug}
          />
        ))}
      </PortfolioGrid>
      <Footer />
    </Page>
  )
}
