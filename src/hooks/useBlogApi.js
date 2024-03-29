import { useStaticQuery, graphql } from 'gatsby'

export const useBlogApi = () => {
  const { datoCmsBlog } = useStaticQuery(graphql`
    query {
      datoCmsBlog {
        seo {
          title
          description
        }
        introText
      }
    }
  `)

  return datoCmsBlog
}
