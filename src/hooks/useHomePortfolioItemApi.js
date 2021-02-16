import { useStaticQuery, graphql } from 'gatsby'

export const useHomePortfolioItemApi = () => {
  const { allDatoCmsPortfolioItem } = useStaticQuery(graphql`
    query {
      allDatoCmsPortfolioItem(
        sort: { order: ASC, fields: position }
        limit: 16
      ) {
        items: nodes {
          name
          featuredImage {
            fluid(maxWidth: 450) {
              ...GatsbyDatoCmsFluid
            }
            alt
            title
          }
          slug
        }
      }
    }
  `)

  return allDatoCmsPortfolioItem
}
