import { useStaticQuery, graphql } from 'gatsby'

export const useAboutApi = () => {
  const { datoCmsAbout } = useStaticQuery(graphql`
    query {
      datoCmsAbout {
        seo {
          title
          description
        }
        introText
      }
    }
  `)

  return datoCmsAbout
}
