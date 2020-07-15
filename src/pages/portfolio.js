import React from 'react'
import {
  Page,
  SEO,
  Header,
  PortfolioGrid,
  PortfolioItem,
  Footer
} from 'components'
import { usePortfolioApi, usePortfolioItemApi } from 'hooks'

const Portfolio = () => {
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
            name={data.name}
            number={i}
            slug={data.slug}
          />
        ))}
      </PortfolioGrid>
      <Footer />
    </Page>
  )
}

export default Portfolio
