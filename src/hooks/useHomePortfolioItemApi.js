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
            gatsbyImageData(width: 600)
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
