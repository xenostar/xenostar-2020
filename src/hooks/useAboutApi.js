import { useStaticQuery, graphql } from 'gatsby'

export const useAboutApi = () => {
  const { datoCmsAbout, allDatoCmsAboutInfo } = useStaticQuery(graphql`
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
      allDatoCmsAboutInfo(sort: { fields: position }) {
        items: nodes {
          backgroundColor {
            hex
          }
          text
          textColor {
            hex
          }
          url
          aboutType
          file {
            url
          }
        }
      }
    }
  `)

  return { ...datoCmsAbout, ...allDatoCmsAboutInfo }
}
