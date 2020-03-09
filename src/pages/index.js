import React from 'react'
import { Page, HeaderHome, PortfolioGridHome, PortfolioItem, Footer } from 'components'
import { usePortfolioItemApi } from 'hooks'

export default () => {
  const { items } = usePortfolioItemApi()

  return (
    <Page>
      <HeaderHome />
      <PortfolioGridHome>
        {items.map((data, i) => (
          <PortfolioItem
            key={data.name}
            area={true}
            featuredImage={data.featuredImage}
            image={data.image}
            name={data.name}
            number={i + 1}
            slug={data.slug}
          />
        ))}
      </PortfolioGridHome>
      <Footer />
    </Page>
  )
}
