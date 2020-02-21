import { useStaticQuery, graphql } from 'gatsby'

export const useHomeApi = () => {
  const { datoCmsHome } = useStaticQuery(graphql`
    query {
      datoCmsHome {
        seo {
          title
          description
        }
        introText
      }
    }
  `)

  return datoCmsHome
}
