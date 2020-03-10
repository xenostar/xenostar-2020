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
            name={data.name}
            number={i}
            slug={data.slug}
          />
        ))}
      </PortfolioGridHome>
      <Footer />
    </Page>
  )
}
