import { useStaticQuery, graphql } from 'gatsby'

export const useAboutApi = () => {
  const { datoCmsAbout } = useStaticQuery(graphql`
    query {
      datoCmsAbout {
        introText
        contentNode {
          childMarkdownRemark {
            html
          }
        }
        photos {
          fluid(maxWidth: 450) {
            ...GatsbyDatoCmsFluid
          }
          alt
          title
        }
        seo {
          title
          description
        }
      }
    }
  `)

  return datoCmsAbout
}
