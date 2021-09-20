import { useStaticQuery, graphql } from 'gatsby'

export const usePortfolioApi = () => {
  const { datoCmsPortfolio, allDatoCmsPortfolioItem } = useStaticQuery(graphql`
    query {
      datoCmsPortfolio {
        seo {
          title
          description
        }
        introText
      }
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

  return { ...datoCmsPortfolio, ...allDatoCmsPortfolioItem }
}
