import React from 'react'
import { Page, HeaderHome, PortfolioGrid, PortfolioItem, Footer } from 'components'
import { usePortfolioApi } from 'hooks'

export default () => {
  const { items } = usePortfolioApi()

  return (
    <Page>
      <HeaderHome />
      <PortfolioGrid>
        {items.map((data, i) => {
          return (
            <PortfolioItem
              key={i}
              featuredImage={data.featuredImage}
              slug={data.slug}
            />
          )
        })}
      </PortfolioGrid>
      <Footer />
    </Page>
  )
}
