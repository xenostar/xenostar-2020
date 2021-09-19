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
          gatsbyImageData(width: 450)
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
