import {
  Footer,
  HeaderHome,
  Page,
  PortfolioGridHome,
  PortfolioGridItem
} from 'components'
import { useHomeApi } from 'hooks'

const Index = () => {
  const { items } = useHomeApi()

  return (
    <Page>
      <HeaderHome />
      <PortfolioGridHome>
        {items.map((data, i) => (
          <PortfolioGridItem
            key={data.name}
            area={true}
            image={data.featuredImage}
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
