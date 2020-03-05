import { useStaticQuery, graphql } from 'gatsby'

export const useSiteMetaData = () => {
  const { site: { siteMetadata } } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
          description
          siteUrl
          subTitle
          title
        }
      }
    }
  `)

  return siteMetadata
}
