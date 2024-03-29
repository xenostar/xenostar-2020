import {
  Footer,
  Header,
  Page,
  PortfolioGrid,
  PortfolioGridItem,
  SEO
} from 'components'
import { usePortfolioApi } from 'hooks'

const Portfolio = () => {
  const { seo, introText, items } = usePortfolioApi()

  return (
    <Page>
      <SEO title={seo.title} description={seo.description} />
      <Header title={seo.title} introText={introText} />
      <PortfolioGrid>
        {items.map((data, i) => (
          <PortfolioGridItem
            key={data.name}
            image={data.featuredImage}
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
