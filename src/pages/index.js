import {
  Page,
  HeaderHome,
  PortfolioGridHome,
  PortfolioGridItem,
  Footer
} from 'components'
import { useHomePortfolioItemApi } from 'hooks'

const Index = () => {
  const { items } = useHomePortfolioItemApi()

  return (
    <Page>
      <HeaderHome />
      <PortfolioGridHome>
        {items.map((data, i) => (
          <PortfolioGridItem
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

export default Index
