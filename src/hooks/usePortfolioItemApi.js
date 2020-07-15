import { useStaticQuery, graphql } from 'gatsby'

export const usePortfolioItemApi = () => {
  const { allDatoCmsPortfolioItem } = useStaticQuery(graphql`
    query {
      allDatoCmsPortfolioItem(
        sort: { order: ASC, fields: position }
        limit: 16
      ) {
        items: nodes {
          name
          description
          link
          tools
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
          slug
          seo {
            title
            description
          }
        }
      }
    }
  `)

  return allDatoCmsPortfolioItem
}
