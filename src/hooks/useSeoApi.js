import { useStaticQuery, graphql } from 'gatsby'

export const useSeoApi = () => {
  const { datoCmsSite } = useStaticQuery(graphql`
    query {
      datoCmsSite {
        globalSeo {
          siteName
          facebookPageUrl
          twitterAccount
          fallbackSeo {
            title
            description
            twitterCard
          }
        }
      }
    }
  `)

  return datoCmsSite
}
