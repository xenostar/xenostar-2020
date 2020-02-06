import { useStaticQuery, graphql } from 'gatsby'

export const usePortfolioApi = () => {
  const { allDatoCmsPortfolioItem } = useStaticQuery(graphql`
    query {
      allDatoCmsPortfolioItem(limit: 4) {
        items: nodes {
          name
          description
          tools
          slug
          image {
            fluid(maxWidth: 450) {
              ...GatsbyDatoCmsFluid
            }
            alt
            title
          }
          featuredImage {
            fluid(maxWidth: 450) {
              ...GatsbyDatoCmsFluid
            }
            alt
            title
          }
        }
      }
    }
  `)

  return allDatoCmsPortfolioItem
}
