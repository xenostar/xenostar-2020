import { useStaticQuery, graphql } from 'gatsby'

export const useAboutApi = () => {
  const { datoCmsAbout } = useStaticQuery(graphql`
    query {
      datoCmsAbout {
        introText
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
