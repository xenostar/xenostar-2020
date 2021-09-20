import { useStaticQuery, graphql } from 'gatsby'

export const useHomeApi = () => {
  const { datoCmsHome, allDatoCmsPortfolioItem } = useStaticQuery(graphql`
    query {
      datoCmsHome {
        seo {
          title
          description
        }
        introText
      }
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

  return { ...datoCmsHome, ...allDatoCmsPortfolioItem }
}
