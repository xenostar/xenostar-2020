import { useStaticQuery, graphql } from 'gatsby'

export const usePortfolioApi = () => {
  const { datoCmsPortfolio } = useStaticQuery(graphql`
    query {
      datoCmsPortfolio {
        seo {
          title
          description
        }
        introText
      }
    }
  `)

  return datoCmsPortfolio
}
