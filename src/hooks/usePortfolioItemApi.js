import { useStaticQuery, graphql } from 'gatsby'

export const usePortfolioItemApi = () => {
  const { allDatoCmsPortfolioItem } = useStaticQuery(graphql`
    query {
      allDatoCmsPortfolioItem(sort: { order: ASC, fields: position }) {
        items: nodes {
          name
          description
          link
          tools
          image {
            gatsbyImageData(width: 450)
            alt
            title
          }
          featuredImage {
            gatsbyImageData(width: 450)
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
