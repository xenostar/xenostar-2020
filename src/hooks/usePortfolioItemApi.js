import { useStaticQuery, graphql } from 'gatsby'

export const usePortfolioItemApi = () => {
  const { allDatoCmsPortfolioItem } = useStaticQuery(graphql`
    query {
      allDatoCmsPortfolioItem(sort: {order: ASC, fields: position}, limit: 16) {
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
